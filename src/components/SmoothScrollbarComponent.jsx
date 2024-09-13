// SmoothScrollbarComponent.jsx
import React, { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";

const SmoothScrollbarComponent = ({ children }) => {
  const scrollbarRef = useRef(null);

  useEffect(() => {
    scrollbarRef.current = Scrollbar.init(document.body, {
      damping: 0.01, // This controls the smoothness. Lower value -> more smooth (0.1-1)
    });

    return () => {
      if (scrollbarRef.current) {
        scrollbarRef.current.destroy();
      }
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScrollbarComponent;
