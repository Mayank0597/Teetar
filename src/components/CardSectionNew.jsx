import React from "react";
import Card_1 from "/src/assets/Card-1 Logo.png";
import Card_2 from "/src/assets/Card-2 Logo.png";
import Card_3 from "/src/assets/Card-3 Logo.png";
import Card_4 from "/src/assets/Card-4 Logo.png";
import Card_5 from "/src/assets/Card-5 Logo.png";
import Card_6 from "/src/assets/Card-6 Logo.png";
import vectorYellow from "/src/assets/Vector Yellow.png";

const CardSectionNew = () => {
  return (
    <div className="relative py-2">
      {/* Vector Image Behind Cards */}
      <img
        src={vectorYellow}
        alt="Vector Background"
        className="absolute inset-0 mx-auto sm:w-1/2 w-[50%]  sm:h-auto z-0 transform translate-x-[-50%] translate-y-[-50%]"
        style={{ top: "50%", left: "50%" }}
      />

      {/* Cards Container */}
      <div className="relative container mx-auto px-6 md:px-36 z-10">
        {/* First Row */}
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-8 mb-8 max-w-[1200px]">
            <div className="flex-1 sm:min-w-[350px] sm:max-w-[451px] p-4 bg-[#F8F3F3] border-r-4 border-b-4 border-black rounded-xl z-10 min-w-[200px] max-w-[320px] border-l-2 border-t-2 hover:border-2">
              <img src={Card_1} alt="Logo 1" className="h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Social Media Strategy</h3>
              <p
                className="text-gray-600"
                style={{ overflowWrap: "break-word" }}
              >
                We develop tailored Social Media strategies aligned with your brand goals.
              </p>
            </div>
            <div className="tablet-card flex-1 sm:min-w-[280px] sm:max-w-[318px] min-w-[200px] max-w-[320px] p-4 bg-[#F8F3F3] border-r-4 border-b-4 border-black rounded-xl z-10 border-l-2 border-t-2 hover:border-2">
              <img src={Card_2} alt="Logo 2" className="h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Content Creation</h3>
              <p
                className="text-gray-600"
                style={{ overflowWrap: "break-word" }}
              >
                Our team produces high-quality content that engages your audience.
              </p>
            </div>
            <div className="tablet-card flex-1 sm:min-w-[280px] sm:max-w-[331px] min-w-[200px] max-w-[320px] p-4 bg-[#F8F3F3] border-r-4 border-b-4 border-black rounded-xl z-10 border-l-2 border-t-2 hover:border-2">
              <img src={Card_3} alt="Logo 3" className="h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Brand Management</h3>
              <p
                className="text-gray-600"
                style={{ overflowWrap: "break-word" }}
              >
                We help establish a powerful online brand identity with our expert Brand Management services.

              </p>
            </div>
            {/* </div> */}

            {/* Second Row */}
            {/* <div className="flex flex-wrap justify-center gap-8 mt-3"> */}
            <div className="tablet-card flex-1 sm:min-w-[280px] sm:max-w-[318px] min-w-[200px] max-w-[320px] p-4 bg-[#F8F3F3] border-r-4 border-b-4 border-black rounded-xl z-10 border-l-2 border-t-2 hover:border-2">
              <img src={Card_4} alt="Logo 4" className="h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Influencer Marketing</h3>
              <p
                className="text-gray-600"
                style={{ overflowWrap: "break-word" }}
              >
                Connect with industry influencers and amplify your brand's message with our Influencer Marketing services.

              </p>
            </div>
            <div className="tablet-card flex-1 sm:min-w-[280px] sm:max-w-[331px] min-w-[200px] max-w-[320px] p-4 bg-[#F8F3F3] border-r-4 border-b-4 border-black rounded-xl z-10 border-l-2 border-t-2 hover:border-2">
              <img src={Card_5} alt="Logo 5" className="h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">
                Analytics and Reporting
              </h3>
              <p
                className="text-gray-600"
                style={{ overflowWrap: "break-word" }}
              >
                We track your performance and provide actionable insights.
              </p>
            </div>
            <div className="flex-1 sm:min-w-[350px] sm:max-w-[451px] min-w[200px] max-w-[320px] p-4 bg-[#F8F3F3] sm:border-r-4 border-r-4 sm:border-b-4 border-b-4 border-l-2 border-t-2 hover:border-2 border-black rounded-xl z-10">
              <img src={Card_6} alt="Logo 6" className="h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">
                Social Media Management
              </h3>
              <p
                className="text-gray-600"
                style={{ overflowWrap: "break-word" }}
              >
                We optimize your social media presence for maximum impact.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Rotate Vector Image on Mobile */}
      <style>
        {`
          @media (max-width: 768px) {
            img[alt="Vector Background"] {
              transform: translate(-50%, -260%) rotate(90deg);
            }
          }
            @media (min-width: 768px) and (max-width: 1024px) {
            .tablet-card {
              min-width: 350px;
              max-width: 451px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default CardSectionNew;

// import React from "react";
// import Card_1 from "/src/assets/Card-1 Logo.png";
// import Card_2 from "/src/assets/Card-2 Logo.png";
// import Card_3 from "/src/assets/Card-3 Logo.png";
// import Card_4 from "/src/assets/Card-4 Logo.png";
// import Card_5 from "/src/assets/Card-5 Logo.png";
// import Card_6 from "/src/assets/Card-6 Logo.png";
// import vectorYellow from "/src/assets/Vector Yellow.png";

// const CardSection = () => {
//   return (
//     <div className="relative py-16 overflow-hidden">
//       {/* Vector Image Behind Cards */}
//       <img
//         src={vectorYellow}
//         alt="Vector Background"
//         className="absolute top-1/2 left-1/2 w-2/3 max-w-sm transform -translate-x-1/2 -translate-y-1/2 z-0"
//       />

//       {/* Cards Container */}
//       <div className="relative container mx-auto px-6 md:px-36 z-10">
//         {/* Cards Layout */}
//         <div className="flex flex-wrap justify-center gap-8">
//           <div className="flex-1 min-w-[280px] max-w-[320px] p-4 bg-[#F8F3F3] shadow-lg border-r-4 border-b-4 border-black rounded-xl z-10">
//             <img src={Card_1} alt="Logo 1" className="h-12 mb-4" />
//             <h3 className="text-xl font-bold mb-2">Social Media Strategy</h3>
//             <p className="text-gray-600">
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
//               quo impedit numquam culpa nihil optio quaerat consectetur beatae
//               mollitia ullam?
//             </p>
//           </div>

//           <div className="flex-1 min-w-[280px] max-w-[320px] p-4 bg-[#F8F3F3] shadow-lg border-r-4 border-b-4 border-black rounded-xl z-10">
//             <img src={Card_2} alt="Logo 2" className="h-12 mb-4" />
//             <h3 className="text-xl font-bold mb-2">Content Creation</h3>
//             <p className="text-gray-600">
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
//               quo impedit numquam culpa nihil optio quaerat consectetur beatae
//               mollitia ullam?
//             </p>
//           </div>

//           <div className="flex-1 min-w-[280px] max-w-[320px] p-4 bg-[#F8F3F3] shadow-lg border-r-4 border-b-4 border-black rounded-xl z-10">
//             <img src={Card_3} alt="Logo 3" className="h-12 mb-4" />
//             <h3 className="text-xl font-bold mb-2">Brand Management</h3>
//             <p className="text-gray-600">
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
//               quo impedit numquam culpa nihil optio quaerat consectetur beatae
//               mollitia ullam?
//             </p>
//           </div>

//           <div className="flex-1 min-w-[280px] max-w-[320px] p-4 bg-[#F8F3F3] shadow-lg border-r-4 border-b-4 border-black rounded-xl z-10">
//             <img src={Card_4} alt="Logo 4" className="h-12 mb-4" />
//             <h3 className="text-xl font-bold mb-2">Influencer Marketing</h3>
//             <p className="text-gray-600">
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
//               quo impedit numquam culpa nihil optio quaerat consectetur beatae
//               mollitia ullam?
//             </p>
//           </div>

//           <div className="flex-1 min-w-[280px] max-w-[320px] p-4 bg-[#F8F3F3] shadow-lg border-r-4 border-b-4 border-black rounded-xl z-10">
//             <img src={Card_5} alt="Logo 5" className="h-12 mb-4" />
//             <h3 className="text-xl font-bold mb-2">Analytics and Reporting</h3>
//             <p className="text-gray-600">
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
//               quo impedit numquam culpa nihil optio quaerat consectetur beatae
//               mollitia ullam?
//             </p>
//           </div>

//           <div className="flex-1 min-w-[280px] max-w-[320px] p-4 bg-[#F8F3F3] shadow-lg border-r-4 border-b-4 border-black rounded-xl z-10">
//             <img src={Card_6} alt="Logo 6" className="h-12 mb-4" />
//             <h3 className="text-xl font-bold mb-2">Social Media Management</h3>
//             <p className="text-gray-600">
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
//               quo impedit numquam culpa nihil optio quaerat consectetur beatae
//               mollitia ullam?
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardSection;
