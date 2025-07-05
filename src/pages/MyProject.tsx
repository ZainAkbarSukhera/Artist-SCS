// src/components/MyProject/MyProject.tsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ImageUploading, { ImageListType } from 'react-images-uploading';
import { AxiosResponse } from 'axios'; // Still needed for type definition, even if not directly used after type guard

// Import Redux actions and types for project slice
import {
  setProjectDetail,
  setProjectImages,
  resetProjectForm,
  ProjectState,
  ProjectImageFile,
} from '../store/projectSlice';

// Import the API service function and S3 uploader
import { addProjectToArtistApi, ProjectPayload, AddedProjectResponseData } from '../api/user'; // Assuming '../api/artwork'
import { uploadFileToS3 } from '../utils/s3Uploader';


// Import UserState for useSelector to get artistId
import { UserState } from '../store/userSlice';

const MyProject = () => {
  const dispatch = useDispatch();

  const projectDetails = useSelector((state: { project: ProjectState }) => state.project);
  const user = useSelector((state: { user: UserState }) => state.user);

  const { projectName, displayedVenue, images } = projectDetails;

  useEffect(() => {
    console.log("[MyProject] Component mounted or state updated.");
    console.log("[MyProject] Current Project Details from Redux:", projectDetails);
    console.log("[MyProject] Current User (Artist) from Redux:", user);
  }, [projectDetails, user]);

  const handleSaveProject = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("[MyProject] 'Save Project' button clicked.");

    const artistId = user._id;
    const token = localStorage.getItem('token');

    console.log("[MyProject] Artist ID:", artistId);
    console.log("[MyProject] Authentication Token Found:", !!token);

    if (!artistId) {
      console.error("[MyProject] Validation Error: Artist ID is missing.");
      alert("Artist ID is missing. Please ensure you are logged in.");
      return;
    }
    if (!token) {
      console.error("[MyProject] Validation Error: Authentication token is missing.");
      alert("Authentication token is missing. Please log in.");
      return;
    }
    if (!projectName.trim()) {
      console.error("[MyProject] Validation Error: Project Name is empty.");
      alert("Please enter a Project Name.");
      return;
    }
    if (!displayedVenue.trim()) {
      console.error("[MyProject] Validation Error: Displayed Venue is empty.");
      alert("Please enter a Displayed Venue.");
      return;
    }
    if (images.length === 0) {
      console.error("[MyProject] Validation Error: No images uploaded.");
      alert("Please upload at least one image for the project.");
      return;
    }

    console.log("[MyProject] All client-side validations passed. Proceeding with S3 upload.");

    try {
      const uploadedImageUrls: string[] = [];
      for (const imageItem of images) {
        if (imageItem.file) {
          console.log(`[MyProject] Attempting to upload file: ${imageItem.file.name}`);
          const { location } = await uploadFileToS3(imageItem.file, 'project_images/');

          if (location) {
            uploadedImageUrls.push(location);
            console.log(`[MyProject] Successfully uploaded ${imageItem.file.name} to S3. URL: ${location}`);
          } else {
            console.warn(`[MyProject] S3 Upload Warning: Failed to upload image: ${imageItem.file.name}. Location was null.`);
            alert(`Failed to upload image: ${imageItem.file.name}. Please try again.`);
            return;
          }
        } else {
            console.warn(`[MyProject] Skipping image item as 'file' property is missing:`, imageItem);
        }
      }
      console.log("[MyProject] All images processed. Uploaded URLs:", uploadedImageUrls);

      const payload: ProjectPayload = {
        projectName,
        displayedVenue,
        projectImages: uploadedImageUrls,
      };

      console.log("[MyProject] Prepared payload for backend API:", payload);

      console.log("[MyProject] Calling addProjectToArtistApi...");
      const response = await addProjectToArtistApi(artistId, payload, token);

      // --- NEW FIX: Implement a type guard to differentiate between success and error responses ---
      // Type guard function: checks if the response is an AxiosResponse (i.e., not just a { message: string } error object)
      const isAxiosSuccessResponse = (res: typeof response): res is AxiosResponse<AddedProjectResponseData> => {
          return (res as AxiosResponse).status !== undefined && (res as AxiosResponse).data !== undefined;
      };

      if (isAxiosSuccessResponse(response) && response.status === 200 && response.data && response.data.message) {
        // TypeScript now knows 'response' is of type AxiosResponse<AddedProjectResponseData> here
        console.log("[MyProject] API call successful. Full Axios Response:", response);
        console.log("[MyProject] API call successful. Server Data:", response.data);
        console.log("[MyProject] API call successful. Server Message:", response.data.message);

        alert(`Project saved successfully: ${response.data.message}`);
        dispatch(resetProjectForm());
        console.log("[MyProject] Project form reset.");
      } else if (!isAxiosSuccessResponse(response)) { // This means it's the { message: string } error object
          console.error("[MyProject] API call failed with custom error message:", response.message);
          alert(`Error saving project: ${response.message}`);
      }
      else {
        // This 'else' block catches cases where it's an AxiosResponse but status isn't 200
        // or response.data/response.data.message is unexpectedly missing (though the backend should prevent this for 200 OK)
        console.error("[MyProject] API call failed or response structure unexpected for success:", response);
        alert(`An unexpected error occurred during project submission. Status: ${response?.status || 'N/A'}. Message: ${response?.data?.message || 'N/A'}`);
      }

    } catch (error: any) {
      // This catch block handles network errors or errors thrown *before* the API function
      // had a chance to return its custom error object.
      console.error("[MyProject] Unexpected Catch Block Error: Failed to save project.", error);
      if (error.response) {
        console.error("[MyProject] Server responded with error status:", error.response.status);
        console.error("[MyProject] Server error data:", error.response.data);
        alert(`Error saving project: ${error.response.data.message || "An unexpected error occurred."}`);
      } else if (error.request) {
        console.error("[MyProject] No response received from server:", error.request);
        alert("Error: No response received from the server. Please check your network connection.");
      } else {
        console.error("[MyProject] Error setting up request:", error.message);
        alert(`Error setting up request: ${error.message || "An unexpected error occurred."}`);
      }
    }
  };

  const MAX_PROJECT_IMAGES = 3;
  const MIN_PROJECT_IMAGES = 1;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-xl font-montserrat-regular text-yankees-blue mb-6">Add New Project</h1>

      <section className="mb-10">
        <h2 className="text-xl font-montserrat-regular text-yankees-blue mb-4">Project Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="projectName" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">
              PROJECT NAME
            </label>
            <input
              type="text"
              id="projectName"
              value={projectName}
              onChange={(e) => {
                dispatch(setProjectDetail({ field: 'projectName', value: e.target.value }));
                console.log("[MyProject] Project Name changed to:", e.target.value);
              }}
              className="form-input border border-gray-300 rounded-md w-full font-montserrat-light text-yankees-blue"
            />
          </div>

          <div>
            <label htmlFor="displayedVenue" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">
              DISPLAYED VENUE
            </label>
            <input
              type="text"
              id="displayedVenue"
              value={displayedVenue}
              onChange={(e) => {
                dispatch(setProjectDetail({ field: 'displayedVenue', value: e.target.value }));
                console.log("[MyProject] Displayed Venue changed to:", e.target.value);
              }}
              className="form-input border border-gray-300 rounded-md w-full font-montserrat-light text-yankees-blue"
            />
          </div>
        </div>
      </section>

      <section className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <label className='text-yankees-blue font-montserrat-regular '>
            Upload Images (min {MIN_PROJECT_IMAGES}, max {MAX_PROJECT_IMAGES})
          </label>
          {images.length > 0 && (
            <button
              type="button"
              className="text-red-600 hover:text-red-800 text-sm font-montserrat-regular"
              title="Clear All Images"
              onClick={() => {
                dispatch(setProjectImages([]));
                console.log("[MyProject] All images cleared.");
              }}
            >
              Clear All
            </button>
          )}
        </div>

        <div className="border border-gray-300 rounded-md overflow-hidden">
          <ImageUploading
            multiple
            value={images as ImageListType}
            onChange={(imageList) => {
              dispatch(setProjectImages(imageList as ProjectImageFile[]));
              console.log("[MyProject] Image list updated. Current image count:", imageList.length);
            }}
            maxNumber={MAX_PROJECT_IMAGES}
            dataURLKey="dataURL"
          >
            {({ imageList, onImageUpload, onImageRemove }) => (
              <div className="upload__image-wrapper">
                <button
                  type="button"
                  className="w-full py-2 px-3 bg-white text-yankees-blue font-montserrat-light text-left
                             hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                             transition duration-200 cursor-pointer"
                  onClick={() => {
                    onImageUpload();
                    console.log("[MyProject] 'Click or Drop Images Here / Add More Images' button clicked.");
                  }}
                  disabled={imageList.length >= MAX_PROJECT_IMAGES}
                >
                  {imageList.length === 0 ? 'Click or Drop Images Here' : 'Add More Images'}
                </button>

                {imageList.length > 0 && (
                  <div className="p-3 grid gap-4 sm:grid-cols-3 grid-cols-1 border-t border-gray-200 bg-gray-50">
                    {imageList.map((image, index) => (
                      <div key={index} className="relative border border-gray-200 rounded-md shadow-sm overflow-hidden group">
                        <img src={image.dataURL} alt={`Project work ${index + 1}`} className="w-full h-32 object-cover rounded-t-md" />
                        <div className="p-2 bg-gray-50 flex justify-between items-center rounded-b-md text-sm font-montserrat-light text-yankees-blue">
                          <span>Image {index + 1}</span>
                          <button
                            type="button"
                            className="text-red-500 hover:text-red-700 font-semibold transition duration-200"
                            onClick={() => {
                              onImageRemove(index);
                              console.log(`[MyProject] Image at index ${index} removed.`);
                            }}
                          >
                            Remove
                          </button>
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button
                            type="button"
                            className="text-white bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md text-sm"
                            onClick={() => {
                              onImageRemove(index);
                              console.log(`[MyProject] Image at index ${index} deleted via overlay button.`);
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </ImageUploading>
          {images.length === 0 && (
            <div className="p-4 flex justify-center items-center h-8 bg-gray-100 rounded-b-md border-t border-gray-200">
                <img src="/assets/images/file-preview.svg" className="max-w-xs w-full" alt="No project selected" />
            </div>
          )}
        </div>
      </section>

      <div className="text-center mt-6">
        <button
          onClick={handleSaveProject}
          className="bg-yankees-blue text-white py-2 px-6 rounded-md hover:bg-yankees-blue w-full font-montserrat-light"
        >
          Save Project
        </button>
      </div>
    </div>
  );
};

export default MyProject;