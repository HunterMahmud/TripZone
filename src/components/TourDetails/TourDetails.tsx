// import { useState } from "react";
// import {
//   FaDollarSign,
//   FaCalendarAlt,
//   FaClipboardList,
//   FaMountain,
//   FaLightbulb,
//   FaCreditCard,
// } from "react-icons/fa";
// import { MdOutlineTipsAndUpdates } from "react-icons/md";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const tourData = {
//   title: "Majestic Himalayas",
//   location: "Nepal",
//   duration: "10 Days / 9 Nights",
//   image: "https://i.ibb.co/b5tJ24P/pexels-matthew-montrone-230847-1324803.jpg",
//   description:
//     "Discover the beauty of the Himalayas, home to Mount Everest and a rich cultural heritage. Explore stunning trekking trails, ancient monasteries, and vibrant local communities.",
//   activities: [
//     "Trekking through scenic mountain trails",
//     "Visiting ancient Buddhist monasteries",
//     "Wildlife safari in Chitwan National Park",
//   ],
//   itinerary: [
//     "Day 1: Arrival in Kathmandu",
//     "Day 2: Kathmandu City Tour",
//     "Day 3-8: Trekking in the Everest Region",
//     "Day 9: Return to Kathmandu",
//     "Day 10: Departure",
//   ], // NEW: Itinerary for detailed planning
//   highlights: [
//     "Guided tours by experienced local guides",
//     "Explore vibrant Himalayan villages",
//     "Experience traditional Nepali cuisine",
//   ],
//   bestTime: "March to May, September to November",
//   tips: ["Pack warm clothes", "Carry trekking gear", "Stay hydrated"],
//   gallery: [
//     "https://i.ibb.co/b5tJ24P/pexels-matthew-montrone-230847-1324803.jpg",
//     "https://i.ibb.co/b5tJ24P/pexels-matthew-montrone-230847-1324803.jpg",
//     "https://i.ibb.co/b5tJ24P/pexels-matthew-montrone-230847-1324803.jpg",
//   ],
//   price: 3000,
//   costBreakdown: {
//     accommodation: "1400 USD",
//     meals: "600 USD",
//     activities: "1000 USD",
//   },
// };

// interface User {
//   name: string;
//   email: string;
// }

// const user: User = {
//   name: "md Shamim",
//   email: "mdsr9519@gmail.com",
// };

// // Tour data type
// interface TourFormData {
//   fullName: string;
//   email: string;
//   phone: string;
//   passengers: string;
//   duration: string;
//   date: string;
//   specialRequests?: string;
// }

// const TourDetails: React.FC = () => {
//   const [showModal, setShowModal] = useState(false);

//   // Pre-fill extracted days dynamically
//   // const defaultDuration = parseInt(tourData.duration.split(" ")[0]) || 0;

//   const [formData, setFormData] = useState<TourFormData>({
//     fullName: "",
//     email: user?.email,
//     phone: "",
//     passengers: "",
//     duration: tourData?.duration,
//     date: "",
//     specialRequests: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (
//       !formData.fullName ||
//       !formData.email ||
//       !formData.phone ||
//       !formData.date ||
//       !formData.passengers
//     ) {
//       toast.error("Please fill out all required fields!");
//       return;
//     }

//     try {
//       console.log("Booking Data:", formData);
//       toast.success("Booking submitted successfully!");

//       setFormData({
//         fullName: "",
//         email: user?.email,
//         phone: "",
//         passengers: "",
//         duration: tourData?.duration,
//         date: "",
//         specialRequests: "",
//       });

//       setShowModal(false);
//     } catch (error) {
//       console.log(error);
//       toast.error("Something went wrong. Please try again!");
//     }
//   };

//   const {
//     title,
//     location,
//     image,
//     description,
//     activities,
//     bestTime,
//     tips,
//     itinerary, // Added Itinerary
//     highlights, // Added Highlights
//     price,
//     costBreakdown,
//     gallery,
//   } = tourData;

//   return (
//     <div className="min-h-screen">
//       {/* Header Section */}
//       <div
//         className="relative bg-cover bg-center bg-fixed h-[500px] flex items-center"
//         style={{
//           backgroundImage: `url(${image})`,
//         }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-30"></div>
//         <div className="container mx-auto relative px-6 lg:px-20 text-left">
//           <h4 className="text-xl font-barlow font-semibold text-white z-10">
//             Explore
//           </h4>
//           <h2 className="text-5xl font-poppins font-bold text-white mt-2 max-w-2xl z-10">
//             {title}
//           </h2>
//           <p className="text-2xl font-bold text-[#2095ae] font-barlow mt-2 z-10">
//             {location}
//           </p>
//         </div>
//       </div>

//       <section className="container mx-auto mb-16">
//         {/* Details Section */}
//         <section className="mt-8 bg-white p-6 rounded-lg shadow-lg">
//           <h2 className="text-2xl font-semibold text-[#0f2454] font-poppins">
//             Description
//           </h2>
//           <p className="text-gray-700 font-barlow mt-2 leading-7">
//             {description}
//           </p>

//           <div className="md:grid grid-cols-2">
//             {/* Itinerary */}
//             <div className="mt-4">
//               <h3 className="text-xl font-semibold text-[#0f2454] font-poppins flex items-center">
//                 <FaCalendarAlt className="mr-2 text-[#2095ae]" />
//                 Itinerary
//               </h3>
//               <ul className="list-disc pl-5 text-gray-700 font-barlow">
//                 {itinerary.map((day, index) => (
//                   <li key={index}>{day}</li>
//                 ))}
//               </ul>
//             </div>

//             {/* Highlights */}
//             <div className="mt-4">
//               <h3 className="text-xl font-semibold text-[#0f2454] font-poppins flex items-center">
//                 <FaMountain className="mr-2 text-[#2095ae]" />
//                 Highlights
//               </h3>
//               <ul className="list-disc pl-5 text-gray-700 font-barlow">
//                 {highlights.map((highlight, index) => (
//                   <li key={index}>{highlight}</li>
//                 ))}
//               </ul>
//             </div>

//             {/* Activities */}
//             <div className="mt-4">
//               <h3 className="text-xl font-semibold text-[#0f2454] font-poppins flex items-center">
//                 <FaClipboardList className="mr-2 text-[#2095ae]" />
//                 Activities
//               </h3>
//               <ul className="list-disc pl-5 text-gray-700 font-barlow">
//                 {activities.map((activity, index) => (
//                   <li key={index}>{activity}</li>
//                 ))}
//               </ul>
//             </div>

//             {/* Best Time */}
//             <div className="mt-4">
//               <h3 className="text-xl font-semibold text-[#0f2454] font-poppins flex items-center">
//                 <MdOutlineTipsAndUpdates className="mr-2 text-[#2095ae]" />
//                 Best Time to Visit
//               </h3>
//               <p className="text-gray-700 font-barlow">{bestTime}</p>
//             </div>

//             {/* Tips */}
//             <div className="mt-4">
//               <h3 className="text-xl font-semibold text-[#0f2454] font-poppins flex items-center">
//                 <FaLightbulb className="mr-2 text-[#2095ae]" />
//                 Travel Tips
//               </h3>
//               <ul className="list-disc pl-5 text-gray-700 font-barlow">
//                 {tips.map((tip, index) => (
//                   <li key={index}>{tip}</li>
//                 ))}
//               </ul>
//             </div>

//             {/* Pricing Info */}
//             <div className="mt-6">
//               <h3 className="text-xl font-semibold text-[#0f2454] font-poppins flex items-center">
//                 <FaCreditCard className="mr-2 text-[#2095ae]" />
//                 Pricing Info
//               </h3>
//               <div className="flex items-center text-gray-700 font-barlow mt-2">
//                 <FaDollarSign className="mr-2 text-[#2095ae]" />
//                 <span>Total Price: ${price}</span>
//               </div>
//               <ul className="list-disc pl-5 text-gray-700 font-barlow">
//                 <li>Accommodation: {costBreakdown.accommodation}</li>
//                 <li>Meals: {costBreakdown.meals}</li>
//                 <li>Activities: {costBreakdown.activities}</li>
//               </ul>
//             </div>
//           </div>
//         </section>

//         {/* Gallery */}
//         <section className="mt-8 p-6">
//           <h2 className="text-2xl font-semibold text-[#0f2454] font-poppins">
//             Gallery
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
//             {gallery.map((imgSrc, index) => (
//               <img
//                 key={index}
//                 src={imgSrc}
//                 alt={`Gallery ${index + 1}`}
//                 className="w-full h-64 object-cover rounded-lg shadow-md"
//               />
//             ))}
//           </div>
//         </section>

//         {/* Book Now Button */}
//         <div className="mt-8 text-center">
//           <button
//             onClick={() => setShowModal(true)}
//             className="bg-[#0f2454] text-white py-3 px-6 rounded font-poppins text-lg hover:bg-[#2095ae] transition-all"
//           >
//             Book Now
//           </button>
//         </div>

//         {/* Modal for Booking Form */}
//         {showModal && (
//           <div className="fixed z-50 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//             <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg">
//               <h2 className="text-2xl font-semibold text-[#0f2454] font-poppins">
//                 Book Your Trip
//               </h2>
//               <form onSubmit={handleSubmit} className="mt-4">
//                 {/* Form Fields */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <input
//                     type="text"
//                     name="fullName"
//                     required
//                     value={formData.fullName}
//                     onChange={handleChange}
//                     placeholder="Full Name"
//                     className="border border-gray-300 rounded p-3"
//                   />
//                   <input
//                     type="email"
//                     name="email"
//                     disabled
//                     value={formData.email}
//                     className="border border-gray-300 rounded p-3"
//                   />
//                 </div>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
//                   <input
//                     type="text"
//                     name="phone"
//                     required
//                     value={formData.phone}
//                     onChange={handleChange}
//                     placeholder="Phone"
//                     className="border border-gray-300 rounded p-3"
//                   />
//                   <input
//                     type="date"
//                     name="date"
//                     required
//                     value={formData.date}
//                     onChange={handleChange}
//                     className="border border-gray-300 rounded p-3"
//                   />
//                 </div>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
//                   <input
//                     type="number"
//                     name="passengers"
//                     value={formData.passengers}
//                     onChange={handleChange}
//                     min="1"
//                     placeholder="Number of Passengers"
//                     className="border border-gray-300 rounded p-3"
//                   />
//                   <input
//                     type="text"
//                     name="duration"
//                     disabled
//                     value={formData.duration}
//                     onChange={handleChange}
//                     min="1"
//                     placeholder="Duration (Days)"
//                     className="border border-gray-300 rounded p-3"
//                   />
//                 </div>
//                 <textarea
//                   name="specialRequests"
//                   value={formData.specialRequests}
//                   onChange={handleChange}
//                   placeholder="Special Requests"
//                   rows={4}
//                   className="w-full mt-4 border border-gray-300 rounded p-3"
//                 ></textarea>
//                 <button
//                   type="submit"
//                   className="w-full mt-4 bg-[#0f2454] text-white py-3 rounded"
//                 >
//                   Submit
//                 </button>
//               </form>
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="w-full mt-4 bg-red-600 text-white py-2 rounded"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         )}
//       </section>
//     </div>
//   );
// };

// export default TourDetails;

import { useState } from "react";

const TourDetails: React.FC = () => {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    duration: "",
    image: "",
    description: "",
    activities: [""],
    itinerary: [""],
    highlights: [""],
    bestTime: "",
    tips: [""],
    price: "",
    // accommodation: "",
    // meals: "",
    // activitiesCost: "",
    gallery: [""],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleArrayChange = (
    index: number,
    value: string,
    fieldName: string
  ) => {
    const updatedArray = [...formData[fieldName as keyof typeof formData]];
    updatedArray[index] = value;
    setFormData({ ...formData, [fieldName]: updatedArray });
  };

  const handleAddField = (arrayName: string) => {
    const updatedArray = [...formData[arrayName as keyof typeof formData], ""];
    setFormData({ ...formData, [arrayName]: updatedArray });
  };

  const handleRemoveField = (index: number, arrayName: string) => {
    const updatedArray = [...formData[arrayName as keyof typeof formData]];
    updatedArray.splice(index, 1);
    setFormData({ ...formData, [arrayName]: updatedArray });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Tour Data Submitted:", formData);
    // Implement submission logic (API call or database update)
    alert("Tour added successfully!");
  };

  return (
    <div className="bg-gray-50 min-h-screen container mx-auto px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full  bg-white p-8 rounded-lg shadow-lg"
      >
        <h1 className="text-3xl font-bold text-[#0f2454] font-poppins mb-6">
          Add New Tour
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <label className="block text-[#0f2454] font-barlow mb-2">
              Tour Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter tour title"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#2095ae]"
            />
          </div>

          <div>
            <label className="block text-[#0f2454] font-barlow mb-2">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter location"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#2095ae]"
            />
          </div>

          <div>
            <label className="block text-[#0f2454] font-barlow mb-2">
              Duration
            </label>
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              placeholder="Enter duration (e.g., 10 Days / 9 Nights)"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#2095ae]"
            />
          </div>

          <div>
            <label className="block text-[#0f2454] font-barlow mb-2">
              Cover Image URL
            </label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Enter image URL"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#2095ae]"
            />
          </div>
          <div>
            <label className="block text-[#0f2454] font-barlow mb-2">
              Price
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter price"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#2095ae]"
            />
          </div>
          <div>
            <label className="block text-[#0f2454] font-barlow mb-2">
              Best Time
            </label>
            <input
              type="text"
              name="bestTime"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter Best Time For The Tour"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#2095ae]"
            />
          </div>
        </div>
        <div className="mt-6">
          <label className="block text-[#0f2454] font-barlow mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Write a brief description"
            required
            rows={4}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#2095ae]"
          ></textarea>
        </div>

        {/* Dynamic fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DynamicFields
            title="Activities"
            fieldName="activities"
            data={formData.activities}
            handleArrayChange={handleArrayChange}
            handleAddField={handleAddField}
            handleRemoveField={handleRemoveField}
          />
          <DynamicFields
            title="Itinerary"
            fieldName="itinerary"
            data={formData.itinerary}
            handleArrayChange={handleArrayChange}
            handleAddField={handleAddField}
            handleRemoveField={handleRemoveField}
          />
          <DynamicFields
            title="Highlights"
            fieldName="highlights"
            data={formData.highlights}
            handleArrayChange={handleArrayChange}
            handleAddField={handleAddField}
            handleRemoveField={handleRemoveField}
          />
          <DynamicFields
            title="Travel Tips"
            fieldName="tips"
            data={formData.tips}
            handleArrayChange={handleArrayChange}
            handleAddField={handleAddField}
            handleRemoveField={handleRemoveField}
          />
          <DynamicFields
            title="Gallery" // New gallery section
            fieldName="gallery"
            // name="image"
            data={formData.gallery}
            handleArrayChange={handleArrayChange}
            handleAddField={handleAddField}
            handleRemoveField={handleRemoveField}
            inputType="url" // Pass the input type as a prop
          />
        </div>

        {/* Pricing */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div>
            <label className="block text-[#0f2454] font-barlow mb-2">
              Price
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter price"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#2095ae]"
            />
          </div>

          <div>
            <label className="block text-[#0f2454] font-barlow mb-2">
              Accommodation Cost
            </label>
            <input
              type="text"
              name="accommodation"
              value={formData.accommodation}
              onChange={handleChange}
              placeholder="Enter accommodation cost"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#2095ae]"
            />
          </div>

          <div>
            <label className="block text-[#0f2454] font-barlow mb-2">
              Meals Cost
            </label>
            <input
              type="text"
              name="meals"
              value={formData.meals}
              onChange={handleChange}
              placeholder="Enter meals cost"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#2095ae]"
            />
          </div>
        </div> */}

        <div className="text-center mt-8">
          <button
            type="submit"
            className="bg-[#0f2454] text-white font-poppins py-3 px-6 rounded-lg hover:bg-[#2095ae] transition duration-200"
          >
            Add Tour
          </button>
        </div>
      </form>
    </div>
  );
};

export default TourDetails;

/* Dynamic fields for array inputs */
interface DynamicFieldsProps {
  title: string;
  fieldName: string;
  data: string[];
  handleArrayChange: (
    index: number,
    field: string,
    value: string
    // arrayName: string
  ) => void;
  handleAddField: (arrayName: string) => void;
  handleRemoveField: (index: number, arrayName: string) => void;
  inputType?: string; // Optional prop for input type
}

const DynamicFields: React.FC<DynamicFieldsProps> = ({
  title,
  fieldName,
  data,
  handleArrayChange,
  handleAddField,
  handleRemoveField,
  inputType = "text", // Default to "text" if not provided
}) => {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold font-poppins text-[#0f2454]">
        {title}
      </h3>
      {data.map((item, index) => (
        <div className="flex gap-3 items-center mt-2" key={index}>
          <input
            type={inputType}
            value={item}
            onChange={
              (e) => handleArrayChange(index, e.target.value, fieldName) // Fix here
            }
            placeholder={`Enter ${title.toLowerCase()} item`}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#2095ae]"
          />

          {data.length > 1 && (
            <button
              type="button"
              onClick={() => handleRemoveField(index, fieldName)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Remove
            </button>
          )}
        </div>
      ))}
      <button
        type="button"
        onClick={() => handleAddField(fieldName)}
        className="mt-3 bg-[#2095ae] text-white font-poppins py-2 px-4 rounded-lg"
      >
        Add {title} Item
      </button>
    </div>
  );
};
