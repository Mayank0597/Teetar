import React from "react";
import Group from "/src/assets/Group.png";
// import Logo1 from "/src/assets/Works_img1.png";
import Logo1 from "/src/assets/Jassu.png"
import Logo2 from "/src/assets/Works_img2.png";
import Logo3 from "/src/assets/Works_img3.png";
import Logo4 from "/src/assets/Works_img4.png";
import Logo5 from "/src/assets/Works_img5.png";
import Logo6 from "/src/assets/Works_img6.png";
import Logo7 from "/src/assets/Logo.png"
import Logo8 from "/src/assets/Frame 1.png"
import Logo9 from "/src/assets/image 8.png"

const Works = () => {
  return (
    <div className="relative flex justify-center items-center py-16">
      {/* Background Image */}
      <img
        src={Group}
        alt="Background"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inset-0 w-full h-full object-cover z-0 lg:w-[957.52px] lg:h-[452.11px] hidden lg:block"
      />

      {/* Cards Container */}
      <div className="relative grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 sm:gap-y-14 gap-y-8 sm:gap-x-20 z-10 mt-5">
        {/* Card 1 */}
        <div className="bg-[#F8F3F3] p-4 rounded-lg flex items-center justify-center lg:w-[324px] lg:h-[275px] w-[300px] h-[300px] border-l-2 border-t-2 border-b-4 border-r-4 hover:border-2 border-black">
          <img
            src={Logo1}
            alt="Logo 1"
            className="h-12 lg:w-[237.33px] lg:h-[54.94px]"
          />
        </div>

        {/* Card 2 */}
        <div className="bg-[#F8F3F3] p-4 rounded-lg flex items-center justify-center lg:w-[324px] lg:h-[275px] w-[300px] h-[300px] border-l-2 border-t-2 border-b-4 border-r-4 hover:border-2 border-black">
          <img
            src={Logo2}
            alt="Logo 2"
            className="h-16 lg:w-[221px] lg:h-[68px]"
          />
        </div>

        {/* Card 3 */}
        <div className="bg-[#F8F3F3] p-4 rounded-lg flex items-center justify-center lg:w-[324px] lg:h-[275px] w-[300px] h-[300px] border-l-2 border-t-2 border-b-4 border-r-4 hover:border-2 border-black">
          <img
            src={Logo3}
            alt="Logo 3"
            className="h-16 lg:w-[178px] lg:h-[86px]"
          />
        </div>

        {/* Card 4 */}
        <div className="bg-[#F8F3F3] p-4 rounded-lg flex items-center justify-center lg:w-[324px] lg:h-[275px] w-[300px] h-[300px] border-l-2 border-t-2 border-b-4 border-r-4 hover:border-2 border-black">
          <img
            src={Logo4}
            alt="Logo 4"
            className="h-16 lg:w-[151px] lg:h-[115px]"
          />
        </div>

        {/* Card 5 */}
        <div className="bg-[#F8F3F3] p-4 rounded-lg flex items-center justify-center lg:w-[324px] lg:h-[275px] w-[300px] h-[300px] border-l-2 border-t-2 border-b-4 border-r-4 hover:border-2 border-black">
          <img
            src={Logo5}
            alt="Logo 5"
            className="h-12 lg:w-[173px] lg:h-[40px]"
          />
        </div>

        {/* Card 6 */}
        <div className="bg-[#F8F3F3] p-4 rounded-lg flex items-center justify-center lg:w-[324px] lg:h-[275px] w-[300px] h-[300px] border-l-2 border-t-2 border-b-4 border-r-4 hover:border-2 border-black">
          <img
            src={Logo6}
            alt="Logo 6"
            className="h-20 lg:w-[137px] lg:h-[76px]"
          />
        </div>

        {/* New Card 7 */}
        <div className="bg-[#F8F3F3] p-4 rounded-lg flex items-center justify-center lg:w-[324px] lg:h-[275px] w-[300px] h-[300px] border-l-2 border-t-2 border-b-4 border-r-4 hover:border-2 border-black">
          <img
            src={Logo7}
            alt="Logo 7"
            className="h-16 lg:w-[200px] lg:h-[50px]"
          />
        </div>

        {/* New Card 8 */}
        <div className="bg-[#F8F3F3] p-4 rounded-lg flex items-center justify-center lg:w-[324px] lg:h-[275px] w-[300px] h-[300px] border-l-2 border-t-2 border-b-4 border-r-4 hover:border-2 border-black">
          <img
            src={Logo8}
            alt="Logo 8"
            className="h-16 lg:w-[180px] lg:h-[60px]"
          />
        </div>

        {/* New Card 9 */}
        <div className="bg-[#F8F3F3] p-4 rounded-lg flex items-center justify-center lg:w-[324px] lg:h-[275px] w-[300px] h-[300px] border-l-2 border-t-2 border-b-4 border-r-4 hover:border-2 border-black">
          <img
            src={Logo9}
            alt="Logo 9"
            className="h-16 lg:w-[150px] lg:h-[70px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Works;
