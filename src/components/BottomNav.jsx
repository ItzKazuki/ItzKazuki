import {
  faHomeAlt,
  faInfoCircle,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";

export default function BottomNav() {
  const { pathname } = useLocation();
  let currentPath = pathname.split("/")[1];
  return (
    <div className="btm-nav rounded-t-xl ">
      <Link to={"/"} className={currentPath == "" ? "active" : ""}>
          <FontAwesomeIcon icon={faHomeAlt} />
      </Link>
      <Link to={"/projects"} className={currentPath == "projects" ? "active" : ""}>
          <FontAwesomeIcon icon={faProjectDiagram} />
      </Link>
      <Link to={"/about"} className={currentPath == "about" ? "active" : ""}>
          <FontAwesomeIcon icon={faInfoCircle} />
      </Link>
    </div>
  );
}
