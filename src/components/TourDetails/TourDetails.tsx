import { useState } from "react";
import { FaDollarSign } from "react-icons/fa";

const tourData = {
  title: "Majestic Himalayas",
  location: "Nepal",
  image: "https://i.ibb.co/b5tJ24P/pexels-matthew-montrone-230847-1324803.jpg",
  description:
    "Discover the beauty of the Himalayas, home to Mount Everest and a rich cultural heritage. Explore stunning trekking trails, ancient monasteries, and vibrant local communities.",
  activities: ["Trekking", "Cultural Tours", "Wildlife Safari"],
  bestTime: "March to May, September to November",
  tips: ["Pack warm clothes", "Carry trekking gear", "Stay hydrated"],
  gallery: [
    "https://i.ibb.co/b5tJ24P/pexels-matthew-montrone-230847-1324803.jpg",
    "https://i.ibb.co/b5tJ24P/pexels-matthew-montrone-230847-1324803.jpg",
    "https://i.ibb.co/b5tJ24P/pexels-matthew-montrone-230847-1324803.jpg",
  ],
  price: 3000,
  costBreakdown: {
    accommodation: "1400 USD",
    meals: "600 USD",
    activities: "1000 USD",
  },
};

const TourDetails: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const {
    title,
    location,
    image,
    description,
    activities,
    bestTime,
    tips,
    price,
    costBreakdown,
    gallery,
  } = tourData;

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center bg-fixed h-[500px] flex items-center"
        style={{
          backgroundImage: `url(${image})`, // Use the dynamic image URL here
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Header Content */}
        <div className="container mx-auto relative px-6 lg:px-20 text-left">
          <h4 className="text-xl font-barlow font-semibold text-white z-10">
            Explore
          </h4>
          <h2 className="text-5xl font-poppins font-bold text-white mt-2 max-w-2xl z-10">
            {title}
          </h2>
          <p className="text-2xl font-bold text-[#2095ae] font-barlow mt-2 z-10">
            {location}
          </p>
        </div>
      </div>

      <section className="container mx-auto mb-16">
        {/* Details Section */}
        <section className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-[#0f2454] font-poppins">
            Description
          </h2>
          <p className="text-gray-700 font-barlow mt-2 leading-7">
            {description}
          </p>
          {/* Activities */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-[#0f2454] font-poppins">
              Activities
            </h3>
            <ul className="list-disc pl-5 text-gray-700 font-barlow">
              {activities.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
          </div>
          {/* Best Time to Visit */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-[#0f2454] font-poppins">
              Best Time to Visit
            </h3>
            <p className="text-gray-700 font-barlow">{bestTime}</p>
          </div>
          {/* Travel Tips */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-[#0f2454] font-poppins">
              Travel Tips
            </h3>
            <ul className="list-disc pl-5 text-gray-700 font-barlow">
              {tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>

          {/* Pricing Info */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-[#0f2454] font-poppins">
              Pricing Info
            </h3>
            <div className="flex items-center text-gray-700 font-barlow mt-2">
              <FaDollarSign className="mr-2 text-[#2095ae]" />
              <span>Total Price: ${price}</span>
            </div>
            <ul className="list-disc pl-5 text-gray-700 font-barlow">
              <li>Accommodation: {costBreakdown.accommodation}</li>
              <li>Meals: {costBreakdown.meals}</li>
              <li>Activities: {costBreakdown.activities}</li>
            </ul>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="mt-8 p-6">
          <h2 className="text-2xl font-semibold text-[#0f2454] font-poppins">
            Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            {gallery.map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc}
                // alt={Gallery ${index + 1}}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            ))}
          </div>
        </section>

        {/* Book Now Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowModal(true)}
            className="bg-[#0f2454] text-white py-3 px-6 rounded font-poppins text-lg hover:bg-[#2095ae] transition-all"
          >
            Book Now
          </button>
        </div>

        {/* Modal for Booking Form */}
        {showModal && (
          <div className="fixed z-50 inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-all duration-300 ease-in-out">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-full sm:max-w-lg md:max-w-2xl w-full mx-4">
              <h2 className="text-2xl font-semibold text-[#0f2454] font-poppins">
                Book Your Trip
              </h2>
              <form className="mt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="border border-gray-300 rounded p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2095ae]"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="border border-gray-300 rounded p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2095ae]"
                  />
                </div>
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Phone"
                    className="w-full border border-gray-300 rounded p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2095ae]"
                  />
                </div>
                <div className="mt-4">
                  <input
                    type="date"
                    className="w-full border border-gray-300 rounded p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2095ae]"
                  />
                </div>
                <div className="mt-4">
                  <textarea
                    placeholder="Special Requests"
                    rows={4}
                    className="w-full border border-gray-300 rounded p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2095ae]"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full mt-4 bg-[#0f2454] text-white py-3 rounded font-poppins text-lg hover:bg-[#2095ae] transition-all"
                >
                  Submit
                </button>
              </form>
              <button
                onClick={() => setShowModal(false)}
                className="w-full mt-4 bg-red-600 text-white py-2 rounded font-poppins text-lg hover:bg-red-800 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default TourDetails;
