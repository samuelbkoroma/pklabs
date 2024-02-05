import Footers from "../Components/Footers";
import Hello from "../Components/Hello";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import OurService from "../Components/OurService";
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
      <Footers />
    </div>
  );
};

export default HomePage;
