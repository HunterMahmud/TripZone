import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// Import required modules
import { Pagination } from "swiper/modules";
import Navbar from "../../shared/Navbar";

const Contact: React.FC = () => {
  return (
    <section className="bg-gray-100  pb-16">
      {/* Header */}
      <div
        className="relative bg-cover bg-center bg-fixed h-[400px] flex items-center mb-24"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/2qLhF8p/pexels-souvenirpixels-1519088.jpg')",
        }}
      >
        <div className="absolute top-0 left-0 right-0 text-white">
          <Navbar />
        </div>
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-30"></div> */}

        {/* Header Content */}
        <div className="container mx-auto relative px-6 lg:px-20 text-left">
          <h4 className="text-xl font-barlow font-semibold text-white z-10">
            Get in Touch
          </h4>
          <h2 className="text-5xl font-popins font-bold text-secondary mt-2 max-w-2xl z-10">
            Contact Us
          </h2>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white  shadow-md rounded-lg p-8">
            <h3 className="text-2xl font-popins font-semibold text-gray-800  mb-6">
              Contact Form
            </h3>
            <form>
              <div className="grid font-barlow grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-subtitle text-gray-600 "
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Full Name"
                    className="w-full mt-2 px-4 py-2 border rounded-lg text-gray-800  bg-gray-100  focus:outline-none focus:ring focus:ring-secondary"
                    required
                  />
                </div>
                {/* Email Address */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-subtitle text-gray-600 "
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email Address"
                    className="w-full mt-2 px-4 py-2 border rounded-lg text-gray-800  bg-gray-100  focus:outline-none focus:ring focus:ring-secondary"
                    required
                  />
                </div>
              </div>
              {/* Message */}
              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-subtitle text-gray-600 "
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Your Message"
                  className="w-full mt-2 px-4 py-2 border rounded-lg text-gray-800  bg-gray-100  focus:outline-none focus:ring focus:ring-secondary"
                  required
                ></textarea>
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-6 px-4 py-2 bg-primary text-white font-semibold font-title rounded-lg shadow-md hover:bg-secondary focus:outline-none focus:ring focus:ring-secondary"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="mb-8">
              <h1 className="text-2xl font-popins font-semibold text-gray-800  mb-4">
                Travel Agency Inc.
              </h1>
              <p className="text-gray-600 ">
                Travel duru nisl quam nestibulum ac quam nec odio elementum
                sceisue the aucan ligula. Orci varius natoque penatibus et
                magnis dis parturient monte nascete ridiculus mus nellentesque
                habitant morbine.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-center">
                  <span className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full">
                    <FaPhone />
                  </span>
                  <span className="ml-4 text-gray-800 ">+123 456 7890</span>
                </li>
                <li className="flex items-center">
                  <span className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full">
                    <FaEnvelope />
                  </span>
                  <span className="ml-4 text-gray-800 ">
                    support@example.com
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full">
                    <FaMapMarkerAlt />
                  </span>
                  <span className="ml-4 text-gray-800 ">
                    123 Main Street, City, Country
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800  mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="mt-12 container mx-auto px-6 lg:px-20">
        <h3 className="text-2xl font-popins font-semibold text-gray-800  mb-4">
          Find Us on the Map
        </h3>
        <div className="w-full h-[500px] overflow-hidden rounded-lg shadow-lg">
          <iframe
            title="Google Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1136275422785!2d-122.40114868469905!3d37.79362697975633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f4b2ecf7%3A0x7d7d0e62fd0a50e6!2s123%20Main%20Street%2C%20San%20Francisco%2C%20CA%2094105!5e0!3m2!1sen!2sus!4v1698474027111!5m2!1sen!2sus"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          ></iframe>
        </div>
      </div>

      <div
        className="relative bg-cover bg-center bg-fixed h-[500px]  mt-12"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/2qLhF8p/pexels-souvenirpixels-1519088.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        <div className="container mx-auto relative px-6 lg:px-20 text-left">
          <div className="md:pt-24 pt-4">
            <h3 className="md:text-2xl text-xl font-bold text-white z-10">
              We Provide Top Destinations Especially <br /> For You. Book Now
              and Enjoy!
            </h3>
            <h2 className="md:text-5xl text-4xl font-bold text-secondary mt-2 max-w-2xl z-10">
              Contact Us
            </h2>
          </div>

          {/* Card Section */}
          <div className="absolute right-8 top-48 bg-white p-6 rounded-lg shadow-lg max-w-sm w-3/4 z-20">
            <h4 className="text-lg font-popins font-semibold text-primary mb-4">
              What Our Clients Say
            </h4>
            <p className="text-sm text-gray-700 mb-4">
              Check out the reviews from our satisfied clients below!
            </p>

            {/* Swiper for reviews */}
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="p-4">
                  <p className="text-gray-600 italic mb-2">
                    "This service is amazing! I had the best time booking my
                    trip, and the experience was flawless."
                  </p>
                  <div className="flex items-center">
                    <img
                      src="https://via.placeholder.com/50"
                      alt="User 1"
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold font-popins">John Doe</p>
                      <p className="text-gray-500 font-barlow">Traveler</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="p-4">
                  <p className="text-gray-600 italic mb-2">
                    "A seamless experience from start to finish. Great customer
                    service and smooth booking process!"
                  </p>
                  <div className="flex items-center">
                    <img
                      src="https://via.placeholder.com/50"
                      alt="User 2"
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold font-popins">Jane Smith</p>
                      <p className="text-gray-500 font-barlow">
                        Business Traveler
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="p-4">
                  <p className="text-gray-600 italic mb-2">
                    "I booked my dream vacation through this platform, and it
                    was the best decision. Highly recommend!"
                  </p>
                  <div className="flex items-center">
                    <img
                      src="https://via.placeholder.com/50"
                      alt="User 3"
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold font-popins">
                        Michael Johnson
                      </p>
                      <p className="text-gray-500 font-barlow">Explorer</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
