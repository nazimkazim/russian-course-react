import React, { Component } from "react";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import whatsapp from "../images/whatsapp.svg";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  state = {
    items: [
      { cities: ["Алматы"] },
      {
        media: [
          { name: "facebook", img: facebook, link: "www.facebook.com/albina" },
          { name: "whatsapp", img: whatsapp, number: "8-777-348-65-18" },
          {
            name: "instagram",
            img: instagram,
            link: "www.instagram.com/albina"
          }
        ]
      },
      {
        services: [
          { name: "о компании", link: "/me" },
          { name: "услуги", link: "/services" }
        ]
      }
    ]
  };
  render() {
    //this.state.items[0].cities.forEach(item => console.log(item));
    return (
      <footer className="footer has-background-black-bis">
        <div className="content has-text-centered">
          <div className="columns">
            <div className="column is-4">
              <h3>Города</h3>
              <ul className="footer-city-list">
                {this.state.items[0].cities &&
                  this.state.items[0].cities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
              </ul>
            </div>
            <div className="column is-4">
              <h3>Контакты</h3>
              <div className="columns footer-sm-wrapper">
                {this.state.items[1].media &&
                  this.state.items[1].media.map((item, index) => (
                    <div className="column" key={index}>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="footer-sm-img"
                          src={item.img}
                          alt={item.name}
                        />
                      </a>
                    </div>
                  ))}
              </div>
            </div>
            <div className="column is-4">
              <h3>Услуги</h3>
              <ul className="footer-services-list">
                {this.state.items[2].services &&
                  this.state.items[2].services.map((item, index) => (
                    <li key={index}>
                      <Link to={item.link} style={{ color: "rgb(54,54,54)" }}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
