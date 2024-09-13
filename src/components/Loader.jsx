// import React from "react";

// const Loader = () => {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
//       <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
//     </div>
//   );
// };

// export default Loader;

import React from "react";
import gifURL from "/src/assets/teetar loader_2.gif";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      {/* Add the logo image in place of the spinner */}
      <img src={gifURL} alt="Company Logo" className="w-20 h-20" />
    </div>
  );
};
export default Loader;
