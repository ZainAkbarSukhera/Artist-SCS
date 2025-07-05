// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../store/store';
// import { setUserData } from '../store/userSlice';
// import { updateUserSettings, UpdateSettingsPayload } from '../api/user';
// import { toast } from 'react-toastify';



// // const updateFields = {
// //   updateLoginCredentials: (email: string, password: string) => {
// //     console.log(`Email: ${email}, Password: ${password}`);
// //   },
// //   updateNotificationSettings: (emailAlerts: boolean, pushNotifications: boolean) => {
// //     console.log(`Email Alerts: ${emailAlerts}, Push Notifications: ${pushNotifications}`);
// //   },
// //   toggleProfileVisibility: (isPublic: boolean) => {
// //     console.log(`Profile Visibility: ${isPublic ? 'Public' : 'Private'}`);
// //   },
// //   enableTwoFactorAuth: (enabled: boolean) => {
// //     console.log(`2FA Enabled: ${enabled}`);
// //   },
// //   getActiveSessions: () => {
// //     return [
// //       { id: 1, device: 'Laptop', location: 'New York, USA', lastActive: '2025-01-06 10:00 AM' },
// //       { id: 2, device: 'Phone', location: 'London, UK', lastActive: '2025-01-05 3:00 PM' },
// //     ];
// //   },
// //   revokeSession: (sessionId: number) => {
// //     console.log(`Revoked session: ${sessionId}`);
// //   },
// // };

// const AccountSettings: React.FC = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailAlerts, setEmailAlerts] = useState(false);
//   const [pushNotifications, setPushNotifications] = useState(false);
//   const [isPublic, setIsPublic] = useState(false);
//   const [isTwoFactorEnabled, setIsTwoFactorEnabled] = useState(false);
//   const [activeSessions, setActiveSessions] = useState<any[]>([]);

//   useEffect(() => {
//     const sessions = updateFields.getActiveSessions();
//     setActiveSessions(sessions);
//   }, []);

//   const handleUpdateLoginCredentials = () => {
//     if (email && password) {
//       updateFields.updateLoginCredentials(email, password);
//       alert('Login credentials updated successfully');
//     } else {
//       alert('Please enter both email and password');
//     }
//   };

//   const handleUpdateNotificationSettings = () => {
//     updateFields.updateNotificationSettings(emailAlerts, pushNotifications);
//     // alert('Notification settings updated');
//   };

//   const handleToggleProfileVisibility = () => {
//     setIsPublic((prev) => !prev);
//     updateFields.toggleProfileVisibility(!isPublic);
//     // alert(`Profile visibility set to ${isPublic ? 'Private' : 'Public'}`);
//   };

//   const handleEnableTwoFactorAuth = () => {
//     setIsTwoFactorEnabled((prev) => !prev);
//     updateFields.enableTwoFactorAuth(!isTwoFactorEnabled);
//     // alert(`Two-factor authentication ${isTwoFactorEnabled ? 'disabled' : 'enabled'}`);
//   };

//   const handleRevokeSession = (sessionId: number) => {
//     updateFields.revokeSession(sessionId);
//     setActiveSessions((prev) => prev.filter((session) => session.id !== sessionId));
//     alert('Session revoked');
//   };

//   return (
//     <div className="container mx-auto p-4 space-y-8 ">
//       {/* Account Preferences */}
//       <section className="bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-lg font-montserrat-regular text-yankees-blue mb-6">Account Preferences</h2>
//         <div className="space-y-6">
//           <div>
//             <label className="block text-md font-montserrat-light text-yankees-blue">Email:</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="mt-2 p-3 w-full border border-gray-300 font-montserrat-light text-yankees-blue rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your email"
//             />
//           </div>
//           <div>
//             <label className="block text-md font-montserrat-light text-yankees-blue">Password:</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="mt-2 p-3 w-full border border-gray-300 font-montserrat-light text-yankees-blue rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your password"
//             />
//           </div>
//           <button
//             onClick={handleUpdateLoginCredentials}
//             className="mt-4 w-full bg-yankees-blue font-montserrat-light text-white py-3 rounded-md hover:bg-yankees-blue transition duration-300 text-sm"
//           >
//             Update Login Credentials
//           </button>
//         </div>
//       </section>

//       {/* Notification Settings */}
//       <section className="bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-lg font-montserrat-regular text-yankees-blue mb-6">Notification Settings</h2>
//         <div className="space-y-6">
//           <div className="flex items-center">
//             <label className="text-md font-montserrat-light text-yankees-blue">Email Alerts:</label>
//             <input
//               type="checkbox"
//               checked={emailAlerts}
//               onChange={(e) => setEmailAlerts(e.target.checked)}
//               className="ml-4 h-5 w-5  border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 font-montserrat-light text-yankees-blue"
//             />
//           </div>
//           <div className="flex items-center">
//             <label className="text-md font-medium text-gray-600">Push Notifications:</label>
//             <input
//               type="checkbox"
//               checked={pushNotifications}
//               onChange={(e) => setPushNotifications(e.target.checked)}
//               className="ml-4 h-5 w-5 font-montserrat-light text-yankees-blue border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <h2 className="text-lg font-montserrat-regular text-yankees-blue mb-6">Security Settings</h2>
//           <div className="flex items-center">
//             <label className="text-md font-montserrat-light text-yankees-blue">Two-Factor Authentication:</label>
//             <input
//               type="checkbox"
//               checked={isTwoFactorEnabled}
//               onChange={handleEnableTwoFactorAuth}
//               className="ml-4 h-5 w-5 text-yankees-blue font-montserrat-light border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Profile Visibility */}
//           {/* <section className="bg-white p-6 rounded-lg shadow-md"> */}
//             <h2 className="text-lg font-montserrat-regular text-yankees-blue mb-6">Profile Visibility</h2>
//             <div className="flex items-center">
//               <label className="text-md font-montserrat-light text-yankees-blue">Public Profile:</label>
//               <input
//                 type="checkbox"
//                 checked={isPublic}
//                 onChange={handleToggleProfileVisibility}
//                 className="ml-4 h-5 w-5 text-yankees-blue font-montserrat-light border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//           {/* </section> */}

//           <button
//             onClick={handleUpdateNotificationSettings}
//             className="mt-4 w-full bg-yankees-blue font-montserrat-light text-white py-3 rounded-md hover:bg-yankees-blue transition duration-300 text-sm"
//           >
//             Save Preferences
//           </button>
//         </div>
//       </section>

      

//       {/* Security Settings */}
//       <section className="bg-white p-6 rounded-lg shadow-md">
        
//         <div className="space-y-6">
//           <div>
//             <h3 className="text-lg font-montserrat-regular text-yankees-blue">Active Sessions</h3>
//             <ul className="space-y-4 mt-4">
//               {activeSessions.map((session) => (
//                 <li key={session.id} className="flex justify-between items-center border-b border-gray-200 pb-4">
//                   <div className="space-y-2">
//                     <p className="text-sm text-yankees-blue font-montserrat-light">{session.device} - {session.location}</p>
//                     <p className="text-xs text-yankees-blue font-montserrat-light">Last Active: {session.lastActive}</p>
//                   </div>
//                   <button
//                     onClick={() => handleRevokeSession(session.id)}
//                     className="bg-madder-lake text-white py-2 px-4 rounded-md hover:bg-madder-lake transition duration-300 text-xs"
//                   >
//                     Revoke
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AccountSettings;






import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { setUserData } from '../store/userSlice';
import { updateUserSettings, UpdateSettingsPayload } from '../api/user';
import { toast } from 'react-toastify';

const AccountSettings: React.FC = () => {
  console.log('AccountSettings component rendered');
  const dispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => state.user);
  console.log('Current user from Redux:', currentUser);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [inAppNotifications, setInAppNotifications] = useState(true);
  const [isPublic, setIsPublic] = useState(true); // Added for profile visibility
  const [isTwoFactorEnabled, setIsTwoFactorEnabled] = useState(false); // Added for 2FA
  const [activeSessions, setActiveSessions] = useState<any[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  console.log('Initial state for form fields:', { email, password, emailAlerts, inAppNotifications, isPublic, isTwoFactorEnabled });

  // Load existing user data from Redux when component mounts or currentUser changes
  useEffect(() => {
    console.log('useEffect triggered for currentUser change.');
    if (currentUser && currentUser.isAuthenticated) {
      console.log('User is authenticated. Populating form fields from Redux.');
      setEmail(currentUser.email || '');
      // Password should generally not be pre-filled from Redux for security reasons
      setPassword(''); // Keep it empty

      console.log('Email set to:', currentUser.email);

      // Set notification settings from Redux
      const currentEmailAlerts = currentUser.notificationsSettings?.email ?? true;
      const currentInAppNotifications = currentUser.notificationsSettings?.inApp ?? true;
      setEmailAlerts(currentEmailAlerts);
      setInAppNotifications(currentInAppNotifications);
      console.log('Notification settings loaded from Redux:', { email: currentEmailAlerts, inApp: currentInAppNotifications });

      // Set profile visibility from Redux
      // setIsPublic(currentUser.isPublic ?? true);
      // console.log('isPublic loaded from Redux:', currentUser.isPublic);

      // Set two-factor authentication status from Redux
      // setIsTwoFactorEnabled(currentUser.twoFactorEnabled ?? false);
      // console.log('isTwoFactorEnabled loaded from Redux:', currentUser.twoFactorEnabled);

      // Fetch active sessions (assuming an API call for this)
      // For now, we'll simulate this as the backend implementation isn't provided for sessions.
      // You'll need to replace this with an actual API call to fetch active sessions.
      const simulatedSessions = [
        { id: 1, device: 'Laptop', location: 'New York, USA', lastActive: '2025-05-29 10:00 AM' },
        { id: 2, device: 'Phone', location: 'Lahore, Pakistan', lastActive: '2025-05-29 09:30 AM' },
      ];
      setActiveSessions(simulatedSessions);
      console.log('Active sessions loaded/simulated:', simulatedSessions);

    } else {
      console.log('User is not authenticated or currentUser object is null/undefined.');
    }
  }, [currentUser]);


  const handleUpdateLoginCredentials = async () => {
    console.log('handleUpdateLoginCredentials called.');
    setIsSubmitting(true);
    console.log('isSubmitting set to true.');
    try {
      const payload: UpdateSettingsPayload = {};
      console.log('Initial payload for login credentials:', payload);

      if (email && email !== currentUser.email) {
        payload.email = email;
        console.log('Email changed. Added to payload:', email);
      } else if (email && email === currentUser.email) {
        console.log('Email not changed. Not adding to payload.');
      } else {
        console.log('Email field is empty. Not adding to payload.');
      }

      if (password) {
        payload.password = password;
        console.log('Password entered. Added to payload (hashed on backend):', '********');
      } else {
        console.log('Password field is empty. Not adding to payload.');
      }

      if (Object.keys(payload).length === 0) {
        toast.info("No login credentials to update.");
        console.log("No login credentials to update. Returning.");
        setIsSubmitting(false);
        return;
      }

      console.log('Sending update login credentials API call with payload:', payload);
      const response = await updateUserSettings(currentUser._id, payload);
      console.log('API response for login credentials update:', response);

      dispatch(setUserData(response.user));
      console.log('Redux user data updated with new login credentials.');
      setPassword('');
      console.log('Password field cleared.');
      toast.success('Login credentials updated successfully!');
      console.log("Login credentials updated successfully!");
    } catch (err: any) {
      toast.error(err.message || 'Failed to update login credentials.');
      console.error("Login update error:", err);
      console.error("Full error object for login update:", err);
    } finally {
      setIsSubmitting(false);
      console.log('isSubmitting set to false.');
    }
  };

  const handleUpdateNotificationSettings = async () => {
    console.log('handleUpdateNotificationSettings called.');
    setIsSubmitting(true);
    console.log('isSubmitting set to true.');
    try {
      const payload: UpdateSettingsPayload = {
        notificationsSettings: {
          email: emailAlerts,
          inApp: inAppNotifications,
        },
      };
      console.log('Sending update notification settings API call with payload:', payload);

      const response = await updateUserSettings(currentUser._id, payload);
      console.log('API response for notification settings update:', response);

      dispatch(setUserData(response.user));
      console.log('Redux user data updated with new notification settings.');
      toast.success('Notification settings updated!');
      console.log("Notification settings updated!");
    } catch (err: any) {
      toast.error(err.message || 'Failed to update notification settings.');
      console.error("Notification update error:", err);
      console.error("Full error object for notification update:", err);
    } finally {
      setIsSubmitting(false);
      console.log('isSubmitting set to false.');
    }
  };

  // const handleToggleProfileVisibility = async () => {
  //   console.log('handleToggleProfileVisibility called. Current isPublic:', isPublic);
  //   const newIsPublic = !isPublic;
  //   setIsPublic(newIsPublic);
  //   console.log('isPublic toggled to:', newIsPublic);

  //   setIsSubmitting(true);
  //   console.log('isSubmitting set to true for profile visibility.');
  //   try {
  //     console.log('Sending update profile visibility API call with newIsPublic:', newIsPublic);
  //     const response = await updateUserSettings(currentUser._id, { isPublic: newIsPublic });
  //     console.log('API response for profile visibility update:', response);
  //     dispatch(setUserData(response.user));
  //     console.log('Redux user data updated with new profile visibility.');
  //     toast.success(`Profile set to ${newIsPublic ? 'Public' : 'Private'}`);
  //     console.log(`Profile set to ${newIsPublic ? 'Public' : 'Private'}`);
  //   } catch (err: any) {
  //     toast.error(err.message || 'Failed to toggle profile visibility.');
  //     console.error("Profile visibility update error:", err);
  //     console.error("Full error object for profile visibility update:", err);
  //     setIsPublic(!newIsPublic); // Revert local state if API call fails
  //     console.log('API call failed, isPublic reverted to:', !newIsPublic);
  //   } finally {
  //     setIsSubmitting(false);
  //     console.log('isSubmitting set to false for profile visibility.');
  //   }
  // };

  // const handleEnableTwoFactorAuth = async () => {
  //   console.log('handleEnableTwoFactorAuth called. Current isTwoFactorEnabled:', isTwoFactorEnabled);
  //   const newIsTwoFactorEnabled = !isTwoFactorEnabled;
  //   setIsTwoFactorEnabled(newIsTwoFactorEnabled);
  //   console.log('isTwoFactorEnabled toggled to:', newIsTwoFactorEnabled);

  //   setIsSubmitting(true);
  //   console.log('isSubmitting set to true for 2FA.');
  //   try {
  //     console.log('Sending update 2FA API call with newIsTwoFactorEnabled:', newIsTwoFactorEnabled);
  //     const response = await updateUserSettings(currentUser._id, { twoFactorEnabled: newIsTwoFactorEnabled });
  //     console.log('API response for 2FA update:', response);
  //     dispatch(setUserData(response.user));
  //     console.log('Redux user data updated with new 2FA status.');
  //     toast.success(`Two-factor authentication ${newIsTwoFactorEnabled ? 'enabled' : 'disabled'}`);
  //     console.log(`Two-factor authentication ${newIsTwoFactorEnabled ? 'enabled' : 'disabled'}`);
  //   } catch (err: any) {
  //     toast.error(err.message || 'Failed to update two-factor authentication.');
  //     console.error("2FA update error:", err);
  //     console.error("Full error object for 2FA update:", err);
  //     setIsTwoFactorEnabled(!newIsTwoFactorEnabled); // Revert local state if API call fails
  //     console.log('API call failed, isTwoFactorEnabled reverted to:', !newIsTwoFactorEnabled);
  //   } finally {
  //     setIsSubmitting(false);
  //     console.log('isSubmitting set to false for 2FA.');
  //   }
  // };


  const handleRevokeSession = async (sessionId: number) => {
    console.log('handleRevokeSession called for sessionId:', sessionId);
    setIsSubmitting(true);
    console.log('isSubmitting set to true for session revoke.');
    try {
      // You'll need a dedicated API endpoint for revoking sessions.
      // For demonstration, we'll simulate a successful API call.
      // Replace with actual API call: await revokeSessionApi(currentUser._id, sessionId);
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API delay
      console.log(`Simulated revocation of session: ${sessionId}`);

      setActiveSessions((prev) => prev.filter((session) => session.id !== sessionId));
      toast.success('Session revoked successfully!');
      console.log('Session revoked successfully!');
    } catch (err: any) {
      toast.error(err.message || 'Failed to revoke session.');
      console.error("Revoke session error:", err);
      console.error("Full error object for session revoke:", err);
    } finally {
      setIsSubmitting(false);
      console.log('isSubmitting set to false for session revoke.');
    }
  };

  console.log('Rendering AccountSettings component. Current form states:', { email, password, emailAlerts, inAppNotifications, isPublic, isTwoFactorEnabled, isSubmitting });

  return (
    <div className="container mx-auto p-4 space-y-8 ">
      {/* Account Preferences */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-montserrat-regular text-yankees-blue mb-6">Account Preferences</h2>
        <div className="space-y-6">
          <div>
            <label className="block text-md font-montserrat-light text-yankees-blue">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                console.log('Email input changed to:', e.target.value);
              }}
              className="mt-2 p-3 w-full border border-gray-300 font-montserrat-light text-yankees-blue rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-md font-montserrat-light text-yankees-blue">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                console.log('Password input changed.');
              }}
              className="mt-2 p-3 w-full border border-gray-300 font-montserrat-light text-yankees-blue rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter new password"
            />
          </div>
          <button
            onClick={handleUpdateLoginCredentials}
            className="mt-4 w-full bg-yankees-blue font-montserrat-light text-white py-3 rounded-md hover:bg-yankees-blue transition duration-300 text-sm"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Updating...' : 'Update Login Credentials'}
          </button>
        </div>
      </section>

      {/* Notification Settings */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-montserrat-regular text-yankees-blue mb-6">Notification Settings</h2>
        <div className="space-y-6">
          <div className="flex items-center">
            <label className="text-md font-montserrat-light text-yankees-blue">Email Alerts:</label>
            <input
              type="checkbox"
              checked={emailAlerts}
              onChange={(e) => {
                setEmailAlerts(e.target.checked);
                console.log('Email Alerts checkbox changed to:', e.target.checked);
              }}
              className="ml-4 h-5 w-5 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 font-montserrat-light text-yankees-blue"
            />
          </div>
          <div className="flex items-center">
            <label className="text-md font-montserrat-light text-yankees-blue">In-App Notifications:</label>
            <input
              type="checkbox"
              checked={inAppNotifications}
              onChange={(e) => {
                setInAppNotifications(e.target.checked);
                console.log('In-App Notifications checkbox changed to:', e.target.checked);
              }}
              className="ml-4 h-5 w-5 font-montserrat-light text-yankees-blue border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={handleUpdateNotificationSettings}
            className="mt-4 w-full bg-yankees-blue font-montserrat-light text-white py-3 rounded-md hover:bg-yankees-blue transition duration-300 text-sm"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Saving...' : 'Save Preferences'}
          </button>
        </div>
      </section>

      {/* Security Settings */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        {/* <h2 className="text-lg font-montserrat-regular text-yankees-blue mb-6">Security Settings</h2>
        <div className="space-y-6">
          <div className="flex items-center">
            <label className="text-md font-montserrat-light text-yankees-blue">Two-Factor Authentication:</label>
            <input
              type="checkbox"
              checked={isTwoFactorEnabled}
              onChange={handleEnableTwoFactorAuth}
              className="ml-4 h-5 w-5 text-yankees-blue font-montserrat-light border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div> */}

          <h3 className="text-lg font-montserrat-regular text-yankees-blue mt-8">Active Sessions</h3>
          <ul className="space-y-4 mt-4">
            {activeSessions.map((session) => (
              <li key={session.id} className="flex justify-between items-center border-b border-gray-200 pb-4">
                <div className="space-y-2">
                  <p className="text-sm text-yankees-blue font-montserrat-light">{session.device} - {session.location}</p>
                  <p className="text-xs text-yankees-blue font-montserrat-light">Last Active: {session.lastActive}</p>
                </div>
                <button
                  onClick={() => handleRevokeSession(session.id)}
                  className="bg-madder-lake text-white py-2 px-4 rounded-md hover:bg-madder-lake transition duration-300 text-xs"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Revoking...' : 'Revoke'}
                </button>
              </li>
            ))}
          </ul>
        {/* </div> */}
      </section>

      {/* Profile Visibility */}
      {/* <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-montserrat-regular text-yankees-blue mb-6">Profile Visibility</h2>
        <div className="flex items-center">
          <label className="text-md font-montserrat-light text-yankees-blue">Public Profile:</label>
          <input
            type="checkbox"
            checked={isPublic}
            onChange={handleToggleProfileVisibility}
            className="ml-4 h-5 w-5 text-yankees-blue font-montserrat-light border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </section> */}
    </div>
  );
};

export default AccountSettings;