import { Link } from "react-router-dom";
import { ImgCenter } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMailBulk } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="mb-20">
      <div id="greatings">
        <div id="text-content" className="mb-3">
          <h1 className="font-bold text-2xl">About Me</h1>
          <p className="text-justify px-3 pt-2 text-lg">
            Hallo, nama saya Chaeza Ibnu Akbar dan nickname ku adalah Kazuki.
            Aku adalah siswa di{" "}
            <Link
              to={"https://smkn71jakarta.sch.id/"}
              className="text-blue-700 font-semibold">
              SMKN 71 Jakarta
            </Link>{" "}
            jurusan{" "}
            <Link
              to={
                "https://campus.quipper.com/majors/id-rekayasa-perangkat-lunak"
              }>
              <span className="text-red-700 font-semibold">Rekayasa Pera</span>
              <span className="text-black font-semibold">ngkat Lunak</span>.
            </Link>
          </p>
          <p className="text-justify px-3 pt-2 text-lg">
            Saat ini aku masih memperdalam beberapa bahasa yang tren saat ini,
            seperti{" "}
            <Link to={"https://id.wikipedia.org/wiki/JavaScript"} className="text-yellow-500 font-semibold">Javascript</Link>,{" "}
            <Link to={"https://id.wikipedia.org/wiki/PHP"} className="text-purple-600 font-semibold">Php</Link>, dan juga{" "}
            <Link to={"https://id.wikipedia.org/wiki/C++"} className="text-blue-500 font-semibold">C++</Link>, aku
            mempelajari beberapa framework / library seperti laravel,
            express.js, react.js, tailwind, daisyui.
          </p>
        </div>
        <ImgCenter
          imgSrc={
            "https://github-readme-streak-stats.herokuapp.com/?user=ItzKazuki"
          }
        />
        <ImgCenter
          className="w-screen mt-3"
          imgSrc={
            "https://github-readme-stats.vercel.app/api/top-langs/?username=ItzKazuki&layout=donut&hide=css,html,blade"
          }
        />
        <ImgCenter
          className={"w-screen mt-3"}
          imgSrc={
            "https://github-contribution-stats.vercel.app/api/?username=ItzKazuki"
          }
        />
      </div>
      <div id="my-music" className="mt-5">
        <h1 className="text-2xl font-bold mb-4">My Music</h1>
        <ImgCenter
          className={"w-screen mb-4"}
          imgSrc={
            "https://spotify-github-profile.vercel.app/api/view.svg?uid=31lrsntg6vcn73kuvwibeaatyzoa&cover_image=true&theme=default&show_offline=false&background_color=121212&interchange=false"
          }
        />
        <ImgCenter
          imgSrc={
            "https://spotify-recently-played-readme.vercel.app/api?user=31lrsntg6vcn73kuvwibeaatyzoa"
          }
        />
      </div>
      <div id="contact-me" className="mt-5">
        <h1 className="text-2xl font-bold">Contact Me</h1>
        <div className="grid grid-cols-3 gap-2 mt-3">
          <CardMIni className={"bg-black"} to={"https://github.com/ItzKazuki"}>
            <h1 className="card-title">
              <FontAwesomeIcon className="text-3xl" icon={faGithub} />
            </h1>
          </CardMIni>
          <CardMIni className={"bg-[#5865F2]"}>
            <h1 className="card-title">
              <FontAwesomeIcon className="text-3xl" icon={faDiscord} />
            </h1>
          </CardMIni>
          <CardMIni className={"bg-blue-500"} to={"https://www.linkedin.com/in/chaeza-ibnu-akbar/"}>
            <h1 className="card-title">
              <FontAwesomeIcon className="text-3xl" icon={faLinkedin} />
            </h1>
          </CardMIni>
        </div>
      </div>
    </div>
  );
}

function CardMIni({ children, className, to }) {
  return (
    <Link to={to}>
      <div className={`card text-white ${className}`}>
        <div className="card-body items-center text-center">{children}</div>
      </div>
    </Link>
  );
}
