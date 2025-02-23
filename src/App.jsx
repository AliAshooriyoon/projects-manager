import Home from "./components/pages/Home";
import "./App.css";
import Tabbar from "./components/pages/Tabbar";
import { useState } from "react";
const App = () => {
  const [projects, setProjects] = useState([
    {
      title: "Willkommen",
      description:
        "Die ist ein Beispiel für einen Blindtext, der auf deutsch geschrieben ist. Es gibt noch viele weitere Arten des Hauses, wobei die ersten Menschen heute nicht sind. Zudem sind Beispiele jetzt noch frei, denn man sollte bedenken, der Text macht wenig Sinn. Mit brausender Geschwindigkeit war der Titel des neuen Boots in naher Ferne, weshalb sich der Briefträger einen roten Mantel zur Reinigung brachte. Ein weiterer Punkt wäre es, die verständliche Blindtexte heute noch anzurufen denn der Tisch steht im Gang. Zur damaligen Zeit war es eher !",
      tasks: [
        { task: "wie kann man diese App verwenden?", id: 1 },
        { task: "Welche Probleme hat diese App?", id: 1 },
      ],
      id: 1,
    },
    {
      title: "Willkommen2",
      description:
        "Die ist ein Beispiel für einen Blindtext, der auf deutsch geschrieben ist. Es gibt noch viele weitere Arten des Hauses, wobei die ersten Menschen heute nicht sind. Zudem sind Beispiele jetzt noch frei, denn man sollte bedenken, der Text macht wenig Sinn. Mit brausender Geschwindigkeit war der Titel des neuen Boots in naher Ferne, weshalb sich der Briefträger einen roten Mantel zur Reinigung brachte. Ein weiterer Punkt wäre es, die verständliche Blindtexte heute noch anzurufen denn der Tisch steht im Gang. Zur damaligen Zeit war es eher üblich, die gebrauchten Handtücher mittels Fensterreiniger auszulüften, um auch die Wanduhr als Beispiel",
      tasks: [
        { task: "ist ein Beispiel für einen Blindtext", id: 1 },
        { task: "der auf deutsch geschrieben ist", id: 1 },
      ],
      id: 2,
    },
  ]);
  const [showProject, setShowProject] = useState(0);
  const addProject = (title,description)=>{
    projects.push({title:title,description:description})
  }
  const changeStatusProject = (stat) => {
    setShowProject(stat);
  };
  return (
    <>
      <div className="app ">
        <Tabbar projects={projects} changeStat={changeStatusProject} addProject={addProject} />
        <Home projects={projects} statusProject={showProject} />
      </div>
    </>
  );
};
export default App;
