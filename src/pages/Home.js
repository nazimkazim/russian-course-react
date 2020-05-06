import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedFlowers from "../components/FeaturedLessons";

const Home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="Master Russian Language"
          subtitle="Make your dream come true"
        >
          <Link to="/flowers" className="btn-primary">
            <button className="button is-link">All Lessons</button>
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedFlowers />
    </>
  );
};

export default Home;
