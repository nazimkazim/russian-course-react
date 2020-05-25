import React from "react";
import "./App.css";
import Home from "../src/pages/Home";
//import SingleFlower from "./pages/LessonHeaderTemplate";
import Error from "../src/pages/Error";
import NavBar from "../src/components/NavBar";
import Footer from "../src/components/Footer";
import Lesson_1_1 from './pages/Lesson_1_1'
import Lesson_1_2 from './pages/Lesson_1_2'
import Lesson_1_3 from './pages/Lesson_1_3'
import Credits from './pages/Credits'
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/credits" component={Credits} />
        <Route exact path="/lessons/Известные брэнды" component={Lesson_1_1} />
        <Route exact path="/lessons/Много общего" component={Lesson_1_2} />
        <Route exact path="/lessons/Меня зовут Кхан" component={Lesson_1_3} />
        <Route exact component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
