import React from "react";
import "../styles/Marquee.css"; // Import custom CSS for the marquee effect
import starImage from "/src/assets/star.png"; // Update with your star image path

const Marquee = () => {
  return (
    <div className="relative overflow-hidden bg-white py-10">
      <div className="flex whitespace-nowrap animate-marquee ">
        <span className="text-2xl font-bold text-gray-800">
          BOOST ENGAGEMENT
        </span>
        <img src={starImage} alt="Star" className="w-6 h-6 mx-10" />
        {"    "}
        {/* Increased margin */}
        <span className="text-2xl font-bold text-gray-800">DRIVE TRAFFIC</span>
        <img src={starImage} alt="Star" className="w-6 h-6 mx-10" />
        {"    "}
        {/* Increased margin */}
        <span className="text-2xl font-bold text-gray-800">AMPLIFY REACH</span>
        <img src={starImage} alt="Star" className="w-6 h-6 mx-10" />
        {"    "}
        {/* Increased margin */}
        {/* Repeat for continuous effect */}
        <span className="text-2xl font-bold text-gray-800">
          BOOST ENGAGEMENT
        </span>
        <img src={starImage} alt="Star" className="w-6 h-6 mx-10" />
        {"    "}
        {/* Increased margin */}
        <span className="text-2xl font-bold text-gray-800">DRIVE TRAFFIC</span>
        <img src={starImage} alt="Star" className="w-6 h-6 mx-10" />
        {"    "}
        {/* Increased margin */}
        <span className="text-2xl font-bold text-gray-800">AMPLIFY REACH</span>
        <img src={starImage} alt="Star" className="w-6 h-6 mx-10" />
        {"    "}
        {/* Increased margin */}
      </div>
    </div>
  );
};

export default Marquee;
