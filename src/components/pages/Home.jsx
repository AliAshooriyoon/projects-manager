import { useEffect, useRef } from "react";
import "./Home.css";
const Home = ({
  //eslint-disable-next-line
  projects,
  //eslint-disable-next-line
  statusProject,
  //eslint-disable-next-line
  removeProject,
  //eslint-disable-next-line
  addTask,
  //eslint-disable-next-line
  removeTask,
  //eslint-disable-next-line
  taskStatus,
}) => {
  const taskInput = useRef();
  // const taskIndex = useRef();
  const verifyAddTask = () => {
    addTask(taskInput.current.value, statusProject);
    taskInput.current.value = "";
  };
  useEffect(() => console.log("Slm"), [taskStatus]);
  return (
    <>
      <div className="home">
        {!statusProject ? (
          <h2 className="welcome text-center text-6xl pt-[19rem]">
            Willkommen bei dieser Webseite
            <br />
            <span className="text-2xl">
              Diese Webseite ist eine App, um Projekte zu kontrollieren
              <br />
            </span>
          </h2>
        ) : (
          <div className="pl-3 text-left text-6xl pt-[1rem]">
            {/*eslint-disable-next-line*/}
            {projects.map((item) => {
              if (item.id === statusProject) {
                return (
                  <div key={item.id} className="projectBox flex flex-col gap-6">
                    <p className="title">{item.title}</p>
                    <button
                      onClick={() => removeProject(item.id)}
                      className="absolute right-8 text-xl text-center border-2 w-32 outline-0 border-white cursor-pointer p-1 bg-red-500 rounded-2xl "
                    >
                      Löschen
                    </button>

                    <p className="description text-xl max-w-[60rem]">
                      {item.description}
                    </p>
                    <p className="tasksBox text-xl">
                      <h3 className="text-4xl text-cyan-700">Aufgaben : </h3>
                      <div className="addTasksBox flex items-center gap-12">
                        <input
                          type="text"
                          name="task"
                          ref={taskInput}
                          className="bg-white outline-0 rounded-[7px] m-2 h-12 w-[25rem] border-blue-500 border-4 indent-2 text-2xl"
                        />
                        <button
                          type="button"
                          onClick={() => verifyAddTask()}
                          className="text-white cursor-pointer border-4 px-5 py-1.5 border-blue-500 rounded-2xl hover:bg-blue-500 hover:border-white"
                        >
                          erstellen
                        </button>
                      </div>
                      <div className="tasksManager  text-white w-[44rem] flex flex-col gap-2 pl-7">
                        {item.tasks.map((i) => (
                          <div
                            className="my-5 bg-zinc-700 p-3 flex justify-between"
                            key={i.id}
                            // ref={taskIndex}
                          >
                            {i.task}{" "}
                            <button
                              className="text-black cursor-pointer"
                              type="button"
                              onClick={() => removeTask(statusProject, i.id)}
                            >
                              Löschen
                            </button>{" "}
                          </div>
                        ))}
                      </div>
                    </p>
                  </div>
                );
              }
            })}
          </div>
        )}
      </div>
    </>
  );
};
export default Home;
