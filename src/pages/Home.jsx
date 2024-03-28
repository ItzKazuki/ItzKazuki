import { Link } from "react-router-dom";
import { ImgCenter } from "../components";

export default function Home() {
  return (
    <div>
      <div id="greatings" className="mb-20">
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
            <Link className="text-yellow-500 font-semibold">Javascript</Link>,{" "}
            <Link className="text-purple-600 font-semibold">Php</Link>, dan juga{" "}
            <Link className="text-blue-500 font-semibold">C++</Link>, aku
            mempelajari beberapa framework / library seperti react.js, tailwind,
            daisyui.
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
    </div>
  );
}
