import React from "react";
import Vector1 from "/src/assets/Card-1 Logo.png"; // Import your company logos
import Vector2 from "/src/assets/Card-2 Logo.png";
import Vector3 from "/src/assets/Card-3 Logo.png";
import Vector4 from "/src/assets/Card-4 Logo.png";
import Vector5 from "/src/assets/Card-5 Logo.png";
import Vector6 from "/src/assets/Card-6 Logo.png";

const cards = [
  {
    id: 1,
    title: "Social Media Strategy",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, autem cupiditate! Expedita nemo eligendi at fugiat.",
    side: "right",
    logo: Vector1,
    anchor: "social-media-strategy"
  },
  {
    id: 2,
    title: "Content creation",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, autem cupiditate! Expedita nemo eligendi at fugiat.",
    side: "left",
    logo: Vector2,
    anchor: "content-creation"
  },
  {
    id: 3,
    title: "Brand Management",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, autem cupiditate! Expedita nemo eligendi at fugiat.",
    side: "right",
    logo: Vector3,
    anchor: "brand-management"
  },
  {
    id: 4,
    title: "Social media management",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, autem cupiditate! Expedita nemo eligendi at fugiat.",
    side: "left",
    logo: Vector4,
    anchor: "social-media-management"
  },
  {
    id: 5,
    title: "Influencer Marketing",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, autem cupiditate! Expedita nemo eligendi at fugiat.",
    side: "right",
    logo: Vector5,
    anchor: "influencer-marketing"
  },
  {
    id: 6,
    title: "Analytics & Reporting",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, autem cupiditate! Expedita nemo eligendi at fugiat.",
    side: "left",
    logo: Vector6,
    anchor: "analytics-reporting"
  },
];

export default function Services() {
  return (
    <div className="flex flex-col items-center space-y-8 px-4 sm:px-8 sm:mb-40 sm:mt-40 mb-10">
      {cards.map((card, index) => (
        <div
          key={card.id}
          id={card.anchor}
          className={`flex flex-col ${
            index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
          } items-center w-full lg:w-[80%]`}
        >
         
          {/* Card Content */}
          <div className="bg-[#F8F3F3] shadow-lg rounded-lg p-6 mb-4 w-full sm:w-[554px] sm:h-[332px] sm:border-r-4 sm:border-l-2 sm:border-t-2 sm:border-b-4 sm:hover:border-2 border-black">
            {/* <h2 className="text-2xl font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-700">{card.description}</p> */}
          </div>
          {/* Logo, Heading, and Text */}
          <div
            className={`flex items-center justify-center sm:w-[48%] p-6 ${
              card.side === "right" ? "sm:ml-14" : "sm:mr-20"
            }`}
          >
            <div className="text-left">
              <img
                src={card.logo}
                alt="Company Logo"
                className="w-16 h-16 mb-2 sm:w-[60px] sm:h-[60px]"
              />
              <h3 className="text-xl font-medium mb-2 sm:w-[327px] sm:h-[42px]">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
