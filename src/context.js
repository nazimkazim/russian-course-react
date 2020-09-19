import React, { Component } from "react";
//import items from './data';
import Client from "./Contentful";

const LessonContext = React.createContext();

class LessonProvider extends Component {
  state = {
    lessons: [],
    sortedLessons: [],
    featuredLessons: [],
    loading: true,
    type: "all"
  };

  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "russianLessonTemplate"
      });

      let lessons = this.formatData(response.items);
      let featuredLessons = lessons.filter(lesson => lesson.featured === true);

      this.setState({
        lessons,
        featuredLessons,
        sortedLessons: lessons,
        loading: false
      });
      //console.log(lessons);
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let cover = item.fields.cover.fields.file.url
      let lesson = { ...item.fields, cover, id };
      return lesson;
    });
    return tempItems;
  }

  getLesson = slug => {
    let tempLessons = [...this.state.lessons];
    const lesson = tempLessons.find(lesson => lesson.topic === slug);
    return lesson;
  };

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    this.setState(
      {
        [name]: value
      },
      this.filterLessons
    );
  };

  filterLessons = () => {
    let { lessons, type, price, available } = this.state;

    let tempLessons = [...lessons];

    price = parseInt(price);

    if (type !== "все") {
      tempLessons = tempLessons.filter(lesson => lesson.type === type);
    }

    tempLessons = tempLessons.filter(lesson => lesson.price <= price);

    if (available) {
      tempLessons.filter(lesson => lesson.available === true);
    }

    this.setState({
      sortedLessons: tempLessons
    });
  };

  render() {
    return (
      <LessonContext.Provider
        value={{
          ...this.state,
          getLesson: this.getLesson,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </LessonContext.Provider>
    );
  }
}

const LessonConsumer = LessonContext.Consumer;

export function withLessonConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <LessonConsumer>
        {value => <Component {...props} context={value} />}
      </LessonConsumer>
    );
  };
}

export { LessonProvider, LessonConsumer, LessonContext };
