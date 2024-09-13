// import "./App.css";
import NewSection from "../components/NewSection";
import Marquee from "../components/Marquee";
import ClientsSection from "../components/ClientSection";
import CardCollection from "../components/CardCollection";
import ClientTestimonials from "../components/ClientTestimonials";
import ContactContainer from "../components/ContactContainer";
import Footer from "../components/Footer";
import StrategyToSuccessNew from "../components/StrategyToSuccessSectionNew";
import CardSectionNew from "../components/CardSectionNew";
import Header from "../components/Header";

function HomePage() {
  return (
    <>
      <Header
        title1="Helping brands to Create long lasting"
        title2="online presence"
        description="Strategically building your brand's online reputation for sustainable growth."
      />
      <NewSection />
      {/* <CardSection /> */}
      <CardSectionNew />
      <Marquee />
      {/* <StrategyToSuccessSection /> */}
      <StrategyToSuccessNew />
      <ClientsSection />

      <CardCollection />
      <ClientTestimonials />
      <ContactContainer contactDesc="Ready to take your brand to the next level? Let’s Connect!" />
      <Footer />
    </>
  );
}

export default HomePage;
