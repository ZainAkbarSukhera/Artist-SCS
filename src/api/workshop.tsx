// // src/api/workshopApi.ts

// import axios, { AxiosError, AxiosResponse } from "axios";

// // Interface for the payload sent to the backend createWorkshop API
// // This reflects the structure of your Mongoose Workshop schema,
// // mapping frontend names to backend names where necessary.
// export interface WorkshopPayload {
//   title: string; // Maps from frontend 'title'
//   description: string; // Maps from frontend 'description', note the capital 'D'
//   location: string;
//   date: string; // Assuming YYYY-MM-DD format from input type="date"
//   time: string; // Assuming HH:MM format from input type="time"
//   category: string;
//   skills?: string; // Optional as per schema, but frontend collects it
//   skillLevel?: string; // Optional as per schema, but frontend collects it
//   workshopMode: string;
//   duration: string;
//   language?: string; // Optional as per schema, but frontend collects it
//   certifications?: string; // Optional as per schema, but frontend collects it
//   budget?: string; // Optional as per schema, but frontend collects it
//   priceRange?: string; // Optional as per schema, but frontend collects it
//   // instructorId: string;
//   // instructor is an ObjectId on the backend, will be passed as artistId to the URL or body
//   // icon and type are in the backend schema but not collected by frontend, so omitted from payload
// }

// // Define the success response structure for the createWorkshop API
// export interface CreateWorkshopSuccessData {
//   message: string;
//   workshop: any; // You can define a more specific interface for your Workshop model if needed
// }

// // Create an Axios instance specifically for workshop-related APIs
// const workshopApi = axios.create({
//   baseURL: "http://localhost:3001/v1/artLearn", // **IMPORTANT: Confirm this base URL.**
//   withCredentials: true,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// /**
//  * Calls the API to create a new workshop.
//  *
//  * @param artistId The ID of the artist creating the workshop (maps to backend 'instructor').
//  * @param workshopData The JSON payload for the workshop.
//  * @param token The authentication token for the request.
//  * @returns A Promise resolving to AxiosResponse<CreateWorkshopSuccessData> on success,
//  * or an object with a message property on failure.
//  */
// export const createWorkshopApi = async (
//   instructorId: string,
//   workshopData: WorkshopPayload,
//   token: string
// ): Promise<AxiosResponse<CreateWorkshopSuccessData> | { message: string }> => {
//   console.log("hello jee");
//   try {
//      console.log("into the api function");
//     const response = await workshopApi.post<CreateWorkshopSuccessData>(
//       `/create/${instructorId}`, // Endpoint path: e.g., POST http://localhost:3001/v1/workshop/create/YOUR_ARTIST_ID
//       workshopData, // Send the JSON payload
//       {
//         headers: {
//           Authorization: `Bearer ${token}`, // Include the authorization token
//         },
//       }
//     );
//     console.log("Yeh receive hua hai");
//     return response;
//   } catch (error) {
//     const err = error as AxiosError<{ message: string }>;
//     console.error("Error in createWorkshopApi call:", err);
//     // Extract the error message from the backend response if available
//     return err.response?.data?.message
//       ? { message: err.response.data.message }
//       : { message: "Failed to create workshop. Server error." };
//   }
// };

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // src/api/workshopApi.ts

// import axios, { AxiosError, AxiosResponse } from "axios";

// // Interface for the payload sent to the backend createWorkshop API
// // This reflects the structure of your Mongoose Workshop schema,
// // mapping frontend names to backend names where necessary.
// export interface WorkshopPayload {
//  title: string;
//  description: string; // Corrected: Based on your schema, it's 'description' not 'Description'
//  location: string;
//  date: string; // Assuming YYYY-MM-DD format from input type="date"
//  time: string; // Assuming HH:MM format from input type="time"
//  category: string;
//  skills?: string;
//  skillLevel?: string;
//  workshopMode: string;
//  duration: string;
//  language?: string;
//  certifications?: string;
//  budget?: string;
//  priceRange?: string;
//  // instructor is an ObjectId on the backend, will be passed as artistId to the URL or body

//  // --- NEW FIELDS ADDED HERE ---
//  whoShouldAttend?: string[]; // Array of strings
//  workshopHighlights?: string[]; // Array of strings
//  materialsProvided?: string[]; // Array of strings
//  learningOutcomes?: string[]; // Array of strings
//  certificateDetails?: string;
//  dateDetails?: string;
//  durationDetails?: string;
//  locationDetails?: string;
//  priceDetails?: string;
//  image?: string | null; // For the S3 URL
//  // ----------------------------

//  // icon and type are in the backend schema but not collected by frontend, so omitted from payload
// }

// // Define the success response structure for the createWorkshop API
// export interface CreateWorkshopSuccessData {
//  message: string;
//  workshop: any; // You can define a more specific interface for your Workshop model if needed
// }

// // Create an Axios instance specifically for workshop-related APIs
// const workshopApi = axios.create({
//  baseURL: "http://localhost:3001/v1/artLearn", // **IMPORTANT: Confirm this base URL.**
//  withCredentials: true,
//  headers: {
//   "Content-Type": "application/json",
//  },
// });

// /**
// * Calls the API to create a new workshop.
// *
// * @param instructorId The ID of the artist creating the workshop (maps to backend 'instructor').
// * @param workshopData The JSON payload for the workshop.
// * @param token The authentication token for the request.
// * @returns A Promise resolving to AxiosResponse<CreateWorkshopSuccessData> on success,
// * or an object with a message property on failure.
// */
// export const createWorkshopApi = async (
//  instructorId: string,
//  workshopData: WorkshopPayload,
//  token: string
// ): Promise<AxiosResponse<CreateWorkshopSuccessData> | { message: string }> => {
//  console.log("hello jee");
//  try {
//    console.log("into the api function");
//   const response = await workshopApi.post<CreateWorkshopSuccessData>(
//    `/create/${instructorId}`, // Endpoint path: e.g., POST http://localhost:3001/v1/artLearn/create/YOUR_ARTIST_ID
//    workshopData, // Send the JSON payload
//    {
//     headers: {
//      Authorization: `Bearer ${token}`, // Include the authorization token
//     },
//    }
//   );
//   console.log("Yeh receive hua hai");
//   return response;
//  } catch (error) {
//   const err = error as AxiosError<{ message: string }>;
//   console.error("Error in createWorkshopApi call:", err);
//   // Extract the error message from the backend response if available
//   return err.response?.data?.message
//    ? { message: err.response.data.message }
//    : { message: "Failed to create workshop. Server error." };
//  }
// };

// src/api/workshopApi.ts

import axios, { AxiosError, AxiosResponse } from "axios";

// Interface for the payload sent to the backend createWorkshop API
// This reflects the structure of your Mongoose Workshop schema,
// mapping frontend names to backend names where necessary.
export interface WorkshopPayload {
  title: string;
  description: string; // Corrected: Based on your schema, it's 'description' not 'Description'
  location: string;
  date: string; // Assuming YYYY-MM-DD format from input type="date"
  time: string; // Assuming HH:MM format from input type="time"
  category: string;
  skills?: string;
  skillLevel?: string;
  workshopMode: string;
  duration: string;
  language?: string;
  certifications?: string;
  budget?: string;
  priceRange?: string;
  // instructor is an ObjectId on the backend, will be passed as artistId to the URL or body

  // --- NEW FIELDS ADDED HERE ---
  whoShouldAttend?: string[]; // Array of strings
  workshopHighlights?: string[]; // Array of strings
  materialsProvided?: string[]; // Array of strings
  learningOutcomes?: string[]; // Array of strings
  certificateDetails?: string;
  dateDetails?: string;
  durationDetails?: string;
  locationDetails?: string;
  priceDetails?: string;
  image?: string | null; // For the S3 URL
  // ----------------------------

  // icon and type are in the backend schema but not collected by frontend, so omitted from payload
}

// Define the success response structure for the createWorkshop API
export interface CreateWorkshopSuccessData {
  message: string;
  workshop: any; // You can define a more specific interface for your Workshop model if needed
}

// Get the base URL from environment variables
// Use a fallback for safety, though it should always be defined in .env files
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001/v1";


// Create an Axios instance specifically for workshop-related APIs
const workshopApi = axios.create({
  baseURL: `${API_BASE_URL}/artLearn`, // **IMPORTANT: Confirm this base URL.**
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Calls the API to create a new workshop.
 *
 * @param instructorId The ID of the artist creating the workshop (maps to backend 'instructor').
 * @param workshopData The JSON payload for the workshop.
 * @param token The authentication token for the request.
 * @returns A Promise resolving to AxiosResponse<CreateWorkshopSuccessData> on success,
 * or an object with a message property on failure.
 */
export const createWorkshopApi = async (
  instructorId: string,
  workshopData: WorkshopPayload,
  token: string
): Promise<AxiosResponse<CreateWorkshopSuccessData> | { message: string }> => {
  console.log("hello jee");
  try {
    console.log("into the api function");
    const response = await workshopApi.post<CreateWorkshopSuccessData>(
      `/create/${instructorId}`, // Endpoint path: e.g., POST http://localhost:3001/v1/artLearn/create/YOUR_ARTIST_ID
      workshopData, // Send the JSON payload
      {
        headers: {
          Authorization: `Bearer ${token}`, // Include the authorization token
        },
      }
    );
    console.log("Yeh receive hua hai");
    return response;
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    console.error("Error in createWorkshopApi call:", err);
    // Extract the error message from the backend response if available
    return err.response?.data?.message
      ? { message: err.response.data.message }
      : { message: "Failed to create workshop. Server error." };
  }
};