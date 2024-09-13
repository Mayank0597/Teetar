// import React from "react";
// import companyLogo from "/src/assets/footer logo.png"; // Update the path to your company logo

// const Footer = () => {
//   return (
//     <div className="bg-black text-white py-16 -mt-36">
//       <div className="container mx-auto px-8">
//         <div className="flex justify-center space-x-72 mt-16 text-center gap-2">
//           {/* Navigation */}
//           <div>
//             <h3 className="text-lg font-bold mb-4 ml-36">Navigation</h3>
//             <ul>
//               <li className="mb-2 ml-36">Home</li>
//               <li className="mb-2 ml-36">Works</li>
//               <li className="mb-2 ml-36">Services</li>
//               <li className="mb-2 ml-36">About Us</li>
//               <li className="ml-36">Contact Us</li>
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="text-lg font-bold mb-4  ">Services</h3>
//             <ul>
//               <li className="mb-2 ">Social Media Strategy</li>
//               <li className="mb-2 ">Content Creation</li>
//               <li className="mb-2 ">Brand Management</li>
//               <li className="mb-2 ">Influencer Marketing</li>
//               <li className="">Analytics & Reporting</li>
//             </ul>
//           </div>

//           {/* Contact Us */}
//           <div>
//             <h3 className="text-lg font-bold mb-4">Contact Us</h3>
//             <address>
//               <p className="mb-2">Sampark Infoways</p>
//               <p className="mb-2">C/o The BOARDROOM Co-working</p>
//               <p className="mb-2">Modi House, 1st Floor</p>
//               <p className="mb-2">Off-link Road, Andheri(W)</p>
//               <p>Mumbai-400053</p>
//             </address>
//           </div>
//         </div>

//         {/* Company Logo */}
//         <div className="flex justify-center mt-16">
//           <img src={companyLogo} alt="Company Logo" className="h-12" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

// import React from "react";
// import companyLogo from "/src/assets/footer logo.png";
// import { Link } from "react-router-dom";

// const Footer = ({}) => {
//   return (
//     <div className="bg-black text-white py-16 sm:mb-0 w-full">
//       <div className="container mx-auto px-8">
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-left sm:text-center gap-4 sm:gap-8 mt-32">
//           {/* Navigation */}
//           <div className="sm:ml-40">
//             <h3 className="text-lg font-bold mb-2 sm:mb-4">Navigation</h3>
//             <ul>
//               <li className="mb-2">
//                 <Link key="Home" to="/">
//                   Home
//                 </Link>
//               </li>
//               <li className="mb-2">
//                 <Link key="Works" to="/Works">
//                   Works
//                 </Link>
//               </li>
//               <li className="mb-2">
//                 <Link key="Services" to="/Services">
//                   Services
//                 </Link>
//               </li>
//               <li className="mb-2">
//                 <Link key="Services" to="/Career">
//                   Career
//                 </Link>
//               </li>
//               <li>
//                 <Link key="Services" to="/Contact">
//                   Contact Us
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Services */}
//           <div className="sm:ml-10">
//             <h3 className="text-lg font-bold mb-2 sm:mb-4">Services</h3>
//             <ul>
//               <li className="mb-2">
//                 <Link to="/Services#social-media-strategy">
//                   Social Media Strategy
//                 </Link>
//               </li>
//               <li className="mb-2">
//                 <Link to="/Services#content-creation">Content Creation</Link>
//               </li>
//               <li className="mb-2">
//                 <Link to="/Services#brand-management">Brand Management</Link>
//               </li>
//               <li className="mb-2">
//                 <Link to="/Services#social-media-management">
//                   Social Media Management
//                 </Link>
//               </li>
//               <li className="mb-2">
//                 <Link to="/Services#influencer-marketing">
//                   Influencer Marketing
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/Services#analytics-reporting">
//                   Analytics & Reporting
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Contact Us */}
//           <div className="sm:mr-40">
//             <h3 className="text-lg font-bold mb-2 sm:mb-4">Contact Us</h3>

//             <address>
//               <p className="">Sampark Infoways</p>
//               <p className="">C/o The BOARDROOM Co-working</p>
//               <p className="">Modi House, 1st Floor</p>
//               <p className="">Off-link Road, Andheri(W)</p>
//               <p>Mumbai-400053</p>
//               <p>
//                 <Link
//                   to="https://maps.app.goo.gl/MyAMSg9NhScJzqnV9"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-400 underline"
//                 >
//                   Open in Google Maps
//                 </Link>
//               </p>
//             </address>
//           </div>
//         </div>
//       </div>
//       {/* Company Logo */}
//       <div className="flex justify-center sm:justify-center mt-8 sm:mt-16 sm:mr-32">
//         <img src={companyLogo} alt="Company Logo" className="h-12" />
//       </div>

//       {/* Copyright Text for Mobile View */}
//       <div className="flex justify-center mt-14 -mb-14 sm:hidden">
//         <p className="text-center text-xs">&copy; teetar.social | 2024</p>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import companyLogo from "/src/assets/footer logo.png";
import { Link } from "react-router-dom";

const Footer = ({ isServiceOrContactPage }) => {
  return (
    <div className="bg-black text-white py-16 w-full">
      <div className="container mx-auto px-8">
        <div
          className={`flex flex-col sm:flex-row justify-between items-start sm:items-center text-left sm:text-center gap-4 sm:gap-8 ${
            isServiceOrContactPage ? "mt-8" : "mt-32"
          } `}
        >
          {/* Navigation */}
          <div className="flex-1 sm:mr-4">
            <h3 className="text-lg font-bold mb-2 sm:mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link key="Home" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link key="Works" to="/Works">
                  Works
                </Link>
              </li>
              <li>
                <Link key="Clients" to="/Clients">
                Clients
                </Link>
              </li>
              <li>
                <Link key="Services" to="/Services">
                  Services
                </Link>
              </li>
              <li>
                <Link key="Career" to="/Career">
                  Career
                </Link>
              </li>
              <li>
                <Link key="Contact" to="/Contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="flex-1 sm:mx-8">
            <h3 className="text-lg font-bold mb-2 sm:mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/Services#social-media-strategy">
                  Social Media Strategy
                </Link>
              </li>
              <li>
                <Link to="/Services#content-creation">Content Creation</Link>
              </li>
              <li>
                <Link to="/Services#brand-management">Brand Management</Link>
              </li>
              <li>
                <Link to="/Services#social-media-management">
                  Social Media Management
                </Link>
              </li>
              <li>
                <Link to="/Services#influencer-marketing">
                  Influencer Marketing
                </Link>
              </li>
              <li>
                <Link to="/Services#analytics-reporting">
                  Analytics & Reporting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="flex-1 sm:ml-4">
            <h3 className="text-lg font-bold mb-2 sm:mb-4">Contact Us</h3>
            <address>
              <p className="">Sampark Infoways</p>
              <p className="">C/o The BOARDROOM Co-working</p>
              <p className="">Modi House, 1st Floor</p>
              <p className="">Off-link Road, Andheri(W)</p>
              <p>Mumbai-400053</p>
              <p>
                <Link
                  to="https://maps.app.goo.gl/MyAMSg9NhScJzqnV9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400"
                >
                  Open in Google Maps
                </Link>
              </p>
            </address>
          </div>
        </div>
      </div>

      {/* Company Logo */}
      <div className="flex justify-center mt-8 sm:mt-16">
        <img src={companyLogo} alt="Company Logo" className="h-12" />
      </div>

      {/* Copyright Text for Mobile View */}
      <div className="flex justify-center mt-14 -mb-14 sm:hidden">
        <p className="text-center text-xs">&copy; teetar.social | 2024</p>
      </div>
    </div>
  );
};

export default Footer;
