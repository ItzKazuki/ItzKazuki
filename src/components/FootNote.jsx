import { Link } from "react-router-dom";

export default function FootNote({children, to}) {
    return (
        <sup>
        <Link
          to={to}>
          [<span className="text-blue-400 italic">{children}</span>]
        </Link>
      </sup>
    );
}