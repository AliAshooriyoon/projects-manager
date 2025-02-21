import "./Home.css";
const Home = ({ projects, statusProject }) => {
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
            {projects.map((item) => {
              if (item.id == statusProject) {
                return (
                  <div className="projectBox flex flex-col gap-6">
                    <p className="title">{item.title}</p>
                    <button className="absolute right-8 text-xl text-center border-2 w-32 outline-0 border-white cursor-pointer p-1 bg-red-500 rounded-2xl ">
                      Löschen
                    </button>

                    <p className="description text-xl max-w-[60rem]">
                      {item.description}
                    </p>
                    <p className="tasksBox text-xl">
                      <h3 className="text-4xl text-cyan-700">Aufgaben : </h3>
                      <div className="tasksManager  text-white w-[44rem] flex flex-col gap-2 pl-7">
                        {item.tasks.map((i) => (
                          <div
                            className="my-5 bg-zinc-700 p-3 flex justify-between"
                            key={i.id}
                          >
                            {i.task}{" "}
                            <button
                              className="text-black cursor-pointer"
                              type="button"
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
