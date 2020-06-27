import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedLessons from "../components/FeaturedLessons";

const Home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="Master Russian Language"
          subtitle="Make your dream come true"
        >
        </Banner>
      </Hero>
      <Services />
      <FeaturedLessons />
    </>
  );
};

export default Home;
