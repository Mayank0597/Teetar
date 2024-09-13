// import React from "react";
// import squareImage from "/src/assets/Frame 72.png"; // Update the path to your square image
// import cupStringsImage from "/src/assets/Layer 2.png"; // Update the path to your cup strings image

// const ContactSection = () => {
//   return (
//     <div className="flex justify-center items-center mb-8 sm:mb-16 lg:mb-24 z-10">
//       <div className="relative w-[90%] max-w-[1136px] h-[auto]]">
//         {/* Square Image */}
//         <img
//           src={squareImage}
//           alt="Square"
//           className="w-full h-full object-cover"
//         />
//         {/* Cup Strings Image */}
//         <div className="absolute inset-0 flex items-center justify-center">
//           <img
//             src={cupStringsImage}
//             alt="Cup Strings"
//             className="w-[969px] h-[392.88px] object-cover"
//           />
//         </div>
//         <div className="absolute inset-0 flex flex-col items-center justify-center px-8 py-10 text-center">
//           {/* Heading */}
//           <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-10">
//             We are just this far away
//           </h1>
//           {/* Lorem Text */}
//           <p className="text-md sm:text-lg mb-8 sm:mb-12 text-center mx-4 sm:mx-60">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
//             vehicula dolor vitae nulla facilisis.
//           </p>
//           {/* Name and Email */}
//           <div className="flex flex-col sm:flex-row gap-4 mb-4">
//             {/* Name */}
//             <div className=" ">
//               <input
//                 type="text"
//                 placeholder="Name"
//                 className="border-2 border-black rounded-lg p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] w-full sm:w-[324px] h-[69px] focus:outline-none focus:border-black "
//               />
//             </div>

//             {/* Email */}
//             <div className="">
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="border-2 border-black rounded-lg p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] w-full sm:w-[324px] h-[50px] sm:h-[69px] focus:outline-none focus:border-black "
//               />
//             </div>
//           </div>
//           {/* Message */}
//           <textarea
//             placeholder="Message"
//             className="border-2 border-black rounded-lg p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] w-full sm:w-[672px] h-[100px] sm:h-[170px] mb-4 -mt-0 focus:outline-none focus:border-black"
//           ></textarea>
//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="bg-[#F4A300] text-black py-2 px-4 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-transform duration-200"
//           >
//             Submit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactSection;

// import squareImage from "/src/assets/Rectangle 15.png";
// import smallImage from "/src/assets/Rectangle_SmallScreen.png";
// import cupStringsImage from "/src/assets/Layer 2.png";
// import React, { useState, useEffect } from "react";

// const ContactContainer = ({ contactDesc }) => {
//   const [isBigScreen, setIsBigScreen] = useState(window.innerWidth >= 768);
//   const [focusedInput, setFocusedInput] = useState(null);

//   const handleFocus = (inputName) => {
//     setFocusedInput(inputName);
//   };

//   const handleBlur = () => {
//     setFocusedInput(null);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       setIsBigScreen(window.innerWidth >= 768);
//     };
//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className="flex justify-center items-center -mb-28 z-10 mt-20">
//       <div className="relative sm:w-[90%] sm:max-w-[1136px]">
//         {/* Square Image */}
//         {/* <img
//           src={squareImage}
//           alt="Square"
//           className="sm:w-full sm:h-full object-cover h-[500px]"
//         /> */}
//         <img
//           src={isBigScreen ? squareImage : smallImage} // Use squareImage for big screens, smallImage for smaller screens
//           alt="Responsive"
//           className="w-full h-auto sm:h-full object-cover"
//         />

//         {/* Cup Strings Image */}
//         <div className="absolute inset-0 flex items-center justify-center">
//           <img
//             src={cupStringsImage}
//             alt="Cup Strings"
//             className="sm:w-[90%] w-[100%] max-w-[969px] h-auto object-cover"
//           />
//         </div>
//         <div className="absolute inset-0 flex flex-col items-center justify-center px-4 py-6 sm:px-8 lg:py-10 md:py-2 text-center">
//           {/* Heading */}
//           <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-10">
//             We are just this far away
//           </h1>
//           {/* Lorem Text */}
//           <p className="text-sm sm:text-md md:text-base lg:text-lg mb-6 sm:mb-8 md:mb-12 mx-2 sm:mx-16 md:mx-60">
//             {/* Ready to take your brand to the next level? Let’s Connect! */}
//             {contactDesc}
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 mb-4 lg:mt-0 sm:-mt-10">
//             {/* Name */}
//             <input
//               type="text"
//               placeholder="Name"
//               className="border-black rounded-lg p-2 w-[70vw] sm:w-[250px] lg:w-[324px] h-[50px] sm:h-[45px] lg:h-[69px] focus:outline-none focus:border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
//             />

//             {/* Email */}
//             <input
//               type="email"
//               placeholder="Email"
//               className="border-black rounded-lg p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-[70vw] sm:w-[250px] lg:w-[324px] h-[50px] sm:h-[45px] lg:h-[69px] focus:outline-none focus:border-black"
//             />
//           </div>
//           {/* Message */}
//           <textarea
//             placeholder="Message"
//             className="border-black rounded-lg p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-[70vw] h-[150px] sm:w-[530px] lg:w-[672px] sm:h-[350px] md:h-[300px] lg:h-[350px] mb-4 focus:outline-none focus:border-black"
//           ></textarea>
//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="bg-[#FCCB30] text-black py-2 px-4 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-transform duration-200"
//           >
//             Submit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactContainer;

import squareImage from "/src/assets/Rectangle 15.png";
import smallImage from "/src/assets/Rectangle_SmallScreen.png";
import cupStringsImage from "/src/assets/Layer 2.png";
import logoImage from "/src/assets/Frame 127.png"; // Assuming you have a logo image
import React, { useState, useEffect } from "react";

const ContactContainer = ({ contactDesc }) => {
  const [isBigScreen, setIsBigScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsBigScreen(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex justify-center items-center -mb-28 z-10 mt-20">
      <div className="relative sm:w-[90%] sm:max-w-[1136px]">
        {/* Responsive Image */}
        <img
          src={isBigScreen ? squareImage : smallImage}
          alt="Responsive"
          className="w-full h-auto sm:h-full object-cover"
        />

        {/* Cup Strings Image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={cupStringsImage}
            alt="Cup Strings"
            className="sm:w-[90%] w-[100%] max-w-[969px] h-auto object-cover"
          />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 py-6 sm:px-8 lg:py-10 md:py-2 text-center -mt-28 sm:-mt-8 lg:-mt-44">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-10">
            We are just this far away
          </h1>

          {/* Description Text */}
          <p className="text-sm sm:text-md md:text-base lg:text-lg mb-6 sm:mb-8 md:mb-12 mx-2 sm:mx-16 md:mx-60">
            {contactDesc}
          </p>

          {/* Card with Logo and Contact Information */}
          <div className="bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg p-4 flex items-center justify-center w-[70vw] sm:w-[530px] lg:w-[672px] h-[100px] sm:h-[150px]">
            {/* Logo */}
            <img
              src={logoImage}
              alt="Logo"
              className="w-12 h-12 sm:w-16 sm:h-16 mr-4"
            />
            {/* Contact Information */}
            <p className="text-black text-sm sm:text-2xl font-semibold">
              Call us @ +91 62667-60482
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContainer;
