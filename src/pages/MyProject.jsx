import { project } from "../assets/data";
import Card from "../components/Card";
import { Each } from "../components/Each";

export default function MyProject() {
    console.log(project)
    return (
        <div id="list-projects">
            <h1 className="text-2xl font-bold">My Projects</h1>
            <div className="flex justify-center">
                <Each of={project} render={(item, index) => <Card title={item.name} desc={item.description} to={item.url} />} />
            </div>
        </div>
    );
}