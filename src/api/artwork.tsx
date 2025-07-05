// // src/services/artworkApi.ts
// import axios, { AxiosError, AxiosResponse } from "axios";

// // Interface for each image object stored in the Artwork schema
// export interface ArtworkImage {
//   url: string;
//   altText?: string;
// }



// // Interface for the payload sent to the backend createArtwork API
// // This reflects the structure of your Artwork schema fields, with S3 URLs
// export interface ArtworkPayload {
//   title?: string; // Schema has title, frontend doesn't collect yet. Added as optional.
//   description: string;
//   format: string;
//   size: string;
//   price: number; // Frontend collects as string, will convert to number
//   images: ArtworkImage[]; // Array of image objects with URL and altText
//   availability: string;
//   yearOfCreation: number; // Frontend collects as string, will convert to number
//   displayOption: string; // Matches schema field name
//   category: string;
//   location: string;
//   style: string;
//   theme: string; // Matches schema field name
//   intermediary: string; // Matches schema field name
//   framingOptions: string;
//   shipping: string;
//   rarity: string;
//   signatureByArtist: string;
//   certifications?: string; // Text description of certifications
//   certificatesUrl?: string[]; // Array of S3 URLs for certificate files
//   timestampRegistration?: string; // S3 URL for primary timestamp file
//   saipRegistration?: string; // S3 URL for secondary timestamp file (if applicable)
// }

// // Define the success response structure for the createArtwork API
// export interface CreateArtworkSuccessData {
//   message: string;
//   artwork: any; // You can define a more specific interface for your Artwork model if needed
//   artMarket: any; // You can define a more specific interface for your ArtMarket model if needed
// }

// // Interface for a single service object that will be sent to the backend
// export interface ServicePayload {
//   serviceType: string;
//   serviceTitle: string;
//   deliveryTime: string;
//   serviceCost: string;
// }


// // Define the success response structure for the updateServices API
// export interface UpdateServicesSuccessData {
//   message: string;
//   // Assuming the backend returns the updated profile object
//   profile: {
//     _id: string;
//     services: ServicePayload[]; // The updated array of services
//     // ... any other profile fields you expect
//   };
// }



// // Create an Axios instance specifically for artwork-related APIs
// const artworkApi = axios.create({
//   baseURL: "http://localhost:3001/v1/artwork", // **IMPORTANT: Confirm this base URL. It should be the root for your artwork endpoints.**
//   withCredentials: true,
//   headers: {
//     "Content-Type": "application/json", // We are sending JSON, not FormData, after S3 upload
//   },
// });

// /**
//  * Calls the API to create a new artwork. Files are assumed to be pre-uploaded to S3,
//  * and their URLs are included in the artworkData payload.
//  *
//  * @param artistId The ID of the artist creating the artwork.
//  * @param artworkData The JSON payload for the artwork, including S3 URLs for files.
//  * @param token The authentication token for the request.
//  * @returns A Promise resolving to AxiosResponse<CreateArtworkSuccessData> on success,
//  * or an object with a message property on failure.
//  */
// export const createArtworkApi = async (
//   artistId: string,
//   artworkData: ArtworkPayload,
//   token: string
// ): Promise<AxiosResponse<CreateArtworkSuccessData> | { message: string }> => {
//   console.log("hello jee");
//   try {
//     console.log("into the api function");
//     const response = await artworkApi.post<CreateArtworkSuccessData>(
//       `/create/${artistId}`, // Endpoint path: e.g., POST http://localhost:3001/v1/artwork/create/YOUR_ARTIST_ID
//       artworkData, // Send the JSON payload
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
//     console.error("Error in createArtworkApi call:", err);
//     // Extract the error message from the backend response if available
//     return err.response?.data?.message
//       ? { message: err.response.data.message }
//       : { message: "Failed to create artwork. Server error." };
//   }
// };

// export const updateProfileServicesApi = async (
//   artistId: string,
//   servicesData: ServicePayload[], // Expects an array of services
//   token: string
// ): Promise<AxiosResponse<UpdateServicesSuccessData> | { message: string }> => {
//   try {
//     const response = await artworkApi.patch<UpdateServicesSuccessData>(
//       `/create/services/${artistId}`, // Matches your backend route: PATCH /v1/artwork/create/services/:artistId
//       { services: servicesData }, // Send the array inside a 'services' key as expected by backend req.body.services
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     return response;
//   } catch (error) {
//     const err = error as AxiosError<{ message: string }>;
//     console.error('Error in updateProfileServicesApi call:', err);
//     return err.response?.data?.message
//       ? { message: err.response.data.message }
//       : { message: 'Failed to update services. Server error.' };
//   }
// };

//////////////////////////////////////////////////////////////////////////////////////////

// src/services/artworkApi.ts
// import axios, { AxiosError, AxiosResponse } from "axios";

// export interface ArtworkImage {
//     url: string;
//     altText?: string;
// }

// // Interface for the payload sent to the backend createArtwork API
// export interface ArtworkPayload {
//     title: string; // Made required based on frontend validation
//     description: string;
//     format: string;
//     size: string; // Can be a descriptive string like "Small (Under...)" or "10x12cm"
//     price: number;
//     images: ArtworkImage[];
//     availability: string;
//     yearOfCreation: number;
//     displayOption: string;
//     category: string;
//     style: string;
//     theme: string;

//     // Conditional fields - marked as optional
//     location?: string;
//     intermediary?: string;
//     framingOptions?: string;
//     shipping?: string;
//     rarity?: string;
//     licensing?: string;
//     edition?: string;
//     signatureByArtist?: string; // Optional based on displayOption

//     // Files uploaded to S3, these are the URLs
//     certifications?: string[]; // Array of selected certification *strings* (e.g., "Certificate of Authenticity")
//     certificatesUrl?: string[]; // Array of S3 URLs for certificate *files*
//     saipRegistration?: string; // S3 URL for the SAIP registration *file*
// }

// // Define the success response structure for the createArtwork API
// export interface CreateArtworkSuccessData {
//     message: string;
//     artwork: any; // More specific interface for your Artwork model would be better here
//     artMarket: any; // More specific interface for your ArtMarket model would be better here
// }

// // Interface for a single service object that will be sent to the backend
// export interface ServicePayload {
//     serviceType: string;
//     serviceTitle: string;
//     deliveryTime: string;
//     serviceCost: string;
// }

// // Define the success response structure for the updateServices API
// export interface UpdateServicesSuccessData {
//     message: string;
//     profile: {
//         _id: string;
//         services: ServicePayload[];
//     };
// }

// // Create an Axios instance specifically for artwork-related APIs
// const artworkApi = axios.create({
//     baseURL: "http://localhost:3001/v1/artwork",
//     withCredentials: true,
//     headers: {
//         "Content-Type": "application/json",
//     },
// });

// export const createArtworkApi = async (
//     artistId: string,
//     artworkData: ArtworkPayload, // Use the defined payload interface
//     token: string
// ): Promise<AxiosResponse<CreateArtworkSuccessData> | { message: string }> => {
//     try {
//         const response = await artworkApi.post<CreateArtworkSuccessData>(
//             `/create/${artistId}`,
//             artworkData,
//             {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             }
//         );
//         return response;
//     } catch (error) {
//         const err = error as AxiosError<{ message: string }>;
//         console.error("Error in createArtworkApi call:", err);
//         return err.response?.data?.message
//             ? { message: err.response.data.message }
//             : { message: "Failed to create artwork. Server error." };
//     }
// };

// export const updateProfileServicesApi = async (
//     artistId: string,
//     servicesData: ServicePayload[],
//     token: string
// ): Promise<AxiosResponse<UpdateServicesSuccessData> | { message: string }> => {
//     try {
//         const response = await artworkApi.patch<UpdateServicesSuccessData>(
//             `/create/services/${artistId}`,
//             { services: servicesData },
//             {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             }
//         );
//         return response;
//     } catch (error) {
//         const err = error as AxiosError<{ message: string }>;
//         console.error('Error in updateProfileServicesApi call:', err);
//         return err.response?.data?.message
//             ? { message: err.response.data.message }
//             : { message: 'Failed to update services. Server error.' };
//     }
// };


// src/services/artworkApi.ts
import axios, { AxiosError, AxiosResponse } from "axios";

export interface ArtworkImage {
    url: string;
    altText?: string;
}

// Interface for the payload sent to the backend createArtwork API
export interface ArtworkPayload {
    title: string; // Made required based on frontend validation
    description: string;
    format: string;
    size: string; // Can be a descriptive string like "Small (Under...)" or "10x12cm"
    price: number;
    images: ArtworkImage[];
    availability: string;
    yearOfCreation: number;
    displayOption: string;
    category: string;
    style: string;
    theme: string;

    // Conditional fields - marked as optional
    location?: string;
    intermediary?: string;
    framingOptions?: string;
    shipping?: string;
    rarity?: string;
    licensing?: string;
    edition?: string;
    signatureByArtist?: string; // Optional based on displayOption

    // Files uploaded to S3, these are the URLs
    certifications?: string[]; // Array of selected certification *strings* (e.g., "Certificate of Authenticity")
    certificatesUrl?: string[]; // Array of S3 URLs for certificate *files*
    saipRegistration?: string; // S3 URL for the SAIP registration *file*
}

// Define the success response structure for the createArtwork API
export interface CreateArtworkSuccessData {
    message: string;
    artwork: any; // More specific interface for your Artwork model would be better here
    artMarket: any; // More specific interface for your ArtMarket model would be better here
}

// Interface for a single service object that will be sent to the backend
export interface ServicePayload {
    serviceType: string;
    serviceTitle: string;
    deliveryTime: string;
    serviceCost: string;
}

// Define the success response structure for the updateServices API
export interface UpdateServicesSuccessData {
    message: string;
    profile: {
        _id: string;
        services: ServicePayload[];
    };
}

// Get the base URL from environment variables
// Use a fallback for safety, though it should always be defined in .env files
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001/v1";

// Create an Axios instance specifically for artwork-related APIs
const artworkApi = axios.create({
    baseURL: `${API_BASE_URL}/artwork`, // Use the environment variable here
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

export const createArtworkApi = async (
    artistId: string,
    artworkData: ArtworkPayload, // Use the defined payload interface
    token: string
): Promise<AxiosResponse<CreateArtworkSuccessData> | { message: string }> => {
    try {
        const response = await artworkApi.post<CreateArtworkSuccessData>(
            `/create/${artistId}`,
            artworkData,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response;
    } catch (error) {
        const err = error as AxiosError<{ message: string }>;
        console.error("Error in createArtworkApi call:", err);
        return err.response?.data?.message
            ? { message: err.response.data.message }
            : { message: "Failed to create artwork. Server error." };
    }
};

export const updateProfileServicesApi = async (
    artistId: string,
    servicesData: ServicePayload[],
    token: string
): Promise<AxiosResponse<UpdateServicesSuccessData> | { message: string }> => {
    try {
        // Since artworkApi instance already has the base URL,
        // we can directly use the relative path for the endpoint.
        const response = await artworkApi.patch<UpdateServicesSuccessData>(
            `/create/services/${artistId}`,
            { services: servicesData },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response;
    } catch (error) {
        const err = error as AxiosError<{ message: string }>;
        console.error('Error in updateProfileServicesApi call:', err);
        return err.response?.data?.message
            ? { message: err.response.data.message }
            : { message: 'Failed to update services. Server error.' };
    }
};