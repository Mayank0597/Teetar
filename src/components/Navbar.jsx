// // // // // // import React from "react";
// // // // // // import Vector from "/src/assets/Vector.png";

// // // // // // const Navbar = () => {
// // // // // //   return (
// // // // // //     <nav className="flex justify-between items-center p-4 mb-2">
// // // // // //       <div className="flex-shrink-0">
// // // // // //         <img
// // // // // //           src={Vector}
// // // // // //           alt="Company Logo"
// // // // // //           className="w-[160px] h-[48.16px]"
// // // // // //         />
// // // // // //       </div>
// // // // // //       <div className="flex items-center space-x-6 ">
// // // // // //         <a href="#works" className="text-white ">
// // // // // //           Works
// // // // // //         </a>
// // // // // //         <a href="#services" className="text-white">
// // // // // //           Services
// // // // // //         </a>
// // // // // //         <a href="#about" className="text-white">
// // // // // //           About
// // // // // //         </a>
// // // // // //         <a href="#career" className="text-white">
// // // // // //           Career
// // // // // //         </a>
// // // // // //         <button className="bg-white text-black px-4 py-2 font-semibold rounded-lg shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] ">
// // // // // //           Contact
// // // // // //         </button>
// // // // // //       </div>
// // // // // //     </nav>
// // // // // //   );
// // // // // // };

// // // // // // export default Navbar;

// // // // // import React from "react";
// // // // // import Vector from "/src/assets/Vector.png";
// // // // // import "./Navbar-button.css";

// // // // // const Navbar = () => {
// // // // //   return (
// // // // //     <nav className="absolute top-0 flex flex-col sm:flex-row justify-between items-center px-8 py-4 mb-2 w-full">
// // // // //       <div className="flex-shrink-0 mb-4 sm:mb-0">
// // // // //         <img
// // // // //           src={Vector}
// // // // //           alt="Company Logo"
// // // // //           className="w-[120px] sm:w-[160px] h-auto"
// // // // //         />
// // // // //       </div>
// // // // //       <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
// // // // //         <a href="#works" className="text-white text-sm sm:text-base">
// // // // //           Works
// // // // //         </a>
// // // // //         <a href="#services" className="text-white text-sm sm:text-base">
// // // // //           Services
// // // // //         </a>
// // // // //         <a href="#about" className="text-white text-sm sm:text-base">
// // // // //           About
// // // // //         </a>
// // // // //         <a href="#career" className="text-white text-sm sm:text-base">
// // // // //           Career
// // // // //         </a>
// // // // //         {/* <button className="bg-white text-black px-3 py-2 rounded-lg shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] text-sm sm:text-base">
// // // // //           Contact
// // // // //         </button> */}
// // // // //         <button class="button-50" role="button">
// // // // //           Contact
// // // // //         </button>
// // // // //       </div>
// // // // //     </nav>
// // // // //   );
// // // // // };

// // // // // export default Navbar;

// // // // import React, { useState } from "react";
// // // // import Vector from "/src/assets/Vector.png";
// // // // import "./Navbar-button.css";

// // // // const Navbar = () => {
// // // //   const [isOpen, setIsOpen] = useState(false);

// // // //   const toggleMenu = () => {
// // // //     setIsOpen(!isOpen);
// // // //   };

// // // //   return (
// // // //     <nav className="absolute top-0 flex flex-col sm:flex-row justify-between items-center px-8 py-4 mb-2 w-full">
// // // //       {/* Company Logo */}
// // // //       <div className="flex-shrink-0 mb-4 sm:mb-0">
// // // //         <img
// // // //           src={Vector}
// // // //           alt="Company Logo"
// // // //           className="w-[120px] sm:w-[160px] h-auto"
// // // //         />
// // // //       </div>

// // // //       {/* Hamburger Icon for Mobile View */}
// // // //       <div className="sm:hidden">
// // // //         <button
// // // //           onClick={toggleMenu}
// // // //           className="text-white focus:outline-none"
// // // //         >
// // // //           <svg
// // // //             className="w-8 h-8"
// // // //             fill="none"
// // // //             stroke="currentColor"
// // // //             viewBox="0 0 24 24"
// // // //             xmlns="http://www.w3.org/2000/svg"
// // // //           >
// // // //             <path
// // // //               strokeLinecap="round"
// // // //               strokeLinejoin="round"
// // // //               strokeWidth="2"
// // // //               d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
// // // //             ></path>
// // // //           </svg>
// // // //         </button>
// // // //       </div>

// // // //       {/* Menu Items */}
// // // //       <div
// // // //         className={`${
// // // //           isOpen ? "block" : "hidden"
// // // //         } sm:flex sm:items-center sm:space-x-6 absolute sm:relative top-16 left-0 sm:top-0 sm:left-0 w-full sm:w-auto bg-black sm:bg-transparent`}
// // // //       >
// // // //         <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 p-4 sm:p-0">
// // // //           <a href="#works" className="text-white text-sm sm:text-base">
// // // //             Works
// // // //           </a>
// // // //           <a href="#services" className="text-white text-sm sm:text-base">
// // // //             Services
// // // //           </a>
// // // //           <a href="#about" className="text-white text-sm sm:text-base">
// // // //             About
// // // //           </a>
// // // //           <a href="#career" className="text-white text-sm sm:text-base">
// // // //             Career
// // // //           </a>
// // // //           <button className="button-50 w-full sm:w-auto">
// // // //             Contact
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //     </nav>
// // // //   );
// // // // };

// // // // export default Navbar;

// // // import React, { useState } from "react";
// // // import Vector from "/src/assets/Vector.png";
// // // import "./Navbar-button.css";

// // // const Navbar = () => {
// // //   const [isOpen, setIsOpen] = useState(false);

// // //   const toggleMenu = () => {
// // //     setIsOpen(!isOpen);
// // //   };

// // //   return (
// // //     <nav className="absolute top-0 flex flex-col sm:flex-row justify-between items-center px-8 py-4 mb-2 w-full">
// // //       {/* Company Logo */}
// // //       <div className="flex-shrink-0 mb-4 sm:mb-0">
// // //         <img
// // //           src={Vector}
// // //           alt="Company Logo"
// // //           className="w-[120px] sm:w-[160px] h-auto"
// // //         />
// // //       </div>

// // //       {/* Hamburger Icon for Mobile View */}
// // //       <div className="sm:hidden">
// // //         <button
// // //           onClick={toggleMenu}
// // //           className="text-white focus:outline-none"
// // //         >
// // //           <svg
// // //             className="w-8 h-8"
// // //             fill="none"
// // //             stroke="currentColor"
// // //             viewBox="0 0 24 24"
// // //             xmlns="http://www.w3.org/2000/svg"
// // //           >
// // //             <path
// // //               strokeLinecap="round"
// // //               strokeLinejoin="round"
// // //               strokeWidth="2"
// // //               d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
// // //             ></path>
// // //           </svg>
// // //         </button>
// // //       </div>

// // //       {/* Background Overlay */}
// // //       {isOpen && (
// // //         <div className="fixed inset-0 bg-black opacity-50 z-10 sm:hidden"></div>
// // //       )}

// // //       {/* Menu Items */}
// // //       <div
// // //         className={`${
// // //           isOpen ? "block" : "hidden"
// // //         } sm:flex sm:items-center sm:space-x-6 absolute sm:relative top-16 left-0 sm:top-0 sm:left-0 w-full sm:w-auto bg-black sm:bg-transparent z-20`}
// // //       >
// // //         <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 p-4 sm:p-0">
// // //           <a href="#works" className="text-white text-sm sm:text-base">
// // //             Works
// // //           </a>
// // //           <a href="#services" className="text-white text-sm sm:text-base">
// // //             Services
// // //           </a>
// // //           <a href="#about" className="text-white text-sm sm:text-base">
// // //             About
// // //           </a>
// // //           <a href="#career" className="text-white text-sm sm:text-base">
// // //             Career
// // //           </a>
// // //           <button className="button-50 w-full sm:w-auto">
// // //             Contact
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </nav>
// // //   );
// // // };

// // // export default Navbar;

// // import React, { useState, useEffect } from "react";
// // import Vector from "/src/assets/Vector.png";
// // import "./Navbar-button.css";

// // const Navbar = () => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   const toggleMenu = () => {
// //     setIsOpen(!isOpen);
// //   };

// //   const closeMenu = () => {
// //     setIsOpen(false);
// //   };

// //   // Close menu when clicking outside
// //   useEffect(() => {
// //     const handleClickOutside = (event) => {
// //       if (isOpen && !event.target.closest("nav")) {
// //         closeMenu();
// //       }
// //     };

// //     document.addEventListener("click", handleClickOutside);
// //     return () => {
// //       document.removeEventListener("click", handleClickOutside);
// //     };
// //   }, [isOpen]);

// //   return (
// //     <nav className="absolute top-0 flex flex-col sm:flex-row justify-between items-center px-8 py-4 mb-2 w-full">
// //       {/* Company Logo */}
// //       <div className="flex-shrink-0 mb-4 sm:mb-0">
// //         <img
// //           src={Vector}
// //           alt="Company Logo"
// //           className="w-[120px] sm:w-[160px] h-auto"
// //         />
// //       </div>

// //       {/* Hamburger Icon for Mobile View */}
// //       <div className="sm:hidden">
// //         <button onClick={toggleMenu} className="text-white focus:outline-none">
// //           <svg
// //             className="w-8 h-8"
// //             fill="none"
// //             stroke="currentColor"
// //             viewBox="0 0 24 24"
// //             xmlns="http://www.w3.org/2000/svg"
// //           >
// //             <path
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //               strokeWidth="2"
// //               d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
// //             ></path>
// //           </svg>
// //         </button>
// //       </div>

// //       {/* Background Overlay */}
// //       {isOpen && (
// //         <div className="fixed inset-0 bg-black opacity-50 z-10 sm:hidden"></div>
// //       )}

// //       {/* Menu Items */}
// //       <div
// //         className={`${
// //           isOpen ? "block" : "hidden"
// //         } sm:flex sm:items-center sm:space-x-6 absolute sm:relative top-16 left-0 sm:top-0 sm:left-0 w-full sm:w-auto bg-black sm:bg-transparent z-20`}
// //       >
// //         <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 p-4 sm:p-0">
// //           <a href="#works" className="text-white text-sm sm:text-base">
// //             Works
// //           </a>
// //           <a href="#services" className="text-white text-sm sm:text-base">
// //             Services
// //           </a>
// //           <a href="#about" className="text-white text-sm sm:text-base">
// //             About
// //           </a>
// //           <a href="#career" className="text-white text-sm sm:text-base">
// //             Career
// //           </a>
// //           <button className="button-50 w-full sm:w-auto">Contact</button>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// import React, { useState, useEffect, useRef } from "react";
// import Vector from "/src/assets/Vector.png";
// import "./Navbar-button.css";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const navRef = useRef(null);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeMenu = () => {
//     setIsOpen(false);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (navRef.current && !navRef.current.contains(event.target)) {
//         closeMenu();
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <nav
//       ref={navRef}
//       className="absolute top-0 flex flex-col sm:flex-row justify-between items-center px-8 py-4 mb-2 w-full"
//     >
//       {/* Company Logo */}
//       <div className="flex-shrink-0 mb-4 sm:mb-0">
//         <img
//           src={Vector}
//           alt="Company Logo"
//           className="w-[120px] sm:w-[160px] h-auto"
//         />
//       </div>

//       {/* Hamburger Icon for Mobile View */}
//       <div className="sm:hidden">
//         <button onClick={toggleMenu} className="text-white focus:outline-none">
//           <svg
//             className="w-8 h-8"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
//             ></path>
//           </svg>
//         </button>
//       </div>

//       {/* Background Overlay */}
//       {isOpen && (
//         <div className="fixed inset-0 bg-black opacity-50 z-10 sm:hidden"></div>
//       )}

//       {/* Menu Items */}
//       <div
//         className={`${
//           isOpen ? "block" : "hidden"
//         } sm:flex sm:items-center sm:space-x-6 absolute sm:relative top-16 left-0 sm:top-0 sm:left-0 w-full sm:w-auto bg-black sm:bg-transparent z-20`}
//       >
//         <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 p-4 sm:p-0">
//           <a href="#works" className="text-white text-sm sm:text-base">
//             Works
//           </a>
//           <a href="#services" className="text-white text-sm sm:text-base">
//             Services
//           </a>
//           <a href="#about" className="text-white text-sm sm:text-base">
//             About
//           </a>
//           <a href="#career" className="text-white text-sm sm:text-base">
//             Career
//           </a>
//           <button className="button-50 w-full sm:w-auto">Contact</button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import Nav from "react-bootstrap/Nav";
// import Vector from "/src/assets/Vector.png";
// // import 'bootstrap/dist/css/bootstrap.min.css';
// function Navbar() {
//   return (
//     <>
//     <img src={Vector} alt="Company_Logo" className="w-[120px] sm:w-[160px] h-auto absolute top-5 left-[4vw] flex flex-row"/>
//       <Nav
//         className="justify-content-end absolute top-0 left-[60vw] flex flex-row px-4 py-8 sm:px-6 sm:py-10 md:ml-[10%]"
//         activeKey="/home"
//       >

//         <Nav.Item>
//           <Nav.Link href="/works" className="text-white">
//             Works
//           </Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="link-1" className="text-white">
//             Services
//           </Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="link-2" className="text-white">
//             About
//           </Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="link-3" className="text-white">
//             Career
//           </Nav.Link>
//         </Nav.Item>
//       </Nav>
//     </>
//   );
// }
// export default Navbar;

// import {
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
//   Menu,
//   MenuButton,
//   MenuItem,
//   MenuItems,
// } from "@headlessui/react";
// import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
// import Vector from "/src/assets/Vector.png";

// const navigation = [
//   { name: "Works", href: "#", current: false },
//   { name: "Services", href: "#", current: false },
//   { name: "About", href: "#", current: false },
//   { name: "Career", href: "#", current: false },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Example() {
//   return (
//     <>
//       <div className="">
//         <img
//           alt="Your Company"
//           src={Vector}
//           className="w-[120px] sm:w-[160px] h-auto absolute top-5 left-[4vw] flex flex-row"
//         />
//       </div>
//       <Disclosure
//         as="nav"
//         className="justify-content-end absolute top-0 left-[60vw] flex flex-row px-4 py-8 sm:px-6 sm:py-10 md:ml-[10%]"
//       >
//         <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//           <div className="relative flex h-16 items-center justify-between">
//             <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//               {/* Mobile menu button*/}
//               <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                 <span className="absolute -inset-0.5" />
//                 <span className="sr-only">Open main menu</span>
//                 <Bars3Icon
//                   aria-hidden="true"
//                   className="block h-6 w-6 group-data-[open]:hidden"
//                 />
//                 <XMarkIcon
//                   aria-hidden="true"
//                   className="hidden h-6 w-6 group-data-[open]:block"
//                 />
//               </DisclosureButton>
//             </div>
//             <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//               {/* <div className="flex flex-shrink-0 items-center">
//               <img alt="Your Company" src={Vector} className="h-8 w-auto" />
//             </div> */}
//               <div className="hidden sm:ml-6 sm:block -mt-5">
//                 <div className="flex space-x-4">
//                   {navigation.map((item) => (
//                     <a
//                       key={item.name}
//                       href={item.href}
//                       aria-current={item.current ? "page" : undefined}
//                       className={classNames(
//                         item.current
//                           ? "bg-gray-900 text-white"
//                           : "text-gray-300 hover:bg-gray-700 hover:text-white",
//                         "rounded-md px-3 py-2 text-lg font-medium"
//                       )}
//                     >
//                       {item.name}
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             </div>
//             <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
//           </div>
//         </div>

//         <DisclosurePanel className="sm:hidden">
//           <div className="space-y-1 px-2 pb-3 pt-2">
//             {navigation.map((item) => (
//               <DisclosureButton
//                 key={item.name}
//                 as="a"
//                 href={item.href}
//                 aria-current={item.current ? "page" : undefined}
//                 className={classNames(
//                   item.current
//                     ? "bg-gray-900 text-white"
//                     : "text-gray-300 hover:bg-gray-700 hover:text-white",
//                   "block rounded-md px-3 py-2 text-base font-medium"
//                 )}
//               >
//                 {item.name}
//               </DisclosureButton>
//             ))}
//           </div>
//         </DisclosurePanel>
//       </Disclosure>
//     </>
//   );
// }

// import {
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
//   Menu,
//   MenuButton,
//   MenuItem,
//   MenuItems,
// } from "@headlessui/react";
// import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
// import Vector from "/src/assets/Vector.png";

// const navigation = [
//   { name: "Works", href: "#", current: false },
//   { name: "Services", href: "#", current: false },
//   { name: "About", href: "#", current: false },
//   { name: "Career", href: "#", current: false },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Example() {
//   return (

//     <>

//     <div className="absolute flex top-0 justify-between px-10 py-4 items-center w-full">
//       <div className="">
//         <img
//           alt="Your Company"
//           src={Vector}
//           className="w-[120px] sm:w-[160px]"
//         />
//       </div>
//       <Disclosure
//         as="nav"
//         className=""
//       >
//         <div className="mx-auto max-w-7xl">
//           <div className="relative flex items-center justify-between">
//             <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//               {/* Mobile menu button*/}
//               <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-1 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                 <span className="absolute -inset-0.5" />
//                 <span className="sr-only">Open main menu</span>
//                 <Bars3Icon
//                   aria-hidden="true"
//                   className="block h-6 w-6 group-data-[open]:hidden text-white"
//                 />
//                 <XMarkIcon
//                   aria-hidden="true"
//                   className="hidden h-6 w-6 group-data-[open]:block"
//                 />
//               </DisclosureButton>
//             </div>
//             <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//               <div className="hidden sm:ml-6 sm:block">
//                 <div className="flex space-x-6">
//                   {navigation.map((item) => (
//                     <a
//                       key={item.name}
//                       href={item.href}
//                       aria-current={item.current ? "page" : undefined}
//                       className={classNames(
//                         item.current
//                           ? "bg-gray-900 text-white"
//                           : "text-white hover:bg-gray-700 hover:text-white",
//                         "rounded-md px-3 py-2 text-lg font-medium" // Adjusted text size and position
//                       )}
//                     >
//                       {item.name}
//                     </a>
//                   ))}
//                   <a class="relative" href="#">
//                     <span class="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
//                     <span class="fold-bold relative inline-block h-full w-full rounded border-2 bg-white px-3 py-2 text-base text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
//                       Contact
//                     </span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//             {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//               <a
//                 href="#contact"
//                 className="bg-white text-gray-800 hover:bg-gray-200 rounded-md px-4 py-2 text-lg font-medium" // Contact button style
//               >
//                 Contact
//               </a>
//             </div> */}
//           </div>
//         </div>

//         <DisclosurePanel className="sm:hidden">
//           <div className="space-y-1 px-2 pb-3 pt-2">
//             {navigation.map((item) => (
//               <DisclosureButton
//                 key={item.name}
//                 as="a"
//                 href={item.href}
//                 aria-current={item.current ? "page" : undefined}
//                 className={classNames(
//                   item.current
//                     ? "bg-gray-900 text-white"
//                     : "text-gray-300 z-50 bg-black hover:bg-gray-700 hover:text-white",
//                   "block rounded-md px-3 py-2 text-base font-medium"
//                 )}
//               >
//                 {item.name}
//               </DisclosureButton>
//             ))}
//           </div>
//         </DisclosurePanel>
//       </Disclosure>
//     </div>
//     </>
//   );
// }

// import React, { useState, useEffect } from "react";
// import {
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
// } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import Vector from "/src/assets/Vector.png";

// const navigation = [
//   { name: "Works", href: "#" },
//   { name: "Services", href: "#" },
//   { name: "About", href: "#" },
//   { name: "Career", href: "#" },
//   { name: "Contact", href: "#" },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Example() {
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768) {
//         setIsOpen(false); // Close the off-canvas menu on larger screens
//       }
//     };

//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <>
//       <div className="absolute flex top-0 justify-between px-10 py-4 items-center w-full bg-[#6374FD] z-50">
//         <div>
//           <img
//             alt="Your Company"
//             src={Vector}
//             className="w-[120px] sm:w-[160px]"
//           />
//         </div>
//         <div className="flex items-center">
//           {/* Mobile menu button */}
//           <button
//             onClick={() => setIsOpen(true)}
//             className="inline-flex items-center justify-center rounded-md p-1 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white sm:hidden"
//           >
//             <span className="sr-only">Open main menu</span>
//             <Bars3Icon className="block h-6 w-6 text-white" />
//           </button>
//         </div>
//       </div>

//       {/* Off-canvas menu */}
//       {isOpen && (
//         <div className="fixed inset-0 z-40 bg-[#6374FD] text-white">
//           <div className="flex justify-between items-center p-4">
//             <img
//               alt="Your Company"
//               src={Vector}
//               className="w-[120px] sm:w-[160px]"
//             />
//             <button onClick={() => setIsOpen(false)} className="text-white">
//               <XMarkIcon className="h-6 w-6" />
//             </button>
//           </div>
//           <div className="flex flex-col items-center space-y-4 mt-12">
//             {navigation.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 className="text-xl font-medium"
//                 onClick={() => setIsOpen(false)} // Close the menu on item click
//               >
//                 {item.name}
//               </a>
//             ))}
//           </div>
//         </div>
//       )}

//       <Disclosure as="nav" className="hidden sm:flex">
//         <div className="mx-auto max-w-7xl">
//           <div className="relative flex items-center justify-between">
//             <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//               <div className="hidden sm:ml-6 sm:block">
//                 <div className="flex space-x-6">
//                   {navigation.slice(0, -1).map((item) => (
//                     <a
//                       key={item.name}
//                       href={item.href}
//                       className={classNames(
//                         "text-white hover:bg-gray-700 hover:text-white",
//                         "rounded-md px-3 py-2 text-lg font-medium"
//                       )}
//                     >
//                       {item.name}
//                     </a>
//                   ))}
//                   <a className="relative" href="#">
//                     <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
//                     <span className="relative inline-block h-full w-full rounded border-2 bg-white px-3 py-2 text-base text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
//                       Contact
//                     </span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Disclosure>
//     </>
//   );
// }

import React, { useState, useEffect } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Vector from "/src/assets/Vector.png";
import { Link, useLocation } from "react-router-dom";
import CircleImage from "/src/assets/active.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Works", href: "/Works" },
  { name: "Clients", href: "/Clients"},
  { name: "Services", href: "/Services" },
  { name: "Career", href: "/Career" },
  { name: "Contact", href: "/Contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [activeMenuItem, setActiveMenuItem] = useState(location.pathname);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false); // Close the off-canvas menu on larger screens
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setActiveMenuItem(location.pathname);
  }, [location.pathname]);

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden lg:flex absolute top-0 justify-between px-10 py-4 items-center w-full bg-[#6374FD] z-10">
        <div>
          <Link to="/">
            <img
              alt="Your Company"
              src={Vector}
              className="w-[120px] lg:w-[160px]"
            />
          </Link>
        </div>
        <div className="flex items-center space-x-6">
          {navigation.slice(0, -1).map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={classNames(
                location.pathname === item.href
                  ? "text-[#FCCB30]"
                  : "text-white hover:text-white",
                "rounded-md px-3 py-2 text-lg font-medium"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Link
            className={classNames(
              location.pathname === "/Contact"
                ? "font-semibold"
                : "font-medium",
              "relative"
            )}
            to="/Contact"
          >
            <span className="absolute top-0 left-0 -z-50 transform translate-x-1.5 translate-y-1.5 h-full w-full rounded-lg bg-black hover:mt-0 hover:ml-0 transition-all duration-100 ease-in-out"></span>
            <span className="inline-block h-full w-full rounded-lg border-2 bg-white px-3 py-2 text-base text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900 transform hover:translate-x-1 hover:translate-y-1">
              Contact
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <Link to="/">
        <img
          alt="Your Company"
          src={Vector}
          className="w-[100px] sm:w-[160px] h-8 mt-4 ml-6"
        />
      </Link>
      <div className="absolute top-0 right-0 px-4 py-4 lg:hidden">
        <button
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center justify-center rounded-md p-1 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="block h-6 w-6 text-white" />
        </button>
      </div>

      {/* Off-canvas Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-[#6374FD] text-white">
          <div className="flex justify-between items-center p-4">
            <Link to="/">
              <img
                alt="Your Company"
                src={Vector}
                className="w-[120px] sm:w-[160px]"
              />
            </Link>
            <button onClick={() => setIsOpen(false)} className="text-white">
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col items-center relative space-y-4 mt-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-xl font-medium relative"
                onClick={() => setIsOpen(false)} // Close the menu on item click
              >

                {item.name}
              </Link>
            ))}
            {/* Circular Image */}
            {activeMenuItem && (
              <img
                src={CircleImage}
                alt="Active Highlight"
                className="absolute left-0 right-0 mx-auto transform -translate-y-6 w-28 h-10 z-0 pointer-events-none"
                style={{
                  top: `${
                    navigation.findIndex(
                      (item) => item.href === activeMenuItem
                    ) *
                      44
                    
                  }px`, // Adjust the position based on the active menu item index
                }}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
