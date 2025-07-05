// import React, { useState } from 'react';

// interface CommissionedService {
//   id: number;
//   field: string;
//   service: string;
//   cost: number;
//   deliveryTime: string;
//   messages: { id: number; text: string; sender: 'Client' | 'You' }[];
// }

// interface PendingService {
//   id: number;
//   clientName: string;
//   chosenService: string;
//   status: 'Pending' | 'Delivered' | 'In Progress' | 'Completed';
//   customRequirements: string;
//   messages: { id: number; text: string; sender: 'Client' | 'You' }[];
// }

// const CommissionedServices: React.FC = () => {
//   const [services, setServices] = useState<CommissionedService[]>([
//     {
//       id:1,
//       field: 'Painting',
//       service: 'Abstract Painting',
//       cost: 500,
//       deliveryTime: '2-3 weeks',
//       messages: [],
//     },
//     {
//       id:2,
//       field: 'Painting',
//       service: 'Large-Scale Mural',
//       cost: 1500,
//       deliveryTime: '2 weeks',
//       messages: [],
//     },
//     {
//       id:3,
//       field: 'Calligraphy',
//       service: 'Custom Calligraphy Art',
//       cost: 100,
//       deliveryTime: '7 days',
//       messages: [],
//     },
//     {
//       id:4,
//       field: 'Drawing & Illustration',
//       service: 'Portrait Sketch',
//       cost: 75,
//       deliveryTime: '5 days',
//       messages: [],
//     },
//     {
//       id:5,
//       field: 'Painting',
//       service: 'Conceptual Artwork',
//       cost: 800,
//       deliveryTime: '2 weeks',
//       messages: [],
//     },
//   ]);
//   const [pendingServices, setPendingServices] = useState<PendingService[]>([
//     {
//     id: 1,
//     clientName: 'Reema Al-Saif',
//     chosenService: 'Abstract Painting',
//     status: 'In Progress',
//     customRequirements: 'Size: 36x48 inches, Colors: Blue and Gold tones, Price: $500',
//     messages: [
//       { id: 1, text: 'Can you add more gold highlights?', sender: 'Client' },
//       { id: 2, text: 'Absolutely, I’ll emphasize the gold highlights more.', sender: 'You' },
//     ],
//   },
//   {
//     id: 2,
//     clientName: 'Ahmed Al-Harbi',
//     chosenService: 'Large-Scale Mural',
//     status: 'Pending',
//     customRequirements: 'Theme: Urban Modern, Dimensions: 10x15 ft, Price: $2,000',
//     messages: [
//       { id: 1, text: 'Can the design incorporate a skyline?', sender: 'Client' },
//       // { id: 2, text: 'Yes, I’ll include a skyline as part of the design.', sender: 'You' },
//     ],
//   },
//   {
//     id: 3,
//     clientName: 'Fatima Noor',
//     chosenService: 'Custom Calligraphy Art',
//     status: 'Completed',
//     customRequirements: 'Text: “Sabr” in Arabic, Style: Modern, Frame: Black Wood, Price: $150',
//     messages: [
//       { id: 1, text: 'I love how it turned out. Thank you!', sender: 'Client' },
//       { id: 2, text: 'You’re welcome! I’m glad you liked it.', sender: 'You' },
//     ],
//   },
//   {
//     id: 4,
//     clientName: 'Hassan Malik',
//     chosenService: 'Portrait Sketch',
//     status: 'Pending',
//     customRequirements: 'Size: A3, Material: Pencil, Price: $75',
//     messages: [
//       { id: 1, text: 'Can the shading be softer around the jawline?', sender: 'Client' },
//       { id: 2, text: 'Sure, I’ll make the shading around the jawline softer.', sender: 'You' },
//     ],
//   },
//   {
//     id: 5,
//     clientName: 'Layla Ibrahim',
//     chosenService: 'Conceptual Artwork',
//     status: 'In Progress',
//     customRequirements: 'Theme: Journey of Life, Medium: Acrylic, Price: $800',
//     messages: [
//       { id: 1, text: 'Can you make the transitions between colors more gradual?', sender: 'Client' },
//       { id: 2, text: 'Absolutely, I’ll make the transitions smoother.', sender: 'You' },
//     ],
//   },
//   ]);
  
//   const [newService, setNewService] = useState({
//     field: '',
//     service: '',
//     cost: '',
//     deliveryTime: '',
//   });

//   const [activeMessages, setActiveMessages] = useState<null | {
//     serviceId: number;
//     clientName: string;
//     messages: { id: number; text: string; sender: 'Client' | 'You' }[];
//   }>(null);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setNewService({ ...newService, [name]: value });
//   };

//   const addService = () => {
//     if (newService.field && newService.service && newService.cost && newService.deliveryTime) {
//       setServices([
//         ...services,
//         {
//           id: services.length + 1,
//           field: newService.field,
//           service: newService.service,
//           cost: parseFloat(newService.cost),
//           deliveryTime: newService.deliveryTime,
//           messages: [],
//         },
//       ]);
//       setNewService({ field: '', service: '', cost: '', deliveryTime: '' });
//     } else {
//       alert('Please fill out all fields!');
//     }
//   };

//   const markAsDelivered = (id: number) => {
//     setPendingServices((prev) =>
//       prev.map((service) =>
//         service.id === id ? { ...service, status: 'Delivered' } : service
//       )
//     );
//   };

//   const viewMessages = (id: number) => {
//     const pendingService = pendingServices.find((service) => service.id === id);
//     if (pendingService) {
//       setActiveMessages({
//         serviceId: pendingService.id,
//         clientName: pendingService.clientName,
//         messages: pendingService.messages,
//       });
//     }
//   };

//   const sendMessage = (text: string) => {
//     if (activeMessages) {
//       setPendingServices((prev) =>
//         prev.map((service) =>
//           service.id === activeMessages.serviceId
//             ? {
//                 ...service,
//                 messages: [
//                   ...service.messages,
//                   { id: service.messages.length + 1, text, sender: 'You' },
//                 ],
//               }
//             : service
//         )
//       );
//     }
//   };

//   return (
//     <div className="container mx-auto p-6 space-y-8">
//       {/* Create Commissioned Service */}
//       <section>
//         <h2 className="text-xl text-yankees-blue font-montserrat-regular mb-4">Create Commissioned Service</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input
//             type="text"
//             name="field"
//             placeholder="Field of Service"
//             value={newService.field}
//             onChange={handleInputChange}
//             className="form-input border border-gray-300 rounded-md p-2 w-full text-yankees-blue font-montserrat-light"
//           />
//           <input
//             type="text"
//             name="service"
//             placeholder="Service"
//             value={newService.service}
//             onChange={handleInputChange}
//             className="form-input border border-gray-300 rounded-md p-2 w-full text-yankees-blue font-montserrat-light"
//           />
//           <input
//             type="number"
//             name="cost"
//             placeholder="Cost"
//             value={newService.cost}
//             onChange={handleInputChange}
//             className="form-input border border-gray-300 rounded-md p-2 w-full text-yankees-blue font-montserrat-light"
//           />
//           <input
//             type="text"
//             name="deliveryTime"
//             placeholder="Delivery Time"
//             value={newService.deliveryTime}
//             onChange={handleInputChange}
//             className="form-input border border-gray-300 rounded-md p-2 w-full text-yankees-blue font-montserrat-light"
//           />
//         </div>
//         <button
//           onClick={addService}
//           className="mt-4 bg-yankees-blue text-white py-2 px-6 rounded-md hover:bg-yankees-blue font-montserrat-light"
//         >
//           Add Service
//         </button>
//       </section>

//       {/* Offered Services */}
//       <section>
//         <h2 className="text-xl font-motserrat-regular text-yankees-blue mb-4">Offered Services</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//           {services.map((service) => (
//             <div key={service.id} className="border p-4 rounded-md shadow-md">
//               <h3 className="text-lg font-montserrat-regular text-yankees-blue">{service.service}</h3>
//               <p className='font-montserrat-light text-yankees-blue'>Field: {service.field}</p>
//               <p className='font-montserrat-light text-yankees-blue'>Cost: SAR {service.cost}</p>
//               <p className='font-montserrat-light text-yankees-blue'>Delivery Time: {service.deliveryTime}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Pending Services */}
//       <section>
//         <h2 className="text-xl text-yankees-blue font-montserrat-regular mb-4">Pending Services</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
//           {pendingServices.map((service) => (
//             <div key={service.id} className="border p-4 rounded-md shadow-md">
//               <h3 className="text-lg font-montserrat-regular text-yankees-blue">{service.chosenService}</h3>
//               <p className='font-montserrat-light text-yankees-blue'>Client: {service.clientName}</p>
//               <p className='font-montserrat-light text-yankees-blue'>Status: {service.status}</p>
//               <p className='font-montserrat-light text-yankees-blue'>Requirements: {service.customRequirements}</p>
//               <div className="flex gap-4 mt-2">
//                 <button
//                   onClick={() => markAsDelivered(service.id)}
//                   className="bg-madder-lake text-white py-1 px-4 rounded-md hover:bg-madder-lake font-montserrat-light"
//                 >
//                   Mark as Delivered
//                 </button>
//                 <button
//                   onClick={() => viewMessages(service.id)}
//                   className="bg-fire-opal text-white py-1 px-4 rounded-md hover:bg-fire-opal font-montserrat-light"
//                 >
//                   View Messages
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>


//       {/* Active Messages Section */}
//       {activeMessages && (
//         <section className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
//             <h2 className="text-xl font-montserrat-regular text-yankees-blue mb-4">
//               Messages with {activeMessages.clientName}
//             </h2>
//             <ul className="space-y-2 mb-4">
//               {activeMessages.messages.map((msg) => (
//                 <li
//                   key={msg.id}
//                   className={`p-2 rounded-md font-montserrat-light text-yankees-blue ${
//                     msg.sender === 'You' ? 'bg-blue-100' : 'bg-gray-100'
//                   }`}
//                 >
//                   <strong>{msg.sender}:</strong> {msg.text}
//                 </li>
//               ))}
//             </ul>
//             <input
//               type="text"
//               placeholder="Reply..."
//               onKeyDown={(e) => {
//                 if (e.key === 'Enter') {
//                   sendMessage(e.currentTarget.value);
//                   e.currentTarget.value = '';
//                 }
//               }}
//               className="form-input border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue "
//             />
//             <button
//               onClick={() => setActiveMessages(null)}
//               className="mt-4 bg-fire-opal text-white py-2 px-4 rounded-md hover:bg-fire-opal font-montserrat-light"
//             >
//               Close
//             </button>
//           </div>
//         </section>
//       )}
//     </div>
//   );
// };

// export default CommissionedServices;

////////////////////////////////////////////////////////////////////////////////////////////////////////

// src/pages/CommissionedService.tsx
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'; // Assuming you use Redux for auth state
import { RootState } from '../store/store'; // Adjust path to your RootState interface
import { updateProfileServicesApi, ServicePayload } from '../api/artwork'; // Import the new API function and interface
import { UserState } from '../store/userSlice';

// --- INTERFACES (Adjusted to match backend service structure for "Offered Services") ---
// This interface reflects how you store your services in the backend (ArtistProfile model)
interface OfferedService extends ServicePayload {
  // If your backend adds an _id to subdocuments, you might want to include it here
  // _id?: string;
}

interface PendingService {
  id: number; // This is a frontend-only ID, not from backend
  clientName: string;
  chosenService: string;
  status: 'Pending' | 'Delivered' | 'In Progress' | 'Completed';
  customRequirements: string;
  messages: { id: number; text: string; sender: 'Client' | 'You' }[];
}

const CommissionedServices: React.FC = () => {
  // --- AUTHENTICATION & PROFILE ID ---
  // Assuming you get artistId and authToken from Redux state.
  // Adjust `state.auth` and `user.id` based on your actual Redux store structure.
    const user = useSelector((state: { user: UserState }) => state.user);
  // IMPORTANT: Ensure `user.id` here is the correct ID for the ArtistProfile document
  const artistId = user._id; 
  const authToken=localStorage.getItem("token");

  // --- STATE FOR OFFERED SERVICES (from DB) ---
  // Initialize as empty array. You'll likely fetch these from the backend on component mount.
  const [offeredServices, setOfferedServices] = useState<OfferedService[]>([]);

  // --- STATE FOR NEW SERVICE INPUTS (aligned with backend fields) ---
  const [newService, setNewService] = useState({
    serviceType: '',   // Corresponds to 'field' in old UI
    serviceTitle: '',  // Corresponds to 'service' in old UI
    deliveryTime: '',
    serviceCost: '',   // Corresponds to 'cost' in old UI (as string for input)
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // --- LOCAL STATE FOR PENDING SERVICES (if not fetched from backend) ---
  // Keep your existing static data if these are purely frontend display.
  const [pendingServices, setPendingServices] = useState<PendingService[]>([
    { id: 1, clientName: 'Reema Al-Saif', chosenService: 'Abstract Painting', status: 'In Progress', customRequirements: 'Size: 36x48 inches, Colors: Blue and Gold tones, Price: $500', messages: [{ id: 1, text: 'Can you add more gold highlights?', sender: 'Client' }, { id: 2, text: 'Absolutely, I’ll emphasize the gold highlights more.', sender: 'You' }], },
    { id: 2, clientName: 'Ahmed Al-Harbi', chosenService: 'Large-Scale Mural', status: 'Pending', customRequirements: 'Theme: Urban Modern, Dimensions: 10x15 ft, Price: $2,000', messages: [{ id: 1, text: 'Can the design incorporate a skyline?', sender: 'Client' },], },
    { id: 3, clientName: 'Fatima Noor', chosenService: 'Custom Calligraphy Art', status: 'Completed', customRequirements: 'Text: “Sabr” in Arabic, Style: Modern, Frame: Black Wood, Price: $150', messages: [{ id: 1, text: 'I love how it turned out. Thank you!', sender: 'Client' }, { id: 2, text: 'You’re welcome! I’m glad you liked it.', sender: 'You' },], },
    { id: 4, clientName: 'Hassan Malik', chosenService: 'Portrait Sketch', status: 'Pending', customRequirements: 'Size: A3, Material: Pencil, Price: $75', messages: [{ id: 1, text: 'Can the shading be softer around the jawline?', sender: 'Client' }, { id: 2, text: 'Sure, I’ll make the shading around the jawline softer.', sender: 'You' },], },
    { id: 5, clientName: 'Layla Ibrahim', chosenService: 'Conceptual Artwork', status: 'In Progress', customRequirements: 'Theme: Journey of Life, Medium: Acrylic, Price: $800', messages: [{ id: 1, text: 'Can you make the transitions between colors more gradual?', sender: 'Client' }, { id: 2, text: 'Absolutely, I’ll make the transitions smoother.', sender: 'You' },], },
  ]);

  const [activeMessages, setActiveMessages] = useState<null | {
    serviceId: number;
    clientName: string;
    messages: { id: number; text: string; sender: 'Client' | 'You' }[];
  }>(null);

  // --- HANDLERS ---
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewService({ ...newService, [name]: value });
  };

  // --- FUNCTION TO ADD/UPDATE SERVICE ON BACKEND ---
  const addService = async () => {
    // Basic frontend validation
    if (!newService.serviceType || !newService.serviceTitle || !newService.serviceCost || !newService.deliveryTime) {
      alert('Please fill out all fields for the new service!');
      return;
    }

    // Ensure artistId and authToken are available
    if (!artistId || !authToken) {
      setError('Authentication information missing. Please log in.');
      return;
    }

    setLoading(true);
    setError(null); // Clear previous errors
    setSuccessMessage(null); // Clear previous success messages

    try {
      // Create the new service object (aligned with backend ServicePayload)
      const serviceToAdd: ServicePayload = {
        serviceType: newService.serviceType,
        serviceTitle: newService.serviceTitle,
        deliveryTime: newService.deliveryTime,
        serviceCost: newService.serviceCost,
      };

      // Create the *new complete array* of services to send to the backend.
      // The backend controller replaces the entire array, so we must send all services.
      const updatedServicesArray = [...offeredServices, serviceToAdd];

      // Call the backend API
      const response = await updateProfileServicesApi(
        artistId,
        updatedServicesArray, // Send the *entire new array*
        authToken
      );

      if ('message' in response) {
        // This indicates an error object returned by the API function
        setError(response.message);
      } else {
        // Success: Update local state with the services returned from the backend.
        // Assuming backend returns the updated profile with the new services array.
        setOfferedServices(response.data.profile.services);
        setSuccessMessage(response.data.message || 'Service added successfully!');
        setNewService({ serviceType: '', serviceTitle: '', deliveryTime: '', serviceCost: '' }); // Clear form
      }
    } catch (err: any) {
      console.error("Error adding service:", err);
      setError(err.message || 'Failed to add service. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // --- Optional: Fetch existing services on component mount ---
  // This is crucial for correctly handling updates, as the backend REPLACES the array.
  // You'll need a separate API endpoint on the backend to fetch a single artist's profile.
  useEffect(() => {
    const fetchArtistServices = async () => {
      if (!artistId || !authToken) {
        console.log("Artist ID or token not available, skipping service fetch.");
        return;
      }
      setLoading(true);
      setError(null);
      try {
        // TODO: Implement an API call to fetch the artist's profile by artistId.
        // Example (assuming you have a getArtistProfileApi function):
        // const response = await getArtistProfileApi(artistId, authToken);
        // if (response && 'profile' in response.data) {
        //   setOfferedServices(response.data.profile.services || []);
        // } else {
        //   setError("Failed to fetch artist profile services.");
        // }

        // For now, if no fetch API, initialize with an empty array or static data.
        console.log("Placeholder for fetching artist services from backend.");
        setOfferedServices([]); // Set to empty or pre-existing data until fetch is implemented
      } catch (err: any) {
        console.error("Error fetching artist services:", err);
        setError(err.message || "Failed to fetch existing services.");
      } finally {
        setLoading(false);
      }
    };

    fetchArtistServices();
  }, [artistId, authToken]); // Depend on artistId and authToken so it fetches when they become available


  // --- PENDING SERVICES LOGIC (Remains unchanged as per request) ---
  const markAsDelivered = (id: number) => {
    setPendingServices((prev) =>
      prev.map((service) =>
        service.id === id ? { ...service, status: 'Delivered' } : service
      )
    );
  };

  const viewMessages = (id: number) => {
    const pendingService = pendingServices.find((service) => service.id === id);
    if (pendingService) {
      setActiveMessages({
        serviceId: pendingService.id,
        clientName: pendingService.clientName,
        messages: pendingService.messages,
      });
    }
  };

  const sendMessage = (text: string) => {
    if (activeMessages) {
      setPendingServices((prev) =>
        prev.map((service) =>
          service.id === activeMessages.serviceId
            ? {
                ...service,
                messages: [
                  ...service.messages,
                  { id: service.messages.length + 1, text, sender: 'You' },
                ],
              }
            : service
        )
      );
    }
  };

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Create Commissioned Service */}
      <section>
        <h2 className="text-xl text-yankees-blue font-montserrat-regular mb-4">Create Commissioned Service</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="serviceType" // CHANGED NAME
            placeholder="Service Type (e.g., Painting, Consultation)" // CHANGED PLACEHOLDER
            value={newService.serviceType}
            onChange={handleInputChange}
            className="form-input border border-gray-300 rounded-md p-2 w-full text-yankees-blue font-montserrat-light"
          />
          <input
            type="text"
            name="serviceTitle" // CHANGED NAME
            placeholder="Service Title (e.g., Custom Oil Portrait)" // CHANGED PLACEHOLDER
            value={newService.serviceTitle}
            onChange={handleInputChange}
            className="form-input border border-gray-300 rounded-md p-2 w-full text-yankees-blue font-montserrat-light"
          />
          <input
            type="text" // Keep as text, as serviceCost is string in DB
            name="serviceCost" // CHANGED NAME
            placeholder="Service Cost (e.g., SAR 500-1500)" // CHANGED PLACEHOLDER
            value={newService.serviceCost}
            onChange={handleInputChange}
            className="form-input border border-gray-300 rounded-md p-2 w-full text-yankees-blue font-montserrat-light"
          />
          <input
            type="text"
            name="deliveryTime"
            placeholder="Delivery Time (e.g., 2-3 weeks)"
            value={newService.deliveryTime}
            onChange={handleInputChange}
            className="form-input border border-gray-300 rounded-md p-2 w-full text-yankees-blue font-montserrat-light"
          />
        </div>
        <button
          onClick={addService}
          className="mt-4 bg-yankees-blue text-white py-2 px-6 rounded-md hover:bg-yankees-blue font-montserrat-light"
          disabled={loading} // Disable button while loading
        >
          {loading ? 'Adding Service...' : 'Add Service'}
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
      </section>

      {/* Offered Services (Now from backend, if fetched) */}
      <section>
        <h2 className="text-xl font-montserrat-regular text-yankees-blue mb-4">Offered Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {loading && <p>Loading services...</p>}
          {!loading && offeredServices.length === 0 && <p>No services offered yet. Add one above!</p>}
          {offeredServices.map((service, index) => ( // Using index as key is okay if items don't reorder or get deleted
            <div key={index} className="border p-4 rounded-md shadow-md">
              <h3 className="text-lg font-montserrat-regular text-yankees-blue">{service.serviceTitle}</h3>
              <p className='font-montserrat-light text-yankees-blue'>Type: {service.serviceType}</p>
              <p className='font-montserrat-light text-yankees-blue'>Cost: {service.serviceCost}</p>
              <p className='font-montserrat-light text-yankees-blue'>Delivery Time: {service.deliveryTime}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pending Services (remains local state for now) */}
      <section>
        <h2 className="text-xl text-yankees-blue font-montserrat-regular mb-4">Pending Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {pendingServices.map((service) => (
            <div key={service.id} className="border p-4 rounded-md shadow-md">
              <h3 className="text-lg font-montserrat-regular text-yankees-blue">{service.chosenService}</h3>
              <p className='font-montserrat-light text-yankees-blue'>Client: {service.clientName}</p>
              <p className='font-montserrat-light text-yankees-blue'>Status: {service.status}</p>
              <p className='font-montserrat-light text-yankees-blue'>Requirements: {service.customRequirements}</p>
              <div className="flex gap-4 mt-2">
                <button
                  onClick={() => markAsDelivered(service.id)}
                  className="bg-madder-lake text-white py-1 px-4 rounded-md hover:bg-madder-lake font-montserrat-light"
                >
                  Mark as Delivered
                </button>
                <button
                  onClick={() => viewMessages(service.id)}
                  className="bg-fire-opal text-white py-1 px-4 rounded-md hover:bg-fire-opal font-montserrat-light"
                >
                  View Messages
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Active Messages Section */}
      {activeMessages && (
        <section className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
            <h2 className="text-xl font-montserrat-regular text-yankees-blue mb-4">
              Messages with {activeMessages.clientName}
            </h2>
            <ul className="space-y-2 mb-4">
              {activeMessages.messages.map((msg) => (
                <li
                  key={msg.id}
                  className={`p-2 rounded-md font-montserrat-light text-yankees-blue ${
                    msg.sender === 'You' ? 'bg-blue-100' : 'bg-gray-100'
                  }`}
                >
                  <strong>{msg.sender}:</strong> {msg.text}
                </li>
              ))}
            </ul>
            <input
              type="text"
              placeholder="Reply..."
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  sendMessage(e.currentTarget.value);
                  e.currentTarget.value = '';
                }
              }}
              className="form-input border border-gray-300 rounded-md p-2 w-full font-montserrat-light text-yankees-blue "
            />
            <button
              onClick={() => setActiveMessages(null)}
              className="mt-4 bg-fire-opal text-white py-2 px-4 rounded-md hover:bg-fire-opal font-montserrat-light"
            >
              Close
            </button>
          </div>
        </section>
      )}
    </div>
  );
};

export default CommissionedServices;