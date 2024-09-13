import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ContactPage from "./pages/ContactPage";
import Career from "./pages/Career";
import ContactContainer from "./components/ContactContainer";
import Works from "./pages/Works";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";
import LocationMap from "./components/LocationMap";
import WorksNew from "./pages/WorksNew";
import WorksNewImage from "/src/assets/Works.png";
import CareerNewImage from "/src/assets/Career.png";
import ServicesNewImage from "/src/assets/Service Page.png";
import ContactImage from "/src/assets/Contact US.png";
import ClientImage from "/src/assets/Group 41.png";
import ServicesNew from "./pages/ServicesNew";

// Layout component
const Layout = ({
  children,
  title1,
  title2,
  title3,
  description,
  isServiceOrContactPage,
  customImage,
  customImage2,
  customImage3,
  customImage4,
  customImage5,
}) => (
  <>
    <Header
      title1={title1}
      title2={title2}
      title3={title3}
      customImage={customImage}
      customImage2={customImage2}
      customImage3={customImage3}
      customImage4={customImage4}
      customImage5={customImage5}
      description={description}
    />
    {children}
    <Footer isServiceOrContactPage={isServiceOrContactPage} />
  </>
);

const RoutesExample = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [location]);

  // Check if the route is Services or Contact
  const isServiceOrContactPage =
    location.pathname === "/Services";

  return (
    <>
      <ScrollToTop />
      {loading && <Loader />}
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/Services"
          element={
            <Layout
              title1="Services we are"
              title2="offering"
              title3="right now"
              description="From building social media strategies to Influencer Marketing, We offer a wide range of services that solve every problem!"
              isServiceOrContactPage={isServiceOrContactPage}
              customImage3={ServicesNewImage}
            >
              {/* <Services /> */}
              <ServicesNew />
            </Layout>
          }
        />

        <Route
          path="/Contact"
          element={
            <Layout
              title1="Let's connect &"
              title2="start"
              title3="something new!"
              description="Get in touch with us today! Our team is ready to answer your questions and provide personalized assistance. Contact us through the form below!"
              isServiceOrContactPage={isServiceOrContactPage}
              customImage4={ContactImage}
            >
              {/* <ContactPage /> */}
              <ContactContainer contactDesc="We value your input and are committed to providing excellent customer service. Reach out to us!" />
            </Layout>
          }
        />

        <Route
          path="/Career"
          element={
            <Layout
              title1="Explore Career"
              title2="opportunities"
              title3="with us"
              description="Looking for a rewarding career? Join our dynamic and Innovative team at Teetar. Social, where your career can thrive. Explore our latest job opportunities and learn how to apply today!"
              customImage2={CareerNewImage}
            >
              <Career />
              <ContactContainer contactDesc="We value your input and are committed to providing excellent customer service. Reach out to us!" />
            </Layout>
          }
        />

        <Route
          // path="/Works"
          path="/Clients"
          element={
            <Layout
              title1="Our"
              title2="Clients"
              title3=""
              description="Welcome to our Clients page, where we celebrate the trust and collaboration that drive our success. Through our services, We are proud to support our clients in achieving their goals with dedication and excellence."
              customImage5={ClientImage}
            >
              <Works />
              <ContactContainer contactDesc="We value your input and are committed to providing excellent customer service. Reach out to us!" />
            </Layout>
          }
        />

        <Route
          // path="/Clients"
          path="/Works"
          element={
            <Layout
              title1="What"
              title2="we've done"
              title3="so far"
              description="Our work speaks for itself. Explore our portfolio to see the quality and creativity we bring to every project. Discover how we can help you achieve your goals!"
              customImage={WorksNewImage}
            >
              <WorksNew />
              <ContactContainer contactDesc="We value your input and are committed to providing excellent customer service. Reach out to us!" />
            </Layout>
          }
        />
      </Routes>
    </>
  );
};

export default RoutesExample;
