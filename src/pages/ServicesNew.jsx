import React from "react";
import Logo1 from "/src/assets/Card-1 Logo.png";
import Logo2 from "/src/assets/Card-2 Logo.png";
import Logo3 from "/src/assets/Card-3 Logo.png";
import Logo4 from "/src/assets/Card-4 Logo.png";
import Logo5 from "/src/assets/Card-5 Logo.png";
import Logo6 from "/src/assets/Card-6 Logo.png";

const sections = [
  {
    logo: Logo1,
    heading: "Social Media Strategy",
    text: "By comprehensively analyzing your target audience, industry trends, and competitive landscape, we develop strategic plans that maximize your online presence and result in meaningful engagement.",
    anchor: "social-media-strategy"
  },
  {
    logo: Logo2,
    heading: "Content creation",
    text: "Our team of skilled content creators produces high-quality content that resonates deeply with your target audience. We leverage data-driven insights and creative storytelling to craft narratives that capture attention, and foster strong connections.",
    anchor: "content-creation"
  },
  {
    logo: Logo3,
    heading: "Brand Management",
    text: "Our expert Brand Management services create a strong and memorable online brand identity. By conducting in-depth brand analysis, developing compelling brand messaging, and implementing effective branding strategies, we elevate your online presence and establish your brand as a trusted authority.",
    anchor: "brand-management"
  },
  {
    logo: Logo4,
    heading: "Social media management",
    text: "We help to elevate your social media presence, ensuring maximum impact. By analyzing your current performance, identifying key metrics, and implementing data-driven optimizations, we help you attract a wider audience and increase engagement.",
    anchor: "social-media-management"
  },
  {
    logo: Logo5,
    heading: "Influencer Marketing",
    text: "Our Influencer Marketing services connect your brand with influential figures in your industry, amplifying your message and reaching a wider audience. By partnering with selected influencers who align with your brand values, we create authentic campaigns that generate brand awareness.",
    anchor: "influencer-marketing"
  },
  {
    logo: Logo6,
    heading: "Analytics & Reporting",
    text: "Our far-reaching performance tracking and analytics provide you with actionable insights to optimize your social media strategies. By monitoring and identifying trends, we equip you with the knowledge to make informed decisions and drive continuous improvement.",
    anchor: "analytics-reporting"
  },
];

const ServicesNew = () => {
  return (
    <div className="p-5 md:mx-40">
      {sections.map((section, index) => (
        <div key={index}>
          {/* Section Content */}
          <div className="flex flex-col md:flex-row items-center justify-between py-6">
            {/* Logo */}
            <div className="w-16 h-16 flex-shrink-0 mb-4 md:mb-0">
              <img src={section.logo} alt={`Logo ${index + 1}`} className="w-full h-full object-contain" />
            </div>
            {/* Heading */}
            <div className="text-center md:text-left flex-grow md:px-8 mb-4 md:mb-0">
              <h3 className="text-xl font-semibold">{section.heading}</h3>
            </div>
            {/* Text */}
            <div className="max-w-sm text-left">
              <p>{section.text}</p>
            </div>
          </div>
          {/* Horizontal Line */}
          {index < sections.length - 1 && <hr className="border-black my-4" />}
        </div>
      ))}
    </div>
  );
};

export default ServicesNew;
