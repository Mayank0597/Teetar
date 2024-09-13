import React, { useState } from "react";

const ContactPage = () => {
  const [focusedInput, setFocusedInput] = useState(null);

  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };
  return (
    <div className="sm:mb-80 mb-10 sm:mt-0 mt-16">
      <div className="flex flex-col sm:flex-row gap-4 sm:mb-4 mb-4 sm:ml-32 sm:mt-20 ">
        {/* Name */}
        <div className="flex sm:justify-start justify-center">
          <input
            type="text"
            placeholder="Name"
            onFocus={() => handleFocus("name")}
            onBlur={handleBlur}
            className=" border-black rounded-lg p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-[90vw] lg:w-[324px] md:w-[200px] sm:w-[100px] h-[50px] sm:h-[60px] md:h-[69px] focus:outline-none focus:border-black sm:border-l-2 sm:border-t-2"
          />
        </div>

        {/* Email */}
        <div className="flex sm:justify-start justify-center">
          <input
            type="email"
            placeholder="Email"
            className="border-black rounded-lg p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-[90vw] lg:w-[324px] md:w-[200px] sm:w-[100px] h-[50px] sm:h-[60px] md:h-[69px] focus:outline-none focus:border-black sm:border-l-2 sm:border-t-2"
          />
        </div>
      </div>
      {/* Message */}
      <div className="flex sm:justify-start justify-center">
        <textarea
          placeholder="Message"
          className="border-black rounded-lg p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-[90vw] h-[150px] lg:w-[672px] md:w-[430px] sm:w-[230px] sm:h-[350px] md:h-[150px] lg:h-[170px] mb-4 focus:outline-none focus:border-black sm:ml-32 sm:border-l-2 sm:border-t-2"
        ></textarea>
      </div>
      {/* Submit Button */}
      <div className="relative sm:ml-32 flex sm:justify-start justify-center">
        <button
          type="submit"
          className="bg-[#FCCB30] text-black py-2 px-4 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-transform duration-200"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactPage;
