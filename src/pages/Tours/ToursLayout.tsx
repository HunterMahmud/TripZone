import * as React from 'react';
import Hero from '../../shared/Banner/Hero';
import TitleHeader from '../../shared/common/TitleHeader';
import ToursCards from './ToursCards';

const ToursLayout: React.FC = () => {
    return (
        <div>
            <Hero
                backgroundImage="https://duruthemes.com/demo/html/travol/multipage-slider/img/slider/2.jpg"
                subHeading="Choose your tour"
                title="Popular Tours"
            />
            <div className='container mx-auto mt-16'>
                <TitleHeader
                    subHeading="Choose your place"
                    title="Popular Tours"
                    subHeadingClassName={"!text-primary uppercase"}
                    firstWordColor={'!text-primary'}
                />
                <ToursCards />
            </div>
        </div>
    );
};

export default ToursLayout;