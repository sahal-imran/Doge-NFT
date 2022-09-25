import React from "react";
import Navbar from "../../components/Headers/Navbar";
import Hero from "../../components/Hero/Hero";
import Mint from "../../components/Mint/Mint";
import Story from "../../components/Story/Story";
import Utility from "../../components/Utility/Utility";
import Team from "../../components/Team/Team";
import FAQ from "../../components/FAQ/FAQ";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Mint />
      <Story />
      <Utility />
      <Team />
      <FAQ />
      <Footer />
    </>
  );
}

export default Home;
