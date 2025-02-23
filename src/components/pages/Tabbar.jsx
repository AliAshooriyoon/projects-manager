import { useState } from "react";
import "./Tabbar.css";
import { IoMdCloseCircle } from "react-icons/io";

const Tabbar = ({ projects, changeStat, addProject }) => {
  console.log(projects);
  const [showAddProjectBox, setShowAddProjectBox] = useState(false);
  return (
    <>
      {showAddProjectBox && (
        <div className="showAddProjectBox pb-12 absolute w-[60%] h-[80%] top-[10%]  mx-auto  left-0 right-0 bg-[#222831] rounded-2xl border-4 border-white">
          <div className="showAddProjectContent flex flex-col justify-around  h-[90%] pb-12 ">
            <IoMdCloseCircle onClick={() => setShowAddProjectBox(false)} />
            <p className="title text-4xl text-center mt-8 text-[#BED7DC] ">
              Wähle bitte Angaben deines Projekts
            </p>
            <div className="text-center mt-8 flex w-full justify-center flex-col gap-2 m-5 text-2xl text-[#00879e]">
              Wie heißt dein Projekt?
              <input
                type="text"
                className=" w-[60%] mx-auto h-14 rounded-2xl bg-[#BED7DC] border-4 outline-0 indent-5 text-2xl border-[#00879e] text-black"
              />
            </div>
            <div className=" text-center mt-8 flex w-full justify-center flex-col gap-2 m-5 text-2xl text-[#00879e]">
              Wie sind Informationen deines Projekts ?
              <textarea
                type="text"
                className=" w-[60%] mx-auto h-14 mx-h-64 rounded-2xl bg-[#BED7DC] border-4 outline-0 indent-5 text-2xl border-[#00879e] text-black"
              />
            </div>
            <div className="absolute  bottom-8 buttonsBox flex align-bottom flex-row w-full justify-center gap-10">
              <button
                type="button"
                className="border-[#dad4b5] border-4 tabbar_button bg-[#508D4E] hover:border-[#508D4E] hover:bg-[#BED7DC] "
              >
                Projekt erstellen
              </button>
              <button
                type="button"
                className="tabbar_button bg-[#800000]"
                onClick={() => setShowAddProjectBox(false)}
              >
                Gib auf
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="tabbar pl-1">
        <h1 className="tabbar_title text-center mt-20 text-3xl max-w-[30rem] mx-auto">
          Bewirtschafte einfach deine Projekte mit einem Klick!
        </h1>
        <p className="projects_title text-2xl mt-16 ml-16">Ihre Projekte</p>
        <button
          type="button"
          onClick={() => setShowAddProjectBox(true)}
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
