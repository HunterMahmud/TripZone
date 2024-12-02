import * as React from 'react';
import Hero from '../../shared/Banner/Hero';

const MyBookingLayout: React.FC = () => {
    return (
        <div>
            {/* Table */}
            <div>
                <Hero
                    backgroundImage="https://duruthemes.com/demo/html/travol/multipage-slider/img/slider/2.jpg"
                    subHeading="All My Booking"
                    title="My Booking"
                />
            </div>
            {/* Table */}
            <div className='container mx-auto my-20'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='text-2xl text-primary bg-secondary bg-opacity-20'>
                                <th>Tour Name</th>
                                <th>Location</th>
                                <th>Price</th>
                                <th>Date</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr className='border-b-2 border-secondary'>
                                <td className='text-xl'>
                                    Soneva Jani Maldives
                                </td>
                                <td className='text-xl'>Maldives</td>
                                <td className='text-xl text-secondary'>400 $</td>
                                <td className='text-xl'>16 December 2024</td>
                                <td className='text-right flex gap-4 justify-end items-center'>
                                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-secondary bg-opacity-25 text-primary">
                                        View Details
                                    </button>
                                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg ">
                                        Cancel
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyBookingLayout;