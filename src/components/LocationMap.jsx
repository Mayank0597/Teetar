import React from "react";

const LocationMap = () => {
  return (
    <div className="flex justify-center items-center sm:ml-32 mb-10 sm:mb-80 mt-10">
      <iframe
        title="Sampark Infoways Location"
        src="https://maps.app.goo.gl/MyAMSg9NhScJzqnV9"
        width="90%"
        height="450"
        className="border-2 border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default LocationMap;
