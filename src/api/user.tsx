// // In your TypeScript Express backend (e.g., /routes/user.ts)
// import express from "express";
// // import cors from "cors";
// const cors = require("cors");
// const router = express.Router();

// const app = express();


// app.use(cors({ origin: "https://localhost:5173", credentials: true }));


// router.post("/sync-user", async (req, res) => {
//   const {   fullNameEnglish,
//       fullNameArabic,
//       username,
//       email,
//       mobileNumber,
//       password,
//       role,
//       country,
//       city,
//       interests,
//       profilePicture,
//       } = req.body;

//   try {
//     // Save or update user info in the dashboard DB
//     // Optional: Validate input
//     console.log("Received user from SCS:", req.body);

//     // Logic to store in DB (e.g., Prisma or Mongoose if you're using MongoDB here)
//     return res.status(201).json({
//     message: "User synced successfully",
//     user: {
//       fullNameEnglish,
//       fullNameArabic,
//       username,
//       email,
//       mobileNumber,
//       role,
//       country,
//       city,
//       interests,
//       profilePicture,
//     },
//   });
//   } catch (error) {
//     return res.status(500).json({ error: "Failed to sync user" });
//   }
// });

// export default router;
////////////////////////////////////////////////////////////////////////////////////////////
// import axios, { AxiosError, AxiosResponse } from "axios";

// // Define the expected data structure for login/signup payload
// export interface AuthPayload {
//   fullNameEnglish?: string;
//   fullNameArabic?: string;
//   username: string;
//   email: string;
//   password: string;
//   mobileNumber?: string;
//   country?: string;
//   city?: string;
//   interests?: string[];
//   role?: string;
//   profilePicture?: string;
// }

// // Define a generic response structure
// interface ApiResponse<T> {
//   data?: T;
//   message?: string;
//   token?: string;
// }

// // Create axios instance
// const api = axios.create({
//   baseURL: "http://localhost:3001/v1/user",
//   withCredentials: true,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // Login function
// export const login = async (
//   data: Pick<AuthPayload, "email" | "password">
// ): Promise<AxiosResponse<ApiResponse<any>> | { message: string }> => {
//   try {
//     const response = await api.post<ApiResponse<any>>("/login", data);
//     return response;
//   } catch (error) {
//     const err = error as AxiosError<{ message: string }>;
//     return err.response?.data ?? { message: "Login failed. Server error." };
//   }
// };

// user.tsx

/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import axios, { AxiosError, AxiosResponse } from "axios";

// // Define the expected data structure for login/signup payload
// export interface AuthPayload {
//   fullNameEnglish?: string;
//   fullNameArabic?: string;
//   username: string;
//   email: string;
//   password: string;
//   mobileNumber?: string;
//   country?: string;
//   city?: string;
//   interests?: string[];
//   role?: string;
//   profilePicture?: string;
//   fieldOfExpertise?: string;
// }

// // Define the shape of the user data returned by the API within the 'user' key
// export interface SocialMediaLinks {
//   instagram?: string;
//   behance?: string;
//   // twitter?: string; // Don't forget Twitter!
//   linkedin?: string;
//   facebook?: string;
// }

// export interface ApiUserData {
//   nationalId?: string;
//   biographyEnglish: string;
//   biographyArabic: string;
//   attendedWorkshops?: string[];
//   city: string;
//   country: string;
//   createdAt?: string;
//   email: string;
//   favArtMarket?: string[];
//   favProjects?: string[];
//   following?: string[];
//   fullNameArabic: string;
//   fullNameEnglish: string;
//   interests: string[];
//   mobileNumber: string;
//   notificationsSettings?: { email: boolean; inApp: boolean };
//   password?: string;
//   profilePicture: string | null;
//   purchaseHistory?: string[];
//   role: string;
//   socialMediaLinks?: SocialMediaLinks; // Added socialMediaLinks
//   updatedAt?: string;
//   username: string;
//   wishlist?: string[];
//   fieldOfExpertise?: string;
//   __v?: number;
//   _id?: string;
// }

// // Define the specific success response data structure for login
// // This directly represents what your API returns in its JSON body
// export interface LoginSuccessData {
//   token: string;
//   user: ApiUserData;
//   message?: string; // Add if your API sends a 'message' at this top level as well
// }

// export interface AuthSuccessData { // Renamed from LoginSuccessData to be more general
//   token: string;
//   user: ApiUserData;
//   message?: string; // If your API sends a 'message' at this top level
// }

// export interface UpdatePayload {
//   fullNameEnglish?: string;
//   fullNameArabic?: string;
//   username?: string;
//   email?: string;
//   mobileNumber?: string;
//   country?: string;
//   city?: string;
//   interests?: string[];
//   role?: string;
//   profilePicture?: string; // If sending URL
//   socials?: { // Assuming you want to save these too
//     LinkedIn?: string;
//     Behance?: string;
//     Facebook?: string;
//     Instagram?: string;
//   };
//   // Add profilePictureFile for FormData approach
//   profilePictureFile?: File;
// }

// export interface UpdateSettingsPayload {
//   email?: string;
//   password?: string;
//   notificationsSettings?: {
//     email?: boolean;
//     inApp?: boolean;
//   };
//   // isPublic?: boolean; // If you add profile visibility to schema
// }

// // Create axios instance
// const api = axios.create({
//   baseURL: "http://localhost:3001/v1/user",
//   withCredentials: true,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // Login function
// export const login = async (
//   data: Pick<AuthPayload, "email" | "password">
// ): Promise<AxiosResponse<LoginSuccessData> | { message: string }> => {
//   try {
//     // Axios response.data will directly be of type LoginSuccessData
//     const response = await api.post<LoginSuccessData>("/login", data);
//     return response;
//   } catch (error) {
//     const err = error as AxiosError<{ message: string }>;
//     // If the error response itself has a 'data' property with a 'message'
//     return err.response?.data?.message ? { message: err.response.data.message } : { message: "Login failed. Server error." };
//   }
// };

// // Signup function
// // export const signup = async (
// //   data: AuthPayload
// // ): Promise<AxiosResponse<ApiResponse<any>> | { message: string }> => {
// //   try {
// //     const response = await api.post<ApiResponse<any>>("/create", data);
// //     return response;
// //   } catch (error) {
// //     const err = error as AxiosError<{ message: string }>;
// //     return err.response?.data ?? { message: "Signup failed. Server error." };
// //   }
// // };

// export const signup = async (
//   data: AuthPayload
// ): Promise<AxiosResponse<AuthSuccessData> | { message: string }> => { // Expect AuthSuccessData
//   try {
//     // Axios response.data will directly be of type AuthSuccessData
//     const response = await api.post<AuthSuccessData>("/create", data);
//     return response;
//   } catch (error) {
//     const err = error as AxiosError<{ message: string }>;
//     // If the error response itself has a 'data' property with a 'message'
//     return err.response?.data?.message ? { message: err.response.data.message } : { message: "Signup failed. Server error." };
//   }
// };

// // Update User Profile function
// export const updateUserProfile = async (
//   userId: string,
//   data: FormData // Use FormData for file uploads
// ): Promise<AxiosResponse<AuthSuccessData> | { message: string }> => {
//   try {
//     // Note: Axios automatically sets Content-Type to multipart/form-data for FormData
//     // You might need to adjust the baseURL if your update endpoint is different
//     const response = await api.patch<AuthSuccessData>(`/update/${userId}`, data);
//     return response;
//   } catch (error) {
//     const err = error as AxiosError<{ message: string }>;
//     // More robust error message extraction
//     return err.response?.data?.message ? { message: err.response.data.message } : { message: "Profile update failed. Server error." };
//   }
// };


// export const updateUserSettings = async (userId: string, data: UpdateSettingsPayload) => {
//   try {
//     const response = await api.patch(`/update/${userId}`, data);
//     console.log("Backend update settings response:", response.data);
//     return response.data;
//   } catch (error: any) {
//     console.error("Error in updateUserSettings API call:", error);
//     throw error.response?.data || error.message;
//   }
// };

//////////////////////////////////////////////////////////////////////////////////////////////

// import axios, { AxiosError, AxiosResponse } from "axios";

// // Define the expected data structure for login/signup payload
// export interface AuthPayload {
//   fullNameEnglish?: string;
//   fullNameArabic?: string;
//   username: string;
//   email: string;
//   password: string;
//   mobileNumber?: string;
//   country?: string;
//   city?: string;
//   interests?: string[];
//   role?: string;
//   profilePicture?: string | null; // Allow null for profile picture in signup/auth payload
//   fieldOfExpertise?: string;
//   biographyEnglish?: string; // Add if these can be sent during auth (signup)
//   biographyArabic?: string; // Add if these can be sent during auth (signup)
//   nationalId?: string; // Add if these can be sent during auth (signup)
//   socialMediaLinks?: SocialMediaLinks; // Add if social links can be sent during auth (signup)
//   website?: string; // ADDED: Website field
// }

// // Define the shape of social media links
// export interface SocialMediaLinks {
//   instagram?: string;
//   behance?: string;
//   linkedin?: string;
//   facebook?: string;
//   twitter?: string; // Assuming you might add this to the frontend later
// }

// // Define the shape of the user data returned by the API within the 'user' key
// export interface ApiUserData {
//   _id: string; // Assuming _id is always present for a returned user
//   fullNameEnglish: string;
//   fullNameArabic: string;
//   username: string;
//   email: string;
//   mobileNumber: string;
//   country: string;
//   city: string;
//   biographyEnglish: string;
//   biographyArabic: string;
//   nationalId: string;
//   profilePicture: string | null; // Explicitly string or null
//   role: string;
//   interests: string[];
//   socialMediaLinks: SocialMediaLinks; // SocialMediaLinks directly as a property
//   website?: string; // <-- ADDED: Website field
//   attendedWorkshops?: string[];
//   favArtMarket?: string[];
//   favProjects?: string[];
//   following?: string[];
//   notificationsSettings?: { email: boolean; inApp: boolean };
//   purchaseHistory?: string[];
//   wishlist?: string[];
//   fieldOfExpertise?: string;
//   createdAt?: string;
//   updatedAt?: string;
//   __v?: number;
// }

// // Define the specific success response data structure for authentication (login/signup)
// export interface AuthSuccessData {
//   token: string;
//   user: ApiUserData;
//   message?: string; // If your API sends a 'message' at this top level
// }

// // UpdateSettingsPayload is for specific settings updates, separate from general profile info
// export interface UpdateSettingsPayload {
//   email?: string;
//   password?: string;
//   notificationsSettings?: {
//     email?: boolean;
//     inApp?: boolean;
//   };
//   // isPublic?: boolean; // If you add profile visibility to schema
// }


// // What you send to the API
// export interface ProjectPayload {
//   projectName: string;
//   displayedVenue: string;
//   projectImages: string[];
// }

// // What the server sends back in response.data
// export interface AddedProjectResponseData {
//   message: string;
//   artist: { // Define the artist structure as returned by your backend
//     _id: string;
//     fullNameEnglish: string;
//     fullNameArabic: string;
//     projects: any[]; // You might want a more specific type for Project[] here later
//     notificationsSettings: any;
//     socialMediaLinks: any;
//     // ... any other properties of the artist object your backend returns
//   };
//   // Add other properties if your backend returns more at the 'data' level
// }

// // Now, type the Axios response. Axios responses generally have 'data', 'status', 'statusText', etc.
// // Use Axios's built-in `AxiosResponse` type for this.
// // import { AxiosResponse } from 'axios'; // Make sure you import AxiosResponse

// // export const addProjectToArtistApi = async (
// //   artistId: string,
// //   payload: ProjectPayload,
// //   token: string | null
// // ): Promise<AxiosResponse<AddedProjectResponseData>> => { // <-- Crucial: AxiosResponse wrapping your data type
// //   // ... your Axios.post or Axios.put call
// //   // Example:
// //   // return await axios.post<AddedProjectResponseData>(`/api/artists/${artistId}/projects`, payload, {
// //   //   headers: { Authorization: `Bearer ${token}` }
// //   // });
// // };



// // Create axios instance
// const api = axios.create({
//   baseURL: "http://localhost:3001/v1/user",
//   withCredentials: true,
//   headers: {
//     // Content-Type for JSON, will be overridden to multipart/form-data by Axios for FormData
//     "Content-Type": "application/json",
//   },
// });


// const Projectapi = axios.create({
//   baseURL: "http://localhost:3001/v1/artConnectDirectory",
//   withCredentials: true,
//   headers: {
//     // Content-Type for JSON, will be overridden to multipart/form-data by Axios for FormData
//     "Content-Type": "application/json",
//   },
// });

// /**
//  * Logs in a user.
//  * @param data User's email and password.
//  * @returns AxiosResponse with AuthSuccessData or an error message object.
//  */
// export const login = async (
//   data: Pick<AuthPayload, "email" | "password">
// ): Promise<AxiosResponse<AuthSuccessData> | { message: string }> => {
//   try {
//     const response = await api.post<AuthSuccessData>("/login", data);
//     return response;
//   } catch (error) {
//     const err = error as AxiosError<{ message: string }>;
//     return err.response?.data?.message ? { message: err.response.data.message } : { message: "Login failed. Server error." };
//   }
// };

// /**
//  * Registers a new user.
//  * @param data User's registration details.
//  * @returns AxiosResponse with AuthSuccessData or an error message object.
//  */
// export const signup = async (
//   data: AuthPayload
// ): Promise<AxiosResponse<AuthSuccessData> | { message: string }> => {
//   try {
//     const response = await api.post<AuthSuccessData>("/create", data);
//     return response;
//   } catch (error) {
//     const err = error as AxiosError<{ message: string }>;
//     return err.response?.data?.message ? { message: err.response.data.message } : { message: "Signup failed. Server error." };
//   }
// };

// /**
//  * Updates an existing user's profile.
//  * @param userId The ID of the user to update.
//  * @param data FormData containing updated user information (including file for profile picture).
//  * @returns AxiosResponse with AuthSuccessData or an error message object.
//  */
// export const updateUserProfile = async (
//   userId: string,
//   data: FormData // Correctly use FormData for mixed text and file uploads
// ): Promise<AxiosResponse<AuthSuccessData> | { message: string }> => {
//   try {
//     const response = await api.patch<AuthSuccessData>(`/update/${userId}`, data);
//     return response;
//   } catch (error) {
//     const err = error as AxiosError<{ message: string }>;
//     return err.response?.data?.message ? { message: err.response.data.message } : { message: "Profile update failed. Server error." };
//   }
// };

// /**
//  * Updates specific user settings (e.g., email, password, notifications).
//  * @param userId The ID of the user to update.
//  * @param data Payload containing settings to update.
//  * @returns Response data from the API.
//  */
// export const updateUserSettings = async (userId: string, data: UpdateSettingsPayload) => {
//   try {
//     const response = await api.patch(`/update/${userId}`, data);
//     console.log("Backend update settings response:", response.data);
//     return response.data;
//   } catch (error: any) {
//     console.error("Error in updateUserSettings API call:", error);
//     throw error.response?.data || error.message;
//   }
// };


// /**
//  * Calls the API to add a new project to an artist's profile.
//  *
//  * @param artistId The ID of the artist.
//  * @param projectData The JSON payload for the new project, including S3 URLs for images.
//  * @param token The authentication token.
//  * @returns A Promise resolving to AxiosResponse<AddProjectSuccessData> on success,
//  * or an object with a message property on failure.
//  */

// // export const addProjectToArtistApi = async (
// //   artistId: string,
// //   payload: ProjectPayload,
// //   token: string | null
// // ): Promise<AxiosResponse<AddedProjectResponseData>> => {
// // // export const addProjectToArtistApi = async (
// // //   artistId: string,
// // //   projectData: ProjectPayload,
// // //   token: string
// // // ): Promise<AxiosResponse<AddProjectSuccessData> | { message: string }> => {
// //   try {
// //     const response = await Projectapi.patch<AddProjectSuccessData>(
// //       `/projects/${artistId}`, // NEW ENDPOINT: PATCH /v1/artwork/projects/:artistId
// //       projectData, // Send the JSON payload
// //       {
// //         headers: {
// //           Authorization: `Bearer ${token}`, // Include the authorization token
// //         },
// //       }
// //     );
// //     return response;
// //   } catch (error) {
// //     const err = error as AxiosError<{ message: string }>;
// //     console.error("Error in addProjectToArtistApi call:", err);
// //     return err.response?.data?.message
// //       ? { message: err.response.data.message }
// //       : { message: "Failed to add project. Server error." };
// //   }
// // };

// export const addProjectToArtistApi = async (
//   artistId: string, // Assuming this artistId is used in the URL if adding to a specific artist's collection
//   payload: ProjectPayload, // Renamed from projectData for consistency with signature
//   token: string | null // token can be null, handle this at call site
// ): Promise<AxiosResponse<AddedProjectResponseData> | { message: string }> => {
//   try {
//     // If adding a NEW project, it's typically a POST request.
//     // The endpoint often would not include the project ID, but might include the artistId
//     // if projects are nested under artists, e.g., /artists/:artistId/projects
//     // or just /projects if the artistId is part of the payload or derived on the backend.
//     // Based on your original code's endpoint `/projects/:artistId` and `patch`, it looks like an update.
//     // But your function name is `addProjectToArtistApi`. Let's assume 'add' implies POST.

//     // Let's assume a POST request for adding a project, and `artistId` is part of the path if needed.
//     // If `artistId` is part of the payload and the endpoint is simply `/projects`, adjust accordingly.
//     const response = await Projectapi.post<AddedProjectResponseData>(
//       `/projects/${artistId}`, // Changed to POST for 'add' functionality. Re-verify your backend endpoint.
//       payload, // Using 'payload' as per the function signature
//       {
//         headers: {
//           Authorization: `Bearer ${token}`, // Include the authorization token
//         },
//       }
//     );
//     console.log("API call successful:", response); // Debug log for success
//     return response;
//   } catch (error) {
//     const err = error as AxiosError<{ message: string }>;
//     console.error("Error in addProjectToArtistApi call:", err); // Debug log for error

//     // Determine the error message from the response data, or provide a default
//     const errorMessage = err.response?.data?.message
//       ? err.response.data.message
//       : "Failed to add project. An unexpected server error occurred.";

//     return { message: errorMessage };
//   }
// };

///////////////////////////////////////////////////////////////////////////////////////////////////////


// import axios, { AxiosError, AxiosResponse } from "axios";

// // Define the expected data structure for login/signup payload
// export interface AuthPayload {
//     fullNameEnglish?: string;
//     fullNameArabic?: string;
//     username: string;
//     email: string;
//     password: string;
//     mobileNumber?: string;
//     country?: string;
//     city?: string;
//     interests?: string[];
//     role?: string;
//     profilePicture?: string | null; // Allow null for profile picture in signup/auth payload
//     fieldOfExpertise?: string;
//     biographyEnglish?: string; // Add if these can be sent during auth (signup)
//     biographyArabic?: string; // Add if these can be sent during auth (signup)
//     nationalId?: string; // Add if these can be sent during auth (signup)
//     socialMediaLinks?: SocialMediaLinks; // Add if social links can be sent during auth (signup)
//     website?: string; // ADDED: Website field
//     skills?: string[];       // ADDED: Skills field (array of strings)
//     // RENAMED: 'experience' to 'workDetails'
//     workDetails?: {          // UPDATED: Renamed and now an array of objects
//         role?: string;
//         organization?: string;
//         startDate?: string; // Use string for Date in transit
//         endDate?: string;   // Use string for Date in transit
//         description?: string;
//     }[];
//     budget?: string | number; // ADDED: Budget field (string or number)
//     availability?: string;    // ADDED: Availability field
//     workCategoryClassification?: string; // NEWLY ADDED: Work category classification
// }

// // Define the shape of social media links
// export interface SocialMediaLinks {
//     instagram?: string;
//     behance?: string;
//     linkedin?: string;
//     facebook?: string;
//     twitter?: string;
// }

// // Define the shape of the user data returned by the API within the 'user' key
// export interface ApiUserData {
//     _id: string; // Assuming _id is always present for a returned user
//     fullNameEnglish: string;
//     fullNameArabic: string;
//     username: string;
//     email: string;
//     mobileNumber: string;
//     country: string;
//     city: string;
//     biographyEnglish: string;
//     biographyArabic: string;
//     nationalId: string;
//     profilePicture: string | null; // Explicitly string or null
//     role: string;
//     interests: string[];
//     socialMediaLinks: SocialMediaLinks; // SocialMediaLinks directly as a property
//     website?: string; // <-- ADDED: Website field
//     skills?: string[];       // ADDED: Skills field (array of strings)
//     experience?: string;
//     budget?: string | number; // ADDED: Budget field (string or number)
//     availability?: string;     // ADDED: Availability field
//     workCategoryClassification?: string; // NEWLY ADDED: Work category classification

//     // NEWLY ADDED FIELDS
//     exhibitions?: string[];
//     achievements?: string[];
//     education?: string[];
//     digitalTools?: string[];
//     individualSkills?: string[];
//     experienceDetails?: string[];

//     attendedWorkshops?: string[];
//     favArtMarket?: string[];
//     favProjects?: string[];
//     following?: string[];
//     notificationsSettings?: { email: boolean; inApp: boolean };
//     purchaseHistory?: string[];
//     wishlist?: string[];
//     fieldOfExpertise?: string;
//     createdAt?: string;
//     updatedAt?: string;
//     __v?: number;
// }

// // Define the specific success response data structure for authentication (login/signup)
// export interface AuthSuccessData {
//     token: string;
//     user: ApiUserData;
//     message?: string; // If your API sends a 'message' at this top level
// }

// // UpdateSettingsPayload is for specific settings updates, separate from general profile info
// export interface UpdateSettingsPayload {
//     email?: string;
//     password?: string;
//     notificationsSettings?: {
//         email?: boolean;
//         inApp?: boolean;
//     };
//     // isPublic?: boolean; // If you add profile visibility to schema
// }


// // What you send to the API
// export interface ProjectPayload {
//     projectName: string;
//     displayedVenue: string;
//     projectImages: string[];
// }

// // What the server sends back in response.data
// export interface AddedProjectResponseData {
//     message: string;
//     artist: { // Define the artist structure as returned by your backend
//         _id: string;
//         fullNameEnglish: string;
//         fullNameArabic: string;
//         projects: any[]; // You might want a more specific type for Project[] here later
//         notificationsSettings: any;
//         socialMediaLinks: any;
//         // ... any other properties of the artist object your backend returns
//     };
//     // Add other properties if your backend returns more at the 'data' level
// }

// // Create axios instance
// const api = axios.create({
//     baseURL: "http://localhost:3001/v1/user",
//     withCredentials: true,
//     headers: {
//         "Content-Type": "application/json",
//     },
// });


// const Projectapi = axios.create({
//     baseURL: "http://localhost:3001/v1/artConnectDirectory",
//     withCredentials: true,
//     headers: {
//         "Content-Type": "application/json",
//     },
// });

// /**
//  * Logs in a user.
//  * @param data User's email and password.
//  * @returns AxiosResponse with AuthSuccessData or an error message object.
//  */
// export const login = async (
//     data: Pick<AuthPayload, "email" | "password">
// ): Promise<AxiosResponse<AuthSuccessData> | { message: string }> => {
//     try {
//         const response = await api.post<AuthSuccessData>("/login", data);
//         return response;
//     } catch (error) {
//         const err = error as AxiosError<{ message: string }>;
//         return err.response?.data?.message ? { message: err.response.data.message } : { message: "Login failed. Server error." };
//     }
// };

// /**
//  * Registers a new user.
//  * @param data User's registration details.
//  * @returns AxiosResponse with AuthSuccessData or an error message object.
//  */
// export const signup = async (
//     data: AuthPayload
// ): Promise<AxiosResponse<AuthSuccessData> | { message: string }> => {
//     try {
//         const response = await api.post<AuthSuccessData>("/create", data);
//         return response;
//     } catch (error) {
//         const err = error as AxiosError<{ message: string }>;
//         return err.response?.data?.message ? { message: err.response.data.message } : { message: "Signup failed. Server error." };
//     }
// };

// /**
//  * Updates an existing user's profile.
//  * @param userId The ID of the user to update.
//  * @param data FormData containing updated user information (including file for profile picture).
//  * @returns AxiosResponse with AuthSuccessData or an error message object.
//  */
// export const updateUserProfile = async (
//     userId: string,
//     data: FormData // Correctly use FormData for mixed text and file uploads
// ): Promise<AxiosResponse<AuthSuccessData> | { message: string }> => {
//     try {
//         console.log("I am here 1.");
//         const response = await api.patch<AuthSuccessData>(`/update/${userId}`, data);
//         console.log("Response is here 2. ", response);
//         return response;
//     } catch (error) {
//         const err = error as AxiosError<{ message: string }>;
//         return err.response?.data?.message ? { message: err.response.data.message } : { message: "Profile update failed. Server error." };
//     }
// };

// /**
//  * Updates specific user settings (e.g., email, password, notifications).
//  * @param userId The ID of the user to update.
//  * @param data Payload containing settings to update.
//  * @returns Response data from the API.
//  */
// export const updateUserSettings = async (userId: string, data: UpdateSettingsPayload) => {
//     try {
//         const response = await api.patch(`/update/${userId}`, data);
//         console.log("Backend update settings response:", response.data);
//         return response.data;
//     } catch (error: any) {
//         console.error("Error in updateUserSettings API call:", error);
//         throw error.response?.data || error.message;
//     }
// };


// /**
//  * Calls the API to add a new project to an artist's profile.
//  *
//  * @param artistId The ID of the artist.
//  * @param projectData The JSON payload for the new project, including S3 URLs for images.
//  * @param token The authentication token.
//  * @returns A Promise resolving to AxiosResponse<AddProjectSuccessData> on success,
//  * or an object with a message property on failure.
//  */

// export const addProjectToArtistApi = async (
//     artistId: string, // Assuming this artistId is used in the URL if adding to a specific artist's collection
//     payload: ProjectPayload, // Renamed from projectData for consistency with signature
//     token: string | null // token can be null, handle this at call site
// ): Promise<AxiosResponse<AddedProjectResponseData> | { message: string }> => {
//     try {
//         const response = await Projectapi.post<AddedProjectResponseData>(
//             `/projects/${artistId}`, // Changed to POST for 'add' functionality. Re-verify your backend endpoint.
//             payload, // Using 'payload' as per the function signature
//             {
//                 headers: {
//                     Authorization: `Bearer ${token}`, // Include the authorization token
//                 },
//             }
//         );
//         console.log("API call successful:", response); // Debug log for success
//         return response;
//     } catch (error) {
//         const err = error as AxiosError<{ message: string }>;
//         console.error("Error in addProjectToArtistApi call:", err); // Debug log for error

//         // Determine the error message from the response data, or provide a default
//         const errorMessage = err.response?.data?.message
//             ? err.response.data.message
//             : "Failed to add project. An unexpected server error occurred.";

//         return { message: errorMessage };
//     }
// };



import axios, { AxiosError, AxiosResponse } from "axios";

// Define the expected data structure for login/signup payload
export interface AuthPayload {
    fullNameEnglish?: string;
    fullNameArabic?: string;
    username: string;
    email: string;
    password: string;
    mobileNumber?: string;
    country?: string;
    city?: string;
    interests?: string[];
    role?: string;
    profilePicture?: string | null; // Allow null for profile picture in signup/auth payload
    fieldOfExpertise?: string;
    biographyEnglish?: string; // Add if these can be sent during auth (signup)
    biographyArabic?: string; // Add if these can be sent during auth (signup)
    nationalId?: string; // Add if these can be sent during auth (signup)
    socialMediaLinks?: SocialMediaLinks; // Add if social links can be sent during auth (signup)
    website?: string; // ADDED: Website field
    skills?: string[];       // ADDED: Skills field (array of strings)
    // RENAMED: 'experience' to 'workDetails'
    workDetails?: {          // UPDATED: Renamed and now an array of objects
        role?: string;
        organization?: string;
        startDate?: string; // Use string for Date in transit
        endDate?: string;   // Use string for Date in transit
        description?: string;
    }[];
    budget?: string | number; // ADDED: Budget field (string or number)
    availability?: string;     // ADDED: Availability field
    workCategoryClassification?: string; // NEWLY ADDED: Work category classification
}

// Define the shape of social media links
export interface SocialMediaLinks {
    instagram?: string;
    behance?: string;
    linkedin?: string;
    facebook?: string;
    twitter?: string;
}

// Define the shape of the user data returned by the API within the 'user' key
export interface ApiUserData {
    _id: string; // Assuming _id is always present for a returned user
    fullNameEnglish: string;
    fullNameArabic: string;
    username: string;
    email: string;
    mobileNumber: string;
    country: string;
    city: string;
    biographyEnglish: string;
    biographyArabic: string;
    nationalId: string;
    profilePicture: string | null; // Explicitly string or null
    role: string;
    interests: string[];
    socialMediaLinks: SocialMediaLinks; // SocialMediaLinks directly as a property
    website?: string; // <-- ADDED: Website field
    skills?: string[];       // ADDED: Skills field (array of strings)
    experience?: string;
    budget?: string | number; // ADDED: Budget field (string or number)
    availability?: string;     // ADDED: Availability field
    workCategoryClassification?: string; // NEWLY ADDED: Work category classification

    // NEWLY ADDED FIELDS
    exhibitions?: string[];
    achievements?: string[];
    education?: string[];
    digitalTools?: string[];
    individualSkills?: string[];
    experienceDetails?: string[];

    attendedWorkshops?: string[];
    favArtMarket?: string[];
    favProjects?: string[];
    following?: string[];
    notificationsSettings?: { email: boolean; inApp: boolean };
    purchaseHistory?: string[];
    wishlist?: string[];
    fieldOfExpertise?: string;
    createdAt?: string;
    updatedAt?: string;
    __v?: number;
}

// Define the specific success response data structure for authentication (login/signup)
export interface AuthSuccessData {
    token: string;
    user: ApiUserData;
    message?: string; // If your API sends a 'message' at this top level
}

// UpdateSettingsPayload is for specific settings updates, separate from general profile info
export interface UpdateSettingsPayload {
    email?: string;
    password?: string;
    notificationsSettings?: {
        email?: boolean;
        inApp?: boolean;
    };
    // isPublic?: boolean; // If you add profile visibility to schema
}


// What you send to the API
export interface ProjectPayload {
    projectName: string;
    displayedVenue: string;
    projectImages: string[];
}

// What the server sends back in response.data
export interface AddedProjectResponseData {
    message: string;
    artist: { // Define the artist structure as returned by your backend
        _id: string;
        fullNameEnglish: string;
        fullNameArabic: string;
        projects: any[]; // You might want a more specific type for Project[] here later
        notificationsSettings: any;
        socialMediaLinks: any;
        // ... any other properties of the artist object your backend returns
    };
    // Add other properties if your backend returns more at the 'data' level
}

// Get the base URL from environment variables
// Use a fallback for safety, though it should always be defined in .env files
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001/v1";


// Create axios instance for user authentication/profile
const api = axios.create({
    baseURL: `${API_BASE_URL}/user`, // Use the environment variable here
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

// Create axios instance for projects (assuming a different base path)
const Projectapi = axios.create({
    baseURL: `${API_BASE_URL}/artConnectDirectory`, // Use the environment variable here
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

/**
 * Logs in a user.
 * @param data User's email and password.
 * @returns AxiosResponse with AuthSuccessData or an error message object.
 */
// export const login = async (
//     data: Pick<AuthPayload, "email" | "password">
// ): Promise<AxiosResponse<AuthSuccessData> | { message: string }> => {
//     try {
//         const response = await api.post<AuthSuccessData>("/login", data);
//         return response;
//     } catch (error) {
//         const err = error as AxiosError<{ message: string }>;
//         return err.response?.data?.message ? { message: err.response.data.message } : { message: "Login failed. Server error." };
//     }
// };

export const login = async (
    data: Pick<AuthPayload, "email" | "password">
): Promise<AxiosResponse<AuthSuccessData> | { message: string }> => {
    // Log the input data (excluding password for security)
    console.log("API CALL - LOGIN: Attempting to log in user.");
    console.log("API CALL - LOGIN: Incoming data (email):", data.email);
    // console.log("API CALL - LOGIN: Incoming data (password):", data.password); // Do NOT log passwords in production!

    try {
        console.log(`API CALL - LOGIN: Sending POST request to ${api.defaults.baseURL}/login with data.`);
        const response = await api.post<AuthSuccessData>("/login", data);
        console.log("API CALL - LOGIN: Received successful response from server.");
        console.log("API CALL - LOGIN: Response status:", response.status);
        console.log("API CALL - LOGIN: Response data (partial, for security):", {
            tokenPresent: !!response.data.token, // Check if token exists
            userPresent: !!response.data.user, // Check if user object exists
            userRole: response.data.user?.role // Log user role if user exists
        });
        return response;
    } catch (error) {
        console.error("API CALL - LOGIN: An error occurred during the login attempt.");
        const err = error as AxiosError<{ message: string }>; // Assert error to AxiosError for more detailed logging

        if (err.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error("API CALL - LOGIN ERROR: Server responded with an error.");
            console.error("API CALL - LOGIN ERROR: Status:", err.response.status);
            console.error("API CALL - LOGIN ERROR: Data:", err.response.data);
            console.error("API CALL - LOGIN ERROR: Headers:", err.response.headers);

            // Return message from server if available, otherwise a generic server error
            return err.response.data?.message
                ? { message: err.response.data.message }
                : { message: `Login failed. Server error: ${err.response.status}` };
        } else if (err.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an http.ClientRequest in node.js
            console.error("API CALL - LOGIN ERROR: No response received from server.");
            console.error("API CALL - LOGIN ERROR: Request details:", err.request);
            return { message: "Login failed. No response from server. Check network connection." };
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error("API CALL - LOGIN ERROR: Error setting up request.");
            console.error("API CALL - LOGIN ERROR: Message:", err.message);
            return { message: `Login failed. Request setup error: ${err.message}` };
        }
    }
};

/**
 * Registers a new user.
 * @param data User's registration details.
 * @returns AxiosResponse with AuthSuccessData or an error message object.
 */
export const signup = async (
    data: AuthPayload
): Promise<AxiosResponse<AuthSuccessData> | { message: string }> => {
    try {
        const response = await api.post<AuthSuccessData>("/create", data);
        return response;
    } catch (error) {
        const err = error as AxiosError<{ message: string }>;
        return err.response?.data?.message ? { message: err.response.data.message } : { message: "Signup failed. Server error." };
    }
};

/**
 * Updates an existing user's profile.
 * @param userId The ID of the user to update.
 * @param data FormData containing updated user information (including file for profile picture).
 * @returns AxiosResponse with AuthSuccessData or an error message object.
 */
export const updateUserProfile = async (
    userId: string,
    data: FormData // Correctly use FormData for mixed text and file uploads
): Promise<AxiosResponse<AuthSuccessData> | { message: string }> => {
    try {
        console.log("I am here 1.");
        const response = await api.patch<AuthSuccessData>(`/update/${userId}`, data);
        console.log("Response is here 2. ", response);
        return response;
    } catch (error) {
        const err = error as AxiosError<{ message: string }>;
        return err.response?.data?.message ? { message: err.response.data.message } : { message: "Profile update failed. Server error." };
    }
};

/**
 * Updates specific user settings (e.g., email, password, notifications).
 * @param userId The ID of the user to update.
 * @param data Payload containing settings to update.
 * @returns Response data from the API.
 */
export const updateUserSettings = async (userId: string, data: UpdateSettingsPayload) => {
    try {
        const response = await api.patch(`/update/${userId}`, data);
        console.log("Backend update settings response:", response.data);
        return response.data;
    } catch (error: any) {
        console.error("Error in updateUserSettings API call:", error);
        throw error.response?.data || error.message;
    }
};


/**
 * Calls the API to add a new project to an artist's profile.
 *
 * @param artistId The ID of the artist.
 * @param payload The JSON payload for the new project, including S3 URLs for images.
 * @param token The authentication token.
 * @returns A Promise resolving to AxiosResponse<AddProjectSuccessData> on success,
 * or an object with a message property on failure.
 */

export const addProjectToArtistApi = async (
    artistId: string, // Assuming this artistId is used in the URL if adding to a specific artist's collection
    payload: ProjectPayload, // Renamed from projectData for consistency with signature
    token: string | null // token can be null, handle this at call site
): Promise<AxiosResponse<AddedProjectResponseData> | { message: string }> => {
    try {
        const response = await Projectapi.post<AddedProjectResponseData>(
            `/projects/${artistId}`, // Changed to POST for 'add' functionality. Re-verify your backend endpoint.
            payload, // Using 'payload' as per the function signature
            {
                headers: {
                    Authorization: `Bearer ${token}`, // Include the authorization token
                },
            }
        );
        console.log("API call successful:", response); // Debug log for success
        return response;
    } catch (error) {
        const err = error as AxiosError<{ message: string }>;
        console.error("Error in addProjectToArtistApi call:", err); // Debug log for error

        // Determine the error message from the response data, or provide a default
        const errorMessage = err.response?.data?.message
            ? err.response.data.message
            : "Failed to add project. An unexpected server error occurred.";

        return { message: errorMessage };
    }
};