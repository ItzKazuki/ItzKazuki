import { Link } from "react-router-dom";
import { ImgCenter } from "../components";

export default function InfoProject() {
  return (
    <div>
      <div id="project-info">
        <h1 className="text-2xl font-bold">
          About Project <span className="badge badge-accent">v3.3.5</span>
        </h1>
        <div className="flex justify-center">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="overflow-x-auto">
                <table className="table">
                  <tbody className="text-md">
                    <tr>
                      <td>Nama Project:</td>
                      <td>Protofolio Web page</td>
                    </tr>
                    <tr>
                      <td>Owner: </td>
                      <td><Link className="text-blue-400" to={"https://github.com/ItzKazuki"}>ItzKazuki</Link></td>
                    </tr>
                    <tr>
                      <td>About Project: </td>
                      <td><Link className="text-blue-400" to={"https://github.com/ItzKazuki/ItzKazuki"}>Repository/ItzKazuki</Link></td>
                    </tr>
                    <tr>
                      <td>Contact: </td>
                      <td><Link className="text-blue-400" to={"mailto:contact@kazukikun.space"}>support@kazukikun.space</Link></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <ImgCenter imgSrc={"https://github-readme-stats.vercel.app/api/pin/?username=ItzKazuki&repo=ItzKazuki"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
