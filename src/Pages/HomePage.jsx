import Footer from "../Components/Footer";
import Hello from "../Components/Hello";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import OurService from "../Components/OurService";
import Team from "../Components/Team";
import WhatWeDo from "../Components/Whatwedo";
import SectionThree from "../Components/sectionThree";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Hello />
      <SectionThree />
      <WhatWeDo />
      <OurService />
      <Team />
      <Footer />
    </div>
  );
};

export default HomePage;
