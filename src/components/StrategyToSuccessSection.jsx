// import React from "react";
// import arrowImage from "/src/assets/Vector 5.png"; // Update with the actual path
// import sideImage from "/src/assets/Frame 82.png"; // Update with the actual path
// import starImage from "/src/assets/Misc_03.png";
// import Frame_43 from "/src/assets/Frame 43.png";

// const StrategyToSuccessSection = () => {
//   return (
//     <div
//       className="relative"
//       // style={{
//       //   backgroundImage: `url(${Frame_43})`,
//       // }}
//     >
//       <img src={Frame_43} alt="" />
//       <div className=" absolute py-10 px-6 -mt-7 ml-9">
//         {/* Section Header */}
//         <div className="text-left mb-6 ml-36">
//           <h2 className="text-3xl md:text-4xl font-bold">
//             <span className="text-white"> From </span>
//             <span className="text-[#FCCB30]">Strategy</span>
//             <span className="text-white"> to </span>
//             <span className="text-[#FCCB30]">Success</span>
//             <span className="text-white">
//               {" "}
//               - The Process
//               {/* Star Image */}
//               {/* <img
//               src={starImage} // Update with the correct path to your star image
//               alt="Star"
//               className="absolute w-8 h-8 ml-[46vw] -mt-12" // Adjust the -top and ml values to position the star
//             /> */}
//             </span>
//           </h2>
//           <p className="text-white text-sm mt-4 max-w-lg ">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//             <br />
//             Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//           </p>
//         </div>

//         {/* Flowchart and Image */}
//         {/* <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8"> */}
//         {/* Flowchart */}
//         {/* <div className="flex flex-col items-center"> */}
//         {/* Box 1 */}
//         {/* <div className="bg-green-400 text-black text-center py-4 px-6 w-64 h-20 rounded-tl-3xl rounded-br-3xl mb-4 shadow-lg border-r-4 border-b-4 border-black">
//             <div className="mt-3 text-lg font-semibold">
//               Strategy Development
//             </div>
//           </div>
//           <img src={arrowImage} alt="Arrow" className="w-2 h-8 mb-4" /> */}
//         {/* Box 2 */}
//         {/* <div className="bg-orangish-yellow text-black text-center py-4 px-6 w-64 h-20 rounded-tl-3xl rounded-br-3xl mb-4 border-r-4 border-b-4 border-black">
//             <div className="mt-3 text-lg font-semibold">Content Planning</div>
//           </div>
//           <img src={arrowImage} alt="Arrow" className="w-2 h-8 mb-4" /> */}
//         {/* Box 3 */}
//         {/* <div className="bg-purple-500 text-black text-center py-4 px-6 w-64 h-20 rounded-tl-3xl rounded-br-3xl border-r-4 border-b-4 border-black">
//             <div className="mt-0 text-lg font-semibold">
//               Content Creation and Publishing
//             </div>
//           </div>
//         </div> */}

//         {/* Side Image */}
//         {/* <div className="mt-8 md:mt-0 transform translate-x-36 md:translate-x-26">
//           <img
//             src={sideImage}
//             alt="Process"
//             className="w-85 md:w-[34rem] h-auto"
//           />
//         </div> */}
//         {/* </div> */}
//       </div>
//     </div>
//   );
// };

// export default StrategyToSuccessSection;

// import React from "react";
// import arrowImage from "/src/assets/Vector 5.png"; // Update with the actual path
// import sideImage from "/src/assets/Frame 82.png"; // Update with the actual path
// import starImage from "/src/assets/Misc_03.png";
// import Frame_43 from "/src/assets/Frame 43.png";

// const StrategyToSuccessSection = () => {
//   return (
//     <div className="relative">
//       {/* Background Image */}
//       <img src={Frame_43} alt="Background" className="w-full h-auto" />

//       {/* Overlay Text */}
//       <div className="absolute top-0 left-0 flex flex-col px-6 py-10 ml-[10%]">
//         {/* Section Header */}
//         <div className="mb-6">
//           <h2 className="text-3xl md:text-4xl font-bold">
//             <span className="text-white">From </span>
//             <span className="text-[#FCCB30]">Strategy</span>
//             <span className="text-white"> to </span>
//             <span className="text-[#FCCB30]">Success</span>
//             <span className="text-white"> - The Process</span>
//           </h2>
//           <p className="text-white text-sm mt-4 max-w-lg">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//             <br />
//             Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StrategyToSuccessSection;

import React from "react";
import arrowImage from "/src/assets/Vector 5.png"; // Update with the actual path
import sideImage from "/src/assets/Frame 82.png"; // Update with the actual path
import starImage from "/src/assets/Misc_03.png";
import Frame_43 from "/src/assets/Frame 43.png";

const StrategyToSuccessSection = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <img src={Frame_43} alt="Background" className="w-full h-auto" />

      {/* Overlay Text */}
      <div className="absolute top-0 left-0 flex flex-col px-4 py-8 sm:px-6 sm:py-10 md:ml-[10%]">
        {/* Section Header */}
        <div className="mb-4 sm:mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
            <span className="text-white">From </span>
            <span className="text-[#FCCB30]">Strategy</span>
            <span className="text-white"> to </span>
            <span className="text-[#FCCB30]">Success</span>
            <span className="text-white"> - The Process</span>
          </h2>
          <p className="text-white text-xs sm:text-sm md:text-base mt-2 sm:mt-4 max-w-xs sm:max-w-md md:max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StrategyToSuccessSection;
