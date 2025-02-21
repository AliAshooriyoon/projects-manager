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
          <div className="text-center text-6xl pt-[19rem]">
            {projects.map((item) => {
              if (item.id == statusProject) {
                return (
                  <div className="projectBox">
                    <p className="title">{item.title}</p>
                    <p className="description">{item.descriptiopn}</p>
                    <p className="title">
                      {item.tasks.map((i) => (
                        <p>{i}</p>
                      ))}
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
