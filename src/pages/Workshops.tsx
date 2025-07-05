// import React, { useState } from 'react';

// interface Workshop {
//   id: number;
//   title: string;
//   description: string;
//   date: string;
//   time: string;
//   location: string;
//   attendees: Attendee[];
// }

// interface Attendee {
//   id: number;
//   name: string;
//   email: string;
//   engaged: boolean;
// }

// interface Certificate {
//   id: number;
//   attendeeName: string;
//   fileName: string;
// }

// const Workshops: React.FC = () => {
//   const [workshops, setWorkshops] = useState<Workshop[]>([]);
//   const [newWorkshop, setNewWorkshop] = useState<Partial<Workshop>>({});
//   const [certificates, setCertificates] = useState<Certificate[]>([]);
//   const [attendeeName, setAttendeeName] = useState('');
//   const [attendeeEmail, setAttendeeEmail] = useState('');
//   const [selectedWorkshop, setSelectedWorkshop] = useState<number | null>(null);

//   // Handle workshop field updates
//   const handleWorkshopChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setNewWorkshop({ ...newWorkshop, [name]: value });
//   };

//   // Add a new workshop
//   const addWorkshop = () => {
//     if (newWorkshop.title && newWorkshop.description && newWorkshop.date && newWorkshop.time && newWorkshop.location) {
//       setWorkshops([
//         ...workshops,
//         {
//           id: workshops.length + 1,
//           ...newWorkshop,
//           attendees: [],
//         } as Workshop,
//       ]);
//       setNewWorkshop({});
//     } else {
//       alert('Please fill out all fields!');
//     }
//   };

//   // Register a new attendee
//   const registerAttendee = (workshopId: number) => {
//     if (attendeeName && attendeeEmail) {
//       setWorkshops((prevWorkshops) =>
//         prevWorkshops.map((workshop) =>
//           workshop.id === workshopId
//             ? {
//                 ...workshop,
//                 attendees: [
//                   ...workshop.attendees,
//                   {
//                     id: workshop.attendees.length + 1,
//                     name: attendeeName,
//                     email: attendeeEmail,
//                     engaged: false,
//                   },
//                 ],
//               }
//             : workshop
//         )
//       );
//       setAttendeeName('');
//       setAttendeeEmail('');
//     } else {
//       alert('Please fill out attendee details!');
//     }
//   };

//   // Toggle engagement status
//   const toggleEngagement = (workshopId: number, attendeeId: number) => {
//     setWorkshops((prevWorkshops) =>
//       prevWorkshops.map((workshop) =>
//         workshop.id === workshopId
//           ? {
//               ...workshop,
//               attendees: workshop.attendees.map((attendee) =>
//                 attendee.id === attendeeId
//                   ? { ...attendee, engaged: !attendee.engaged }
//                   : attendee
//               ),
//             }
//           : workshop
//       )
//     );
//   };

//   return (
//     <div className="container mx-auto p-6 space-y-8">
//       <h1 className="text-3xl font-bold mb-6">Workshop Management</h1>

//       {/* Workshop Listings */}
//       <div>
//         <h2 className="text-2xl font-semibold mb-4">Create a Workshop</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input
//             type="text"
//             name="title"
//             placeholder="Workshop Title"
//             value={newWorkshop.title || ''}
//             onChange={handleWorkshopChange}
//             className="form-input border border-gray-300 rounded-md p-2 w-full"
//           />
//           <input
//             type="text"
//             name="location"
//             placeholder="Location"
//             value={newWorkshop.location || ''}
//             onChange={handleWorkshopChange}
//             className="form-input border border-gray-300 rounded-md p-2 w-full"
//           />
//           <input
//             type="date"
//             name="date"
//             value={newWorkshop.date || ''}
//             onChange={handleWorkshopChange}
//             className="form-input border border-gray-300 rounded-md p-2 w-full"
//           />
//           <input
//             type="time"
//             name="time"
//             value={newWorkshop.time || ''}
//             onChange={handleWorkshopChange}
//             className="form-input border border-gray-300 rounded-md p-2 w-full"
//           />
//           <textarea
//             name="description"
//             placeholder="Workshop Description"
//             value={newWorkshop.description || ''}
//             onChange={handleWorkshopChange}
//             className="form-input border border-gray-300 rounded-md p-2 w-full col-span-1 md:col-span-2"
//           ></textarea>
//         </div>
//         <button
//           onClick={addWorkshop}
//           className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
//         >
//           Add Workshop
//         </button>
//       </div>

//       {/* Workshop Details and Progress */}
//       <div>
//         <h2 className="text-2xl font-semibold mb-4">Workshop Listings</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {workshops.map((workshop) => (
//             <div
//               key={workshop.id}
//               className="border border-gray-300 p-4 rounded-md shadow-md bg-white"
//             >
//               <h3 className="text-lg font-bold">{workshop.title}</h3>
//               <p className="text-gray-600">{workshop.description}</p>
//               <p className="text-sm text-gray-500">
//                 {workshop.date} at {workshop.time}
//               </p>
//               <p className="text-sm text-gray-500">Location: {workshop.location}</p>
//               <p className="text-sm text-gray-700 font-medium mt-2">
//                 Attendees: {workshop.attendees.length}
//               </p>

//               {/* Register Attendees */}
//               <div className="mt-4">
//                 <h4 className="text-md font-semibold">Register Attendee</h4>
//                 <input
//                   type="text"
//                   placeholder="Attendee Name"
//                   value={attendeeName}
//                   onChange={(e) => setAttendeeName(e.target.value)}
//                   className="form-input border border-gray-300 rounded-md p-2 w-full mb-2"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Attendee Email"
//                   value={attendeeEmail}
//                   onChange={(e) => setAttendeeEmail(e.target.value)}
//                   className="form-input border border-gray-300 rounded-md p-2 w-full mb-2"
//                 />
//                 <button
//                   onClick={() => registerAttendee(workshop.id)}
//                   className="bg-green-500 text-white py-1 px-4 rounded-md hover:bg-green-600"
//                 >
//                   Add Attendee
//                 </button>
//               </div>

//               {/* Attendee List */}
//               <div className="mt-4">
//                 <h4 className="text-md font-semibold">Attendee List</h4>
//                 <ul className="space-y-2">
//                   {workshop.attendees.map((attendee) => (
//                     <li
//                       key={attendee.id}
//                       className="flex justify-between items-center bg-gray-100 p-2 rounded-md"
//                     >
//                       <span>
//                         {attendee.name} ({attendee.email})
//                       </span>
//                       <button
//                         onClick={() => toggleEngagement(workshop.id, attendee.id)}
//                         className={`py-1 px-3 rounded-md ${
//                           attendee.engaged
//                             ? 'bg-blue-500 text-white'
//                             : 'bg-gray-300 text-black'
//                         }`}
//                       >
//                         {attendee.engaged ? 'Engaged' : 'Mark Engaged'}
//                       </button>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Workshops;

// import React, { useState } from 'react';

// interface Workshop {
//   id: number;
//   title: string;
//   description: string;
//   date: string;
//   time: string;
//   location: string;
//   attendees: number;
// }

// interface Certificate {
//   id: number;
//   attendeeName: string;
//   fileName: string;
// }

// const Workshops: React.FC = () => {
//   const [workshops, setWorkshops] = useState<Workshop[]>([]);
//   const [newWorkshop, setNewWorkshop] = useState<Partial<Workshop>>({});
//   const [certificates, setCertificates] = useState<Certificate[]>([]);

//   const handleWorkshopChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setNewWorkshop({ ...newWorkshop, [name]: value });
//   };

//   const addWorkshop = () => {
//     if (newWorkshop.title && newWorkshop.description && newWorkshop.date && newWorkshop.time && newWorkshop.location) {
//       setWorkshops([
//         ...workshops,
//         {
//           id: workshops.length + 1,
//           ...newWorkshop,
//           attendees: 0,
//         } as Workshop,
//       ]);
//       setNewWorkshop({});
//     } else {
//       alert('Please fill out all fields!');
//     }
//   };

//   const uploadCertificate = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       const file = e.target.files[0];
//       const attendeeName = prompt('Enter attendee name:');
//       if (attendeeName && file) {
//         setCertificates([
//           ...certificates,
//           { id: certificates.length + 1, attendeeName, fileName: file.name },
//         ]);
//       }
//     }
//   };

//   return (
//     <div className="container mx-auto p-6 space-y-8">
//       <h1 className="text-3xl font-bold mb-6">Workshop Management</h1>

//       {/* Workshop Listings */}
//       <div>
//         <h2 className="text-2xl font-semibold mb-4">Create a Workshop</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input
//             type="text"
//             name="title"
//             placeholder="Workshop Title"
//             value={newWorkshop.title || ''}
//             onChange={handleWorkshopChange}
//             className="form-input border border-gray-300 rounded-md p-2 w-full"
//           />
//           <input
//             type="text"
//             name="location"
//             placeholder="Location"
//             value={newWorkshop.location || ''}
//             onChange={handleWorkshopChange}
//             className="form-input border border-gray-300 rounded-md p-2 w-full"
//           />
//           <input
//             type="date"
//             name="date"
//             value={newWorkshop.date || ''}
//             onChange={handleWorkshopChange}
//             className="form-input border border-gray-300 rounded-md p-2 w-full"
//           />
//           <input
//             type="time"
//             name="time"
//             value={newWorkshop.time || ''}
//             onChange={handleWorkshopChange}
//             className="form-input border border-gray-300 rounded-md p-2 w-full"
//           />
//           <textarea
//             name="description"
//             placeholder="Workshop Description"
//             value={newWorkshop.description || ''}
//             onChange={handleWorkshopChange}
//             className="form-input border border-gray-300 rounded-md p-2 w-full col-span-1 md:col-span-2"
//           ></textarea>
//         </div>
//         <button
//           onClick={addWorkshop}
//           className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
//         >
//           Add Workshop
//         </button>
//       </div>

//       {/* Display Workshops */}
//       <div>
//         <h2 className="text-2xl font-semibold mb-4">Workshop Listings</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {workshops.map((workshop) => (
//             <div
//               key={workshop.id}
//               className="border border-gray-300 p-4 rounded-md shadow-md bg-white"
//             >
//               <h3 className="text-lg font-bold">{workshop.title}</h3>
//               <p className="text-gray-600">{workshop.description}</p>
//               <p className="text-sm text-gray-500">
//                 {workshop.date} at {workshop.time}
//               </p>
//               <p className="text-sm text-gray-500">Location: {workshop.location}</p>
//               <p className="text-sm text-gray-700 font-medium mt-2">
//                 Attendees: {workshop.attendees}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Upload Certificates */}
//       <div>
//         <h2 className="text-2xl font-semibold mb-4">Upload Certificates</h2>
//         <input
//           type="file"
//           onChange={uploadCertificate}
//           className="form-input border border-gray-300 rounded-md p-2 w-full"
//         />
//         <ul className="mt-4 space-y-2">
//           {certificates.map((certificate) => (
//             <li
//               key={certificate.id}
//               className="flex justify-between items-center bg-gray-100 p-2 rounded-md shadow-md"
//             >
//               <span>{certificate.attendeeName} - {certificate.fileName}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Workshops;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// import React, { useState } from 'react';

// // interface Workshop {
// //   id: number;
// //   title: string;
// //   description: string;
// //   date: string;
// //   time: string;
// //   location: string;
// //   attendees: Attendee[];
// // }

// interface Workshop {
//   title: string;
//   description: string;
//   location: string;
//   date: string;
//   time: string;
//   category: string;
//   skills: string; // Or string[] if multi-select
//   skillLevel: string;
//   workshopType: string;
//   duration: string; // Changed to string to accommodate flexible inputs like "2 hours", "3 days"
//   language: string;
//   certifications: string; // Or string[] if multi-select
//   budget: string;
//   priceRange: string;
//   workshopMode: string; // New field for "online", "physical", "hybrid"
//   instructor: string; // New field for instructor's name
// }


// interface Attendee {
//   name: string;
//   status: 'Registered' | 'Cancelled' | 'Waiting for Vacant Seat';
// }

// interface Certificate {
//   id: number;
//   attendeeName: string;
//   workshopName: string;
//   fileName: string;
// }

// const Workshops: React.FC = () => {
//   const [workshops, setWorkshops] = useState<Workshop[]>([]);
//   const [newWorkshop, setNewWorkshop] = useState<Partial<Workshop>>({
//     title: '',
//     description: '',
//     date: '',
//     time: '',
//     location: '',
//   });
//   const [certificates, setCertificates] = useState<Certificate[]>([]);
  
//   // Manage 'viewAll' for each workshop
//   const [viewAllState, setViewAllState] = useState<{ [key: number]: boolean }>({});

//   const handleWorkshopChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setNewWorkshop({ ...newWorkshop, [name]: value });
//   };

//   const addWorkshop = () => {
//     if (newWorkshop.title && newWorkshop.description && newWorkshop.date && newWorkshop.time && newWorkshop.location) {
//       setWorkshops([
//         ...workshops,
//         {
//           id: workshops.length + 1,
//           ...newWorkshop,
//           attendees: [],
//         } as Workshop,
//       ]);
//       setNewWorkshop({
//         title: '',
//         description: '',
//         date: '',
//         time: '',
//         location: '',
//       });
//     } else {
//       alert('Please fill out all fields!');
//     }
//   };

//   // const uploadCertificate = (e: React.ChangeEvent<HTMLInputElement>) => {
//   //   if (e.target.files) {
//   //     const file = e.target.files[0];
//   //     const attendeeName = prompt('Enter attendee name:');
//   //     const workshopName = prompt('Enter workshop name:');
//   //     if (attendeeName && file) {
//   //       setCertificates([
//   //         ...certificates,
//   //         { id: certificates.length + 1, attendeeName, workshopName, fileName: file.name },
//   //       ]);
//   //     }
//   //   }
//   // };

//   const uploadCertificate = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       const file = e.target.files[0];
//       const attendeeName = prompt("Enter attendee name:");
//       const workshopName = prompt("Enter workshop name:") || "Unknown Workshop"; // ✅ Default value
//       if (attendeeName && file) {
//         setCertificates([
//           ...certificates,
//           { id: certificates.length + 1, attendeeName, workshopName, fileName: file.name },
//         ]);
//       }
//     }
//   };
  

//   const sampleWorkshops: Workshop[] = [
//     {
//       id: 1,
//       title: 'Creative Abstract Painting Techniques',
//       description: 'Explore unique abstract painting methods to unleash your creativity.',
//       date: '2025-02-12',
//       time: '11:00 AM',
//       location: 'Art Hub Studio, Jeddah',
//       attendees: [
//         { name: 'Zara', status: 'Registered' },
//         { name: 'Ali', status: 'Registered' },
//         { name: 'Sara', status: 'Waiting for Vacant Seat' },
//         { name: 'Fahad', status: 'Registered' },
//         { name: 'Maha', status: 'Cancelled' },
//         { name: 'Khalid', status: 'Registered' },
//       ],
//     },
//     {
//       id: 2,
//       title: 'Modern Art and Cultural Influence',
//       description: 'Dive into the connection between modern art and cultural identity.',
//       date: '2025-03-05',
//       time: '02:00 PM',
//       location: 'Kingdom Art Center, Riyadh',
//       attendees: [
//         { name: 'Amal', status: 'Registered' },
//         { name: 'Yousef', status: 'Registered' },
//         { name: 'Layla', status: 'Waiting for Vacant Seat' },
//         { name: 'Hassan', status: 'Cancelled' },
//         { name: 'Fatima', status: 'Registered' },
//       ],
//     },
//     {
//       id: 3,
//       title: 'Masterclass: Large-Scale Art Installations',
//       description: 'Learn how to conceptualize and execute impactful large-scale installations.',
//       date: '2025-04-20',
//       time: '09:00 AM',
//       location: 'Abdullah Qandeel Art Studio, Jeddah',
//       attendees: [
//         { name: 'Noura', status: 'Registered' },
//         { name: 'Omar', status: 'Registered' },
//         { name: 'Lina', status: 'Cancelled' },
//         { name: 'Tariq', status: 'Registered' },
//         { name: 'Reema', status: 'Waiting for Vacant Seat' },
//       ],
//     },
//     {
//       id: 4,
//       title: 'The Evolution of Contemporary Art in Saudi Arabia',
//       description: 'Understand the journey of contemporary art and its evolution within the Kingdom.',
//       date: '2025-05-18',
//       time: '04:00 PM',
//       location: 'Cultural Heritage Gallery, Riyadh',
//       attendees: [
//         { name: 'Samira', status: 'Registered' },
//         { name: 'Ahmed', status: 'Waiting for Vacant Seat' },
//         { name: 'Salman', status: 'Cancelled' },
//         { name: 'Aisha', status: 'Registered' },
//         { name: 'Adnan', status: 'Registered' },
//       ],
//     },
//     {
//       id: 5,
//       title: 'Expressive Art for Social Change',
//       description: 'Explore how art can be used as a powerful tool to drive social change.',
//       date: '2025-06-10',
//       time: '01:00 PM',
//       location: 'Vision 2030 Art Pavilion, Riyadh',
//       attendees: [
//         { name: 'Huda', status: 'Registered' },
//         { name: 'Nabil', status: 'Registered' },
//         { name: 'Mona', status: 'Cancelled' },
//         { name: 'Saad', status: 'Registered' },
//         { name: 'Dalia', status: 'Waiting for Vacant Seat' },
//       ],
//     },
//   ];

//   React.useEffect(() => {
//     setWorkshops(sampleWorkshops);
//   }, []);

//   const toggleViewAll = (workshopId: number) => {
//     setViewAllState(prevState => ({
//       ...prevState,
//       [workshopId]: !prevState[workshopId],
//     }));
//   };

//   return (
//     <div className="container mx-auto p-6 space-y-8">
//       <h1 className="text-xl font-montserrat-regular text-yankees-blue mb-6">Workshop Management</h1>

//       {/* Create a Workshop */}
//       <div>
//         <h2 className="text-lg font-montserrat-regular text-yankees-blue mb-4">Create a Workshop</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input
//             type="text"
//             name="title"
//             placeholder="Workshop Title"
//             value={newWorkshop.title || ''}
//             onChange={handleWorkshopChange}
//             className="form-input border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
//           />
//           <input
//             type="text"
//             name="location"
//             placeholder="Location"
//             value={newWorkshop.location || ''}
//             onChange={handleWorkshopChange}
//             className="form-input border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
//           />
//           <input
//             type="date"
//             name="date"
//             value={newWorkshop.date || ''}
//             onChange={handleWorkshopChange}
//             className="form-input border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
//           />
//           <input
//             type="time"
//             name="time"
//             value={newWorkshop.time || ''}
//             onChange={handleWorkshopChange}
//             className="form-input border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
//           />
//           <textarea
//             name="description"
//             placeholder="Workshop Description"
//             value={newWorkshop.description || ''}
//             onChange={handleWorkshopChange}
//             className="form-input border border-gray-300 rounded-md p-2 w-full col-span-1 md:col-span-2 font-montserrat-light text-yankees-blue"
//           ></textarea>
//         </div>
//         <button
//           onClick={addWorkshop}
//           className="mt-4 bg-yankees-blue text-white py-2 px-6 rounded-md hover:bg-yankees-blue font-montserrat-light"
//         >
//           Add Workshop
//         </button>
//       </div>

//       {/* Display Workshops */}
//       <div>
//         <h2 className="text-lg font-montserrat-regular text-yankees-blue mb-4">Workshop Listings</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {workshops.map((workshop) => (
//             <div
//               key={workshop.id}
//               className="border border-gray-300 p-4 rounded-md shadow-md bg-white"
//             >
//               <h3 className="text-lg font-montserrat-regular text-yankees-blue ">{workshop.title}</h3>
//               <p className="text-yankees-blue font-montserrat-light">{workshop.description}</p>
//               <p className="text-sm text-yankees-blue font-montserrat-light">
//                 {workshop.date} at {workshop.time}
//               </p>
//               <p className="text-sm text-yankees-blue font-montserrat-light">Location: {workshop.location}</p>
//               <h4 className="text-sm text-yankees-blue font-montserrat-regular mt-4">Attendees:</h4>
//               <ul className="space-y-2">
//                 {workshop.attendees.slice(0, 5).map((attendee, index) => (
//                   <li
//                     key={index}
//                     className="flex justify-between items-center bg-gray-100 p-2 rounded-md shadow-md text-yankees-blue font-montserrat-light"
//                   >
//                     <span>{attendee.name}</span>
//                     <span
//                       className={`text-sm  font-montserrat-light ${
//                         attendee.status === 'Registered'
//                           ? 'text-green-600'
//                           : attendee.status === 'Cancelled'
//                           ? 'text-red-600'
//                           : 'text-yellow-600'
//                       }`}
//                     >
//                       {attendee.status}
//                     </span>
//                   </li>
//                 ))}
//               </ul>
//               {viewAllState[workshop.id] && workshop.attendees.slice(5).map((attendee, index) => (
//                 <li
//                   key={index}
//                   className="flex justify-between items-center bg-gray-100 p-2 rounded-md shadow-md text-yankees-blue font-montserrat-light"
//                 >
//                   <span>{attendee.name}</span>
//                   <span
//                     className={`text-sm  font-montserrat-light ${
//                       attendee.status === 'Registered'
//                         ? 'text-green-600'
//                         : attendee.status === 'Cancelled'
//                         ? 'text-red-600'
//                         : 'text-yellow-600'
//                     }`}
//                   >
//                     {attendee.status}
//                   </span>
//                 </li>
//               ))}
//               {workshop.attendees.length > 5 && (
//                 <button
//                   onClick={() => toggleViewAll(workshop.id)}
//                   className="mt-4 text-yankees-blue font-montserrat-light hover:underline"
//                 >
//                   {viewAllState[workshop.id] ? 'View Less' : 'View All'}
//                 </button>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Upload Certificates */}
//       <div>
//         <h2 className="text-lg text-yankees-blue font-montserrat-regular mb-4">Upload Certificates</h2>
//         <input
//           type="file"
//           onChange={uploadCertificate}
//           className="form-input border border-gray-300 rounded-md p-2 w-full text-yankees-blue font-montserrat-light"
//         />
//         <ul className="mt-4 space-y-2">
//           {certificates.map((certificate) => (
//             <li
//               key={certificate.id}
//               className="flex justify-between items-center bg-gray-100 p-2 rounded-md shadow-md text-yankees-blue font-montserrat-light"
//             >
//               <span>{certificate.attendeeName} - {certificate.fileName}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Workshops;


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// import React, { useState, useEffect } from 'react';

// // Define the Workshop interface with all new fields
// interface Workshop {
//   id: number; // Added back for managing existing workshops and sample data
//   title: string;
//   description: string;
//   location: string;
//   date: string;
//   time: string;
//   category: string;
//   skills: string; // Or string[] if multi-select
//   skillLevel: string;
//   workshopType: string;
//   duration: string;
//   language: string;
//   certifications: string; // Or string[] if multi-select
//   budget: string;
//   priceRange: string;
//   workshopMode: string; // "online", "physical", "hybrid"
//   instructor: string;
//   attendees: Attendee[]; // Retained for displaying workshop attendees
// }

// interface Attendee {
//   name: string;
//   status: 'Registered' | 'Cancelled' | 'Waiting for Vacant Seat';
// }

// interface Certificate {
//   id: number;
//   attendeeName: string;
//   workshopName: string;
//   fileName: string;
// }

// const Workshops: React.FC = () => {
//   // Static options for dropdowns
//    const categoryOptions = [
//     "Calligraphy", "Drawing & Illustration", "Graphics", "Mixed Media",
//     "Painting", "Photography", "Printmaking", "Sculpture"
//   ];
//   const skillLevelOptions = [
//     "Beginner (0-2 years)", "Intermediate (3-5 years)", "Advanced (6-10 years)", "Professional (11+ years)",
//   ];
//   const workshopModeOptions = [
//     "In-Person Workshop", "Lecture/Seminar", "Online / Remote", "Hybrid (Online & In-Person)",
//   ];
//   const durationOptions = [
//     "One-Day Workshop", "Two Day Workshop", "Three Day Workshop", "Five Day Workshop",
//   ];
//   const languageOptions = [
//     "English", "Arabic",  "Other"
//   ];
//   const certificationsOptions = [
//     "Certificate of Completion","Professional Accreditation","Nano Certificate","No Certification",
//   ];
//  const locationOptions = [
//     "Riyadh", "Jeddah", "Makkah", "Madina", "Khobar", "Dammam",
//     "Tabuk", "Ta'if", "Abha", "Khamis Mushait", "Buraidah", "Hail"
//   ];
//   const budgetOptions = [
//    "Free", "Under SAR 1,000", "SAR 1,000 - SAR 5,000", "SAR 5,000 - SAR 10,000", "Custom Budget"
//   ];
//   const priceRangeOptions = [
//    "Free", "Under SAR 500", "SAR 500 - SAR 1,000", "SAR 1,000 - SAR 5,000", "Above SAR 5,000",
//   ];
//   // const workshopModeOptions = [
//   //   "Online", "Physical", "Hybrid"
//   // ];

//   const [workshops, setWorkshops] = useState<Workshop[]>([]);
//   // Partial<Workshop> is used here because not all fields are required for initial empty state
//   const [newWorkshop, setNewWorkshop] = useState<Partial<Workshop>>({
//     title: '',
//     description: '',
//     location: '',
//     date: '',
//     time: '',
//     category: '',
//     skills: '',
//     skillLevel: '',
//     duration: '',
//     language: '',
//     certifications: '',
//     budget: '',
//     priceRange: '',
//     workshopMode: '',
//     instructor: '',
//   });
//   const [certificates, setCertificates] = useState<Certificate[]>([]);

//   // Manage 'viewAll' for each workshop
//   const [viewAllState, setViewAllState] = useState<{ [key: number]: boolean }>({});

//   const handleWorkshopChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setNewWorkshop(prev => ({ ...prev, [name]: value }));
//   };

//   const addWorkshop = () => {
//     // Basic validation for essential fields (you can expand this)
//     if (newWorkshop.title && newWorkshop.description && newWorkshop.date && newWorkshop.time && newWorkshop.location && newWorkshop.category && newWorkshop.instructor && newWorkshop.duration && newWorkshop.workshopMode) {
//       setWorkshops([
//         ...workshops,
//         {
//           id: workshops.length > 0 ? Math.max(...workshops.map(w => w.id)) + 1 : 1, // Generate a unique ID
//           attendees: [], // New workshops start with no attendees
//           ...newWorkshop,
//         } as Workshop, // Cast to Workshop after ensuring all properties are present
//       ]);
//       // Reset the form fields
//       setNewWorkshop({
//         title: '',
//         description: '',
//         location: '',
//         date: '',
//         time: '',
//         category: '',
//         skills: '',
//         skillLevel: '',
//         workshopType: '',
//         duration: '',
//         language: '',
//         certifications: '',
//         budget: '',
//         priceRange: '',
//         workshopMode: '',
//         instructor: '',
//       });
//     } else {
//       alert('Please fill out all required fields to create a workshop!');
//     }
//   };

//   const uploadCertificate = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       const file = e.target.files[0];
//       const attendeeName = prompt("Enter attendee name:");
//       const workshopName = prompt("Enter workshop name:") || "Unknown Workshop"; // Default value
//       if (attendeeName && file) {
//         setCertificates([
//           ...certificates,
//           { id: certificates.length + 1, attendeeName, workshopName, fileName: file.name },
//         ]);
//       }
//     }
//   };

//   const sampleWorkshops: Workshop[] = [
//     {
//       id: 1,
//       title: 'Creative Abstract Painting Techniques',
//       description: 'Explore unique abstract painting methods to unleash your creativity.',
//       date: '2025-02-12',
//       time: '11:00 AM',
//       location: 'Art Hub Studio, Jeddah',
//       category: 'Painting',
//       skills: 'Abstract, Acrylics',
//       skillLevel: 'Beginner',
//       workshopType: 'In-person',
//       duration: '3 hours',
//       language: 'English',
//       certifications: 'Certificate of Completion',
//       budget: 'Paid',
//       priceRange: '100 - 300 SAR',
//       workshopMode: 'Physical',
//       instructor: 'Ahmad Al-Riyadh',
//       attendees: [
//         { name: 'Zara', status: 'Registered' },
//         { name: 'Ali', status: 'Registered' },
//         { name: 'Sara', status: 'Waiting for Vacant Seat' },
//         { name: 'Fahad', status: 'Registered' },
//         { name: 'Maha', status: 'Cancelled' },
//         { name: 'Khalid', status: 'Registered' },
//       ],
//     },
//     {
//       id: 2,
//       title: 'Modern Art and Cultural Influence',
//       description: 'Dive into the connection between modern art and cultural identity.',
//       date: '2025-03-05',
//       time: '02:00 PM',
//       location: 'Kingdom Art Center, Riyadh',
//       category: 'Art History',
//       skills: 'Art Analysis, Cultural Studies',
//       skillLevel: 'Intermediate',
//       workshopType: 'Hybrid',
//       duration: '2 hours',
//       language: 'Arabic',
//       certifications: 'No Certificate',
//       budget: 'Free',
//       priceRange: 'Free',
//       workshopMode: 'Hybrid',
//       instructor: 'Dr. Fatima Al-Mansour',
//       attendees: [
//         { name: 'Amal', status: 'Registered' },
//         { name: 'Yousef', status: 'Registered' },
//         { name: 'Layla', status: 'Waiting for Vacant Seat' },
//         { name: 'Hassan', status: 'Cancelled' },
//         { name: 'Fatima', status: 'Registered' },
//       ],
//     },
//     {
//       id: 3,
//       title: 'Masterclass: Large-Scale Art Installations',
//       description: 'Learn how to conceptualize and execute impactful large-scale installations.',
//       date: '2025-04-20',
//       time: '09:00 AM',
//       location: 'Abdullah Qandeel Art Studio, Jeddah',
//       category: 'Sculpture',
//       skills: 'Installation Art, Sculpture Techniques',
//       skillLevel: 'Advanced',
//       workshopType: 'In-person',
//       duration: 'Full Day (8 hours)',
//       language: 'English',
//       certifications: 'Accredited Certificate',
//       budget: 'Paid',
//       priceRange: 'Over 1500 SAR',
//       workshopMode: 'Physical',
//       instructor: 'Abdullah Qandeel',
//       attendees: [
//         { name: 'Noura', status: 'Registered' },
//         { name: 'Omar', status: 'Registered' },
//         { name: 'Lina', status: 'Cancelled' },
//         { name: 'Tariq', status: 'Registered' },
//         { name: 'Reema', status: 'Waiting for Vacant Seat' },
//       ],
//     },
//     {
//       id: 4,
//       title: 'The Evolution of Contemporary Art in Saudi Arabia',
//       description: 'Understand the journey of contemporary art and its evolution within the Kingdom.',
//       date: '2025-05-18',
//       time: '04:00 PM',
//       location: 'Cultural Heritage Gallery, Riyadh',
//       category: 'Art History',
//       skills: 'Contemporary Art, Saudi Art',
//       skillLevel: 'All Levels',
//       workshopType: 'Online',
//       duration: '2 hours',
//       language: 'English',
//       certifications: 'Certificate of Completion',
//       budget: 'Free',
//       priceRange: 'Free',
//       workshopMode: 'Online',
//       instructor: 'Sarah Al-Hamad',
//       attendees: [
//         { name: 'Samira', status: 'Registered' },
//         { name: 'Ahmed', status: 'Waiting for Vacant Seat' },
//         { name: 'Salman', status: 'Cancelled' },
//         { name: 'Aisha', status: 'Registered' },
//         { name: 'Adnan', status: 'Registered' },
//       ],
//     },
//     {
//       id: 5,
//       title: 'Expressive Art for Social Change',
//       description: 'Explore how art can be used as a powerful tool to drive social change.',
//       date: '2025-06-10',
//       time: '01:00 PM',
//       location: 'Vision 2030 Art Pavilion, Riyadh',
//       category: 'Mixed Media',
//       skills: 'Expressive Art, Social Impact',
//       skillLevel: 'Beginner',
//       workshopType: 'In-person',
//       duration: '3 hours',
//       language: 'Arabic',
//       certifications: 'Certificate of Completion',
//       budget: 'Paid',
//       priceRange: '301 - 700 SAR',
//       workshopMode: 'Physical',
//       instructor: 'Majed Al-Otaibi',
//       attendees: [
//         { name: 'Huda', status: 'Registered' },
//         { name: 'Nabil', status: 'Registered' },
//         { name: 'Mona', status: 'Cancelled' },
//         { name: 'Saad', status: 'Registered' },
//         { name: 'Dalia', status: 'Waiting for Vacant Seat' },
//       ],
//     },
//   ];

//   useEffect(() => {
//     setWorkshops(sampleWorkshops);
//   }, []);

//   const toggleViewAll = (workshopId: number) => {
//     setViewAllState(prevState => ({
//       ...prevState,
//       [workshopId]: !prevState[workshopId],
//     }));
//   };

//   return (
//     <div className="container mx-auto p-6 space-y-8">
//       <h1 className="text-xl font-montserrat-regular text-yankees-blue mb-6">Workshop Management</h1>

//       {/* Create a Workshop */}
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-lg font-montserrat-regular text-yankees-blue mb-4">Create a Workshop</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

//           {/* Title Input */}
//           <div>
//             <label htmlFor="title" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">TITLE</label>
//             <input
//               type="text"
//               id="title"
//               name="title"
//               placeholder="Workshop Title"
//               value={newWorkshop.title || ''}
//               onChange={handleWorkshopChange}
//               className="form-input border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
//             />
//           </div>

//           {/* Instructor Input */}
//           <div>
//             <label htmlFor="instructor" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">INSTRUCTOR</label>
//             <input
//               type="text"
//               id="instructor"
//               name="instructor"
//               placeholder="Instructor's Name"
//               value={newWorkshop.instructor || ''}
//               onChange={handleWorkshopChange}
//               className="form-input border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
//             />
//           </div>

//           {/* Date Input */}
//           <div>
//             <label htmlFor="date" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">DATE</label>
//             <input
//               type="date"
//               id="date"
//               name="date"
//               value={newWorkshop.date || ''}
//               onChange={handleWorkshopChange}
//               className="form-input border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
//             />
//           </div>

//           {/* Time Input */}
//           <div>
//             <label htmlFor="time" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">TIME</label>
//             <input
//               type="time"
//               id="time"
//               name="time"
//               value={newWorkshop.time || ''}
//               onChange={handleWorkshopChange}
//               className="form-input border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
//             />
//           </div>

//           {/* Duration Dropdown */}
//           <div>
//             <label htmlFor="duration" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">DURATION</label>
//             <select
//               id="duration"
//               name="duration"
//               value={newWorkshop.duration || ''}
//               onChange={handleWorkshopChange}
//               className="form-select border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
//             >
//               <option value="">Select Duration</option>
//               {durationOptions.map(option => (
//                 <option key={option} value={option}>{option}</option>
//               ))}
//             </select>
//           </div>

//           {/* Workshop Mode Dropdown */}
//           <div>
//             <label htmlFor="workshopMode" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">WORKSHOP MODE</label>
//             <select
//               id="workshopMode"
//               name="workshopMode"
//               value={newWorkshop.workshopMode || ''}
//               onChange={handleWorkshopChange}
//               className="form-select border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
//             >
//               <option value="">Select Mode</option>
//               {workshopModeOptions.map(option => (
//                 <option key={option} value={option}>{option}</option>
//               ))}
//             </select>
//           </div>

//           {/* Category Dropdown */}
//           <div>
//             <label htmlFor="category" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">CATEGORY</label>
//             <select
//               id="category"
//               name="category"
//               value={newWorkshop.category || ''}
//               onChange={handleWorkshopChange}
//               className="form-select border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
//             >
//               <option value="">Select Category</option>
//               {categoryOptions.map(option => (
//                 <option key={option} value={option}>{option}</option>
//               ))}
//             </select>
//           </div>

//           {/* Skills Input (or Multi-select if needed) */}
//           <div>
//             <label htmlFor="skills" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">SKILLS (comma-separated)</label>
//             <input
//               type="text"
//               id="skills"
//               name="skills"
//               placeholder="e.g. Calligraphy, Drawing & Illustration"
//               value={newWorkshop.skills || ''}
//               onChange={handleWorkshopChange}
//               className="form-input border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
//             />
//           </div>

//           {/* Skill Level Dropdown */}
//           <div>
//             <label htmlFor="skillLevel" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">SKILL LEVEL</label>
//             <select
//               id="skillLevel"
//               name="skillLevel"
//               value={newWorkshop.skillLevel || ''}
//               onChange={handleWorkshopChange}
//               className="form-select border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
//             >
//               <option value="">Select Skill Level</option>
//               {skillLevelOptions.map(option => (
//                 <option key={option} value={option}>{option}</option>
//               ))}
//             </select>
//           </div>

//           {/* Workshop Type Dropdown */}
//           {/* <div>
//             <label htmlFor="workshopType" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">WORKSHOP TYPE</label>
//             <select
//               id="workshopType"
//               name="workshopType"
//               value={newWorkshop.workshopType || ''}
//               onChange={handleWorkshopChange}
//               className="form-select border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
//             >
//               <option value="">Select Type</option>
//               {workshopTypeOptions.map(option => (
//                 <option key={option} value={option}>{option}</option>
//               ))}
//             </select>
//           </div> */}

//           {/* Language Dropdown */}
//           <div>
//             <label htmlFor="language" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">LANGUAGE</label>
//             <select
//               id="language"
//               name="language"
//               value={newWorkshop.language || ''}
//               onChange={handleWorkshopChange}
//               className="form-select border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
//             >
//               <option value="">Select Language</option>
//               {languageOptions.map(option => (
//                 <option key={option} value={option}>{option}</option>
//               ))}
//             </select>
//           </div>

//           {/* Certifications Dropdown */}
//           <div>
//             <label htmlFor="certifications" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">CERTIFICATIONS</label>
//             <select
//               id="certifications"
//               name="certifications"
//               value={newWorkshop.certifications || ''}
//               onChange={handleWorkshopChange}
//               className="form-select border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
//             >
//               <option value="">Select Certification</option>
//               {certificationsOptions.map(option => (
//                 <option key={option} value={option}>{option}</option>
//               ))}
//             </select>
//           </div>

//           {/* Location Dropdown */}
//           <div>
//             <label htmlFor="location" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">LOCATION</label>
//             <select
//               id="location"
//               name="location"
//               value={newWorkshop.location || ''}
//               onChange={handleWorkshopChange}
//               className="form-select border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
//             >
//               <option value="">Select Location</option>
//               {locationOptions.map(option => (
//                 <option key={option} value={option}>{option}</option>
//               ))}
//             </select>
//           </div>

//           {/* Budget Dropdown */}
//           <div>
//             <label htmlFor="budget" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">BUDGET</label>
//             <select
//               id="budget"
//               name="budget"
//               value={newWorkshop.budget || ''}
//               onChange={handleWorkshopChange}
//               className="form-select border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
//             >
//               <option value="">Select Budget</option>
//               {budgetOptions.map(option => (
//                 <option key={option} value={option}>{option}</option>
//               ))}
//             </select>
//           </div>

//           {/* Price Range Dropdown */}
//           <div>
//             <label htmlFor="priceRange" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">PRICE RANGE</label>
//             <select
//               id="priceRange"
//               name="priceRange"
//               value={newWorkshop.priceRange || ''}
//               onChange={handleWorkshopChange}
//               className="form-select border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
//             >
//               <option value="">Select Price Range</option>
//               {priceRangeOptions.map(option => (
//                 <option key={option} value={option}>{option}</option>
//               ))}
//             </select>
//           </div>

//           {/* Description Textarea */}
//           <div className="md:col-span-2 lg:col-span-3"> {/* This takes full width on medium screens and up */}
//             <label htmlFor="description" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">DESCRIPTION</label>
//             <textarea
//               id="description"
//               name="description"
//               placeholder="Workshop Description"
//               value={newWorkshop.description || ''}
//               onChange={handleWorkshopChange}
//               className="form-input border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
//               rows={4} // Added rows for better visibility
//             ></textarea>
//           </div>

//         </div>
//         <button
//           onClick={addWorkshop}
//           className="mt-4 bg-yankees-blue text-white py-2 px-6 rounded-md hover:bg-yankees-blue font-montserrat-light"
//         >
//           Add Workshop
//         </button>
//       </div>

//       {/* Display Workshops */}
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-lg font-montserrat-regular text-yankees-blue mb-4">Workshop Listings</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {workshops.map((workshop) => (
//             <div
//               key={workshop.id}
//               className="border border-gray-300 p-4 rounded-md shadow-md bg-white"
//             >
//               <h3 className="text-lg font-montserrat-regular text-yankees-blue ">{workshop.title}</h3>
//               <p className="text-yankees-blue font-montserrat-light">**Instructor:** {workshop.instructor}</p>
//               <p className="text-yankees-blue font-montserrat-light">**Category:** {workshop.category}</p>
//               <p className="text-yankees-blue font-montserrat-light">**Skill Level:** {workshop.skillLevel}</p>
//               <p className="text-yankees-blue font-montserrat-light">**Workshop Type:** {workshop.workshopType}</p>
//               <p className="text-yankees-blue font-montserrat-light">**Duration:** {workshop.duration}</p>
//               <p className="text-yankees-blue font-montserrat-light">**Language:** {workshop.language}</p>
//               <p className="text-yankees-blue font-montserrat-light">**Certifications:** {workshop.certifications}</p>
//               <p className="text-yankees-blue font-montserrat-light">**Budget:** {workshop.budget}</p>
//               <p className="text-yankees-blue font-montserrat-light">**Price Range:** {workshop.priceRange}</p>
//               <p className="text-yankees-blue font-montserrat-light">{workshop.description}</p>
//               <p className="text-sm text-yankees-blue font-montserrat-light">
//                 {workshop.date} at {workshop.time}
//               </p>
//               <p className="text-sm text-yankees-blue font-montserrat-light">Location: {workshop.location} ({workshop.workshopMode})</p>
//               <h4 className="text-sm text-yankees-blue font-montserrat-regular mt-4">Attendees:</h4>
//               <ul className="space-y-2">
//                 {workshop.attendees.slice(0, 5).map((attendee, index) => (
//                   <li
//                     key={index}
//                     className="flex justify-between items-center bg-gray-100 p-2 rounded-md shadow-md text-yankees-blue font-montserrat-light"
//                   >
//                     <span>{attendee.name}</span>
//                     <span
//                       className={`text-sm font-montserrat-light ${
//                         attendee.status === 'Registered'
//                           ? 'text-green-600'
//                           : attendee.status === 'Cancelled'
//                           ? 'text-red-600'
//                           : 'text-yellow-600'
//                       }`}
//                     >
//                       {attendee.status}
//                     </span>
//                   </li>
//                 ))}
//               </ul>
//               {/* Display remaining attendees only if viewAllState[workshop.id] is true */}
//               {viewAllState[workshop.id] && workshop.attendees.slice(5).map((attendee, index) => (
//                 <li
//                   key={`extra-${index}`} // Use a unique key for extra attendees
//                   className="flex justify-between items-center bg-gray-100 p-2 rounded-md shadow-md text-yankees-blue font-montserrat-light"
//                 >
//                   <span>{attendee.name}</span>
//                   <span
//                     className={`text-sm font-montserrat-light ${
//                       attendee.status === 'Registered'
//                         ? 'text-green-600'
//                         : attendee.status === 'Cancelled'
//                         ? 'text-red-600'
//                         : 'text-yellow-600'
//                     }`}
//                   >
//                     {attendee.status}
//                   </span>
//                 </li>
//               ))}
//               {workshop.attendees.length > 5 && (
//                 <button
//                   onClick={() => toggleViewAll(workshop.id)}
//                   className="mt-4 text-yankees-blue font-montserrat-light hover:underline"
//                 >
//                   {viewAllState[workshop.id] ? 'View Less' : 'View All'}
//                 </button>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       ---

//       {/* Upload Certificates */}
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-lg text-yankees-blue font-montserrat-regular mb-4">Upload Certificates</h2>
//         <input
//           type="file"
//           onChange={uploadCertificate}
//           className="form-input border border-gray-300 rounded-md p-2 w-full text-yankees-blue font-montserrat-light"
//         />
//         <ul className="mt-4 space-y-2">
//           {certificates.map((certificate) => (
//             <li
//               key={certificate.id}
//               className="flex justify-between items-center bg-gray-100 p-2 rounded-md shadow-md text-yankees-blue font-montserrat-light"
//             >
//               <span>{certificate.attendeeName} - {certificate.fileName}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Workshops;





///////////////////////////////////////////////

// src/components/Workshops.tsx (or its actual path)

// import React, { useState, useEffect } from 'react';
// import { createWorkshopApi, WorkshopPayload } from '../api/workshop'; // Adjust path as necessary
// import { AxiosResponse } from 'axios'; // Import AxiosResponse for type checking
// import { useSelector } from 'react-redux'; // Import useSelector to access Redux state
// import { UserState } from '../store/userSlice';

// // Define your Redux state interface (adjust this based on your actual Redux store structure)
// // interface RootState {
// //   auth: {
// //     userId: string | null; // Assuming userId is stored here
// //     token: string | null; // Assuming token is stored here
// //     // userName: string | null; // Assuming user's name is also stored for display
// //   };
// //   // ... other slices of your Redux state
// // }

// // Define the Workshop interface for local state/display
// interface Workshop {
//   id: string; // Changed to string as backend _id is a string
//   title: string;
//   description: string;
//   location: string;
//   date: string;
//   time: string;
//   category: string;
//   skills: string;
//   skillLevel: string;
//   // workshopType: string; // Used for display, maps from workshopMode
//   duration: string;
//   language: string;
//   certifications: string;
//   budget: string;
//   priceRange: string;
//   workshopMode: string;
//   // instructor: string; // This will now represent the instructor's name for display
//   attendees: Attendee[];
// }

// interface Attendee {
//   name: string;
//   status: 'Registered' | 'Cancelled' | 'Waiting for Vacant Seat';
// }

// interface Certificate {
//   id: number;
//   attendeeName: string;
//   workshopName: string;
//   fileName: string;
// }

// const Workshops: React.FC = () => {
//   // Static options for dropdowns (kept the same)
//   const categoryOptions = [
//     "Calligraphy", "Drawing & Illustration", "Graphics", "Mixed Media",
//     "Painting", "Photography", "Printmaking", "Sculpture"
//   ];
//   const skillLevelOptions = [
//     "Beginner (0-2 years)", "Intermediate (3-5 years)", "Advanced (6-10 years)", "Professional (11+ years)",
//   ];
//   const workshopModeOptions = [
//     "In-Person Workshop", "Lecture/Seminar", "Online / Remote", "Hybrid (Online & In-Person)",
//   ];
//   const durationOptions = [
//     "One-Day Workshop", "Two Day Workshop", "Three Day Workshop", "Five Day Workshop",
//   ];
//   const languageOptions = [
//     "English", "Arabic", "Other"
//   ];
//   const certificationsOptions = [
//     "Certificate of Completion", "Professional Accreditation", "Nano Certificate", "No Certification",
//   ];
//   const locationOptions = [
//     "Riyadh", "Jeddah", "Makkah", "Madina", "Khobar", "Dammam",
//     "Tabuk", "Ta'if", "Abha", "Khamis Mushait", "Buraidah", "Hail"
//   ];
//   const budgetOptions = [
//     "Free", "Under SAR 1,000", "SAR 1,000 - SAR 5,000", "SAR 5,000 - SAR 10,000", "Custom Budget"
//   ];
//   const priceRangeOptions = [
//     "Free", "Under SAR 500", "SAR 500 - SAR 1,000", "SAR 1,000 - SAR 5,000", "Above SAR 5,000",
//   ];

//   // Access user ID and token from Redux
  
//   const user = useSelector((state: { user: UserState }) => state.user);
//   const authToken = localStorage.getItem("token");
//   // const currentUserName = useSelector((state: RootState) => state.auth.userName); // Get user's display name
//   const instructor=user._id;

//   const [workshops, setWorkshops] = useState<Workshop[]>([]);
//   // Removed 'instructor' from newWorkshop state
//   const [newWorkshop, setNewWorkshop] = useState<Partial<Workshop>>({
//     title: '',
//     description: '',
//     location: '',
//     date: '',
//     time: '',
//     category: '',
//     skills: '',
//     skillLevel: '',
//     duration: '',
//     language: '',
//     certifications: '',
//     budget: '',
//     priceRange: '',
//     workshopMode: '',
//   });
//   const [certificates, setCertificates] = useState<Certificate[]>([]);
//   const [viewAllState, setViewAllState] = useState<{ [key: string]: boolean }>({}); // Key is now string (workshop ID)

//   const handleWorkshopChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setNewWorkshop(prev => ({ ...prev, [name]: value }));
//   };

//   const addWorkshop = async () => {
//     // Basic validation for essential fields
//     if (!newWorkshop.title || !newWorkshop.description || !newWorkshop.date || !newWorkshop.time ||
//         !newWorkshop.location || !newWorkshop.category || !newWorkshop.duration || !newWorkshop.workshopMode) {
//       alert('Please fill out all required fields to create a workshop!');
//       return;
//     }

//     // Check if user is logged in
//     if (!instructor || !authToken) {
//       alert('You must be logged in to create a workshop.');
//       return;
//     }

//     // Construct the payload for the backend API
//     const payload: WorkshopPayload = {
//       title: newWorkshop.title,
//       description: newWorkshop.description,
//       location: newWorkshop.location,
//       date: newWorkshop.date,
//       time: newWorkshop.time,
//       category: newWorkshop.category,
//       skills: newWorkshop.skills,
//       skillLevel: newWorkshop.skillLevel,
//       workshopMode: newWorkshop.workshopMode,
//       duration: newWorkshop.duration,
//       language: newWorkshop.language,
//       certifications: newWorkshop.certifications,
//       budget: newWorkshop.budget,
//       priceRange: newWorkshop.priceRange,
//       // instructorId: instructor,
//     };


//     console.log("Payload being sent:", payload); 
//     console.log("Instructor ID being sent (from Redux):", instructor); // <-- ADD THIS LINE


//     try {
//       // Use currentUserId from Redux as artistId
//       console.log("data to be sent: ",payload);
//       console.log("Sending to backend");
//       const response = await createWorkshopApi(instructor,payload, authToken);

//       console.log(response);

//       if (response && (response as AxiosResponse).status === 201) {
//         const createdWorkshop = (response as AxiosResponse).data.workshop;
//         const newLocalWorkshop: Workshop = {
//           id: createdWorkshop._id,
//           title: createdWorkshop.name,
//           description: createdWorkshop.Description,
//           location: createdWorkshop.location,
//           date: createdWorkshop.date.split('T')[0],
//           time: createdWorkshop.time,
//           category: createdWorkshop.category,
//           skills: createdWorkshop.skills,
//           skillLevel: createdWorkshop.skillLevel,
//           // workshopType: createdWorkshop.workshopMode,
//           duration: createdWorkshop.duration,
//           language: createdWorkshop.language,
//           certifications: createdWorkshop.certifications,
//           budget: createdWorkshop.budget,
//           priceRange: createdWorkshop.priceRange,
//           workshopMode: createdWorkshop.workshopMode,
//           // For the instructor display name, use the current user's name from Redux
//           // instructor: currentUserId ,
//           attendees: [],
//         };
//         setWorkshops(prevWorkshops => [...prevWorkshops, newLocalWorkshop]);
//         alert('Workshop created successfully!');

//         // Reset the form fields
//         setNewWorkshop({
//           title: '',
//           description: '',
//           location: '',
//           date: '',
//           time: '',
//           category: '',
//           skills: '',
//           skillLevel: '',
//           duration: '',
//           language: '',
//           certifications: '',
//           budget: '',
//           priceRange: '',
//           workshopMode: '',
//         });
//       } else {
//         alert(`Failed to create workshop: ${(response as { message: string }).message}`);
//       }
//     } catch (error: any) {
//       console.error("Error adding workshop:", error);
//       alert(`An unexpected error occurred: ${error.message || 'Please try again.'}`);
//     }
//   };

//   const uploadCertificate = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       const file = e.target.files[0];
//       const attendeeName = prompt("Enter attendee name:");
//       const workshopName = prompt("Enter workshop name:") || "Unknown Workshop";
//       if (attendeeName && file) {
//         setCertificates([
//           ...certificates,
//           { id: certificates.length + 1, attendeeName, workshopName, fileName: file.name },
//         ]);
//       }
//     }
//   };

//   // const sampleWorkshops: Workshop[] = [
//   //   // Your existing sample data remains the same.
//   //   // Ensure 'id' is a string for consistency if _id from backend is a string.
//   //   {
//   //     id: '1', // Changed to string
//   //     title: 'Creative Abstract Painting Techniques',
//   //     description: 'Explore unique abstract painting methods to unleash your creativity.',
//   //     date: '2025-02-12',
//   //     time: '11:00 AM',
//   //     location: 'Art Hub Studio, Jeddah',
//   //     category: 'Painting',
//   //     skills: 'Abstract, Acrylics',
//   //     skillLevel: 'Beginner',
//   //     workshopType: 'In-person',
//   //     duration: '3 hours',
//   //     language: 'English',
//   //     certifications: 'Certificate of Completion',
//   //     budget: 'Paid',
//   //     priceRange: '100 - 300 SAR',
//   //     workshopMode: 'Physical',
//   //     instructor: 'Ahmad Al-Riyadh',
//   //     attendees: [
//   //       { name: 'Zara', status: 'Registered' },
//   //       { name: 'Ali', status: 'Registered' },
//   //       { name: 'Sara', status: 'Waiting for Vacant Seat' },
//   //       { name: 'Fahad', status: 'Registered' },
//   //       { name: 'Maha', status: 'Cancelled' },
//   //       { name: 'Khalid', status: 'Registered' },
//   //     ],
//   //   },
//   //   {
//   //     id: '2', // Changed to string
//   //     title: 'Modern Art and Cultural Influence',
//   //     description: 'Dive into the connection between modern art and cultural identity.',
//   //     date: '2025-03-05',
//   //     time: '02:00 PM',
//   //     location: 'Kingdom Art Center, Riyadh',
//   //     category: 'Art History',
//   //     skills: 'Art Analysis, Cultural Studies',
//   //     skillLevel: 'Intermediate',
//   //     workshopType: 'Hybrid',
//   //     duration: '2 hours',
//   //     language: 'Arabic',
//   //     certifications: 'No Certificate',
//   //     budget: 'Free',
//   //     priceRange: 'Free',
//   //     workshopMode: 'Hybrid',
//   //     instructor: 'Dr. Fatima Al-Mansour',
//   //     attendees: [
//   //       { name: 'Amal', status: 'Registered' },
//   //       { name: 'Yousef', status: 'Registered' },
//   //       { name: 'Layla', status: 'Waiting for Vacant Seat' },
//   //       { name: 'Hassan', status: 'Cancelled' },
//   //       { name: 'Fatima', status: 'Registered' },
//   //     ],
//   //   },
//   //   {
//   //     id: '3', // Changed to string
//   //     title: 'Masterclass: Large-Scale Art Installations',
//   //     description: 'Learn how to conceptualize and execute impactful large-scale installations.',
//   //     date: '2025-04-20',
//   //     time: '09:00 AM',
//   //     location: 'Abdullah Qandeel Art Studio, Jeddah',
//   //     category: 'Sculpture',
//   //     skills: 'Installation Art, Sculpture Techniques',
//   //     skillLevel: 'Advanced',
//   //     workshopType: 'In-person',
//   //     duration: 'Full Day (8 hours)',
//   //     language: 'English',
//   //     certifications: 'Accredited Certificate',
//   //     budget: 'Paid',
//   //     priceRange: 'Over 1500 SAR',
//   //     workshopMode: 'Physical',
//   //     instructor: 'Abdullah Qandeel',
//   //     attendees: [
//   //       { name: 'Noura', status: 'Registered' },
//   //       { name: 'Omar', status: 'Registered' },
//   //       { name: 'Lina', status: 'Cancelled' },
//   //       { name: 'Tariq', status: 'Registered' },
//   //       { name: 'Reema', status: 'Waiting for Vacant Seat' },
//   //     ],
//   //   },
//   //   {
//   //     id: '4', // Changed to string
//   //     title: 'The Evolution of Contemporary Art in Saudi Arabia',
//   //     description: 'Understand the journey of contemporary art and its evolution within the Kingdom.',
//   //     date: '2025-05-18',
//   //     time: '04:00 PM',
//   //     location: 'Cultural Heritage Gallery, Riyadh',
//   //     category: 'Art History',
//   //     skills: 'Contemporary Art, Saudi Art',
//   //     skillLevel: 'All Levels',
//   //     workshopType: 'Online',
//   //     duration: '2 hours',
//   //     language: 'English',
//   //     certifications: 'Certificate of Completion',
//   //     budget: 'Free',
//   //     priceRange: 'Free',
//   //     workshopMode: 'Online',
//   //     instructor: 'Sarah Al-Hamad',
//   //     attendees: [
//   //       { name: 'Samira', status: 'Registered' },
//   //       { name: 'Ahmed', status: 'Waiting for Vacant Seat' },
//   //       { name: 'Salman', status: 'Cancelled' },
//   //       { name: 'Aisha', status: 'Registered' },
//   //       { name: 'Adnan', status: 'Registered' },
//   //     ],
//   //   },
//   //   {
//   //     id: '5', // Changed to string
//   //     title: 'Expressive Art for Social Change',
//   //     description: 'Explore how art can be used as a powerful tool to drive social change.',
//   //     date: '2025-06-10',
//   //     time: '01:00 PM',
//   //     location: 'Vision 2030 Art Pavilion, Riyadh',
//   //     category: 'Mixed Media',
//   //     skills: 'Expressive Art, Social Impact',
//   //     skillLevel: 'Beginner',
//   //     workshopType: 'In-person',
//   //     duration: '3 hours',
//   //     language: 'Arabic',
//   //     certifications: 'Certificate of Completion',
//   //     budget: 'Paid',
//   //     priceRange: '301 - 700 SAR',
//   //     workshopMode: 'Physical',
//   //     instructor: 'Majed Al-Otaibi',
//   //     attendees: [
//   //       { name: 'Huda', status: 'Registered' },
//   //       { name: 'Nabil', status: 'Registered' },
//   //       { name: 'Mona', status: 'Cancelled' },
//   //       { name: 'Saad', status: 'Registered' },
//   //       { name: 'Dalia', status: 'Waiting for Vacant Seat' },
//   //     ],
//   //   },
//   // ];

//   // useEffect(() => {
//   //   // Convert sample data IDs to string to match backend _id type
//   //   const updatedSampleWorkshops = sampleWorkshops.map(ws => ({ ...ws, id: String(ws.id) }));
//   //   setWorkshops(updatedSampleWorkshops);
//   // }, []);

//   const toggleViewAll = (workshopId: string) => { // Changed type to string
//     setViewAllState(prevState => ({
//       ...prevState,
//       [workshopId]: !prevState[workshopId],
//     }));
//   };

//   return (
//     <div className="container mx-auto p-6 space-y-8">
//       <h1 className="text-xl font-montserrat-regular text-yankees-blue mb-6">Workshop Management</h1>

//       {/* Create a Workshop */}
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-lg font-montserrat-regular text-yankees-blue mb-4">Create a Workshop</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

//           {/* Title Input */}
//           <div>
//             <label htmlFor="title" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">TITLE</label>
//             <input
//               type="text"
//               id="title"
//               name="title"
//               placeholder="Workshop Title"
//               value={newWorkshop.title || ''}
//               onChange={handleWorkshopChange}
//               className="form-input border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
//             />
//           </div>

//           {/* Removed Instructor Input */}
//           {/* The instructor ID will be pulled from Redux (currentUserId) */}
//           {/* The display name for the instructor on new workshops will be currentUserName */}


//           {/* Date Input */}
//           <div>
//             <label htmlFor="date" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">DATE</label>
//             <input
//               type="date"
//               id="date"
//               name="date"
//               value={newWorkshop.date || ''}
//               onChange={handleWorkshopChange}
//               className="form-input border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
//             />
//           </div>

//           {/* Time Input */}
//           <div>
//             <label htmlFor="time" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">TIME</label>
//             <input
//               type="time"
//               id="time"
//               name="time"
//               value={newWorkshop.time || ''}
//               onChange={handleWorkshopChange}
//               className="form-input border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
//             />
//           </div>

//           {/* Duration Dropdown */}
//           <div>
//             <label htmlFor="duration" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">DURATION</label>
//             <select
//               id="duration"
//               name="duration"
//               value={newWorkshop.duration || ''}
//               onChange={handleWorkshopChange}
//               className="form-select border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
//             >
//               <option value="">Select Duration</option>
//               {durationOptions.map(option => (
//                 <option key={option} value={option}>{option}</option>
//               ))}
//             </select>
//           </div>

//           {/* Workshop Mode Dropdown */}
//           <div>
//             <label htmlFor="workshopMode" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">WORKSHOP MODE</label>
//             <select
//               id="workshopMode"
//               name="workshopMode"
//               value={newWorkshop.workshopMode || ''}
//               onChange={handleWorkshopChange}
//               className="form-select border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
//             >
//               <option value="">Select Mode</option>
//               {workshopModeOptions.map(option => (
//                 <option key={option} value={option}>{option}</option>
//               ))}
//             </select>
//           </div>

//           {/* Category Dropdown */}
//           <div>
//             <label htmlFor="category" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">CATEGORY</label>
//             <select
//               id="category"
//               name="category"
//               value={newWorkshop.category || ''}
//               onChange={handleWorkshopChange}
//               className="form-select border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
//             >
//               <option value="">Select Category</option>
//               {categoryOptions.map(option => (
//                 <option key={option} value={option}>{option}</option>
//               ))}
//             </select>
//           </div>

//           {/* Skills Input (or Multi-select if needed) */}
//           <div>
//             <label htmlFor="skills" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">SKILLS (comma-separated)</label>
//             <input
//               type="text"
//               id="skills"
//               name="skills"
//               placeholder="e.g. Calligraphy, Drawing & Illustration"
//               value={newWorkshop.skills || ''}
//               onChange={handleWorkshopChange}
//               className="form-input border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
//             />
//           </div>

//           {/* Skill Level Dropdown */}
//           <div>
//             <label htmlFor="skillLevel" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">SKILL LEVEL</label>
//             <select
//               id="skillLevel"
//               name="skillLevel"
//               value={newWorkshop.skillLevel || ''}
//               onChange={handleWorkshopChange}
//               className="form-select border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
//             >
//               <option value="">Select Skill Level</option>
//               {skillLevelOptions.map(option => (
//                 <option key={option} value={option}>{option}</option>
//               ))}
//             </select>
//           </div>

//           {/* Language Dropdown */}
//           <div>
//             <label htmlFor="language" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">LANGUAGE</label>
//             <select
//               id="language"
//               name="language"
//               value={newWorkshop.language || ''}
//               onChange={handleWorkshopChange}
//               className="form-select border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
//             >
//               <option value="">Select Language</option>
//               {languageOptions.map(option => (
//                 <option key={option} value={option}>{option}</option>
//               ))}
//             </select>
//           </div>

//           {/* Certifications Dropdown */}
//           <div>
//             <label htmlFor="certifications" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">CERTIFICATIONS</label>
//             <select
//               id="certifications"
//               name="certifications"
//               value={newWorkshop.certifications || ''}
//               onChange={handleWorkshopChange}
//               className="form-select border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
//             >
//               <option value="">Select Certification</option>
//               {certificationsOptions.map(option => (
//                 <option key={option} value={option}>{option}</option>
//               ))}
//             </select>
//           </div>

//           {/* Location Dropdown */}
//           <div>
//             <label htmlFor="location" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">LOCATION</label>
//             <select
//               id="location"
//               name="location"
//               value={newWorkshop.location || ''}
//               onChange={handleWorkshopChange}
//               className="form-select border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
//             >
//               <option value="">Select Location</option>
//               {locationOptions.map(option => (
//                 <option key={option} value={option}>{option}</option>
//               ))}
//             </select>
//           </div>

//           {/* Budget Dropdown */}
//           <div>
//             <label htmlFor="budget" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">BUDGET</label>
//             <select
//               id="budget"
//               name="budget"
//               value={newWorkshop.budget || ''}
//               onChange={handleWorkshopChange}
//               className="form-select border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
//             >
//               <option value="">Select Budget</option>
//               {budgetOptions.map(option => (
//                 <option key={option} value={option}>{option}</option>
//               ))}
//             </select>
//           </div>

//           {/* Price Range Dropdown */}
//           <div>
//             <label htmlFor="priceRange" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">PRICE RANGE</label>
//             <select
//               id="priceRange"
//               name="priceRange"
//               value={newWorkshop.priceRange || ''}
//               onChange={handleWorkshopChange}
//               className="form-select border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
//             >
//               <option value="">Select Price Range</option>
//               {priceRangeOptions.map(option => (
//                 <option key={option} value={option}>{option}</option>
//               ))}
//             </select>
//           </div>

//           {/* Description Textarea */}
//           <div className="md:col-span-2 lg:col-span-3">
//             <label htmlFor="description" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">DESCRIPTION</label>
//             <textarea
//               id="description"
//               name="description"
//               placeholder="Workshop Description"
//               value={newWorkshop.description || ''}
//               onChange={handleWorkshopChange}
//               className="form-input border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
//               rows={4}
//             ></textarea>
//           </div>

//         </div>
//         <button
//           onClick={addWorkshop}
//           className="mt-4 bg-yankees-blue text-white py-2 px-6 rounded-md hover:bg-yankees-blue font-montserrat-light"
//         >
//           Add Workshop
//         </button>
//       </div>

//       {/* Display Workshops */}
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-lg font-montserrat-regular text-yankees-blue mb-4">Workshop Listings</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {workshops.map((workshop) => (
//             <div
//               key={workshop.id}
//               className="border border-gray-300 p-4 rounded-md shadow-md bg-white"
//             >
//               <h3 className="text-lg font-montserrat-regular text-yankees-blue ">{workshop.title}</h3>
//               {/* Display instructor from the workshop object, which could be from sample data or a newly created one */}
//               {/* <p className="text-yankees-blue font-montserrat-light">**Instructor:** {workshop.}</p> */}
//              <p className="text-yankees-blue font-montserrat-light">**Category:** {workshop.category}</p>
//               <p className="text-yankees-blue font-montserrat-light">**Skill Level:** {workshop.skillLevel}</p>
//               <p className="text-yankees-blue font-montserrat-light">**Workshop Mode:** {workshop.workshopMode}</p>
//               <p className="text-yankees-blue font-montserrat-light">**Duration:** {workshop.duration}</p>
//               <p className="text-yankees-blue font-montserrat-light">**Language:** {workshop.language}</p>
//               <p className="text-yankees-blue font-montserrat-light">**Certifications:** {workshop.certifications}</p>
//               <p className="text-yankees-blue font-montserrat-light">**Budget:** {workshop.budget}</p>
//               <p className="text-yankees-blue font-montserrat-light">**Price Range:** {workshop.priceRange}</p>
//               <p className="text-yankees-blue font-montserrat-light">{workshop.description}</p>
//               <p className="text-sm text-yankees-blue font-montserrat-light">
//                 {workshop.date} at {workshop.time}
//               </p>
//               <p className="text-sm text-yankees-blue font-montserrat-light">Location: {workshop.location}</p>
//               <h4 className="text-sm text-yankees-blue font-montserrat-regular mt-4">Attendees:</h4>
//               <ul className="space-y-2">
//                 {workshop.attendees.slice(0, 5).map((attendee, index) => (
//                   <li
//                     key={index}
//                     className="flex justify-between items-center bg-gray-100 p-2 rounded-md shadow-md text-yankees-blue font-montserrat-light"
//                   >
//                     <span>{attendee.name}</span>
//                     <span
//                       className={`text-sm font-montserrat-light ${
//                         attendee.status === 'Registered'
//                           ? 'text-green-600'
//                           : attendee.status === 'Cancelled'
//                           ? 'text-red-600'
//                           : 'text-yellow-600'
//                       }`}
//                     >
//                       {attendee.status}
//                     </span>
//                   </li>
//                 ))}
//               </ul>
//               {viewAllState[workshop.id] && workshop.attendees.slice(5).map((attendee, index) => (
//                 <li
//                   key={`extra-${index}`}
//                   className="flex justify-between items-center bg-gray-100 p-2 rounded-md shadow-md text-yankees-blue font-montserrat-light"
//                 >
//                   <span>{attendee.name}</span>
//                   <span
//                     className={`text-sm font-montserrat-light ${
//                       attendee.status === 'Registered'
//                         ? 'text-green-600'
//                         : attendee.status === 'Cancelled'
//                         ? 'text-red-600'
//                         : 'text-yellow-600'
//                     }`}
//                   >
//                     {attendee.status}
//                   </span>
//                 </li>
//               ))}
//               {workshop.attendees.length > 5 && (
//                 <button
//                   onClick={() => toggleViewAll(workshop.id)}
//                   className="mt-4 text-yankees-blue font-montserrat-light hover:underline"
//                 >
//                   {viewAllState[workshop.id] ? 'View Less' : 'View All'}
//                 </button>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       <hr className="my-8 border-gray-300" />

//       {/* Upload Certificates */}
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-lg text-yankees-blue font-montserrat-regular mb-4">Upload Certificates</h2>
//         <input
//           type="file"
//           onChange={uploadCertificate}
//           className="form-input border border-gray-300 rounded-md p-2 w-full text-yankees-blue font-montserrat-light"
//         />
//         <ul className="mt-4 space-y-2">
//           {certificates.map((certificate) => (
//             <li
//               key={certificate.id}
//               className="flex justify-between items-center bg-gray-100 p-2 rounded-md shadow-md text-yankees-blue font-montserrat-light"
//             >
//               <span>{certificate.attendeeName} - {certificate.fileName}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Workshops;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// src/components/Workshops.tsx

import React, { useState, useEffect, useCallback } from 'react'; // Added useCallback
import { createWorkshopApi, WorkshopPayload } from '../api/workshop'; // Adjust path as necessary
import { AxiosResponse } from 'axios'; // Import AxiosResponse for type checking
import { useSelector } from 'react-redux'; // Import useSelector to access Redux state
import { UserState } from '../store/userSlice';
import { uploadFileToS3 } from '../utils/s3Uploader'; // <--- NEW: Import your S3 uploader
import ImageUploading, { ImageListType } from 'react-images-uploading'; // <--- NEW: Import ImageUploading

// Define the Workshop interface for local state/display
interface Workshop {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  time: string;
  category: string;
  skills?: string;
  skillLevel?: string;
  duration: string;
  language?: string;
  certifications?: string;
  budget?: string;
  priceRange?: string;
  workshopMode: string;
  attendees: Attendee[];
  // --- NEW FIELDS FOR DISPLAY ---
  whoShouldAttend?: string[];
  workshopHighlights?: string[];
  materialsProvided?: string[];
  learningOutcomes?: string[];
  certificateDetails?: string;
  dateDetails?: string;
  durationDetails?: string;
  locationDetails?: string;
  priceDetails?: string;
  image?: string | undefined | null; // S3 URL
  // ----------------------------
}

interface Attendee {
  name: string;
  status: 'Registered' | 'Cancelled' | 'Waiting for Vacant Seat';
}

interface Certificate {
  id: number;
  attendeeName: string;
  workshopName: string;
  fileName: string;
}

const Workshops: React.FC = () => {
  // Static options for dropdowns (kept the same)
  const categoryOptions = [
    "Calligraphy", "Drawing & Illustration", "Graphics", "Mixed Media",
    "Painting", "Photography", "Printmaking", "Sculpture"
  ];
  const skillLevelOptions = [
    "Beginner (0-2 years)", "Intermediate (3-5 years)", "Advanced (6-10 years)", "Professional (11+ years)",
  ];
  const workshopModeOptions = [
    "In-Person Workshop", "Lecture/Seminar", "Online / Remote", "Hybrid (Online & In-Person)",
  ];
  const durationOptions = [
    "One Day Workshop", "Two Day Workshop", "Three Day Workshop", "Five Day Workshop",
  ];
  const languageOptions = [
    "English", "Arabic", "Other"
  ];
  const certificationsOptions = [
    "Certificate of Completion", "Professional Accreditation", "Nano Certificate", "No Certification",
  ];
  const locationOptions = [
    "Riyadh", "Jeddah", "Makkah", "Madina", "Khobar", "Dammam",
    "Tabuk", "Ta'if", "Abha", "Khamis Mushait", "Buraidah", "Hail"
  ];
  const budgetOptions = [
    "Free", "Under SAR 1,000", "SAR 1,000 - SAR 5,000", "SAR 5,000 - SAR 10,000", "Custom Budget"
  ];
  const priceRangeOptions = [
    "Free", "Under SAR 500", "SAR 500 - SAR 1,000", "SAR 1,000 - SAR 5,000", "Above SAR 5,000",
  ];

  // Access user ID and token from Redux
  const user = useSelector((state: { user: UserState }) => state.user);
  const authToken = localStorage.getItem("token");
  const instructor = user._id;

  const [workshops, setWorkshops] = useState<Workshop[]>([]);
  const [newWorkshop, setNewWorkshop] = useState<Partial<Workshop>>({
    title: '',
    description: '',
    location: '',
    date: '',
    time: '',
    category: '',
    skills: '',
    skillLevel: '',
    duration: '',
    language: '',
    certifications: '',
    budget: '',
    priceRange: '',
    workshopMode: '',
    // --- Initialize new single string fields ---
    certificateDetails: '',
    dateDetails: '',
    durationDetails: '',
    locationDetails: '',
    priceDetails: '',
    image: '', // S3 URL placeholder
  });

  // --- State for new list-based fields and their temporary inputs ---
  const [tempWhoShouldAttend, setTempWhoShouldAttend] = useState<string>('');
  const [whoShouldAttendList, setWhoShouldAttendList] = useState<string[]>([]);

  const [tempWorkshopHighlight, setTempWorkshopHighlight] = useState<string>('');
  const [workshopHighlightsList, setWorkshopHighlightsList] = useState<string[]>([]);

  const [tempMaterialProvided, setTempMaterialProvided] = useState<string>('');
  const [materialsProvidedList, setMaterialsProvidedList] = useState<string[]>([]);

  const [tempLearningOutcome, setTempLearningOutcome] = useState<string>('');
  const [learningOutcomesList, setLearningOutcomesList] = useState<string[]>([]);
  // ------------------------------------------------------------------

  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [viewAllState, setViewAllState] = useState<{ [key: string]: boolean }>({});

  // NEW: State for image file and preview similar to EditProfile.tsx
  const [workshopImageFile, setWorkshopImageFile] = useState<File | null>(null);
  const [workshopImagePreview, setWorkshopImagePreview] = useState<string | null>(null);
  const maxNumber = 1; // For ImageUploading component

  const handleWorkshopChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewWorkshop(prev => ({ ...prev, [name]: value }));
  };

  // --- Handlers for adding items to list fields ---
  const addToList = (
    item: string,
    listSetter: React.Dispatch<React.SetStateAction<string[]>>,
    tempSetter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    if (item.trim() && !item.includes(',')) { // Prevent commas and empty strings
      listSetter(prev => [...prev, item.trim()]);
      tempSetter(''); // Clear the temporary input
    } else {
      alert('Please enter a single item without commas.');
    }
  };

  const removeListItem = (
    indexToRemove: number,
    list: string[],
    listSetter: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    listSetter(list.filter((_, index) => index !== indexToRemove));
  };

  // NEW: onChange for ImageUploading component
  const onImageUploadChange = useCallback((imageList: ImageListType) => {
    if (imageList.length > 0) {
      const selectedImage = imageList[0];
      setWorkshopImagePreview(selectedImage.dataURL || null);
      setWorkshopImageFile(selectedImage.file || null);
    } else {
      setWorkshopImagePreview(null);
      setWorkshopImageFile(null);
    }
  }, []);


  const addWorkshop = async () => {
    // Basic validation for essential fields
    if (!newWorkshop.title || !newWorkshop.description || !newWorkshop.date || !newWorkshop.time ||
      !newWorkshop.location || !newWorkshop.category || !newWorkshop.duration || !newWorkshop.workshopMode) {
      alert('Please fill out all required fields to create a workshop!');
      return;
    }

    // Check if user is logged in
    if (!instructor || !authToken) {
      alert('You must be logged in to create a workshop.');
      return;
    }

    let finalImageUrl: string | undefined | null = undefined;

    // Handle image upload if a new file is selected
    if (workshopImageFile) {
      console.log("Attempting to upload new workshop image to S3.");
      try {
        const uploadResult = await uploadFileToS3(workshopImageFile, 'workshop-images');
        if (uploadResult.location) {
          finalImageUrl = uploadResult.location;
          console.log("S3 Upload successful! URL:", finalImageUrl);
        } else {
          alert('Failed to upload image to S3. Please try again.');
          console.error('S3 upload result was missing location:', uploadResult);
          return; // Stop execution if image upload fails
        }
      } catch (error) {
        console.error("Error during S3 image upload:", error);
        alert(`An error occurred during image upload: ${(error as Error).message}`);
        return; // Stop execution if image upload fails
      }
    } else if (workshopImagePreview) {
      // If there's a preview but no new file, it means the existing image is retained
      finalImageUrl = newWorkshop.image; // Assume newWorkshop.image holds the existing URL if user didn't change it
    } else {
      finalImageUrl = null; // No image for the workshop
    }


    // Construct the payload for the backend API
    const payload: WorkshopPayload = {
      title: newWorkshop.title,
      description: newWorkshop.description,
      location: newWorkshop.location,
      date: newWorkshop.date,
      time: newWorkshop.time,
      category: newWorkshop.category,
      skills: newWorkshop.skills,
      skillLevel: newWorkshop.skillLevel,
      workshopMode: newWorkshop.workshopMode,
      duration: newWorkshop.duration,
      language: newWorkshop.language,
      certifications: newWorkshop.certifications,
      budget: newWorkshop.budget,
      priceRange: newWorkshop.priceRange,
      // --- NEW FIELDS IN PAYLOAD ---
      whoShouldAttend: whoShouldAttendList, // Send the collected array
      workshopHighlights: workshopHighlightsList, // Send the collected array
      materialsProvided: materialsProvidedList, // Send the collected array
      learningOutcomes: learningOutcomesList, // Send the collected array
      certificateDetails: newWorkshop.certificateDetails,
      dateDetails: newWorkshop.dateDetails,
      durationDetails: newWorkshop.durationDetails,
      locationDetails: newWorkshop.locationDetails,
      priceDetails: newWorkshop.priceDetails,
      image: finalImageUrl, // Send the S3 URL from state
      // -----------------------------
    };

    console.log("Payload being sent:", payload);
    console.log("Instructor ID being sent (from Redux):", instructor);

    try {
      console.log("Sending to backend");
      const response = await createWorkshopApi(instructor, payload, authToken);

      console.log(response);

      if (response && (response as AxiosResponse).status === 201) {
        const createdWorkshop = (response as AxiosResponse).data.workshop;
        const newLocalWorkshop: Workshop = {
          id: createdWorkshop._id,
          title: createdWorkshop.title,
          description: createdWorkshop.description,
          location: createdWorkshop.location,
          date: createdWorkshop.date.split('T')[0],
          time: createdWorkshop.time,
          category: createdWorkshop.category,
          skills: createdWorkshop.skills,
          skillLevel: createdWorkshop.skillLevel,
          duration: createdWorkshop.duration,
          language: createdWorkshop.language,
          certifications: createdWorkshop.certifications,
          budget: createdWorkshop.budget,
          priceRange: createdWorkshop.priceRange,
          workshopMode: createdWorkshop.workshopMode,
          attendees: [], // Assuming no attendees on creation for local display
          // --- Assign new fields from backend response to local state ---
          whoShouldAttend: createdWorkshop.whoShouldAttend,
          workshopHighlights: createdWorkshop.workshopHighlights,
          materialsProvided: createdWorkshop.materialsProvided,
          learningOutcomes: createdWorkshop.learningOutcomes,
          certificateDetails: createdWorkshop.certificateDetails,
          dateDetails: createdWorkshop.dateDetails,
          durationDetails: createdWorkshop.durationDetails,
          locationDetails: createdWorkshop.locationDetails,
          priceDetails: createdWorkshop.priceDetails,
          image: createdWorkshop.image,
        };
        setWorkshops(prevWorkshops => [...prevWorkshops, newLocalWorkshop]);
        alert('Workshop created successfully!');

        // Reset the form fields
        setNewWorkshop({
          title: '', description: '', location: '', date: '', time: '', category: '',
          skills: '', skillLevel: '', duration: '', language: '', certifications: '',
          budget: '', priceRange: '', workshopMode: '',
          // --- Reset new single string fields ---
          certificateDetails: '', dateDetails: '', durationDetails: '',
          locationDetails: '', priceDetails: '', image: '',
        });
        // --- Reset new list fields ---
        setWhoShouldAttendList([]);
        setWorkshopHighlightsList([]);
        setMaterialsProvidedList([]);
        setLearningOutcomesList([]);
        // NEW: Reset image states
        setWorkshopImageFile(null);
        setWorkshopImagePreview(null);

      } else {
        alert(`Failed to create workshop: ${(response as { message: string }).message}`);
      }
    } catch (error: any) {
      console.error("Error adding workshop:", error);
      alert(`An unexpected error occurred: ${error.message || 'Please try again.'}`);
    }
  };

  const uploadCertificate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const attendeeName = prompt("Enter attendee name:");
      const workshopName = prompt("Enter workshop name:") || "Unknown Workshop";
      if (attendeeName && file) {
        setCertificates([
          ...certificates,
          { id: certificates.length + 1, attendeeName, workshopName, fileName: file.name },
        ]);
      }
    }
  };

  const toggleViewAll = (workshopId: string) => {
    setViewAllState(prevState => ({
      ...prevState,
      [workshopId]: !prevState[workshopId],
    }));
  };

  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-xl font-montserrat-regular text-yankees-blue mb-6">Workshop Management</h1>

      {/* Create a Workshop */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-montserrat-regular text-yankees-blue mb-4">Create a Workshop</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          {/* Title Input */}
          <div>
            <label htmlFor="title" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">TITLE</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Workshop Title"
              value={newWorkshop.title || ''}
              onChange={handleWorkshopChange}
              className="form-input border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
            />
          </div>

          {/* Date Input */}
          <div>
            <label htmlFor="date" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">DATE</label>
            <input
              type="date"
              id="date"
              name="date"
              value={newWorkshop.date || ''}
              onChange={handleWorkshopChange}
              className="form-input border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
            />
          </div>

          {/* Time Input */}
          <div>
            <label htmlFor="time" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">TIME</label>
            <input
              type="time"
              id="time"
              name="time"
              value={newWorkshop.time || ''}
              onChange={handleWorkshopChange}
              className="form-input border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
            />
          </div>

          {/* Duration Dropdown */}
          <div>
            <label htmlFor="duration" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">DURATION</label>
            <select
              id="duration"
              name="duration"
              value={newWorkshop.duration || ''}
              onChange={handleWorkshopChange}
              className="form-select border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
            >
              <option value="">Select Duration</option>
              {durationOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          {/* Workshop Mode Dropdown */}
          <div>
            <label htmlFor="workshopMode" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">WORKSHOP MODE</label>
            <select
              id="workshopMode"
              name="workshopMode"
              value={newWorkshop.workshopMode || ''}
              onChange={handleWorkshopChange}
              className="form-select border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
            >
              <option value="">Select Mode</option>
              {workshopModeOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          {/* Category Dropdown */}
          <div>
            <label htmlFor="category" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">CATEGORY</label>
            <select
              id="category"
              name="category"
              value={newWorkshop.category || ''}
              onChange={handleWorkshopChange}
              className="form-select border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
            >
              <option value="">Select Category</option>
              {categoryOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          {/* Skills Input (or Multi-select if needed) */}
          <div>
            <label htmlFor="skills" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">SKILLS (comma-separated)</label>
            <input
              type="text"
              id="skills"
              name="skills"
              placeholder="e.g. Calligraphy, Drawing & Illustration"
              value={newWorkshop.skills || ''}
              onChange={handleWorkshopChange}
              className="form-input border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
            />
          </div>

          {/* Skill Level Dropdown */}
          <div>
            <label htmlFor="skillLevel" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">SKILL LEVEL</label>
            <select
              id="skillLevel"
              name="skillLevel"
              value={newWorkshop.skillLevel || ''}
              onChange={handleWorkshopChange}
              className="form-select border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
            >
              <option value="">Select Skill Level</option>
              {skillLevelOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          {/* Language Dropdown */}
          <div>
            <label htmlFor="language" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">LANGUAGE</label>
            <select
              id="language"
              name="language"
              value={newWorkshop.language || ''}
              onChange={handleWorkshopChange}
              className="form-select border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
            >
              <option value="">Select Language</option>
              {languageOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          {/* Certifications Dropdown */}
          <div>
            <label htmlFor="certifications" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">CERTIFICATIONS</label>
            <select
              id="certifications"
              name="certifications"
              value={newWorkshop.certifications || ''}
              onChange={handleWorkshopChange}
              className="form-select border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
            >
              <option value="">Select Certification</option>
              {certificationsOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          {/* Location Dropdown */}
          <div>
            <label htmlFor="location" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">LOCATION</label>
            <select
              id="location"
              name="location"
              value={newWorkshop.location || ''}
              onChange={handleWorkshopChange}
              className="form-select border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
            >
              <option value="">Select Location</option>
              {locationOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          {/* Budget Dropdown */}
          <div>
            <label htmlFor="budget" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">BUDGET</label>
            <select
              id="budget"
              name="budget"
              value={newWorkshop.budget || ''}
              onChange={handleWorkshopChange}
              className="form-select border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
            >
              <option value="">Select Budget</option>
              {budgetOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          {/* Price Range Dropdown */}
          <div>
            <label htmlFor="priceRange" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">PRICE RANGE</label>
            <select
              id="priceRange"
              name="priceRange"
              value={newWorkshop.priceRange || ''}
              onChange={handleWorkshopChange}
              className="form-select border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
            >
              <option value="">Select Price Range</option>
              {priceRangeOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          {/* Description Textarea */}
          <div className="md:col-span-2 lg:col-span-3">
            <label htmlFor="description" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">DESCRIPTION</label>
            <textarea
              id="description"
              name="description"
              placeholder="Workshop Description"
              value={newWorkshop.description || ''}
              onChange={handleWorkshopChange}
              className="form-input border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
              rows={4}
            ></textarea>
          </div>

          {/* --- NEW INPUT FIELDS START HERE --- */}

          {/* Who Should Attend (List Input) */}
          <div className="md:col-span-2 lg:col-span-3">
            <label htmlFor="whoShouldAttend" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">WHO SHOULD ATTEND (add one by one)</label>
            <div className="flex space-x-2">
              <input
                type="text"
                id="whoShouldAttend"
                placeholder="e.g., Beginners, Professionals"
                value={tempWhoShouldAttend}
                onChange={(e) => setTempWhoShouldAttend(e.target.value)}
                className="form-input border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
              />
              <button
                type="button"
                onClick={() => addToList(tempWhoShouldAttend, setWhoShouldAttendList, setTempWhoShouldAttend)}
                className="bg-gray-200 text-yankees-blue py-2 px-4 rounded-md hover:bg-gray-300 font-montserrat-light"
              >
                Add
              </button>
            </div>
            {whoShouldAttendList.length > 0 && (
              <ul className="mt-2 space-y-1">
                {whoShouldAttendList.map((item, index) => (
                  <li key={index} className="flex justify-between items-center bg-gray-100 p-2 rounded-md">
                    <span className="text-yankees-blue font-montserrat-light">{item}</span>
                    <button
                      type="button"
                      onClick={() => removeListItem(index, whoShouldAttendList, setWhoShouldAttendList)}
                      className="ml-2 text-red-500 hover:text-red-700 text-sm font-montserrat-light"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Workshop Highlights (List Input) */}
          <div className="md:col-span-2 lg:col-span-3">
            <label htmlFor="workshopHighlights" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">WORKSHOP HIGHLIGHTS (add one by one)</label>
            <div className="flex space-x-2">
              <input
                type="text"
                id="workshopHighlights"
                placeholder="e.g., Interactive sessions, Expert instructor"
                value={tempWorkshopHighlight}
                onChange={(e) => setTempWorkshopHighlight(e.target.value)}
                className="form-input border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
              />
              <button
                type="button"
                onClick={() => addToList(tempWorkshopHighlight, setWorkshopHighlightsList, setTempWorkshopHighlight)}
                className="bg-gray-200 text-yankees-blue py-2 px-4 rounded-md hover:bg-gray-300 font-montserrat-light"
              >
                Add
              </button>
            </div>
            {workshopHighlightsList.length > 0 && (
              <ul className="mt-2 space-y-1">
                {workshopHighlightsList.map((item, index) => (
                  <li key={index} className="flex justify-between items-center bg-gray-100 p-2 rounded-md">
                    <span className="text-yankees-blue font-montserrat-light">{item}</span>
                    <button
                      type="button"
                      onClick={() => removeListItem(index, workshopHighlightsList, setWorkshopHighlightsList)}
                      className="ml-2 text-red-500 hover:text-red-700 text-sm font-montserrat-light"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Materials Provided (List Input) */}
          <div className="md:col-span-2 lg:col-span-3">
            <label htmlFor="materialsProvided" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">MATERIALS PROVIDED (add one by one)</label>
            <div className="flex space-x-2">
              <input
                type="text"
                id="materialsProvided"
                placeholder="e.g., Canvas, Brushes, Paints"
                value={tempMaterialProvided}
                onChange={(e) => setTempMaterialProvided(e.target.value)}
                className="form-input border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
              />
              <button
                type="button"
                onClick={() => addToList(tempMaterialProvided, setMaterialsProvidedList, setTempMaterialProvided)}
                className="bg-gray-200 text-yankees-blue py-2 px-4 rounded-md hover:bg-gray-300 font-montserrat-light"
              >
                Add
              </button>
            </div>
            {materialsProvidedList.length > 0 && (
              <ul className="mt-2 space-y-1">
                {materialsProvidedList.map((item, index) => (
                  <li key={index} className="flex justify-between items-center bg-gray-100 p-2 rounded-md">
                    <span className="text-yankees-blue font-montserrat-light">{item}</span>
                    <button
                      type="button"
                      onClick={() => removeListItem(index, materialsProvidedList, setMaterialsProvidedList)}
                      className="ml-2 text-red-500 hover:text-red-700 text-sm font-montserrat-light"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Learning Outcomes (List Input) */}
          <div className="md:col-span-2 lg:col-span-3">
            <label htmlFor="learningOutcomes" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">LEARNING OUTCOMES (add one by one)</label>
            <div className="flex space-x-2">
              <input
                type="text"
                id="learningOutcomes"
                placeholder="e.g., Master brush strokes, Understand color theory"
                value={tempLearningOutcome}
                onChange={(e) => setTempLearningOutcome(e.target.value)}
                className="form-input border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
              />
              <button
                type="button"
                onClick={() => addToList(tempLearningOutcome, setLearningOutcomesList, setTempLearningOutcome)}
                className="bg-gray-200 text-yankees-blue py-2 px-4 rounded-md hover:bg-gray-300 font-montserrat-light"
              >
                Add
              </button>
            </div>
            {learningOutcomesList.length > 0 && (
              <ul className="mt-2 space-y-1">
                {learningOutcomesList.map((item, index) => (
                  <li key={index} className="flex justify-between items-center bg-gray-100 p-2 rounded-md">
                    <span className="text-yankees-blue font-montserrat-light">{item}</span>
                    <button
                      type="button"
                      onClick={() => removeListItem(index, learningOutcomesList, setLearningOutcomesList)}
                      className="ml-2 text-red-500 hover:text-red-700 text-sm font-montserrat-light"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>


          {/* Certificate Details Input */}
          <div>
            <label htmlFor="certificateDetails" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">CERTIFICATE DETAILS</label>
            <input
              type="text"
              id="certificateDetails"
              name="certificateDetails"
              placeholder="e.g., Official certificate issued upon completion"
              value={newWorkshop.certificateDetails || ''}
              onChange={handleWorkshopChange}
              className="form-input border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
            />
          </div>

          {/* Date Details Input */}
          <div>
            <label htmlFor="dateDetails" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">DATE DETAILS</label>
            <input
              type="text"
              id="dateDetails"
              name="dateDetails"
              placeholder="e.g., Every Saturday for 4 weeks"
              value={newWorkshop.dateDetails || ''}
              onChange={handleWorkshopChange}
              className="form-input border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
            />
          </div>

          {/* Duration Details Input */}
          <div>
            <label htmlFor="durationDetails" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">DURATION DETAILS</label>
            <input
              type="text"
              id="durationDetails"
              name="durationDetails"
              placeholder="e.g., Total 12 hours of instruction"
              value={newWorkshop.durationDetails || ''}
              onChange={handleWorkshopChange}
              className="form-input border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
            />
          </div>

          {/* Location Details Input */}
          <div>
            <label htmlFor="locationDetails" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">LOCATION DETAILS</label>
            <input
              type="text"
              id="locationDetails"
              name="locationDetails"
              placeholder="e.g., Online via Zoom, Studio A, Downtown Arts Center"
              value={newWorkshop.locationDetails || ''}
              onChange={handleWorkshopChange}
              className="form-input border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
            />
          </div>

          {/* Price Details Input */}
          <div>
            <label htmlFor="priceDetails" className="block text-xs text-yankees-blue font-montserrat-regular mb-2">PRICE DETAILS</label>
            <input
              type="text"
              id="priceDetails"
              name="priceDetails"
              placeholder="e.g., Early bird discount available"
              value={newWorkshop.priceDetails || ''}
              onChange={handleWorkshopChange}
              className="form-input border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue"
            />
          </div>

          {/* Workshop Image Upload */}
          <div className="md:col-span-2 lg:col-span-3">
            <label className="block text-xs text-yankees-blue font-montserrat-regular mb-2">WORKSHOP IMAGE</label>
            <ImageUploading
              value={workshopImagePreview ? [{ dataURL: workshopImagePreview }] : []}
              onChange={onImageUploadChange}
              maxNumber={maxNumber}
              dataURLKey="dataURL" // Important when providing dataURL in initial 'value'
            >
              {({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
                <div className="upload__image-wrapper">
                  {workshopImagePreview ? (
                    <div className="w-full h-48 overflow-hidden rounded-md border border-gray-200 mb-2 flex justify-center items-center">
                      <img
                        src={workshopImagePreview}
                        alt="Workshop Preview"
                        className="object-contain max-h-full max-w-full" // Use object-contain to prevent cropping
                      />
                    </div>
                  ) : (
                    <div
                      className="w-full h-48 border border-gray-300 border-dashed rounded-md flex items-center justify-center cursor-pointer text-gray-500 hover:text-yankees-blue transition duration-200"
                      style={isDragging ? { borderColor: 'green' } : undefined}
                      onClick={onImageUpload}
                      {...dragProps}
                    >
                      <span>Drag & Drop or Click to Upload Image</span>
                    </div>
                  )}

                  <div className="flex gap-2 mt-2">
                    {!workshopImagePreview && (
                      <button
                        type="button"
                        className="btn bg-yankees-blue text-white font-montserrat-light px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
                        onClick={onImageUpload}
                      >
                        Select Image
                      </button>
                    )}
                    {workshopImagePreview && (
                      <button
                        type="button"
                        className="btn bg-red-500 text-white font-montserrat-light px-4 py-2 rounded-md hover:bg-red-700 transition duration-200"
                        onClick={() => {
                          setWorkshopImagePreview(null);
                          setWorkshopImageFile(null);
                          setNewWorkshop(prev => ({ ...prev, image: null })); // Explicitly clear image from payload state
                        }}
                      >
                        Remove Image
                      </button>
                    )}
                  </div>
                  {imageList.length > 0 && imageList[0].errors && (
                    <div className="text-red-500 text-sm mt-2">
                      {imageList[0].errors.map((error: string, i: number) => ( // Type both parameters
                        <p key={i}>{error}</p>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </ImageUploading>
          </div>

          <div className="md:col-span-3">
            <button
              type="button"
              onClick={addWorkshop}
              className="btn bg-yankees-blue text-white font-montserrat-light px-6 py-3 rounded-md w-full hover:bg-blue-700 transition duration-200"
            >
              Add Workshop
            </button>
          </div>
        </div>
      </div>
      {/* Rest of your component (workshop list, certificate upload) */}
    </div>
  );
};

export default Workshops;