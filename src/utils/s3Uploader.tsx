// import {
//   S3Client,
//   PutObjectCommand,
//   PutObjectCommandInput,
// } from '@aws-sdk/client-s3';

// /**
//  * Convert file to base64 string
//  */
// const getBase64 = (file: File): Promise<string> => {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => {
//       const result = reader.result;
//       if (typeof result === 'string') {
//         const base64String = result.split(',')[1]; // Remove data:image/...;base64,
//         resolve(base64String);
//       } else {
//         reject(new Error("Failed to convert file to base64"));
//       }
//     };
//     reader.onerror = (error) => reject(error);
//   });
// };

// /**
//  * Upload file to S3 and return base64 string and location
//  */
// export const uploadFileToS3 = async (
//   file: File,
//   folder: string = ''
// ): Promise<{ location: string | null; base64String: string | null }> => {
//   if (!(file instanceof File)) {
//     console.error('Provided input is not a valid File object:', file);
//     return { location: null, base64String: null };
//   }

//   const region = import.meta.env.VITE_AWS_REGION;
//   const bucketName = import.meta.env.VITE_AWS_BUCKET_NAME;
//   const accessKeyId = import.meta.env.VITE_AWS_ACCESS_KEY;
//   const secretAccessKey = import.meta.env.VITE_AWS_SECRET_KEY;

//   if (!region || !bucketName || !accessKeyId || !secretAccessKey) {
//     console.error("Missing AWS environment variables", {
//       region,
//       bucketName,
//       accessKeyId,
//       secretAccessKey,
//     });
//     return { location: null, base64String: null };
//   }

//   const s3 = new S3Client({
//     region,
//     credentials: {
//       accessKeyId,
//       secretAccessKey,
//     },
//   });

//   const fileName = `${folder}${Date.now()}_${file.name}`;

//   const uploadParams: PutObjectCommandInput = {
//     Bucket: bucketName,
//     Key: fileName,
//     Body: file,
//     ContentType: file.type,
//   };

//   try {
//     await s3.send(new PutObjectCommand(uploadParams));
//     const base64String = await getBase64(file);
//     const location = `https://${bucketName}.s3.${region}.amazonaws.com/${fileName}`;
//     return { location, base64String };
//   } catch (err) {
//     console.error('S3 upload error:', err);
//     return { location: null, base64String: null };
//   }
// };


////////////////////////////////////////////////////////////////

// import {
//   S3Client,
//   PutObjectCommand,
//   PutObjectCommandInput,
// } from '@aws-sdk/client-s3';

// /**
//  * Convert file to base64 string
//  * (Keep this as it's used for the return value)
//  */
// const getBase64 = (file: File): Promise<string> => {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => {
//       const result = reader.result;
//       if (typeof result === 'string') {
//         const base64String = result.split(',')[1]; // Remove data:image/...;base64,
//         resolve(base64String);
//       } else {
//         reject(new Error("Failed to convert file to base64"));
//       }
//     };
//     reader.onerror = (error) => reject(error);
//   });
// };

// /**
//  * Helper to read a File as a Uint8Array
//  */
// const readFileAsUint8Array = (file: File): Promise<Uint8Array> => {
//     return new Promise((resolve, reject) => {
//         const reader = new FileReader();
//         reader.onload = () => {
//             if (reader.result instanceof ArrayBuffer) {
//                 resolve(new Uint8Array(reader.result)); // Convert ArrayBuffer to Uint8Array
//             } else {
//                 reject(new Error("Failed to read file as ArrayBuffer or invalid result type"));
//             }
//         };
//         reader.onerror = (error) => reject(error);
//         reader.readAsArrayBuffer(file); // Still read as ArrayBuffer first
//     });
// };


// /**
//  * Upload file to S3 and return base64 string and location
//  */
// export const uploadFileToS3 = async (
//   file: File,
//   folder: string = ''
// ): Promise<{ location: string | null; base64String: string | null }> => {
//   if (!(file instanceof File)) {
//     console.error('Provided input is not a valid File object:', file);
//     return { location: null, base64String: null };
//   }

//   const region = import.meta.env.VITE_AWS_REGION;
//   const bucketName = import.meta.env.VITE_AWS_BUCKET_NAME;
//   const accessKeyId = import.meta.env.VITE_AWS_ACCESS_KEY;
//   const secretAccessKey = import.meta.env.VITE_AWS_SECRET_KEY;

//   if (!region || !bucketName || !accessKeyId || !secretAccessKey) {
//     console.error("Missing AWS environment variables", {
//       region,
//       bucketName,
//       accessKeyId,
//       secretAccessKey,
//     });
//     return { location: null, base64String: null };
//   }

//   const s3 = new S3Client({
//     region,
//     credentials: {
//       accessKeyId,
//       secretAccessKey,
//     },
//   });

//   const fileName = `${folder}${Date.now()}_${file.name}`;

//   try {
//     // Read the file content as a Uint8Array
//     const fileContent = await readFileAsUint8Array(file);

//     const uploadParams: PutObjectCommandInput = {
//       Bucket: bucketName,
//       Key: fileName,
//       Body: fileContent, // Now passing a Uint8Array
//       ContentType: file.type,
//     };

//     await s3.send(new PutObjectCommand(uploadParams));
//     const base64String = await getBase64(file); // Still need base64 for your signup payload
//     const location = `https://${bucketName}.s3.${region}.amazonaws.com/${fileName}`;
//     return { location, base64String };
//   } catch (err) {
//     console.error('S3 upload error:', err);
//     return { location: null, base64String: null };
//   }
// };


import {
  S3Client,
  PutObjectCommand,
  PutObjectCommandInput,
} from '@aws-sdk/client-s3';

/**
 * Convert file to base64 string.
 * This is used to get the base64 string for storage in your Redux state/backend.
 * It removes the "data:image/jpeg;base64," prefix because the <img> tag needs it re-added with the correct MIME type.
 */
const getBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result;
      if (typeof result === 'string') {
        const base64String = result.split(',')[1]; // Remove data:image/...;base64, prefix
        resolve(base64String);
      } else {
        reject(new Error("Failed to convert file to base64"));
      }
    };
    reader.onerror = (error) => reject(error);
  });
};

/**
 * Helper to read a File as a Uint8Array.
 * This is crucial for fixing the "readableStream.getReader is not a function" error,
 * as the AWS SDK's PutObjectCommand expects a compatible binary type in browser environments.
 */
const readFileAsUint8Array = (file: File): Promise<Uint8Array> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.result instanceof ArrayBuffer) {
                // Create a Uint8Array view over the ArrayBuffer
                resolve(new Uint8Array(reader.result));
            } else {
                reject(new Error("Failed to read file as ArrayBuffer or invalid result type"));
            }
        };
        reader.onerror = (error) => reject(error);
        reader.readAsArrayBuffer(file); // Read as ArrayBuffer first
    });
};

/**
 * Upload file to S3 and return its public URL (location),
 * its base64 string representation, and its content type.
 *
 * @param file The File object to upload.
 * @param folder Optional. The folder path within the S3 bucket (e.g., 'profile-images/').
 * If provided, ensure it ends with a '/' if you want a subfolder.
 * @returns An object containing the S3 location URL, the base64 string, and the content type,
 * or nulls if the upload fails or prerequisites are missing.
 */
export const uploadFileToS3 = async (
  file: File,
  folder: string = ''
): Promise<{ location: string | null; base64String: string | null; contentType: string | null }> => {
  // Input validation for the File object
  if (!(file instanceof File)) {
    console.error('Provided input is not a valid File object:', file);
    return { location: null, base64String: null, contentType: null };
  }

  // Ensure folder path ends with '/' if it's not empty
  const folderPath = folder ? (folder.endsWith('/') ? folder : `${folder}/`) : '';

  // Retrieve AWS environment variables
  const region = import.meta.env.VITE_AWS_REGION;
  const bucketName = import.meta.env.VITE_AWS_BUCKET_NAME;
  const accessKeyId = import.meta.env.VITE_AWS_ACCESS_KEY;
  const secretAccessKey = import.meta.env.VITE_AWS_SECRET_KEY;

  // Check for missing environment variables and provide specific error messages
  if (!region) {
    console.error("Missing AWS_REGION environment variable.");
    return { location: null, base64String: null, contentType: null };
  }
  if (!bucketName) {
    console.error("Missing AWS_BUCKET_NAME environment variable.");
    return { location: null, base64String: null, contentType: null };
  }
  if (!accessKeyId) {
    console.error("Missing AWS_ACCESS_KEY environment variable.");
    return { location: null, base64String: null, contentType: null };
  }
  if (!secretAccessKey) {
    console.error("Missing AWS_SECRET_KEY environment variable.");
    return { location: null, base64String: null, contentType: null };
  }

  // Initialize S3 Client
  const s3 = new S3Client({
    region,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  });

  // Generate a unique file name to avoid collisions
  const fileName = `${folderPath}${Date.now()}_${file.name}`;

  try {
    // Read the file content into a Uint8Array, suitable for AWS SDK
    const fileContent = await readFileAsUint8Array(file);

    // Prepare the S3 PutObject command parameters
    const uploadParams: PutObjectCommandInput = {
      Bucket: bucketName,
      Key: fileName,
      Body: fileContent, // Use the Uint8Array here
      ContentType: file.type, // Set the content type for S3
    };

    // Send the upload command to S3
    await s3.send(new PutObjectCommand(uploadParams));

    // Get the base64 string for your Redux state/backend storage
    const base64String = await getBase64(file);

    // Construct the public URL of the uploaded object
    const location = `https://${bucketName}.s3.${region}.amazonaws.com/${fileName}`;

    // Return all relevant information
    return { location, base64String, contentType: file.type };
  } catch (err) {
    console.error('S3 upload error:', err);
    return { location: null, base64String: null, contentType: null };
  }
};