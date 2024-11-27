import * as React from 'react';
import TitleHeader from '../../shared/common/TitleHeader';

const BlogBanner: React.FC = () => {
    return (
        <div className="relative bg-[url('https://duruthemes.com/demo/html/travol/multipage-slider/img/slider/2.jpg')] bg-cover bg-top py-44">
            {/* Overlay */}
            <div className="absolute inset-0 bg-primary bg-opacity-40"></div>

            <div className="relative container mx-auto">
                <TitleHeader subHeading="Read travel blog" title="Travel Experience" />
            </div>
        </div>
    );
};

export default BlogBanner;