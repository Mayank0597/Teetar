// LocomotiveScrollComponent.jsx
import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const LocomotiveScrollComponent = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      inertia: 0.8,
    });

    // Update scroll when content changes (optional if dynamic content)
    const updateScroll = () => {
      scroll.update();
    };

    window.addEventListener("resize", updateScroll);

    return () => {
      scroll.destroy();
      window.removeEventListener("resize", updateScroll);
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
};

export default LocomotiveScrollComponent;
