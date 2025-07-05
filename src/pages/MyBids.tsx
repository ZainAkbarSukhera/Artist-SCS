// import React, { useState } from 'react';

// interface Bid {
//   id: number;
//   projectName: string;
//   amount: number;
//   status: 'Pending' | 'Approved' | 'Rejected';
// }

// interface Notification {
//   id: number;
//   message: string;
//   type: 'success' | 'error' | 'info';
// }

// const BidManagement: React.FC = () => {
//   const [activeBids, setActiveBids] = useState<Bid[]>([
//     { id: 1, projectName: 'Design Project A', amount: 500, status: 'Pending' },
//     { id: 2, projectName: 'Development Project B', amount: 1500, status: 'Approved' },
//   ]);

//   const [submittedBids, setSubmittedBids] = useState<Bid[]>([
//     { id: 3, projectName: 'Art Project C', amount: 800, status: 'Rejected' },
//   ]);

//   const [notifications, setNotifications] = useState<Notification[]>([
//     { id: 1, message: 'Your bid for "Design Project A" was approved.', type: 'success' },
//     { id: 2, message: 'Revision required for "Art Project C".', type: 'info' },
//   ]);

//   const removeNotification = (id: number) => {
//     setNotifications((prev) => prev.filter((notif) => notif.id !== id));
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-xl font-montserrat-regular text-yankees-blue mb-6">Bid Management</h1>

//       {/* Notifications Section */}
//       <div>
//         <h2 className="text-lg font-montserrat-regular text-yankees-blue mb-4">Notifications</h2>
//         {notifications.length > 0 ? (
//           <div className="space-y-4">
//             {notifications.map((notif) => (
//               <div
//                 key={notif.id}
//                 className={`flex items-center p-4 rounded-lg shadow-md ${
//                   notif.type === 'success'
//                     ? 'bg-green-100 border-green-400 text-green-700'
//                     : notif.type === 'error'
//                     ? 'bg-red-100 border-red-400 text-red-700'
//                     : 'bg-blue-100 border-blue-400 text-blue-700'
//                 }`}
//               >
//                 <span className="flex-1">{notif.message}</span>
//                 <button
//                   className="ml-4 text-gray-500 hover:text-gray-700"
//                   onClick={() => removeNotification(notif.id)}>
//                   Dismiss
//                 </button>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-yankees-blue font-montserrat-light">No notifications available.</p>
//         )}
//       </div>

//       {/* Active Bids Section */}
//       <div className="mb-8 mt-4">
//         <h2 className="text-xl font-semibold mb-4">Active Bids</h2>
//         <div className="grid gap-4 sm:grid-cols-2">
//           {activeBids.map((bid) => (
//             <div
//               key={bid.id}
//               className="border border-gray-300 p-4 rounded-lg shadow-md bg-white"
//             >
//               <h3 className="text-lg font-bold">{bid.projectName}</h3>
//               <p className="text-gray-600">Amount: ${bid.amount}</p>
//               <p
//                 className={`mt-2 text-sm font-medium ${
//                   bid.status === 'Approved'
//                     ? 'text-green-500'
//                     : bid.status === 'Rejected'
//                     ? 'text-red-500'
//                     : 'text-yellow-500'
//                 }`}
//               >
//                 Status: {bid.status}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Submitted Bids Section */}
//       <div className="mb-8">
//         <h2 className="text-xl font-semibold mb-4">Submitted Bids</h2>
//         <div className="grid gap-4 sm:grid-cols-2">
//           {submittedBids.map((bid) => (
//             <div
//               key={bid.id}
//               className="border border-gray-300 p-4 rounded-lg shadow-md bg-white"
//             >
//               <h3 className="text-lg font-bold">{bid.projectName}</h3>
//               <p className="text-gray-600">Amount: ${bid.amount}</p>
//               <p
//                 className={`mt-2 text-sm font-medium ${
//                   bid.status === 'Approved'
//                     ? 'text-green-500'
//                     : bid.status === 'Rejected'
//                     ? 'text-red-500'
//                     : 'text-yellow-500'
//                 }`}
//               >
//                 Status: {bid.status}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

      
//     </div>
//   );
// };

// export default BidManagement;

import React, { useState } from 'react';

interface Bid {
  id: number;
  projectName: string;
  amount: number;
  status: 'Pending' | 'Approved' | 'Rejected';
}

interface Notification {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
}

const BidManagement: React.FC = () => {
  const [bids, setBids] = useState<Bid[]>([
    { id: 1, projectName: 'Calligraphy Initiative', amount: 1500, status: 'Approved' },
    { id: 2, projectName: 'Cultural Heritage Festival', amount: 1800, status: 'Rejected' },
    { id: 3, projectName: 'Visual Arts Residency', amount: 1200, status: 'Pending' },
    { id: 4, projectName: 'Future Forward', amount: 2000, status: 'Approved' },
    { id: 5, projectName: 'Digital Art Innovation Challenge', amount: 300, status: 'Pending' },
    { id: 6, projectName: 'AI-Powered Art Symposium', amount: 2500, status: 'Rejected' },
    { id: 7, projectName: 'Contemporary Sculpture Series', amount: 900, status: 'Pending' },
    { id: 8, projectName: 'Interactive Media Showcase', amount: 1600, status: 'Approved' },
    { id: 9, projectName: 'Street Art Revival', amount: 700, status: 'Rejected' },
    { id: 10, projectName: 'Film and Animation Workshop', amount: 1200, status: 'Approved' },
    { id: 11, projectName: 'Emerging Artists Fair', amount: 1000, status: 'Pending' },
    { id: 12, projectName: 'Abstract Art Reimagination', amount: 1700, status: 'Rejected' },
    { id: 13, projectName: 'Performative Art Exchange', amount: 2100, status: 'Approved' },
    { id: 14, projectName: 'Ceramics and Pottery Revival', amount: 1100, status: 'Rejected' },
    { id: 15, projectName: 'Digital Canvas Exhibition', amount: 1400, status: 'Pending' },
    { id: 16, projectName: 'Virtual Reality Art Journey', amount: 1900, status: 'Approved' },
    { id: 17, projectName: 'Historical Art Restoration', amount: 800, status: 'Rejected' },
    { id: 18, projectName: 'Graffiti Culture Promotion', amount: 1300, status: 'Pending' },
    { id: 19, projectName: 'Youth Creativity Drive', amount: 600, status: 'Approved' },
    { id: 20, projectName: '3D Modeling Competition', amount: 1000, status: 'Rejected' },
  ]);
  

  // const [submittedBids, setSubmittedBids] = useState<Bid[]>([
  //   { id: 6, projectName: 'Art Project C', amount: 800, status: 'Rejected' },
  //   { id: 7, projectName: 'Web Revamp Q', amount: 1700, status: 'Rejected' },
  //   { id: 8, projectName: 'Social Media Campaign R', amount: 1400, status: 'Approved' },
  // ]);

  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, message: 'Your bid for "Calligraphy Initiative" was approved.', type: 'success' },
    { id: 2, message: 'Revision required for "Future Forward".', type: 'info' },
    { id: 3, message: 'New project "Calligraphy & Heritage Initiative" added to your active bids.', type: 'info' },
    { id: 4, message: 'Your bid for "Sculptural Art Program" was rejected.', type: 'error' },
  ]);

  const removeNotification = (id: number) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
  };

   // Active bids: Only "Pending" status
   const activeBids = bids.filter((bid) => bid.status === 'Pending');

   // Submitted bids: Includes all bids
   const submittedBids = bids;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-xl font-montserrat-regular text-yankees-blue mb-6">Bid Management</h1>

      {/* Notifications Section */}
      <div className="mb-8">
        <h2 className="text-lg font-montserrat-regular text-yankees-blue mb-4">Notifications</h2>
        {notifications.length > 0 ? (
          <div className="space-y-4">
            {notifications.map((notif) => (
              <div
                key={notif.id}
                className={`flex font-montserrat-light items-center p-4 rounded-lg shadow-md ${
                  notif.type === 'success'
                    ? 'bg-green-50 border-l-4 border-green-400 text-green-700'
                    : notif.type === 'error'
                    ? 'bg-red-50 border-l-4 border-red-400 text-red-700'
                    : 'bg-blue-50 border-l-4 border-blue-400 text-blue-700'
                }`}
              >
                <span className="flex-1 font-montserrat-regular">{notif.message}</span>
                <button
                  className="ml-4 font-montserrat-light text-yankees-blue hover:text-gray-700"
                  onClick={() => removeNotification(notif.id)}
                >
                  Dismiss
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-yankees-blue font-montserrat-light">No notifications available.</p>
        )}
      </div>

    {/* Active Bids Section */}
    <div className="mb-8">
        <h2 className="text-lg font-montserrat-regular text-yankees-blue mb-4">Active Bids</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activeBids.map((bid) => (
            <div
              key={bid.id}
              className="border border-gray-300 p-4 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-montserrat-regular text-yankees-blue">{bid.projectName}</h3>
              <p className="text-yankees-blue font-montserrat-light">Amount: SAR {bid.amount}</p><br/>
              <span className='font-montserrat-regular text-yankees-blue'>Status: </span>
              <span
                className={`mt-2 text-sm font-montserrat-regular ${
                  bid.status === 'Approved'
                    ? 'text-green-500'
                    : bid.status === 'Rejected'
                    ? 'text-red-500'
                    : 'text-yellow-500'
                }`}
              >
                 {bid.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Submitted Bids Section */}
      <div>
        <h2 className="text-lg font-montserrat-regular text-yankees-blue mb-4">Submitted Bids</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {submittedBids.map((bid) => (
            <div
              key={bid.id}
              className="border border-gray-300 p-4 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-montserrat-regular text-yankees-blue">{bid.projectName}</h3>
              <p className="text-yankees-blue font-montserrat-light">Amount: SAR {bid.amount}</p><br/>
              <span className='font-montserrat-regular text-yankees-blue'>Status: </span>
              <span
                className={`mt-2 text-sm font-montserrat-regular ${
                  bid.status === 'Approved'
                    ? 'text-green-500'
                    : bid.status === 'Rejected'
                    ? 'text-red-500'
                    : 'text-yellow-500'
                }`}
              >
                 {bid.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BidManagement;
