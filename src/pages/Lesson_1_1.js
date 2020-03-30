import React, { Component } from "react";
import { Link } from "react-router-dom";
import LessonHeader from './LessonHeaderTemplate'
import AlphabetComponent from '../components/Alphabet'


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
          <LessonHeader topic="Известные брэнды" lesson="Урок 1.1"/>
          <AlphabetComponent/>
      </div>
    );
  }
}
