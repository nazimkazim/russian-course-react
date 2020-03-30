import React from "react";
import Blog from "./Blog";

const BlogsList = ({ blogs }) => {
  return (
    <section className="featured-flowers">
      <div className="columns is-multiline is-centered is-mobile">
        {blogs.map(item => {
          return <Blog key={item.id} blog={item} />;
        })}
      </div>
    </section>
  );
};

export default BlogsList;
