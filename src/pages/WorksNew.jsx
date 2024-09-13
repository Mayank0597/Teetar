// import React, { useState } from "react";
// import Logo5 from "/src/assets/image 6.png";
// import Logo6 from "/src/assets/image 5.png";
// import Logo1 from "/src/assets/image 7.png";
// import Logo2 from "/src/assets/image 6.png";
// import Logo3 from "/src/assets/image 5.png";
// import Logo4 from "/src/assets/image 7.png";
// import { Link } from "react-router-dom";

// const WorksNew = () => {
//   const [activeTab, setActiveTab] = useState("Food");

//   // URLs for corresponding Instagram posts
//   const instagramUrls = {
//     Furniture: [
//       "https://www.instagram.com/p/instagram-post-1", // replace with real post link
//       "https://www.instagram.com/p/instagram-post-2",
//       "https://www.instagram.com/p/instagram-post-3",
//       "https://www.instagram.com/p/instagram-post-4",
//       "https://www.instagram.com/p/instagram-post-5",
//       "https://www.instagram.com/p/instagram-post-6",
//     ],
//     Jewelry: [
//       "https://www.instagram.com/p/instagram-post-7",
//       "https://www.instagram.com/p/instagram-post-8",
//       "https://www.instagram.com/p/instagram-post-9",
//       "https://www.instagram.com/p/instagram-post-10",
//       "https://www.instagram.com/p/instagram-post-11",
//       "https://www.instagram.com/p/instagram-post-12",
//     ],
//     Design: [
//       "https://www.instagram.com/p/instagram-post-13",
//       "https://www.instagram.com/p/instagram-post-14",
//       "https://www.instagram.com/p/instagram-post-15",
//       "https://www.instagram.com/p/instagram-post-16",
//       "https://www.instagram.com/p/instagram-post-17",
//       "https://www.instagram.com/p/instagram-post-18",
//     ],
//     "Home Decor": [
//       "https://www.instagram.com/p/instagram-post-19",
//       "https://www.instagram.com/p/instagram-post-20",
//       "https://www.instagram.com/p/instagram-post-21",
//       "https://www.instagram.com/p/instagram-post-22",
//       "https://www.instagram.com/p/instagram-post-23",
//       "https://www.instagram.com/p/instagram-post-24",
//     ],
//     Food: [
//       "https://www.instagram.com/p/C_zk6DhI4Un/?utm_source=ig_embed&amp;utm_campaign=loading",
//       "https://www.instagram.com/p/C_LF4LjIMt7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
//       "https://www.instagram.com/p/instagram-post-28",
//       "https://www.instagram.com/p/instagram-post-29",
//       "https://www.instagram.com/p/instagram-post-30",
//     ],
//   };

//   const images = {
//     Furniture: [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6],
//     Jewelry: [Logo2, Logo1, Logo4, Logo3, Logo5, Logo6],
//     Design: [Logo3, Logo4, Logo5, Logo6, Logo1, Logo2],
//     "Home Decor": [Logo4, Logo3, Logo2, Logo1, Logo5, Logo6],
//     Food: [Logo5, Logo6, Logo1, Logo2, Logo3, Logo4],
//   };
//   return (
//     <>
//       <div className="relative w-full p-5">
//         {/* Tabs */}
//         <div className="flex flex-wrap justify-center mb-8 space-x-20">
//           {["Furniture", "Jewelry", "Design", "Home Decor", "Food"].map(
//             (tab) => (
//               <button
//                 key={tab}
//                 className={`px-6 py-2 w-full sm:w-auto text-center rounded border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] h-auto hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${
//                   activeTab === tab
//                     ? "bg-[#6374FD] text-white"
//                     : "bg-white text-black "
//                 }`}
//                 onClick={() => setActiveTab(tab)}
//               >
//                 {tab}
//               </button>
//             )
//           )}
//         </div>
//         {/* Images Section */}
//         <div className="flex justify-center ">
//           <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-y-0 gap-y-8 sm:gap-x-0 max-w-5xl">
//             {images[activeTab].map((image, index) => (
//               <Link
//                 to={instagramUrls[activeTab][index]}
//                 target="_blank" // Open in a new tab
//                 rel="noopener noreferrer" // Security
//                 key={index}
//               >
//                 <img
//                   src={image}
//                   alt={`Logo ${index + 1}`}
//                   // className="h-16 lg:w-[200px] lg:h-[100px]"
//                   key={index}
//                   className="p-4 rounded-lg flex items-center justify-center w-full h-auto"
//                 />
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default WorksNew;

// import React, { useState } from "react";
// import Logo5 from "/src/assets/image 6.png";
// import Logo6 from "/src/assets/image 5.png";
// import Logo1 from "/src/assets/image 7.png";
// import Logo2 from "/src/assets/image 6.png";
// import Logo3 from "/src/assets/image 5.png";
// import Logo4 from "/src/assets/image 7.png";

// const WorksNew = () => {
//   const [activeTab, setActiveTab] = useState("Food");

//   // Instagram embed post URLs (Replace with real Instagram post embed links)
//   const instagramEmbeds = {
//     Furniture: [
//       "https://www.instagram.com/p/instagram-post-embed-1",
//       "https://www.instagram.com/p/instagram-post-embed-2",
//       "https://www.instagram.com/p/instagram-post-embed-3",
//     ],
//     Jewelry: [
//       "https://www.instagram.com/p/instagram-post-embed-4",
//       "https://www.instagram.com/p/instagram-post-embed-5",
//       "https://www.instagram.com/p/instagram-post-embed-6",
//     ],
//     Design: [
//       "https://www.instagram.com/p/instagram-post-embed-7",
//       "https://www.instagram.com/p/instagram-post-embed-8",
//       "https://www.instagram.com/p/instagram-post-embed-9",
//     ],
//     "Home Decor": [
//       "https://www.instagram.com/p/instagram-post-embed-10",
//       "https://www.instagram.com/p/instagram-post-embed-11",
//       "https://www.instagram.com/p/instagram-post-embed-12",
//     ],
//     Food: [
//       "https://www.instagram.com/p/C_xA1fbovDD/embed", // Example Instagram post embed URL
//       "https://www.instagram.com/p/C_zk6DhI4Un/embed",
//       "https://www.instagram.com/p/C_LF4LjIMt7/embed",
//     ],
//   };

//   return (
//     <>
//       <div className="relative w-full p-5">
//         {/* Tabs */}
//         <div className="flex flex-wrap justify-center mb-8 space-x-20">
//           {["Furniture", "Jewelry", "Design", "Home Decor", "Food"].map(
//             (tab) => (
//               <button
//                 key={tab}
//                 className={`px-6 py-2 w-full sm:w-auto text-center rounded border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] h-auto hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${
//                   activeTab === tab
//                     ? "bg-[#6374FD] text-white"
//                     : "bg-white text-black "
//                 }`}
//                 onClick={() => setActiveTab(tab)}
//               >
//                 {tab}
//               </button>
//             )
//           )}
//         </div>

//         {/* Instagram Embed Section */}
//         <div className="flex justify-center">
//           <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-y-8 gap-y-8 sm:gap-x-8 max-w-5xl">
//             {instagramEmbeds[activeTab].map((embedUrl, index) => (
//               <div key={index} className="relative w-full p-4">
//                 {/* Responsive Instagram Embed */}
//                 <div className="w-full aspect-w-1 aspect-h-1">
//                   <iframe
//                     src={embedUrl}
//                     className="w-full h-full border-none"
//                     title={`Instagram Post ${index + 1}`}
//                     allowtransparency="true"
//                     allow="encrypted-media"
//                   ></iframe>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default WorksNew;

// import React, { useState } from "react";

// const WorksNew = () => {
//   const [activeTab, setActiveTab] = useState("Furniture");

//   // Instagram embed post URLs (Replace with real Instagram post embed links)
//   const instagramEmbeds = {
//     Furniture: [
//       "https://www.instagram.com/p/C_fsFrDKqbE/embed",
//       "https://www.instagram.com/p/C_xFkxFKege/embed",
//       "https://www.instagram.com/p/C_DihLlTMTX/embed",
//       "https://www.instagram.com/p/C_AGfEZJE3F/embed",
//       "https://www.instagram.com/p/C-jzk_rqjqU/embed",
//       "https://www.instagram.com/p/C_AGT0KJ7CN/embed"
//     ],
//     Jewelry: [
//       "https://www.instagram.com/p/C-XpCcBPvfe/embed",
//       "https://www.instagram.com/p/C_nhaGHPUMj/embed",
//       "https://www.instagram.com/p/C97VWOytuKe/embed",
//       "https://www.instagram.com/p/C9KXfq2t5EE/embed",
//       "https://www.instagram.com/p/C66GoLMvRZx/embed",
//       "https://www.instagram.com/p/C6v0rYNPuFZ/embed"
//     ],
//     Design: [
//       "https://www.instagram.com/p/C8loUG7tR0K/embed",
//       "https://www.instagram.com/p/C7hR3J2N7Ma/embed",
//       "https://www.instagram.com/p/C7onl6-t2Vu/embed",
//       "https://www.instagram.com/reel/C99WZz_vrDs/embed",
//       "https://www.instagram.com/p/C0_m72bt66c/embed",
//       "https://www.instagram.com/p/CyU1_J2tZVf/embed"
//     ],
//     "Home Decor": [
//       "https://www.instagram.com/p/C6vFLrcoYKM/embed",
//       "https://www.instagram.com/p/C-Ndxa9IqPk/embed",
//       "https://www.instagram.com/p/C9Sfr9uoI1i/embed",
//       "https://www.instagram.com/p/C9NR2P_I4x3/embed",
//       "https://www.instagram.com/p/C8FTxLPojLO/embed",
//       "https://www.instagram.com/p/C9o9j9kJgcT/embed"
//     ],
//     Food: [
//       "https://www.instagram.com/p/C_xA1fbovDD/embed",
//       "https://www.instagram.com/p/C_zk6DhI4Un/embed",
//       "https://www.instagram.com/p/C_LF4LjIMt7/embed",
//       "https://www.instagram.com/p/C_VRywsot11/embed",
//       "https://www.instagram.com/p/C_SzM9kI4zm/embed",
//       "https://www.instagram.com/p/C-Xh5ZbIZkC/embed"
//     ],
//   };

//   return (
//     <>
//       <div className="relative w-full p-5">
//         {/* Tabs */}
//         {/* flex flex-wrap justify-center mb-8 space-x-20 */}
//         <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
//           {["Furniture", "Jewelry", "Design", "Home Decor", "Food"].map(
//             (tab) => (
//               <button
//                 key={tab}
//                 className={`px-6 py-2 w-full sm:w-auto text-center rounded border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] h-auto hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${
//                   activeTab === tab
//                     ? "bg-[#6374FD] text-white"
//                     : "bg-white text-black "

//                 }`}
//                 onClick={() => setActiveTab(tab)}
//               >
//                 {tab}
//               </button>
//             )
//           )}
//         </div>

//         {/* Instagram Embed Section */}
//         <div className="flex justify-center">
//           <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-y-8 gap-y-8 sm:gap-x-8 max-w-5xl">
//             {instagramEmbeds[activeTab].map((embedUrl, index) => (
//               <div key={index} className="relative w-full p-4">
//                 {/* Responsive Instagram Embed */}
//                 <div className="w-full h-[500px] overflow-hidden">
//                   <iframe
//                     src={embedUrl}
//                     className="w-full h-full"
//                     title={`Instagram Post ${index + 1}`}
//                     style={{ border: "none", objectFit: "cover" }}
//                     allowtransparency="true"
//                     allow="encrypted-media"
//                     scrolling="no"
//                   ></iframe>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default WorksNew;

// import React, { useState } from "react";

// const WorksNew = () => {
//   const [activeTab, setActiveTab] = useState("Furniture");

//   // Instagram embed post URLs
//   const instagramEmbeds = {
//     Furniture: [
//       "https://www.instagram.com/p/C_fsFrDKqbE/embed",
//       "https://www.instagram.com/p/C_xFkxFKege/embed",
//       "https://www.instagram.com/p/C_DihLlTMTX/embed",
//       "https://www.instagram.com/p/C_AGfEZJE3F/embed",
//       "https://www.instagram.com/p/C-jzk_rqjqU/embed",
//       "https://www.instagram.com/p/C_AGT0KJ7CN/embed",
//     ],
//     Jewelry: [
//       "https://www.instagram.com/p/C-XpCcBPvfe/embed",
//       "https://www.instagram.com/p/C_nhaGHPUMj/embed",
//       "https://www.instagram.com/p/C97VWOytuKe/embed",
//       "https://www.instagram.com/p/C9KXfq2t5EE/embed",
//       "https://www.instagram.com/p/C66GoLMvRZx/embed",
//       "https://www.instagram.com/p/C6v0rYNPuFZ/embed",
//     ],
//     Design: [
//       "https://www.instagram.com/p/C8loUG7tR0K/embed",
//       "https://www.instagram.com/p/C7hR3J2N7Ma/embed",
//       "https://www.instagram.com/p/C7onl6-t2Vu/embed",
//       "https://www.instagram.com/reel/C99WZz_vrDs/embed",
//       "https://www.instagram.com/p/C0_m72bt66c/embed",
//       "https://www.instagram.com/p/CyU1_J2tZVf/embed",
//     ],
//     "Home Decor": [
//       "https://www.instagram.com/p/C6vFLrcoYKM/embed",
//       "https://www.instagram.com/p/C-Ndxa9IqPk/embed",
//       "https://www.instagram.com/p/C9Sfr9uoI1i/embed",
//       "https://www.instagram.com/p/C9NR2P_I4x3/embed",
//       "https://www.instagram.com/p/C8FTxLPojLO/embed",
//       "https://www.instagram.com/p/C9o9j9kJgcT/embed",
//     ],
//     Food: [
//       "https://www.instagram.com/p/C_xA1fbovDD/embed",
//       "https://www.instagram.com/p/C_zk6DhI4Un/embed",
//       "https://www.instagram.com/p/C_LF4LjIMt7/embed",
//       "https://www.instagram.com/p/C_VRywsot11/embed",
//       "https://www.instagram.com/p/C_SzM9kI4zm/embed",
//       "https://www.instagram.com/p/C-Xh5ZbIZkC/embed",
//     ],
//   };

//   return (
//     <>
//       <div className="relative w-full p-5">
//         {/* Tabs */}
//         <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
//           {["Furniture", "Jewelry", "Design", "Home Decor", "Food"].map(
//             (tab, index) => (
//               <button
//                 key={tab}
//                 className={`px-6 py-2 text-center rounded border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${
//                   activeTab === tab
//                     ? "bg-[#6374FD] text-white"
//                     : "bg-white text-black "
//                 } ${
//                   index === 4
//                     ? 'sm:mx-auto md:mx-auto lg:mx-0'
//                     : ""
//                 }`} // Center the last tab on mobile/tablet
//                 onClick={() => setActiveTab(tab)}
//               >
//                 {tab}
//               </button>
//             )
//           )}
//         </div>

//         {/* Instagram Embed Section */}
//         <div className="flex justify-center">
//           <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-8 max-w-5xl">
//             {instagramEmbeds[activeTab].map((embedUrl, index) => (
//               <div key={index} className="relative w-full p-4">
//                 {/* Responsive Instagram Embed */}
//                 <div className="w-full h-[500px] overflow-hidden">
//                   <iframe
//                     src={embedUrl}
//                     className="w-full h-full"
//                     title={`Instagram Post ${index + 1}`}
//                     style={{ border: "none", objectFit: "cover" }}
//                     allowtransparency="true"
//                     allow="encrypted-media"
//                     scrolling="no"
//                   ></iframe>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default WorksNew;

import React, { useState } from "react";

const WorksNew = () => {
  const [activeTab, setActiveTab] = useState("Furniture");

  // Instagram embed post URLs
  const instagramEmbeds = {
    Furniture: [
      "https://www.instagram.com/p/C_fsFrDKqbE/embed",
      "https://www.instagram.com/p/C_xFkxFKege/embed",
      "https://www.instagram.com/p/C_DihLlTMTX/embed",
      "https://www.instagram.com/p/C_AGfEZJE3F/embed",
      "https://www.instagram.com/p/C-jzk_rqjqU/embed",
      "https://www.instagram.com/p/C_AGT0KJ7CN/embed",
    ],
    Jewelry: [
      "https://www.instagram.com/p/C-XpCcBPvfe/embed",
      "https://www.instagram.com/p/C_nhaGHPUMj/embed",
      "https://www.instagram.com/p/C97VWOytuKe/embed",
      "https://www.instagram.com/p/C9KXfq2t5EE/embed",
      "https://www.instagram.com/p/C66GoLMvRZx/embed",
      "https://www.instagram.com/p/C6v0rYNPuFZ/embed",
    ],
    Design: [
      "https://www.instagram.com/p/C8loUG7tR0K/embed",
      "https://www.instagram.com/p/C7hR3J2N7Ma/embed",
      "https://www.instagram.com/p/C7onl6-t2Vu/embed",
      "https://www.instagram.com/reel/C99WZz_vrDs/embed",
      "https://www.instagram.com/p/C0_m72bt66c/embed",
      "https://www.instagram.com/p/CyU1_J2tZVf/embed",
    ],
    "Home Decor": [
      "https://www.instagram.com/p/C6vFLrcoYKM/embed",
      "https://www.instagram.com/p/C-Ndxa9IqPk/embed",
      "https://www.instagram.com/p/C9Sfr9uoI1i/embed",
      "https://www.instagram.com/p/C9NR2P_I4x3/embed",
      "https://www.instagram.com/p/C8FTxLPojLO/embed",
      "https://www.instagram.com/p/C9o9j9kJgcT/embed",
    ],
    Food: [
      "https://www.instagram.com/p/C_xA1fbovDD/embed",
      "https://www.instagram.com/p/C_zk6DhI4Un/embed",
      "https://www.instagram.com/p/C_LF4LjIMt7/embed",
      "https://www.instagram.com/p/C_VRywsot11/embed",
      "https://www.instagram.com/p/C_SzM9kI4zm/embed",
      "https://www.instagram.com/p/C-Xh5ZbIZkC/embed",
    ],
  };

  return (
    <>
      <div className="relative w-full p-5">
        {/* Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-28 md:mx-28 mb-8">
          {["Furniture", "Jewelry", "Design", "Home Decor"].map((tab) => (
            <button
              key={tab}
              className={`px-6 py-2 text-center rounded border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${
                activeTab === tab
                  ? "bg-[#6374FD] text-white"
                  : "bg-white text-black "
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
          {/* Last Tab (Food) aligned right in mobile/tablet */}
          <button
            className={`col-span-2 sm:col-span-2 lg:col-span-1 px-6 py-2 text-center rounded border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] lg:mx-0 mx-[22%] ${
              activeTab === "Food"
                ? "bg-[#6374FD] text-white"
                : "bg-white text-black"
            } `} // Push to the right on mobile and tablet
            onClick={() => setActiveTab("Food")}
          >
            Food
          </button>
        </div>

        {/* Instagram Embed Section */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-8 max-w-5xl">
            {instagramEmbeds[activeTab].map((embedUrl, index) => (
              <div key={index} className="relative w-full p-4">
                {/* Responsive Instagram Embed */}
                <div className="w-full h-[500px] overflow-hidden">
                  <iframe
                    src={embedUrl}
                    className="w-full h-full"
                    title={`Instagram Post ${index + 1}`}
                    style={{ border: "none", objectFit: "cover" }}
                    allowtransparency="true"
                    allow="encrypted-media"
                    scrolling="no"
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WorksNew;
