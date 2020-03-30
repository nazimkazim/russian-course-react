import React from "react";
import { useContext } from "react";
import { LessonContext } from "../context";
import Title from "./Title";

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const FlowersFilter = ({ lessons }) => {
  const context = useContext(LessonContext);
  const { handleChange, type, price, minPrice, maxPrice, available } = context;
  console.log(context);

  let types = getUnique(lessons, "type");

  types = ["все", ...types];

  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="найти цветы" />
      <nav className="level">
        <div className="level-item has-text-centered">
          <div className="control">
            <p className="heading">
              <label htmlFor="type">тип цветов</label>
            </p>
            <select
              name="type"
              id="type"
              value={type}
              className="input"
              onChange={handleChange}
            >
              {types}
            </select>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div className="control">
            <p className="heading">
              <label htmlFor="price">цена ${price}</label>
            </p>
            <input
              type="range"
              min={minPrice}
              max={maxPrice}
              name="price"
              value={price}
              onChange={handleChange}
              className="input"
            />
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div className="control">
            <p className="heading">
              <label htmlFor="available">в наличии</label>
            </p>
            <input
              type="checkbox"
              name="available"
              value={available}
              onChange={handleChange}
            />
          </div>
        </div>
      </nav>
    </section>
  );
};

export default FlowersFilter;
