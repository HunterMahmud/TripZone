import * as React from 'react';
import Hero from '../../shared/Banner/Hero';
import TitleHeader from '../../shared/common/TitleHeader';
import ToursCards from './ToursCards';

interface Tour {
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
}

const ToursLayout: React.FC = () => {
    const [tours, setTours] = React.useState<Tour[]>([]);

    React.useEffect(() => {
        fetch('/toursDatas.json')
            .then((response) => response.json())
            .then((data) => setTours(data))
            .catch((error) => console.error('Error fetching blogs:', error));
    }, []);

    return (
        <div>
            <Hero
                backgroundImage="https://duruthemes.com/demo/html/travol/multipage-slider/img/slider/2.jpg"
                subHeading="Choose your tour"
                title="Popular Tours"
            />
            <div className='container mx-auto mt-16 mb-20 px-6'>
                <TitleHeader
                    subHeading="Choose your place"
                    title="Popular Tours"
                    subHeadingClassName={"!text-primary uppercase"}
                    firstWordColor={'!text-primary'}
                />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16'>
                    {tours.map(data =>
                        <ToursCards key={data.id} data={data} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ToursLayout;