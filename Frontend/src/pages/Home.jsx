import React from "react";
import Header from "./Header";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Projects from "../Components/Projects";
import Engineers from "../Components/Engineers";
import Footer from "./Footer";
import Contact from "../Components/Contact";
import RecentProjects from "../Components/RecentProjects";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <RecentProjects />
      <Engineers />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
