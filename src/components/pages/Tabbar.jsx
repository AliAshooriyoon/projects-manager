import "./Tabbar.css";
const Tabbar = ({ projects, changeStat }) => {
  console.log(projects);
  return (
    <>
      <div className="tabbar pl-1">
        <h1 className="tabbar_title text-center mt-20 text-3xl max-w-[30rem] mx-auto">
          Bewirtschafte einfach deine Projekte mit einem Klick!
        </h1>
        <p className="projects_title text-2xl mt-16 ml-16">Ihre Projekte</p>
        <button
          type="button"
          className="tabbar_new cursor-pointer bg-[#666] h-12 mt-10 ml-16 p-2 rounded-2xl flex justify-center items-center gap-2"
        >
          <img src="icons8-plus.svg" alt="" className="w-7 h-7" />
          neues Projekt erstellen
        </button>
        <div className="projectsManager w-96 ml-16 mt-10 rounded-2xl text-xl outline-0 flex flex-col gap-10">
          {projects.map((item) => {
            return (
              <div
                key={item.id}
                onClick={() => changeStat(item.id)}
                className="projectsmanager__item bg-black border-2 flex items-center justify-center cursor-pointer rounded-2xl h-12 border-[#808080]"
              >
                <p className="projectsmanager__item__text">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Tabbar;
