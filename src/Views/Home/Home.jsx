import React from "react";
import Navbar from "../../components/Headers/Navbar";
import Hero from "../../components/Hero/Hero";
import Mint from "../../components/Mint/Mint";
import Story from "../../components/Story/Story";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Mint />
      <Story />
    </>
  );
}

export default Home;
