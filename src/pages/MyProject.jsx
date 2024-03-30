import { useState } from "react";
import { projects } from "../assets/data";
import { Each, ProjectCard } from "../components";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function MyProject() {
  const [typeProject, setTypeProject] = useState("Web");

  projects.sort((a, b) => {
    // Mengembalikan 1 jika a.deprecated true dan b.deprecated false/undefined
    // Mengembalikan -1 jika a.deprecated false/undefined dan b.deprecated true
    // Mengembalikan 0 jika nilai sama
    if (a.deprecated === true && (b.deprecated === false || b.deprecated === undefined)) {
      return 1;
    } else if ((a.deprecated === false || a.deprecated === undefined) && b.deprecated === true) {
      return -1;
    } else {
      return 0;
    }
  });

  const handleBadge = item => {
    if(item.private) {
      return <span className="badge badge-secondary badge-outline">private</span>
    }
    // check if item have deprecated
    if(item.deprecated) {
      return <span className="badge badge-outline">deprecated</span>
    }

    // check if item have spesific programing language like php, js, etc
  }

  const searchProject = (type) =>
    projects.filter((project) => project.type_project.includes(type));

  const Web = () => (
    <Each
      of={searchProject("Web")}
      render={(item, index) => (
        <ProjectCard
          title={item.name}
          desc={item.description}
          badge={handleBadge(item)}
          to={item.url}
        />
      )}
    />
  );

  const Github = () => (
    <Each
      of={searchProject("Github")}
      render={(item, index) => (
        <ProjectCard
          title={item.name}
          desc={item.description}
          icon={faGithub}
          badge={handleBadge(item)}
          to={item.github_repo}
        />
      )}
    />
  );

  const handleClick = (e) => setTypeProject(e.target.value);

  const NotFound = () => (
    <p className="text-xl font-semibold my-10">Not Found</p>
  );

  return (
    <div id="list-projects" className="mb-20">
      <h1 className="text-2xl font-bold">My Projects</h1>
      <div
        id="type-project"
        className="flex items-center font-medium text-lg mt-2">
        <button
          className={`mr-3 ${
            typeProject == "Web" ? "border-b-2 border-b-black" : ""
          }`}
          value={"Web"}
          onClick={handleClick}>
          Web
        </button>
        <button
          className={`${
            typeProject == "Github" ? "border-b-2 border-b-black" : ""
          }`}
          value={"Github"}
          onClick={handleClick}>
          Project
        </button>
      </div>
      <div className="flex justify-center flex-wrap">
        {typeProject == "Web" ? <Web /> : ""}
        {typeProject == "Github" ? <Github /> : ""}
        {typeProject != "Web" && typeProject != "Github" ? <NotFound /> : ""}
      </div>
    </div>
  );
}
