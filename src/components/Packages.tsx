import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import 'swiper/css/effect-fade';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';


const Packages: React.FC = () => {

    const tourPackages = [
        {
          id: 1,
          title: "Maldives: The Travel and Experience of a Lifetime",
          location: "Colombo, England",
          duration: "4 Days - 2 Nights",
          discount: "20%",
          price: 500,
          originalPrice: 800,
          image: "https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/12/5-1-900x490.jpg"
        },
        {
          id: 2,
          title: "Thailand: A Cultural and Scenic Adventure",
          location: "Bangkok, Thailand",
          duration: "5 Days - 3 Nights",
          discount: "15%",
          price: 400,
          originalPrice: 470,
          image: "https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/12/4-1-900x490.jpg"
        },
        {
          id: 3,
          title: "Switzerland: The Alpine Dream",
          location: "Zurich, Switzerland",
          duration: "6 Days - 4 Nights",
          discount: "10%",
          price: 1000,
          originalPrice: 1200,
          image: "https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/12/3-1-900x490.jpg"
        },
        {
          id: 4,
          title: "Bali: A Tropical Paradise Journey",
          location: "Bali, Indonesia",
          duration: "7 Days - 5 Nights",
          discount: "25%",
          price: 700,
          originalPrice: 950,
          image: "https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/12/2-1-900x490.jpg"
        }
      ];

    return (
        <div className="container mx-auto lg:py-20 py-16 px-4 lg:px-0">
            <h3 className="lg:text-2xl text-xl text-secondary font-medium text-center">Awesome Tours</h3>
            <h3 className="lg:text-4xl text-2xl my-5 font-bold text-center">Best Holiday Package</h3>
            {/* Swiper */}
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
          1280: { slidesPerView: 3, spaceBetween: 80 }, // Desktops
        }}
              
              navigation={true}
              modules={[Pagination, Navigation,Autoplay]}
              className="container px-4"
            >
                 {/* cards */}
            <div>
              {
                tourPackages?.map((tour,index) => <>
                 <SwiperSlide key={index}>
                  {/* card1 */} 
                <div className="lg:h-[546px] my-16 rounded-b-xl shadow-xl">
                    <div className="overflow-hidden rounded-t-xl">
                        <img className="transition-all lg:h-[290px] object-cover w-full bg-center duration-700 hover:scale-110 rounded-t-xl " src="https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/12/5-1-900x490.jpg" alt="" />
                    </div>
                    <div className="p-5">
                        <h3 className="text-2xl my-4 font-bold">{tour?.title}</h3>
                        <div className="lg:flex justify-between items-center">
                            <div className="pr-3">
                                <p className="flex items-center gap-2 text-gray-700 font-medium"><FaMapMarkerAlt /> {tour?.location}</p>
                                <p className="flex items-center gap-2 text-gray-700 font-medium"><FaCalendarDays /> 4 Days - 2 Night</p>
                            </div>
                            <div className="lg:border-l-2 pl-3">
                                <p className="bg-secondary text-sm w-[80px] text-white px-3 py-[2px] rounded-full">20% off</p>
                                 <div className="flex items-center gap-2">
                                 <h3 className="text-3xl font-bold">500$</h3>
                                 <h3 className="text-xl line-through">800$</h3>
                                 </div>
                            </div>
                        </div>
                        <button className="w-full  mt-3 font-medium rounded-xl text-white bg-primary p-3">View Details</button>
                    </div>
                </div>
               </SwiperSlide>
                </>)
              }
             
            </div>
            </Swiper>
           
        </div>
    );
};

export default Packages;