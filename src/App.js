import React from "react";
import "./App.css";
import Home from "../src/pages/Home";
import Flowers from "../src/pages/Flowers";
//import SingleFlower from "./pages/LessonHeaderTemplate";
import SingleBlog from "../src/pages/SingleBlog";
import LessonHeaderTemplate from '../src/pages/LessonHeaderTemplate'
import Error from "../src/pages/Error";
import NavBar from "../src/components/NavBar";
import Footer from "../src/components/Footer";
import Blogs from "./pages/Blogs";
import Lesson_1_1 from './pages/Lesson_1_1'
import Lesson_1_2 from './pages/Lesson_1_2'
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/flowers" component={Flowers} />
        <Route exact path="/lessons/Известные брэнды" component={Lesson_1_1} />
        <Route exact path="/lessons/Тема урока" component={Lesson_1_2} />
        <Route exact path="/blogs" component={Blogs} />
        <Route exact path="/blogs/:slug" component={SingleBlog} />
        <Route exact component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
