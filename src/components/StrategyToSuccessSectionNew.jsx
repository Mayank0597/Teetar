// import React from "react";
// import arrowImage from "/src/assets/Vector 5.png"; // Replace with the actual path
// import rightGridImage from "/src/assets/Frame 82.png"; // Replace with the actual path

// const StrategyToSuccessNew = () => {
//   return (
//     <div className="bg-[#6374FD] py-12 px-4 sm:px-8 md:px-16 w-full h-auto">
//       <div className="ml-[10%] sm:text-left">
//         {/* Heading */}
//         <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
//           {/* From Strategy to Success -{" "}
//         <span className="text-[#FCCB30]">The Process</span> */}
//           <span className="text-white">From </span>
//           <span className="text-[#FCCB30]">Strategy</span>
//           <span className="text-white"> to </span>
//           <span className="text-[#FCCB30]">Success</span>
//           <span className="text-white"> - The Process</span>
//         </h2>

//         {/* Lorem Text */}
//         <p className="text-white text-xs sm:text-sm md:text-base text-left mt-4 max-w-2xl">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
//           vehicula dolor vitae nulla facilisis, sit amet convallis ex viverra.
//         </p>
//       </div>

//       {/* Two-column Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-12">
//         {/* Left Grid - Flowchart */}
//         <div className="md:col-span-6 flex flex-col items-center">
//           {/* Flowchart Box 1 */}
//           <div className="bg-[#67FFED] sm:w-full w-80 md:w-80 h-32 sm:h-32 border-b-4 border-r-4 border-black rounded-tl-[55px] rounded-br-[55px] shadow-lg flex items-center justify-center mb-2">
//             <p className="text-black text-xl sm:text-xl font-medium text-center">
//               Strategy Development
//             </p>
//           </div>
//           {/* Arrow */}
//           <img
//             src={arrowImage}
//             alt="Arrow"
//             className="w-1 h-10 sm:w-2 sm:h-8 mb-2"
//           />
//           {/* Flowchart Box 2 */}
//           <div className="bg-[#FCCB30] sm:w-full w-80 md:w-80 h-32 sm:h-32 rounded-tl-[55px] border-b-4 border-r-4 border-black rounded-br-[55px] shadow-lg flex items-center justify-center mb-2">
//             <p className="text-black text-sm sm:text-xl font-medium text-center">
//               Content Planning
//             </p>
//           </div>
//           {/* Arrow */}
//           <img
//             src={arrowImage}
//             alt="Arrow"
//             className="w-1 h-10 sm:w-2 sm:h-8 mb-2"
//           />
//           {/* Flowchart Box 3 */}
//           <div className="bg-[#BE8BFF] sm:w-full w-80 md:w-80 h-32 sm:h-32 rounded-tl-[55px] border-b-4 border-r-4 border-black rounded-br-[55px] shadow-lg flex items-center justify-center">
//             <p className="text-black text-sm sm:text-xl px-6 text-center font-medium">
//               Content Creation and Publishing
//             </p>
//           </div>
//         </div>

//         {/* Right Grid - Image */}
//         <div className="md:col-span-6 flex items-center justify-center hidden md:block">
//           <img
//             src={rightGridImage}
//             alt="Right Grid"
//             className="w-full md:w-3/4 lg:w-[40vw] h-full"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StrategyToSuccessNew;

import React, { useEffect } from "react";
import arrowImage from "/src/assets/Vector 5.png"; // Replace with the actual path
import rightGridImage from "/src/assets/Group 27.png"; // Replace with the actual path
import starImage from "/src/assets/Misc_03.png";
import AOS from "aos";
import "aos/dist/aos.css";

const StrategyToSuccessNew = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="bg-[#6374FD] py-12 px-4 sm:px-8 md:px-16 w-full h-auto">
      <div>
        <img
          src={starImage}
          alt="starImage"
          className="w-8 md:w-10 lg:w-10 h-full ml-[90%] md:ml-[83%] lg:ml-[57%]"
        />
      </div>
      <div className="text-center sm:text-left">
        {/* Heading */}
        <h2 className="text-3xl sm:text-3xl md:text-4xl font-semibold sm:text-left sm:ml-[10%]">
          <span className="text-white">From </span>
          <span className="text-[#FCCB30]">Strategy</span>
          <span className="text-white"> to </span>
          <span className="text-[#FCCB30]">Success</span>
          <span className="text-white"> - The Process</span>
        </h2>

        {/* Lorem Text */}
        <p className="text-white text-sm sm:text-sm md:text-base mt-4 max-w-2xl sm:text-left sm:ml-[10%] sm:mr-[10%]">
        Our process involves a deep dive into your brand. Discover how we transform your brand’s online presence through Strategy Development, Content Planning, and Content creation & Publishing
        </p>
      </div>

      {/* Two-column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-12">
        {/* Left Grid - Flowchart */}
        <div className="md:col-span-12 lg:col-span-6 flex flex-col items-center md:items-center px-1 sm:px-0">
          {/* Flowchart Box 1 */}
          {/* bg-[#67FFED] sm:w-full w-80 md:w-80 h-32 sm:h-32 border-b-4 border-r-4 hover:border-none border-black rounded-tl-[55px] rounded-br-[55px] shadow-lg flex items-center justify-center mb-2 */}
          <div
            data-aos="flip-left"
            data-aos-delay="0"
            className="bg-[#67FFED] w-full max-w-[20rem] h-32 sm:h-32 border-b-4 border-r-4 hover:border-none border-black rounded-tl-[55px] rounded-br-[55px] shadow-lg flex items-center justify-center mb-2"
          >
            <p className="text-black text-xl sm:text-xl font-medium text-center">
              Strategy Development
            </p>
          </div>
          {/* Arrow */}
          <img
            src={arrowImage}
            alt="Arrow"
            className="w-1 h-10 sm:w-1 sm:h-8 mb-2"
          />
          {/* Flowchart Box 2 */}
          {/* bg-[#FCCB30] sm:w-full w-80 md:w-80 h-32 sm:h-32 rounded-tl-[55px] border-b-4 border-r-4 hover:border-none border-black rounded-br-[55px] shadow-lg flex items-center justify-center mb-2 */}
          <div
            data-aos="flip-left"
            data-aos-delay="250"
            className="bg-[#FCCB30] w-full max-w-[20rem] h-32 sm:h-32 rounded-tl-[55px] border-b-4 border-r-4 hover:border-none border-black rounded-br-[55px] shadow-lg flex items-center justify-center mb-2"
          >
            <p className="text-black text-xl sm:text-xl font-medium text-center">
              Content Planning
            </p>
          </div>
          {/* Arrow */}
          <img
            src={arrowImage}
            alt="Arrow"
            className="w-1 h-10 sm:w-0 md:w-1 md:h-8 mb-2"
          />
          {/* Flowchart Box 3 */}
          {/* bg-[#BE8BFF] sm:w-full w-80 md:w-80 h-32 sm:h-32 rounded-tl-[55px] border-b-4 border-r-4 hover:border-none border-black rounded-br-[55px] shadow-lg flex items-center justify-center */}
          <div
            data-aos="flip-left"
            data-aos-delay="500"
            className="bg-[#BE8BFF] w-full max-w-[20rem] h-32 sm:h-32 rounded-tl-[55px] border-b-4 border-r-4 hover:border-none border-black rounded-br-[55px] shadow-lg flex items-center justify-center"
          >
            <p className="text-black text-xl sm:text-xl px-6 text-center font-medium">
              Content Creation and Publishing
            </p>
          </div>
        </div>

        {/* Right Grid - Image */}
        <div className="md:col-span-12 lg:col-span-6 items-center flex justify-center hidden md:block md:mt-8 ">
          <img
            src={rightGridImage}
            alt="Right Grid"
            className="w-full lg:w-[40vw] md:w-[60vw] h-auto mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default StrategyToSuccessNew;
