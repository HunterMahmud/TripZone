import * as React from 'react';
import TitleHeader from '../../shared/common/TitleHeader';

interface HeroProps {
    backgroundImage: string; // URL for the background image
    subHeading: string; // Text for the subheading
    title: string; // Text for the title
    overlayColor?: string; // Optional: Overlay color
    overlayOpacity?: number; // Optional: Overlay opacity (0-1)
}

const Hero: React.FC<HeroProps> = ({
    backgroundImage,
    subHeading,
    title,
    overlayColor = 'bg-primary', // Default overlay color
    overlayOpacity = 0.4, // Default overlay opacity
}) => {
    return (
        <div
            className={`relative bg-cover bg-top py-44 bg-fixed`}
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            {/* Overlay */}
            <div
                className={`absolute inset-0 ${overlayColor}`}
                style={{ opacity: overlayOpacity }}
            ></div>

            <div className="relative container mx-auto px-5">
                <TitleHeader subHeading={subHeading} title={title} />
            </div>
        </div>
    );
};

export default Hero;