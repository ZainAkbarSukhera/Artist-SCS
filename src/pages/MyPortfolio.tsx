// import React, { useState } from 'react';
// import '../assets/file-upload-preview.css';
// import ImageUploading, { ImageListType } from 'react-images-uploading';


// const MyPortfolio = () => {
//   const [images2, setImages2] = useState<any>([]);
//   const [artworkDetails, setArtworkDetails] = useState({
//     description: '',
//     medium: '',
//     size: '',
//     price: '',
//     availability: '',
//     year: '',
//     category: 'Painting',
//     marketType: 'Primary Market',
//   });
//   const [certificates, setCertificates] = useState<File[]>([]);
//   const [timestamps, setTimestamps] = useState<File[]>([]);

//   const maxNumber = 69;

//   const onChange2 = (imageList: any[], addUpdateIndex: number[] | undefined) => {
//     setImages2(imageList);
//   };

//   const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, setter: Function) => {
//     if (e.target.files) {
//       setter(Array.from(e.target.files));
//     }
//   };

//   // Function to handle saving the portfolio
//   const handleSavePortfolio = () => {
//     const portfolioData = {
//       images: images2,
//       artworkDetails,
//       certificates,
//       timestamps,
//     };

//     // Log the portfolio data (or send to a backend)
//     console.log('Saving Portfolio:', portfolioData);

//     // You can add functionality to save the data to a server or database here

//     // For now, alert to confirm the save
//     alert('Portfolio saved!');
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-xl font-montserrat-regular text-yankees-blue mb-6">Upload Portfolio Items</h1>

//       {/* Gallery of Work */}
//       <section className="mb-10">
//         <div className="custom-file-container" data-upload-id="mySecondImage">
//           <div className="label-container ">
//             <label className='text-yankees-blue font-montserrat-regular '>Upload Images </label>
//             <button
//               type="button"
//               className="custom-file-container__image-clear text-yankees-blue"
//               title="Clear Image"
//               onClick={() => {
//                 setImages2([]);
//               }}
//             >
//               ×
//             </button>
//           </div>
//           <label className="custom-file-container__custom-file"></label>
//           <input type="file" className="custom-file-container__custom-file__custom-file-input" accept="image/*" />
//           <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
//           <ImageUploading multiple value={images2} onChange={onChange2} maxNumber={maxNumber}>
//             {({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
//               <div className="upload__image-wrapper">
//                 <button className="custom-file-container__custom-file__custom-file-control text-yankees-blue font-montserrat-light" onClick={onImageUpload}>
//                   Choose File...
//                 </button>
//                 &nbsp;
//                 <div className="grid gap-4 sm:grid-cols-3 grid-cols-1">
//                   {imageList.map((image, index) => (
//                     <div key={index} className="relative border rounded-md shadow-sm">
//                       <button
//                         type="button"
//                         className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-800"
//                         onClick={() => onImageRemove(index)}
//                       >
//                         ×
//                       </button>
//                       <img src={image.dataURL} alt="uploaded" className="object-cover w-full h-auto rounded" />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </ImageUploading>
//           {images2.length === 0 ? <img src="/assets/images/file-preview.svg" className="max-w-md w-full m-auto" alt="" /> : ''}
//         </div>
//       </section>

//       {/* Artwork Details */}
//       <section className="mb-10">
//         <h2 className="text-xl font-montserrat-regular text-yankees-blue mb-4">Artwork Details</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           {Object.keys(artworkDetails).map((key) => (
//             <div key={key}>
//               <label htmlFor={key} className="block text-xs text-yankees-blue font-montserrat-regular mb-2">
//                 {key.replace(/([A-Z])/g, ' $1').toUpperCase()}
//               </label>
//               {key === 'category' || key === 'marketType' ? (
//                 <select
//                   id={key}
//                   value={artworkDetails[key as keyof typeof artworkDetails]}
//                   onChange={(e) =>
//                     setArtworkDetails({ ...artworkDetails, [key]: e.target.value })
//                   }
//                   className="form-select border border-gray-300 rounded-md w-full font-montserrat-light text-yankees-blue"
//                 >
//                   {key === 'category' && (
//                     <>
//                       <option value="Painting">Painting</option>
//                       <option value="Sculpture">Sculpture</option>
//                       <option value="Digital Art">Calligraphy</option>
//                       <option value="Digital Art">Drawing & Illustration</option>
//                       <option value="Digital Art">Graphics</option>
//                       <option value="Digital Art">Mixed Media</option>
//                       <option value="Digital Art">Photography</option>
//                       <option value="Digital Art">Printmaking</option>
//                       <option value="Digital Art">Digital Art</option>
//                     </>
//                   )}
//                   {key === 'marketType' && (
//                     <>
//                       <option value="Primary Market">Primary Market</option>
//                       <option value="Secondary Market">Secondary Market</option>
//                       <option value="NFTs">NFTs</option>
//                       <option value="Prints & Souvenirs">Prints & Souvenirs</option>
//                     </>
//                   )}
//                 </select>
//               ) : (
//                 <input
//                   type="text"
//                   id={key}
//                   value={artworkDetails[key as keyof typeof artworkDetails]}
//                   onChange={(e) =>
//                     setArtworkDetails({ ...artworkDetails, [key]: e.target.value })
//                   }
//                   className="form-input border border-gray-300 rounded-md w-full font-montserrat-light text-yankees-blue"
//                 />
//               )}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Certificates of Authenticity */}
//       <section className="mb-10">
//         <h2 className="text-xl text-yankees-blue font-montserrat-regular mb-4">Certificates of Authenticity</h2>
//         <input
//           type="file"
//           multiple
//           onChange={(e) => {
//             const uploadedFiles = Array.from(e.target.files || []);
//             setCertificates((prevCertificates) => [...prevCertificates, ...uploadedFiles]);
//           }}
//           className="form-input border border-gray-300 rounded-md w-full  text-yankees-blue font-montserrat-light"
//         />
//         {certificates.length > 0 && (
//           <ul className="mt-4 space-y-2">
//             {certificates.map((file, index) => (
//               <li key={index} className="flex items-center text-gray-700">
//                 <span className="flex-1">{file.name}</span>
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setCertificates((prevCertificates) =>
//                       prevCertificates.filter((_, i) => i !== index)
//                     );
//                   }}
//                   className="ml-4 text-red-600 hover:text-red-800"
//                 >
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>
//         )}
//       </section>

//       {/* Timestamp or SAIP Registration */}
//       <section className="mb-10">
//         <h2 className="text-xl text-yankees-blue font-montserrat-regular mb-4">Timestamp or SAIP Registration</h2>
//         <input
//           type="file"
//           multiple
//           onChange={(e) => {
//             const uploadedFiles = Array.from(e.target.files || []);
//             setTimestamps((prevTimestamps) => [...prevTimestamps, ...uploadedFiles]);
//           }}
//           className="form-input border border-gray-300 rounded-md w-full text-yankees-blue font-montserrat-light"
//         />
//         {timestamps.length > 0 && (
//           <ul className="mt-4 space-y-2">
//             {timestamps.map((file, index) => (
//               <li key={index} className="flex items-center text-gray-700">
//                 <span className="flex-1">{file.name}</span>
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setTimestamps((prevTimestamps) =>
//                       prevTimestamps.filter((_, i) => i !== index)
//                     );
//                   }}
//                   className="ml-4 text-red-600 hover:text-red-800"
//                 >
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>
//         )}
//       </section>

//       {/* Save Button */}
//       <div className="text-center mt-6">
//         <button
//           onClick={handleSavePortfolio}
//           className="bg-yankees-blue text-white py-2 px-6 rounded-md hover:bg-yankees-blue w-full font-montserrat-light"
//         >
//           Save Item
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MyPortfolio;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import '../assets/file-upload-preview.css';
// import ImageUploading, { ImageListType } from 'react-images-uploading';

// // Import Redux actions and types
// import {
//   setArtworkDetail,
//   setImages,
//   addCertificate,
//   removeCertificate,
//   setSaipRegistration,
//   // addTimestamp,
//   // removeTimestamp,
//   resetPortfolioForm,
//   ArtworkDetailsState, // Import the type for useSelector
// } from '../store/artworkSlice'; 

// // Import the API service function and S3 uploader
// import { createArtworkApi, ArtworkImage } from '../api/artwork';
// import { uploadFileToS3 } from '../utils/s3Uploader'; // Assuming this is your s3Uploader.ts file

// // Import UserState for useSelector
// import { UserState } from '../store/userSlice'; // Ensure this path is correct for your user slice

// const MyPortfolio = () => {
//   const dispatch = useDispatch();

//   // Select the entire artworkDetails state from Redux, typed correctly
//   const artworkDetails = useSelector((state: { artworkDetails: ArtworkDetailsState }) => state.artworkDetails);
//   // Select user data (including _id for artistId) from Redux, typed correctly
//   const user = useSelector((state: { user: UserState }) => state.user);

//   // Destructure specific parts for easier access
//   const { images, certificates, saipRegistration } = artworkDetails;

//   // Determine max images allowed based on displayOption from Redux state
//   const currentMaxImages = artworkDetails.displayOption === "Prints & Souvenirs" ? 6 : 1;

//   // Static options for dropdowns (can remain local or be moved to a constants file)
//   const formatOptions = [
//     "Digital Print on Archival Paper", "Ink on Paper", "Mixed Media on Canvas",
//     "Engraving on Wood or Metal", "Oil on Canvas", "Acrylic on Canvas",
//     "Watercolour on Paper", "Freestanding Sculptures", "Metal Work Sculptures",
//     "3D Printed", "Mixed Media Assemblage", "C-Prints",
//     "Aluminium Mounted Prints", "Framed Photographs", "Collage on Canvas or Board",
//     "Assemblage on Panel", "Textile Art (Fabric & Embroidery)", "Screen Print on Paper",
//     "Lithograph on Paper", "Etching on Metal", "Monotype Prints",
//     "Giclée Prints on Canvas or Paper", "Charcoal on Paper", "Pen and Ink on Paper",
//     "Graphite on Board", "Coloured Pencil on Bristol Paper", "PDF", "AI", "PSD", "SVG", "EPS", "JPG", "PNG"
//   ];
//   const locationOptions = [
//     "Riyadh", "Jeddah", "Makkah", "Madina", "Khobar", "Dammam",
//     "Tabuk", "Ta'if", "Abha", "Khamis Mushait", "Buraidah", "Hail"
//   ];
//   const styleOptions = [
//     "Abstract", "Realism", "Impressionism", "Minimalism",
//     "Surrealism", "Contemporary", "Traditional"
//   ];
//   const themesOptions = [
//     "Cultural Heritage", "Nature", "Urban Life", "Portraits", "Conceptual"
//   ];
//   const intermediariesOptions = [
//     "Athr Gallery", "Hafez Gallery", "Hayy Jameel", "Landscape Gallery"
//   ];
//   const framingOptions = [
//     "Framed", "Unframed", "Custom Framing Available"
//   ];
//   const shippingOptions = [
//     "Local Pickup", "Domestic Shipping", "International Shipping"
//   ];
//   const signatureOptions = [
//     "Signed by Artist", "Not Signed by Artist"
//   ];
//   const categoryOptions = [
//     "Calligraphy", "Drawing & Illustration", "Graphics", "Mixed Media",
//     "Painting", "Photography", "Printmaking", "Sculpture"
//   ];
//   const displayOptionOptions = [
//     "Primary Market", "Secondary Market", "NFTs", "Prints & Souvenirs"
//   ];

//   // Options for 'availability' and 'rarity' which were dynamically handled in the loop
//   const availabilityOptions = ["available", "sold", "on hold"];
//   // const rarityOptions = ["Unique", "Limited Edition", "Open Edition"];


//   const handleSavePortfolio = async (e: React.FormEvent) => {
//     e.preventDefault(); // Prevent default form submission

//     const artistId = user._id; // Get artistId from Redux user slice
//     console.log("Artist id: ", artistId);
//     // Get token from localStorage or your authentication context/slice
//     // IMPORTANT: Ensure your login process stores the token securely (e.g., localStorage, http-only cookie)
//     const token = localStorage.getItem('token'); // Example: retrieving from localStorage
//     console.log("token: ", token);

//     if (!artistId) {
//       alert("Artist ID is missing. Please ensure you are logged in.");
//       return;
//     }
//     if (!token) {
//       alert("Authentication token is missing. Please log in.");
//       return;
//     }

//     try {
//       // 1. Upload Images to S3
//       const uploadedImageUrls: ArtworkImage[] = [];
//       for (const imageItem of images) {
//         if (imageItem.file) {
//           console.log("image time");
//           const { location } = await uploadFileToS3(imageItem.file, 'artwork_images/');
//           console.log("location mil gayi hai!");
//           if (location) {
//             console.log("location", location);
//             // Use imageItem.dataURL for altText if available, or fallback to description
//             uploadedImageUrls.push({ url: location, altText: imageItem.dataURL ? `Image for artwork ${artworkDetails.title || artworkDetails.description}` : '' });
//             console.log("An image got uploaded Shehzaaday!");
//           } else {
//             console.warn(`Failed to upload image: ${imageItem.file.name}`);
//           }
//         }
//       }
//       console.log("Uploaded Images: ", uploadedImageUrls);
//       if (uploadedImageUrls.length === 0) {
//         alert("Please upload at least one image for the artwork.");
//         return;
//       }


//       // 2. Upload Certificates to S3
//       const uploadedCertificateUrls: string[] = [];
//       for (const certificateFile of certificates) {
//         console.log("Certificate Time!");
//         const { location } = await uploadFileToS3(certificateFile, 'artwork_certificates/');
//         if (location) {
//           console.log("Certificate ki location mil gayi hai: ", location);
//           uploadedCertificateUrls.push(location);
//           console.log("A certificate got pushed");
//         } else {
//           console.warn(`Failed to upload certificate: ${certificateFile.name}`);
//         }

//         console.log("Uploaded Certificates: ",uploadedCertificateUrls);
//       }

//       // 3. Upload Timestamps/SAIP Registrations to S3
//       // let uploadedTimestampUrl: string | undefined = undefined;
//       // let uploadedSaipRegistrationUrl: string | undefined = undefined;

//       // if (timestamps.length > 0) {
//       //   const { location: tsLoc1 } = await uploadFileToS3(timestamps[0], 'artwork_timestamps');
//       //   if (tsLoc1) {
//       //     uploadedTimestampUrl = tsLoc1;
//       //   } else {
//       //     console.warn(`Failed to upload primary timestamp: ${timestamps[0].name}`);
//       //   }

//       //   if (timestamps.length > 1) {
//       //     const { location: tsLoc2 } = await uploadFileToS3(timestamps[1], 'artwork_timestamps');
//       //     if (tsLoc2) {
//       //       uploadedSaipRegistrationUrl = tsLoc2;
//       //     } else {
//       //       console.warn(`Failed to upload secondary timestamp (SAIP): ${timestamps[1].name}`);
//       //     }
//       //   }
//       // }

//       let uploadedSaipRegistrationUrl: string | undefined = undefined;
//       if (artworkDetails.saipRegistration && artworkDetails.saipRegistration instanceof File) {
//         console.log("SAIP certificate aaya hai :)");
//         const { location } = await uploadFileToS3(artworkDetails.saipRegistration, 'artwork_saip/');
//         if (location) {
//           console.log("SAIP ki location mil gayi hai: ", location);
//           uploadedSaipRegistrationUrl = location;
//           console.log("SAIP uploaded: ", uploadedSaipRegistrationUrl);
//         } else {
//           console.warn(`Failed to upload SAIP registration file: ${artworkDetails.saipRegistration.name}`);
//         }
//       }

//       // 4. Prepare the final payload for the backend API (matching ArtworkPayload interface)
//       const payload = {
//         title: artworkDetails.title,
//         description: artworkDetails.description,
//         format: artworkDetails.format,
//         size: artworkDetails.size,
//         price: parseFloat(String(artworkDetails.price)), // Ensure price is number after string conversion
//         images: uploadedImageUrls,
//         availability: artworkDetails.availability,
//         yearOfCreation: parseInt(String(artworkDetails.yearOfCreation)), // Ensure yearOfCreation is number
//         displayOption: artworkDetails.displayOption,
//         category: artworkDetails.category,
//         location: artworkDetails.location,
//         style: artworkDetails.style,
//         theme: artworkDetails.theme,
//         intermediary: artworkDetails.intermediary,
//         framingOptions: artworkDetails.framingOptions,
//         shipping: artworkDetails.shipping,
//         rarity: artworkDetails.rarity,
//         signatureByArtist: artworkDetails.signatureByArtist,
//         certifications: artworkDetails.certifications,
//         certificatesUrl: uploadedCertificateUrls,
//         // timestampRegistration: uploadedTimestampUrl,
//         saipRegistration: uploadedSaipRegistrationUrl,
//       };

//       console.log("Sending payload to backend:", payload);

//       // 5. Call the backend API
//       const response = await createArtworkApi(artistId, payload, token);
//       console.log("A response is returned!");
//       if (response) {
//         alert(`Portfolio item saved successfully`);
//         dispatch(resetPortfolioForm());
//       } else {
//           alert("An unknown error occurred during artwork submission.");
//       }

//     } catch (error: any) {
//       console.error("Failed to save portfolio:", error);
//       alert(`Error saving artwork: ${error.message || "An unexpected error occurred."}`);
//     }
//   };

//  return (
//   <div className="container mx-auto p-6">
//     <h1 className="text-xl font-montserrat-regular text-yankees-blue mb-6">Upload Artwork</h1>

//     {/* Artwork Details */}
//     <section className="mb-10">
//       <h2 className="text-xl font-montserrat-regular text-yankees-blue mb-4">Artwork Details</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

//         {/* Title Field */}
//         <div>
//           <label htmlFor="title" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">
//             TITLE
//           </label>
//           <input
//             type="text"
//             id="title"
//             value={artworkDetails.title}
//             onChange={(e) =>
//               dispatch(setArtworkDetail({ field: 'title', value: e.target.value }))
//             }
//             className="form-input border border-gray-300 rounded-md w-full font-montserrat-light text-yankees-blue"
//           />
//         </div>

//         {/* Display Option Field */}
//         <div>
//           <label htmlFor="displayOption" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">
//             MARKET TYPE / DISPLAY OPTION
//           </label>
//           <select
//             id="displayOption"
//             value={artworkDetails.displayOption}
//             onChange={(e) =>
//               dispatch(setArtworkDetail({ field: 'displayOption', value: e.target.value }))
//             }
//             className="form-select border border-gray-300 rounded-md w-full font-montserrat-light text-yankees-blue"
//           >
//             <option value="">Select a display option</option>
//             {displayOptionOptions.map((option) => (
//               <option key={option} value={option}>{option}</option>
//             ))}
//           </select>
//         </div>

//         {/* Remaining Artwork Fields */}
//         {Object.keys(artworkDetails).filter(key =>
//           ![
//             'images', 'certificates', 'timestamps', 'displayOption', 'title',
//             'certificatesUrl', 'timestampRegistration', 'saipRegistration', 'saipRegistrationUrl',
//           ].includes(key)
//         ).map((key) => {
//           const fieldName = key as keyof ArtworkDetailsState;
//           const fieldValue = artworkDetails[fieldName];

//           const dropdownFields = [
//             'category', 'format', 'location', 'style', 'theme', 'intermediary',
//             'framingOptions', 'shipping', 'signatureByArtist', 'availability'
//             // 'rarity' is removed to make it a text input
//           ];

//           return (
//             <div key={fieldName}>
//               <label htmlFor={fieldName} className="block text-xs text-yankees-blue font-montserrat-regular mb-2">
//                 {fieldName === 'price'
//                   ? 'PRICE IN SAR'
//                   : fieldName.replace(/([A-Z])/g, ' $1').toUpperCase()}
//               </label>
//               {dropdownFields.includes(fieldName) ? (
//                 <select
//                   id={fieldName}
//                   value={fieldValue === undefined || fieldValue === null ? '' : String(fieldValue)}
//                   onChange={(e) =>
//                     dispatch(setArtworkDetail({ field: fieldName, value: e.target.value }))
//                   }
//                   className="form-select border border-gray-300 rounded-md w-full font-montserrat-light text-yankees-blue"
//                 >
//                   <option value="">Select a {fieldName.replace(/([A-Z])/g, ' $1').toLowerCase()}</option>
//                   {fieldName === 'category' && categoryOptions.map(option => <option key={option} value={option}>{option}</option>)}
//                   {fieldName === 'format' && formatOptions.map(option => <option key={option} value={option}>{option}</option>)}
//                   {fieldName === 'location' && locationOptions.map(option => <option key={option} value={option}>{option}</option>)}
//                   {fieldName === 'style' && styleOptions.map(option => <option key={option} value={option}>{option}</option>)}
//                   {fieldName === 'theme' && themesOptions.map(option => <option key={option} value={option}>{option}</option>)}
//                   {fieldName === 'intermediary' && intermediariesOptions.map(option => <option key={option} value={option}>{option}</option>)}
//                   {fieldName === 'framingOptions' && framingOptions.map(option => <option key={option} value={option}>{option}</option>)}
//                   {fieldName === 'shipping' && shippingOptions.map(option => <option key={option} value={option}>{option}</option>)}
//                   {fieldName === 'signatureByArtist' && signatureOptions.map(option => <option key={option} value={option}>{option}</option>)}
//                   {fieldName === 'availability' && availabilityOptions.map(option => <option key={option} value={option}>{option}</option>)}
//                 </select>
//               ) : (
//                 <input
//                   type={fieldName === 'price' || fieldName === 'yearOfCreation' ? 'number' : 'text'}
//                   id={fieldName}
//                   value={fieldValue === undefined || fieldValue === null ? '' : String(fieldValue)}
//                   onChange={(e) => {
//                     let valueToDispatch: string | number = e.target.value;
//                     if (fieldName === 'price' || fieldName === 'yearOfCreation') {
//                       valueToDispatch = e.target.value === '' ? '' : parseFloat(e.target.value);
//                       if (fieldName === 'yearOfCreation' && e.target.value !== '') {
//                         valueToDispatch = parseInt(e.target.value);
//                       }
//                     }
//                     dispatch(setArtworkDetail({ field: fieldName, value: valueToDispatch as ArtworkDetailsState[typeof fieldName] }));
//                   }}
//                   className="form-input border border-gray-300 rounded-md w-full font-montserrat-light text-yankees-blue"
//                 />
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </section>

//     {/* Image Upload Section */}
//     <section className="mb-10">
//       <div className="custom-file-container" data-upload-id="mySecondImage">
//         <div className="label-container ">
//           <label className='text-yankees-blue font-montserrat-regular '>
//             Upload Images (max {currentMaxImages})
//           </label>
//           <button
//             type="button"
//             className="custom-file-container__image-clear text-yankees-blue"
//             title="Clear Image"
//             onClick={() => dispatch(setImages([]))}
//           >
//             ×
//           </button>
//         </div>
//         <ImageUploading
//           multiple={currentMaxImages > 1}
//           value={images}
//           onChange={(imageList) => dispatch(setImages(imageList as { file: File; dataURL: string }[]))}
//           maxNumber={currentMaxImages}
//           dataURLKey="dataURL"
//         >
//           {({ imageList, onImageUpload }) => (
//             <div className="upload__image-wrapper">
//               <button
//                 type="button"
//                 className="custom-file-container__custom-file__custom-file-control text-yankees-blue font-montserrat-light"
//                 onClick={onImageUpload}
//               >
//                 Choose File...
//               </button>
//               <div className="grid gap-4 sm:grid-cols-3 grid-cols-1 mt-4">
//                 {imageList.map((image, index) => (
//                   <div key={index} className="relative border rounded-md shadow-sm">
//                     <button
//                       type="button"
//                       className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-800"
//                       onClick={() => {
//                         const updatedImages = imageList.filter((_, i) => i !== index);
//                         dispatch(setImages(updatedImages as { file: File; dataURL: string }[]));
//                       }}
//                     >
//                       ×
//                     </button>
//                     <img src={image.dataURL} alt="uploaded" className="object-cover w-full h-auto rounded" />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </ImageUploading>
//         {images.length === 0 && (
//           <img src="/assets/images/file-preview.svg" className="max-w-md w-full m-auto" alt="File preview" />
//         )}
//       </div>
//     </section>

//     {/* Certificate Upload Section */}
//     <section className="mb-10">
//       <h2 className="text-xl text-yankees-blue font-montserrat-regular mb-4">Certificates of Authenticity</h2>
//       <input
//         type="file"
//         multiple
//         onChange={(e) => {
//           const uploadedFiles = Array.from(e.target.files || []);
//           uploadedFiles.forEach(file => dispatch(addCertificate(file)));
//         }}
//         className="form-input border border-gray-300 rounded-md w-full text-yankees-blue font-montserrat-light"
//       />
//       {certificates.length > 0 && (
//         <ul className="mt-4 space-y-2">
//           {certificates.map((file, index) => (
//             <li key={index} className="flex items-center text-gray-700">
//               <span className="flex-1">{file.name}</span>
//               <button
//                 type="button"
//                 onClick={() => dispatch(removeCertificate(index))}
//                 className="ml-4 text-red-600 hover:text-red-800"
//               >
//                 Remove
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </section>

//     {/* Timestamp Registration Section – continue below if applicable */}
//       {/* --- Visual Separator --- */}

//       {/* Timestamp or SAIP Registration */}
//             <section className="mb-10">
//         <h2 className="text-xl text-yankees-blue font-montserrat-regular mb-4">SAIP Registration</h2>
//         <input
//           type="file"
//           onChange={(e) => {
//             const uploadedFile = e.target.files?.[0]; // Only allow a single file
//             if (uploadedFile) {
//               dispatch(setSaipRegistration(uploadedFile)); // Set the single SAIP registration file
//             }
//           }}
//           className="form-input border border-gray-300 rounded-md w-full text-yankees-blue font-montserrat-light"
//         />
//         {saipRegistration && ( // Display if saipRegistration file exists
//           <ul className="mt-4 space-y-2">
//             <li className="flex items-center text-gray-700">
//               <span className="flex-1">{saipRegistration.name}</span>
//               <button
//                 type="button"
//                 onClick={() => dispatch(setSaipRegistration(null))} // Clear the SAIP registration file
//                 className="ml-4 text-red-600 hover:text-red-800"
//               >
//                 Remove
//               </button>
//             </li>
//           </ul>
//         )}
//       </section>

//       {/* --- Visual Separator --- */}

//       {/* Save Button */}
//       <div className="text-center mt-6">
//         <button
//           onClick={handleSavePortfolio}
//           className="bg-yankees-blue text-white py-2 px-6 rounded-md hover:bg-yankees-blue w-full font-montserrat-light"
//         >
//           Save Item
//         </button>
//       </div>
//   </div>
// );

// };

// export default MyPortfolio;

////////////////////////////////////////////////////////////////////////////////////////////////////

// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import '../assets/file-upload-preview.css';
// import ImageUploading from 'react-images-uploading';

// // Import Redux actions and types
// import {
//   setArtworkDetail,
//   setImages,
//   addCertificate,
//   removeCertificate,
//   setSaipRegistration,
//   resetPortfolioForm,
//   ArtworkDetailsState, // Import the type for useSelector
// } from '../store/artworkSlice';

// // Import the API service function and S3 uploader
// import { createArtworkApi, ArtworkImage } from '../api/artwork';
// import { uploadFileToS3 } from '../utils/s3Uploader';

// // Import UserState for useSelector
// import { UserState } from '../store/userSlice';

// const MyPortfolio = () => {
//   const dispatch = useDispatch();

//   const artworkDetails = useSelector((state: { artworkDetails: ArtworkDetailsState }) => state.artworkDetails);
//   const user = useSelector((state: { user: UserState }) => state.user);

//   const { images, certificates, saipRegistration } = artworkDetails;

//   // --- Dynamic currentMaxImages based on displayOption ---
//   const currentMaxImages = artworkDetails.displayOption === "Prints & Souvenirs" ? 6 : 1;

//   // --- START: Dynamic Options Definition ---

//   // Default options (for Primary/Secondary Market)
//   const primarySecondaryFormatOptions = [
//     "Digital Print on Archival Paper", "Ink on Paper", "Mixed Media on Canvas",
//     "Engraving on Wood or Metal", "Oil on Canvas", "Acrylic on Canvas",
//     "Watercolour on Paper", "Freestanding Sculptures", "Metal Work Sculptures",
//     "3D Printed", "Mixed Media Assemblage", "C-Prints",
//     "Aluminium Mounted Prints", "Framed Photographs", "Collage on Canvas or Board",
//     "Assemblage on Panel", "Textile Art (Fabric & Embroidery)", "Screen Print on Paper",
//     "Lithograph on Paper", "Etching on Metal", "Monotype Prints",
//     "Giclée Prints on Canvas or Paper", "Charcoal on Paper", "Pen and Ink on Paper",
//     "Graphite on Board", "Coloured Pencil on Bristol Paper", "PDF", "AI", "PSD", "SVG", "EPS", "JPG", "PNG"
//   ];
//   const defaultLocationOptions = [
//     "Riyadh", "Jeddah", "Makkah", "Madina", "Khobar", "Dammam",
//     "Tabuk", "Ta'if", "Abha", "Khamis Mushait", "Buraidah", "Hail"
//   ];
//   const defaultIntermediariesOptions = [
//     "Athr Gallery", "Hafez Gallery", "Hayy Jameel", "Landscape Gallery"
//   ];
//   const defaultFramingOptions = [
//     "Framed", "Unframed", "Custom Framing Available"
//   ];
//   const defaultShippingOptions = [
//     "Local Pickup", "Domestic Shipping", "International Shipping"
//   ];
//   const defaultAvailabilityOptions = ["Instant Download","Available Now","Commission Available","Sold but Similar Works Available"];

//   // NFT specific options
//   const nftFormatOptions = [
//     "Digital Print on Archival Paper", "3D Models", "GIFs", "Animation", "Video",
//     "Augmented Reality (AR)", "Virtual Reality (VR)", "JPEG", "PNG", "3D Printed", "MP4", "SVG"
//   ];
//   const nftSizeOptions = [
//     "Small (Under 1000 x 1000 pixels)", "Medium (Up To 3000 x 3000 pixels)",
//     "Large (Above 3000 x 3000 pixels)", "Custom"
//   ];
//   const nftAvailabilityOptions = ["Instant Download", "Commission Available"];
//   const nftEditionOptions = ["1 of 1 (Unique)", "Limited Edition", "Open Edition"];
//   const nftRarityOptions = ["Common", "Rare", "Epic", "Legendary"];
//   const nftLicensingOptions = ["Commercial Use Allowed", "Personal Use Only", "Resale Rights Included"];

//   // Prints & Souvenirs specific options
//   const printsSouvenirsFormatOptions = [
//     "Giclée Prints", "Screen Prints", "Lithographs", "Digital Prints",
//     "Photographic Prints", "Posters", "Mugs", "Canvas Bags",
//     "Notebooks", "Phone Cases", "T-shirts", "Calendars",
//     "Magnets", "Keychains"
//   ];
//   const printsSouvenirsAvailabilityOptions = [
//     "Instant Download", "In Stock", "Limited Edition", "Exclusive Collections"
//   ];

//   // Shared options (unchanged across all display options)
//   const categoryOptions = [
//     "Calligraphy", "Drawing & Illustration", "Graphics", "Mixed Media",
//     "Painting", "Photography", "Printmaking", "Sculpture"
//   ];
//   const styleOptions = [
//     "Abstract", "Realism", "Impressionism", "Minimalism",
//     "Surrealism", "Contemporary", "Traditional"
//   ];
//   const themesOptions = [
//     "Cultural Heritage", "Nature", "Urban Life", "Portraits", "Conceptual"
//   ];
//   const signatureOptions = [
//     "Signed by Artist", "Not Signed by Artist"
//   ];
//   const displayOptionOptions = [
//     "Primary Market", "Secondary Market", "NFTs", "Prints & Souvenirs"
//   ];

//   // New: Certifications Options (only for Primary/Secondary)
//   const certificationOptions = [
//     "Certificate of Authenticity",
//     "Gallery Provenance",
//     "Signed By Artist",
//     "Copyrighted"
//   ];

//   // --- Helper function to get options based on displayOption ---
//   const getOptions = (field: string) => {
//     if (artworkDetails.displayOption === "NFTs") {
//       switch (field) {
//         case 'format': return nftFormatOptions;
//         case 'size': return nftSizeOptions;
//         case 'availability': return nftAvailabilityOptions;
//         case 'edition': return nftEditionOptions;
//         case 'rarity': return nftRarityOptions;
//         case 'licensing': return nftLicensingOptions;
//         // Common fields will use their global options
//         case 'category': return categoryOptions;
//         case 'style': return styleOptions;
//         case 'theme': return themesOptions;
//         case 'signatureByArtist': return signatureOptions;
//         default: return []; // For fields that might not have NFT-specific options
//       }
//     } else if (artworkDetails.displayOption === "Prints & Souvenirs") {
//       switch (field) {
//         case 'format': return printsSouvenirsFormatOptions;
//         case 'availability': return printsSouvenirsAvailabilityOptions;
//         case 'location': return defaultLocationOptions; // Prints & Souvenirs uses default location
//         case 'framingOptions': return defaultFramingOptions; // Prints & Souvenirs uses default framing
//         case 'shipping': return defaultShippingOptions; // Prints & Souvenirs uses default shipping
//         case 'category': return categoryOptions;
//         case 'style': return styleOptions;
//         case 'theme': return themesOptions;
//         case 'signatureByArtist': return signatureOptions; // Although not explicitly asked to show, it's a common one. If you want to hide, remove from here.
//         default: return [];
//       }
//     }
//     // Default options for Primary Market and Secondary Market
//     switch (field) {
//       case 'format': return primarySecondaryFormatOptions;
//       case 'location': return defaultLocationOptions;
//       case 'intermediary': return defaultIntermediariesOptions;
//       case 'framingOptions': return defaultFramingOptions;
//       case 'shipping': return defaultShippingOptions;
//       case 'availability': return defaultAvailabilityOptions;
//       case 'certifications': return certificationOptions; // Certifications dropdown
//       // Categories, Style, Themes, Signature are always the same.
//       case 'category': return categoryOptions;
//       case 'style': return styleOptions;
//       case 'theme': return themesOptions;
//       case 'signatureByArtist': return signatureOptions;
//       default: return [];
//     }
//   };

//   // --- END: Dynamic Options Definition ---

//   const handleSavePortfolio = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const artistId = user._id;
//     console.log("Artist id: ", artistId);
//     const token = localStorage.getItem('token');
//     console.log("token: ", token);

//     if (!artistId) {
//       alert("Artist ID is missing. Please ensure you are logged in.");
//       return;
//     }
//     if (!token) {
//       alert("Authentication token is missing. Please log in.");
//       return;
//     }

//     // --- Basic validation based on selected display option ---
//     if (!artworkDetails.title.trim()) {
//       alert("Please enter a Title for your artwork.");
//       return;
//     }
//     if (!artworkDetails.displayOption) {
//       alert("Please select a Market Type / Display Option.");
//       return;
//     }
//     if (!artworkDetails.format) {
//       alert("Please select a Format.");
//       return;
//     }
//     if (!artworkDetails.size) {
//       alert("Please select a Size.");
//       return;
//     }
//     // Price validation for number input
//     if (artworkDetails.price === '' || isNaN(parseFloat(String(artworkDetails.price)))) {
//       alert("Please enter a valid Price.");
//       return;
//     }
//     if (!artworkDetails.availability) {
//       alert("Please select Availability.");
//       return;
//     }
//     if (!artworkDetails.yearOfCreation || isNaN(parseInt(String(artworkDetails.yearOfCreation)))) { // Validation for yearOfCreation input
//         alert("Please enter a valid Year of Creation.");
//         return;
//     }
//     if (artworkDetails.displayOption === "NFTs") {
//         if (!artworkDetails.edition) {
//             alert("Please select an Edition for NFT.");
//             return;
//         }
//         if (!artworkDetails.rarity) {
//             alert("Please select Rarity for NFT.");
//             return;
//         }
//         if (!artworkDetails.licensing) {
//             alert("Please select Licensing for NFT.");
//             return;
//         }
//     }
//     // Add other validations as needed for all fields

//     try {
//       const uploadedImageUrls: ArtworkImage[] = [];
//       for (const imageItem of images) {
//         if (imageItem.file) {
//           const { location } = await uploadFileToS3(imageItem.file, 'artwork_images/');
//           if (location) {
//             uploadedImageUrls.push({ url: location, altText: artworkDetails.title || artworkDetails.description || '' });
//           } else {
//             console.warn(`Failed to upload image: ${imageItem.file.name}`);
//             alert(`Failed to upload image: ${imageItem.file.name}. Please try again.`);
//             return; // Stop processing if an image fails
//           }
//         }
//       }
//       if (uploadedImageUrls.length === 0) {
//         alert("Please upload at least one image for the artwork.");
//         return;
//       }

//       const uploadedCertificateUrls: string[] = [];
//       for (const certificateFile of certificates) {
//         const { location } = await uploadFileToS3(certificateFile, 'artwork_certificates/');
//         if (location) {
//           uploadedCertificateUrls.push(location);
//         } else {
//           console.warn(`Failed to upload certificate: ${certificateFile.name}`);
//         }
//       }

//       let uploadedSaipRegistrationUrl: string | undefined = undefined;
//       if (artworkDetails.saipRegistration && artworkDetails.saipRegistration instanceof File) {
//         const { location } = await uploadFileToS3(artworkDetails.saipRegistration, 'artwork_saip/');
//         if (location) {
//           uploadedSaipRegistrationUrl = location;
//         } else {
//           console.warn(`Failed to upload SAIP registration file: ${artworkDetails.saipRegistration.name}`);
//         }
//       }

//       // --- Prepare the payload dynamically ---
//       const payload: any = { // Use 'any' temporarily or a more precise conditional type
//         title: artworkDetails.title,
//         description: artworkDetails.description,
//         format: artworkDetails.format,
//         size: artworkDetails.size,
//         price: parseFloat(String(artworkDetails.price)), // Always parse price as a number
//         images: uploadedImageUrls,
//         availability: artworkDetails.availability,
//         yearOfCreation: parseInt(String(artworkDetails.yearOfCreation)), // Always parse year as integer
//         displayOption: artworkDetails.displayOption,
//         category: artworkDetails.category,
//         style: artworkDetails.style,
//         theme: artworkDetails.theme,
//         signatureByArtist: artworkDetails.signatureByArtist, // This will be included if it's in artworkDetails state
//         certificatesUrl: uploadedCertificateUrls,
//         saipRegistration: uploadedSaipRegistrationUrl,
//       };

//       // Conditionally add/remove fields based on displayOption
//       if (artworkDetails.displayOption === "NFTs") {
//         payload.edition = artworkDetails.edition;
//         payload.rarity = artworkDetails.rarity;
//         payload.licensing = artworkDetails.licensing;
//         // Ensure fields not relevant for NFTs are deleted
//         delete payload.location;
//         delete payload.intermediary;
//         delete payload.framingOptions;
//         delete payload.shipping;
//         delete payload.certifications;
//         delete payload.signatureByArtist; // Not typically applicable for NFTs
//       } else if (artworkDetails.displayOption === "Prints & Souvenirs") {
//         payload.location = artworkDetails.location;
//         payload.framingOptions = artworkDetails.framingOptions;
//         payload.shipping = artworkDetails.shipping;
//         // Ensure fields not relevant for Prints & Souvenirs are deleted
//         delete payload.intermediary;
//         delete payload.certifications;
//         delete payload.edition;
//         delete payload.rarity;
//         delete payload.licensing;
//         delete payload.signatureByArtist; // As per your requirements, not needed for P&S
//       } else { // Primary Market, Secondary Market
//         payload.location = artworkDetails.location;
//         payload.intermediary = artworkDetails.intermediary;
//         payload.framingOptions = artworkDetails.framingOptions;
//         payload.shipping = artworkDetails.shipping;
//         payload.certifications = artworkDetails.certifications;
//         // Ensure fields not relevant for Primary/Secondary are deleted
//         delete payload.edition;
//         delete payload.rarity;
//         delete payload.licensing;
//       }

//       console.log("Sending payload to backend:", payload);

//       const response = await createArtworkApi(artistId, payload, token);

      // if (response && response.status === 200 && response.data && response.data.message) {
      //   alert(`Portfolio item saved successfully: ${response.data.message}`);
      //   dispatch(resetPortfolioForm());
//       } else if (response && 'message' in response && typeof response.message === 'string') {
//         alert(`Error saving artwork: ${response.message}`);
//       } else {
//         alert("An unknown error occurred during artwork submission.");
//       }

//     } catch (error: any) {
//       console.error("Failed to save portfolio:", error);
//       alert(`Error saving artwork: ${error.message || "An unexpected error occurred."}`);
//     }
//   };

//   // --- Helper function to determine input type or options for rendering ---
//   const getFieldRenderProps = (fieldName: keyof ArtworkDetailsState) => {
//     // 'price' and 'yearOfCreation' are now always input fields
//     const isDropdown = ['category', 'format', 'location', 'style', 'theme', 'intermediary',
//       'framingOptions', 'shipping', 'signatureByArtist', 'availability', 'edition', 'rarity', 'licensing',
//       'certifications'].includes(fieldName);

//     // 'price' and 'yearOfCreation' are always number inputs
//     const isNumberInput = ['price', 'yearOfCreation'].includes(fieldName);

//     const options = isDropdown ? getOptions(fieldName as string) : [];

//     return {
//       isDropdown,
//       isNumberInput,
//       options,
//       label: fieldName === 'price'
//         ? 'PRICE IN SAR'
//         : fieldName.replace(/([A-Z])/g, ' $1').toUpperCase(),
//     };
//   };


//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-xl font-montserrat-regular text-yankees-blue mb-6">Upload Artwork</h1>

//       {/* Artwork Details */}
//       <section className="mb-10">
//         <h2 className="text-xl font-montserrat-regular text-yankees-blue mb-4">Artwork Details</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

//           {/* Title Field - Rendered only once here */}
//           <div>
//             <label htmlFor="title" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">
//               TITLE
//             </label>
//             <input
//               type="text"
//               id="title"
//               value={artworkDetails.title}
//               onChange={(e) =>
//                 dispatch(setArtworkDetail({ field: 'title', value: e.target.value }))
//               }
//               className="form-input border border-gray-300 rounded-md w-full font-montserrat-light text-yankees-blue"
//             />
//           </div>

//           {/* Display Option Field - Rendered only once here */}
//           <div>
//             <label htmlFor="displayOption" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">
//               MARKET TYPE / DISPLAY OPTION
//             </label>
//             <select
//               id="displayOption"
//               value={artworkDetails.displayOption}
//               onChange={(e) =>
//                 dispatch(setArtworkDetail({ field: 'displayOption', value: e.target.value }))
//               }
//               className="form-select border border-gray-300 rounded-md w-full font-montserrat-light text-yankees-blue"
//             >
//               <option value="">Select a display option</option>
//               {displayOptionOptions.map((option) => (
//                 <option key={option} value={option}>{option}</option>
//               ))}
//             </select>
//           </div>

//           {/* Dynamically Rendered Fields */}
//           {Object.keys(artworkDetails)
//             .filter(key => {
//               const fieldName = key as keyof ArtworkDetailsState;
//               // Fields that are explicitly rendered above or are internal
//               const excludedInternalFields = [
//                 'title',          // Exclude: Rendered above
//                 'displayOption',  // Exclude: Rendered above
//                 'images',
//                 'certificates',
//                 'saipRegistration',
//                 'certificatesUrl',
//                 'saipRegistrationUrl',
//                 // Fields that are explicitly conditional and will be added via .concat()
//                 'edition', 'rarity', 'licensing',
//                 'location', 'intermediary', 'framingOptions', 'shipping', 'certifications',
//                 'signatureByArtist' // Handle signatureByArtist conditionally now
//               ];
//               if (excludedInternalFields.includes(fieldName as string)) return false;

//               // These fields should always be shown regardless of displayOption
//               const alwaysShownFields = [
//                   'description', 'category', 'style', 'theme', 'format', 'size',
//                   'price', 'yearOfCreation', 'availability'
//               ];

//               return alwaysShownFields.includes(fieldName as string);
//             })
//             .concat(
//               // Add NFT-specific fields if displayOption is NFTs
//               artworkDetails.displayOption === "NFTs"
//                 ? ['edition', 'rarity', 'licensing', 'signatureByArtist'] // Signature by artist for NFTs
//                 : []
//             )
//             .concat(
//               // Add Primary/Secondary Market specific fields
//               (artworkDetails.displayOption === "Primary Market" || artworkDetails.displayOption === "Secondary Market")
//                 ? ['location', 'intermediary', 'framingOptions', 'shipping', 'certifications', 'signatureByArtist']
//                 : []
//             )
//             .concat(
//               // Add Prints & Souvenirs specific fields
//               artworkDetails.displayOption === "Prints & Souvenirs"
//                 ? ['location', 'framingOptions', 'shipping'] // No signatureByArtist, intermediary, certifications for P&S
//                 : []
//             )
//             .sort((a,b) => { // Optional: Sort fields for consistent rendering order
//                 const order = [
//                     'description', 'category', 'style', 'theme', 'format', 'size',
//                     'price', 'yearOfCreation', 'availability',
//                     // Primary/Secondary/NFTs
//                     'signatureByArtist',
//                     // Primary/Secondary specific
//                     'location', 'intermediary', 'framingOptions', 'shipping', 'certifications',
//                     // NFT specific
//                     'edition', 'rarity', 'licensing',
//                     // Prints & Souvenirs specific (no signatureByArtist for P&S)
//                     // The order here ensures P&S-specific location/framing/shipping don't conflict with other types.
//                 ];
//                 // Custom sort logic to handle fields not in the `order` array gracefully
//                 const aIndex = order.indexOf(a);
//                 const bIndex = order.indexOf(b);
//                 if (aIndex === -1 && bIndex === -1) return 0; // Both not in order, maintain relative order
//                 if (aIndex === -1) return 1; // 'a' not in order, push to end
//                 if (bIndex === -1) return -1; // 'b' not in order, push to end of a
//                 return aIndex - bIndex;
//             })
//             .map((key) => {
//             const fieldName = key as keyof ArtworkDetailsState;
//             const fieldValue = artworkDetails[fieldName];
//             const { isDropdown, isNumberInput, options, label } = getFieldRenderProps(fieldName);

//             // Conditional rendering for fields that should *not* appear for certain display options
//             // Example: Certifications and SAIP should only appear for Primary/Secondary
//             if (artworkDetails.displayOption === "NFTs" && ['edition', 'rarity', 'licensing'].includes(fieldName as string)) {
//                 // These are specifically for NFTs and will be rendered
//             } else if (artworkDetails.displayOption === "Prints & Souvenirs") {
//                 if (['intermediary', 'certifications', 'signatureByArtist', 'edition', 'rarity', 'licensing'].includes(fieldName as string)) {
//                     return null; // Exclude these fields for Prints & Souvenirs
//                 }
//             } else if (artworkDetails.displayOption !== "Primary Market" && artworkDetails.displayOption !== "Secondary Market") {
//                 if (['intermediary', 'certifications', 'signatureByArtist'].includes(fieldName as string)) {
//                     return null; // Exclude these for NFT and Prints & Souvenirs if they slipped through
//                 }
//             }


//             // Normal rendering for other fields
//             return (
//               <div key={fieldName}>
//                 <label htmlFor={fieldName} className="block text-xs text-yankees-blue font-montserrat-regular mb-2">
//                   {label}
//                 </label>
//                 {isDropdown ? (
//                   <select
//                     id={fieldName}
//                     value={fieldValue === undefined || fieldValue === null ? '' : String(fieldValue)}
//                     onChange={(e) =>
//                       dispatch(setArtworkDetail({ field: fieldName, value: e.target.value }))
//                     }
//                     className="form-select border border-gray-300 rounded-md w-full font-montserrat-light text-yankees-blue"
//                   >
//                     <option value="">Select  {fieldName.replace(/([A-Z])/g, ' $1').toLowerCase()}</option>
//                     {options.map(option => (
//                       <option key={option} value={option}>{option}</option>
//                     ))}
//                   </select>
//                 ) : fieldName === 'description' ? (
//                   <textarea
//                     id={fieldName}
//                     value={fieldValue === undefined || fieldValue === null ? '' : String(fieldValue)}
//                     onChange={(e) =>
//                       dispatch(setArtworkDetail({ field: fieldName, value: e.target.value }))
//                     }
//                     rows={3}
//                     className="form-textarea border border-gray-300 rounded-md w-full font-montserrat-light text-yankees-blue"
//                   />
//                 ) : (
//                   <input
//                     type={isNumberInput ? 'number' : 'text'}
//                     id={fieldName}
//                     value={fieldValue === undefined || fieldValue === null ? '' : String(fieldValue)}
//                     onChange={(e) => {
//                       let valueToDispatch: string | number = e.target.value;
//                       if (isNumberInput) {
//                         valueToDispatch = e.target.value === '' ? '' : parseFloat(e.target.value);
//                       }
//                       dispatch(setArtworkDetail({ field: fieldName, value: valueToDispatch as ArtworkDetailsState[typeof fieldName] }));
//                     }}
//                     className="form-input border border-gray-300 rounded-md w-full font-montserrat-light text-yankees-blue"
//                   />
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </section>

//       {/* Image Upload Section */}
//       <section className="mb-10">
//         <div className="custom-file-container" data-upload-id="mySecondImage">
//           <div className="label-container ">
//             <label className='text-yankees-blue font-montserrat-regular '>
//               Upload Images (max {currentMaxImages})
//             </label>
//             <button
//               type="button"
//               className="custom-file-container__image-clear text-yankees-blue"
//               title="Clear Image"
//               onClick={() => dispatch(setImages([]))}
//             >
//               ×
//             </button>
//           </div>
//           <ImageUploading
//             multiple={currentMaxImages > 1}
//             value={images}
//             onChange={(imageList) => dispatch(setImages(imageList as { file: File; dataURL: string }[]))}
//             maxNumber={currentMaxImages}
//             dataURLKey="dataURL"
//           >
//             {({ imageList, onImageUpload }) => (
//               <div className="upload__image-wrapper">
//                 <button
//                   type="button"
//                   className="custom-file-container__custom-file__custom-file-control text-yankees-blue font-montserrat-light"
//                   onClick={onImageUpload}
//                 >
//                   Choose File...
//                 </button>
//                 <div className="grid gap-4 sm:grid-cols-3 grid-cols-1 mt-4">
//                   {imageList.map((image, index) => (
//                     <div key={index} className="relative border rounded-md shadow-sm">
//                       <button
//                         type="button"
//                         className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-800"
//                         onClick={() => {
//                           const updatedImages = imageList.filter((_, i) => i !== index);
//                           dispatch(setImages(updatedImages as { file: File; dataURL: string }[]));
//                         }}
//                       >
//                         ×
//                       </button>
//                       <img src={image.dataURL} alt="uploaded" className="object-cover w-full h-auto rounded" />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </ImageUploading>
//           {images.length === 0 && (
//             <img src="/assets/images/file-preview.svg" className="max-w-md w-full m-auto" alt="File preview" />
//           )}
//         </div>
//       </section>

//       {/* Conditional Rendering for Certificate Upload */}
//       {/* Only show for Primary Market and Secondary Market */}
//       {(artworkDetails.displayOption === "Primary Market" || artworkDetails.displayOption === "Secondary Market") && (
//         <section className="mb-10">
//           <h2 className="text-xl text-yankees-blue font-montserrat-regular mb-4">Certificates of Authenticity</h2>
//           <input
//             type="file"
//             multiple
//             onChange={(e) => {
//               const uploadedFiles = Array.from(e.target.files || []);
//               uploadedFiles.forEach(file => dispatch(addCertificate(file)));
//             }}
//             className="form-input border border-gray-300 rounded-md w-full text-yankees-blue font-montserrat-light"
//           />
//           {certificates.length > 0 && (
//             <ul className="mt-4 space-y-2">
//               {certificates.map((file, index) => (
//                 <li key={index} className="flex items-center text-gray-700">
//                   <span className="flex-1">{file.name}</span>
//                   <button
//                     type="button"
//                     onClick={() => dispatch(removeCertificate(index))}
//                     className="ml-4 text-red-600 hover:text-red-800"
//                   >
//                     Remove
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </section>
//       )}

//       {/* Conditional Rendering for SAIP Registration */}
//       {/* Only show for Primary Market and Secondary Market */}
//       {(artworkDetails.displayOption === "Primary Market" || artworkDetails.displayOption === "Secondary Market") && (
//         <section className="mb-10">
//           <h2 className="text-xl text-yankees-blue font-montserrat-regular mb-4">SAIP Registration</h2>
//           <input
//             type="file"
//             onChange={(e) => {
//               const uploadedFile = e.target.files?.[0];
//               if (uploadedFile) {
//                 dispatch(setSaipRegistration(uploadedFile));
//               }
//             }}
//             className="form-input border border-gray-300 rounded-md w-full text-yankees-blue font-montserrat-light"
//           />
//           {saipRegistration && (
//             <ul className="mt-4 space-y-2">
//               <li className="flex items-center text-gray-700">
//                 <span className="flex-1">{saipRegistration.name}</span>
//                 <button
//                   type="button"
//                   onClick={() => dispatch(setSaipRegistration(null))}
//                   className="ml-4 text-red-600 hover:text-red-800"
//                 >
//                   Remove
//                 </button>
//               </li>
//             </ul>
//           )}
//         </section>
//       )}

//       {/* Save Button */}
//       <div className="text-center mt-6">
//         <button
//           onClick={handleSavePortfolio}
//           className="bg-yankees-blue text-white py-2 px-6 rounded-md hover:bg-yankees-blue w-full font-montserrat-light"
//         >
//           Save Item
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MyPortfolio;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import '../assets/file-upload-preview.css';
// import ImageUploading from 'react-images-uploading';
// import { AxiosResponse } from 'axios'; // Import AxiosResponse for type checking

// // Import Redux actions and types
// import {
//   setArtworkDetail,
//   setImages,
//   addCertificate,
//   removeCertificate,
//   setSaipRegistration,
//   resetPortfolioForm,
//   ArtworkDetailsState, // Import the type for useSelector
// } from '../store/artworkSlice';

// // Import the API service function and S3 uploader
// import { createArtworkApi, ArtworkImage, CreateArtworkSuccessData } from '../api/artwork'; // Import CreateArtworkSuccessData
// import { uploadFileToS3 } from '../utils/s3Uploader';

// // Import UserState for useSelector
// import { UserState } from '../store/userSlice';

// const MyPortfolio = () => {
//   const dispatch = useDispatch();

//   const artworkDetails = useSelector((state: { artworkDetails: ArtworkDetailsState }) => state.artworkDetails);
//   const user = useSelector((state: { user: UserState }) => state.user);

//   const { images, certificates, saipRegistration } = artworkDetails;

//   // --- Dynamic currentMaxImages based on displayOption ---
//   const currentMaxImages = artworkDetails.displayOption === "Prints & Souvenirs" ? 6 : 1;

//   // --- START: Dynamic Options Definition ---

//   // Default options (for Primary/Secondary Market)
//   const primarySecondaryFormatOptions = [
//     "Digital Print on Archival Paper", "Ink on Paper", "Mixed Media on Canvas",
//     "Engraving on Wood or Metal", "Oil on Canvas", "Acrylic on Canvas",
//     "Watercolour on Paper", "Freestanding Sculptures", "Metal Work Sculptures",
//     "3D Printed", "Mixed Media Assemblage", "C-Prints",
//     "Aluminium Mounted Prints", "Framed Photographs", "Collage on Canvas or Board",
//     "Assemblage on Panel", "Textile Art (Fabric & Embroidery)", "Screen Print on Paper",
//     "Lithograph on Paper", "Etching on Metal", "Monotype Prints",
//     "Giclée Prints on Canvas or Paper", "Charcoal on Paper", "Pen and Ink on Paper",
//     "Graphite on Board", "Coloured Pencil on Bristol Paper", "PDF", "AI", "PSD", "SVG", "EPS", "JPG", "PNG"
//   ];
//   const defaultLocationOptions = [
//     "Riyadh", "Jeddah", "Makkah", "Madina", "Khobar", "Dammam",
//     "Tabuk", "Ta'if", "Abha", "Khamis Mushait", "Buraidah", "Hail"
//   ];
//   const defaultIntermediariesOptions = [
//     "Athr Gallery", "Hafez Gallery", "Hayy Jameel", "Landscape Gallery"
//   ];
//   const defaultFramingOptions = [
//     "Framed", "Unframed", "Custom Framing Available"
//   ];
//   const defaultShippingOptions = [
//     "Local Pickup", "Domestic Shipping", "International Shipping"
//   ];
//   const defaultAvailabilityOptions = ["Instant Download","Available Now","Commission Available","Sold but Similar Works Available"];

//   // NFT specific options
//   const nftFormatOptions = [
//     "Digital Print on Archival Paper", "3D Models", "GIFs", "Animation", "Video",
//     "Augmented Reality (AR)", "Virtual Reality (VR)", "JPEG", "PNG", "3D Printed", "MP4", "SVG"
//   ];
//   const nftSizeOptions = [
//     "Small (Under 1000 x 1000 pixels)", "Medium (Up To 3000 x 3000 pixels)",
//     "Large (Above 3000 x 3000 pixels)", "Custom"
//   ];
//   const nftAvailabilityOptions = ["Instant Download", "Commission Available"];
//   const nftEditionOptions = ["1 of 1 (Unique)", "Limited Edition", "Open Edition"];
//   const nftRarityOptions = ["Common", "Rare", "Epic", "Legendary"];
//   const nftLicensingOptions = ["Commercial Use Allowed", "Personal Use Only", "Resale Rights Included"];

//   // Prints & Souvenirs specific options
//   const printsSouvenirsFormatOptions = [
//     "Giclée Prints", "Screen Prints", "Lithographs", "Digital Prints",
//     "Photographic Prints", "Posters", "Mugs", "Canvas Bags",
//     "Notebooks", "Phone Cases", "T-shirts", "Calendars",
//     "Magnets", "Keychains"
//   ];
//   const printsSouvenirsAvailabilityOptions = [
//     "Instant Download", "In Stock", "Limited Edition", "Exclusive Collections"
//   ];

//   // Shared options (unchanged across all display options)
//   const categoryOptions = [
//     "Calligraphy", "Drawing & Illustration", "Graphics", "Mixed Media",
//     "Painting", "Photography", "Printmaking", "Sculpture"
//   ];
//   const styleOptions = [
//     "Abstract", "Realism", "Impressionism", "Minimalism",
//     "Surrealism", "Contemporary", "Traditional"
//   ];
//   const themesOptions = [
//     "Cultural Heritage", "Nature", "Urban Life", "Portraits", "Conceptual"
//   ];
//   const signatureOptions = [
//     "Signed by Artist", "Not Signed by Artist"
//   ];
//   const displayOptionOptions = [
//     "Primary Market", "Secondary Market", "NFTs", "Prints & Souvenirs"
//   ];

//   // New: Certifications Options (only for Primary/Secondary)
//   const certificationOptions = [
//     "Certificate of Authenticity",
//     "Gallery Provenance",
//     "Signed By Artist",
//     "Copyrighted"
//   ];

//   // --- Helper function to get options based on displayOption ---
//   const getOptions = (field: string) => {
//     if (artworkDetails.displayOption === "NFTs") {
//       switch (field) {
//         case 'format': return nftFormatOptions;
//         case 'size': return nftSizeOptions;
//         case 'availability': return nftAvailabilityOptions;
//         case 'edition': return nftEditionOptions;
//         case 'rarity': return nftRarityOptions;
//         case 'licensing': return nftLicensingOptions;
//         // Common fields will use their global options
//         case 'category': return categoryOptions;
//         case 'style': return styleOptions;
//         case 'theme': return themesOptions;
//         case 'signatureByArtist': return signatureOptions;
//         default: return []; // For fields that might not have NFT-specific options
//       }
//     } else if (artworkDetails.displayOption === "Prints & Souvenirs") {
//       switch (field) {
//         case 'format': return printsSouvenirsFormatOptions;
//         case 'availability': return printsSouvenirsAvailabilityOptions;
//         case 'location': return defaultLocationOptions; // Prints & Souvenirs uses default location
//         case 'framingOptions': return defaultFramingOptions; // Prints & Souvenirs uses default framing
//         case 'shipping': return defaultShippingOptions; // Prints & Souvenirs uses default shipping
//         case 'category': return categoryOptions;
//         case 'style': return styleOptions;
//         case 'theme': return themesOptions;
//         case 'signatureByArtist': return signatureOptions; // Although not explicitly asked to show, it's a common one. If you want to hide, remove from here.
//         default: return [];
//       }
//     }
//     // Default options for Primary Market and Secondary Market
//     switch (field) {
//       case 'format': return primarySecondaryFormatOptions;
//       case 'location': return defaultLocationOptions;
//       case 'intermediary': return defaultIntermediariesOptions;
//       case 'framingOptions': return defaultFramingOptions;
//       case 'shipping': return defaultShippingOptions;
//       case 'availability': return defaultAvailabilityOptions;
//       case 'certifications': return certificationOptions; // Certifications dropdown
//       // Categories, Style, Themes, Signature are always the same.
//       case 'category': return categoryOptions;
//       case 'style': return styleOptions;
//       case 'theme': return themesOptions;
//       case 'signatureByArtist': return signatureOptions;
//       default: return [];
//     }
//   };

//   // --- END: Dynamic Options Definition ---

//   const handleSavePortfolio = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const artistId = user._id;
//     console.log("Artist id: ", artistId);
//     const token = localStorage.getItem('token');
//     console.log("token: ", token);

//     if (!artistId) {
//       alert("Artist ID is missing. Please ensure you are logged in.");
//       return;
//     }
//     if (!token) {
//       alert("Authentication token is missing. Please log in.");
//       return;
//     }

//     // --- Basic validation based on selected display option ---
//     if (!artworkDetails.title.trim()) {
//       alert("Please enter a Title for your artwork.");
//       return;
//     }
//     if (!artworkDetails.displayOption) {
//       alert("Please select a Market Type / Display Option.");
//       return;
//     }
//     if (!artworkDetails.format) {
//       alert("Please select a Format.");
//       return;
//     }
//     if (!artworkDetails.size) {
//       alert("Please select a Size.");
//       return;
//     }
//     // Price validation for number input
//     if (artworkDetails.price === '' || isNaN(parseFloat(String(artworkDetails.price)))) {
//       alert("Please enter a valid Price.");
//       return;
//     }
//     if (!artworkDetails.availability) {
//       alert("Please select Availability.");
//       return;
//     }
//     if (!artworkDetails.yearOfCreation || isNaN(parseInt(String(artworkDetails.yearOfCreation)))) { // Validation for yearOfCreation input
//         alert("Please enter a valid Year of Creation.");
//         return;
//     }
//     if (artworkDetails.displayOption === "NFTs") {
//         if (!artworkDetails.edition) {
//             alert("Please select an Edition for NFT.");
//             return;
//         }
//         if (!artworkDetails.rarity) {
//             alert("Please select Rarity for NFT.");
//             return;
//         }
//         if (!artworkDetails.licensing) {
//             alert("Please select Licensing for NFT.");
//             return;
//         }
//     }
//     // Add other validations as needed for all fields

//     try {
//       const uploadedImageUrls: ArtworkImage[] = [];
//       for (const imageItem of images) {
//         if (imageItem.file) {
//           const { location } = await uploadFileToS3(imageItem.file, 'artwork_images/');
//           if (location) {
//             uploadedImageUrls.push({ url: location, altText: artworkDetails.title || artworkDetails.description || '' });
//           } else {
//             console.warn(`Failed to upload image: ${imageItem.file.name}`);
//             alert(`Failed to upload image: ${imageItem.file.name}. Please try again.`);
//             return; // Stop processing if an image fails
//           }
//         }
//       }
//       if (uploadedImageUrls.length === 0) {
//         alert("Please upload at least one image for the artwork.");
//         return;
//       }

//       const uploadedCertificateUrls: string[] = [];
//       for (const certificateFile of certificates) {
//         const { location } = await uploadFileToS3(certificateFile, 'artwork_certificates/');
//         if (location) {
//           uploadedCertificateUrls.push(location);
//         } else {
//           console.warn(`Failed to upload certificate: ${certificateFile.name}`);
//         }
//       }

//       let uploadedSaipRegistrationUrl: string | undefined = undefined;
//       if (artworkDetails.saipRegistration && artworkDetails.saipRegistration instanceof File) {
//         const { location } = await uploadFileToS3(artworkDetails.saipRegistration, 'artwork_saip/');
//         if (location) {
//           uploadedSaipRegistrationUrl = location;
//         } else {
//           console.warn(`Failed to upload SAIP registration file: ${artworkDetails.saipRegistration.name}`);
//         }
//       }

//       // --- Prepare the payload dynamically ---
//       const payload: any = { // Use 'any' temporarily or a more precise conditional type
//         title: artworkDetails.title,
//         description: artworkDetails.description,
//         format: artworkDetails.format,
//         size: artworkDetails.size,
//         price: parseFloat(String(artworkDetails.price)), // Always parse price as a number
//         images: uploadedImageUrls,
//         availability: artworkDetails.availability,
//         yearOfCreation: parseInt(String(artworkDetails.yearOfCreation)), // Always parse year as integer
//         displayOption: artworkDetails.displayOption,
//         category: artworkDetails.category,
//         style: artworkDetails.style,
//         theme: artworkDetails.theme,
//         // signatureByArtist: artworkDetails.signatureByArtist, // This will be included if it's in artworkDetails state
//         certificatesUrl: uploadedCertificateUrls,
//         saipRegistration: uploadedSaipRegistrationUrl,
//       };

//       // Conditionally add/remove fields based on displayOption
//       if (artworkDetails.displayOption === "NFTs") {
//         payload.edition = artworkDetails.edition;
//         payload.rarity = artworkDetails.rarity;
//         payload.licensing = artworkDetails.licensing;
//         payload.signatureByArtist = artworkDetails.signatureByArtist; // Include signature for NFTs
//         // Ensure fields not relevant for NFTs are deleted
//         delete payload.location;
//         delete payload.intermediary;
//         delete payload.framingOptions;
//         delete payload.shipping;
//         delete payload.certifications;
//       } else if (artworkDetails.displayOption === "Prints & Souvenirs") {
//         payload.location = artworkDetails.location;
//         payload.framingOptions = artworkDetails.framingOptions;
//         payload.shipping = artworkDetails.shipping;
//         // Ensure fields not relevant for Prints & Souvenirs are deleted
//         delete payload.intermediary;
//         delete payload.certifications;
//         delete payload.edition;
//         delete payload.rarity;
//         delete payload.licensing;
//         delete payload.signatureByArtist; // As per your requirements, not needed for P&S
//       } else { // Primary Market, Secondary Market
//         payload.location = artworkDetails.location;
//         payload.intermediary = artworkDetails.intermediary;
//         payload.framingOptions = artworkDetails.framingOptions;
//         payload.shipping = artworkDetails.shipping;
//         payload.certifications = artworkDetails.certifications;
//         payload.signatureByArtist = artworkDetails.signatureByArtist; // Include signature for Primary/Secondary
//         // Ensure fields not relevant for Primary/Secondary are deleted
//         delete payload.edition;
//         delete payload.rarity;
//         delete payload.licensing;
//       }

//       console.log("Sending payload to backend:", payload);

//       const response = await createArtworkApi(artistId, payload, token);

//       // --- FIX STARTS HERE ---
//       // Type guard to check if the response is an AxiosResponse
//       if ((response as AxiosResponse<CreateArtworkSuccessData>).status !== undefined) {
//         const axiosResponse = response as AxiosResponse<CreateArtworkSuccessData>;
//         if ( axiosResponse.data && axiosResponse.data.message) {
//           alert(`Portfolio item saved successfully: ${axiosResponse.data.message}`);
//           dispatch(resetPortfolioForm());
//         } else {
//           // This case should ideally be caught by the catch block in artworkApi.ts
//           // but added for robustness
//           alert("An unknown error occurred during artwork submission.");
//         }
//       } else {
//         // This means it's the { message: string } error object
//         alert(`Error saving artwork: ${(response as { message: string }).message}`);
//       }
//       // --- FIX ENDS HERE ---

//     } catch (error: any) {
//       console.error("Failed to save portfolio:", error);
//       alert(`Error saving artwork: ${error.message || "An unexpected error occurred."}`);
//     }
//   };

//   // --- Helper function to determine input type or options for rendering ---
//   const getFieldRenderProps = (fieldName: keyof ArtworkDetailsState) => {
//     // 'price' and 'yearOfCreation' are now always input fields
//     const isDropdown = ['category', 'format', 'location', 'style', 'theme', 'intermediary',
//       'framingOptions', 'shipping', 'signatureByArtist', 'availability', 'edition', 'rarity', 'licensing',
//       'certifications'].includes(fieldName);

//     // 'price' and 'yearOfCreation' are always number inputs
//     const isNumberInput = ['price', 'yearOfCreation'].includes(fieldName);

//     const options = isDropdown ? getOptions(fieldName as string) : [];

//     return {
//       isDropdown,
//       isNumberInput,
//       options,
//       label: fieldName === 'price'
//         ? 'PRICE IN SAR'
//         : fieldName.replace(/([A-Z])/g, ' $1').toUpperCase(),
//     };
//   };


//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-xl font-montserrat-regular text-yankees-blue mb-6">Upload Artwork</h1>

//       {/* Artwork Details */}
//       <section className="mb-10">
//         <h2 className="text-xl font-montserrat-regular text-yankees-blue mb-4">Artwork Details</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

//           {/* Title Field - Rendered only once here */}
//           <div>
//             <label htmlFor="title" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">
//               TITLE
//             </label>
//             <input
//               type="text"
//               id="title"
//               value={artworkDetails.title}
//               onChange={(e) =>
//                 dispatch(setArtworkDetail({ field: 'title', value: e.target.value }))
//               }
//               className="form-input border border-gray-300 rounded-md w-full font-montserrat-light text-yankees-blue"
//             />
//           </div>

//           {/* Display Option Field - Rendered only once here */}
//           <div>
//             <label htmlFor="displayOption" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">
//               MARKET TYPE / DISPLAY OPTION
//             </label>
//             <select
//               id="displayOption"
//               value={artworkDetails.displayOption}
//               onChange={(e) =>
//                 dispatch(setArtworkDetail({ field: 'displayOption', value: e.target.value }))
//               }
//               className="form-select border border-gray-300 rounded-md w-full font-montserrat-light text-yankees-blue"
//             >
//               <option value="">Select a display option</option>
//               {displayOptionOptions.map((option) => (
//                 <option key={option} value={option}>{option}</option>
//               ))}
//             </select>
//           </div>

//           {/* Dynamically Rendered Fields */}
//           {Object.keys(artworkDetails)
//             .filter(key => {
//               const fieldName = key as keyof ArtworkDetailsState;
//               // Fields that are explicitly rendered above or are internal
//               const excludedInternalFields = [
//                 'title',          // Exclude: Rendered above
//                 'displayOption',  // Exclude: Rendered above
//                 'images',
//                 'certificates',
//                 'saipRegistration',
//                 'certificatesUrl',
//                 'saipRegistrationUrl',
//                 // Fields that are explicitly conditional and will be added via .concat()
//                 'edition', 'rarity', 'licensing',
//                 'location', 'intermediary', 'framingOptions', 'shipping', 'certifications',
//                 'signatureByArtist' // Handle signatureByArtist conditionally now
//               ];
//               if (excludedInternalFields.includes(fieldName as string)) return false;

//               // These fields should always be shown regardless of displayOption
//               const alwaysShownFields = [
//                   'description', 'category', 'style', 'theme', 'format', 'size',
//                   'price', 'yearOfCreation', 'availability'
//               ];

//               return alwaysShownFields.includes(fieldName as string);
//             })
//             .concat(
//               // Add NFT-specific fields if displayOption is NFTs
//               artworkDetails.displayOption === "NFTs"
//                 ? ['edition', 'rarity', 'licensing', 'signatureByArtist'] // Signature by artist for NFTs
//                 : []
//             )
//             .concat(
//               // Add Primary/Secondary Market specific fields
//               (artworkDetails.displayOption === "Primary Market" || artworkDetails.displayOption === "Secondary Market")
//                 ? ['location', 'intermediary', 'framingOptions', 'shipping', 'certifications', 'signatureByArtist']
//                 : []
//             )
//             .concat(
//               // Add Prints & Souvenirs specific fields
//               artworkDetails.displayOption === "Prints & Souvenirs"
//                 ? ['location', 'framingOptions', 'shipping'] // No signatureByArtist, intermediary, certifications for P&S
//                 : []
//             )
//             .sort((a,b) => { // Optional: Sort fields for consistent rendering order
//                 const order = [
//                     'description', 'category', 'style', 'theme', 'format', 'size',
//                     'price', 'yearOfCreation', 'availability',
//                     // Primary/Secondary/NFTs
//                     'signatureByArtist',
//                     // Primary/Secondary specific
//                     'location', 'intermediary', 'framingOptions', 'shipping', 'certifications',
//                     // NFT specific
//                     'edition', 'rarity', 'licensing',
//                     // Prints & Souvenirs specific (no signatureByArtist for P&S)
//                     // The order here ensures P&S-specific location/framing/shipping don't conflict with other types.
//                 ];
//                 // Custom sort logic to handle fields not in the `order` array gracefully
//                 const aIndex = order.indexOf(a);
//                 const bIndex = order.indexOf(b);
//                 if (aIndex === -1 && bIndex === -1) return 0; // Both not in order, maintain relative order
//                 if (aIndex === -1) return 1; // 'a' not in order, push to end
//                 if (bIndex === -1) return -1; // 'b' not in order, push to end of a
//                 return aIndex - bIndex;
//             })
//             .map((key) => {
//             const fieldName = key as keyof ArtworkDetailsState;
//             const fieldValue = artworkDetails[fieldName];
//             const { isDropdown, isNumberInput, options, label } = getFieldRenderProps(fieldName);

//             // Conditional rendering for fields that should *not* appear for certain display options
//             // This is primarily for hiding elements that might have slipped through the filter/concat.
//             // The main control is the filter/concat chain above.
//             if (artworkDetails.displayOption === "Prints & Souvenirs") {
//                 if (['intermediary', 'certifications', 'signatureByArtist', 'edition', 'rarity', 'licensing'].includes(fieldName as string)) {
//                     return null; // Exclude these fields for Prints & Souvenirs
//                 }
//             } else if (artworkDetails.displayOption === "NFTs") {
//                 if (['location', 'intermediary', 'framingOptions', 'shipping', 'certifications'].includes(fieldName as string)) {
//                     return null; // Exclude these for NFTs if they slipped through
//                 }
//             } else { // Primary Market, Secondary Market
//                 if (['edition', 'rarity', 'licensing'].includes(fieldName as string)) {
//                     return null; // Exclude NFT specific fields for Primary/Secondary if they slipped through
//                 }
//             }


//             // Normal rendering for other fields
//             return (
//               <div key={fieldName}>
//                 <label htmlFor={fieldName} className="block text-xs text-yankees-blue font-montserrat-regular mb-2">
//                   {label}
//                 </label>
//                 {isDropdown ? (
//                   <select
//                     id={fieldName}
//                     value={fieldValue === undefined || fieldValue === null ? '' : String(fieldValue)}
//                     onChange={(e) =>
//                       dispatch(setArtworkDetail({ field: fieldName, value: e.target.value }))
//                     }
//                     className="form-select border border-gray-300 rounded-md w-full font-montserrat-light text-yankees-blue"
//                   >
//                     <option value="">Select a {fieldName.replace(/([A-Z])/g, ' $1').toLowerCase()}</option>
//                     {options.map(option => (
//                       <option key={option} value={option}>{option}</option>
//                     ))}
//                   </select>
//                 ) : fieldName === 'description' ? (
//                   <textarea
//                     id={fieldName}
//                     value={fieldValue === undefined || fieldValue === null ? '' : String(fieldValue)}
//                     onChange={(e) =>
//                       dispatch(setArtworkDetail({ field: fieldName, value: e.target.value }))
//                     }
//                     rows={3}
//                     className="form-textarea border border-gray-300 rounded-md w-full font-montserrat-light text-yankees-blue"
//                   />
//                 ) : (
//                   <input
//                     type={isNumberInput ? 'number' : 'text'}
//                     id={fieldName}
//                     value={fieldValue === undefined || fieldValue === null ? '' : String(fieldValue)}
//                     onChange={(e) => {
//                       let valueToDispatch: string | number = e.target.value;
//                       if (isNumberInput) {
//                         valueToDispatch = e.target.value === '' ? '' : parseFloat(e.target.value);
//                       }
//                       dispatch(setArtworkDetail({ field: fieldName, value: valueToDispatch as ArtworkDetailsState[typeof fieldName] }));
//                     }}
//                     className="form-input border border-gray-300 rounded-md w-full font-montserrat-light text-yankees-blue"
//                   />
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </section>

//       {/* Image Upload Section */}
//       <section className="mb-10">
//         <div className="custom-file-container" data-upload-id="mySecondImage">
//           <div className="label-container ">
//             <label className='text-yankees-blue font-montserrat-regular '>
//               Upload Images (max {currentMaxImages})
//             </label>
//             <button
//               type="button"
//               className="custom-file-container__image-clear text-yankees-blue"
//               title="Clear Image"
//               onClick={() => dispatch(setImages([]))}
//             >
//               ×
//             </button>
//           </div>
//           <ImageUploading
//             multiple={currentMaxImages > 1}
//             value={images}
//             onChange={(imageList) => dispatch(setImages(imageList as { file: File; dataURL: string }[]))}
//             maxNumber={currentMaxImages}
//             dataURLKey="dataURL"
//           >
//             {({ imageList, onImageUpload }) => (
//               <div className="upload__image-wrapper">
//                 <button
//                   type="button"
//                   className="custom-file-container__custom-file__custom-file-control text-yankees-blue font-montserrat-light"
//                   onClick={onImageUpload}
//                 >
//                   Choose File...
//                 </button>
//                 <div className="grid gap-4 sm:grid-cols-3 grid-cols-1 mt-4">
//                   {imageList.map((image, index) => (
//                     <div key={index} className="relative border rounded-md shadow-sm">
//                       <button
//                         type="button"
//                         className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-800"
//                         onClick={() => {
//                           const updatedImages = imageList.filter((_, i) => i !== index);
//                           dispatch(setImages(updatedImages as { file: File; dataURL: string }[]));
//                         }}
//                       >
//                         ×
//                       </button>
//                       <img src={image.dataURL} alt="uploaded" className="object-cover w-full h-auto rounded" />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </ImageUploading>
//           {images.length === 0 && (
//             <img src="/assets/images/file-preview.svg" className="max-w-md w-full m-auto" alt="File preview" />
//           )}
//         </div>
//       </section>

//       {/* Conditional Rendering for Certificate Upload */}
//       {/* Only show for Primary Market and Secondary Market */}
//       {(artworkDetails.displayOption === "Primary Market" || artworkDetails.displayOption === "Secondary Market") && (
//         <section className="mb-10">
//           <h2 className="text-xl text-yankees-blue font-montserrat-regular mb-4">Certificates of Authenticity</h2>
//           <input
//             type="file"
//             multiple
//             onChange={(e) => {
//               const uploadedFiles = Array.from(e.target.files || []);
//               uploadedFiles.forEach(file => dispatch(addCertificate(file)));
//             }}
//             className="form-input border border-gray-300 rounded-md w-full text-yankees-blue font-montserrat-light"
//           />
//           {certificates.length > 0 && (
//             <ul className="mt-4 space-y-2">
//               {certificates.map((file, index) => (
//                 <li key={index} className="flex items-center text-gray-700">
//                   <span className="flex-1">{file.name}</span>
//                   <button
//                     type="button"
//                     onClick={() => dispatch(removeCertificate(index))}
//                     className="ml-4 text-red-600 hover:text-red-800"
//                   >
//                     Remove
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </section>
//       )}

//       {/* Conditional Rendering for SAIP Registration */}
//       {/* Only show for Primary Market and Secondary Market */}
//       {(artworkDetails.displayOption === "Primary Market" || artworkDetails.displayOption === "Secondary Market") && (
//         <section className="mb-10">
//           <h2 className="text-xl text-yankees-blue font-montserrat-regular mb-4">SAIP Registration</h2>
//           <input
//             type="file"
//             onChange={(e) => {
//               const uploadedFile = e.target.files?.[0];
//               if (uploadedFile) {
//                 dispatch(setSaipRegistration(uploadedFile));
//               }
//             }}
//             className="form-input border border-gray-300 rounded-md w-full text-yankees-blue font-montserrat-light"
//           />
//           {saipRegistration && (
//             <ul className="mt-4 space-y-2">
//               <li className="flex items-center text-gray-700">
//                 <span className="flex-1">{saipRegistration.name}</span>
//                 <button
//                   type="button"
//                   onClick={() => dispatch(setSaipRegistration(null))}
//                   className="ml-4 text-red-600 hover:text-red-800"
//                 >
//                   Remove
//                 </button>
//               </li>
//             </ul>
//           )}
//         </section>
//       )}

//       {/* Save Button */}
//       <div className="text-center mt-6">
//         <button
//           onClick={handleSavePortfolio}
//           className="bg-yankees-blue text-white py-2 px-6 rounded-md hover:bg-yankees-blue w-full font-montserrat-light"
//         >
//           Save Item
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MyPortfolio;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../assets/file-upload-preview.css'; // Ensure this CSS file is linked
import ImageUploading from 'react-images-uploading';
import { AxiosResponse } from 'axios';

// Import Redux actions and types
import {
    setArtworkDetail,
    setImages,
    addCertificate,
    removeCertificate,
    setSaipRegistration,
    resetPortfolioForm,
    ArtworkDetailsState,
} from '../store/artworkSlice';

// Import the API service function and S3 uploader
import { createArtworkApi, ArtworkImage, CreateArtworkSuccessData } from '../api/artwork';
import { uploadFileToS3 } from '../utils/s3Uploader';

// Import UserState for useSelector
import { UserState } from '../store/userSlice';

const MyPortfolio = () => {
    const dispatch = useDispatch();

    const artworkDetails = useSelector((state: { artworkDetails: ArtworkDetailsState }) => state.artworkDetails);
    const user = useSelector((state: { user: UserState }) => state.user);

    const { images, certificates, saipRegistration } = artworkDetails;

    // --- Dynamic currentMaxImages based on displayOption ---
    const currentMaxImages = artworkDetails.displayOption === "Prints & Souvenirs" ? 6 : 1;

    // --- START: Dynamic Options Definition ---

    // Default options (for Primary/Secondary Market)
    const primarySecondaryFormatOptions = [
        "Digital Print on Archival Paper", "Ink on Paper", "Mixed Media on Canvas",
        "Engraving on Wood or Metal", "Oil on Canvas", "Acrylic on Canvas",
        "Watercolour on Paper", "Freestanding Sculptures", "Metal Work Sculptures",
        "3D Printed", "Mixed Media Assemblage", "C-Prints",
        "Aluminium Mounted Prints", "Framed Photographs", "Collage on Canvas or Board",
        "Assemblage on Panel", "Textile Art (Fabric & Embroidery)", "Screen Print on Paper",
        "Lithograph on Paper", "Etching on Metal", "Monotype Prints",
        "Giclée Prints on Canvas or Paper", "Charcoal on Paper", "Pen and Ink on Paper",
        "Graphite on Board", "Coloured Pencil on Bristol Paper", "PDF", "AI", "PSD", "SVG", "EPS", "JPG", "PNG"
    ];
    const defaultLocationOptions = [
        "Riyadh", "Jeddah", "Makkah", "Madina", "Khobar", "Dammam",
        "Tabuk", "Ta'if", "Abha", "Khamis Mushait", "Buraidah", "Hail"
    ];
    const defaultIntermediariesOptions = [
        "Athr Gallery", "Hafez Gallery", "Hayy Jameel", "Landscape Gallery"
    ];
    const defaultFramingOptions = [
        "Framed", "Unframed", "Custom Framing Available"
    ];
    const defaultShippingOptions = [
        "Local Pickup", "Domestic Shipping", "International Shipping"
    ];
    const defaultAvailabilityOptions = ["Instant Download", "Available Now", "Commission Available", "Sold but Similar Works Available"];

    // NFT specific options
    const nftFormatOptions = [
        "Digital Print on Archival Paper", "3D Models", "GIFs", "Animation", "Video",
        "Augmented Reality (AR)", "Virtual Reality (VR)", "JPEG", "PNG", "3D Printed", "MP4", "SVG"
    ];
    const nftSizeOptions = [
        "Small (Under 1000 x 1000 pixels)", "Medium (Up To 3000 x 3000 pixels)",
        "Large (Above 3000 x 3000 pixels)", "Custom"
    ];
    const nftAvailabilityOptions = ["Instant Download", "Commission Available"];
    const nftEditionOptions = ["1 of 1 (Unique)", "Limited Edition", "Open Edition"];
    const nftRarityOptions = ["Common", "Rare", "Epic", "Legendary"];
    const nftLicensingOptions = ["Commercial Use Allowed", "Personal Use Only", "Resale Rights Included"];

    // Prints & Souvenirs specific options
    const printsSouvenirsFormatOptions = [
        "Giclée Prints", "Screen Prints", "Lithographs", "Digital Prints",
        "Photographic Prints", "Posters", "Mugs", "Canvas Bags",
        "Notebooks", "Phone Cases", "T-shirts", "Calendars",
        "Magnets", "Keychains"
    ];
    const printsSouvenirsAvailabilityOptions = [
        "Instant Download", "In Stock", "Limited Edition", "Exclusive Collections"
    ];

    // Shared options (unchanged across all display options)
    const categoryOptions = [
        "Calligraphy", "Drawing & Illustration", "Graphics", "Mixed Media",
        "Painting", "Photography", "Printmaking", "Sculpture"
    ];
    const styleOptions = [
        "Abstract", "Realism", "Impressionism", "Minimalism",
        "Surrealism", "Contemporary", "Traditional"
    ];
    const themesOptions = [
        "Cultural Heritage", "Nature", "Urban Life", "Portraits", "Conceptual"
    ];
    const signatureOptions = [
        "Signed by Artist", "Not Signed by Artist"
    ];
    const displayOptionOptions = [
        "Primary Market", "Secondary Market", "NFTs", "Prints & Souvenirs"
    ];

    // New: Certifications Options (only for Primary/Secondary)
    const certificationOptions = [
        "Certificate of Authenticity",
        "Gallery Provenance",
        "Signed By Artist",
        "Copyrighted"
    ];

    // --- Helper function to get options based on displayOption ---
    const getOptions = (field: string) => {
        if (artworkDetails.displayOption === "NFTs") {
            switch (field) {
                case 'format': return nftFormatOptions;
                case 'size': return nftSizeOptions;
                case 'availability': return nftAvailabilityOptions;
                case 'edition': return nftEditionOptions;
                case 'rarity': return nftRarityOptions;
                case 'licensing': return nftLicensingOptions;
                case 'category': return categoryOptions;
                case 'style': return styleOptions;
                case 'theme': return themesOptions;
                case 'signatureByArtist': return signatureOptions;
                default: return [];
            }
        } else if (artworkDetails.displayOption === "Prints & Souvenirs") {
            switch (field) {
                case 'format': return printsSouvenirsFormatOptions;
                case 'availability': return printsSouvenirsAvailabilityOptions;
                case 'location': return defaultLocationOptions;
                case 'framingOptions': return defaultFramingOptions;
                case 'shipping': return defaultShippingOptions;
                case 'category': return categoryOptions;
                case 'style': return styleOptions;
                case 'theme': return themesOptions;
                case 'signatureByArtist': return signatureOptions;
                default: return [];
            }
        }
        // Default options for Primary Market and Secondary Market
        switch (field) {
            case 'format': return primarySecondaryFormatOptions;
            case 'location': return defaultLocationOptions;
            case 'intermediary': return defaultIntermediariesOptions;
            case 'framingOptions': return defaultFramingOptions;
            case 'shipping': return defaultShippingOptions;
            case 'availability': return defaultAvailabilityOptions;
            case 'certifications': return certificationOptions; // Certifications dropdown
            case 'category': return categoryOptions;
            case 'style': return styleOptions;
            case 'theme': return themesOptions;
            case 'signatureByArtist': return signatureOptions;
            default: return [];
        }
    };

    // --- END: Dynamic Options Definition ---

    // Handler for the new certification bubbles
    const handleCertificationToggle = (option: string) => {
        const currentCertifications = Array.isArray(artworkDetails.certifications)
            ? artworkDetails.certifications
            : [];
        let updatedCertifications: string[];

        if (currentCertifications.includes(option)) {
            // Remove the option if it's already selected
            updatedCertifications = currentCertifications.filter(cert => cert !== option);
        } else {
            // Add the option if it's not selected
            updatedCertifications = [...currentCertifications, option];
        }
        dispatch(setArtworkDetail({ field: 'certifications', value: updatedCertifications }));
    };


    const handleSavePortfolio = async (e: React.FormEvent) => {
        e.preventDefault();

        const artistId = user._id;
        console.log("Artist id: ", artistId);
        const token = localStorage.getItem('token');
        console.log("token: ", token);

        if (!artistId) {
            alert("Artist ID is missing. Please ensure you are logged in.");
            return;
        }
        if (!token) {
            alert("Authentication token is missing. Please log in.");
            return;
        }

        // --- Basic validation based on selected display option ---
        if (!artworkDetails.title.trim()) {
            alert("Please enter a Title for your artwork.");
            return;
        }
        if (!artworkDetails.displayOption) {
            alert("Please select a Market Type / Display Option.");
            return;
        }
        if (!artworkDetails.format) {
            alert("Please select a Format.");
            return;
        }
        if (!artworkDetails.size) {
            alert("Please select a Size.");
            return;
        }
        // Price validation for number input
        if (artworkDetails.price === '' || isNaN(parseFloat(String(artworkDetails.price)))) {
            alert("Please enter a valid Price.");
            return;
        }
        if (!artworkDetails.availability) {
            alert("Please select Availability.");
            return;
        }
        if (!artworkDetails.yearOfCreation || isNaN(parseInt(String(artworkDetails.yearOfCreation)))) { // Validation for yearOfCreation input
            alert("Please enter a valid Year of Creation.");
            return;
        }
        if (artworkDetails.displayOption === "NFTs") {
            if (!artworkDetails.edition) {
                alert("Please select an Edition for NFT.");
                return;
            }
            if (!artworkDetails.rarity) {
                alert("Please select Rarity for NFT.");
                return;
            }
            if (!artworkDetails.licensing) {
                alert("Please select Licensing for NFT.");
                return;
            }
        }
        // Add other validations as needed for all fields

        try {
            const uploadedImageUrls: ArtworkImage[] = [];
            for (const imageItem of images) {
                if (imageItem.file) {
                    const { location } = await uploadFileToS3(imageItem.file, 'artwork_images/');
                    if (location) {
                        uploadedImageUrls.push({ url: location, altText: artworkDetails.title || artworkDetails.description || '' });
                    } else {
                        console.warn(`Failed to upload image: ${imageItem.file.name}`);
                        alert(`Failed to upload image: ${imageItem.file.name}. Please try again.`);
                        return; // Stop processing if an image fails
                    }
                }
            }
            if (uploadedImageUrls.length === 0) {
                alert("Please upload at least one image for the artwork.");
                return;
            }

            const uploadedCertificateFiles: string[] = [];
            for (const certificateFile of certificates) {
                const { location } = await uploadFileToS3(certificateFile, 'artwork_certificates/');
                if (location) {
                    uploadedCertificateFiles.push(location);
                } else {
                    console.warn(`Failed to upload certificate: ${certificateFile.name}`);
                }
            }

            let uploadedSaipRegistrationUrl: string | undefined = undefined;
            if (artworkDetails.saipRegistration && artworkDetails.saipRegistration instanceof File) {
                const { location } = await uploadFileToS3(artworkDetails.saipRegistration, 'artwork_saip/');
                if (location) {
                    uploadedSaipRegistrationUrl = location;
                } else {
                    console.warn(`Failed to upload SAIP registration file: ${artworkDetails.saipRegistration.name}`);
                }
            }

            // --- Prepare the payload dynamically ---
            const payload: any = { // Use 'any' temporarily or a more precise conditional type
                title: artworkDetails.title,
                description: artworkDetails.description,
                format: artworkDetails.format,
                size: artworkDetails.size,
                price: parseFloat(String(artworkDetails.price)), // Always parse price as a number
                images: uploadedImageUrls,
                availability: artworkDetails.availability,
                yearOfCreation: parseInt(String(artworkDetails.yearOfCreation)), // Always parse year as integer
                displayOption: artworkDetails.displayOption,
                category: artworkDetails.category,
                style: artworkDetails.style,
                theme: artworkDetails.theme,
                certificatesUrl: uploadedCertificateFiles, // Changed name to certificatesUrl for clarity with file uploads
                saipRegistration: uploadedSaipRegistrationUrl,
            };

            // Conditionally add/remove fields based on displayOption
            if (artworkDetails.displayOption === "NFTs") {
                payload.edition = artworkDetails.edition;
                payload.rarity = artworkDetails.rarity;
                payload.licensing = artworkDetails.licensing;
                payload.signatureByArtist = artworkDetails.signatureByArtist; // Include signature for NFTs
                // Ensure fields not relevant for NFTs are deleted
                delete payload.location;
                delete payload.intermediary;
                delete payload.framingOptions;
                delete payload.shipping;
                delete payload.certifications; // Remove if it was ever added
            } else if (artworkDetails.displayOption === "Prints & Souvenirs") {
                payload.location = artworkDetails.location;
                payload.framingOptions = artworkDetails.framingOptions;
                payload.shipping = artworkDetails.shipping;
                // Ensure fields not relevant for Prints & Souvenirs are deleted
                delete payload.intermediary;
                delete payload.certifications; // Remove if it was ever added
                delete payload.edition;
                delete payload.rarity;
                delete payload.licensing;
                delete payload.signatureByArtist; // As per your requirements, not needed for P&S
            } else { // Primary Market, Secondary Market
                payload.location = artworkDetails.location;
                payload.intermediary = artworkDetails.intermediary;
                payload.framingOptions = artworkDetails.framingOptions;
                payload.shipping = artworkDetails.shipping;
                payload.certifications = artworkDetails.certifications; // This is the array of strings from frontend 'bubbles'
                payload.signatureByArtist = artworkDetails.signatureByArtist; // Include signature for Primary/Secondary
                // Ensure fields not relevant for Primary/Secondary are deleted
                delete payload.edition;
                delete payload.rarity;
                delete payload.licensing;
            }

            console.log("Sending payload to backend:", payload);

            const response = await createArtworkApi(artistId, payload, token);

            if ((response as AxiosResponse<CreateArtworkSuccessData>).status !== undefined) {
                const axiosResponse = response as AxiosResponse<CreateArtworkSuccessData>;
                if (axiosResponse.data && axiosResponse.data.message) {
                    alert(`Portfolio item saved successfully: ${axiosResponse.data.message}`);
                    dispatch(resetPortfolioForm());
                } else {
                    alert("An unknown error occurred during artwork submission.");
                }
            } else {
                alert(`Error saving artwork: ${(response as { message: string }).message}`);
            }

        } catch (error: any) {
            console.error("Failed to save portfolio:", error);
            alert(`Error saving artwork: ${error.message || "An unexpected error occurred."}`);
        }
    };

    // --- Helper function to determine input type or options for rendering ---
    const getFieldRenderProps = (fieldName: keyof ArtworkDetailsState) => {
        // 'price' and 'yearOfCreation' are now always input fields
        const isDropdown = ['category', 'format', 'location', 'style', 'theme', 'intermediary',
            'framingOptions', 'shipping', 'signatureByArtist', 'availability', 'edition', 'rarity', 'licensing'].includes(fieldName);

        // 'certifications' will be a custom bubble selection, not a standard dropdown
        const isBubbleSelect = fieldName === 'certifications';

        // 'price' and 'yearOfCreation' are always number inputs
        const isNumberInput = ['price', 'yearOfCreation'].includes(fieldName);

        const options = isDropdown || isBubbleSelect ? getOptions(fieldName as string) : [];

        return {
            isDropdown,
            isNumberInput,
            isBubbleSelect, // New prop
            options,
            label: fieldName === 'price'
                ? 'PRICE IN SAR'
                : fieldName.replace(/([A-Z])/g, ' $1').toUpperCase(),
        };
    };


    return (
        <div className="container mx-auto p-6">
            <h1 className="text-xl font-montserrat-regular text-yankees-blue mb-6">Upload Artwork</h1>

            {/* Artwork Details */}
            <section className="mb-10">
                <h2 className="text-xl font-montserrat-regular text-yankees-blue mb-4">Artwork Details</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    {/* Title Field - Rendered only once here */}
                    <div>
                        <label htmlFor="title" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">
                            TITLE
                        </label>
                        <input
                            type="text"
                            id="title"
                            value={artworkDetails.title}
                            onChange={(e) =>
                                dispatch(setArtworkDetail({ field: 'title', value: e.target.value }))
                            }
                            className="form-input border border-gray-300 rounded-md w-full font-montserrat-light text-yankees-blue"
                        />
                    </div>

                    {/* Display Option Field - Rendered only once here */}
                    <div>
                        <label htmlFor="displayOption" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">
                            MARKET TYPE / DISPLAY OPTION
                        </label>
                        <select
                            id="displayOption"
                            value={artworkDetails.displayOption}
                            onChange={(e) =>
                                dispatch(setArtworkDetail({ field: 'displayOption', value: e.target.value }))
                            }
                            className="form-select border border-gray-300 rounded-md w-full font-montserrat-light text-yankees-blue"
                        >
                            <option value="">Select a display option</option>
                            {displayOptionOptions.map((option) => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>
                    </div>

                    {/* Dynamically Rendered Fields */}
                    {Object.keys(artworkDetails)
                        .filter(key => {
                            const fieldName = key as keyof ArtworkDetailsState;
                            const excludedInternalFields = [
                                'title',
                                'displayOption',
                                'images',
                                'certificates', // This refers to the uploaded certificate *files*, not the selected certifications
                                'saipRegistration',
                                'certificatesUrl', // The URL after upload
                                'saipRegistrationUrl', // The URL after upload
                                'edition', 'rarity', 'licensing',
                                'location', 'intermediary', 'framingOptions', 'shipping',
                                'signatureByArtist'
                            ];
                            if (excludedInternalFields.includes(fieldName as string)) return false;

                            const alwaysShownFields = [
                                'description', 'category', 'style', 'theme', 'format', 'size',
                                'price', 'yearOfCreation', 'availability', 'certifications' // Keep certifications here
                            ];
                            return alwaysShownFields.includes(fieldName as string);
                        })
                        .concat(
                            artworkDetails.displayOption === "NFTs"
                                ? ['edition', 'rarity', 'licensing', 'signatureByArtist']
                                : []
                        )
                        .concat(
                            (artworkDetails.displayOption === "Primary Market" || artworkDetails.displayOption === "Secondary Market")
                                ? ['location', 'intermediary', 'framingOptions', 'shipping', 'signatureByArtist'] // Certifications is now always shown if applicable
                                : []
                        )
                        .concat(
                            artworkDetails.displayOption === "Prints & Souvenirs"
                                ? ['location', 'framingOptions', 'shipping']
                                : []
                        )
                        .sort((a, b) => {
                            const order = [
                                'description', 'category', 'style', 'theme', 'format', 'size',
                                'price', 'yearOfCreation', 'availability',
                                'signatureByArtist',
                                'location', 'intermediary', 'framingOptions', 'shipping', 'certifications',
                                'edition', 'rarity', 'licensing',
                            ];
                            const aIndex = order.indexOf(a);
                            const bIndex = order.indexOf(b);
                            if (aIndex === -1 && bIndex === -1) return 0;
                            if (aIndex === -1) return 1;
                            if (bIndex === -1) return -1;
                            return aIndex - bIndex;
                        })
                        .map((key) => {
                            const fieldName = key as keyof ArtworkDetailsState;
                            const fieldValue = artworkDetails[fieldName];
                            const { isDropdown, isNumberInput, isBubbleSelect, options, label } = getFieldRenderProps(fieldName);

                            // Conditional rendering based on display option (for fields that should not appear)
                            if (artworkDetails.displayOption === "Prints & Souvenirs") {
                                if (['intermediary', 'certifications', 'signatureByArtist', 'edition', 'rarity', 'licensing'].includes(fieldName as string)) {
                                    return null;
                                }
                            } else if (artworkDetails.displayOption === "NFTs") {
                                if (['location', 'intermediary', 'framingOptions', 'shipping', 'certifications'].includes(fieldName as string)) {
                                    return null;
                                }
                            } else { // Primary Market, Secondary Market
                                if (['edition', 'rarity', 'licensing'].includes(fieldName as string)) {
                                    return null;
                                }
                            }

                            // --- CUSTOM RENDERING FOR CERTIFICATIONS BUBBLES ---
                            if (isBubbleSelect && artworkDetails.displayOption !== "NFTs" && artworkDetails.displayOption !== "Prints & Souvenirs") {
                                const selectedCertifications = Array.isArray(artworkDetails.certifications) ? artworkDetails.certifications : [];
                                return (
                                    <div key={fieldName} className="col-span-full"> {/* Make it span full width for better layout */}
                                        <label className="block text-xs text-yankees-blue font-montserrat-regular mb-2">
                                            {label}
                                        </label>
                                        <div className="flex flex-wrap gap-2">
                                            {options.map(option => (
                                                <button
                                                    key={option}
                                                    type="button"
                                                    onClick={() => handleCertificationToggle(option)}
                                                    className={`
                                                        px-4 py-2 rounded-full border
                                                        text-sm font-montserrat-light
                                                        ${selectedCertifications.includes(option)
                                                            ? 'bg-yankees-blue text-white border-yankees-blue'
                                                            : 'bg-gray-200 text-gray-700 border-gray-300 hover:bg-gray-300' // Changed to grey
                                                        }
                                                    `}
                                                >
                                                    {option}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                );
                            }
                            // --- END CUSTOM RENDERING ---


                            // Normal rendering for other fields
                            return (
                                <div key={fieldName}>
                                    <label htmlFor={fieldName} className="block text-xs text-yankees-blue font-montserrat-regular mb-2">
                                        {label}
                                    </label>
                                    {isDropdown ? (
                                        <select
                                            id={fieldName}
                                            value={fieldValue === undefined || fieldValue === null ? '' : String(fieldValue)}
                                            onChange={(e) =>
                                                dispatch(setArtworkDetail({ field: fieldName, value: e.target.value }))
                                            }
                                            className="form-select border border-gray-300 rounded-md w-full font-montserrat-light text-yankees-blue"
                                        >
                                            <option value="">Select a {fieldName.replace(/([A-Z])/g, ' $1').toLowerCase()}</option>
                                            {options.map(option => (
                                                <option key={option} value={option}>{option}</option>
                                            ))}
                                        </select>
                                    ) : fieldName === 'description' ? (
                                        <textarea
                                            id={fieldName}
                                            value={fieldValue === undefined || fieldValue === null ? '' : String(fieldValue)}
                                            onChange={(e) =>
                                                dispatch(setArtworkDetail({ field: fieldName, value: e.target.value }))
                                            }
                                            rows={3}
                                            className="form-textarea border border-gray-300 rounded-md w-full font-montserrat-light text-yankees-blue"
                                        />
                                    ) : (
                                        <input
                                            type={isNumberInput ? 'number' : 'text'}
                                            id={fieldName}
                                            value={fieldValue === undefined || fieldValue === null ? '' : String(fieldValue)}
                                            onChange={(e) => {
                                                let valueToDispatch: string | number = e.target.value;
                                                if (isNumberInput) {
                                                    valueToDispatch = e.target.value === '' ? '' : parseFloat(e.target.value);
                                                }
                                                dispatch(setArtworkDetail({ field: fieldName, value: valueToDispatch as ArtworkDetailsState[typeof fieldName] }));
                                            }}
                                            className="form-input border border-gray-300 rounded-md w-full font-montserrat-light text-yankees-blue"
                                        />
                                    )}
                                </div>
                            );
                        })}
                </div>
            </section>

            {/* Image Upload Section */}
            <section className="mb-10">
                <div className="custom-file-container" data-upload-id="mySecondImage">
                    <div className="label-container ">
                        <label className='text-yankees-blue font-montserrat-regular '>
                            Upload Images (max {currentMaxImages})
                        </label>
                        <button
                            type="button"
                            className="custom-file-container__image-clear text-yankees-blue"
                            title="Clear Image"
                            onClick={() => dispatch(setImages([]))}
                        >
                            ×
                        </button>
                    </div>
                    <ImageUploading
                        multiple={currentMaxImages > 1}
                        value={images}
                        onChange={(imageList) => dispatch(setImages(imageList as { file: File; dataURL: string }[]))}
                        maxNumber={currentMaxImages}
                        dataURLKey="dataURL"
                    >
                        {({ imageList, onImageUpload }) => (
                            <div className="upload__image-wrapper">
                                <button
                                    type="button"
                                    className="custom-file-container__custom-file__custom-file-control text-yankees-blue font-montserrat-light"
                                    onClick={onImageUpload}
                                >
                                    Choose File...
                                </button>
                                <div className="grid gap-4 sm:grid-cols-3 grid-cols-1 mt-4">
                                    {imageList.map((image, index) => (
                                        <div key={index} className="relative border rounded-md shadow-sm">
                                            <button
                                                type="button"
                                                className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-800"
                                                onClick={() => {
                                                    const updatedImages = imageList.filter((_, i) => i !== index);
                                                    dispatch(setImages(updatedImages as { file: File; dataURL: string }[]));
                                                }}
                                            >
                                                ×
                                            </button>
                                            <img src={image.dataURL} alt="uploaded" className="object-cover w-full h-auto rounded" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </ImageUploading>
                    {images.length === 0 && (
                        <img src="/assets/images/file-preview.svg" className="max-w-md w-full m-auto" alt="File preview" />
                    )}
                </div>
            </section>

            {/* Conditional Rendering for Certificate Upload (file input) */}
            {/* This is for actual file uploads like PDF certificates, not the bubble selection */}
            {(artworkDetails.displayOption === "Primary Market" || artworkDetails.displayOption === "Secondary Market") && (
                <section className="mb-10">
                    <h2 className="text-xl text-yankees-blue font-montserrat-regular mb-4">Upload Certificate of Authenticity</h2>
                    <input
                        type="file"
                        multiple
                        onChange={(e) => {
                            const uploadedFiles = Array.from(e.target.files || []);
                            uploadedFiles.forEach(file => dispatch(addCertificate(file)));
                        }}
                        className="form-input border border-gray-300 rounded-md w-full text-yankees-blue font-montserrat-light"
                    />
                    {certificates.length > 0 && (
                        <ul className="mt-4 space-y-2">
                            {certificates.map((file, index) => (
                                <li key={index} className="flex items-center text-gray-700">
                                    <span className="flex-1">{file.name}</span>
                                    <button
                                        type="button"
                                        onClick={() => dispatch(removeCertificate(index))}
                                        className="ml-4 text-red-600 hover:text-red-800"
                                    >
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </section>
            )}

            {/* Conditional Rendering for SAIP Registration */}
            {(artworkDetails.displayOption === "Primary Market" || artworkDetails.displayOption === "Secondary Market") && (
                <section className="mb-10">
                    <h2 className="text-xl text-yankees-blue font-montserrat-regular mb-4">SAIP Registration</h2>
                    <input
                        type="file"
                        onChange={(e) => {
                            const uploadedFile = e.target.files?.[0];
                            if (uploadedFile) {
                                dispatch(setSaipRegistration(uploadedFile));
                            }
                        }}
                        className="form-input border border-gray-300 rounded-md w-full text-yankees-blue font-montserrat-light"
                    />
                    {saipRegistration && (
                        <ul className="mt-4 space-y-2">
                            <li className="flex items-center text-gray-700">
                                <span className="flex-1">{saipRegistration.name}</span>
                                <button
                                    type="button"
                                    onClick={() => dispatch(setSaipRegistration(null))}
                                    className="ml-4 text-red-600 hover:text-red-800"
                                >
                                    Remove
                                </button>
                            </li>
                        </ul>
                    )}
                </section>
            )}

            {/* Save Button */}
            <div className="text-center mt-6">
                <button
                    onClick={handleSavePortfolio}
                    className="bg-yankees-blue text-white py-2 px-6 rounded-md hover:bg-yankees-blue w-full font-montserrat-light"
                >
                    Save Item
                </button>
            </div>
        </div>
    );
};

export default MyPortfolio;