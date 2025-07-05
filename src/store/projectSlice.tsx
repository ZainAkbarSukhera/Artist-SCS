// src/store/projectSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ImageListType } from 'react-images-uploading'; // For the image list type

// Define the shape of a single project image (what react-images-uploading gives us)
export interface ProjectImageFile {
  file: File;
  dataURL: string; // Base64 representation for preview
}

// Define the shape of the project form state
export interface ProjectState {
  projectName: string;
  displayedVenue: string;
  images: ProjectImageFile[]; // This will hold File and dataURL for preview
  // You might want to add description, year, etc. if you expand the form later
}

const initialState: ProjectState = {
  projectName: '',
  displayedVenue: '',
  images: [],
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    // Action to set individual project fields (name, venue)
    setProjectDetail: (state, action: PayloadAction<{ field: keyof Omit<ProjectState, 'images'>; value: string }>) => {
      // Omit 'images' as it's handled by setProjectImages
      const { field, value } = action.payload;
      if (field in state) { // Basic type-safe check
        (state as any)[field] = value;
      }
    },
    // Action to set the entire images array (from react-images-uploading)
    setProjectImages: (state, action: PayloadAction<ProjectImageFile[]>) => {
      state.images = action.payload;
    },
    // Action to reset the form
    resetProjectForm: (state) => {
      state.projectName = initialState.projectName;
      state.displayedVenue = initialState.displayedVenue;
      state.images = initialState.images;
    },
  },
});

export const { setProjectDetail, setProjectImages, resetProjectForm } = projectSlice.actions;

export default projectSlice.reducer;