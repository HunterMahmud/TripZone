import * as React from 'react';

interface DataProps {
    id: number;
    agency: string;
    title: string;
    review: number;
    duration: string;
    group: string;
    location: string;
    super_deal: number;
    price: number;
    image: string;
    className: string;
}

const ToursCards: React.FC<{ data: DataProps }> = ({ data }) => {
    return (
        <div
            className={`relative bg-center bg-cover group bg-no-repeat transition-all duration-500 ease-in-out flex rounded-sm cursor-pointer ${data.className ? data.className : "h-[400px]"}`}
            style={{
                backgroundImage: `url(${data.image})`,
                transition: '100% 0.5s ease-in-out',
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 transition-all duration-300 group-hover:bg-primary group-hover:bg-opacity-35 rounded-sm"></div>

            <h3 className="absolute top-6 right-3 text-white font-popins text-lg bg-secondary flex justify-center items-center flex-col p-2 rounded-sm -rotate-90">
                <span className='text-2xl'>${data.price}</span>
            </h3>

            <div className='z-10 absolute w-full bottom-0'>
                <div className='transition-all duration-500 group-hover:-translate-y-40 ease-in-out rounded-sm p-3'>
                    <div>
                        <h3 className="font-semibold font-popins text-4xl text-white pb-5">{data.title}</h3>
                        <div className='bg-white w-24 transition-all duration-1000 h-[3px] group-hover:w-full'></div>
                    </div>
                    <div className='text-2xl font-semibold transition-all duration-700 text-white opacity-0 group-hover:opacity-100'>
                        <h3>{data.duration}</h3>
                        <h3>{data.group}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToursCards;