import slider1 from "../../assets/images/Banner Slider/15.jpg";
import slider3 from "../../assets/images/Banner Slider/16.jpg";
import slider4 from "../../assets/images/Banner Slider/17.jpg";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/effect-fade";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";

// Import Navbar
import Navbar from "../../shared/Navbar";

const Banner: React.FC = () => {
  return (
    <Swiper
      navigation={true}
      effect="fade"
      modules={[Navigation, Autoplay, EffectFade]}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      loop={true}
    >
      <SwiperSlide>
        <section
          className="relative bg-cover bg-center bg-no-repeat md:h-[100vh] h-[500px]"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${slider1})`,
          }}
        >
          <div className="absolute inset-0 sm:bg-transparent sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

          <div className="relative lg:h-screen lg:items-center">
            <div className="text-white">
              <Navbar />
            </div>
            <div className="flex items-center justify-center md:h-[540px] h-[350px]">
              <div className="text-white mx-auto md:max-w-[820px] text-center ltr:sm:text-left rtl:sm:text-right p-10 rounded-lg">
                <h1 className="text-3xl font-bold sm:text-6xl">
                  <div>Your journey starts here</div>
                </h1>
                <p className="md:text-xl text-sm mt-4 mb-10 max-w-2xl">
                  Discover and book amazing travel experiences with Travel Guide
                </p>
                <button className="border border-secondary py-[9px] bg-secondary hover:bg-transparent px-6 font-semibold">
                  Explore Destinations
                </button>
              </div>
            </div>
          </div>
        </section>
      </SwiperSlide>

      <SwiperSlide>
        <section
          className="relative bg-cover bg-fixed bg-center bg-no-repeat md:h-[100vh] h-[500px]"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${slider3})`,
          }}
        >
          <div className="absolute inset-0 sm:bg-transparent sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

          <div className="relative lg:h-screen lg:items-center">
            <div className="text-white">
              <Navbar />
            </div>
            <div className="flex items-center justify-center md:h-[540px] h-[350px]">
              <div className="text-white mx-auto md:max-w-[820px] text-center ltr:sm:text-left rtl:sm:text-right p-10 rounded-lg">
                <h1 className="text-3xl font-bold sm:text-6xl">
                  <div>Your journey starts here</div>
                </h1>
                <p className="md:text-xl text-sm mt-4 mb-10 max-w-2xl">
                  Discover and book amazing travel experiences with Travel Guide
                </p>
                <button className="border border-secondary py-[9px] bg-secondary hover:bg-transparent px-6 font-semibold">
                  Explore Destinations
                </button>
              </div>
            </div>
          </div>
        </section>
      </SwiperSlide>

      <SwiperSlide>
        <section
          className="relative bg-cover bg-fixed bg-center bg-no-repeat md:h-[100vh] h-[500px]"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${slider4})`,
          }}
        >
          <div className="absolute inset-0 sm:bg-transparent sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

          <div className="relative lg:h-screen lg:items-center">
            <div className="text-white">
              <Navbar />
            </div>
            <div className="flex items-center justify-center md:h-[540px] h-[350px]">
              <div className="text-white mx-auto md:max-w-[820px] text-center ltr:sm:text-left rtl:sm:text-right p-10 rounded-lg">
                <h1 className="text-3xl font-bold sm:text-6xl">
                  <div>Your journey starts here</div>
                </h1>
                <p className="md:text-xl text-sm mt-4 mb-10 max-w-2xl">
                  Discover and book amazing travel experiences with Travel Guide
                </p>
                <button className="border border-secondary py-[9px] bg-secondary hover:bg-transparent px-6 font-semibold">
                  Explore Destinations
                </button>
              </div>
            </div>
          </div>
        </section>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
