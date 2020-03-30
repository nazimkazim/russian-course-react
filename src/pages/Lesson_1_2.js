import React, { Component } from "react";
import { Link } from "react-router-dom";
import LessonHeader from './LessonHeaderTemplate'

export default class SingleFlower extends Component {
  constructor (props) {
    super(props);
    this.state = {
   
    };
  }


  componentDidMount() { }
  render() {
    
    return (
      <div>
          <LessonHeader topic="Тема урока" lesson="урок 1.2"/>
      </div>
    );
  }
}
