// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";

// const Register = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleRegister = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!email || !password) {
//       setError("All fields are required");
//       return;
//     }

//     localStorage.setItem("user", JSON.stringify({ email, password }));
//     navigate("/");
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-100">
//       <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
//         <h1 className="text-2xl font-bold text-center text-gray-800">Register</h1>
//         {error && <p className="text-red-500 text-center mt-2">{error}</p>}
//         <form className="mt-4 space-y-4" onSubmit={handleRegister}>
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//             <input 
//               id="email" 
//               type="email" 
//               className="w-full p-2 border border-gray-300 rounded"
//               value={email} 
//               onChange={(e) => setEmail(e.target.value)} 
//               required 
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//             <input 
//               id="password" 
//               type="password" 
//               className="w-full p-2 border border-gray-300 rounded"
//               value={password} 
//               onChange={(e) => setPassword(e.target.value)} 
//               required 
//             />
//           </div>
//           <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
//             Register
//           </button>
//         </form>
//         <p className="mt-4 text-center text-gray-600">
//           Already have an account? <Link to="/" className="text-blue-500">Sign in</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;
/////////////////////////////////////////////////////////////////////////////////////////////////////
// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import IconMail from "../components/Icon/IconMail";
// import IconLockDots from "../components/Icon/IconLockDots";
// import logo from "../assets/SCS Logo.png";

// const Register = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleRegister = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!email || !password) {
//       setError("All fields are required");
//       return;
//     }

//     localStorage.setItem("user", JSON.stringify({ email, password }));
//     navigate("/dashboard");
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-100">
//       <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
//         {/* Logo */}
//         <div className="flex justify-center mb-4">
//           <img src={logo} alt="Logo" className="h-24 w-auto" />
//         </div>

//         <h1 className="text-xl font-montserrat-medium text-center text-yankees-blue">Artist Login</h1>
//         {error && <p className="text-red-500 text-center mt-2">{error}</p>}

//         <form className="mt-4 space-y-4" onSubmit={handleRegister}>
//           <div>
//             <label htmlFor="email" className="block text-sm font-montserrat-regular text-yankees-blue">Email</label>
//             <div className="relative">
//               <input
//                 id="email"
//                 type="email"
//                 className="w-full pl-10 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yankees-blue font-montserrat-light"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//               <span className="absolute left-3 top-3 text-gray-500">
//                 <IconMail />
//               </span>
//             </div>
//           </div>

//           <div>
//             <label htmlFor="password" className="block text-sm font-montserrat-regular text-yankees-blue">Password</label>
//             <div className="relative">
//               <input
//                 id="password"
//                 type="password"
//                 className="w-full pl-10 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yankees-blue font-montserrat-light"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//               <span className="absolute left-3 top-3 text-gray-500">
//                 <IconLockDots />
//               </span>
//             </div>
//           </div>

//           <button type="submit" className="w-full bg-madder-lake text-white py-2 rounded-lg hover:bg-madder-lake">
//             Login
//           </button>
//         </form>

//         {/* <p className="mt-4 text-center text-gray-600">
//           Already have an account? <Link to="/" className="text-blue-500">Sign in</Link>
//         </p> */}
//       </div>
//     </div>
//   );
// };

// export default Register;
////////////////////////////////////////////////////////////////////////////////////////////////////////

// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import {useDispatch} from "react-redux";
// import IconMail from "../components/Icon/IconMail";
// import IconLockDots from "../components/Icon/IconLockDots";
// import logo from "../assets/SCS Logo.png";
// import axios from "axios";
// import { ApiUserData, login, AuthSuccessData} from "../api/user";
// import { setUserData, clearUserData } from '../store/userSlice';
// import { AuthPayload } from "../api/user"; 
// import { toast } from "react-toastify";


// const Register = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch(); // Initialize useDispatch hook
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   // const handleRegister = async (e: React.FormEvent) => {
//   //   e.preventDefault();

//   //   if (!email || !password) {
//   //     setError("All fields are required");
//   //     return;
//   //   }

//   //   try {
//   //     const response = await login({ email, password });
//   //     console.log("response structure: ", response);

//   //     // ✅ Type guard to distinguish AxiosResponse from error object
//   //     if ("status" in response && response.status === 200 && response.data.token) {
//   //       // Assuming the user data is available in response.data.data
//   //       // You might need to adjust 'response.data.data' based on your actual API response structure
//   //       const userData = response.data.data;
//   //       console.log("user Data is ", userData``)

//   //       // Dispatch the setUserData action to save user information in Redux
//   //       dispatch(setUserData({
//   //          fullNameEnglish: userData.fullNameEnglish || '', // Provide a default empty string
//   //         fullNameArabic: userData.fullNameArabic || '',   // Provide a default empty string
//   //         username: userData.username || '',               // Provide a default empty string
//   //         email: userData.email,                           // Email should definitely be present
//   //         mobileNumber: userData.mobileNumber || '',       // Provide a default empty string
//   //         role: userData.role || '',                       // Provide a default empty string
//   //         country: userData.country || '',                 // Provide a default empty string
//   //         city: userData.city || '',                       // Provide a default empty string
//   //         interests: userData.interests || [],             // Provide a default empty array
//   //         profilePicture: userData.profilePicture === undefined ? null : userData.profilePicture, // Handle null vs undefined
//   //       })); // Type assertion to match UserState

//   //       navigate("/dashboard");
//   //     } else if (response && "message" in response) { // Handle error message from API
//   //       setError(response.message);
//   //     } else {
//   //       setError("Invalid credentials");
//   //     }
//   //   } catch (err: any) {
//   //     const msg = err.response?.data?.message || err.response?.data?.error || "Login failed";
//   //     setError(msg);
//   //   }
//   // };

// const handleRegister = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError(""); // Clear previous errors

//     if (!email || !password) {
//       setError("All fields are required");
//       return;
//     }

//     try {
//       const response = await login({ email, password });
//       console.log("Full login response from API call:", response);

//       // Now, 'response' can be either AxiosResponse<LoginSuccessData> or { message: string }
//       // Use a type guard to check if it's an AxiosResponse
//       if ("status" in response && response.status === 200) {
//         // If it's an AxiosResponse, its 'data' property is of type LoginSuccessData
//         const apiData: AuthSuccessData = response.data; // Type is correctly inferred as LoginSuccessData

//         if (apiData.token && apiData.user && apiData.user.role ==='artist') {
//           localStorage.setItem("token", apiData.token);
//           const userData: ApiUserData = apiData.user; // Type is correctly inferred as ApiUserData

//           console.log("Extracted user data for Redux:", userData);

//           dispatch(setUserData({
//             _id:userData._id || '',
//             fullNameEnglish: userData.fullNameEnglish || '',
//             fullNameArabic: userData.fullNameArabic || '',
//             username: userData.username || '',
//             email: userData.email, // Assuming email is always present
//             mobileNumber: userData.mobileNumber || '',
//             role: userData.role || '',
//             country: userData.country || '',
//             city: userData.city || '',
//             interests: userData.interests || [],
//             profilePicture: userData.profilePicture || null,
//             socialMediaLinks: userData.socialMediaLinks || { instagram: '', behance: '', linkedin: '', facebook: '' },
//             biographyArabic: userData.biographyArabic || '',
//             biographyEnglish: userData.biographyEnglish || '',
//             nationalId: userData.nationalId || '',
//           }));

//           // localStorage.setItem("token", apiData.token); // Optional: save token

//           navigate("/dashboard");
//         } else {
//           // This else block indicates an issue with the API response content
//           // even if the status is 200, if token or user is unexpectedly missing
//           setError("Login unsuccessful, credentials mismatched");
//         }
//       } else {
//         // This handles cases where 'response' is { message: string } from the login function's catch block
//         // (e.g., if the server returned a 4xx error with a message)
//         // setError(response.message as string); // 'message' property is explicitly typed as string
//       }
//     } catch (err: any) {
//       // This catch block is for network errors or other unexpected errors
//       const msg = err.response?.data?.message || err.response?.data?.error || "Login failed: Network error or unexpected issue.";
//       setError(msg);
//       toast.error(msg);
//       console.error("Login caught an error:", err);
//     }
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-100">
//       <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
//         {/* Logo */}
//         <div className="flex justify-center mb-4">
//           <img src={logo} alt="Logo" className="h-24 w-auto" />
//         </div>

//         <h1 className="text-xl font-montserrat-medium text-center text-yankees-blue">Artist Login</h1>
//         {error && <p className="text-red-500 text-center mt-2">{error}</p>}

//         <form className="mt-4 space-y-4" onSubmit={handleRegister}>
//           <div>
//             <label htmlFor="email" className="block text-sm font-montserrat-regular text-yankees-blue">Email</label>
//             <div className="relative">
//               <input
//                 id="email"
//                 type="email"
//                 className="w-full pl-10 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yankees-blue font-montserrat-light"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//               <span className="absolute left-3 top-3 text-gray-500">
//                 <IconMail />
//               </span>
//             </div>
//           </div>

//           <div>
//             <label htmlFor="password" className="block text-sm font-montserrat-regular text-yankees-blue">Password</label>
//             <div className="relative">
//               <input
//                 id="password"
//                 type="password"
//                 className="w-full pl-10 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yankees-blue font-montserrat-light"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//               <span className="absolute left-3 top-3 text-gray-500">
//                 <IconLockDots />
//               </span>
//             </div>
//           </div>

//           <button type="submit" className="w-full bg-madder-lake text-white py-2 rounded-lg hover:bg-madder-lake">
//             Login
//           </button>

//            <div className="mt-6 flex items-center justify-between">
//           <span className="border-b w-1/5 lg:w-1/4"></span>
//           <span className="text-xs font-montserrat-extralight text-yankees-blue dark:text-white uppercase">DON'T HAVE AN ACCOUNT?</span>
//           <span className="border-b w-1/5 lg:w-1/4"></span>
//           </div>

//           {/* Sign up link */}
//           <div className="mt-6 flex items-center justify-center">
//             <Link to="/signup" className="text-sm font-montserrat-extralight text-yankees-blue dark:text-blue-400">SignUp Here</Link>
//           </div>

//         </form>

//         {/* <p className="mt-4 text-center text-gray-600">
//           Already have an account? <Link to="/" className="text-blue-500">Sign in</Link>
//         </p> */}
//       </div>
//     </div>
//   );
// };

// export default Register;


import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import IconMail from "../components/Icon/IconMail";
import IconLockDots from "../components/Icon/IconLockDots";
import logo from "../assets/SCS Logo.png";
import axios, { AxiosError, AxiosResponse } from "axios"; // Import AxiosError and AxiosResponse for type checking
import { login, AuthSuccessData, ApiUserData, AuthPayload } from "../api/user"; // Keep ApiUserData, AuthSuccessData, AuthPayload for explicit typing
import { setUserData, clearUserData } from '../store/userSlice'; // Keep clearUserData for completeness, even if not used here
import { toast } from "react-toastify";

const Register = () => { // Renamed from Register to Login to match the file name if it's indeed Login.tsx
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>(""); // Explicitly type useState
  const [password, setPassword] = useState<string>(""); // Explicitly type useState
  const [error, setError] = useState<string>(""); // Explicitly type useState

  // Log when the component mounts or re-renders
  useEffect(() => {
    console.log("Login component mounted/re-rendered.");
    console.log("Current state: Email -", email, "Password -", password.length > 0 ? "[SET]" : "[EMPTY]"); // Don't log password directly
    if (error) {
      console.log("Current error message:", error);
    }
  }, [email, password, error]);

  const handleRegister = async (e: React.FormEvent) => { // FIX 1: Explicitly type 'e' as React.FormEvent
    e.preventDefault();
    console.log("LOGIN FORM SUBMITTED: Initiating login process.");
    setError(""); // Clear previous errors

    if (!email || !password) {
      const errorMessage = "All fields are required.";
      setError(errorMessage);
      toast.error(errorMessage);
      console.warn("LOGIN VALIDATION FAILED:", errorMessage);
      return;
    }

    console.log("LOGIN DATA READY FOR API CALL: Email -", email); // Do not log password
    try {
      console.log("LOGIN API CALL: Sending request to login endpoint...");
      // The `login` function is expected to return either AxiosResponse<AuthSuccessData> or an error object.
      // We need to properly type the response here.
      const response: AxiosResponse<AuthSuccessData> | { message: string } = await login({ email, password });
      console.log("LOGIN API RESPONSE - FULL:", response);

      // FIX 2: Improved type guard for 'response' and access to 'message'
      if ("status" in response && response.status === 200) {
        console.log("LOGIN API RESPONSE - STATUS 200 OK.");
        const apiData: AuthSuccessData = response.data; // Type is correctly inferred as AuthSuccessData

        console.log("LOGIN API RESPONSE - Data received:", apiData);

        if (apiData.token && apiData.user && apiData.user.role === 'artist') {
          console.log("LOGIN SUCCESS: Token and Artist user data received.");
          localStorage.setItem("token", apiData.token);
          console.log("LOGIN LOCAL STORAGE: Token saved.");

          const userData: ApiUserData = apiData.user;
          console.log("LOGIN REDUX DISPATCH: Preparing to dispatch user data:", userData);

          dispatch(setUserData({
            _id: userData._id || '',
            fullNameEnglish: userData.fullNameEnglish || '',
            fullNameArabic: userData.fullNameArabic || '',
            username: userData.username || '',
            email: userData.email,
            mobileNumber: userData.mobileNumber || '',
            role: userData.role || '',
            country: userData.country || '',
            city: userData.city || '',
            interests: userData.interests || [],
            profilePicture: userData.profilePicture || null,
            socialMediaLinks: userData.socialMediaLinks || { instagram: '', behance: '', linkedin: '', facebook: '' },
            biographyArabic: userData.biographyArabic || '',
            biographyEnglish: userData.biographyEnglish || '',
            nationalId: userData.nationalId || '',
          }));
          console.log("LOGIN REDUX DISPATCH: User data dispatched successfully.");

          console.log("LOGIN NAVIGATION: Navigating to /dashboard.");
          navigate("/dashboard");
        } else {
          const errorMessage = "Login unsuccessful: API response missing token, user data, or invalid role.";
          setError(errorMessage);
          toast.error(errorMessage);
          console.warn("LOGIN FAILURE - INVALID API DATA:", errorMessage, "Received data:", apiData);
        }
      } else {
        // This handles cases where 'response' is { message: string } from the login function's catch block,
        // or any other non-AxiosResponse that matches this shape.
        // FIX 2 (continued): Safely access 'message' property using type guard
        const errorMessage = (response as { message: string }).message || "Login failed: Unexpected response format from API call.";
        setError(errorMessage);
        toast.error(errorMessage);
        console.error("LOGIN FAILURE - NON-AXIOS RESPONSE:", errorMessage, "Received response:", response);
      }
    } catch (err: unknown) { // FIX 3: Type 'err' as 'unknown'
      // FIX 3 (continued): Type narrowing for 'err' or type assertion
      let msg: string = "An unexpected error occurred during login.";

      if (axios.isAxiosError(err)) { // Use Axios type guard for more specific error handling
        const axiosError: AxiosError = err; // 'axiosError' is now correctly typed as AxiosError
        if (axiosError.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          msg = (axiosError.response.data as any)?.message || (axiosError.response.data as any)?.error || `Server responded with status ${axiosError.response.status}`;
          console.error("LOGIN CATCH BLOCK - Server Responded Error:", msg, "Full Axios Error:", axiosError);
          console.error("LOGIN CATCH BLOCK - Server Response Data:", axiosError.response.data);
          console.error("LOGIN CATCH BLOCK - Server Response Status:", axiosError.response.status);
          console.error("LOGIN CATCH BLOCK - Server Response Headers:", axiosError.response.headers);
        } else if (axiosError.request) {
          // The request was made but no response was received (e.g., network error)
          msg = "Network Error: No response received from server.";
          console.error("LOGIN CATCH BLOCK - Network Error:", msg, "Full Axios Error:", axiosError);
          console.error("LOGIN CATCH BLOCK - Request object:", axiosError.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          msg = axiosError.message;
          console.error("LOGIN CATCH BLOCK - Request Setup Error:", msg, "Full Axios Error:", axiosError);
        }
      } else if (err instanceof Error) {
        // A generic JavaScript error
        msg = err.message;
        console.error("LOGIN CATCH BLOCK - General Error:", msg, "Full Error object:", err);
      } else {
        // Fallback for anything else
        console.error("LOGIN CATCH BLOCK - Unknown Error Type:", err);
      }

      setError(msg);
      toast.error(msg);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src={logo} alt="Logo" className="h-24 w-auto" />
        </div>

        <h1 className="text-xl font-montserrat-medium text-center text-yankees-blue">Artist Login</h1>
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}

        <form className="mt-4 space-y-4" onSubmit={handleRegister}>
          <div>
            <label htmlFor="email" className="block text-sm font-montserrat-regular text-yankees-blue">Email</label>
            <div className="relative">
              <input
                id="email"
                type="email"
                className="w-full pl-10 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yankees-blue font-montserrat-light"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  console.log("EMAIL INPUT CHANGED:", e.target.value);
                }}
                required
              />
              <span className="absolute left-3 top-3 text-gray-500">
                <IconMail />
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-montserrat-regular text-yankees-blue">Password</label>
            <div className="relative">
              <input
                id="password"
                type="password"
                className="w-full pl-10 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yankees-blue font-montserrat-light"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  console.log("PASSWORD INPUT CHANGED: [HIDDEN]");
                }}
                required
              />
              <span className="absolute left-3 top-3 text-gray-500">
                <IconLockDots />
              </span>
            </div>
          </div>

          <button type="submit" className="w-full bg-madder-lake text-white py-2 rounded-lg hover:bg-madder-lake">
            Login
          </button>

          <div className="mt-6 flex items-center justify-between">
            <span className="border-b w-1/5 lg:w-1/4"></span>
            <span className="text-xs font-montserrat-extralight text-yankees-blue dark:text-white uppercase">DON'T HAVE AN ACCOUNT?</span>
            <span className="border-b w-1/5 lg:w-1/4"></span>
          </div>

          {/* Sign up link */}
          <div className="mt-6 flex items-center justify-center">
            <Link to="/signup" className="text-sm font-montserrat-extralight text-yankees-blue dark:text-blue-400">SignUp Here</Link>
          </div>

        </form>

      </div>
    </div>
  );
};

export default Register;