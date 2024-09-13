// import React from "react";

// const CardSection = () => {
//   const cards = [
//     {
//       logo: "src/assets/Card-1 Logo.png",
//       heading: "Social Media Strategy",
//       content:
//         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat quo impedit numquam culpa nihil optio quaerat consectetur beatae mollitia ullam? Ducimus tenetur, quo beatae magnam debitis inventore vero asperiores in.",
//       isRectangle: true,
//     },
//     {
//       logo: "src/assets/Card-2 logo.png",
//       heading: "Content Creation",
//       content:
//         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat quo impedit numquam culpa nihil optio quaerat consectetur beatae mollitia ullam? Ducimus tenetur, quo beatae magnam debitis inventore vero asperiores in.",
//     },
//     {
//       logo: "src/assets/Card-3 logo.png",
//       heading: "Brand Management",
//       content:
//         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat quo impedit numquam culpa nihil optio quaerat consectetur beatae mollitia ullam? Ducimus tenetur, quo beatae magnam debitis inventore vero asperiores in.",
//     },
//     {
//       logo: "src/assets/Card-4 logo.png",
//       heading: "Influencer Marketing",
//       content:
//         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat quo impedit numquam culpa nihil optio quaerat consectetur beatae mollitia ullam? Ducimus tenetur, quo beatae magnam debitis inventore vero asperiores in.",
//     },
//     {
//       logo: "src/assets/Card-5 logo.png",
//       heading: "Analytics and Reporting",
//       content:
//         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat quo impedit numquam culpa nihil optio quaerat consectetur beatae mollitia ullam? Ducimus tenetur, quo beatae magnam debitis inventore vero asperiores in.",
//     },
//     {
//       logo: "src/assets/Card-6 logo.png",
//       heading: "Social Media Management",
//       content:
//         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat quo impedit numquam culpa nihil optio quaerat consectetur beatae mollitia ullam? Ducimus tenetur, quo beatae magnam debitis inventore vero asperiores in.",
//       isRectangle: true,
//     },
//   ];

//   return (
//     <div
//       className="relative bg-cover bg-center py-16"
//       style={{
//         // backgroundImage: "url('src/assets/Vector Yellow.png')",
//         // backgroundSize: "cover", // Adjust the size of the background image
//         // backgroundPosition: "right center",
//         background:
//           "url('src/assets/Vector Yellow.png') no-repeat center center",
//         backgroundSize: "48% auto",
//         backgroundPosition: "center",
//         padding: "60px 0",
//       }}
//     >
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className={`p-4 bg-white shadow-lg border-r-4 border-b-4 border-black rounded-xl ${
//               card.isRectangle ? "md:col-span-1.5" : 'w-96'
//             }`}
//             style={{ height: "300px" }}
//           >
//             <img
//               src={card.logo}
//               alt={`Logo ${index + 1}`}
//               className="h-12 mb-4 text-left"
//             />
//             <h3 className="text-xl font-bold mb-2 text-left">{card.heading}</h3>
//             <p className="text-gray-600 text-left">{card.content}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CardSection;

// import React from "react";

// const CardSection = () => {
//   return (
//     <div
//       className="relative bg-cover bg-center py-16"
//       style={{
//         background:
//           "url('src/assets/Vector Yellow.png') no-repeat center center",
//         backgroundSize: "48% auto",
//         backgroundPosition: "center",
//         padding: "60px 0",
//       }}
//     >
//       <div className="container mx-auto">
//         <div className="grid grid-cols-3 gap-4">
//           {/* First row of cards */}
//           <div className="col-span-2 p-4 bg-white shadow-lg border-r-4 border-b-4 border-black rounded-xl h-72 w-[35vw]">
//             <img
//               src="src/assets/Card-1 Logo.png"
//               alt="Logo 1"
//               className="h-12 mb-4 text-left"
//             />
//             <h3 className="text-xl font-bold mb-2 text-left">
//               Social Media Strategy
//             </h3>
//             <p className="text-gray-600 text-left">
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
//               quo impedit numquam culpa nihil optio quaerat consectetur beatae
//               mollitia ullam? Ducimus tenetur, quo beatae magnam debitis
//               inventore vero asperiores in.
//             </p>
//           </div>
//           <div className="p-4 bg-white shadow-lg border-r-4 border-b-4 border-black rounded-xl h-48">
//             <img
//               src="src/assets/Card-2 logo.png"
//               alt="Logo 2"
//               className="h-12 mb-4 text-left"
//             />
//             <h3 className="text-xl font-bold mb-2 text-left">
//               Content Creation
//             </h3>
//             <p className="text-gray-600 text-left">
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
//               quo impedit numquam culpa nihil optio quaerat consectetur beatae
//               mollitia ullam? Ducimus tenetur, quo beatae magnam debitis
//               inventore vero asperiores in.
//             </p>
//           </div>
//           <div className="p-4 bg-white shadow-lg border-r-4 border-b-4 border-black rounded-xl h-48">
//             <img
//               src="src/assets/Card-3 logo.png"
//               alt="Logo 3"
//               className="h-12 mb-4 text-left"
//             />
//             <h3 className="text-xl font-bold mb-2 text-left">
//               Brand Management
//             </h3>
//             <p className="text-gray-600 text-left">
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
//               quo impedit numquam culpa nihil optio quaerat consectetur beatae
//               mollitia ullam? Ducimus tenetur, quo beatae magnam debitis
//               inventore vero asperiores in.
//             </p>
//           </div>
//         </div>
//         <div className="grid grid-cols-3 gap-4 mt-4">
//           {/* Second row of cards */}
//           <div className="p-4 bg-white shadow-lg border-r-4 border-b-4 border-black rounded-xl h-48">
//             <img
//               src="src/assets/Card-4 logo.png"
//               alt="Logo 4"
//               className="h-12 mb-4 text-left"
//             />
//             <h3 className="text-xl font-bold mb-2 text-left">
//               Influencer Marketing
//             </h3>
//             <p className="text-gray-600 text-left">
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
//               quo impedit numquam culpa nihil optio quaerat consectetur beatae
//               mollitia ullam? Ducimus tenetur, quo beatae magnam debitis
//               inventore vero asperiores in.
//             </p>
//           </div>
//           <div className="p-4 bg-white shadow-lg border-r-4 border-b-4 border-black rounded-xl h-48">
//             <img
//               src="src/assets/Card-5 logo.png"
//               alt="Logo 5"
//               className="h-12 mb-4 text-left"
//             />
//             <h3 className="text-xl font-bold mb-2 text-left">
//               Analytics and Reporting
//             </h3>
//             <p className="text-gray-600 text-left">
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
//               quo impedit numquam culpa nihil optio quaerat consectetur beatae
//               mollitia ullam? Ducimus tenetur, quo beatae magnam debitis
//               inventore vero asperiores in.
//             </p>
//           </div>
//           <div className="col-span-2 p-4 bg-white shadow-lg border-r-4 border-b-4 border-black rounded-xl h-72">
//             <img
//               src="src/assets/Card-6 logo.png"
//               alt="Logo 6"
//               className="h-12 mb-4 text-left"
//             />
//             <h3 className="text-xl font-bold mb-2 text-left">
//               Social Media Management
//             </h3>
//             <p className="text-gray-600 text-left">
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
//               quo impedit numquam culpa nihil optio quaerat consectetur beatae
//               mollitia ullam? Ducimus tenetur, quo beatae magnam debitis
//               inventore vero asperiores in.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardSection;

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
//     <div
//       className="relative bg-cover bg-center py-16"
//       style={{
//         background: `url(${vectorYellow}) no-repeat center center`,
//         backgroundSize: "48% auto",
//         backgroundPosition: "center",
//         padding: "60px 0",
//       }}
//     >
//       <div className="container mx-auto px-36 ">
//         {/* First Row */}
//         <div className="flex  justify-center gap-8 mb-8 ">
//           <div
//             className="p-4 bg-white shadow-lg border-r-4 border-b-4 border-black rounded-xl"
//             style={{ width: "580px", minHeight: "300px" }}
//           >
//             <img src={Card_1} alt="Logo 1" className="h-12 mb-4 text-left" />
//             <h3 className="text-xl font-bold mb-2 text-left">
//               Social Media Strategy
//             </h3>
//             <p className="text-gray-600 text-left" style={{ overflowWrap: "break-word" }}>
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
//               quo impedit numquam culpa nihil optio quaerat consectetur beatae
//               mollitia ullam?
//             </p>
//           </div>
//           <div
//             className="p-4 bg-white shadow-lg border-r-4 border-b-4 border-black rounded-xl "
//             style={{ width: "380px", minHeight: "300px" }}
//           >
//             <img src={Card_2} alt="Logo 2" className="h-12 mb-4 text-left" />
//             <h3 className="text-xl font-bold mb-2 text-left">
//               Content Creation
//             </h3>
//             <p className="text-gray-600 text-left" style={{ overflowWrap: "break-word" }}>
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
//               quo impedit numquam culpa nihil optio quaerat consectetur beatae
//               mollitia ullam?
//             </p>
//           </div>
//           <div
//             className="p-4 bg-white shadow-lg border-r-4 border-b-4 border-black rounded-xl"
//             style={{ width: "380px", minHeight: "300px" }}
//           >
//             <img src={Card_3} alt="Logo 3" className="h-12 mb-4 text-left" />
//             <h3 className="text-xl font-bold mb-2 text-left">
//               Brand Management
//             </h3>
//             <p className="text-gray-600 text-left" style={{ overflowWrap: "break-word" }}>
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
//               quo impedit numquam culpa nihil optio quaerat consectetur beatae
//               mollitia ullam?
//             </p>
//           </div>
//         </div>
//         {/* Second Row */}
//         <div className="flex justify-center gap-8 mt-3">
//           <div
//             className="p-4 bg-white shadow-lg border-r-4 border-b-4 border-black rounded-xl"
//             style={{ width: "380px", minHeight: "300px" }}
//           >
//             <img src={Card_4} alt="Logo 4" className="h-12 mb-4 text-left" />
//             <h3 className="text-xl font-bold mb-2 text-left">
//               Influencer Marketing
//             </h3>
//             <p className="text-gray-600 text-left" style={{ overflowWrap: "break-word" }}>
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
//               quo impedit numquam culpa nihil optio quaerat consectetur beatae
//               mollitia ullam?
//             </p>
//           </div>
//           <div
//             className="p-4 bg-white shadow-lg border-r-4 border-b-4 border-black rounded-xl"
//             style={{ width: "380px", minHeight: "300px" }}
//           >
//             <img src={Card_5} alt="Logo 5" className="h-12 mb-4 text-left" />
//             <h3 className="text-xl font-bold mb-2 text-left">
//               Analytics and Reporting
//             </h3>
//             <p className="text-gray-600 text-left" style={{ overflowWrap: "break-word" }}>
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
//               quo impedit numquam culpa nihil optio quaerat consectetur beatae
//               mollitia ullam?
//             </p>
//           </div>
//           <div
//             className="p-4 bg-white shadow-lg border-r-4 border-b-4 rounded-xl "
//             style={{ width: "580px", minHeight: "300px" }}
//           >
//             <img src={Card_6} alt="Logo 6" className="h-12 mb-4 text-left" />
//             <h3 className="text-xl font-bold mb-2 text-left">
//               Social Media Management
//             </h3>
//             <p className="text-gray-600 text-left flex flex-col justify-between" style={{ overflowWrap: "break-word" }}>
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
//     <div
//       className="relative bg-cover bg-center py-16"
//       style={{
//         background: `url(${vectorYellow}) no-repeat center center`,
//         backgroundSize: "48% auto",
//         backgroundPosition: "center",
//         padding: "60px 0",
//       }}
//     >
//       <div className="container mx-auto px-6 md:px-36 ">
//         {/* First Row */}
//         <div className="flex flex-wrap justify-center gap-8 mb-8 ">
//           <div className="flex-1 min-w-[280px] max-w-[451px] p-4 bg-[#F8F3F3] shadow-lg border-r-4 border-b-4 border-black rounded-xl ">
//             <img src={Card_1} alt="Logo 1" className="h-12 mb-4" />
//             <h3 className="text-xl font-bold mb-2">Social Media Strategy</h3>
//             <p className="text-gray-600" style={{ overflowWrap: "break-word" }}>
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
//               quo impedit numquam culpa nihil optio quaerat consectetur beatae
//               mollitia ullam?
//             </p>
//           </div>
//           <div className="flex-1 min-w-[280px] max-w-[318px] p-4 bg-[#F8F3F3] shadow-lg border-r-4 border-b-4 border-black rounded-xl">
//             <img src={Card_2} alt="Logo 2" className="h-12 mb-4" />
//             <h3 className="text-xl font-bold mb-2">Content Creation</h3>
//             <p className="text-gray-600" style={{ overflowWrap: "break-word" }}>
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
//               quo impedit numquam culpa nihil optio quaerat consectetur beatae
//               mollitia ullam?
//             </p>
//           </div>
//           <div className="flex-1 min-w-[280px] max-w-[331px] p-4 bg-[#F8F3F3] shadow-lg border-r-4 border-b-4 border-black rounded-xl">
//             <img src={Card_3} alt="Logo 3" className="h-12 mb-4" />
//             <h3 className="text-xl font-bold mb-2">Brand Management</h3>
//             <p className="text-gray-600" style={{ overflowWrap: "break-word" }}>
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
//               quo impedit numquam culpa nihil optio quaerat consectetur beatae
//               mollitia ullam?
//             </p>
//           </div>
//         </div>

//         {/* Second Row */}
//         <div className="flex flex-wrap justify-center gap-8 mt-3">
//           <div className="flex-1 min-w-[280px] max-w-[318px] p-4 bg-[#F8F3F3] shadow-lg border-r-4 border-b-4 border-black rounded-xl">
//             <img src={Card_4} alt="Logo 4" className="h-12 mb-4" />
//             <h3 className="text-xl font-bold mb-2">Influencer Marketing</h3>
//             <p className="text-gray-600" style={{ overflowWrap: "break-word" }}>
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
//               quo impedit numquam culpa nihil optio quaerat consectetur beatae
//               mollitia ullam?
//             </p>
//           </div>
//           <div className="flex-1 min-w-[280px] max-w-[331px] p-4 bg-[#F8F3F3] shadow-lg border-r-4 border-b-4 border-black rounded-xl">
//             <img src={Card_5} alt="Logo 5" className="h-12 mb-4" />
//             <h3 className="text-xl font-bold mb-2">Analytics and Reporting</h3>
//             <p className="text-gray-600" style={{ overflowWrap: "break-word" }}>
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
//               quo impedit numquam culpa nihil optio quaerat consectetur beatae
//               mollitia ullam?
//             </p>
//           </div>
//           <div className="flex-1 min-w-[280px] max-w-[451px] p-4 bg-[#F8F3F3] shadow-lg border-r-2 border-b-2 border-l-2 border-t-2 border-black rounded-xl">
//             <img src={Card_6} alt="Logo 6" className="h-12 mb-4" />
//             <h3 className="text-xl font-bold mb-2">Social Media Management</h3>
//             <p className="text-gray-600" style={{ overflowWrap: "break-word" }}>
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
//     <div
//       className="relative bg-cover bg-center py-16"
//       style={{
//         background: `url(${vectorYellow}) no-repeat center center`,
//         backgroundSize: "48% auto",
//         backgroundPosition: "center",
//         padding: "60px 0",
//       }}
//     >
//       <div className="container mx-auto px-6 md:px-36 ">
//         {/* First Row */}
//         <div className="flex flex-wrap justify-center gap-8 mb-8 ">
//           <div className="flex-1 min-w-[280px] max-w-[451px] p-4 bg-[#F8F3F3] shadow-lg border-r-4 border-b-4 border-black rounded-xl ">
//             <img src={Card_1} alt="Logo 1" className="h-12 mb-4" />
//             <h3 className="text-xl font-bold mb-2">Social Media Strategy</h3>
//             <p className="text-gray-600" style={{ overflowWrap: "break-word" }}>
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
//               quo impedit numquam culpa nihil optio quaerat consectetur beatae
//               mollitia ullam?
//             </p>
//           </div>
//           <div className="flex-1 min-w-[280px] max-w-[318px] p-4 bg-[#F8F3F3] shadow-lg border-r-4 border-b-4 border-black rounded-xl">
//             <img src={Card_2} alt="Logo 2" className="h-12 mb-4" />
//             <h3 className="text-xl font-bold mb-2">Content Creation</h3>
//             <p className="text-gray-600" style={{ overflowWrap: "break-word" }}>
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
//               quo impedit numquam culpa nihil optio quaerat consectetur beatae
//               mollitia ullam?
//             </p>
//           </div>
//           <div className="flex-1 min-w-[280px] max-w-[331px] p-4 bg-[#F8F3F3] shadow-lg border-r-4 border-b-4 border-black rounded-xl">
//             <img src={Card_3} alt="Logo 3" className="h-12 mb-4" />
//             <h3 className="text-xl font-bold mb-2">Brand Management</h3>
//             <p className="text-gray-600" style={{ overflowWrap: "break-word" }}>
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
//               quo impedit numquam culpa nihil optio quaerat consectetur beatae
//               mollitia ullam?
//             </p>
//           </div>
//         </div>

//         {/* Second Row */}
//         <div className="flex flex-wrap justify-center gap-8 mt-3">
//           <div className="flex-1 min-w-[280px] max-w-[318px] p-4 bg-[#F8F3F3] shadow-lg border-r-4 border-b-4 border-black rounded-xl">
//             <img src={Card_4} alt="Logo 4" className="h-12 mb-4" />
//             <h3 className="text-xl font-bold mb-2">Influencer Marketing</h3>
//             <p className="text-gray-600" style={{ overflowWrap: "break-word" }}>
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
//               quo impedit numquam culpa nihil optio quaerat consectetur beatae
//               mollitia ullam?
//             </p>
//           </div>
//           <div className="flex-1 min-w-[280px] max-w-[331px] p-4 bg-[#F8F3F3] shadow-lg border-r-4 border-b-4 border-black rounded-xl">
//             <img src={Card_5} alt="Logo 5" className="h-12 mb-4" />
//             <h3 className="text-xl font-bold mb-2">Analytics and Reporting</h3>
//             <p className="text-gray-600" style={{ overflowWrap: "break-word" }}>
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
//               quo impedit numquam culpa nihil optio quaerat consectetur beatae
//               mollitia ullam?
//             </p>
//           </div>
//           <div className="flex-1 min-w-[280px] max-w-[451px] p-4 bg-[#F8F3F3] shadow-lg border-r-2 border-b-2 border-l-2 border-t-2 border-black rounded-xl">
//             <img src={Card_6} alt="Logo 6" className="h-12 mb-4" />
//             <h3 className="text-xl font-bold mb-2">Social Media Management</h3>
//             <p className="text-gray-600" style={{ overflowWrap: "break-word" }}>
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
//     <div className="relative py-16">
//       {/* Background Image Container */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           background: `url(${vectorYellow}) no-repeat center center`,
//           backgroundSize: "48% auto",
//           backgroundPosition: "center",
//           padding: "60px 0",
//         }}
//       ></div>

//       {/* Cards Container */}
//       <div className="relative container mx-auto px-6 md:px-36 ">
//         {/* First Row */}
//         <div className="flex flex-wrap justify-center gap-8 mb-8">
//           <div className="flex-1 sm:min-w-[280px] sm:max-w-[451px] p-4 bg-[#F8F3F3] shadow-lg border-r-4 border-b-4 border-black rounded-xl z-10 min-w-[200px] max-w-[320px] border-l-2 border-t-2">
//             <img src={Card_1} alt="Logo 1" className="h-12 mb-4" />
//             <h3 className="text-xl font-bold mb-2">Social Media Strategy</h3>
//             <p className="text-gray-600" style={{ overflowWrap: "break-word" }}>
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
//               quo impedit numquam culpa nihil optio quaerat consectetur beatae
//               mollitia ullam?
//             </p>
//           </div>
//           <div className="flex-1 min-w-[280px] max-w-[318px] p-4 bg-[#F8F3F3] shadow-lg border-r-4 border-b-4 border-black rounded-xl z-10 border-l-2 border-t-2">
//             <img src={Card_2} alt="Logo 2" className="h-12 mb-4" />
//             <h3 className="text-xl font-bold mb-2">Content Creation</h3>
//             <p className="text-gray-600" style={{ overflowWrap: "break-word" }}>
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
//               quo impedit numquam culpa nihil optio quaerat consectetur beatae
//               mollitia ullam?
//             </p>
//           </div>
//           <div className="flex-1 min-w-[280px] max-w-[331px] p-4 bg-[#F8F3F3] shadow-lg border-r-4 border-b-4 border-black rounded-xl z-10 border-l-2 border-t-2">
//             <img src={Card_3} alt="Logo 3" className="h-12 mb-4" />
//             <h3 className="text-xl font-bold mb-2">Brand Management</h3>
//             <p className="text-gray-600" style={{ overflowWrap: "break-word" }}>
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
//               quo impedit numquam culpa nihil optio quaerat consectetur beatae
//               mollitia ullam?
//             </p>
//           </div>
//         </div>

//         {/* Second Row */}
//         <div className="flex flex-wrap justify-center gap-8 mt-3">
//           <div className="flex-1 min-w-[280px] max-w-[318px] p-4 bg-[#F8F3F3] shadow-lg border-r-4 border-b-4 border-black rounded-xl z-10 border-l-2 border-t-2">
//             <img src={Card_4} alt="Logo 4" className="h-12 mb-4" />
//             <h3 className="text-xl font-bold mb-2">Influencer Marketing</h3>
//             <p className="text-gray-600" style={{ overflowWrap: "break-word" }}>
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
//               quo impedit numquam culpa nihil optio quaerat consectetur beatae
//               mollitia ullam?
//             </p>
//           </div>
//           <div className="flex-1 min-w-[280px] max-w-[331px] p-4 bg-[#F8F3F3] shadow-lg border-r-4 border-b-4 border-black rounded-xl z-10 border-l-2 border-t-2">
//             <img src={Card_5} alt="Logo 5" className="h-12 mb-4" />
//             <h3 className="text-xl font-bold mb-2">Analytics and Reporting</h3>
//             <p className="text-gray-600" style={{ overflowWrap: "break-word" }}>
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
//               quo impedit numquam culpa nihil optio quaerat consectetur beatae
//               mollitia ullam?
//             </p>
//           </div>
//           <div className="flex-1 sm:min-w-[280px] sm:max-w-[451px] max-w-[320px] p-4 bg-[#F8F3F3] shadow-lg sm:border-r-2 border-r-4 sm:border-b-2 border-b-4 border-l-2 border-t-2 border-black rounded-xl z-10">
//             <img src={Card_6} alt="Logo 6" className="h-12 mb-4" />
//             <h3 className="text-xl font-bold mb-2">Social Media Management</h3>
//             <p className="text-gray-600" style={{ overflowWrap: "break-word" }}>
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
//     <div className="relative py-16">
//       {/* Vector Image Behind Cards */}
//       <img
//         src={vectorYellow}
//         alt="Vector Background"
//         className="absolute inset-0 mx-auto w-1/2 h-auto z-0"
//         style={{
//           left: "50%",
//           top: "50%",
//           transform: "translate(-50%, -50%)",
//         }}
//       />

//       {/* Cards Container */}
//       <div className="relative container mx-auto px-6 md:px-36 z-10">
//         {/* First Row */}
//         <div className="flex flex-wrap justify-center gap-8 mb-8">
//           <div className="flex-1 sm:min-w-[280px] sm:max-w-[451px] p-4 bg-[#F8F3F3] shadow-lg border-r-4 border-b-4 border-black rounded-xl z-10 min-w-[200px] max-w-[320px] border-l-2 border-t-2">
//             <img src={Card_1} alt="Logo 1" className="h-12 mb-4" />
//             <h3 className="text-xl font-bold mb-2">Social Media Strategy</h3>
//             <p className="text-gray-600" style={{ overflowWrap: "break-word" }}>
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
//               quo impedit numquam culpa nihil optio quaerat consectetur beatae
//               mollitia ullam?
//             </p>
//           </div>
//           <div className="flex-1 min-w-[280px] max-w-[318px] p-4 bg-[#F8F3F3] shadow-lg border-r-4 border-b-4 border-black rounded-xl z-10 border-l-2 border-t-2">
//             <img src={Card_2} alt="Logo 2" className="h-12 mb-4" />
//             <h3 className="text-xl font-bold mb-2">Content Creation</h3>
//             <p className="text-gray-600" style={{ overflowWrap: "break-word" }}>
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
//               quo impedit numquam culpa nihil optio quaerat consectetur beatae
//               mollitia ullam?
//             </p>
//           </div>
//           <div className="flex-1 min-w-[280px] max-w-[331px] p-4 bg-[#F8F3F3] shadow-lg border-r-4 border-b-4 border-black rounded-xl z-10 border-l-2 border-t-2">
//             <img src={Card_3} alt="Logo 3" className="h-12 mb-4" />
//             <h3 className="text-xl font-bold mb-2">Brand Management</h3>
//             <p className="text-gray-600" style={{ overflowWrap: "break-word" }}>
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
//               quo impedit numquam culpa nihil optio quaerat consectetur beatae
//               mollitia ullam?
//             </p>
//           </div>
//         </div>

//         {/* Second Row */}
//         <div className="flex flex-wrap justify-center gap-8 mt-3">
//           <div className="flex-1 min-w-[280px] max-w-[318px] p-4 bg-[#F8F3F3] shadow-lg border-r-4 border-b-4 border-black rounded-xl z-10 border-l-2 border-t-2">
//             <img src={Card_4} alt="Logo 4" className="h-12 mb-4" />
//             <h3 className="text-xl font-bold mb-2">Influencer Marketing</h3>
//             <p className="text-gray-600" style={{ overflowWrap: "break-word" }}>
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
//               quo impedit numquam culpa nihil optio quaerat consectetur beatae
//               mollitia ullam?
//             </p>
//           </div>
//           <div className="flex-1 min-w-[280px] max-w-[331px] p-4 bg-[#F8F3F3] shadow-lg border-r-4 border-b-4 border-black rounded-xl z-10 border-l-2 border-t-2">
//             <img src={Card_5} alt="Logo 5" className="h-12 mb-4" />
//             <h3 className="text-xl font-bold mb-2">Analytics and Reporting</h3>
//             <p className="text-gray-600" style={{ overflowWrap: "break-word" }}>
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
//               quo impedit numquam culpa nihil optio quaerat consectetur beatae
//               mollitia ullam?
//             </p>
//           </div>
//           <div className="flex-1 sm:min-w-[280px] sm:max-w-[451px] max-w-[320px] p-4 bg-[#F8F3F3] shadow-lg sm:border-r-2 border-r-4 sm:border-b-2 border-b-4 border-l-2 border-t-2 border-black rounded-xl z-10">
//             <img src={Card_6} alt="Logo 6" className="h-12 mb-4" />
//             <h3 className="text-xl font-bold mb-2">Social Media Management</h3>
//             <p className="text-gray-600" style={{ overflowWrap: "break-word" }}>
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
//               quo impedit numquam culpa nihil optio quaerat consectetur beatae
//               mollitia ullam?
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Rotate Vector Image on Mobile */}
//       <style>
//         {`
//           @media (max-width: 768px) {
//             img[alt="Vector Background"] {
//               transform: translate(-50%, -50%) rotate(90deg);
//             }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default CardSection;

import React from "react";
import Card_1 from "/src/assets/Card-1 Logo.png";
import Card_2 from "/src/assets/Card-2 Logo.png";
import Card_3 from "/src/assets/Card-3 Logo.png";
import Card_4 from "/src/assets/Card-4 Logo.png";
import Card_5 from "/src/assets/Card-5 Logo.png";
import Card_6 from "/src/assets/Card-6 Logo.png";
import vectorYellow from "/src/assets/Vector Yellow.png";

const CardSection = () => {
  return (
    <div className="relative h-[1800px] sm:h-auto py-96 md:py-24">
      {/* Vector Image Behind Cards */}
      <div className="flex justify-center items-center w-full h-full sm:h-auto">
        <img
          src={vectorYellow}
          alt="Vector Background"
          className="max-w-[845px] rotate-90 sm:rotate-0"
        />
      </div>
      {/* <img
        src={vectorYellow}
        alt="Vector Background"
        className="absolute inset-0 mx-auto w-1/2 h-auto z-0"
        style={{
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      /> */}

      {/* Cards Container */}
      <div className="absolute top-0 w-full sm:h-auto mx-auto px-6 md:px-36 z-10">
        {/* First Row */}
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <div className="flex-1 sm:min-w-[280px] sm:max-w-[451px] p-4 bg-[#F8F3F3] shadow-lg border-r-4 border-b-4 border-black rounded-xl z-10 min-w-[200px] max-w-[320px] border-l-2 border-t-2">
            <img src={Card_1} alt="Logo 1" className="h-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">Social Media Strategy</h3>
            <p className="text-gray-600" style={{ overflowWrap: "break-word" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
              quo impedit numquam culpa nihil optio quaerat consectetur beatae
              mollitia ullam?
            </p>
          </div>
          <div className="flex-1 min-w-[280px] max-w-[318px] p-4 bg-[#F8F3F3] shadow-lg border-r-4 border-b-4 border-black rounded-xl z-10 border-l-2 border-t-2">
            <img src={Card_2} alt="Logo 2" className="h-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">Content Creation</h3>
            <p className="text-gray-600" style={{ overflowWrap: "break-word" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
              quo impedit numquam culpa nihil optio quaerat consectetur beatae
              mollitia ullam?
            </p>
          </div>
          <div className="flex-1 min-w-[280px] max-w-[331px] p-4 bg-[#F8F3F3] shadow-lg border-r-4 border-b-4 border-black rounded-xl z-10 border-l-2 border-t-2">
            <img src={Card_3} alt="Logo 3" className="h-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">Brand Management</h3>
            <p className="text-gray-600" style={{ overflowWrap: "break-word" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
              quo impedit numquam culpa nihil optio quaerat consectetur beatae
              mollitia ullam?
            </p>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-wrap justify-center gap-8 mt-3">
          <div className="flex-1 min-w-[280px] max-w-[318px] p-4 bg-[#F8F3F3] shadow-lg border-r-4 border-b-4 border-black rounded-xl z-10 border-l-2 border-t-2">
            <img src={Card_4} alt="Logo 4" className="h-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">Influencer Marketing</h3>
            <p className="text-gray-600" style={{ overflowWrap: "break-word" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
              quo impedit numquam culpa nihil optio quaerat consectetur beatae
              mollitia ullam?
            </p>
          </div>
          <div className="flex-1 min-w-[280px] max-w-[331px] p-4 bg-[#F8F3F3] shadow-lg border-r-4 border-b-4 border-black rounded-xl z-10 border-l-2 border-t-2">
            <img src={Card_5} alt="Logo 5" className="h-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">Analytics and Reporting</h3>
            <p className="text-gray-600" style={{ overflowWrap: "break-word" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
              quo impedit numquam culpa nihil optio quaerat consectetur beatae
              mollitia ullam?
            </p>
          </div>
          <div className="flex-1 sm:min-w-[280px] sm:max-w-[451px] max-w-[320px] p-4 bg-[#F8F3F3] shadow-lg sm:border-r-2 border-r-4 sm:border-b-2 border-b-4 border-l-2 border-t-2 border-black rounded-xl z-10">
            <img src={Card_6} alt="Logo 6" className="h-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">Social Media Management</h3>
            <p className="text-gray-600" style={{ overflowWrap: "break-word" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
              quo impedit numquam culpa nihil optio quaerat consectetur beatae
              mollitia ullam?
            </p>
          </div>
        </div>
      </div>

      {/* Rotate Vector Image on Mobile */}
      {/* <style>
        {`
          @media (max-width: 768px) {
            img[alt="Vector Background"] {
              transform: translate(-50%, -300%) rotate(90deg);
            }
              .example{
              
              }
          }
        `}
      </style> */}
    </div>
  );
};

export default CardSection;
