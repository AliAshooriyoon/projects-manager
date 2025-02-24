import Home from "./components/pages/Home";
import "./App.css";
import Tabbar from "./components/pages/Tabbar";
import { useState } from "react";
const App = () => {
  const [counterTask, setCounterTask] = useState(3);
  //eslint-disable-next-line
  const [projects, setProjects] = useState([
    {
      title: "Willkommen",
      description:
        "Die ist ein Beispiel für einen Blindtext, der auf deutsch geschrieben ist. Es gibt noch viele weitere Arten des Hauses, wobei die ersten Menschen heute nicht sind. Zudem sind Beispiele jetzt noch frei, denn man sollte bedenken, der Text macht wenig Sinn. Mit brausender Geschwindigkeit war der Titel des neuen Boots in naher Ferne, weshalb sich der Briefträger einen roten Mantel zur Reinigung brachte. Ein weiterer Punkt wäre es, die verständliche Blindtexte heute noch anzurufen denn der Tisch steht im Gang. Zur damaligen Zeit war es eher !",
      tasks: [
        { task: "wie kann man diese App verwenden?", id: 1 },
        { task: "Welche Probleme hat diese App?", id: 2 },
      ],
      id: 1,
    },
    {
      title: "Hallo Man!",
      description:
        "Die ist ein Beispiel für einen Blindtext, der auf deutsch geschrieben ist. Es gibt noch viele weitere Arten des Hauses, wobei die ersten Menschen heute nicht sind. Zudem sind Beispiele jetzt noch frei, denn man sollte bedenken, der Text macht wenig Sinn. Mit brausender Geschwindigkeit war der Titel des neuen Boots in naher Ferne, weshalb sich der Briefträger einen roten Mantel zur Reinigung brachte. Ein weiterer Punkt wäre es, die verständliche Blindtexte heute noch anzurufen denn der Tisch steht im Gang. Zur damaligen Zeit war es eher üblich, die gebrauchten Handtücher mittels Fensterreiniger auszulüften, um auch die Wanduhr als Beispiel",
      tasks: [
        { task: "ist ein Beispiel für einen Blindtext", id: 1 },
        { task: "der auf deutsch geschrieben ist", id: 2 },
      ],
      id: 2,
    },
  ]);
  const [showProject, setShowProject] = useState(0);
  const addProject = (title, description, id) => {
    projects.push({
      title: title,
      description: description,
      id: id,
      tasks: [],
    });
    console.log("Adding Project");
    console.log(projects);
  };
  const changeStatusProject = (stat) => {
    setShowProject(stat);
  };
  const removeProject = (projectID) => {
    console.log("Jaaaaaa");
    const finder = projects.find((item) => item.id == projectID);
    // console.log(projects.indexOf(finder));
    const indexProject = projects.indexOf(finder);
    projects.splice(indexProject, 1);
    // console.log(finder.id);
    changeStatusProject(0);
  };
  const addTask = (titleTask, idTask) => {
    const finder = projects.find((item) => item.id == idTask);
    console.log(finder);
    const indexOfTask = projects.indexOf(finder);
    console.log(indexOfTask);

    console.log(
      projects[indexOfTask].tasks[projects[indexOfTask].tasks.length - 1],
    );
    setCounterTask(
      projects[indexOfTask].tasks[projects[indexOfTask].tasks.length - 1],
    );
    projects[indexOfTask].tasks.push({ task: titleTask, id: counterTask });
    setCounterTask(counterTask + 1);
  };
  return (
    <>
      <div className="app">
        <Tabbar
          projects={projects}
          changeStat={changeStatusProject}
          addProject={addProject}
        />
        <Home
          removeProject={removeProject}
          projects={projects}
          statusProject={showProject}
          addTask={addTask}
        />
      </div>
    </>
  );
};
export default App;
