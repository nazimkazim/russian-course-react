import React from "react";
import "./styles/App.css";
import Home from "../src/pages/Home";
import DiagramsPage from '../src/pages/Diagrams';
import BeVerbPage from '../src/pages/BeVerbDiagramPage'
import BeVerbPracticeQuestionsPage from '../src/pages/BeVerbPracticeQuetions'
//import SingleFlower from "./pages/LessonHeaderTemplate";
import Error from "../src/pages/Error";
import NavBar from "../src/components/NavBar";
import Footer from "../src/components/Footer";
import Lesson_1_1 from './pages/Lesson_1_1';
import Lesson_1_2 from './pages/Lesson_1_2';
import Lesson_1_3 from './pages/Lesson_1_3';
import Lesson_2_1 from './pages/Lesson_2_1';
import Credits from './pages/Credits';
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/credits" component={ Credits } />
        <Route exact path="/diagrams" component={ DiagramsPage } />
        <Route exact path="/diagrams/be-verb" component={ BeVerbPage } />
        <Route exact path="/diagrams/be-verb-practice-questions" component={ BeVerbPracticeQuestionsPage } />
        <Route exact path="/lessons/Известные брэнды" component={ Lesson_1_1 } />
        <Route exact path="/lessons/Много общего" component={ Lesson_1_2 } />
        <Route exact path="/lessons/Меня зовут Кхан" component={ Lesson_1_3 } />
        <Route exact path="/lessons/Моя жизнь" component={ Lesson_2_1 } />
        <Route exact component={ Error } />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
