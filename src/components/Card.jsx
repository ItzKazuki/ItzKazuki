import { Link } from "react-router-dom";

export default function Card({ title, desc, to }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl my-6">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{desc}</p>
        <div className="card-actions justify-end">
          <Link to={to} className="btn bg-black text-white">Open Project</Link>
        </div>
      </div>
    </div>
  );
}
