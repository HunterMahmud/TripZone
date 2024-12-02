import * as React from "react";
import TitleHeader from "../../shared/common/TitleHeader";
import Navbar from "../../shared/Navbar";

const BlogBanner: React.FC = () => {
  return (
    <div className="relative bg-[url('https://duruthemes.com/demo/html/travol/multipage-slider/img/slider/2.jpg')] bg-cover bg-fixed bg-top py-44">
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary bg-opacity-40"></div>
      <div className="absolute z-10 top-0 left-0 right-0 text-white">
        <Navbar />
      </div>

      <div className="relative container mx-auto px-5">
        <TitleHeader subHeading="Read travel blog" title="Travel Experience" />
      </div>
    </div>
  );
};

export default BlogBanner;
