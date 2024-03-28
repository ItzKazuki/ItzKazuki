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
  const navHover = 'hover:bg-gray-100';
  const activeNav = 'active bg-gray-200 ' + navHover;
  return (
    <div className="btm-nav rounded-t-xl bg-gray-200">
      <Link to={"/"} className={currentPath == "" ? activeNav : navHover}>
          <FontAwesomeIcon icon={faHomeAlt} />
      </Link>
      <Link to={"/projects"} className={currentPath == "projects" ? activeNav : navHover}>
          <FontAwesomeIcon icon={faProjectDiagram} />
      </Link>
      <Link to={"/about"} className={currentPath == "about" ? activeNav : navHover}>
          <FontAwesomeIcon icon={faInfoCircle} />
      </Link>
    </div>
  );
}
