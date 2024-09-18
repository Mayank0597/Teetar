// import React from "react";
// import Highlight_03 from "/src/assets/Highlight_03.png";
// import Teetar from "/src/assets/Teetar.png";

// const MainContent = () => {
//   return (
//     <div className="flex flex-col md:flex-row justify-between items-center mt-2">
//       <div className="text-center md:text-left ml-40 w-[555px] h-[244px] mt-20">
//         <h1 className="text-[39px] md:text-[39px] font-semibold text-white leading-tight">
//           Helping brands to Create{" "}
//           {/* <img
//             src={Highlight_03}
//             alt="Inline Image"
//             className="w-12 h-auto mx-auto"
//             style={{ marginLeft: "29rem", marginTop: "-3.2rem" }}
//           />{" "} */}
//           long lasting <span className="text-orange-400">online presence</span>
//         </h1>
//         <p className="text-white mt-4 text-[14px] md:text-base">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
//           Vestibulum vehicula ex ac dolor aliquet, at sodales ex hendrerit.
//         </p>
//         <br />
//         <button className="bg-[#FCCB30] text-black px-4 py-2 font-semibold rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
//           Contact
//         </button>
//       </div>
//       {/* <div className="md:mt-0 mr-28 -mb-8  ">
//         <img
//           src={Teetar}
//           alt="Main Content Image"
//           className="sm:max-w-sm md:max-w-md lg:max-w-lg h-[699px] w-[643px] md:w-[80vw] md:h-auto max-w-full mt-[17.6vh]"
//         />
//       </div> */}
//     </div>
//   );
// };

// export default MainContent;

// import React from "react";
// import Highlight_03 from "/src/assets/Highlight_03.png";
// import Teetar from "/src/assets/Teetar.png";

// const MainContent = () => {
//   return (
//     <div className="absolute top-32 flex flex-col sm:flex-row px-2 py-6 sm:px-6 sm:py-10">
//       <div className="text-center  ml-16 md:text-left md:w-[555px] mt-4 md:mt-20 ">
//         <h1 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
//           Helping brands to Create{" "}
//           <span className="text-[#FCCB30]">long lasting</span> online presence
//         </h1>
//         <p className="text-white mt-4 text-sm md:text-base">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
//           Vestibulum vehicula ex ac dolor aliquet, at sodales ex hendrerit.
//         </p>
//         <br />
//         <button className="bg-[#FCCB30] text-black px-4 py-2 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
//           Contact
//         </button>
//       </div>
//       <div className="w-full md:w-auto flex justify-center md:justify-end mt-8 md:mt-0">
//         {/* <img
//           src={Teetar}
//           alt="Main Content Image"
//           className="w-full md:w-[80vw] lg:w-[643px] h-auto max-w-full"
//         /> */}
//       </div>
//     </div>
//   );
// };

// export default MainContent;

import React from "react";
import Teetar from "/src/assets/Teetar.png";
import Highlight_03 from "/src/assets/Highlight_03.png";
import { Link, useLocation } from "react-router-dom";

const MainContent = ({
  title1,
  title2,
  title3,
  description,
  customImage,
  customImage2,
  customImage3,
  customImage4,
  customImage5,
}) => {
  const location = useLocation("/Contact");
  return (
    <>
      {/* <div className="absolute z-30 top-8 flex flex-col sm:flex-row px-2 py-6 sm:px-6 sm:py-10 sm:mt-20 w-full flex-wrap"> */}
      <div className="absolute text-left sm:ml-16 ml-6 md:text-left md:w-[555px] lg:mt-56 md:mt-32 mt-16 z-30">
        <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-semibold text-white sm:w-[42vw] leading-tight sm:mt-0 mt-6 -mb-5 mr-10 sm:mr-0">
          {/* Helping brands to Create long lasting{" "} */}
          <div className="flex flex-wrap w-full">
            <img
              src={Highlight_03}
              alt="Inline Image"
              className="w-12 h-auto sm:ml-[88%] hidden sm:block"
              style={{ marginTop: "-2rem" }}
            />{" "}
          </div>
          <div className="">
            {title1}{" "}
            <span className="text-[#FCCB30]">
              {/* online presence */}
              {title2}{" "}
            </span>
            {title3}
          </div>
        </h1>
        <p className="text-white mt-4 sm:text-xs z-0 text-sm md:text-base lg:text-lg">
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Vestibulum vehicula ex ac dolor aliquet, at sodales ex hendrerit. */}
          {description}
        </p>
        <br />
        {/* Conditionally render the Contact button */}
        {location.pathname !== "/Contact" && (
          <Link to="/Contact">
            <button className="bg-[#FCCB30] text-black px-4 py-2 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              Contact
            </button>
          </Link>
        )}
      </div>
      <div className="absolute bottom-0 left-1/2 md:left-auto transform md:transform-none -translate-x-1/2 md:right-0 md:bottom-0 z-30">
        {/* Uncomment the image tag if you want to add an image */}
        <img
          src={
            customImage5 ||
            customImage4 ||
            customImage3 ||
            customImage2 ||
            customImage ||
            Teetar
          }
          alt="Main Content Image"
          className="w-[259px] sm:w-[380px] md:w-[350px] lg:w-[430px] xl:w-[643px]"
        />
      </div>
      {/* </div> */}
    </>
  );
};

export default MainContent;
