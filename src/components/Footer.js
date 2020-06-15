import React, { Component } from "react";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import whatsapp from "../images/whatsapp.svg";

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
              
            </div>
            <div className="column is-4">
              
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
