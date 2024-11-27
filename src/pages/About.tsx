import ab from "../../public/ab.jpg"

const About: React.FC = () => {
    return (
        <div>
            <div
            className="h-[400px] relative bg-no-repeat bg-cover w-full"
            style={{
                backgroundImage: "url(https://i.ibb.co/J5Jf4VG/title-bg.jpg)", 
            }}
            >
             <div className="flex flex-col h-full  justify-center items-center">
                <div className="text-white text-center bg-black bg-opacity-30 p-8 lg:w-2/6 ">
                <h3 className="text-2xl font-semibold ">Home / About us</h3>
                <h3 className="text-4xl uppercase font-semibold mt-3">We helping you find<br/> <span className="text-secondary">your dream</span> vacation</h3>
                </div>
            </div> 
            </div>
            <div className="lg:max-w-[1440px] mx-auto ">
                {/* our story */}
               <div className="flex gap-14 lg:my-20">
               <div className="lg:w-3/5">
                <h3 className="text-2xl font-semibold">Our Story</h3>
                <h3 className="text-4xl font-bold lg:my-5">The Remarkable Story of How<br/> TripZone Came to Life</h3>
                <p className="text-base text-[#818090]">At TripZone, our story began with a simple dream: to make exploring the world easy, enjoyable, and unforgettable. Founded by passionate travelers, we’ve grown into a trusted travel partner for countless adventurers, offering tailor-made experiences that turn dreams into reality. From breathtaking destinations to personalized itineraries, our mission has always been to help you create memories that last a lifetime.</p>
                <p className="text-base text-[#818090] mt-5"> With a deep love for discovery and a commitment to excellence, TripZone continues to inspire wanderlust and connect people with the wonders of the world. Join us on this incredible journey and let us guide you to your next great adventure!</p>
                <div className="shadow-xl mt-8 grid grid-cols-3 gap-6 p-6 rounded-lg">
                    <div>
                        <h3 className="text-2xl font-semibold">20,000+</h3>
                        <h3 className="text-xl font-semibold">Happy Clients</h3>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold">150+</h3>
                        <h3 className="text-xl font-semibold">Tour Destinations</h3>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold">20+</h3>
                        <h3 className="text-xl font-semibold">Years of Experience</h3>
                    </div>
                </div>
                </div>
                <div className="lg:w-2/5">
                    <img className="w-full rounded-xl" src={ab} alt="" />
                </div>
               </div>
               {/* customer review */}
               <div className="lg:my-20">
                 <h3 className="text-4xl text-center font-medium">Customer Review</h3>
                 {/* review cards */}
                 <div>
                        <div className="lg:w-[470px] p-5 lg:h-[346px] rounded-xl shadow-2xl">
                                <div>
                                    <p>08 Dec 2021</p>
                                    <div>
                                    {/* <FaStar /> */}
                                    </div>
                                </div>
                        </div>
                 </div>
               </div>
            </div>
        </div>

    );
};

export default About;