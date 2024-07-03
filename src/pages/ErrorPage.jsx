import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="font-seris m-4">
      <h1 className="font-bold text-4xl">Not Found</h1>
      <p className="text-lg">This page not availabe in server.</p>
      <p>
        return to{" "}
        <Link to="/" className="text-blue-500">
          Home
        </Link>
      </p>
      <p className="text-sm mt-5 ml-2">
        this server deploy at{" "}
        <Link to={"https://pages.github.com"} className="italic text-blue-500">
          github.com
        </Link>
        .
      </p>
    </div>
  );
}
