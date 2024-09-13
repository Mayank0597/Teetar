import React from "react";
import Location from "/src/assets/location.png";
import Timer from "/src/assets/timer.png";

const Career = () => {
  return (
    <div className="flex flex-col items-center space-y-4 p-4 sm:p-8 lg:mt-10 mt-16">
      {/* Card 1 */}
      <div className="bg-[#F8F3F3] border-black border-r-4 border-b-4 border-l-2 border-t-2 rounded-lg p-14 w-full sm:w-2/3 lg:w-[1128px] md:w-[500px] lg:h-[276px] flex flex-col sm:flex-row justify-between items-start">
        <div>
          {/* Heading */}
          <h3 className="text-xl font-semibold mb-2">Digital Marketer</h3>
          {/* Text */}
          <p className="text-gray-600 mb-2">
            We are looking for a digital marketer who is ready to take
            Challenges.
          </p>
          {/* Location and Time */}
          <div className="flex items-center text-gray-600 space-x-4">
            <div className="flex items-center mt-4">
              <img
                src={Location}
                alt="Location"
                className="w-[24px] h-[24px] "
              />
              <span className="ml-2 ">On-Site</span>
            </div>
            <div className="flex items-center mt-4">
              <img
                src={Timer}
                alt="Timer"
                className="w-[24px] h-[24px] lg:ml-10"
              />
              <span className="ml-2">Full-time</span>
            </div>
          </div>
        </div>
        {/* Apply Button */}
        <button className="bg-[#FCCB30] text-black border-black py-2 px-4 rounded-lg mt-4 sm:mt-0 sm:ml-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          Apply
        </button>
      </div>

      {/* Card 2 */}
      <div className="bg-[#F8F3F3] border-black border-r-4 border-b-4 border-l-2 border-t-2 rounded-lg p-14 w-full sm:w-2/3 lg:w-[1128px] md:w-[500px] lg:h-[276px] flex flex-col sm:flex-row justify-between items-start mt-4">
        <div>
          {/* Heading */}
          <h3 className="text-xl font-semibold mb-2">Social media manager</h3>
          {/* Text */}
          <p className="text-gray-600 mb-2">
            We are looking for a social media manager who is ready to take
            Challenges.
          </p>
          {/* Location and Time */}
          <div className="flex items-center text-gray-600 space-x-4">
            <div className="flex items-center mt-4">
              <img
                src={Location}
                alt="Location"
                className="w-[24px] h-[24px]"
              />
              <span className="ml-2">On-Site</span>
            </div>
            <div className="flex items-center mt-4">
              <img
                src={Timer}
                alt="Timer"
                className="w-[24px] h-[24px] lg:ml-10"
              />
              <span className="ml-2">Full-time</span>
            </div>
          </div>
        </div>
        {/* Apply Button */}
        <button className="bg-[#FCCB30] text-black border-black py-2 px-4 rounded-lg mt-4 sm:mt-0 sm:ml-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          Apply
        </button>
      </div>
    </div>
  );
};

export default Career;
