import React, { Component } from "react";
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
      <div className="container is-fluid">
          <LessonHeader topic="Известные брэнды" lesson="Урок 1.1"/>
          <AlphabetComponent/>
      </div>
    );
  }
}
