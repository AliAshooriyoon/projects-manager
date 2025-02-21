import Home from "./components/pages/Home";
import "./App.css";
import Tabbar from "./components/pages/Tabbar";
import { useState } from "react";
const App = () => {
  const [projects, setProjects] = useState([
    {
      title: "Willkommen",
      descriptiopn: "Willkommen bei unserer Webseite!",
      tasks: [
        "wie kann man diese App verwenden?",
        "wie kann man diese App verwenden2?",
      ],
      id: 1,
    },
    {
      title: "Willkommen2",
      descriptiopn: "Willkommen bei unserer Webseite!",
      tasks: ["wie kann man diese App verwenden?"],
      id: 2,
    },
  ]);
  const [showProject, setShowProject] = useState(0);
  const changeStatusProject = (stat) => {
    setShowProject(stat);
  };
  return (
    <>
      <div className="app">
        <Tabbar projects={projects} changeStat={changeStatusProject} />
        <Home projects={projects} statusProject={showProject} />
      </div>
    </>
  );
};
export default App;
