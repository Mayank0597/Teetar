// import React from "react";

// const ClientsSection = () => {
//   return (
//     <div className="py-12 px-4 text-center">
//       {/* Main Heading */}
//       <div className="flex flex-col items-center justify-center">
//         <h2 className="text-3xl md:text-4xl font-bold text-black">
//           We are{" "}
//           <span className="relative inline-block">
//             <span className="relative z-10 text-orangish-yellow">grateful</span>
//             <img
//               src="src/assets/yellow-circle.png"
//               alt="Circle"
//               className="absolute top-0 left-0 w-55 h-18 rounded-full"
//             />
//           </span>{" "}
//           to work with <br /> these clients
//         </h2>
//       </div>

//       {/* Lorem Text */}
//       <p className="text-sm md:text-base text-gray-700 mt-4 max-w-xl mx-auto">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
//         Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//       </p>
//     </div>
//   );
// };

// export default ClientsSection;

// import React from "react";

// const ClientsSection = () => {
//   return (
//     <div className="py-12 px-4 text-center">
//       {/* Main Heading */}
//       <div className="flex flex-col items-center justify-center">
//         <h2 className="text-3xl md:text-4xl font-bold text-black">
//           We are{" "}
//           <span className="relative inline-block">
//             <span className="relative z-10 text-orangish-yellow">grateful</span>
//             <img
//               src="src/assets/yellow-circle.png"
//               alt="Circle"
//               className="absolute top-0 left-0 w-24 h-24 rounded-full -translate-x-1/2 -translate-y-1/2"
//             />
//           </span>{" "}
//           to work with <br /> these clients
//         </h2>
//       </div>

//       {/* Lorem Text */}
//       <p className="text-sm md:text-base text-gray-700 mt-4 max-w-xl mx-auto">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
//         Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//       </p>
//     </div>
//   );
// };

// export default ClientsSection;

import React from "react";
import Circle from "/src/assets/yellow-circle.png"

const ClientsSection = () => {
  return (
    <div className="py-12 px-4 text-center">
      {/* Main Heading */}
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black max-w-[555px] text-center">
          We are{" "}
            <span className="relative text-[#FCCB30] p-3">grateful
            <img
              src={Circle}
              alt="Circle"
              className="absolute flex items-center left-0 top-0 bottom-0 right-0 justify-center w-[180px]"
            />
            
          </span>{" "}
          to work with these clients
        </h2>
      </div>

      {/* Lorem Text */}
      <p className="text-sm md:text-base text-gray-700 mt-4 max-w-xl mx-auto">
      See how we’ve transformed leading brands. Here is the list of brands we’ve helped so far.
      </p>
    </div>
  );
};

export default ClientsSection;
