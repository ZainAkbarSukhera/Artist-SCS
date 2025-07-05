// // src/features/portfolio/artworkDetailsSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   description: '',
//   format: '',
//   size: '',
//   price: '',
//   availability: '',
//   year: '',
//   category: 'Painting', // Default value
//   marketType: 'Primary Market', // Default value
//   location: '',
//   style: '',
//   themes: '',
//   intermediaries: '',
//   framingOptions: '',
//   shipping: '',
//   rarity: '',
//   signatureByArtist: '',
//   certifications: '',
//   images: [],
//   certificates:[],
//   timestamps: [],
// };

// const artworkDetailsSlice = createSlice({
//   name: 'artworkDetails',
//   initialState,
//   reducers: {
//     // Action to update a specific field (e.g., description, format)
//     // setArtworkDetail: (state, action) => {
//     //   const { field, value } = action.payload;
//     //   state[field] = value;
//     // },
//     // Action to set all artwork details at once (useful for loading existing data)
//     setAllArtworkDetails: (state, action) => {
//       return { ...state, ...action.payload };
//     },
//     // Action to reset artwork details to initial state
//     resetArtworkDetails: (state) => {
//       return initialState;
//     },
//   },
// });

// export const { setAllArtworkDetails, resetArtworkDetails } = artworkDetailsSlice.actions;

// export default artworkDetailsSlice.reducer;


/////////////////////////////////////////////////////////////////////////////////////////////////


// // src/features/portfolio/artworkDetailsSlice.ts
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// // 1. Define the type for your ArtworkDetails state
// export interface ArtworkDetailsState {
//   title: string;
//   description: string;
//   format: string;
//   size: string;
//   price: number | ''; // Allow empty string for initial input
//   images: { file: File; dataURL: string }[]; // Array of objects
//   availability: string;
//   yearOfCreation: number | ''; // Allow empty string for initial input
//   displayOption: string;
//   category: string;
//   location: string;
//   style: string;
//   theme: string;
//   intermediary: string;
//   framingOptions: string;
//   shipping: string;
//   rarity: string;
//   signatureByArtist: string;
//   certifications: string; // Or whatever type 'certifications' actually is
//   certificates: File[]; // Array of File objects for client-side upload
//   saipRegistration: File | null; // Single File object for SAIP registration, or null
//   saipRegistrationUrl?: string; // URL of the uploaded SAIP document for MongoDB
// }

// const initialState: ArtworkDetailsState = {
//   title: '',
//   description: '',
//   format: '',
//   size: '',
//   price: '', // Initialize as empty string to match input behavior
//   availability: '',
//   yearOfCreation: '', // Initialize as empty string to match input behavior
//   category: 'Painting',
//   displayOption: 'Primary Market',
//   location: '',
//   style: '',
//   theme: '',
//   intermediary: '',
//   framingOptions: '',
//   shipping: '',
//   rarity: '',
//   signatureByArtist: '',
//   certifications: '',

//   images: [],
//   certificates: [],
//   saipRegistration: null, // Initialize as null for a single file
//   saipRegistrationUrl: undefined, // Initialize as undefined
// };

// const artworkDetailsSlice = createSlice({
//   name: 'artworkDetails',
//   initialState,
//   reducers: {
//     setArtworkDetail: <K extends keyof ArtworkDetailsState>(
//       state: ArtworkDetailsState,
//       action: PayloadAction<{ field: K; value: ArtworkDetailsState[K] }>
//     ) => {
//       // Ensure that 'images', 'certificates', and 'saipRegistration' are not directly set by this generic action
//       if (['images', 'certificates', 'saipRegistration'].includes(action.payload.field as string)) {
//         console.warn(`Attempted to set array/file field '${action.payload.field}' with setArtworkDetail. Use specific actions.`);
//         return;
//       }
//       (state[action.payload.field] as any) = action.payload.value;
//     },
//     // IMPORTANT: Changed 'data_url' to 'dataURL' to match react-images-uploading's ImageType
//     setImages: (state: ArtworkDetailsState, action: PayloadAction<{ file: File; dataURL: string }[]>) => {
//       state.images = action.payload;
//     },
//     addCertificate: (state: ArtworkDetailsState, action: PayloadAction<File>) => {
//       state.certificates.push(action.payload);
//     },
//     removeCertificate: (state: ArtworkDetailsState, action: PayloadAction<number>) => {
//       state.certificates = state.certificates.filter((_, index) => index !== action.payload);
//     },
//     // New action for SAIP registration (single file)
//     setSaipRegistration: (state: ArtworkDetailsState, action: PayloadAction<File | null>) => {
//       state.saipRegistration = action.payload;
//     },
//     resetPortfolioForm: (state: ArtworkDetailsState) => {
//       // Redux Toolkit allows direct mutation here because it uses Immer
//       return initialState;
//     },
//   },
// });

// export const {
//   setArtworkDetail,
//   setImages,
//   addCertificate,
//   removeCertificate,
//   setSaipRegistration, // Export the new action
//   resetPortfolioForm,
// } = artworkDetailsSlice.actions;

// export default artworkDetailsSlice.reducer;


import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ArtworkImage {
  url: string;
  altText?: string;
}

// Define the ArtworkDetailsState interface
export interface ArtworkDetailsState {
  title: string;
  description: string;
  format: string;
  size: string;
  price: number | string; // Can be a number for market, string for NFT price range
  images: { file: File; dataURL: string }[];
  availability: string;
  yearOfCreation: number | string; // Can be number for market, string for NFT year range
  displayOption: "Primary Market" | "Secondary Market" | "NFTs" | "Prints & Souvenirs" | "";
  category: string;
  style: string;
  theme: string;
  location: string;
  intermediary: string;
  framingOptions: string;
  shipping: string;
  signatureByArtist: string;
  certifications: string[]; // Changed from boolean to string[]
  edition: string; // NFT specific
  rarity: string; // NFT specific
  licensing: string; // NFT specific
  certificates: File[]; // For file uploads
  certificatesUrl: string[]; // For S3 URLs
  saipRegistration: File | null; // For file uploads
  saipRegistrationUrl: string | undefined; // For S3 URL
}

const initialState: ArtworkDetailsState = {
  title: '',
  description: '',
  format: '',
  size: '',
  price: '',
  images: [],
  availability: '',
  yearOfCreation: '',
  displayOption: '',
  category: '',
  style: '',
  theme: '',
  location: '',
  intermediary: '',
  framingOptions: '',
  shipping: '',
  signatureByArtist: '',
  certifications: [], // Initialize as an empty array
  edition: '',
  rarity: '',
  licensing: '',
  certificates: [],
  certificatesUrl: [],
  saipRegistration: null,
  saipRegistrationUrl: undefined,
};

const artworkSlice = createSlice({
  name: 'artworkDetails',
  initialState,
  reducers: {
    setArtworkDetail: (state, action: PayloadAction<{ field: keyof ArtworkDetailsState; value: any }>) => {
      const { field, value } = action.payload;

      // Handle specific logic for 'displayOption' changes
      if (field === 'displayOption') {
        // Reset NFT-specific fields if switching away from NFTs
        if (value !== "NFTs") {
          state.edition = '';
          state.rarity = '';
          state.licensing = '';
          // Potentially reset price/yearOfCreation if they were NFT-specific strings
          if (typeof state.price === 'string' && initialState.price !== '') {
            state.price = ''; // Or a default number if applicable
          }
          if (typeof state.yearOfCreation === 'string' && initialState.yearOfCreation !== '') {
            state.yearOfCreation = ''; // Or a default number
          }
        } else {
          // Reset non-NFT specific fields if switching to NFTs
          state.location = '';
          state.intermediary = '';
          state.framingOptions = '';
          state.shipping = '';
          state.certifications = []; // Reset certifications for NFTs
          // Potentially reset price/yearOfCreation if they were number inputs
          if (typeof state.price === 'number' && initialState.price !== '') {
            state.price = ''; // Or a default string if applicable
          }
          if (typeof state.yearOfCreation === 'number' && initialState.yearOfCreation !== '') {
            state.yearOfCreation = ''; // Or a default string
          }
        }
      }
      // Special handling for certifications to ensure it's always an array
      if (field === 'certifications') {
        state.certifications = Array.isArray(value) ? value : [];
      } else {
        // For other fields, directly assign the value
        (state[field] as any) = value;
      }
    },
    setImages: (state, action: PayloadAction<{ file: File; dataURL: string }[]>) => {
      state.images = action.payload;
    },
    addCertificate: (state, action: PayloadAction<File>) => {
      state.certificates.push(action.payload);
    },
    removeCertificate: (state, action: PayloadAction<number>) => {
      state.certificates.splice(action.payload, 1);
    },
    setSaipRegistration: (state, action: PayloadAction<File | null>) => {
      state.saipRegistration = action.payload;
    },
    resetPortfolioForm: (state) => {
      return initialState;
    },
  },
});

export const {
  setArtworkDetail,
  setImages,
  addCertificate,
  removeCertificate,
  setSaipRegistration,
  resetPortfolioForm,
} = artworkSlice.actions;

export default artworkSlice.reducer;