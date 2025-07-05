// import { useState, useEffect, useCallback } from 'react';
// import ImageUploading, { ImageListType } from 'react-images-uploading';
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../store/store';
// import { setUserData, SocialMediaLinks as UserSocialMediaLinks } from '../store/userSlice';
// import { updateUserProfile, AuthSuccessData } from '../api/user';
// import { City, Country, ICountry } from 'country-state-city';
// import { uploadFileToS3 } from '../utils/s3Uploader';
// import { toast } from 'react-toastify';

// // interface SocialMediaLinks {
// //   [key: string]: string;
// // }

// const getUniqueCities = (countryCode: string) => {
//   const cities = City.getCitiesOfCountry(countryCode);
//   if (!cities) {
//     return [];
//   }
//   const uniqueCityNames = new Set<string>();
//   const uniqueCitiesArray: { name: string; stateCode?: string }[] = [];
//   cities.forEach(city => {
//     if (!uniqueCityNames.has(city.name)) {
//       uniqueCityNames.add(city.name);
//       uniqueCitiesArray.push(city);
//     }
//   });
//   return uniqueCitiesArray;
// };

// // interface FormData {
// //   fullNameEnglish: string;
// //   fullNameArabic: string;
// //   username: string;
// //   email: string;
// //   mobile: string;
// //   biography: string;
// //   city: string;
// //   country: string;
// //   socialMedia: SocialMediaLinks;
// //   nationalId: string;
// // }


// const UserProfileForm = () => {
//   // const [formData, setFormData] = useState<FormData>({
//   //   fullNameEnglish: '',
//   //   fullNameArabic: '',
//   //   username: '',
//   //   email: '',
//   //   mobile: '',
//   //   biography: '',
//   //   city: '',
//   //   country: '',
//   //   socialMedia: { instagram: '', behance: '', twitter: '' }, // Default values
//   //   nationalId: '',
//   // });
//   // const [isUsernameValid, setIsUsernameValid] = useState(null);
//   // const [images, setImages] = useState([]);
//   // const [isUsernameValid, setIsUsernameValid] = useState<boolean | null>(null);
//   // const [images, setImages] = useState<ImageListType>([]);

//   // const onChange = (imageList) => {
//   //   setImages(imageList);
//   // };

// //   const onChange = (imageList: ImageListType) => {
// //     setImages(imageList);
// // };

//   // const validateUsername = (username) => {
//   //   // Simulated API call to validate username uniqueness
//   //   const existingUsernames = ['user1', 'artist123'];
//   //   setIsUsernameValid(!existingUsernames.includes(username));
//   //   setFormData({ ...formData, username });
//   // };

// //   const validateUsername = (username: string) => {
// //     // Simulated API call to validate username uniqueness
// //     const existingUsernames = ['user1', 'artist123'];
// //     setIsUsernameValid(!existingUsernames.includes(username));
// //     setFormData({ ...formData, username });
// // };

// //   const sendEmailOTP = () => {
// //     // Simulated OTP send for email
// //     alert('OTP sent to email!');
// //   };

// //   const sendMobileOTP = () => {
// //     // Simulated OTP send for mobile
// //     alert('OTP sent to mobile!');
// //   };

// //   const saveChanges = () => {
// //     // Real-time feedback simulation
// //     alert('Changes saved successfully!');
// //   };

//   const dispatch = useDispatch();
//   const currentUser = useSelector((state: RootState) => state.user);

//   // State variables for simplified image handling
//   const [profilePictureFile, setProfilePictureFile] = useState<File | null>(null);
//   const [profilePicturePreview, setProfilePicturePreview] = useState<string | null>(null);

//   const [formData, setFormData] = useState({
//     fullNameEnglish: "",
//     fullNameArabic: "",
//     username: "",
//     mobileNumber: "",
//     email: "",
//     city: "",
//     country: "",
//     biographyEnglish:"",
//     biographyArabic:"",
//     nationalId:"",
//   });
//   // const [interests, setInterests] = useState<string[]>([]);
//   const [socials, setSocials] = useState<UserSocialMediaLinks>({
//     linkedin: "",
//     behance: "",
//     facebook: "",
//     instagram: "",
//   });
//   const [error, setError] = useState<string | null>(null);
//   const [success, setSuccess] = useState<string | null>(null);
//   const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

//    useEffect(() => {
//     if (currentUser && currentUser.isAuthenticated) {

//        console.log("Current User data from Redux:", currentUser); // <-- Add this line
//       console.log("Social Media Links from Redux:", currentUser.socialMediaLinks); // <-- And this one

//       setFormData({
//         fullNameEnglish: currentUser.fullNameEnglish || "",
//         fullNameArabic: currentUser.fullNameArabic || "",
//         username: currentUser.username || "",
//         mobileNumber: currentUser.mobileNumber || "",
//         email: currentUser.email || "",
//         city: currentUser.city || "",
//         country: currentUser.country || "",
//         biographyEnglish: currentUser.biographyEnglish || "",
//         biographyArabic: currentUser.biographyArabic || "",
//         nationalId: currentUser.nationalId || "",
//       });
//       // setInterests(currentUser.interests || []);

//        setSocials({
//           linkedin: currentUser.socialMediaLinks?.linkedin || "",
//           behance: currentUser.socialMediaLinks?.behance || "",
//           facebook: currentUser.socialMediaLinks?.facebook || "",
//           instagram: currentUser.socialMediaLinks?.instagram || "",
//         });

//       // Set initial preview if a profile picture exists in Redux
//       if (currentUser.profilePicture) {
//         setProfilePicturePreview(currentUser.profilePicture);
//       } else {
//         setProfilePicturePreview(null);
//       }
//       // Reset profilePictureFile, as this is loading existing data, not a new selection
//       setProfilePictureFile(null);
//     }
//   }, [currentUser]);

//   const maxNumber = 1;
//   const countries = Country.getAllCountries();


//   // This onChange now directly captures the file and sets the preview
//   const onChange = useCallback((imageList: ImageListType) => {
//     if (imageList.length > 0) {
//       const selectedImage = imageList[0];
//       setProfilePicturePreview(selectedImage.dataURL || null); // For displaying preview
//       setProfilePictureFile(selectedImage.file || null); // Capture the actual file for upload
//     } else {
//       // User removed the image using image-uploading's built-in remove/replace logic
//       setProfilePicturePreview(null);
//       setProfilePictureFile(null);
//     }
//   }, []);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSocialsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setSocials((prev) => ({ ...prev, [name.toLowerCase()]: value }));
//   };

//   // const handleInterestClick = (interest: string) => {
//   //   setInterests((prev) =>
//   //     prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
//   //   );
//   // };

//   const citiesOfSelectedCountry = formData.country ? getUniqueCities(formData.country) : [];

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError(null);
//     setSuccess(null);
//     setIsSubmitting(true);

//     if (!currentUser._id) {
//       setError("User ID not found. Cannot update profile.");
//       setIsSubmitting(false);
//       return;
//     }

//     const updateData = new FormData();

//     // Append form data fields
//     Object.entries(formData).forEach(([key, value]) => {
//       if (value !== null && value !== undefined && value !== '') {
//         updateData.append(key, value);
//       }
//     });

//     // Append interests
//     // if (interests.length > 0) {
//     //   updateData.append('interests', JSON.stringify(interests));
//     // } else {
//     //   updateData.append('interests', '[]');
//     // }


//      // Append social links object as a JSON string
//     updateData.append('socialMediaLinks', JSON.stringify(socials));

//     let finalProfilePictureUrl: string | null = currentUser.profilePicture; // Start with current URL

//     // **Handle Profile Picture Upload to S3 Here**
//     // Check if there's a NEW image file selected by the user using the new state variable
//     if (profilePictureFile) { // Check if a new file was selected
//       toast.info("Uploading profile picture...");
//       console.log("Attempting to upload new profile picture to S3.");
//       try {
//         const uploadedImage = await uploadFileToS3(profilePictureFile, 'profile-pictures'); // Use the captured file
//         console.log("S3 Upload response:", uploadedImage);
//         if (uploadedImage.location) {
//           finalProfilePictureUrl = uploadedImage.location;
//           // Update the preview state immediately with the S3 URL
//           setProfilePicturePreview(finalProfilePictureUrl);
//           // Clear the file state as it's now uploaded
//           setProfilePictureFile(null); // This is important: clear the file after upload
//           toast.success("Profile picture uploaded to S3!");
//           console.log("Profile picture uploaded to S3! URL:", finalProfilePictureUrl);
//         } else {
//           setError("Failed to upload profile picture to S3. Please try again.");
//           toast.error("Failed to upload profile picture.");
//           setIsSubmitting(false);
//           return; // Stop submission if S3 upload fails
//         }
//       } catch (uploadErr) {
//         console.error("Error uploading profile picture to S3:", uploadErr);
//         setError("An error occurred during profile picture upload.");
//         toast.error("An error occurred during profile picture upload.");
//         setIsSubmitting(false);
//         return; // Stop submission if S3 upload fails
//       }
//     } else if (profilePicturePreview === null && currentUser.profilePicture) {
//         // Scenario: User had a picture, but removed it (profilePicturePreview became null)
//         finalProfilePictureUrl = null;
//         console.log("Profile picture removed by user.");
//     } else if (profilePicturePreview === null && !currentUser.profilePicture) {
//         // Scenario: No picture was ever set and none is uploaded now
//         finalProfilePictureUrl = null;
//         console.log("No profile picture was ever set, and none is being uploaded.");
//     }
//     // If profilePictureFile is null and profilePicturePreview is not null, it means no new file was selected,
//     // and the existing picture is being kept. In this case, finalProfilePictureUrl already holds currentUser.profilePicture.


//     // Append the final profilePictureUrl (either existing, new S3 URL, or null for removal)
//     if (finalProfilePictureUrl) {
//       updateData.append('profilePicture', finalProfilePictureUrl);
//       console.log("Appending profilePicture to FormData:", finalProfilePictureUrl);
//     } else {
//       updateData.append('profilePicture', ''); // Send empty string for backend to set as null
//       console.log("Appending empty string for profilePicture to FormData (removal/none).");
//     }

//     try {
//       // Send the entire FormData to your backend
//       const response = await updateUserProfile(currentUser._id, updateData);

//       const responseData: AuthSuccessData = (response as any).data || response;

//       if (responseData && responseData.user) {
//         // Update Redux state with the new user data from the API response
//         dispatch(setUserData({
//           _id: responseData.user._id || '',
//           fullNameEnglish: responseData.user.fullNameEnglish || '',
//           fullNameArabic: responseData.user.fullNameArabic || '',
//           username: responseData.user.username || '',
//           email: responseData.user.email,
//           mobileNumber: responseData.user.mobileNumber || '',
//           role: responseData.user.role || '',
//           country: responseData.user.country || '',
//           city: responseData.user.city || '',
//           interests: responseData.user.interests || [],
//           profilePicture: responseData.user.profilePicture || null,
//           socialMediaLinks: responseData.user.socialMediaLinks || { instagram: '', behance: '', linkedin: '', facebook: '' },
//           biographyArabic: responseData.user.biographyArabic || '',
//           biographyEnglish:responseData.user.biographyEnglish || '',
//           nationalId: responseData.user.nationalId || '',
//         }));
//         setSuccess("Profile updated successfully!");
//         toast.success("Profile updated successfully!");

//       } else {
//         setError("Profile updated, but user data was not returned in the response.");
//         toast.error("Profile updated, but data not returned.");
//       }
//     } catch (err: any) {
//       const msg = err.response?.data?.message || err.response?.data?.error || "Profile update failed: Network error or unexpected issue.";
//       setError(msg);
//       toast.error(msg);
//       console.error("Profile update caught an error:", err);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };


//     return (
//     <div>
//       <form
//         className="border border-[#ebedf3] dark:border-[#191e3a] rounded-md p-4 mb-5 bg-white dark:bg-black"
//         onSubmit={handleSubmit}
//       >
//         <h6 className="text-lg font-montserrat-regular text-yankees-blue mb-5">User Information</h6>
//         <div className="flex flex-col sm:flex-row">
//           <div className="flex flex-col items-center">
//             <div className="relative mr-6">
//               <ImageUploading
//                 value={profilePicturePreview ? [{ dataURL: profilePicturePreview }] : []} // Use profilePicturePreview for display
//                 onChange={onChange}
//                 maxNumber={maxNumber}
//               >
//                 {({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove }) => (
//                   <div className="upload__image-wrapper">
//                     {profilePicturePreview ? ( // Check profilePicturePreview for display
//                       <div className="ml-6 w-32 h-32 overflow-hidden rounded-full border border-gray-200">
//                         <img
//                           src={profilePicturePreview} // Use profilePicturePreview here
//                           alt="Profile"
//                           className="object-cover w-full h-full"
//                         />
//                       </div>
//                     ) : (
//                       <div className="ml-6 w-32 h-32 overflow-hidden rounded-full border border-gray-200 flex items-center justify-center">
//                         <img
//                           src="/assets/images/default-profile.png"
//                           alt=""
//                           className="object-cover w-full h-full"
//                         />
//                       </div>
//                     )}
//                     <button
//                       type="button"
//                       className="btn bg-yankees-blue text-white font-montserrat-light mt-3"
//                       onClick={onImageUpload}
//                       // Disable upload button if a picture is already displayed (either existing or newly selected)
//                       disabled={!!profilePicturePreview} // This is the change!
//                     >
//                       Upload Profile Picture
//                     </button>
//                     {profilePicturePreview && ( // Show remove button if there's a picture
//                         <button
//                             type="button"
//                             className="btn btn-outline-danger mt-2 ml-6"
//                             onClick={() => {
//                                 setProfilePicturePreview(null);
//                                 setProfilePictureFile(null);
//                             }}
//                         >
//                             Remove Picture
//                         </button>
//                     )}
//                   </div>
//                 )}
//               </ImageUploading>
//             </div>
//           </div>
//           <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
//             {/* Form fields */}
//             {Object.keys(formData).map((key) => (
//               <div className='text-yankees-blue font-montserrat-extralight' key={key}>
//                 <label htmlFor={key}>{key.replace(/([A-Z])/g, " $1")}</label>
//                 {key === 'country' ? (
//                   <select
//                     id={key}
//                     name={key}
//                     value={formData[key as keyof typeof formData]}
//                     onChange={handleInputChange}
//                     className="form-select text-yankees-blue font-montserrat-light"
//                   >
//                     <option value="">Select your Country</option>
//                     {countries.map((country: ICountry) => (
//                       <option key={country.isoCode} value={country.isoCode}>
//                         {country.name}
//                       </option>
//                     ))}
//                   </select>
//                 ) : key === 'city' ? (
//                   <select
//                     id={key}
//                     name={key}
//                     value={formData[key as keyof typeof formData]}
//                     onChange={handleInputChange}
//                     className="form-select text-yankees-blue font-montserrat-light"
//                     disabled={!formData.country}
//                   >
//                     <option value="">Select your City</option>
//                     {citiesOfSelectedCountry.map((item) => (
//                       <option key={item.name} value={item.name}>
//                         {item.name}
//                       </option>
//                     ))}
//                   </select>
//                 ) : (
//                   <input
//                     id={key}
//                     name={key}
//                     type={key === 'email' ? 'email' : 'text'}
//                     value={formData[key as keyof typeof formData]}
//                     onChange={handleInputChange}
//                     className="form-input text-yankees-blue font-montserrat-light"
//                   />
//                 )}
//               </div>
//             ))}

//             {/* Interests */}
//             {/* <div>
//               <label className="block text-yankees-blue font-montserrat-extralight mb-2">Interests</label>
//               <div className="flex flex-wrap gap-2">
//                 {interestsOptions.map((interest) => (
//                   <button
//                     type="button"
//                     key={interest}
//                     onClick={() => handleInterestClick(interest)}
//                     className={`px-4 py-2 rounded-full text-sm font-montserrat-light ${
//                       interests.includes(interest)
//                         ? "bg-yankees-blue text-white"
//                         : "bg-gray-200 text-gray-700"
//                     }`}
//                   >
//                     {interest}
//                   </button>
//                 ))}
//               </div>
//             </div> */}

//             {/* Social Form */}
//             <div className="flex flex-col sm:col-span-2">
//               <h6 className="text-lg font-montserrat-regular text-yankees-blue mb-5">Socials</h6>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                 {/* LinkedIn */}
//                 <div className="flex flex-col">
//                   <label htmlFor="linkedin" className="text-sm text-yankees-blue font-montserrat-extralight">LinkedIn</label>
//                   <input
//                     type="text"
//                     id="linkedin"
//                     name="linkedin"
//                     placeholder=""
//                     value={socials.linkedin || ''}
//                     onChange={handleSocialsChange}
//                     className="form-input"
//                   />
//                 </div>

//                 {/* Behance */}
//                 <div className="flex flex-col">
//                   <label htmlFor="behance" className="text-sm text-yankees-blue font-montserrat-extralight">Behance</label>
//                   <input
//                     type="text"
//                     id="behance"
//                     name="behance"
//                     placeholder=""
//                     value={socials.behance || ''}
//                     onChange={handleSocialsChange}
//                     className="form-input"
//                   />
//                 </div>

//                 {/* Facebook */}
//                 <div className="flex flex-col">
//                   <label htmlFor="facebook" className="text-sm text-yankees-blue font-montserrat-extralight">Facebook</label>
//                   <input
//                     type="text"
//                     id="facebook"
//                     name="facebook"
//                     placeholder=""
//                     value={socials.facebook || ''}
//                     onChange={handleSocialsChange}
//                     className="form-input"
//                   />
//                 </div>

//                 {/* Instagram */}
//                 <div className="flex flex-col">
//                   <label htmlFor="instagram" className="text-sm text-yankees-blue font-montserrat-extralight">Instagram</label>
//                   <input
//                     type="text"
//                     id="instagram"
//                     name="instagram"
//                     placeholder=""
//                     value={socials.instagram || ''}
//                     onChange={handleSocialsChange}
//                     className="form-input"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="sm:col-span-2 mt-3 justify-items-center">
//               {error && <p className="text-red-500 mb-2 text-center">{error}</p>}
//               {success && <p className="text-green-500 mb-2 text-center">{success}</p>}
//               <button
//                 type="submit"
//                 className="btn bg-yankees-blue text-white font-montserrat-light w-full"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? 'Saving...' : 'Save'}
//               </button>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );

//   // return (
//   //   <div>
//   //     <form className="border border-[#ebedf2] dark:border-[#191e3a] rounded-md p-4 mb-5 bg-white dark:bg-black" onSubmit={handleSubmit}>
//   //       <h6 className="text-lg font-montserrat-regular text-yankees-blue mb-5">User Information</h6>
//   //       <div className="flex flex-col sm:flex-row">
//   //         <div className="flex flex-col items-center">
//   //           {/* Profile Picture Upload */}
//   //           <div className="relative mr-6">
//   //             <ImageUploading
//   //               value={profilePicturePreview ? [{ dataURL: profilePicturePreview }] : []} // Use profilePicturePreview for display
//   //               onChange={onChange}
//   //               maxNumber={maxNumber}
//   //             >
//   //               {({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove }) => (
//   //                 <div className="upload__image-wrapper">
//   //                   {profilePicturePreview ? ( // Check profilePicturePreview for display
//   //                     <div className="ml-6 w-32 h-32 overflow-hidden rounded-full border border-gray-200">
//   //                       <img
//   //                         src={profilePicturePreview} // Use profilePicturePreview here
//   //                         alt="Profile"
//   //                         className="object-cover w-full h-full"
//   //                       />
//   //                     </div>
//   //                   ) : (
//   //                     <div className="ml-6 w-32 h-32 overflow-hidden rounded-full border border-gray-200 flex items-center justify-center">
//   //                       <img
//   //                         src="/assets/images/default-profile.png"
//   //                         alt=""
//   //                         className="object-cover w-full h-full"
//   //                       />
//   //                     </div>
//   //                   )}
//   //                   <button
//   //                     type="button"
//   //                     className="btn bg-yankees-blue text-white font-montserrat-light mt-3"
//   //                     onClick={onImageUpload}
//   //                     // Disable upload button if a picture is already displayed (either existing or newly selected)
//   //                     disabled={!!profilePicturePreview} // This is the change!
//   //                   >
//   //                     Upload Profile Picture
//   //                   </button>
//   //                   {profilePicturePreview && ( // Show remove button if there's a picture
//   //                       <button
//   //                           type="button"
//   //                           className="btn btn-outline-danger mt-2 ml-6"
//   //                           onClick={() => {
//   //                               setProfilePicturePreview(null);
//   //                               setProfilePictureFile(null);
//   //                           }}
//   //                       >
//   //                           Remove Picture
//   //                       </button>
//   //                   )}
//   //                 </div>
//   //               )}
//   //             </ImageUploading>
//   //           </div>
//   //         </div>
//   //         <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
//   //           {/* Full Name/Artist Name */}
//   //           <div>
//   //             <label htmlFor="fullName" className="block mb-2 font-montserrat-regular text-yankees-blue">Full Name (English)</label>
//   //             <input
//   //               id="fullNameEnglish"
//   //               type="text"
//   //               value={formData.fullNameEnglish}
//   //               onChange={(e) =>
//   //                 setFormData({ ...formData, fullNameEnglish: e.target.value })
//   //               }
//   //               className="form-input font-montserrat-light text-yankees-blue"
//   //             />
//   //           </div>

//   //           <div>
//   //             <label htmlFor="fullName" className="block mb-2 font-montserrat-regular text-yankees-blue">Full Name (Arabic )</label>
//   //             <input
//   //               id="fullNameArabic"
//   //               type="text"
//   //               value={formData.fullNameArabic}
//   //               onChange={(e) =>
//   //                 setFormData({ ...formData, fullNameArabic: e.target.value })
//   //               }
//   //               className="form-input font-montserrat-light text-yankees-blue"
//   //             />
//   //           </div>

//   //           {/* Username */}
//   //           <div>
//   //             <label htmlFor="username" className="block mb-2 font-montserrat-regular text-yankees-blue">Username</label>
//   //             <input
//   //               id="username"
//   //               type="text"
//   //               value={formData.username}
//   //               onChange={(e) =>
//   //                 validateUsername(e.target.value)
//   //               }
//   //               className="form-input font-montserrat-light text-yankees-blue"
//   //             />
//   //             {isUsernameValid === false && (
//   //               <span className="text-sm text-red-500">Username is already taken.</span>
//   //             )}
//   //           </div>
//   //           {/* Email Address */}
//   //           <div>
//   //             <label htmlFor="email" className="block mb-2 font-montserrat-regular text-yankees-blue">Email Address</label>
//   //             <input
//   //               id="email"
//   //               type="email"
//   //               value={formData.email}
//   //               onChange={(e) =>
//   //                 setFormData({ ...formData, email: e.target.value })
//   //               }
//   //               className="form-input font-montserrat-light text-yankees-blue"
//   //             />
//   //             <button
//   //               type="button"
//   //               className="btn font-montserrat-light border-fire-opal bg-fire-opal text-white shadow-fire-opal mt-2"
//   //               onClick={sendEmailOTP}
//   //             >
//   //               Verify with OTP
//   //             </button>
//   //           </div>
//   //           {/* Mobile Number */}
//   //           <div>
//   //             <label htmlFor="mobile" className="block mb-2 font-montserrat-regular text-yankees-blue">Mobile Number</label>
//   //             <input
//   //               id="mobile"
//   //               type="tel"
//   //               value={formData.mobile}
//   //               onChange={(e) =>
//   //                 setFormData({ ...formData, mobile: e.target.value })
//   //               }
//   //               className="form-input font-montserrat-light text-yankees-blue"
//   //             />
//   //             <button
//   //               type="button"
//   //               className="btn font-montserrat-light border-fire-opal bg-fire-opal text-white shadow-fire-opal mt-2"
//   //               onClick={sendMobileOTP}
//   //             >
//   //               Verify with SMS
//   //             </button>
//   //           </div>

//   //            {/* National ID */}
//   //            <div>
//   //             <label htmlFor="nationalId" className="block mb-2 font-montserrat-regular text-yankees-blue">National ID Number</label>
//   //             <input
//   //               id="nationalId"
//   //               type="text"
//   //               value={formData.nationalId}
//   //               onChange={(e) =>
//   //                 setFormData({ ...formData, nationalId: e.target.value })
//   //               }
//   //               className="form-input font-montserrat-light text-yankees-blue"
//   //             />
//   //           </div>

//   //           {/* Biography */}
//   //           <div className="sm:col-span-2">
//   //             <label htmlFor="biography" className="block mb-2 font-montserrat-regular text-yankees-blue">Biography/About Me (Arabic & English)</label>
//   //             <textarea
//   //               id="biography"
//   //               rows={4}
//   //               value={formData.biography}
//   //               onChange={(e) =>
//   //                 setFormData({ ...formData, biography: e.target.value })
//   //               }
//   //               className="form-input font-montserrat-light text-yankees-blue"
//   //             />
//   //           </div>
//   //           {/* Location */}
//   //           <div>
//   //             <label htmlFor="city" className="block mb-2 font-montserrat-regular text-yankees-blue">City</label>
//   //             <input
//   //               id="city"
//   //               type="text"
//   //               value={formData.city}
//   //               onChange={(e) =>
//   //                 setFormData({ ...formData, city: e.target.value })
//   //               }
//   //               className="form-input font-montserrat-light text-yankees-blue"
//   //             />
//   //           </div>
//   //           <div>
//   //             <label htmlFor="country" className="block mb-2 font-montserrat-regular text-yankees-blue">Country</label>
//   //             <input
//   //               id="country"
//   //               type="text"
//   //               value={formData.country}
//   //               onChange={(e) =>
//   //                 setFormData({ ...formData, country: e.target.value })
//   //               }
//   //               className="form-input font-montserrat-light text-yankees-blue"
//   //             />
//   //           </div>

//   //           {/* Social Media Links */}
//   //           {['Instagram', 'Behance', 'Facebook'].map((platform) => (
//   //             <div key={platform}>
                
//   //               <label htmlFor={platform.toLowerCase()} className="block mb-2 font-montserrat-regular text-yankees-blue">{platform}</label>
//   //               {/* <input
//   //                 id={platform.toLowerCase()}
//   //                 type="url"
//   //                 placeholder={`Enter ${platform} link`}
//   //                 value={formData.socialMedia[platform.toLowerCase()]}
//   //                 onChange={(e) =>
//   //                   setFormData({
//   //                     ...formData,
//   //                     socialMedia: {
//   //                       ...formData.socialMedia,
//   //                       [platform.toLowerCase()]: e.target.value,
//   //                     },
//   //                   })
//   //                 }
//   //                 className="form-input font-montserrat-light text-yankees-blue"
//   //               /> */}
//   //               <input
//   //                 id={platform.toLowerCase()}
//   //                 type="url"
//   //                 placeholder={`Enter ${platform} link`}
//   //                 value={formData.socialMedia[platform.toLowerCase()] || ''} // Ensures a default value
//   //                 onChange={(e) =>
//   //                   setFormData({
//   //                     ...formData,
//   //                     socialMedia: {
//   //                       ...formData.socialMedia,
//   //                       [platform.toLowerCase()]: e.target.value,
//   //                     },
//   //                   })
//   //                 }
//   //                 className="form-input font-montserrat-light text-yankees-blue"
//   //               />;
//   //             </div>
//   //           ))}
           
//   //           {/* Save Button */}
//   //           <div className="sm:col-span-2 mt-5">
//   //             <button
//   //               type="button"
//   //               className="btn font-montserrat-light border-yankees-blue bg-yankees-blue text-white shadow-yankees-blue w-full"
//   //               onClick={saveChanges}
//   //             >
//   //               Save Changes
//   //             </button>
//   //           </div>
//   //         </div>
//   //       </div>
//   //     </form>
//   //   </div>
//   // );
// };

// export default UserProfileForm;

///////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import { useState, useEffect, useCallback } from 'react';
// import ImageUploading, { ImageListType } from 'react-images-uploading';
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../store/store';
// import { setUserData, SocialMediaLinks as UserSocialMediaLinks } from '../store/userSlice';
// import { updateUserProfile, AuthSuccessData } from '../api/user';
// import { City, Country, ICountry } from 'country-state-city';
// import { uploadFileToS3 } from '../utils/s3Uploader';
// import { toast } from 'react-toastify';

// const getUniqueCities = (countryCode: string) => {
//   const cities = City.getCitiesOfCountry(countryCode);
//   if (!cities) {
//     return [];
//   }
//   const uniqueCityNames = new Set<string>();
//   const uniqueCitiesArray: { name: string; stateCode?: string }[] = [];
//   cities.forEach(city => {
//     if (!uniqueCityNames.has(city.name)) {
//       uniqueCityNames.add(city.name);
//       uniqueCitiesArray.push(city);
//     }
//   });
//   return uniqueCitiesArray;
// };

// const UserProfileForm = () => {
//   const dispatch = useDispatch();
//   const currentUser = useSelector((state: RootState) => state.user);

//   const [profilePictureFile, setProfilePictureFile] = useState<File | null>(null);
//   const [profilePicturePreview, setProfilePicturePreview] = useState<string | null>(null);

//   const [formData, setFormData] = useState({
//     fullNameEnglish: "",
//     fullNameArabic: "",
//     username: "",
//     mobileNumber: "",
//     email: "",
//     city: "",
//     country: "",
//     biographyEnglish: "",
//     biographyArabic: "",
//     nationalId: "",
//   });

//   const [socials, setSocials] = useState<UserSocialMediaLinks>({
//     linkedin: "",
//     behance: "",
//     facebook: "",
//     instagram: "",
//   });
//   const [error, setError] = useState<string | null>(null);
//   const [success, setSuccess] = useState<string | null>(null);
//   const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

//   useEffect(() => {
//     if (currentUser && currentUser.isAuthenticated) {
//       console.log("Current User data from Redux:", currentUser);
//       console.log("Social Media Links from Redux:", currentUser.socialMediaLinks);

//       setFormData({
//         fullNameEnglish: currentUser.fullNameEnglish || "",
//         fullNameArabic: currentUser.fullNameArabic || "",
//         username: currentUser.username || "",
//         mobileNumber: currentUser.mobileNumber || "",
//         email: currentUser.email || "",
//         city: currentUser.city || "",
//         country: currentUser.country || "",
//         biographyEnglish: currentUser.biographyEnglish || "",
//         biographyArabic: currentUser.biographyArabic || "",
//         nationalId: currentUser.nationalId || "",
//       });

//       setSocials({
//         linkedin: currentUser.socialMediaLinks?.linkedin || "",
//         behance: currentUser.socialMediaLinks?.behance || "",
//         facebook: currentUser.socialMediaLinks?.facebook || "",
//         instagram: currentUser.socialMediaLinks?.instagram || "",
//       });

//       if (currentUser.profilePicture) {
//         setProfilePicturePreview(currentUser.profilePicture);
//       } else {
//         setProfilePicturePreview(null);
//       }
//       setProfilePictureFile(null);
//     }
//   }, [currentUser]);

//   const maxNumber = 1;
//   const countries = Country.getAllCountries();

//   const onChange = useCallback((imageList: ImageListType) => {
//     if (imageList.length > 0) {
//       const selectedImage = imageList[0];
//       setProfilePicturePreview(selectedImage.dataURL || null);
//       setProfilePictureFile(selectedImage.file || null);
//     } else {
//       setProfilePicturePreview(null);
//       setProfilePictureFile(null);
//     }
//   }, []);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSocialsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setSocials((prev) => ({ ...prev, [name.toLowerCase()]: value }));
//   };

//   const citiesOfSelectedCountry = formData.country ? getUniqueCities(formData.country) : [];

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError(null);
//     setSuccess(null);
//     setIsSubmitting(true);

//     if (!currentUser._id) {
//       setError("User ID not found. Cannot update profile.");
//       setIsSubmitting(false);
//       return;
//     }

//     const updateData = new FormData();

//     Object.entries(formData).forEach(([key, value]) => {
//       if (value !== null && value !== undefined && value !== '') {
//         updateData.append(key, value);
//       }
//     });

//     updateData.append('socialMediaLinks', JSON.stringify(socials));

//     let finalProfilePictureUrl: string | null = currentUser.profilePicture;

//     if (profilePictureFile) {
//       toast.info("Uploading profile picture...");
//       console.log("Attempting to upload new profile picture to S3.");
//       try {
//         const uploadedImage = await uploadFileToS3(profilePictureFile, 'profile-pictures');
//         console.log("S3 Upload response:", uploadedImage);
//         if (uploadedImage.location) {
//           finalProfilePictureUrl = uploadedImage.location;
//           setProfilePicturePreview(finalProfilePictureUrl);
//           setProfilePictureFile(null);
//           toast.success("Profile picture uploaded to S3!");
//           console.log("Profile picture uploaded to S3! URL:", finalProfilePictureUrl);
//         } else {
//           setError("Failed to upload profile picture to S3. Please try again.");
//           toast.error("Failed to upload profile picture.");
//           setIsSubmitting(false);
//           return;
//         }
//       } catch (uploadErr) {
//         console.error("Error uploading profile picture to S3:", uploadErr);
//         setError("An error occurred during profile picture upload.");
//         toast.error("An error occurred during profile picture upload.");
//         setIsSubmitting(false);
//         return;
//       }
//     } else if (profilePicturePreview === null && currentUser.profilePicture) {
//       finalProfilePictureUrl = null;
//       console.log("Profile picture removed by user.");
//     } else if (profilePicturePreview === null && !currentUser.profilePicture) {
//       finalProfilePictureUrl = null;
//       console.log("No profile picture was ever set, and none is being uploaded.");
//     }

//     if (finalProfilePictureUrl) {
//       updateData.append('profilePicture', finalProfilePictureUrl);
//       console.log("Appending profilePicture to FormData:", finalProfilePictureUrl);
//     } else {
//       updateData.append('profilePicture', '');
//       console.log("Appending empty string for profilePicture to FormData (removal/none).");
//     }

//     try {
//       const response = await updateUserProfile(currentUser._id, updateData);
//       const responseData: AuthSuccessData = (response as any).data || response;

//       if (responseData && responseData.user) {
//         dispatch(setUserData({
//           _id: responseData.user._id || '',
//           fullNameEnglish: responseData.user.fullNameEnglish || '',
//           fullNameArabic: responseData.user.fullNameArabic || '',
//           username: responseData.user.username || '',
//           email: responseData.user.email,
//           mobileNumber: responseData.user.mobileNumber || '',
//           role: responseData.user.role || '',
//           country: responseData.user.country || '',
//           city: responseData.user.city || '',
//           interests: responseData.user.interests || [],
//           profilePicture: responseData.user.profilePicture || null,
//           socialMediaLinks: responseData.user.socialMediaLinks || { instagram: '', behance: '', linkedin: '', facebook: '' },
//           biographyArabic: responseData.user.biographyArabic || '',
//           biographyEnglish: responseData.user.biographyEnglish || '',
//           nationalId: responseData.user.nationalId || '',
//         }));
//         setSuccess("Profile updated successfully!");
//         toast.success("Profile updated successfully!");

//       } else {
//         setError("Profile updated, but user data was not returned in the response.");
//         toast.error("Profile updated, but data not returned.");
//       }
//     } catch (err: any) {
//       const msg = err.response?.data?.message || err.response?.data?.error || "Profile update failed: Network error or unexpected issue.";
//       setError(msg);
//       toast.error(msg);
//       console.error("Profile update caught an error:", err);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div>
//       <form
//         className="border border-[#ebedf3] dark:border-[#191e3a] rounded-md p-4 mb-5 bg-white dark:bg-black"
//         onSubmit={handleSubmit}
//       >
//         <h6 className="text-lg font-montserrat-regular text-yankees-blue mb-5">User Information</h6>
//         <div className="flex flex-col sm:flex-row">
//           <div className="flex flex-col items-center">
//             <div className="relative mr-6">
//               <ImageUploading
//                 value={profilePicturePreview ? [{ dataURL: profilePicturePreview }] : []}
//                 onChange={onChange}
//                 maxNumber={maxNumber}
//               >
//                 {({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove }) => (
//                   <div className="upload__image-wrapper">
//                     {profilePicturePreview ? (
//                       <div className="ml-6 w-32 h-32 overflow-hidden rounded-full border border-gray-200">
//                         <img
//                           src={profilePicturePreview}
//                           alt="Profile"
//                           className="object-cover w-full h-full"
//                         />
//                       </div>
//                     ) : (
//                       <div className="ml-6 w-32 h-32 overflow-hidden rounded-full border border-gray-200 flex items-center justify-center">
//                         <img
//                           src="/assets/images/default-profile.png"
//                           alt=""
//                           className="object-cover w-full h-full"
//                         />
//                       </div>
//                     )}
//                     <button
//                       type="button"
//                       className="btn bg-yankees-blue text-white font-montserrat-light mt-3"
//                       onClick={onImageUpload}
//                       disabled={!!profilePicturePreview}
//                     >
//                       Upload Profile Picture
//                     </button>
//                     {profilePicturePreview && (
//                       <button
//                         type="button"
//                         className="btn btn-outline-danger mt-2 ml-6"
//                         onClick={() => {
//                           setProfilePicturePreview(null);
//                           setProfilePictureFile(null);
//                         }}
//                       >
//                         Remove Picture
//                       </button>
//                     )}
//                   </div>
//                 )}
//               </ImageUploading>
//             </div>
//           </div>
//           <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
//             {/* Form fields (excluding biographyEnglish and biographyArabic) */}
//             {Object.keys(formData).filter(key => key !== 'biographyEnglish' && key !== 'biographyArabic').map((key) => (
//               <div className='text-yankees-blue font-montserrat-extralight' key={key}>
//                 <label htmlFor={key}>{key.replace(/([A-Z])/g, " $1").replace('fullName', 'Full Name').replace('mobileNumber', 'Mobile Number').replace('nationalId', 'National ID')}</label>
//                 {key === 'country' ? (
//                   <select
//                     id={key}
//                     name={key}
//                     value={formData[key as keyof typeof formData]}
//                     onChange={handleInputChange}
//                     className="form-select text-yankees-blue font-montserrat-light"
//                   >
//                     <option value="">Select your Country</option>
//                     {countries.map((country: ICountry) => (
//                       <option key={country.isoCode} value={country.isoCode}>
//                         {country.name}
//                       </option>
//                     ))}
//                   </select>
//                 ) : key === 'city' ? (
//                   <select
//                     id={key}
//                     name={key}
//                     value={formData[key as keyof typeof formData]}
//                     onChange={handleInputChange}
//                     className="form-select text-yankees-blue font-montserrat-light"
//                     disabled={!formData.country}
//                   >
//                     <option value="">Select your City</option>
//                     {citiesOfSelectedCountry.map((item) => (
//                       <option key={item.name} value={item.name}>
//                         {item.name}
//                       </option>
//                     ))}
//                   </select>
//                 ) : (
//                   <input
//                     id={key}
//                     name={key}
//                     type={key === 'email' ? 'email' : 'text'}
//                     value={formData[key as keyof typeof formData]}
//                     onChange={handleInputChange}
//                     className="form-input text-yankees-blue font-montserrat-light"
//                   />
//                 )}
//               </div>
//             ))}

//             {/* Biography English */}
//             <div className="sm:col-span-2">
//               <label htmlFor="biographyEnglish" className="block text-yankees-blue font-montserrat-extralight mb-2">
//                 Biography (English)
//               </label>
//               <textarea
//                 id="biographyEnglish"
//                 name="biographyEnglish"
//                 rows={6} 
//                 value={formData.biographyEnglish}
//                 onChange={handleInputChange}
//                 className="form-input text-yankees-blue font-montserrat-light w-full"
//               ></textarea>
//             </div>

//             {/* Biography Arabic */}
//             <div className="sm:col-span-2">
//               <label htmlFor="biographyArabic" className="block text-yankees-blue font-montserrat-extralight mb-2">
//                 Biography (Arabic)
//               </label>
//               <textarea
//                 id="biographyArabic"
//                 name="biographyArabic"
//                 rows={6}
//                 value={formData.biographyArabic}
//                 onChange={handleInputChange}
//                 className="form-input text-yankees-blue font-montserrat-light w-full"
//                 dir="rtl" // Optional: Add right-to-left direction for Arabic
//               ></textarea>
//             </div>

//             {/* Social Form */}
//             <div className="flex flex-col sm:col-span-2">
//               <h6 className="text-lg font-montserrat-regular text-yankees-blue mb-5">Socials</h6>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                 {/* LinkedIn */}
//                 <div className="flex flex-col">
//                   <label htmlFor="linkedin" className="text-sm text-yankees-blue font-montserrat-extralight">LinkedIn</label>
//                   <input
//                     type="text"
//                     id="linkedin"
//                     name="linkedin"
//                     placeholder=""
//                     value={socials.linkedin || ''}
//                     onChange={handleSocialsChange}
//                     className="form-input"
//                   />
//                 </div>

//                 {/* Behance */}
//                 <div className="flex flex-col">
//                   <label htmlFor="behance" className="text-sm text-yankees-blue font-montserrat-extralight">Behance</label>
//                   <input
//                     type="text"
//                     id="behance"
//                     name="behance"
//                     placeholder=""
//                     value={socials.behance || ''}
//                     onChange={handleSocialsChange}
//                     className="form-input"
//                   />
//                 </div>

//                 {/* Facebook */}
//                 <div className="flex flex-col">
//                   <label htmlFor="facebook" className="text-sm text-yankees-blue font-montserrat-extralight">Facebook</label>
//                   <input
//                     type="text"
//                     id="facebook"
//                     name="facebook"
//                     placeholder=""
//                     value={socials.facebook || ''}
//                     onChange={handleSocialsChange}
//                     className="form-input"
//                   />
//                 </div>

//                 {/* Instagram */}
//                 <div className="flex flex-col">
//                   <label htmlFor="instagram" className="text-sm text-yankees-blue font-montserrat-extralight">Instagram</label>
//                   <input
//                     type="text"
//                     id="instagram"
//                     name="instagram"
//                     placeholder=""
//                     value={socials.instagram || ''}
//                     onChange={handleSocialsChange}
//                     className="form-input"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="sm:col-span-2 mt-3 justify-items-center">
//               {error && <p className="text-red-500 mb-2 text-center">{error}</p>}
//               {success && <p className="text-green-500 mb-2 text-center">{success}</p>}
//               <button
//                 type="submit"
//                 className="btn bg-yankees-blue text-white font-montserrat-light w-full"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? 'Saving...' : 'Save'}
//               </button>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default UserProfileForm;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import { useState, useEffect, useCallback } from 'react';
// import ImageUploading, { ImageListType } from 'react-images-uploading';
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../store/store';
// import { setUserData, SocialMediaLinks as UserSocialMediaLinks } from '../store/userSlice';
// import { updateUserProfile, AuthSuccessData } from '../api/user';
// import { City, Country, ICountry } from 'country-state-city';
// import { uploadFileToS3 } from '../utils/s3Uploader';
// import { toast } from 'react-toastify';

// const getUniqueCities = (countryCode: string) => {
//   const cities = City.getCitiesOfCountry(countryCode);
//   if (!cities) {
//     return [];
//   }
//   const uniqueCityNames = new Set<string>();
//   const uniqueCitiesArray: { name: string; stateCode?: string }[] = [];
//   cities.forEach(city => {
//     if (!uniqueCityNames.has(city.name)) {
//       uniqueCityNames.add(city.name);
//       uniqueCitiesArray.push(city);
//     }
//   });
//   return uniqueCitiesArray;
// };

// // NEW HELPER FUNCTION: Formats a URL to ensure https:// and www. prefix if applicable
// const formatWebsiteUrl = (inputUrl: string | null | undefined): string => {
//   if (!inputUrl) {
//     return ''; // Return empty string for null, undefined, or empty input
//   }

//   let url = inputUrl.trim();

//   // Step 1: Ensure it has an HTTP/HTTPS protocol
//   if (!url.startsWith('http://') && !url.startsWith('https://')) {
//     url = `https://${url}`;
//   }

//   // Step 2: Extract hostname to check for 'www.' prefix and simplicity
//   try {
//     const parsed = new URL(url);
//     let hostname = parsed.hostname;

//     // If hostname already starts with 'www.', no further modification needed
//     if (hostname.startsWith('www.')) {
//       return url;
//     }

//     // Heuristic: If the hostname (without 'www.') has only one dot (e.g., 'example.com'),
//     // consider it a simple domain and prepend 'www.'
//     // This tries to avoid transforming 'blog.example.com' into 'www.blog.example.com'
//     const parts = hostname.split('.');
//     if (parts.length === 2 && parts[0] && parts[1]) { // Ensure it's like 'domain.tld'
//       parsed.hostname = `www.${hostname}`;
//       return parsed.toString();
//     }

//     // If it's not a simple domain (e.g., has subdomains like 'blog.example.com')
//     // or the 'www.' check didn't apply, return the URL as is (with corrected protocol)
//     return url;

//   } catch (e) {
//     // If URL parsing fails (e.g., invalid characters, or just a hostname without a TLD),
//     // return the best effort string (with protocol prepended if applicable).
//     // The backend should perform final, robust URL validation.
//     console.warn("Invalid URL format detected during formatting, sending as is after protocol check:", inputUrl, e);
//     return url;
//   }
// };


// const UserProfileForm = () => {
//   const dispatch = useDispatch();
//   const currentUser = useSelector((state: RootState) => state.user);

//   const [profilePictureFile, setProfilePictureFile] = useState<File | null>(null);
//   const [profilePicturePreview, setProfilePicturePreview] = useState<string | null>(null);

//   const [formData, setFormData] = useState({
//     fullNameEnglish: "",
//     fullNameArabic: "",
//     username: "",
//     mobileNumber: "",
//     email: "",
//     city: "",
//     country: "",
//     biographyEnglish: "",
//     biographyArabic: "",
//     nationalId: "",
//     website: "", // <-- ADDED: Website field
//   });

//   const [socials, setSocials] = useState<UserSocialMediaLinks>({
//     linkedin: "",
//     behance: "",
//     facebook: "",
//     instagram: "",
//   });
//   const [error, setError] = useState<string | null>(null);
//   const [success, setSuccess] = useState<string | null>(null);
//   // FIX: Correctly declare useState for isSubmitting and setIsSubmitting
//   const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

//   useEffect(() => {
//     if (currentUser && currentUser.isAuthenticated) {
//       console.log("Current User data from Redux:", currentUser);
//       console.log("Social Media Links from Redux:", currentUser.socialMediaLinks);

//       setFormData({
//         fullNameEnglish: currentUser.fullNameEnglish || "",
//         fullNameArabic: currentUser.fullNameArabic || "",
//         username: currentUser.username || "",
//         mobileNumber: currentUser.mobileNumber || "",
//         email: currentUser.email || "",
//         city: currentUser.city || "",
//         country: currentUser.country || "",
//         biographyEnglish: currentUser.biographyEnglish || "",
//         biographyArabic: currentUser.biographyArabic || "",
//         nationalId: currentUser.nationalId || "",
//         website: currentUser.website || "", // <-- ADDED: Initialize website
//       });

//       setSocials({
//         linkedin: currentUser.socialMediaLinks?.linkedin || "",
//         behance: currentUser.socialMediaLinks?.behance || "",
//         facebook: currentUser.socialMediaLinks?.facebook || "",
//         instagram: currentUser.socialMediaLinks?.instagram || "",
//       });

//       if (currentUser.profilePicture) {
//         setProfilePicturePreview(currentUser.profilePicture);
//       } else {
//         setProfilePicturePreview(null);
//       }
//       setProfilePictureFile(null);
//     }
//   }, [currentUser]);

//   const maxNumber = 1;
//   const countries = Country.getAllCountries();

//   const onChange = useCallback((imageList: ImageListType) => {
//     if (imageList.length > 0) {
//       const selectedImage = imageList[0];
//       setProfilePicturePreview(selectedImage.dataURL || null);
//       setProfilePictureFile(selectedImage.file || null);
//     } else {
//       setProfilePicturePreview(null);
//       setProfilePictureFile(null);
//     }
//   }, []);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSocialsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setSocials((prev) => ({ ...prev, [name.toLowerCase()]: value }));
//   };

//   const citiesOfSelectedCountry = formData.country ? getUniqueCities(formData.country) : [];

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError(null);
//     setSuccess(null);
//     setIsSubmitting(true);

//     if (!currentUser._id) {
//       setError("User ID not found. Cannot update profile.");
//       setIsSubmitting(false);
//       return;
//     }

//     const updateData = new FormData();

//     Object.entries(formData).forEach(([key, value]) => {
//       if (key === 'website') {
//         // Apply the new formatting function to the website URL
//         const formattedWebsite = formatWebsiteUrl(value as string);
//         if (formattedWebsite) {
//           updateData.append(key, formattedWebsite);
//           console.log(`Formatted website URL sent: ${formattedWebsite}`);
//         } else {
//           updateData.append(key, ''); // Send empty string if input was empty/null
//           console.log("Website field cleared or no input provided.");
//         }
//       } else if (value !== null && value !== undefined && value !== '') {
//         updateData.append(key, value);
//       }
//     });


//     updateData.append('socialMediaLinks', JSON.stringify(socials));

//     let finalProfilePictureUrl: string | null = null; // Initialize as null

//     // Logic for profile picture handling
//     if (profilePictureFile) {
//       toast.info("Uploading profile picture...");
//       console.log("Attempting to upload new profile picture to S3.");
//       try {
//         const uploadedImage = await uploadFileToS3(profilePictureFile, 'profile-pictures');
//         console.log("S3 Upload response:", uploadedImage);
//         if (uploadedImage.location) {
//           finalProfilePictureUrl = uploadedImage.location;
//           setProfilePicturePreview(finalProfilePictureUrl);
//           setProfilePictureFile(null);
//           toast.success("Profile picture uploaded to S3!");
//           console.log("Profile picture uploaded to S3! URL:", finalProfilePictureUrl);
//         } else {
//           setError("Failed to upload profile picture to S3. Please try again.");
//           toast.error("Failed to upload profile picture.");
//           setIsSubmitting(false);
//           return;
//         }
//       } catch (uploadErr) {
//         console.error("Error uploading profile picture to S3:", uploadErr);
//         setError("An error occurred during profile picture upload.");
//         toast.error("An error occurred during profile picture upload.");
//         setIsSubmitting(false);
//         return;
//       }
//     } else if (profilePicturePreview === null && currentUser.profilePicture) {
//       finalProfilePictureUrl = null;
//       console.log("Profile picture removed by user (setting to null for backend).");
//     } else if (profilePicturePreview !== null && !profilePictureFile && currentUser.profilePicture) {
//       finalProfilePictureUrl = currentUser.profilePicture;
//       console.log("Retaining existing profile picture.");
//     }

//     if (finalProfilePictureUrl !== null) {
//       updateData.append('profilePicture', finalProfilePictureUrl);
//       console.log("Appending profilePicture to FormData:", finalProfilePictureUrl);
//     } else {
//       updateData.append('profilePicture', '');
//       console.log("Appending empty string for profilePicture to FormData (removal).");
//     }

//     try {
//       const response = await updateUserProfile(currentUser._id, updateData);
//       const responseData: AuthSuccessData = (response as any).data || response;

//       if (responseData && responseData.user) {
//         dispatch(setUserData({
//           _id: responseData.user._id || '',
//           fullNameEnglish: responseData.user.fullNameEnglish || '',
//           fullNameArabic: responseData.user.fullNameArabic || '',
//           username: responseData.user.username || '',
//           email: responseData.user.email,
//           mobileNumber: responseData.user.mobileNumber || '',
//           role: responseData.user.role || '',
//           country: responseData.user.country || '',
//           city: responseData.user.city || '',
//           interests: responseData.user.interests || [],
//           profilePicture: responseData.user.profilePicture || null,
//           socialMediaLinks: responseData.user.socialMediaLinks || { instagram: '', behance: '', linkedin: '', facebook: '' },
//           biographyArabic: responseData.user.biographyArabic || '',
//           biographyEnglish: responseData.user.biographyEnglish || '',
//           // FIX: Corrected typo from 'responseA' to 'responseData'
//           nationalId: responseData.user.nationalId || '',
//           website: responseData.user.website || '', // <-- ADDED: Dispatch website to Redux
//         }));
//         setSuccess("Profile updated successfully!");
//         toast.success("Profile updated successfully!");

//       } else {
//         setError("Profile updated, but user data was not returned in the response.");
//         toast.error("Profile updated, but data not returned.");
//       }
//     } catch (err: any) {
//       const msg = err.response?.data?.message || err.response?.data?.error || "Profile update failed: Network error or unexpected issue.";
//       setError(msg);
//       toast.error(msg);
//       console.error("Profile update caught an error:", err);
//     } finally {
//       setIsSubmitting(false); // FIX: Correctly use setIsSubmitting
//     }
//   };

//   return (
//     <div>
//       <form
//         className="border border-[#ebedf3] dark:border-[#191e3a] rounded-md p-4 mb-5 bg-white dark:bg-black"
//         onSubmit={handleSubmit}
//       >
//         <h6 className="text-lg font-montserrat-regular text-yankees-blue mb-5">User Information</h6>
//         <div className="flex flex-col sm:flex-row">
//           <div className="flex flex-col items-center">
//             <div className="relative mr-6">
//               <ImageUploading
//                 value={profilePicturePreview ? [{ dataURL: profilePicturePreview }] : []}
//                 onChange={onChange}
//                 maxNumber={maxNumber}
//               >
//                 {({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove }) => (
//                   <div className="upload__image-wrapper">
//                     {profilePicturePreview ? (
//                       <div className="ml-6 w-32 h-32 overflow-hidden rounded-full border border-gray-200">
//                         <img
//                           src={profilePicturePreview}
//                           alt="Profile"
//                           className="object-cover w-full h-full"
//                         />
//                       </div>
//                     ) : (
//                       <div className="ml-6 w-32 h-32 overflow-hidden rounded-full border border-gray-200 flex items-center justify-center">
//                         <img
//                           src="/assets/images/default-profile.png"
//                           alt="Default Profile"
//                           className="object-cover w-full h-full"
//                         />
//                       </div>
//                     )}
//                     <button
//                       type="button"
//                       className="btn bg-yankees-blue text-white font-montserrat-light mt-3"
//                       onClick={onImageUpload}
//                       disabled={!!profilePicturePreview}
//                     >
//                       Upload Profile Picture
//                     </button>
//                     {profilePicturePreview && (
//                       <button
//                         type="button"
//                         className="btn btn-outline-danger mt-2 ml-6"
//                         onClick={() => {
//                           setProfilePicturePreview(null);
//                           setProfilePictureFile(null);
//                         }}
//                       >
//                         Remove Picture
//                       </button>
//                     )}
//                   </div>
//                 )}
//               </ImageUploading>
//             </div>
//           </div>
//           <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
//             {/* Form fields (excluding biographyEnglish, biographyArabic, and website) */}
//             {Object.keys(formData).filter(key =>
//                 key !== 'biographyEnglish' &&
//                 key !== 'biographyArabic' &&
//                 key !== 'website' // <-- EXCLUDED: Handle website separately below for placement
//             ).map((key) => (
//               <div className='text-yankees-blue font-montserrat-extralight' key={key}>
//                 <label htmlFor={key}>{key.replace(/([A-Z])/g, " $1").replace('fullName', 'Full Name').replace('mobileNumber', 'Mobile Number').replace('nationalId', 'National ID')}</label>
//                 {key === 'country' ? (
//                   <select
//                     id={key}
//                     name={key}
//                     value={formData[key as keyof typeof formData]}
//                     onChange={handleInputChange}
//                     className="form-select text-yankees-blue font-montserrat-light"
//                   >
//                     <option value="">Select your Country</option>
//                     {countries.map((country: ICountry) => (
//                       <option key={country.isoCode} value={country.isoCode}>
//                         {country.name}
//                       </option>
//                     ))}
//                   </select>
//                 ) : key === 'city' ? (
//                   <select
//                     id={key}
//                     name={key}
//                     value={formData[key as keyof typeof formData]}
//                     onChange={handleInputChange}
//                     className="form-select text-yankees-blue font-montserrat-light"
//                     disabled={!formData.country}
//                   >
//                     <option value="">Select your City</option>
//                     {citiesOfSelectedCountry.map((item) => (
//                       <option key={item.name} value={item.name}>
//                         {item.name}
//                       </option>
//                     ))}
//                   </select>
//                 ) : (
//                   <input
//                     id={key}
//                     name={key}
//                     type={key === 'email' ? 'email' : 'text'}
//                     value={formData[key as keyof typeof formData]}
//                     onChange={handleInputChange}
//                     className="form-input text-yankees-blue font-montserrat-light"
//                   />
//                 )}
//               </div>
//             ))}

//             {/* Website Input Field */}
//             <div className='text-yankees-blue font-montserrat-extralight'>
//                 <label htmlFor="website">Website</label>
//                 <input
//                     id="website"
//                     name="website"
//                     type="text" // Changed to type="text" to allow more flexible input before formatting
//                     placeholder="www.example.com"
//                     value={formData.website}
//                     onChange={handleInputChange}
//                     className="form-input text-yankees-blue font-montserrat-light"
//                 />
//             </div>

//             {/* Biography English */}
//             <div className="sm:col-span-2">
//               <label htmlFor="biographyEnglish" className="block text-yankees-blue font-montserrat-extralight mb-2">
//                 Biography (English)
//               </label>
//               <textarea
//                 id="biographyEnglish"
//                 name="biographyEnglish"
//                 rows={6}
//                 value={formData.biographyEnglish}
//                 onChange={handleInputChange}
//                 className="form-input text-yankees-blue font-montserrat-light w-full"
//               ></textarea>
//             </div>

//             {/* Biography Arabic */}
//             <div className="sm:col-span-2">
//               <label htmlFor="biographyArabic" className="block text-yankees-blue font-montserrat-extralight mb-2">
//                 Biography (Arabic)
//               </label>
//               <textarea
//                 id="biographyArabic"
//                 name="biographyArabic"
//                 rows={6}
//                 value={formData.biographyArabic}
//                 onChange={handleInputChange}
//                 className="form-input text-yankees-blue font-montserrat-light w-full"
//                 dir="rtl" // Optional: Add right-to-left direction for Arabic
//               ></textarea>
//             </div>

//             {/* Social Form */}
//             <div className="flex flex-col sm:col-span-2">
//               <h6 className="text-lg font-montserrat-regular text-yankees-blue mb-5">Socials</h6>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                 {/* LinkedIn */}
//                 <div className="flex flex-col">
//                   <label htmlFor="linkedin" className="text-sm text-yankees-blue font-montserrat-extralight">LinkedIn</label>
//                   <input
//                     type="text"
//                     id="linkedin"
//                     name="linkedin"
//                     placeholder=""
//                     value={socials.linkedin || ''}
//                     onChange={handleSocialsChange}
//                     className="form-input"
//                   />
//                 </div>

//                 {/* Behance */}
//                 <div className="flex flex-col">
//                   <label htmlFor="behance" className="text-sm text-yankees-blue font-montserrat-extralight">Behance</label>
//                   <input
//                     type="text"
//                     id="behance"
//                     name="behance"
//                     placeholder=""
//                     value={socials.behance || ''}
//                     onChange={handleSocialsChange}
//                     className="form-input"
//                   />
//                 </div>

//                 {/* Facebook */}
//                 <div className="flex flex-col">
//                   <label htmlFor="facebook" className="text-sm text-yankees-blue font-montserrat-extralight">Facebook</label>
//                   <input
//                     type="text"
//                     id="facebook"
//                     name="facebook"
//                     placeholder=""
//                     value={socials.facebook || ''}
//                     onChange={handleSocialsChange}
//                     className="form-input"
//                   />
//                 </div>

//                 {/* Instagram */}
//                 <div className="flex flex-col">
//                   <label htmlFor="instagram" className="text-sm text-yankees-blue font-montserrat-extralight">Instagram</label>
//                   <input
//                     type="text"
//                     id="instagram"
//                     name="instagram"
//                     placeholder=""
//                     value={socials.instagram || ''}
//                     onChange={handleSocialsChange}
//                     className="form-input"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="sm:col-span-2 mt-3 justify-items-center">
//               {error && <p className="text-red-500 mb-2 text-center">{error}</p>}
//               {success && <p className="text-green-500 mb-2 text-center">{success}</p>}
//               <button
//                 type="submit"
//                 className="btn bg-yankees-blue text-white font-montserrat-light w-full"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? 'Saving...' : 'Save'}
//               </button>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default UserProfileForm;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // UserProfileForm.tsx
// import { useState, useEffect, useCallback } from 'react';
// import ImageUploading, { ImageListType } from 'react-images-uploading';
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../store/store';
// import { setUserData, SocialMediaLinks as UserSocialMediaLinks } from '../store/userSlice';
// import { updateUserProfile, AuthSuccessData } from '../api/user';
// import { City, Country, ICountry } from 'country-state-city';
// import { uploadFileToS3 } from '../utils/s3Uploader';
// import { toast } from 'react-toastify';
// import Select from 'react-select'; // Import react-select

// // Define type for react-select options
// interface SelectOption {
//     value: string;
//     label: string;
// }

// const getUniqueCities = (countryCode: string) => {
//     const cities = City.getCitiesOfCountry(countryCode);
//     if (!cities) {
//         return [];
//     }
//     const uniqueCityNames = new Set<string>();
//     const uniqueCitiesArray: { name: string; stateCode?: string }[] = [];
//     cities.forEach(city => {
//         if (!uniqueCityNames.has(city.name)) {
//             uniqueCityNames.add(city.name);
//             uniqueCitiesArray.push(city);
//         }
//     });
//     return uniqueCitiesArray;
// };

// const formatWebsiteUrl = (inputUrl: string | null | undefined): string => {
//     if (!inputUrl) {
//         return '';
//     }

//     let url = inputUrl.trim();

//     if (!url.startsWith('http://') && !url.startsWith('https://')) {
//         url = `https://${url}`;
//     }

//     try {
//         const parsed = new URL(url);
//         let hostname = parsed.hostname;

//         if (hostname.startsWith('www.')) {
//             return url;
//         }

//         const parts = hostname.split('.');
//         if (parts.length === 2 && parts[0] && parts[1]) {
//             parsed.hostname = `www.${hostname}`;
//             return parsed.toString();
//         }

//         return url;

//     } catch (e) {
//         console.warn("Invalid URL format detected during formatting, sending as is after protocol check:", inputUrl, e);
//         return url;
//     }
// };


// const UserProfileForm = () => {
//     const dispatch = useDispatch();
//     const currentUser = useSelector((state: RootState) => state.user);

//     const [profilePictureFile, setProfilePictureFile] = useState<File | null>(null);
//     const [profilePicturePreview, setProfilePicturePreview] = useState<string | null>(null);

//     const [formData, setFormData] = useState({
//         fullNameEnglish: "",
//         fullNameArabic: "",
//         username: "",
//         mobileNumber: "",
//         email: "",
//         city: "",
//         country: "",
//         biographyEnglish: "",
//         biographyArabic: "",
//         nationalId: "",
//         website: "",
//         skills: [] as string[], // Remains an array of strings
//         experience: "", // Changed from 'workDetails' to 'experience' and type to string
//         budget: "" as string | number,
//         availability: "",
//         workCategoryClassification: "", // NEW: Added workCategoryClassification
//     });

//     const [socials, setSocials] = useState<UserSocialMediaLinks & { twitter?: string }>({
//         linkedin: "",
//         behance: "",
//         facebook: "",
//         instagram: "",
//         twitter: "",
//     });
//     const [error, setError] = useState<string | null>(null);
//     const [success, setSuccess] = useState<string | null>(null);
//     const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

//     // Skills Options (for dropdown) - now as SelectOption array
//     const skillsOptions: SelectOption[] = [
//         { value: "Naskh (Arabic Calligraphy)", label: "Naskh (Arabic Calligraphy)" },
//         { value: "Thuluth (Arabic Calligraphy)", label: "Thuluth (Arabic Calligraphy)" },
//         { value: "Diwani (Arabic Calligraphy)", label: "Diwani (Arabic Calligraphy)" },
//         { value: "Kufi (Arabic Calligraphy)", label: "Kufi (Arabic Calligraphy)" },
//         { value: "Ruq'ah (Arabic Calligraphy)", label: "Ruq'ah (Arabic Calligraphy)" },
//         { value: "Farisi (Persian) (Arabic Calligraphy)", label: "Farisi (Persian) (Arabic Calligraphy)" },
//         { value: "Maghrebi (Arabic Calligraphy)", label: "Maghrebi (Arabic Calligraphy)" },
//         { value: "Italic (Western Calligraphy)", label: "Italic (Western Calligraphy)" },
//         { value: "Gothic (Western Calligraphy)", label: "Gothic (Western Calligraphy)" },
//         { value: "Copperplate (Western Calligraphy)", label: "Copperplate (Western Calligraphy)" },
//         { value: "Uncial (Western Calligraphy)", label: "Uncial (Western Calligraphy)" },
//         { value: "Roman Capitals (Western Calligraphy)", label: "Roman Capitals (Western Calligraphy)" },
//         { value: "Realistic Drawing", label: "Realistic Drawing" },
//         { value: "Portrait Drawing", label: "Portrait Drawing" },
//         { value: "Character Design", label: "Character Design" },
//         { value: "Environmental Drawing", label: "Environmental Drawing" },
//         { value: "Still Life Drawing", label: "Still Life Drawing" },
//         { value: "Gesture Drawing", label: "Gesture Drawing" },
//         { value: "Perspective Drawing", label: "Perspective Drawing" },
//         { value: "Line Drawing", label: "Line Drawing" },
//         { value: "Digital Illustration", label: "Digital Illustration" },
//         { value: "Vector Illustration", label: "Vector Illustration" },
//         { value: "Editorial Illustration", label: "Editorial Illustration" },
//         { value: "Fashion Illustration", label: "Fashion Illustration" },
//         { value: "Scientific Illustration", label: "Scientific Illustration" },
//         { value: "Manga/Anime Illustration", label: "Manga/Anime Illustration" }
//     ];

//     // Experience Options (for dropdown)
//     const experienceOptions = [
//         "Beginner (0-2 years)", "Intermediate (3-5 years)",
//         "Advanced (6-10 years)", "Professional (11+ years)"
//     ];

//     // Availability Options (for dropdown)
//     const availabilityOptions = [
//         "Immediately Available", "Available within 1-2 weeks",
//         "Available within 1 month", "Part-Time", "Full-Time"
//     ];

//     // NEW: Work Category Classification Options
//     const workCategoryClassificationOptions = [
//         "All", "Calligraphy", "Drawing & Illustration", "Graphics",
//         "Mixed Media", "Painting", "Photography", "Printmaking", "Sculpture"
//     ];

//     useEffect(() => {
//         if (currentUser && currentUser.isAuthenticated) {
//             setFormData({
//                 fullNameEnglish: currentUser.fullNameEnglish || "",
//                 fullNameArabic: currentUser.fullNameArabic || "",
//                 username: currentUser.username || "",
//                 mobileNumber: currentUser.mobileNumber || "",
//                 email: currentUser.email,
//                 city: currentUser.city || "",
//                 country: currentUser.country || "",
//                 biographyEnglish: currentUser.biographyEnglish || "",
//                 biographyArabic: currentUser.biographyArabic || "",
//                 nationalId: currentUser.nationalId || "",
//                 website: currentUser.website || "",
//                 skills: currentUser.skills || [],
//                 experience: currentUser.experience || "", // Initialize 'experience'
//                 budget: currentUser.budget || "",
//                 availability: currentUser.availability || "",
//                 workCategoryClassification: currentUser.workCategoryClassification || "", // Initialize new field
//             });

//             setSocials({
//                 linkedin: currentUser.socialMediaLinks?.linkedin || "",
//                 behance: currentUser.socialMediaLinks?.behance || "",
//                 facebook: currentUser.socialMediaLinks?.facebook || "",
//                 instagram: currentUser.socialMediaLinks?.instagram || "",
//                 twitter: currentUser.socialMediaLinks?.twitter || "",
//             });

//             if (currentUser.profilePicture) {
//                 setProfilePicturePreview(currentUser.profilePicture);
//             } else {
//                 setProfilePicturePreview(null);
//             }
//             setProfilePictureFile(null);
//         }
//     }, [currentUser]);

//     const maxNumber = 1;
//     const countries = Country.getAllCountries();

//     const onChange = useCallback((imageList: ImageListType) => {
//         if (imageList.length > 0) {
//             const selectedImage = imageList[0];
//             setProfilePicturePreview(selectedImage.dataURL || null);
//             setProfilePictureFile(selectedImage.file || null);
//         } else {
//             setProfilePicturePreview(null);
//             setProfilePictureFile(null);
//         }
//     }, []);

//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//         const { name, value } = e.target;
//         if (name === "budget") {
//             setFormData((prev) => ({ ...prev, [name]: value === '' ? '' : Number(value) }));
//         } else {
//             setFormData((prev) => ({ ...prev, [name]: value }));
//         }
//     };

//     // NEW handler for react-select multi-select
//     const handleSkillsChange = (selectedOptions: any) => {
//         // selectedOptions will be an array of { value, label } objects or null if cleared
//         const selectedValues = selectedOptions ? selectedOptions.map((option: SelectOption) => option.value) : [];
//         setFormData((prev) => ({ ...prev, skills: selectedValues }));
//     };


//     const handleSocialsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setSocials((prev) => ({ ...prev, [name.toLowerCase()]: value }));
//     };

//     const citiesOfSelectedCountry = formData.country ? getUniqueCities(formData.country) : [];

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         setError(null);
//         setSuccess(null);
//         setIsSubmitting(true);

//         if (!currentUser._id) {
//             setError("User ID not found. Cannot update profile.");
//             setIsSubmitting(false);
//             return;
//         }

//         const updateData = new FormData();

//         Object.entries(formData).forEach(([key, value]) => {
//             if (key === 'website') {
//                 const formattedWebsite = formatWebsiteUrl(value as string);
//                 if (formattedWebsite) {
//                     updateData.append(key, formattedWebsite);
//                 } else {
//                     updateData.append(key, '');
//                 }
//             } else if (key === 'skills') {
//                 // For skills, since it's an array, stringify it
//                 if (Array.isArray(value) && value.length > 0) {
//                     updateData.append(key, JSON.stringify(value));
//                 } else {
//                     updateData.append(key, JSON.stringify([]));
//                 }
//             }
//             else if (value !== null && value !== undefined && value !== '') {
//                 updateData.append(key, value.toString());
//             }
//         });


//         updateData.append('socialMediaLinks', JSON.stringify(socials));

//         let finalProfilePictureUrl: string | null = null;

//         if (profilePictureFile) {
//             toast.info("Uploading profile picture...");
//             try {
//                 const uploadedImage = await uploadFileToS3(profilePictureFile, 'profile-pictures');
//                 if (uploadedImage.location) {
//                     finalProfilePictureUrl = uploadedImage.location;
//                     setProfilePicturePreview(finalProfilePictureUrl);
//                     setProfilePictureFile(null);
//                     toast.success("Profile picture uploaded to S3!");
//                 } else {
//                     setError("Failed to upload profile picture to S3. Please try again.");
//                     toast.error("Failed to upload profile picture.");
//                     setIsSubmitting(false);
//                     return;
//                 }
//             } catch (uploadErr) {
//                 console.error("Error uploading profile picture to S3:", uploadErr);
//                 setError("An error occurred during profile picture upload.");
//                 toast.error("An error occurred during profile picture upload.");
//                 setIsSubmitting(false);
//                 return;
//             }
//         } else if (profilePicturePreview === null && currentUser.profilePicture) {
//             finalProfilePictureUrl = null;
//         } else if (profilePicturePreview !== null && !profilePictureFile && currentUser.profilePicture) {
//             finalProfilePictureUrl = currentUser.profilePicture;
//         }

//         if (finalProfilePictureUrl !== null) {
//             updateData.append('profilePicture', finalProfilePictureUrl);
//         } else {
//             updateData.append('profilePicture', '');
//         }

//         try {
//             const response = await updateUserProfile(currentUser._id, updateData);
//             const responseData: AuthSuccessData = (response as any).data || response;

//             console.log("Response is: ",responseData);

//             if (responseData && responseData.user) {
//                 dispatch(setUserData({
//                     _id: responseData.user._id || '',
//                     fullNameEnglish: responseData.user.fullNameEnglish || '',
//                     fullNameArabic: responseData.user.fullNameArabic || '',
//                     username: responseData.user.username || '',
//                     email: responseData.user.email,
//                     mobileNumber: responseData.user.mobileNumber || '',
//                     role: responseData.user.role || '',
//                     country: responseData.user.country || '',
//                     city: responseData.user.city || '',
//                     interests: responseData.user.interests || [],
//                     profilePicture: responseData.user.profilePicture || null,
//                     socialMediaLinks: responseData.user.socialMediaLinks || { instagram: '', behance: '', linkedin: '', facebook: '', twitter: '' },
//                     biographyArabic: responseData.user.biographyArabic || '',
//                     biographyEnglish: responseData.user.biographyEnglish || '',
//                     nationalId: responseData.user.nationalId || '',
//                     website: responseData.user.website || '',
//                     skills: responseData.user.skills || [],
//                     experience: responseData.user.experience || '', // Changed from 'workDetails' to 'experience'
//                     budget: responseData.user.budget || '',
//                     availability: responseData.user.availability || '',
//                     workCategoryClassification: responseData.user.workCategoryClassification || '', // NEW: Dispatch workCategoryClassification
//                 }));
//                 setSuccess("Profile updated successfully!");
//                 toast.success("Profile updated successfully!");

//             } else {
//                 setError("Profile updated, but user data was not returned in the response.");
//                 toast.error("Profile updated, but data not returned.");
//             }
//         } catch (err: any) {
//             const msg = err.response?.data?.message || err.response?.data?.error || "Profile update failed: Network error or unexpected issue.";
//             setError(msg);
//             toast.error(msg);
//             console.error("Profile update caught an error:", err);
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     return (
//         <div>
//             <form
//                 className="border border-[#ebedf3] dark:border-[#191e3a] rounded-md p-4 mb-5 bg-white dark:bg-black"
//                 onSubmit={handleSubmit}
//             >
//                 <h6 className="text-lg font-montserrat-regular text-yankees-blue mb-5">User Information</h6>
//                 <div className="flex flex-col sm:flex-row">
//                     <div className="flex flex-col items-center">
//                         <div className="relative mr-6">
//                             <ImageUploading
//                                 value={profilePicturePreview ? [{ dataURL: profilePicturePreview }] : []}
//                                 onChange={onChange}
//                                 maxNumber={maxNumber}
//                             >
//                                 {({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove }) => (
//                                     <div className="upload__image-wrapper">
//                                         {profilePicturePreview ? (
//                                             <div className="ml-6 w-32 h-32 overflow-hidden rounded-full border border-gray-200">
//                                                 <img
//                                                     src={profilePicturePreview}
//                                                     alt="Profile"
//                                                     className="object-cover w-full h-full"
//                                                 />
//                                             </div>
//                                         ) : (
//                                             <div className="ml-6 w-32 h-32 overflow-hidden rounded-full border border-gray-200 flex items-center justify-center">
//                                                 <img
//                                                     src="/assets/images/default-profile.png"
//                                                     alt="Default Profile"
//                                                     className="object-cover w-full h-full"
//                                                 />
//                                             </div>
//                                         )}
//                                         <button
//                                             type="button"
//                                             className="btn bg-yankees-blue text-white font-montserrat-light mt-3"
//                                             onClick={onImageUpload}
//                                             disabled={!!profilePicturePreview}
//                                         >
//                                             Upload Profile Picture
//                                         </button>
//                                         {profilePicturePreview && (
//                                             <button
//                                                 type="button"
//                                                 className="btn btn-outline-danger mt-2 ml-6"
//                                                 onClick={() => {
//                                                     setProfilePicturePreview(null);
//                                                     setProfilePictureFile(null);
//                                                 }}
//                                             >
//                                                 Remove Picture
//                                             </button>
//                                         )}
//                                     </div>
//                                 )}
//                             </ImageUploading>
//                         </div>
//                     </div>
//                     <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
//                         {Object.keys(formData).filter(key =>
//                             key !== 'biographyEnglish' &&
//                             key !== 'biographyArabic' &&
//                             key !== 'website' &&
//                             key !== 'skills' && // Exclude skills here as it's a custom component now
//                             key !== 'experience' && // Exclude 'experience' here as it's handled specifically
//                             key !== 'budget' &&
//                             key !== 'availability' &&
//                             key !== 'workCategoryClassification' // NEW: Exclude workCategoryClassification here
//                         ).map((key) => (
//                             <div className='text-yankees-blue font-montserrat-extralight' key={key}>
//                                 <label htmlFor={key}>{key.replace(/([A-Z])/g, " $1").replace('fullName', 'Full Name').replace('mobileNumber', 'Mobile Number').replace('nationalId', 'National ID')}</label>
//                                 {key === 'country' ? (
//                                     <select
//                                         id={key}
//                                         name={key}
//                                         value={(formData as any)[key]} // Cast to any to access dynamically
//                                         onChange={handleInputChange}
//                                         className="form-select text-yankees-blue font-montserrat-light"
//                                     >
//                                         <option value="">Select your Country</option>
//                                         {countries.map((country: ICountry) => (
//                                             <option key={country.isoCode} value={country.isoCode}>
//                                                 {country.name}
//                                             </option>
//                                         ))}
//                                     </select>
//                                 ) : key === 'city' ? (
//                                     <select
//                                         id={key}
//                                         name={key}
//                                         value={(formData as any)[key]} // Cast to any to access dynamically
//                                         onChange={handleInputChange}
//                                         className="form-select text-yankees-blue font-montserrat-light"
//                                         disabled={!formData.country}
//                                     >
//                                         <option value="">Select your City</option>
//                                         {citiesOfSelectedCountry.map((item) => (
//                                             <option key={item.name} value={item.name}>
//                                                 {item.name}
//                                             </option>
//                                         ))}
//                                     </select>
//                                 ) : (
//                                     <input
//                                         id={key}
//                                         name={key}
//                                         type={key === 'email' ? 'email' : 'text'}
//                                         value={(formData as any)[key]} // Cast to any to access dynamically
//                                         onChange={handleInputChange}
//                                         className="form-input text-yankees-blue font-montserrat-light"
//                                     />
//                                 )}
//                             </div>
//                         ))}

//                         {/* Website Input Field */}
//                         <div className='text-yankees-blue font-montserrat-extralight'>
//                             <label htmlFor="website">Website</label>
//                             <input
//                                 id="website"
//                                 name="website"
//                                 type="text"
//                                 placeholder="www.example.com"
//                                 value={formData.website}
//                                 onChange={handleInputChange}
//                                 className="form-input text-yankees-blue font-montserrat-light"
//                             />
//                         </div>

//                         {/* Skills Dropdown - USING REACT-SELECT */}
//                         <div className='text-yankees-blue font-montserrat-extralight'>
//                             <label htmlFor="skills">Choose Skills (if applicable)</label>
//                             <Select
//                                 id="skills"
//                                 name="skills"
//                                 isMulti // Enables multi-selection
//                                 options={skillsOptions}
//                                 value={
//                                     formData.skills.map(skill => ({ value: skill, label: skill })) // Convert stored strings to {value, label} format
//                                 }
//                                 onChange={handleSkillsChange}
//                                 className="react-select-container" // For custom styling if needed
//                                 classNamePrefix="react-select" // For custom styling if needed
//                                 placeholder="Select skills..."
//                             />
//                         </div>

//                         {/* Experience Dropdown (NEW FIELD) */}
//                         <div className='text-yankees-blue font-montserrat-extralight'>
//                             <label htmlFor="experience">Experience</label>
//                             <select
//                                 id="experience"
//                                 name="experience"
//                                 value={formData.experience}
//                                 onChange={handleInputChange}
//                                 className="form-select text-yankees-blue font-montserrat-light"
//                             >
//                                 <option value="">Select Experience Level</option>
//                                 {experienceOptions.map((option) => (
//                                     <option key={option} value={option}>{option}</option>
//                                 ))}
//                             </select>
//                         </div>

//                         {/* Budget Input Field */}
//                         <div className='text-yankees-blue font-montserrat-extralight'>
//                             <label htmlFor="budget">Budget</label>
//                             <input
//                                 id="budget"
//                                 name="budget"
//                                 type="number"
//                                 placeholder="Enter your budget"
//                                 value={formData.budget}
//                                 onChange={handleInputChange}
//                                 className="form-input text-yankees-blue font-montserrat-light"
//                             />
//                         </div>

//                         {/* Availability Dropdown */}
//                         <div className='text-yankees-blue font-montserrat-extralight'>
//                             <label htmlFor="availability">Availability</label>
//                             <select
//                                 id="availability"
//                                 name="availability"
//                                 value={formData.availability}
//                                 onChange={handleInputChange}
//                                 className="form-select text-yankees-blue font-montserrat-light"
//                             >
//                                 <option value="">Select Availability</option>
//                                 {availabilityOptions.map((option) => (
//                                     <option key={option} value={option}>{option}</option>
//                                 ))}
//                             </select>
//                         </div>

//                         {/* NEW: Work Category Classification Dropdown */}
//                         <div className='text-yankees-blue font-montserrat-extralight'>
//                             <label htmlFor="workCategoryClassification">Classify Work Category</label>
//                             <select
//                                 id="workCategoryClassification"
//                                 name="workCategoryClassification"
//                                 value={formData.workCategoryClassification}
//                                 onChange={handleInputChange}
//                                 className="form-select text-yankees-blue font-montserrat-light"
//                             >
//                                 <option value="">Select a category</option>
//                                 {workCategoryClassificationOptions.map((option) => (
//                                     <option key={option} value={option}>{option}</option>
//                                 ))}
//                             </select>
//                         </div>

//                         {/* Biography English */}
//                         <div className="sm:col-span-2">
//                             <label htmlFor="biographyEnglish" className="block text-yankees-blue font-montserrat-extralight mb-2">
//                                 Biography (English)
//                             </label>
//                             <textarea
//                                 id="biographyEnglish"
//                                 name="biographyEnglish"
//                                 rows={6}
//                                 value={formData.biographyEnglish}
//                                 onChange={handleInputChange}
//                                 className="form-input text-yankees-blue font-montserrat-light w-full"
//                             ></textarea>
//                         </div>

//                         {/* Biography Arabic */}
//                         <div className="sm:col-span-2">
//                             <label htmlFor="biographyArabic" className="block text-yankees-blue font-montserrat-extralight mb-2">
//                                 Biography (Arabic)
//                             </label>
//                             <textarea
//                                 id="biographyArabic"
//                                 name="biographyArabic"
//                                 rows={6}
//                                 value={formData.biographyArabic}
//                                 onChange={handleInputChange}
//                                 className="form-input text-yankees-blue font-montserrat-light w-full"
//                                 dir="rtl"
//                             ></textarea>
//                         </div>
//                         {/* Social Form */}
//                         <div className="flex flex-col sm:col-span-2">
//                             <h6 className="text-lg font-montserrat-regular text-yankees-blue mb-5">Socials</h6>
//                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                                 {/* Instagram - Now explicitly placed on top */}
//                                 <div className="flex flex-col">
//                                     <label htmlFor="instagram" className="text-sm text-yankees-blue font-montserrat-extralight">Instagram</label>
//                                     <input
//                                         type="text"
//                                         id="instagram"
//                                         name="instagram"
//                                         placeholder=""
//                                         value={socials.instagram || ''}
//                                         onChange={handleSocialsChange}
//                                         className="form-input"
//                                     />
//                                 </div>

//                                 {/* X (Twitter) */}
//                                 <div className="flex flex-col">
//                                     <label htmlFor="twitter" className="text-sm text-yankees-blue font-montserrat-extralight">X (Twitter)</label>
//                                     <input
//                                         type="text"
//                                         id="twitter"
//                                         name="twitter"
//                                         placeholder=""
//                                         value={socials.twitter || ''}
//                                         onChange={handleSocialsChange}
//                                         className="form-input"
//                                     />
//                                 </div>

//                                 {/* LinkedIn */}
//                                 <div className="flex flex-col">
//                                     <label htmlFor="linkedin" className="text-sm text-yankees-blue font-montserrat-extralight">LinkedIn</label>
//                                     <input
//                                         type="text"
//                                         id="linkedin"
//                                         name="linkedin"
//                                         placeholder=""
//                                         value={socials.linkedin || ''}
//                                         onChange={handleSocialsChange}
//                                         className="form-input"
//                                     />
//                                 </div>

//                                 {/* Behance */}
//                                 <div className="flex flex-col">
//                                     <label htmlFor="behance" className="text-sm text-yankees-blue font-montserrat-extralight">Behance</label>
//                                     <input
//                                         type="text"
//                                         id="behance"
//                                         name="behance"
//                                         placeholder=""
//                                         value={socials.behance || ''}
//                                         onChange={handleSocialsChange}
//                                         className="form-input"
//                                     />
//                                 </div>

//                                 {/* Facebook */}
//                                 <div className="flex flex-col">
//                                     <label htmlFor="facebook" className="text-sm text-yankees-blue font-montserrat-extralight">Facebook</label>
//                                     <input
//                                         type="text"
//                                         id="facebook"
//                                         name="facebook"
//                                         placeholder=""
//                                         value={socials.facebook || ''}
//                                         onChange={handleSocialsChange}
//                                         className="form-input"
//                                     />
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="sm:col-span-2 mt-3 justify-items-center">
//                             {error && <p className="text-red-500 mb-2 text-center">{error}</p>}
//                             {success && <p className="text-green-500 mb-2 text-center">{success}</p>}
//                             <button
//                                 type="submit"
//                                 className="btn bg-yankees-blue text-white font-montserrat-light w-full"
//                                 disabled={isSubmitting}
//                             >
//                                 {isSubmitting ? 'Saving...' : 'Save'}
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default UserProfileForm;

import { useState, useEffect, useCallback } from 'react';
import ImageUploading, { ImageListType } from 'react-images-uploading';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { setUserData, SocialMediaLinks as UserSocialMediaLinks } from '../store/userSlice';
import { updateUserProfile, AuthSuccessData } from '../api/user';
import { City, Country, ICountry } from 'country-state-city';
import { uploadFileToS3 } from '../utils/s3Uploader';
import { toast } from 'react-toastify';
import Select from 'react-select'; // Import react-select

// Define type for react-select options
interface SelectOption {
    value: string;
    label: string;
}

const getUniqueCities = (countryCode: string) => {
    const cities = City.getCitiesOfCountry(countryCode);
    if (!cities) {
        return [];
    }
    const uniqueCityNames = new Set<string>();
    const uniqueCitiesArray: { name: string; stateCode?: string }[] = [];
    cities.forEach(city => {
        if (!uniqueCityNames.has(city.name)) {
            uniqueCityNames.add(city.name);
            uniqueCitiesArray.push(city);
        }
    });
    return uniqueCitiesArray;
};

const formatWebsiteUrl = (inputUrl: string | null | undefined): string => {
    if (!inputUrl) {
        return '';
    }

    let url = inputUrl.trim();

    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = `https://${url}`;
    }

    try {
        const parsed = new URL(url);
        let hostname = parsed.hostname;

        if (hostname.startsWith('www.')) {
            return url;
        }

        const parts = hostname.split('.');
        if (parts.length === 2 && parts[0] && parts[1]) {
            parsed.hostname = `www.${hostname}`;
            return parsed.toString();
        }

        return url;

    } catch (e) {
        console.warn("Invalid URL format detected during formatting, sending as is after protocol check:", inputUrl, e);
        return url;
    }
};


const UserProfileForm = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector((state: RootState) => state.user);

    const [profilePictureFile, setProfilePictureFile] = useState<File | null>(null);
    const [profilePicturePreview, setProfilePicturePreview] = useState<string | null>(null);

    const [formData, setFormData] = useState({
        fullNameEnglish: "",
        fullNameArabic: "",
        username: "",
        mobileNumber: "",
        email: "",
        city: "",
        country: "",
        biographyEnglish: "",
        biographyArabic: "",
        nationalId: "",
        website: "",
        skills: [] as string[], // Remains an array of strings
        experience: "", // Changed from 'workDetails' to 'experience' and type to string
        budget: "" as string | number,
        availability: "",
        workCategoryClassification: "", // NEW: Added workCategoryClassification
        // NEW FIELDS
        exhibitions: [] as string[],
        achievements: [] as string[],
        education: [] as string[],
        digitalTools: [] as string[],
        individualSkills: [] as string[], // Renamed to individualSkills for clarity
        experienceDetails: [] as string[], 
    });

    const [socials, setSocials] = useState<UserSocialMediaLinks & { twitter?: string }>({
        linkedin: "",
        behance: "",
        facebook: "",
        instagram: "",
        twitter: "",
    });
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    // State for new input values for array fields
    const [newExhibition, setNewExhibition] = useState<string>('');
    const [newAchievement, setNewAchievement] = useState<string>('');
    const [newEducation, setNewEducation] = useState<string>('');
    const [newDigitalTool, setNewDigitalTool] = useState<string>('');
    const [newIndividualSkill, setNewIndividualSkill] = useState<string>('');
    const [newExperienceDetail, setNewExperienceDetail] = useState(''); 


    // Skills Options (for dropdown) - now as SelectOption array
    const skillsOptions: SelectOption[] = [
        { value: "Naskh (Arabic Calligraphy)", label: "Naskh (Arabic Calligraphy)" },
        { value: "Thuluth (Arabic Calligraphy)", label: "Thuluth (Arabic Calligraphy)" },
        { value: "Diwani (Arabic Calligraphy)", label: "Diwani (Arabic Calligraphy)" },
        { value: "Kufi (Arabic Calligraphy)", label: "Kufi (Arabic Calligraphy)" },
        { value: "Ruq'ah (Arabic Calligraphy)", label: "Ruq'ah (Arabic Calligraphy)" },
        { value: "Farisi (Persian) (Arabic Calligraphy)", label: "Farisi (Persian) (Arabic Calligraphy)" },
        { value: "Maghrebi (Arabic Calligraphy)", label: "Maghrebi (Arabic Calligraphy)" },
        { value: "Italic (Western Calligraphy)", label: "Italic (Western Calligraphy)" },
        { value: "Gothic (Western Calligraphy)", label: "Gothic (Western Calligraphy)" },
        { value: "Copperplate (Western Calligraphy)", label: "Copperplate (Western Calligraphy)" },
        { value: "Uncial (Western Calligraphy)", label: "Uncial (Western Calligraphy)" },
        { value: "Roman Capitals (Western Calligraphy)", label: "Roman Capitals (Western Calligraphy)" },
        { value: "Realistic Drawing", label: "Realistic Drawing" },
        { value: "Portrait Drawing", label: "Portrait Drawing" },
        { value: "Character Design", label: "Character Design" },
        { value: "Environmental Drawing", label: "Environmental Drawing" },
        { value: "Still Life Drawing", label: "Still Life Drawing" },
        { value: "Gesture Drawing", label: "Gesture Drawing" },
        { value: "Perspective Drawing", label: "Perspective Drawing" },
        { value: "Line Drawing", label: "Line Drawing" },
        { value: "Digital Illustration", label: "Digital Illustration" },
        { value: "Vector Illustration", label: "Vector Illustration" },
        { value: "Editorial Illustration", label: "Editorial Illustration" },
        { value: "Fashion Illustration", label: "Fashion Illustration" },
        { value: "Scientific Illustration", label: "Scientific Illustration" },
        { value: "Manga/Anime Illustration", label: "Manga/Anime Illustration" }
    ];

    // Experience Options (for dropdown)
    const experienceOptions = [
        "Beginner (0-2 years)", "Intermediate (3-5 years)",
        "Advanced (6-10 years)", "Professional (11+ years)"
    ];

    // Availability Options (for dropdown)
    const availabilityOptions = [
        "Immediately Available", "Available within 1-2 weeks",
        "Available within 1 month", "Part-Time", "Full-Time"
    ];

    // NEW: Work Category Classification Options
    const workCategoryClassificationOptions = [
        "All", "Calligraphy", "Drawing & Illustration", "Graphics",
        "Mixed Media", "Painting", "Photography", "Printmaking", "Sculpture"
    ];

    useEffect(() => {
        if (currentUser && currentUser.isAuthenticated) {
            setFormData({
                fullNameEnglish: currentUser.fullNameEnglish || "",
                fullNameArabic: currentUser.fullNameArabic || "",
                username: currentUser.username || "",
                mobileNumber: currentUser.mobileNumber || "",
                email: currentUser.email,
                city: currentUser.city || "",
                country: currentUser.country || "",
                biographyEnglish: currentUser.biographyEnglish || "",
                biographyArabic: currentUser.biographyArabic || "",
                nationalId: currentUser.nationalId || "",
                website: currentUser.website || "",
                skills: currentUser.skills || [],
                experience: currentUser.experience || "", // Initialize 'experience'
                budget: currentUser.budget || "",
                availability: currentUser.availability || "",
                workCategoryClassification: currentUser.workCategoryClassification || "", // Initialize new field
                // Initialize new array fields
                exhibitions: currentUser.exhibitions || [],
                achievements: currentUser.achievements || [],
                education: currentUser.education || [],
                digitalTools: currentUser.digitalTools || [],
                individualSkills: currentUser.individualSkills || [],
                experienceDetails: currentUser.experienceDetails || [],
            });

            setSocials({
                linkedin: currentUser.socialMediaLinks?.linkedin || "",
                behance: currentUser.socialMediaLinks?.behance || "",
                facebook: currentUser.socialMediaLinks?.facebook || "",
                instagram: currentUser.socialMediaLinks?.instagram || "",
                twitter: currentUser.socialMediaLinks?.twitter || "",
            });

            if (currentUser.profilePicture) {
                setProfilePicturePreview(currentUser.profilePicture);
            } else {
                setProfilePicturePreview(null);
            }
            setProfilePictureFile(null);
        }
    }, [currentUser]);

    const maxNumber = 1;
    const countries = Country.getAllCountries();

    const onChange = useCallback((imageList: ImageListType) => {
        if (imageList.length > 0) {
            const selectedImage = imageList[0];
            setProfilePicturePreview(selectedImage.dataURL || null);
            setProfilePictureFile(selectedImage.file || null);
        } else {
            setProfilePicturePreview(null);
            setProfilePictureFile(null);
        }
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name === "budget") {
            setFormData((prev) => ({ ...prev, [name]: value === '' ? '' : Number(value) }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    // NEW handler for react-select multi-select
    const handleSkillsChange = (selectedOptions: any) => {
        // selectedOptions will be an array of { value, label } objects or null if cleared
        const selectedValues = selectedOptions ? selectedOptions.map((option: SelectOption) => option.value) : [];
        setFormData((prev) => ({ ...prev, skills: selectedValues }));
    };

    const handleSocialsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSocials((prev) => ({ ...prev, [name.toLowerCase()]: value }));
    };

    // Handlers for adding items to array fields
    const handleAddToArray = (fieldName: keyof typeof formData, newValue: string, setNewValue: React.Dispatch<React.SetStateAction<string>>) => {
        if (newValue.trim() !== '') {
            setFormData(prev => ({
                ...prev,
                [fieldName]: [...(prev[fieldName] as string[]), newValue.trim()]
            }));
            setNewValue('');
        }
    };

    // Handler for removing items from array fields
    const handleRemoveFromArray = (fieldName: keyof typeof formData, index: number) => {
        setFormData(prev => {
            const updatedArray = (prev[fieldName] as string[]).filter((_, i) => i !== index);
            return {
                ...prev,
                [fieldName]: updatedArray
            };
        });
    };

    const citiesOfSelectedCountry = formData.country ? getUniqueCities(formData.country) : [];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);
        setIsSubmitting(true);

        if (!currentUser._id) {
            setError("User ID not found. Cannot update profile.");
            setIsSubmitting(false);
            return;
        }

        const updateData = new FormData();

        Object.entries(formData).forEach(([key, value]) => {
            if (key === 'website') {
                const formattedWebsite = formatWebsiteUrl(value as string);
                if (formattedWebsite) {
                    updateData.append(key, formattedWebsite);
                } else {
                    updateData.append(key, '');
                }
            } else if (Array.isArray(value)) {
                // For array fields, stringify them
                if (value.length > 0) {
                    updateData.append(key, JSON.stringify(value));
                } else {
                    updateData.append(key, JSON.stringify([]));
                }
            }
            else if (value !== null && value !== undefined && value !== '') {
                updateData.append(key, value.toString());
            }
        });


        updateData.append('socialMediaLinks', JSON.stringify(socials));

        let finalProfilePictureUrl: string | null = null;

        if (profilePictureFile) {
            toast.info("Uploading profile picture...");
            try {
                const uploadedImage = await uploadFileToS3(profilePictureFile, 'profile-pictures');
                if (uploadedImage.location) {
                    finalProfilePictureUrl = uploadedImage.location;
                    setProfilePicturePreview(finalProfilePictureUrl);
                    setProfilePictureFile(null);
                    toast.success("Profile picture uploaded to S3!");
                } else {
                    setError("Failed to upload profile picture to S3. Please try again.");
                    toast.error("Failed to upload profile picture.");
                    setIsSubmitting(false);
                    return;
                }
            } catch (uploadErr) {
                console.error("Error uploading profile picture to S3:", uploadErr);
                setError("An error occurred during profile picture upload.");
                toast.error("An error occurred during profile picture upload.");
                setIsSubmitting(false);
                return;
            }
        } else if (profilePicturePreview === null && currentUser.profilePicture) {
            finalProfilePictureUrl = null;
        } else if (profilePicturePreview !== null && !profilePictureFile && currentUser.profilePicture) {
            finalProfilePictureUrl = currentUser.profilePicture;
        }

        if (finalProfilePictureUrl !== null) {
            updateData.append('profilePicture', finalProfilePictureUrl);
        } else {
            updateData.append('profilePicture', '');
        }

        try {
            const response = await updateUserProfile(currentUser._id, updateData);
            const responseData: AuthSuccessData = (response as any).data || response;

            console.log("Response is: ", responseData);

            if (responseData && responseData.user) {
                dispatch(setUserData({
                    _id: responseData.user._id || '',
                    fullNameEnglish: responseData.user.fullNameEnglish || '',
                    fullNameArabic: responseData.user.fullNameArabic || '',
                    username: responseData.user.username || '',
                    email: responseData.user.email,
                    mobileNumber: responseData.user.mobileNumber || '',
                    role: responseData.user.role || '',
                    country: responseData.user.country || '',
                    city: responseData.user.city || '',
                    interests: responseData.user.interests || [],
                    profilePicture: responseData.user.profilePicture || null,
                    socialMediaLinks: responseData.user.socialMediaLinks || { instagram: '', behance: '', linkedin: '', facebook: '', twitter: '' },
                    biographyArabic: responseData.user.biographyArabic || '',
                    biographyEnglish: responseData.user.biographyEnglish || '',
                    nationalId: responseData.user.nationalId || '',
                    website: responseData.user.website || '',
                    skills: responseData.user.skills || [],
                    experience: responseData.user.experience || '', // Changed from 'workDetails' to 'experience'
                    budget: responseData.user.budget || '',
                    availability: responseData.user.availability || '',
                    workCategoryClassification: responseData.user.workCategoryClassification || '', // NEW: Dispatch workCategoryClassification
                    // Dispatch new array fields
                    exhibitions: responseData.user.exhibitions || [],
                    achievements: responseData.user.achievements || [],
                    education: responseData.user.education || [],
                    digitalTools: responseData.user.digitalTools || [],
                    individualSkills: responseData.user.individualSkills || [],
                }));
                setSuccess("Profile updated successfully!");
                toast.success("Profile updated successfully!");

            } else {
                setError("Profile updated, but user data was not returned in the response.");
                toast.error("Profile updated, but data not returned.");
            }
        } catch (err: any) {
            const msg = err.response?.data?.message || err.response?.data?.error || "Profile update failed: Network error or unexpected issue.";
            setError(msg);
            toast.error(msg);
            console.error("Profile update caught an error:", err);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <form
                className="border border-[#ebedf3] dark:border-[#191e3a] rounded-md p-4 mb-5 bg-white dark:bg-black"
                onSubmit={handleSubmit}
            >
                <h6 className="text-lg font-montserrat-regular text-yankees-blue mb-5">User Information</h6>
                <div className="flex flex-col sm:flex-row">
                    <div className="flex flex-col items-center">
                        <div className="relative mr-6">
                            <ImageUploading
                                value={profilePicturePreview ? [{ dataURL: profilePicturePreview }] : []}
                                onChange={onChange}
                                maxNumber={maxNumber}
                            >
                                {({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove }) => (
                                    <div className="upload__image-wrapper">
                                        {profilePicturePreview ? (
                                            <div className="ml-6 w-32 h-32 overflow-hidden rounded-full border border-gray-200">
                                                <img
                                                    src={profilePicturePreview}
                                                    alt="Profile"
                                                    className="object-cover w-full h-full"
                                                />
                                            </div>
                                        ) : (
                                            <div className="ml-6 w-32 h-32 overflow-hidden rounded-full border border-gray-200 flex items-center justify-center">
                                                <img
                                                    src="/assets/images/default-profile.png"
                                                    alt="Default Profile"
                                                    className="object-cover w-full h-full"
                                                />
                                            </div>
                                        )}
                                        <button
                                            type="button"
                                            className="btn bg-yankees-blue text-white font-montserrat-light mt-3"
                                            onClick={onImageUpload}
                                            disabled={!!profilePicturePreview}
                                        >
                                            Upload Profile Picture
                                        </button>
                                        {profilePicturePreview && (
                                            <button
                                                type="button"
                                                className="btn btn-outline-danger mt-2 ml-6"
                                                onClick={() => {
                                                    setProfilePicturePreview(null);
                                                    setProfilePictureFile(null);
                                                }}
                                            >
                                                Remove Picture
                                            </button>
                                        )}
                                    </div>
                                )}
                            </ImageUploading>
                        </div>
                    </div>
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {Object.keys(formData).filter(key =>
                            key !== 'biographyEnglish' &&
                            key !== 'biographyArabic' &&
                            key !== 'website' &&
                            key !== 'skills' && // Exclude skills here as it's a custom component now
                            key !== 'experience' && // Exclude 'experience' here as it's handled specifically
                            key !== 'budget' &&
                            key !== 'availability' &&
                            key !== 'workCategoryClassification' && // Exclude workCategoryClassification here
                            key !== 'exhibitions' && // Exclude new array fields from this general loop
                            key !== 'achievements' &&
                            key !== 'education' &&
                            key !== 'digitalTools' &&
                            key !== 'individualSkills' &&
                            key !== 'experienceDetails'
                        ).map((key) => (
                            <div className='text-yankees-blue font-montserrat-extralight' key={key}>
                                <label htmlFor={key}>{key.replace(/([A-Z])/g, " $1").replace('fullName', 'Full Name').replace('mobileNumber', 'Mobile Number').replace('nationalId', 'National ID')}</label>
                                {key === 'country' ? (
                                    <select
                                        id={key}
                                        name={key}
                                        value={(formData as any)[key]} // Cast to any to access dynamically
                                        onChange={handleInputChange}
                                        className="form-select text-yankees-blue font-montserrat-light"
                                    >
                                        <option value="">Select your Country</option>
                                        {countries.map((country: ICountry) => (
                                            <option key={country.isoCode} value={country.isoCode}>
                                                {country.name}
                                            </option>
                                        ))}
                                    </select>
                                ) : key === 'city' ? (
                                    <select
                                        id={key}
                                        name={key}
                                        value={(formData as any)[key]} // Cast to any to access dynamically
                                        onChange={handleInputChange}
                                        className="form-select text-yankees-blue font-montserrat-light"
                                        disabled={!formData.country}
                                    >
                                        <option value="">Select your City</option>
                                        {citiesOfSelectedCountry.map((item) => (
                                            <option key={item.name} value={item.name}>
                                                {item.name}
                                            </option>
                                        ))}
                                    </select>
                                ) : (
                                    <input
                                        id={key}
                                        name={key}
                                        type={key === 'email' ? 'email' : 'text'}
                                        value={(formData as any)[key]} // Cast to any to access dynamically
                                        onChange={handleInputChange}
                                        className="form-input text-yankees-blue font-montserrat-light"
                                    />
                                )}
                            </div>
                        ))}

                        {/* Website Input Field */}
                        <div className='text-yankees-blue font-montserrat-extralight'>
                            <label htmlFor="website">Website</label>
                            <input
                                id="website"
                                name="website"
                                type="text"
                                placeholder="www.example.com"
                                value={formData.website}
                                onChange={handleInputChange}
                                className="form-input text-yankees-blue font-montserrat-light"
                            />
                        </div>

                        {/* Skills Dropdown - USING REACT-SELECT */}
                        <div className='text-yankees-blue font-montserrat-extralight'>
                            <label htmlFor="skills">Choose Skills (if applicable)</label>
                            <Select
                                id="skills"
                                name="skills"
                                isMulti // Enables multi-selection
                                options={skillsOptions}
                                value={
                                    formData.skills.map(skill => ({ value: skill, label: skill })) // Convert stored strings to {value, label} format
                                }
                                onChange={handleSkillsChange}
                                className="react-select-container" // For custom styling if needed
                                classNamePrefix="react-select" // For custom styling if needed
                                placeholder="Select skills..."
                            />
                        </div>

                       
                        {/* Budget Input Field */}
                        <div className='text-yankees-blue font-montserrat-extralight'>
                            <label htmlFor="budget">Budget</label>
                            <input
                                id="budget"
                                name="budget"
                                type="number"
                                placeholder="Enter your budget"
                                value={formData.budget}
                                onChange={handleInputChange}
                                className="form-input text-yankees-blue font-montserrat-light"
                            />
                        </div>

                        {/* Availability Dropdown */}
                        <div className='text-yankees-blue font-montserrat-extralight'>
                            <label htmlFor="availability">Availability</label>
                            <select
                                id="availability"
                                name="availability"
                                value={formData.availability}
                                onChange={handleInputChange}
                                className="form-select text-yankees-blue font-montserrat-light"
                            >
                                <option value="">Select Availability</option>
                                {availabilityOptions.map((option) => (
                                    <option key={option} value={option}>{option}</option>
                                ))}
                            </select>
                        </div>

                        {/* NEW: Work Category Classification Dropdown */}
                        <div className='text-yankees-blue font-montserrat-extralight'>
                            <label htmlFor="workCategoryClassification">Classify Work Category</label>
                            <select
                                id="workCategoryClassification"
                                name="workCategoryClassification"
                                value={formData.workCategoryClassification}
                                onChange={handleInputChange}
                                className="form-select text-yankees-blue font-montserrat-light"
                            >
                                <option value="">Select a category</option>
                                {workCategoryClassificationOptions.map((option) => (
                                    <option key={option} value={option}>{option}</option>
                                ))}
                            </select>
                        </div>

                        {/* NEW: Experience Details Input Field (Multiple) */}
                        <div className='text-yankees-blue font-montserrat-extralight sm:col-span-2'>
                            <label htmlFor="newExperienceDetail">Experience Details</label>
                            <div className="flex">
                                <input
                                    id="newExperienceDetail"
                                    type="text"
                                    placeholder="Add a detailed experience (e.g., 'Led a team of 5 artists')"
                                    value={newExperienceDetail}
                                    onChange={(e) => setNewExperienceDetail(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            e.preventDefault();
                                            handleAddToArray('experienceDetails', newExperienceDetail, setNewExperienceDetail);
                                        }
                                    }}
                                    className="form-input text-yankees-blue font-montserrat-light flex-grow"
                                />
                                <button
                                    type="button"
                                    onClick={() => handleAddToArray('experienceDetails', newExperienceDetail, setNewExperienceDetail)}
                                    className="btn bg-yankees-blue text-white font-montserrat-light ml-2"
                                >
                                    Add
                                </button>
                            </div>
                            <div className="mt-2">
                                {formData.experienceDetails.map((item, index) => (
                                    <div key={index} className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-2 rounded-md mb-1">
                                        <span className="text-sm">{item}</span>
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveFromArray('experienceDetails', index)}
                                            className="ml-2 text-red-500 hover:text-red-700"
                                        >
                                            &times;
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Exhibitions Input Field (Multiple) */}
                        <div className='text-yankees-blue font-montserrat-extralight sm:col-span-2'>
                            <label htmlFor="newExhibition">Exhibitions</label>
                            <div className="flex">
                                <input
                                    id="newExhibition"
                                    type="text"
                                    placeholder="Add an exhibition (e.g., 'Art Expo 2023, London')"
                                    value={newExhibition}
                                    onChange={(e) => setNewExhibition(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            e.preventDefault();
                                            handleAddToArray('exhibitions', newExhibition, setNewExhibition);
                                        }
                                    }}
                                    className="form-input text-yankees-blue font-montserrat-light flex-grow"
                                />
                                <button
                                    type="button"
                                    onClick={() => handleAddToArray('exhibitions', newExhibition, setNewExhibition)}
                                    className="btn bg-yankees-blue text-white font-montserrat-light ml-2"
                                >
                                    Add
                                </button>
                            </div>
                            <div className="mt-2">
                                {formData.exhibitions.map((item, index) => (
                                    <div key={index} className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-2 rounded-md mb-1">
                                        <span className="text-sm">{item}</span>
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveFromArray('exhibitions', index)}
                                            className="ml-2 text-red-500 hover:text-red-700"
                                        >
                                            &times;
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Achievements Input Field (Multiple) */}
                        <div className='text-yankees-blue font-montserrat-extralight sm:col-span-2'>
                            <label htmlFor="newAchievement">Achievements</label>
                            <div className="flex">
                                <input
                                    id="newAchievement"
                                    type="text"
                                    placeholder="Add an achievement (e.g., 'Awarded Best Artist 2022')"
                                    value={newAchievement}
                                    onChange={(e) => setNewAchievement(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            e.preventDefault();
                                            handleAddToArray('achievements', newAchievement, setNewAchievement);
                                        }
                                    }}
                                    className="form-input text-yankees-blue font-montserrat-light flex-grow"
                                />
                                <button
                                    type="button"
                                    onClick={() => handleAddToArray('achievements', newAchievement, setNewAchievement)}
                                    className="btn bg-yankees-blue text-white font-montserrat-light ml-2"
                                >
                                    Add
                                </button>
                            </div>
                            <div className="mt-2">
                                {formData.achievements.map((item, index) => (
                                    <div key={index} className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-2 rounded-md mb-1">
                                        <span className="text-sm">{item}</span>
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveFromArray('achievements', index)}
                                            className="ml-2 text-red-500 hover:text-red-700"
                                        >
                                            &times;
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Education Input Field (Multiple) */}
                        <div className='text-yankees-blue font-montserrat-extralight sm:col-span-2'>
                            <label htmlFor="newEducation">Education</label>
                            <div className="flex">
                                <input
                                    id="newEducation"
                                    type="text"
                                    placeholder="Add an educational background (e.g., 'B.A. Fine Arts')"
                                    value={newEducation}
                                    onChange={(e) => setNewEducation(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            e.preventDefault();
                                            handleAddToArray('education', newEducation, setNewEducation);
                                        }
                                    }}
                                    className="form-input text-yankees-blue font-montserrat-light flex-grow"
                                />
                                <button
                                    type="button"
                                    onClick={() => handleAddToArray('education', newEducation, setNewEducation)}
                                    className="btn bg-yankees-blue text-white font-montserrat-light ml-2"
                                >
                                    Add
                                </button>
                            </div>
                            <div className="mt-2">
                                {formData.education.map((item, index) => (
                                    <div key={index} className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-2 rounded-md mb-1">
                                        <span className="text-sm">{item}</span>
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveFromArray('education', index)}
                                            className="ml-2 text-red-500 hover:text-red-700"
                                        >
                                            &times;
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Digital Tools Input Field (Multiple) */}
                        <div className='text-yankees-blue font-montserrat-extralight sm:col-span-2'>
                            <label htmlFor="newDigitalTool">Digital Tools</label>
                            <div className="flex">
                                <input
                                    id="newDigitalTool"
                                    type="text"
                                    placeholder="Add a digital tool (e.g., 'Adobe Photoshop')"
                                    value={newDigitalTool}
                                    onChange={(e) => setNewDigitalTool(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            e.preventDefault();
                                            handleAddToArray('digitalTools', newDigitalTool, setNewDigitalTool);
                                        }
                                    }}
                                    className="form-input text-yankees-blue font-montserrat-light flex-grow"
                                />
                                <button
                                    type="button"
                                    onClick={() => handleAddToArray('digitalTools', newDigitalTool, setNewDigitalTool)}
                                    className="btn bg-yankees-blue text-white font-montserrat-light ml-2"
                                >
                                    Add
                                </button>
                            </div>
                            <div className="mt-2">
                                {formData.digitalTools.map((item, index) => (
                                    <div key={index} className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-2 rounded-md mb-1">
                                        <span className="text-sm">{item}</span>
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveFromArray('digitalTools', index)}
                                            className="ml-2 text-red-500 hover:text-red-700"
                                        >
                                            &times;
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Core Skills Input Field (Multiple) - Renamed from IndividualSkills */}
                        <div className='text-yankees-blue font-montserrat-extralight sm:col-span-2'>
                            <label htmlFor="newIndividualSkill">Core Skills</label>
                            <div className="flex">
                                <input
                                    id="newIndividualSkill"
                                    type="text"
                                    placeholder="Add a core skill (e.g., 'Oil Painting')"
                                    value={newIndividualSkill}
                                    onChange={(e) => setNewIndividualSkill(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            e.preventDefault();
                                            handleAddToArray('individualSkills', newIndividualSkill, setNewIndividualSkill);
                                        }
                                    }}
                                    className="form-input text-yankees-blue font-montserrat-light flex-grow"
                                />
                                <button
                                    type="button"
                                    onClick={() => handleAddToArray('individualSkills', newIndividualSkill, setNewIndividualSkill)}
                                    className="btn bg-yankees-blue text-white font-montserrat-light ml-2"
                                >
                                    Add
                                </button>
                            </div>
                            <div className="mt-2">
                                {formData.individualSkills.map((item, index) => (
                                    <div key={index} className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-2 rounded-md mb-1">
                                        <span className="text-sm">{item}</span>
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveFromArray('individualSkills', index)}
                                            className="ml-2 text-red-500 hover:text-red-700"
                                        >
                                            &times;
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>


                        {/* Biography English */}
                        <div className="sm:col-span-2">
                            <label htmlFor="biographyEnglish" className="block text-yankees-blue font-montserrat-extralight mb-2">
                                Biography (English)
                            </label>
                            <textarea
                                id="biographyEnglish"
                                name="biographyEnglish"
                                rows={6}
                                value={formData.biographyEnglish}
                                onChange={handleInputChange}
                                className="form-input text-yankees-blue font-montserrat-light w-full"
                            ></textarea>
                        </div>

                        {/* Biography Arabic */}
                        <div className="sm:col-span-2">
                            <label htmlFor="biographyArabic" className="block text-yankees-blue font-montserrat-extralight mb-2">
                                Biography (Arabic)
                            </label>
                            <textarea
                                id="biographyArabic"
                                name="biographyArabic"
                                rows={6}
                                value={formData.biographyArabic}
                                onChange={handleInputChange}
                                className="form-input text-yankees-blue font-montserrat-light w-full"
                                dir="rtl"
                            ></textarea>
                        </div>
                        {/* Social Form */}
                        <div className="flex flex-col sm:col-span-2">
                            <h6 className="text-lg font-montserrat-regular text-yankees-blue mb-5">Socials</h6>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                {/* Instagram - Now explicitly placed on top */}
                                <div className="flex flex-col">
                                    <label htmlFor="instagram" className="text-sm text-yankees-blue font-montserrat-extralight">Instagram</label>
                                    <input
                                        type="text"
                                        id="instagram"
                                        name="instagram"
                                        placeholder=""
                                        value={socials.instagram || ''}
                                        onChange={handleSocialsChange}
                                        className="form-input"
                                    />
                                </div>

                                {/* X (Twitter) */}
                                <div className="flex flex-col">
                                    <label htmlFor="twitter" className="text-sm text-yankees-blue font-montserrat-extralight">X (Twitter)</label>
                                    <input
                                        type="text"
                                        id="twitter"
                                        name="twitter"
                                        placeholder=""
                                        value={socials.twitter || ''}
                                        onChange={handleSocialsChange}
                                        className="form-input"
                                    />
                                </div>

                                {/* LinkedIn */}
                                <div className="flex flex-col">
                                    <label htmlFor="linkedin" className="text-sm text-yankees-blue font-montserrat-extralight">LinkedIn</label>
                                    <input
                                        type="text"
                                        id="linkedin"
                                        name="linkedin"
                                        placeholder=""
                                        value={socials.linkedin || ''}
                                        onChange={handleSocialsChange}
                                        className="form-input"
                                    />
                                </div>

                                {/* Behance */}
                                <div className="flex flex-col">
                                    <label htmlFor="behance" className="text-sm text-yankees-blue font-montserrat-extralight">Behance</label>
                                    <input
                                        type="text"
                                        id="behance"
                                        name="behance"
                                        placeholder=""
                                        value={socials.behance || ''}
                                        onChange={handleSocialsChange}
                                        className="form-input"
                                    />
                                </div>

                                {/* Facebook */}
                                <div className="flex flex-col">
                                    <label htmlFor="facebook" className="text-sm text-yankees-blue font-montserrat-extralight">Facebook</label>
                                    <input
                                        type="text"
                                        id="facebook"
                                        name="facebook"
                                        placeholder=""
                                        value={socials.facebook || ''}
                                        onChange={handleSocialsChange}
                                        className="form-input"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-2 mt-3 justify-items-center">
                            {error && <p className="text-red-500 mb-2 text-center">{error}</p>}
                            {success && <p className="text-green-500 mb-2 text-center">{success}</p>}
                            <button
                                type="submit"
                                className="btn bg-yankees-blue text-white font-montserrat-light w-full"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Saving...' : 'Save'}
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UserProfileForm;