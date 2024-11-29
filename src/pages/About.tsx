import ab from "../../public/ab.jpg"
import { FaStar } from "react-icons/fa6";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import 'swiper/css/effect-fade';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

const About = () => {

    const reviews = [
        {
          "date": "15 Nov 2024",
          "image": "https://i.ibb.co/dggZxdm/web-development-react-javascript-website-coding.jpg",
          "rating": 5,
          "name": "John Doe",
          "role": "Photographer",
          "review": "The experience was absolutely amazing! The team went above and beyond to ensure everything was perfect. The guide was knowledgeable, and the itinerary was well-planned. Would definitely recommend to friends and family."
        },
        {
          "date": "02 Oct 2024",
          "image": "https://i.ibb.co/dggZxdm/web-development-react-javascript-website-coding.jpg",
          "rating": 4,
          "name": "Jane Smith",
          "role": "Blogger",
          "review": "Overall, a great trip with some minor hiccups. The accommodations were comfortable, and the locations were stunning. The guide was helpful but could have been more engaging. Still, a memorable journey!"
        },
        {
          "date": "25 Sep 2024",
          "image": "https://i.ibb.co/dggZxdm/web-development-react-javascript-website-coding.jpg",
          "rating": 5,
          "name": "Mark Taylor",
          "role": "Adventurer",
          "review": "An unforgettable adventure! The tour covered everything I wanted to see, and the team ensured I had a smooth experience throughout. The driver was professional and punctual. Highly recommended for solo travelers!"
        }
      ]
      
    return (
        <div>
            <div
            className="h-[400px] relative bg-no-repeat bg-cover bg-center w-full"
            style={{
                backgroundImage: "url(https://i.ibb.co/J5Jf4VG/title-bg.jpg)", 
            }}
            >
             <div className="flex flex-col h-full  justify-center items-center">
                <div className="text-white text-center bg-black bg-opacity-30 p-8 lg:w-2/6 ">
                <h3 className="lg:text-2xl text-xl font-semibold ">Home / About us</h3>
                <h3 className="lg:text-4xl text-2xl  font-semibold mt-3">We helping you find<br/> <span className="text-secondary">your dream</span> vacation</h3>
                </div>
            </div> 
            </div>
            <div className="lg:max-w-[1440px] px-4 lg:px-0 my-10 lg:my-0 mx-auto ">
                {/* our story */}
               <div className="lg:flex gap-14 lg:my-20">
               <div className="lg:w-3/5 w-full">
                <h3 className="text-base font-barlow uppercase tracking-[5px]  font-normal">Our Story</h3>
                <h3 className='lg:text-[48px] text-3xl lg:my-10 lg:leading-[50px] font-bold font-popins'>The Remarkable Story of How<br/><span className='text-secondary'>TripZone Came to Life</span> </h3>
                <p className="text-base  text-[#818090]">At TripZone, our story began with a simple dream: to make exploring the world easy, enjoyable, and unforgettable. Founded by passionate travelers, we’ve grown into a trusted travel partner for countless adventurers, offering tailor-made experiences that turn dreams into reality. From breathtaking destinations to personalized itineraries, our mission has always been to help you create memories that last a lifetime.</p>
                <p className="text-base text-[#818090] mt-5"> With a deep love for discovery and a commitment to excellence, TripZone continues to inspire wanderlust and connect people with the wonders of the world. Join us on this incredible journey and let us guide you to your next great adventure!</p>
                <div className="shadow-xl mt-8 mb-10 lg:mb-0 grid grid-cols-3 gap-1 lg:gap-6 lg:p-6 p-3 rounded-lg">
                    <div>
                        <h3 className="lg:text-2xl text-lg font-medium lg:font-semibold">20,000+</h3>
                        <h3 className="lg:text-xl text-base font-medium lg:font-semibold">Happy Clients</h3>
                    </div>
                    <div>
                        <h3 className="lg:text-2xl text-lg font-medium lg:font-semibold">150+</h3>
                        <h3 className="lg:text-xl text-base font-medium lg:font-semibold">Tour Destinations</h3>
                    </div>
                    <div>
                        <h3 className="lg:text-2xl text-lg font-medium lg:font-semibold">20+</h3>
                        <h3 className="lg:text-xl text-base font-medium lg:font-semibold">Years of Experience</h3>
                    </div>
                </div>
                </div>
                <div className="lg:w-2/5">
                    <img className="w-full rounded-xl" src={ab} alt="" />
                </div>
               </div>
               {/* customer review */}
               <div className="lg:my-28 my-20">
                 <h3 className="lg:text-4xl text-2xl text-center font-medium">Customer Review</h3>
                  <div  className="my-20">
                      {/* review cards */}
                 <Swiper
                 loop={true}
                 spaceBetween={30}
                 centeredSlides={true}
                
                 slidesPerView={
                     4
                   
                   }
                   breakpoints={{
             // Responsive breakpoints
             320: { slidesPerView: 1, spaceBetween: 10 }, // Mobile
             640: { slidesPerView: 2, spaceBetween: 20 }, // Tablet
             1024: { slidesPerView: 3, spaceBetween: 30 }, // Small laptops
             1280: { slidesPerView: 3, spaceBetween: 40 }, // Desktops
           }}
                 
                 navigation={true}
                 modules={[Pagination, Navigation,Autoplay]}
                 
                 >
                       <div className="py-20 -z-30">
                  {
                    reviews?.map(review => <>
                    <SwiperSlide>
                    <div className="z-40 lg:w-[400px] my-10 p-8 relative  rounded-xl shadow-2xl">
        <div className="absolute w-[70px] h-[70px] rounded-full -top-10 left-1/2 transform -translate-x-1/2">
                <img className="rounded-full z-30 w-full h-full object-cover" src="https://i.ibb.co/dggZxdm/web-development-react-javascript-website-coding.jpg" alt="" />
            </div>
                <div className="flex justify-between items-center">
                    <p>08 Dec 2021</p>
                    <div className="flex items-center">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    </div>
                </div>
                <div className="text-center">
                    <h3 className="text-xl font-medium">{review?.name}</h3>
                    <p>Traveler</p>
                    <p className="text-[#818090] mt-3">" Loved the overall tour for all 6 days covering jaipur jodhpur and jaisalmer. worth ur money for sure. thanks. Driver was very good and polite and safe driving for all 6 days. on time pickup and drop overall. Thanks for it. "</p>
                </div>
        </div>
                    </SwiperSlide>
                    
                    </>)
                  }
                  </div>

                 </Swiper>
                  </div>
               
               </div>
            </div>
        </div>

        // st
       
        // end

    );
};

export default About;