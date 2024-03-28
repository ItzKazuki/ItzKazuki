import { Link } from "react-router-dom";
import { ImgCenter } from "../components";
import {
  daisyuiIcon,
  fontAwsomeIcon,
  reactIcon,
  reactRouterIcon,
  tailwindIcon,
  viteIcon,
} from "../assets/icons";

export default function InfoProject() {
  return (
    <div>
      <div id="project-info">
        <h1 className="text-2xl font-bold">
          About Project <span className="badge badge-accent">v3.3.5</span>
        </h1>
        <div className="flex justify-center flex-wrap">
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
                      <td>
                        <Link
                          className="text-blue-400"
                          to={"https://github.com/ItzKazuki"}>
                          ItzKazuki
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>About Project: </td>
                      <td>
                        <Link
                          className="text-blue-400"
                          to={"https://github.com/ItzKazuki/ItzKazuki"}>
                          Repository/ItzKazuki
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>Contact: </td>
                      <td>
                        <Link
                          className="text-blue-400"
                          to={"mailto:contact@kazukikun.space"}>
                          support@kazukikun.space
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <ImgCenter
                imgSrc={
                  "https://github-readme-stats.vercel.app/api/pin/?username=ItzKazuki&repo=ItzKazuki"
                }
              />
            </div>
          </div>
          <div className="mt-4">
            <h1 className="text-xl font-bold text-center">
              This Project Using
            </h1>
            <div className="grid grid-cols-3 mt-3 gap-4">
              <div className="tooltip" data-tip="v18.2.64">
                <img src={reactIcon} alt="" width={"75px"} />
              </div>
              <div className="tooltip" data-tip="v6.22.3">
                <img src={reactRouterIcon} alt="" width={"75px"} />
              </div>
              <div className="tooltip" data-tip="v0.2.0">
                <img
                  src={fontAwsomeIcon}
                  alt=""
                  className="ml-2"
                  width={"55px"}
                />
              </div>
              <div className="tooltip" data-tip="v5.2.6">
                <img src={viteIcon} alt="" className="mt-4" width={"55px"} />
              </div>
              <div className="tooltip" data-tip="v3.4.1">
                <img src={tailwindIcon} alt="" className="my-5" width={"80px"} />
              </div>
              <div className="tooltip" data-tip="v4.8.0">
                <img src={daisyuiIcon} alt="" width={"75px"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
