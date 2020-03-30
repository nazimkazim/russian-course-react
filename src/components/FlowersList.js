import React from "react";
import Flower from "./Flower";

const FlowersList = ({ flowers }) => {
  if (flowers.length === 0) {
    return (
      <article class="message">
        <div class="message-body">
          к сожалению цветов с такими параметрами нет
        </div>
      </article>
    );
  }

  return (
    <section className="featured-flowers">
      <div className="columns featured-flowers-center is-multiline">
        {flowers.map(item => {
          return <Flower key={item.id} flower={item} />;
        })}
      </div>
    </section>
  );
};

export default FlowersList;
