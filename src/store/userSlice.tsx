// // src/store/userSlice.ts
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// export interface UserState {
//   _id: string; // Added _id property
//   fullNameEnglish: string;
//   fullNameArabic: string;
//   username: string;
//   email: string;
//   mobileNumber: string;
//   role: string;
//   country: string;
//   city: string;
//   interests: string[];
//   profilePicture: string | null;
//   isAuthenticated: boolean;
// }

// const initialState: UserState = {
//   _id: '', // Initialize _id in the initial state
//   fullNameEnglish: '',
//   fullNameArabic: '',
//   username: '',
//   email: '',
//   mobileNumber: '',
//   role: '',
//   country: '',
//   city: '',
//   interests: [],
//   profilePicture: null,
//   isAuthenticated: false,
// };

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     setUserData: (state, action: PayloadAction<Omit<UserState, 'isAuthenticated'>>) => {
//       // Make sure the payload includes _id
//       state._id = action.payload._id; // Set the _id from the payload
//       state.fullNameEnglish = action.payload.fullNameEnglish;
//       state.fullNameArabic = action.payload.fullNameArabic;
//       state.username = action.payload.username;
//       state.email = action.payload.email;
//       state.mobileNumber = action.payload.mobileNumber;
//       state.role = action.payload.role;
//       state.country = action.payload.country;
//       state.city = action.payload.city;
//       state.interests = action.payload.interests;
//       state.profilePicture = action.payload.profilePicture;
//       state.isAuthenticated = true;
//     },
//     clearUserData: (state) => {
//       Object.assign(state, initialState);
//     },
//   },
// });

// export const { setUserData, clearUserData } = userSlice.actions;
// export default userSlice.reducer;

/////////////////////////////////////////////////////////////////////////////


// // src/store/userSlice.ts
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// export interface NotificationsSettings {
//   email?: boolean; // Optional, but usually boolean
//   inApp?: boolean; // Optional, but usually boolean
// }

// // Define the structure for social media links
// export interface SocialMediaLinks {
//   instagram?: string; // Use '?' for optional fields if they might not always be present
//   behance?: string;
//   // twitter?: string;
//   linkedin?: string;
//   facebook?: string;
// }

// export interface UserState {
//   _id: string;
//   fullNameEnglish: string;
//   fullNameArabic: string;
//   username: string;
//   email: string;
//   mobileNumber: string;
//   role: string;
//   country: string;
//   city: string;
//   interests: string[];
//   profilePicture: string | null;
//   socialMediaLinks?: SocialMediaLinks; // Added socialMediaLinks field, optional for flexibility
//   notificationsSettings?: NotificationsSettings; 
//   isAuthenticated: boolean;
//   biographyEnglish:string;
//   biographyArabic:string;
//   nationalId?:string;
// }

// const initialState: UserState = {
//   _id: '',
//   fullNameEnglish: '',
//   fullNameArabic: '',
//   username: '',
//   email: '',
//   mobileNumber: '',
//   role: '',
//   country: '',
//   city: '',
//   interests: [],
//   profilePicture: null,
//   socialMediaLinks: { // Initialize socialMediaLinks with empty strings or as an empty object
//     instagram: '',
//     behance: '',
//     linkedin: '',
//     facebook: '',
//   },
//    notificationsSettings: { // Initialize with default values as per your schema
//     email: true,
//     inApp: true,
//   },
//   biographyArabic:'',
//   biographyEnglish:'',
//   nationalId:'',
//   isAuthenticated: false,
// };

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     setUserData: (state, action: PayloadAction<Omit<UserState, 'isAuthenticated'>>) => {
//       state._id = action.payload._id;
//       state.fullNameEnglish = action.payload.fullNameEnglish;
//       state.fullNameArabic = action.payload.fullNameArabic;
//       state.username = action.payload.username;
//       state.email = action.payload.email;
//       state.mobileNumber = action.payload.mobileNumber;
//       state.role = action.payload.role;
//       state.country = action.payload.country;
//       state.city = action.payload.city;
//       state.interests = action.payload.interests;
//       state.profilePicture = action.payload.profilePicture;
//       state.biographyArabic=action.payload.biographyArabic;
//       state.biographyEnglish=action.payload.biographyEnglish;
//       state.nationalId=action.payload.nationalId;

//       // Set socialMediaLinks from the payload
//       // Use Object.assign to merge or spread to update nested object safely
//       state.socialMediaLinks = {
//         ...state.socialMediaLinks, // Keep existing if not provided in payload
//         ...action.payload.socialMediaLinks,
//       };

//         if (action.payload.notificationsSettings) {
//         state.notificationsSettings = {
//           ...state.notificationsSettings,
//           ...action.payload.notificationsSettings,
//         };
//       } else {
//         // If notificationsSettings is not in payload, keep existing or set to default
//         state.notificationsSettings = state.notificationsSettings || initialState.notificationsSettings;
//       }

//       state.isAuthenticated = true;
//     },
//     clearUserData: (state) => {
//       // When clearing, reset to the initial state including socialMediaLinks
//       Object.assign(state, initialState);
//     },
//   },
// });

// export const { setUserData, clearUserData } = userSlice.actions;
// export default userSlice.reducer;

/////////////////////////////////////////////////////////////////////////////////////////////////////////


// // src/store/userSlice.ts
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// export interface NotificationsSettings {
//   email?: boolean; // Optional, but usually boolean
//   inApp?: boolean; // Optional, but usually boolean
// }

// // Define the structure for social media links
// export interface SocialMediaLinks {
//   instagram?: string; // Use '?' for optional fields if they might not always be present
//   behance?: string;
//   // twitter?: string;
//   linkedin?: string;
//   facebook?: string;
// }

// export interface UserState {
//   _id: string;
//   fullNameEnglish: string;
//   fullNameArabic: string;
//   username: string;
//   email: string;
//   mobileNumber: string;
//   role: string;
//   country: string;
//   city: string;
//   interests: string[];
//   profilePicture: string | null;
//   socialMediaLinks?: SocialMediaLinks; // Added socialMediaLinks field, optional for flexibility
//   notificationsSettings?: NotificationsSettings;
//   isAuthenticated: boolean;
//   biographyEnglish: string;
//   biographyArabic: string;
//   nationalId?: string;
//   fieldOfExpertise?: string; // Added fieldOfExpertise as optional
//    website?: string;
// }

// const initialState: UserState = {
//   _id: '',
//   fullNameEnglish: '',
//   fullNameArabic: '',
//   username: '',
//   email: '',
//   mobileNumber: '',
//   role: '',
//   country: '',
//   city: '',
//   interests: [],
//   profilePicture: null,
//   socialMediaLinks: { // Initialize socialMediaLinks with empty strings or as an empty object
//     instagram: '',
//     behance: '',
//     linkedin: '',
//     facebook: '',
//   },
//   notificationsSettings: { // Initialize with default values as per your schema
//     email: true,
//     inApp: true,
//   },
//   biographyArabic: '',
//   biographyEnglish: '',
//   nationalId: '',
//   fieldOfExpertise: '', // Initialize as an empty string (or undefined if you truly want it absent)
//    website: '',
//   isAuthenticated: false,
// };

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     setUserData: (state, action: PayloadAction<Omit<UserState, 'isAuthenticated'>>) => {
//       state._id = action.payload._id;
//       state.fullNameEnglish = action.payload.fullNameEnglish;
//       state.fullNameArabic = action.payload.fullNameArabic;
//       state.username = action.payload.username;
//       state.email = action.payload.email;
//       state.mobileNumber = action.payload.mobileNumber;
//       state.role = action.payload.role;
//       state.country = action.payload.country;
//       state.city = action.payload.city;
//       state.interests = action.payload.interests;
//       state.profilePicture = action.payload.profilePicture;
//       state.biographyArabic = action.payload.biographyArabic;
//       state.biographyEnglish = action.payload.biographyEnglish;
//       state.nationalId = action.payload.nationalId;
//       state.fieldOfExpertise = action.payload.fieldOfExpertise; // Assign fieldOfExpertise

//       // Set socialMediaLinks from the payload
//       // Use Object.assign to merge or spread to update nested object safely
//       state.socialMediaLinks = {
//         ...state.socialMediaLinks, // Keep existing if not provided in payload
//         ...action.payload.socialMediaLinks,
//       };

//       if (action.payload.notificationsSettings) {
//         state.notificationsSettings = {
//           ...state.notificationsSettings,
//           ...action.payload.notificationsSettings,
//         };
//       } else {
//         // If notificationsSettings is not in payload, keep existing or set to default
//         state.notificationsSettings = state.notificationsSettings || initialState.notificationsSettings;
//       }

//       state.isAuthenticated = true;
//     },
//     clearUserData: (state) => {
//       // When clearing, reset to the initial state including socialMediaLinks
//       Object.assign(state, initialState);
//     },
//   },
// });

// export const { setUserData, clearUserData } = userSlice.actions;
// export default userSlice.reducer;


/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// store/userSlice.ts
// store/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface NotificationsSettings {
    email?: boolean; // Optional, but usually boolean
    inApp?: boolean; // Optional, but usually boolean
}

// Define the structure for social media links
export interface SocialMediaLinks {
    instagram?: string; // Use '?' for optional fields if they might not always be present
    behance?: string;
    twitter?: string;
    linkedin?: string;
    facebook?: string;
}

export interface UserState {
    _id: string;
    fullNameEnglish: string;
    fullNameArabic: string;
    username: string;
    email: string;
    mobileNumber: string;
    role: string;
    country: string;
    city: string;
    interests: string[];
    profilePicture: string | null;
    socialMediaLinks?: SocialMediaLinks; // Added socialMediaLinks field, optional for flexibility
    notificationsSettings?: NotificationsSettings;
    isAuthenticated: boolean;
    biographyEnglish: string;
    biographyArabic: string;
    nationalId?: string;
    fieldOfExpertise?: string; // Added fieldOfExpertise as optional
    website?: string;
    skills?: string[];       // NEW: Skills field (array of strings)
    experience?: string;     // CHANGED: 'workDetails' replaced by 'experience' as a string
    budget?: string | number; // NEW: Budget field (string or number)
    availability?: string;     // NEW: Availability field
    workCategoryClassification?: string; // NEWLY ADDED: Work category classification

    // NEW ARRAY FIELDS
    exhibitions?: string[];
    achievements?: string[];
    education?: string[];
    digitalTools?: string[];
    individualSkills?: string[];
    experienceDetails?: string[];
}

const initialState: UserState = {
    _id: '',
    fullNameEnglish: '',
    fullNameArabic: '',
    username: '',
    email: '',
    mobileNumber: '',
    role: '',
    country: '',
    city: '',
    interests: [],
    profilePicture: null,
    socialMediaLinks: { // Initialize socialMediaLinks with empty strings or as an empty object
        instagram: '',
        behance: '',
        linkedin: '',
        facebook: '',
        twitter: '', // Initialize twitter
    },
    notificationsSettings: { // Initialize with default values as per your schema
        email: true,
        inApp: true,
    },
    biographyArabic: '',
    biographyEnglish: '',
    nationalId: '',
    fieldOfExpertise: '', // Initialize as an empty string (or undefined if you truly want it absent)
    website: '',
    skills: [],
    experience: '',           // INITIALIZED: 'experience' as an empty string
    budget: '',               // Initialize as an empty string (or 0 if preferred)
    availability: '',         // Initialize as an empty string
    workCategoryClassification: '', // NEWLY ADDED: Initialize as an empty string
    isAuthenticated: false,

    // INITIALIZE NEW ARRAY FIELDS
    exhibitions: [],
    achievements: [],
    education: [],
    digitalTools: [],
    individualSkills: [],
    experienceDetails: [],
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<Omit<UserState, 'isAuthenticated'>>) => {
            state._id = action.payload._id;
            state.fullNameEnglish = action.payload.fullNameEnglish;
            state.fullNameArabic = action.payload.fullNameArabic;
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.mobileNumber = action.payload.mobileNumber;
            state.role = action.payload.role;
            state.country = action.payload.country;
            state.city = action.payload.city;
            state.interests = action.payload.interests;
            state.profilePicture = action.payload.profilePicture;
            state.biographyArabic = action.payload.biographyArabic;
            state.biographyEnglish = action.payload.biographyEnglish;
            state.nationalId = action.payload.nationalId;
            state.fieldOfExpertise = action.payload.fieldOfExpertise; // Assign fieldOfExpertise
            state.website = action.payload.website; // Assign website

            // Assign the existing new/changed fields
            state.skills = action.payload.skills;
            state.experience = action.payload.experience; // ASSIGNMENT: 'experience' as a string
            state.budget = action.payload.budget;
            state.availability = action.payload.availability;
            state.workCategoryClassification = action.payload.workCategoryClassification; // NEWLY ADDED: Assign workCategoryClassification

            // ASSIGN NEW ARRAY FIELDS
            state.exhibitions = action.payload.exhibitions;
            state.achievements = action.payload.achievements;
            state.education = action.payload.education;
            state.digitalTools = action.payload.digitalTools;
            state.individualSkills = action.payload.individualSkills;
            state.experienceDetails=action.payload.experienceDetails;


            // Set socialMediaLinks from the payload
            // Use Object.assign to merge or spread to update nested object safely
            state.socialMediaLinks = {
                ...state.socialMediaLinks, // Keep existing if not provided in payload
                ...action.payload.socialMediaLinks,
            };

            if (action.payload.notificationsSettings) {
                state.notificationsSettings = {
                    ...state.notificationsSettings,
                    ...action.payload.notificationsSettings,
                };
            } else {
                // If notificationsSettings is not in payload, keep existing or set to default
                state.notificationsSettings = state.notificationsSettings || initialState.notificationsSettings;
            }

            state.isAuthenticated = true;
        },
        clearUserData: (state) => {
            // When clearing, reset to the initial state including socialMediaLinks
            Object.assign(state, initialState);
        },
    },
});

export const { setUserData, clearUserData } = userSlice.actions;
export default userSlice.reducer;