import React, { Component } from "react";
import Client from "./Contentful";

const BlogContext = React.createContext();

class BlogProvider extends Component {
  state = {
    blogs: []
  };

  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "englishCourse"
      });

      let blogs = this.formatData(response.items);

      this.setState({
        blogs
      });
      console.log(blogs);
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
      let mainPicture =
        item.fields.mainPicture && item.fields.mainPicture.fields.file.url;
      let extraPictures =
        item.fields.extraPictures &&
        item.fields.extraPictures.map(image => image.fields.file.url);
      let blog = { ...item.fields, extraPictures, mainPicture, id };
      return blog;
    });
    return tempItems;
  }

  getBlog = slub => {
    let tempBlogs = [...this.state.blogs];
    const blog = tempBlogs.find(blog => blog.slub === slub);
    return blog;
  };

  render() {
    return (
      <BlogContext.Provider
        value={{
          ...this.state,
          getBlog: this.getBlog
        }}
      >
        {this.props.children}
      </BlogContext.Provider>
    );
  }
}

const BlogConsumer = BlogContext.Consumer;

export function withBlogsConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <BlogConsumer>
        {value => <Component {...props} context={value} />}
      </BlogConsumer>
    );
  };
}

export { BlogProvider, BlogConsumer, BlogContext };
