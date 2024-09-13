import React from "react";
import MainContent from "./MainContent";
import Navbar from "./Navbar";
import Line from "/src/assets/line-15.png";
import MobileLine from "/src/assets/mobile-line.png";

const Header = ({ title1, title2, title3, description, customImage, customImage2, customImage3, customImage4, customImage5}) => {
  return (
    <>
      <div className=" bg-[#6374FD] sm:min-h-screen flex flex-wrap sm:h-auto w-full h-[500px] relative overflow-hidden">
        {/* <img src={} className=""></img> */}

        {/* Image for Larger Screens */}
        <img
          src={Line}
          alt="Background element"
          className="absolute z-20 top-0 w-full h-auto max-h-screen object-cover transform translate-x-[15%] pointer-events-none hidden sm:block"
        />

        {/* Image for Small Screens */}
        <img
          src={MobileLine}
          alt="Background element"
          className="absolute z-20 top-0 w-full h-auto max-h-screen object-cover pointer-events-none sm:hidden"
        />

        <Navbar />
        {/* <NavbarDark /> */}

        <hr className="absolute z-30 top-24 border-white mb-4 hidden md:block w-full " />
        <MainContent
          title1={title1}
          title2={title2}
          title3={title3}
          description={description}
          customImage={customImage}
          customImage2={customImage2}
          customImage3={customImage3}
          customImage4={customImage4}
          customImage5={customImage5}
          className=""
        />
      </div>
    </>
  );
};

export default Header;
