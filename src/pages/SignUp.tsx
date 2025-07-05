// import TextInput from "../components/TextInput/TextInput";
// import React, { useState,  ChangeEvent  } from 'react';
// import logo from '../assets/SCS Logo.png';
// import { useNavigate } from 'react-router-dom';
// import { setUserData, clearUserData, UserState } from '../store/userSlice'; 
// import { useDispatch } from "react-redux";
// import { signup } from "../api/user";
// import { uploadFileToS3 } from "../utils/s3Uploader";
// import { toast } from "react-toastify";
// import { Country, City } from "country-state-city";


// interface SignUpFormValues {
//   fullNameEnglish: string;
//   fullNameArabic: string;
//   username: string;
//   email: string;
//   password?: string; // Optional if you handle password separately or immediately hash
//   confirmPassword?: string; // Optional if you handle password separately
//   mobileNumber: string;
//   role: 'user' | 'artist';
//   country: string;
//   city: string;
//   interests: string[];
//   profilePicture: File | string | null; // Can be File before upload, then string, or null
//   artistLicense: File | string | null; // Can be File before upload, then string, or null
//   biographyEnglish?: string; // Optional for users
//   biographyArabic?: string; // Optional for users
// }


// const SignUpComponent: React.FC = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
//   const [role, setRole] = useState<string>('');
//   const [Error, setError] = useState<string>("");
//   const [showPasswordHint, setShowPasswordHint] = useState<boolean>(false);

//   const interestCategories: string[] = [
//     'Calligraphy', 'Drawing & Illustration', 'Graphics', 'Mixed Media',
//     'Painting', 'Photography', 'Printmaking', 'Sculpture'
//   ];

//   const [formValues, setFormValues] = useState<FormValues>({
//     fullNameEnglish: '',
//     fullNameArabic: '',
//     username: '',
//     email: '',
//     password: '',
//     mobileNumber: '',
//     city: '',
//     country: '',
//     profilePicture: '',
//     role: '',
//     interests: selectedInterests,
//     artistLicense: '',
//     biographyEnglish: '',
//     biographyArabic: ''
//   });

//   const handleSignup = async () => {
//     dispatch(clearUserData());
//     try {
//       const { base64String: profileBase64 } = await uploadFileToS3(formValues.profilePicture as File, 'profile-images/');
//       let artistString = "";

//       if (formValues.role === 'artist') {
//         const { base64String } = await uploadFileToS3(formValues.artistLicense as File, 'artist-licenses/');
//         artistString = base64String;
//       }

//       const data: any = {
//         ...formValues,
//         interests: formValues.role === 'user' ? formValues.interests : [],
//         profilePicture: profileBase64,
//         artistLicense: artistString,
//       };

//       if (formValues.role === 'user') {
//         delete data.biographyEnglish;
//         delete data.biographyArabic;
//         delete data.artistLicense;
//       }

//       dispatch(setUserData(data));
//       const response = await signup(data);

//       if (response.status === 200 || response.status === 201) {
//         toast.success("You have successfully created your account");
//         navigate("/login");
//       } else {
//         toast.error(response.error);
//         throw new Error("Signup failed, please try again");
//       }
//     } catch (error: any) {
//       console.error("Signup error:", error);
//       setError(error?.response?.data?.error || "Unexpected error occurred");
//     }
//   };

//   const handleInterestClick = (interest: string) => {
//     let updatedInterests: string[];
//     if (selectedInterests.includes(interest)) {
//       updatedInterests = selectedInterests.filter((i) => i !== interest);
//     } else {
//       updatedInterests = [...selectedInterests, interest];
//     }
//     setSelectedInterests(updatedInterests);
//     setFormValues(prev => ({ ...prev, interests: updatedInterests }));
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//     setFormValues({
//       ...formValues,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files?.[0]) {
//       setFormValues({
//         ...formValues,
//         profilePicture: e.target.files[0],
//       });
//     }
//   };

//   const handleLicenseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files?.[0]) {
//       setFormValues({
//         ...formValues,
//         artistLicense: e.target.files[0],
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-2">
//       <div className="max-w-screen-lg w-full bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mt-28">
//         <div>
//           <img
//             src={logo}
//             alt="Saudi Creative Streams Logo"
//             className="h-24 w-full mb-6 object-contain"
//           />
//         </div>
//         <h2 className="text-2xl font-montserrat-regular text-yankees-blue dark:text-white mb-5 text-center">
//           Create Your Account
//         </h2>

//         <div className="space-y-6">
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
//                 Full Name (English)
//               </label>
//               <TextInput
//                 className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
//                 label="Full Name (English)"
//                 name="fullNameEnglish"
//                 value={formValues.fullNameEnglish}
//                 onChange={handleInputChange}
//               />
//             </div>

//             <div>
//               <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
//                 Full Name (Arabic)
//               </label>
//               <TextInput
//                 className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
//                 label="Full Name (Arabic)"
//                 name="fullNameArabic"
//                 value={formValues.fullNameArabic}
//                 onChange={handleInputChange}
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
//                 Username
//               </label>
//               <TextInput
//                 className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
//                 label="Username"
//                 name="username"
//                 value={formValues.username}
//                 onChange={handleInputChange}
//               />
//             </div>

//             <div>
//               <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
//                 Password
//               </label>
//                <TextInput
//                 className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
//                 label="Password"
//                 name="password"
//                 value={formValues.password}
//                 onChange={handleInputChange}
//                 type="password"
//                 onFocus={() => setShowPasswordHint(true)}
//                 onBlur={() => setShowPasswordHint(false)}
//               />

//               {showPasswordHint && (
//                 <p className="text-sm text-red-600 opacity-60 mt-1">
//                   Password must contain at least one uppercase letter.
//                 </p>
//               )}
//             </div>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
//                 Email
//               </label>
//               <TextInput
//                 className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
//                 label="Email"
//                 name="email"
//                 value={formValues.email}
//                 onChange={handleInputChange}
//                 type="email"
//               />
//             </div>

//             <div>
//               <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
//                 Mobile Number
//               </label>
//               <TextInput
//                 className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
//                 label="Mobile Number"
//                 name="mobileNumber"
//                 value={formValues.mobileNumber}
//                 onChange={handleInputChange}
//                 type="tel"
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
//             <div>
//               <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
//                 Country
//               </label>
//               <select
//                 name="country"
//                 value={formValues.country}
//                 onChange={handleInputChange}
//                 className="bg-gray-50 border border-gray-300 text-yankees-blue text-sm rounded-lg focus:ring-fire-opal focus:border-fire-opal block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//               >
//                 <option value="">Select your Country</option>
//                  {Country.getAllCountries().map((item) => (
//                 <option key={item.isoCode} value={item.isoCode}>{item.name}</option>
//               ))}
//               </select>
//             </div>

//             <div>
//               <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
//                 City
//               </label>
//               <select
//                 name="city"
//                 value={formValues.city}
//                 onChange={handleInputChange}
//                 className="bg-gray-50 border border-gray-300 text-yankees-blue text-sm rounded-lg focus:ring-fire-opal focus:border-fire-opal block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//               >
//                 <option value="">Select your City</option>
//                  {City.getCitiesOfCountry(formValues.country)?.map((item, index) => (
//                   <option key={`${item.name}-${item.stateCode || index}`} value={item.name}>
//                     {item.name}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <label className="block mb-2 text-sm font-montserrat-light text-yankees-blue dark:text-white">
//                 Upload Profile Picture
//               </label>
//               <input
//                 type="file"
//                 name="profilePicture"
//                 className="block w-full h-10 text-sm text-yankees-blue border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-fire-opal"
//                 onChange={handleFileChange}
//               />
//             </div>

//             <div>
//               <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
//                 Role
//               </label>
//               <select
//                 name="role"
//                 value={formValues.role}
//                 onChange={(e) => {
//                   setRole(e.target.value);
//                   setFormValues(prev => ({ ...prev, role: e.target.value }));
//                   if (e.target.value !== 'user') setSelectedInterests([]);
//                 }}
//                 className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
//               >
//                 <option value="">Select Role</option>
//                 <option value="user">General User</option>
//                 <option value="artist">Artist</option>
//                 <option value="patron">Patron</option>
//                 <option value="intermediary">Intermediary</option>
//               </select>
//             </div>
//           </div>

//           {role === 'user' && (
//             <div>
//               <label className="block text-sm font-montserrat-light text-yankees-blue dark:text-white mb-2">Select Your Interests</label>
//               <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
//                 {interestCategories.map((interest) => (
//                   <button
//                     key={interest}
//                     type="button"
//                     onClick={() => handleInterestClick(interest)}
//                     className={`border rounded px-3 py-1 text-sm ${formValues.interests.includes(interest)
//                       ? 'bg-fire-opal text-white'
//                       : 'bg-white text-yankees-blue border-gray-300 dark:bg-gray-700 dark:text-white'}`}
//                   >
//                     {interest}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {role === 'artist' && (
//             <div className="mt-4 space-y-4">
//              <div>
//               <label className="block text-sm text-yankees-blue dark:text-white mb-2">
//                 Biography (English)
//               </label>
//               <textarea
//                 name="biographyEnglish"
//                 value={formValues.biographyEnglish || null}
//                 onChange={handleInputChange}
//                 rows={4}
//                 className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
//                 placeholder="Enter your biography in English"
//               />
//             </div>

//             <div>
//               <label className="block text-sm text-yankees-blue dark:text-white mb-2">
//                 Biography (Arabic)
//               </label>
//               <textarea
//                 name="biographyArabic"
//                 value={formValues.biographyArabic || null}
//                 onChange={handleInputChange}
//                 rows={4}
//                 className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
//                 placeholder="Enter your biography in Arabic"
//               />
//             </div>
//               <label className="block mb-2 text-sm font-montserrat-light text-yankees-blue dark:text-white">
//                 Upload Artist License 
//               </label>
//               <input
//                 type="file"
//                 name="Artist License"
//                 className="block w-full h-10 text-sm text-yankees-blue border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-fire-opal"
//                 onChange={handleLicenseChange}
//               />

//             </div>

      

//           )}

//           <div className="mt-6">

//             {/* {Error && (
//               <div className="text-red-600 text-sm font-medium text-center mb-2">
//                 {Error}
//               </div>
//             )} */}
                      
//             <button
//               type="button"
//               className="w-full bg-fire-opal text-white py-2 px-4 rounded-lg hover:bg-orange-500 transition"
//               onClick={handleSignup}
//             >
//               Create Account
//             </button>
//           </div>
//         </div>
//       </div>
    
//     </div>
//   );
// };

// export default SignUpComponent;

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// import TextInput from "../components/TextInput/TextInput";
// import React, { useState, ChangeEvent } from 'react';
// import logo from '../assets/SCS Logo.png';
// import { useNavigate } from 'react-router-dom';
// import { setUserData, clearUserData } from '../store/userSlice';
// import { useDispatch } from "react-redux";
// import { signup } from "../api/user";
// import { uploadFileToS3 } from "../utils/s3Uploader";
// import { toast } from "react-toastify";
// import { Country, City } from "country-state-city";
// import { AxiosResponse } from 'axios';

// // Define the Props for TextInput component
// interface TextInputProps {
//   className?: string;
//   label?: string;
//   name: string;
//   value: string;
//   onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
//   type?: string;
//   onFocus?: () => void;
//   onBlur?: () => void;
// }

// interface SignUpFormValues {
//   fullNameEnglish: string;
//   fullNameArabic: string;
//   username: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
//   mobileNumber: string;
//   role: 'artist';
//   country: string;
//   city: string;
//   interests: string[];
//   profilePicture: File | string | null;
//   artistLicense: File | string | null;
//   //  profilePicture: File | { base64: string, type: string } | null; // Change from string to object
//   // artistLicense: File | string | null; // Keep if artist license isn't being uploaded as base64
//   biographyEnglish: string;
//   biographyArabic: string;
// }



// const SignUpComponent: React.FC = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
//   const [role, setRole] = useState<string>('');
//   const [error, setError] = useState<string>("");
//   const [showPasswordHint, setShowPasswordHint] = useState<boolean>(false);

//   const interestCategories: string[] = [
//     'Calligraphy', 'Drawing & Illustration', 'Graphics', 'Mixed Media',
//     'Painting', 'Photography', 'Printmaking', 'Sculpture'
//   ];

//   const [formValues, setFormValues] = useState<SignUpFormValues>({
//     fullNameEnglish: '',
//     fullNameArabic: '',
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     mobileNumber: '',
//     city: '',
//     country: '',
//     profilePicture: null,
//     role: 'artist',
//     interests: [],
//     artistLicense: null,
//     biographyEnglish: '',
//     biographyArabic: ''
//   });

//   const handleSignup = async () => {
//     dispatch(clearUserData());
//     setError(""); // Clear previous errors
//     console.log("signup process started");

//     try {
//       // Basic client-side validation for required fields
//       if (!formValues.fullNameEnglish || !formValues.username || !formValues.email || !formValues.password || !formValues.mobileNumber || !formValues.country || !formValues.city || !formValues.role) {
//         setError("Please fill in all required fields.");
//         toast.error("Please fill in all required fields.");
//         return;
//       }

//       if (formValues.password !== formValues.confirmPassword) {
//         setError("Passwords do not match.");
//         toast.error("Passwords do not match.");
//         return;
//       }

//       console.log("Profile picture uploading now");
//       // Profile Picture Upload
//       // let profileBase64: string = ''; // Initialize as empty string
//       // if (formValues.profilePicture instanceof File) {
//       //   const result = await uploadFileToS3(formValues.profilePicture, 'profile-images/');
//       //   console.log("upload result: ", result);
//       //   profileBase64 = result?.base64String || ''; // Explicitly handle null/undefined
//       // } else if (typeof formValues.profilePicture === 'string') {
//       //   profileBase64 = formValues.profilePicture;
//       // }
//     let profilePictureUrl: string = ''; // Initialize as empty string
//     if (formValues.profilePicture instanceof File) {
//       const result = await uploadFileToS3(formValues.profilePicture, 'profile-images/');
//       // CHECK THIS PART CAREFULLY:
//       if (result && result.location) { // Ensure result and location are not null
//           profilePictureUrl = result.location;
//       } else {
//           // Handle S3 upload failure more explicitly if needed
//           toast.error("Failed to upload profile picture to S3.");
//           setError("Failed to upload profile picture.");
//           return; // Stop signup if image upload fails
//       }
//     } else if (typeof formValues.profilePicture === 'string') {
//       // This case handles if profilePicture was already a URL/string (e.g., for existing users editing profile)
//       profilePictureUrl = formValues.profilePicture;
//     }
//       // If profilePicture is null, profileBase64 remains '' (empty string).

//       // Artist License Upload (conditional)
//       let artistString: string = ''; // Initialize as empty string
//       if (formValues.role === 'artist') {
//         if (formValues.artistLicense instanceof File) {
//           const result = await uploadFileToS3(formValues.artistLicense, 'artist-licenses/');
//           artistString = result.location || " "; // Explicitly handle null/undefined
//         } else if (typeof formValues.artistLicense === 'string') {
//           artistString = formValues.artistLicense;
//         }
//         // If artistLicense is null for artist, artistString remains '' (empty string).
//       }

      


//       // Construct the data object to send to the backend
//       // We are explicitly building the data object to ensure correct types
//       const baseUserData = {
//         fullNameEnglish: formValues.fullNameEnglish,
//         fullNameArabic: formValues.fullNameArabic,
//         username: formValues.username,
//         email: formValues.email,
//         password: formValues.password,
//         mobileNumber: formValues.mobileNumber,
//         role: formValues.role,
//         country: formValues.country,
//         city: formValues.city,
//         interests: [],
//         profilePicture: profilePictureUrl,
//       };

//       let dataToSend: any = { ...baseUserData }; // Use 'any' temporarily for conditional properties

//       // Add artist-specific fields if the role is artist
//       if (formValues.role === 'artist') {
//         dataToSend = {
//           ...dataToSend,
//           artistLicense: artistString,
//           biographyEnglish: formValues.biographyEnglish,
//           biographyArabic: formValues.biographyArabic,
//         };
//       }

//       console.log("base UserData", baseUserData)
//       const response = await signup(dataToSend); // Pass the constructed data object
//       console.log("response data: ", response);

//       if ((response as AxiosResponse).status === 200 || (response as AxiosResponse).status === 201) {
//         toast.success("You have successfully created your account");
//         // Ensure the payload for setUserData matches UserState (excluding isAuthenticated)
//         dispatch(setUserData({
//           _id: '',
//           fullNameEnglish: dataToSend.fullNameEnglish,
//           fullNameArabic: dataToSend.fullNameArabic,
//           username: dataToSend.username,
//           email: dataToSend.email,
//           mobileNumber: dataToSend.mobileNumber,
//           role: dataToSend.role,
//           country: dataToSend.country,
//           city: dataToSend.city,
//           interests: dataToSend.interests,
//           profilePicture: dataToSend.profilePicture,
//           biographyArabic:dataToSend.biographyArabic,
//           biographyEnglish:dataToSend.biographyEnglish,
//         }));
//         navigate("/");
//       } else {
//         toast.error((response as any).error || "Signup failed, please try again");
//       }
//     } catch (err: any) {
//       console.error("Signup error:", err);
//       setError(err?.response?.data?.error || "Unexpected error occurred");
//       toast.error(err?.response?.data?.error || "Unexpected error occurred");
//     }
//   };

//   const handleInterestClick = (interest: string) => {
//     let updatedInterests: string[];
//     if (selectedInterests.includes(interest)) {
//       updatedInterests = selectedInterests.filter((i) => i !== interest);
//     } else {
//       updatedInterests = [...selectedInterests, interest];
//     }
//     setSelectedInterests(updatedInterests);
//     setFormValues(prev => ({ ...prev, interests: updatedInterests }));
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//     setFormValues({
//       ...formValues,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files?.[0]) {
//       setFormValues({
//         ...formValues,
//         profilePicture: e.target.files[0],
//       });
//     }
//   };

//   const handleLicenseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files?.[0]) {
//       setFormValues({
//         ...formValues,
//         artistLicense: e.target.files[0],
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-2">
//       <div className="max-w-screen-lg w-full bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mt-28">
//         <div>
//           <img
//             src={logo}
//             alt="Saudi Creative Streams Logo"
//             className="h-24 w-full mb-6 object-contain"
//           />
//         </div>
//         <h2 className="text-2xl font-montserrat-regular text-yankees-blue dark:text-white mb-5 text-center">
//           Create Your Account
//         </h2>

//         <div className="space-y-6">
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
//                 Full Name (English)
//               </label>
//               <TextInput
//                 className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
//                 name="fullNameEnglish"
//                 value={formValues.fullNameEnglish}
//                 onChange={handleInputChange}
//               />
//             </div>

//             <div>
//               <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
//                 Full Name (Arabic)
//               </label>
//               <TextInput
//                 className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
//                 name="fullNameArabic"
//                 value={formValues.fullNameArabic}
//                 onChange={handleInputChange}
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
//                 Username
//               </label>
//               <TextInput
//                 className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
//                 name="username"
//                 value={formValues.username}
//                 onChange={handleInputChange}
//               />
//             </div>

//             <div>
//               <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
//                 Password
//               </label>
//               <TextInput
//                 className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
//                 name="password"
//                 value={formValues.password}
//                 onChange={handleInputChange}
//                 type="password"
//                 onFocus={() => setShowPasswordHint(true)}
//                 onBlur={() => setShowPasswordHint(false)}
//               />

//               {showPasswordHint && (
//                 <p className="text-sm text-red-600 opacity-60 mt-1">
//                   Password must contain at least one uppercase letter.
//                 </p>
//               )}
//             </div>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
//                 Confirm Password
//               </label>
//               <TextInput
//                 className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
//                 name="confirmPassword"
//                 value={formValues.confirmPassword}
//                 onChange={handleInputChange}
//                 type="password"
//               />
//             </div>

//             <div>
//               <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
//                 Email
//               </label>
//               <TextInput
//                 className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
//                 name="email"
//                 value={formValues.email}
//                 onChange={handleInputChange}
//                 type="email"
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

//             <div>
//               <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
//                 Mobile Number
//               </label>
//               <TextInput
//                 className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
//                 name="mobileNumber"
//                 value={formValues.mobileNumber}
//                 onChange={handleInputChange}
//                 type="tel"
//               />
//             </div>

//             <div>
//               <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
//                 Country
//               </label>
//               <select
//                 name="country"
//                 value={formValues.country}
//                 onChange={handleInputChange}
//                 className="bg-gray-50 border border-gray-300 text-yankees-blue text-sm rounded-lg focus:ring-fire-opal focus:border-fire-opal block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//               >
//                 <option value="">Select your Country</option>
//                 {Country.getAllCountries().map((item) => (
//                   <option key={item.isoCode} value={item.isoCode}>{item.name}</option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

//             <div>
//               <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
//                 City
//               </label>
//               <select
//                 name="city"
//                 value={formValues.city}
//                 onChange={handleInputChange}
//                 className="bg-gray-50 border border-gray-300 text-yankees-blue text-sm rounded-lg focus:ring-fire-opal focus:border-fire-opal block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//               >
//                 <option value="">Select your City</option>
//                 {City.getCitiesOfCountry(formValues.country)?.map((item, index) => (
//                   <option key={`${item.name}-${item.stateCode || index}`} value={item.name}>
//                     {item.name}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div>
//               <label className="block mb-2 text-sm font-montserrat-light text-yankees-blue dark:text-white">
//                 Upload Profile Picture
//               </label>
//               <input
//                 type="file"
//                 name="profilePicture"
//                 className="block w-full h-10 text-sm text-yankees-blue border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-fire-opal"
//                 onChange={handleFileChange}
//               />
//             </div>
//           </div>
          

//           {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
//                 Role
//               </label>
//               <select
//                 name="role"
//                 value={formValues.role}
//                 onChange={(e) => {
//                   setRole(e.target.value);
//                   setFormValues(prev => ({ ...prev, role: e.target.value as 'user' | 'artist' | 'patron' | 'intermediary' | '' }));
//                   if (e.target.value !== 'user') setSelectedInterests([]);
//                 }}
//                 className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
//               >
//                 <option value="">Select Role</option>
//                 <option value="user">General User</option>
//                 <option value="artist">Artist</option>
//                 <option value="patron">Patron</option>
//                 <option value="intermediary">Intermediary</option>
//               </select>
//             </div>
//           </div> */}

//           {/* {role === 'user' && ( */}
//             {/* <div>
//               <label className="block text-sm font-montserrat-light text-yankees-blue dark:text-white mb-2">Select Your Interests</label>
//               <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
//                 {interestCategories.map((interest) => (
//                   <button
//                     key={interest}
//                     type="button"
//                     onClick={() => handleInterestClick(interest)}
//                     className={`border rounded px-3 py-1 text-sm ${formValues.interests.includes(interest)
//                       ? 'bg-fire-opal text-white'
//                       : 'bg-white text-yankees-blue border-gray-300 dark:bg-gray-700 dark:text-white'}`}
//                   >
//                     {interest}
//                   </button>
//                 ))}
//               </div>
//             </div> */}
//           {/* )} */}

//           {/* {role === 'artist' && ( */}
//             <div className="mt-4 space-y-4">
//               <div>
//                 <label className="block text-sm text-yankees-blue dark:text-white mb-2">
//                   Biography (English)
//                 </label>
//                 <textarea
//                   name="biographyEnglish"
//                   value={formValues.biographyEnglish}
//                   onChange={handleInputChange}
//                   rows={4}
//                   className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
//                   placeholder="Enter your biography in English"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm text-yankees-blue dark:text-white mb-2">
//                   Biography (Arabic)
//                 </label>
//                 <textarea
//                   name="biographyArabic"
//                   value={formValues.biographyArabic}
//                   onChange={handleInputChange}
//                   rows={4}
//                   className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
//                   placeholder="Enter your biography in Arabic"
//                 />
//               </div>
//               <label className="block mb-2 text-sm font-montserrat-light text-yankees-blue dark:text-white">
//                 Upload Artist License
//               </label>
//               <input
//                 type="file"
//                 name="artistLicense"
//                 className="block w-full h-10 text-sm text-yankees-blue border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-fire-opal"
//                 onChange={handleLicenseChange}
//               />

//             </div>
//           {/* )}  */}

//           <div className="mt-6">
//             {error && (
//               <div className="text-red-600 text-sm font-medium text-center mb-2">
//                 {error}
//               </div>
//             )}

//             <button
//               type="button"
//               className="w-full bg-fire-opal text-white py-2 px-4 rounded-lg hover:bg-orange-500 transition"
//               onClick={handleSignup}
//             >
//               Create Account
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUpComponent;
//////////////////////////////////////////////////////////////////////////////////////////////////////////

import TextInput from "../components/TextInput/TextInput";
import React, { useState,useMemo, ChangeEvent } from 'react';
import logo from '../assets/SCS Logo.png';
import { useNavigate } from 'react-router-dom';
import { setUserData, clearUserData } from '../store/userSlice';
import { useDispatch } from "react-redux";
import { signup } from "../api/user";
import { uploadFileToS3 } from "../utils/s3Uploader";
import { toast } from "react-toastify";
import { Country, City, ICity   } from "country-state-city";
import { AxiosResponse } from 'axios';

// Define the Props for TextInput component
interface TextInputProps {
  className?: string;
  label?: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  type?: string;
  onFocus?: () => void;
  onBlur?: () => void;
}

interface SignUpFormValues {
  fullNameEnglish: string;
  fullNameArabic: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  mobileNumber: string;
  role: 'artist'; // Assuming role is fixed to 'artist' based on the uncommented code
  country: string;
  city: string;
  interests: string[];
  profilePicture: File | string | null;
  artistLicense: File | string | null;
  biographyEnglish: string;
  biographyArabic: string;
  fieldOfExpertise: string; // Add this new field

}

const SignUpComponent: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  // const [role, setRole] = useState<string>(''); // This can be removed if role is fixed to 'artist'
  const [error, setError] = useState<string>("");
  const [showPasswordHint, setShowPasswordHint] = useState<boolean>(false);

  const interestCategories: string[] = [
    'Calligraphy', 'Drawing & Illustration', 'Graphics', 'Mixed Media',
    'Painting', 'Photography', 'Printmaking', 'Sculpture'
  ];

  const [formValues, setFormValues] = useState<SignUpFormValues>({
    fullNameEnglish: '',
    fullNameArabic: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobileNumber: '',
    city: '',
    country: '',
    profilePicture: null,
    role: 'artist', // Fixed to 'artist'
    interests: [],
    artistLicense: null,
    biographyEnglish: '',
    biographyArabic: '',
    fieldOfExpertise: '' // Initialize the new field
  });

  const handleSignup = async () => {
    dispatch(clearUserData());
    setError(""); // Clear previous errors
    console.log("signup process started");

    try {
      // Basic client-side validation for required fields
      if (!formValues.fullNameEnglish || !formValues.username || !formValues.email || !formValues.password || !formValues.mobileNumber || !formValues.country || !formValues.city || !formValues.role || !formValues.fieldOfExpertise) { // Add fieldOfExpertise to validation
        setError("Please fill in all required fields.");
        toast.error("Please fill in all required fields.");
        return;
      }

      if (formValues.password !== formValues.confirmPassword) {
        setError("Passwords do not match.");
        toast.error("Passwords do not match.");
        return;
      }

      console.log("Profile picture uploading now");
      let profilePictureUrl: string = ''; // Initialize as empty string
      if (formValues.profilePicture instanceof File) {
        const result = await uploadFileToS3(formValues.profilePicture, 'profile-images/');
        if (result && result.location) {
          profilePictureUrl = result.location;
        } else {
          toast.error("Failed to upload profile picture to S3.");
          setError("Failed to upload profile picture.");
          return;
        }
      } else if (typeof formValues.profilePicture === 'string') {
        profilePictureUrl = formValues.profilePicture;
      }

      let artistString: string = '';
      if (formValues.role === 'artist') {
        if (formValues.artistLicense instanceof File) {
          const result = await uploadFileToS3(formValues.artistLicense, 'artist-licenses/');
          artistString = result.location || " ";
        } else if (typeof formValues.artistLicense === 'string') {
          artistString = formValues.artistLicense;
        }
      }

      // Construct the data object to send to the backend
      const baseUserData = {
        fullNameEnglish: formValues.fullNameEnglish,
        fullNameArabic: formValues.fullNameArabic,
        username: formValues.username,
        email: formValues.email,
        password: formValues.password,
        mobileNumber: formValues.mobileNumber,
        role: formValues.role,
        country: formValues.country,
        city: formValues.city,
        interests: [],
        profilePicture: profilePictureUrl,
        fieldOfExpertise: formValues.fieldOfExpertise, // Add fieldOfExpertise here
      };

      let dataToSend: any = { ...baseUserData };

      if (formValues.role === 'artist') {
        dataToSend = {
          ...dataToSend,
          artistLicense: artistString,
          biographyEnglish: formValues.biographyEnglish,
          biographyArabic: formValues.biographyArabic,
        };
      }

      console.log("base UserData", baseUserData)
      const response = await signup(dataToSend);
      console.log("response data: ", response);

      if ((response as AxiosResponse).status === 200 || (response as AxiosResponse).status === 201) {
        toast.success("You have successfully created your account");
        dispatch(setUserData({
          _id: '',
          fullNameEnglish: dataToSend.fullNameEnglish,
          fullNameArabic: dataToSend.fullNameArabic,
          username: dataToSend.username,
          email: dataToSend.email,
          mobileNumber: dataToSend.mobileNumber,
          role: dataToSend.role,
          country: dataToSend.country,
          city: dataToSend.city,
          interests: dataToSend.interests,
          profilePicture: dataToSend.profilePicture,
          biographyArabic: dataToSend.biographyArabic,
          biographyEnglish: dataToSend.biographyEnglish,
          fieldOfExpertise: dataToSend.fieldOfExpertise, // Add fieldOfExpertise to dispatch
        }));
        navigate("/");
      } else {
        toast.error((response as any).error || "Signup failed, please try again");
      }
    } catch (err: any) {
      console.error("Signup error:", err);
      setError(err?.response?.data?.error || "Unexpected error occurred");
      toast.error(err?.response?.data?.error || "Unexpected error occurred");
    }
  };

  const handleInterestClick = (interest: string) => {
    let updatedInterests: string[];
    if (selectedInterests.includes(interest)) {
      updatedInterests = selectedInterests.filter((i) => i !== interest);
    } else {
      updatedInterests = [...selectedInterests, interest];
    }
    setSelectedInterests(updatedInterests);
    setFormValues(prev => ({ ...prev, interests: updatedInterests }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFormValues({
        ...formValues,
        profilePicture: e.target.files[0],
      });
    }
  };

  const handleLicenseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFormValues({
        ...formValues,
        artistLicense: e.target.files[0],
      });
    }
  };

   const uniqueCities: string[] = useMemo(() => {
    // Get cities for the selected country.
    // City.getCitiesOfCountry returns ICity[] | undefined
    const citiesOfCountry: ICity[] | undefined = City.getCitiesOfCountry(formValues.country);

    if (!citiesOfCountry) {
      return []; // Return empty array if no cities are found for the country
    }

    // Use a Set to store unique city names
    const cityNames = new Set<string>(); // Specify Set to store strings
    citiesOfCountry.forEach((city: ICity) => { // Type 'city' as ICity
      cityNames.add(city.name);
    });

    // Convert Set back to an array and sort alphabetically for better UX
    return Array.from(cityNames).sort();
  }, [formValues.country]); // Recalculate only when the selected country changes


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-2">
      <div className="max-w-screen-lg w-full bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mt-28">
        <div>
          <img
            src={logo}
            alt="Saudi Creative Streams Logo"
            className="h-24 w-full mb-6 object-contain"
          />
        </div>
        <h2 className="text-2xl font-montserrat-regular text-yankees-blue dark:text-white mb-5 text-center">
          Create Your Account
        </h2>

        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
                Full Name (English)
              </label>
              <TextInput
                className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
                name="fullNameEnglish"
                value={formValues.fullNameEnglish}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
                Full Name (Arabic)
              </label>
              <TextInput
                className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
                name="fullNameArabic"
                value={formValues.fullNameArabic}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
                Username
              </label>
              <TextInput
                className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
                name="username"
                value={formValues.username}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
                Password
              </label>
              <TextInput
                className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
                name="password"
                value={formValues.password}
                onChange={handleInputChange}
                type="password"
                onFocus={() => setShowPasswordHint(true)}
                onBlur={() => setShowPasswordHint(false)}
              />

              {showPasswordHint && (
                <p className="text-sm text-red-600 opacity-60 mt-1">
                  Password must contain at least one uppercase letter.
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
                Confirm Password
              </label>
              <TextInput
                className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
                name="confirmPassword"
                value={formValues.confirmPassword}
                onChange={handleInputChange}
                type="password"
              />
            </div>

            <div>
              <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
                Email
              </label>
              <TextInput
                className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
                type="email"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
                Mobile Number
              </label>
              <TextInput
                className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
                name="mobileNumber"
                value={formValues.mobileNumber}
                onChange={handleInputChange}
                type="tel"
              />
            </div>

            <div>
              <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
                Country
              </label>
              <select
                name="country"
                value={formValues.country}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-yankees-blue text-sm rounded-lg focus:ring-fire-opal focus:border-fire-opal block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option value="">Select your Country</option>
                {Country.getAllCountries().map((item) => (
                  <option key={item.isoCode} value={item.isoCode}>{item.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* <div>
              <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
                City
              </label>
              <select
                name="city"
                value={formValues.city}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-yankees-blue text-sm rounded-lg focus:ring-fire-opal focus:border-fire-opal block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option value="">Select your City</option>
                {City.getCitiesOfCountry(formValues.country)?.map((item, index) => (
                  <option key={`${item.name}-${item.stateCode || index}`} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div> */}
            <div>
              <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
                City
              </label>
              <select
                name="city"
                value={formValues.city}
                onChange={handleInputChange} // Uses the typed handleInputChange
                className="bg-gray-50 border border-gray-300 text-yankees-blue text-sm rounded-lg focus:ring-fire-opal focus:border-fire-opal block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option value="">Select your City</option>
                {/* Render options from the uniqueCities array */}
                {uniqueCities.map((cityName: string) => ( // Type 'cityName' as string
                  <option key={cityName} value={cityName}>
                    {cityName}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2 text-sm font-montserrat-light text-yankees-blue dark:text-white">
                Upload Profile Picture
              </label>
              <input
                type="file"
                name="profilePicture"
                className=" block w-full h-10 text-sm text-yankees-blue border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-fire-opal"
                onChange={handleFileChange}
              />
            </div>
          </div>

          {/* New Field of Expertise Input */}
          <div>
            <label className="block text-yankees-blue dark:text-white text-sm font-montserrat-light mb-2">
              Field of Expertise
            </label>
            <TextInput
              className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
              name="fieldOfExpertise"
              value={formValues.fieldOfExpertise}
              onChange={handleInputChange}
              placeholder="e.g., Digital Artist, Graphic Designer, Contemporary Artist, Typographic Designer etc"
            />
          </div>

          <div className="mt-4 space-y-4">
            <div>
              <label className="block text-sm text-yankees-blue dark:text-white mb-2">
                Biography (English)
              </label>
              <textarea
                name="biographyEnglish"
                value={formValues.biographyEnglish}
                onChange={handleInputChange}
                rows={4}
                className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
                placeholder="Enter your biography in English"
              />
            </div>

            <div>
              <label className="block text-sm text-yankees-blue dark:text-white mb-2">
                Biography (Arabic)
              </label>
              <textarea
                name="biographyArabic"
                value={formValues.biographyArabic}
                onChange={handleInputChange}
                rows={4}
                className="bg-gray-50 dark:bg-gray-700 dark:text-white text-yankees-blue border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 w-full"
                placeholder="Enter your biography in Arabic"
              />
            </div>
            <label className="block mb-2 text-sm font-montserrat-light text-yankees-blue dark:text-white">
              Upload Artist License
            </label>
            <input
              type="file"
              name="artistLicense"
              className="block w-full h-10 text-sm text-yankees-blue border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-fire-opal"
              onChange={handleLicenseChange}
            />
          </div>

          <div className="mt-6">
            {error && (
              <div className="text-red-600 text-sm font-medium text-center mb-2">
                {error}
              </div>
            )}

            <button
              type="button"
              className="w-full bg-fire-opal text-white py-2 px-4 rounded-lg hover:bg-orange-500 transition"
              onClick={handleSignup}
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpComponent;