import React from "react";
import BlogsContainer from "../components/BlogsContainer";
import HeroBlog from "../components/HeroBlog";

export default function Blog() {
  return (
    <div>
      <HeroBlog
        primaryTitle="Let me share my story with you"
        secondaryTitle="Read about my awesome life"
      />
      <BlogsContainer />
    </div>
  );
}
