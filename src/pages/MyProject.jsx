import { project } from "../assets/data";
import { Card, Each, ProjectCard } from "../components";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function MyProject() {
  const handleIcon = (item) => {
    if (item.type_project != "Web") {
      if (item.type_project == "Github") return faGithub;
    }
  };
  
  return (
    <div id="list-projects">
      <h1 className="text-2xl font-bold">My Projects</h1>
      <div className="flex justify-center flex-wrap">
        <Each
          of={project}
          render={(item, index) => (
            <ProjectCard
              title={item.name}
              desc={item.description}
              icon={handleIcon(item)}
              isDeprecated={item.deprecated}
              to={item.url}
            />
          )}
        />
      </div>
    </div>
  );
}
