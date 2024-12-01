import { useEffect, useState } from "react";
import {
  FaDollarSign,
  FaCalendarAlt,
  FaClipboardList,
  FaMountain,
  FaLightbulb,
  FaCreditCard,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
// import { useParams } from "react-router-dom";

// const tourData = {
//   id: 1,
//   title: "Majestic Himalayas",
//   country: "Bangladesh",
//   location: "Sundarbon",
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
//   // bestTime: "March to May, September to November",
//   tips: ["Pack warm clothes", "Carry trekking gear", "Stay hydrated"],
//   gallery: [
//     "https://i.ibb.co/b5tJ24P/pexels-matthew-montrone-230847-1324803.jpg",
//     "https://i.ibb.co/b5tJ24P/pexels-matthew-montrone-230847-1324803.jpg",
//     "https://i.ibb.co/b5tJ24P/pexels-matthew-montrone-230847-1324803.jpg",
//   ],
//   price: 3000,
//   // costBreakdown: {
//   //   accommodation: "1400 USD",
//   //   meals: "600 USD",
//   //   activities: "1000 USD",
//   // },
// };

const travelGuides = ["Shamim", "Mahmud", "Hisam", "Antor", "Shohana"];

interface User {
  name: string;
  email: string;
}

const user: User = {
  name: "md Shamim",
  email: "mdsr9519@gmail.com",
};

// Tour data type
interface TourData {
  id: number;
  title: string;
  country: string;
  location: string;
  duration: string;
  image: string;
  description: string;
  activities: string[];
  itinerary: string[];
  highlights: string[];
  tips: string[];
  gallery: string[];
  price: number;
}

interface TourFormData {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  travelGuide: string;
  passengers: string;
  duration: string;
  date: string;
  specialRequests?: string;
  tourTitle: string;
  tourCountry: string;
  tourLocation: string;
  tourPrice: number;
}

const TourDetails: React.FC = () => {
  const { id } = useParams();
  const [tourData, setTourData] = useState<TourData | null>(null);
  const [formData, setFormData] = useState<TourFormData>({
    id: 0,
    fullName: "",
    email: user?.email,
    phone: "",
    travelGuide: "",
    passengers: "",
    duration: "",
    date: "",
    specialRequests: "",
    tourTitle: "",
    tourCountry: "",
    tourLocation: "",
    tourPrice: 0,
  });
  const [showModal, setShowModal] = useState(false);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchTourData = async () => {
      try {
        const response = await axiosPublic.get(`/get-packages/${id}`);
        console.log(response.data.package);
        setTourData(response?.data?.package);

        setFormData({
          id: response.data.id,
          fullName: "",
          email: user?.email,
          phone: "",
          travelGuide: "",
          passengers: "",
          duration: response.data.package.duration,
          date: "",
          specialRequests: "",
          tourTitle: response.data.package.title,
          tourCountry: response.data.package.country,
          tourLocation: response.data.package.location,
          tourPrice: response.data.package.price,
        });
      } catch (error) {
        console.error("Error fetching tour data:", error);
        toast.error("Failed to load tour data. Please try again.");
      }
    };

    fetchTourData();
  }, [id, axiosPublic]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prevData) => {
      if (!prevData) return prevData;
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData) return;

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.date ||
      !formData.passengers
    ) {
      toast.error("Please fill out all required fields!");
      return;
    }

    const bookingInfo = {
      ...formData,
      bookingDate: new Date(),
      status: "pending",
    };

    try {
      const response = await axiosPublic.post("/add-booking", bookingInfo);
      console.log("Booking Response:", response.data);

      toast.success("Booking submitted successfully!");

      setFormData({
        id: tourData!.id,
        fullName: "",
        email: user?.email,
        phone: "",
        travelGuide: "",
        passengers: "",
        duration: tourData!.duration,
        date: "",
        specialRequests: "",
        tourTitle: tourData!.title,
        tourCountry: tourData!.country,
        tourLocation: tourData!.location,
        tourPrice: tourData!.price,
      });

      setShowModal(false);
    } catch (error) {
      console.error("Error submitting booking:", error);
      toast.error("Something went wrong. Please try again!");
    }
  };

  if (!tourData) {
    return <p>Loading...</p>;
  }

  const {
    title,
    country,
    location,
    image,
    description,
    activities,
    itinerary,
    highlights,
    tips,
    gallery,
    price,
  } = tourData;

  // // Tour data type
  // interface TourFormData {
  //   id: number;
  //   fullName: string;
  //   email: string;
  //   phone: string;
  //   travelGuide: string;
  //   passengers: string;
  //   duration: string;
  //   date: string;
  //   specialRequests?: string;
  //   tourTitle: string;
  //   tourCountry: string;
  //   tourLocation: string;
  //   tourPrice: number;
  // }

  // const TourDetails: React.FC = () => {
  //   const [showModal, setShowModal] = useState(false);
  //   const axiosPublic = useAxiosPublic();
  //   // const { id } = useParams<{ id: string }>();

  // const [formData, setFormData] = useState<TourFormData>({
  //   id: tourData.id,
  //   fullName: "",
  //   email: user?.email,
  //   phone: "",
  //   travelGuide: "",
  //   passengers: "",
  //   duration: tourData?.duration,
  //   date: "",
  //   specialRequests: "",
  //   tourTitle: tourData.title,
  //   tourCountry: tourData.country,
  //   tourLocation: tourData.location,
  //   tourPrice: tourData.price,
  // });

  //   const handleChange = (
  //     e: React.ChangeEvent<
  //       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  //     >
  //   ) => {
  //     const { name, value } = e.target;
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       [name]: value,
  //     }));
  //   };

  //   const handleSubmit = async (e: React.FormEvent) => {
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

  //     const bookingInfo = {
  //       ...formData,
  //       bookingDate: new Date(),
  //       status: "pending",
  //     };

  //     try {
  //       // Submit booking data using axiosPublic
  //       const response = await axiosPublic.post("/add-booking", bookingInfo);
  //       console.log("Booking Response:", response.data);

  //       toast.success("Booking submitted successfully!");

  //       setFormData({
  //         id: tourData.id,
  //         fullName: "",
  //         email: user?.email,
  //         phone: "",
  //         travelGuide: "",
  //         passengers: "",
  //         duration: tourData?.duration,
  //         date: "",
  //         specialRequests: "",
  //         tourTitle: tourData.title,
  //         tourCountry: tourData.country,
  //         tourLocation: tourData.location,
  //         tourPrice: tourData.price,
  //       });

  //       setShowModal(false);
  //     } catch (error) {
  //       console.error("Error submitting booking:", error);
  //       toast.error("Something went wrong. Please try again!");
  //     }
  //   };

  //   const {
  //     title,
  //     country,
  //     location,
  //     image,
  //     description,
  //     activities,
  //     // bestTime,
  //     tips,
  //     itinerary, // Added Itinerary
  //     highlights, // Added Highlights
  //     price,
  //     // costBreakdown,
  //     gallery,
  //   } = tourData;

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center bg-fixed h-[500px] flex items-center"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="container mx-auto relative px-6 lg:px-20 text-left">
          <h4 className="text-xl font-barlow font-semibold text-white z-10">
            Explore
          </h4>
          <h2 className="text-5xl font-popins font-bold text-white mt-2 max-w-2xl z-10">
            {title}
          </h2>
          <p className="text-2xl font-bold text-[#2095ae] font-barlow mt-2 z-10 flex items-center">
            <FaMapMarkerAlt className="mr-2" />
            {location}, {country}
          </p>
        </div>
      </div>

      <section className="container mx-auto mb-16">
        {/* Details Section */}
        <section className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-[#0f2454] font-popins">
            Description
          </h2>
          <p className="text-gray-700 font-barlow mt-2 leading-7">
            {description}
          </p>

          <div className="md:grid grid-cols-2">
            {/* Itinerary */}
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-[#0f2454] font-popins flex items-center">
                <FaCalendarAlt className="mr-2 text-[#2095ae]" />
                Itinerary ({formData.duration})
              </h3>
              <ul className="list-disc pl-5 text-gray-700 font-barlow">
                {itinerary?.map((day, index) => (
                  <li key={index}>{day}</li>
                ))}
              </ul>
            </div>

            {/* Highlights */}
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-[#0f2454] font-popins flex items-center">
                <FaMountain className="mr-2 text-[#2095ae]" />
                Highlights
              </h3>
              <ul className="list-disc pl-5 text-gray-700 font-barlow">
                {highlights?.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>

            {/* Activities */}
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-[#0f2454] font-popins flex items-center">
                <FaClipboardList className="mr-2 text-[#2095ae]" />
                Activities
              </h3>
              <ul className="list-disc pl-5 text-gray-700 font-barlow">
                {activities?.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
            </div>

            {/* Best Time */}
            {/* <div className="mt-4">
              <h3 className="text-xl font-semibold text-[#0f2454] font-popins flex items-center">
                <MdOutlineTipsAndUpdates className="mr-2 text-[#2095ae]" />
                Best Time to Visit
              </h3>
              <p className="text-gray-700 font-barlow">{bestTime}</p>
            </div> */}

            {/* Tips */}
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-[#0f2454] font-popins flex items-center">
                <FaLightbulb className="mr-2 text-[#2095ae]" />
                Travel Tips
              </h3>
              <ul className="list-disc pl-5 text-gray-700 font-barlow">
                {tips?.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>

            {/* Pricing Info */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-[#0f2454] font-popins flex items-center">
                <FaCreditCard className="mr-2 text-[#2095ae]" />
                Pricing Info
              </h3>
              <div className="flex items-center text-gray-700 font-barlow mt-2">
                <FaDollarSign className="mr-2 text-[#2095ae]" />
                <span>Total Price: ${price}</span>
              </div>
              {/* <ul className="list-disc pl-5 text-gray-700 font-barlow">
                <li>Accommodation: {costBreakdown.accommodation}</li>
                <li>Meals: {costBreakdown.meals}</li>
                <li>Activities: {costBreakdown.activities}</li>
              </ul> */}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="mt-8 p-6">
          <h2 className="text-2xl font-semibold text-[#0f2454] font-popins">
            Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            {gallery?.map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            ))}
          </div>
        </section>

        {/* Book Now Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowModal(true)}
            className="bg-[#0f2454] text-white py-3 px-6 rounded font-popins text-lg hover:bg-[#2095ae] transition-all"
          >
            Book Now
          </button>
        </div>

        {/* Modal for Booking Form */}
        {showModal && (
          <div className="fixed z-50 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg">
              <h2 className="text-2xl font-semibold text-[#0f2454] font-popins">
                Book Your Trip
              </h2>
              <form onSubmit={handleSubmit} className="mt-4">
                {/* Form Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="border border-gray-300 rounded p-3"
                  />
                  <input
                    type="email"
                    name="email"
                    disabled
                    value={formData.email}
                    className="border border-gray-300 rounded p-3"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <input
                    type="text"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="border border-gray-300 rounded p-3"
                  />
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split("T")[0]} // Restrict to future dates
                    className="border border-gray-300 rounded p-3"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <input
                    type="number"
                    name="passengers"
                    value={formData.passengers}
                    onChange={handleChange}
                    min="1"
                    placeholder="Number of Passengers"
                    className="border border-gray-300 rounded p-3"
                  />
                  {/* <input
                    type="text"
                    name="duration"
                    disabled
                    value={formData.duration}
                    onChange={handleChange}
                    placeholder="Duration (Days)"
                    className="border border-gray-300 rounded p-3"
                  /> */}
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="travelGuide"
                    className="block text-gray-700 font-barlow mb-2"
                  >
                    Choose Your Travel Guide
                  </label>
                  <select
                    name="travelGuide"
                    required
                    value={formData.travelGuide}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded p-3"
                  >
                    <option value="" disabled>
                      Select a Guide
                    </option>
                    {travelGuides.map((guide) => (
                      <option key={guide} value={guide}>
                        {guide}
                      </option>
                    ))}
                  </select>
                </div>

                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  placeholder="Special Requests"
                  rows={3}
                  className="w-full mt-4 border border-gray-300 rounded p-3"
                ></textarea>
                <div className="flex flex-row-reverse justify-between mt-4">
                  <button
                    type="submit"
                    className="w-[48%] bg-[#0f2454] text-white py-3 rounded"
                  >
                    Submit
                  </button>
                  <button
                    onClick={() => setShowModal(false)}
                    className="w-[48%] bg-red-600 text-white py-3 rounded"
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default TourDetails;
