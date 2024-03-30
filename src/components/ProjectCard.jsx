import Card from "./Card";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProjectCard({ title, desc, to, icon, badge }) {
  return (
    <Card className={"w-96 bg-base-100 shadow-xl my-6"}>
      <h2 className="card-title">
        {title}{" "}
        {badge}
      </h2>
      <p>{desc}</p>
      <div className="card-actions justify-end">
        <Link to={to} className="btn bg-black text-white">
          {icon ? <FontAwesomeIcon icon={icon} /> : ""} Open Project
        </Link>
      </div>
    </Card>
  );
}
