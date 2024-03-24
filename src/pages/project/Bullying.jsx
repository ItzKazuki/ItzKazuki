import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  bullyingPicture,
  jenisPerundungan,
  korbanMengalami,
  pelajarTerdampak,
  pelakuTemanDekat,
} from "../../assets/img";
import {
  faArrowsDownToPeople,
  faFaceSmile,
  faPeopleArrows,
  faPeopleRoof,
  faPersonCircleExclamation,
  faPersonHarassing,
  faPersonPraying,
  faPersonRunning,
  faPhoneAlt,
  faSkull,
  faUserGraduate,
  faUserInjured,
} from "@fortawesome/free-solid-svg-icons";

export default function Bullying() {
  return (
    <div>
      <div id="data-bullying">
        <img
          className="items-center"
          src={bullyingPicture}
          alt="Bullying Img"
        />
        {/* <h1 className="text-4xl font-bold text-center py-8">Data Bullying</h1> */}
        <div className="grid grid-cols-2 gap-4 lg:gap-2">
          <img className="col-span-1" src={pelajarTerdampak} alt="" />
          <div className="py-6">
            <img className="pb-6 col-span-1" src={korbanMengalami} alt="" />
            <img className="col-span-1" src={pelakuTemanDekat} alt="" />
          </div>
        </div>
      </div>
      <div id="what-is-bullying">
        <h1 className="text-4xl font-bold text-center py-4">
          Apa itu Bullying?
        </h1>
        <p className="px-4 text-justify md:px-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
          tenetur, consequatur, quam sequi officia blanditiis voluptatibus
          doloribus temporibus culpa voluptates voluptate porro totam, ad
          architecto inventore odit sit expedita illum.
        </p>
      </div>
      <div id="dampak-korban-bullying">
        <h1 className="text-4xl font-bold text-center py-8">
          Dampak Perundungan
        </h1>
        <div className="grid grid-cols-2 gap-2 pl-3">
          <ButtonMini className={"bg-red-600"}>
            <h2 className="card-title">
              <FontAwesomeIcon icon={faArrowsDownToPeople} />
            </h2>
            <p className="">
              Depresi, Bipolar, dan ganggunan kejiawaan lainnnya
            </p>
          </ButtonMini>
          <ButtonMini className={"bg-yellow-600"}>
            <h2 className="card-title">
              <FontAwesomeIcon icon={faPersonCircleExclamation} />
            </h2>
            <p className="">Sulit berinteraksi dengan orang baru</p>
          </ButtonMini>
          <ButtonMini className={"bg-yellow-600"}>
            <h2 className="card-title">
              <FontAwesomeIcon icon={faUserInjured} />
            </h2>
            <p className="">Mengalami lebam dan luka fisik lainnya</p>
          </ButtonMini>
          <ButtonMini className={"bg-red-600"}>
            <h2 className="card-title">
              <FontAwesomeIcon icon={faSkull} />
            </h2>
            <p className="">Bunuh diri akibat tekanan yang datang</p>
          </ButtonMini>
        </div>
      </div>
      <div id="penyebab-pelaku-bullying">
        <h1 className="text-4xl font-bold text-center py-8">
          Penyebab Perundungan
        </h1>
        <div className="grid grid-cols-2 gap-2 pl-3">
          <ButtonMini className={"bg-red-600"}>
            <h2 className="card-title">
              <FontAwesomeIcon icon={faPersonHarassing} />
            </h2>
            <p className="">Mengalami kdrt (broken home)</p>
          </ButtonMini>
          <ButtonMini className={"bg-yellow-600"}>
            <h2 className="card-title">
              <FontAwesomeIcon icon={faUserGraduate} />
            </h2>
            <p className="">Iri terhadap prestasi seseorang</p>
          </ButtonMini>
          <ButtonMini className={"bg-yellow-600"}>
            <h2 className="card-title">
              <FontAwesomeIcon icon={faPersonPraying} />
            </h2>
            <p className="">Kurangnya hubungan dengan tuhan</p>
          </ButtonMini>
          <ButtonMini className={"bg-red-600"}>
            <h2 className="card-title">
              <FontAwesomeIcon icon={faPersonRunning} />
            </h2>
            <p className="">Membully untuk tempat pelarian</p>
          </ButtonMini>
        </div>
      </div>
      <div id="jenis-dan-target-bullying">
        <h1 className="text-4xl font-bold text-center py-8">
          Jenis - jenis Perundungan
        </h1>
        <img src={jenisPerundungan} alt="" />
      </div>
      <div id="penanganan-bullying">
        <h1 className="text-4xl font-bold text-center pt-8 pb-4">
          Penanganan Bullying
        </h1>
        <p className="text-center pb-3">
          beberapa cara penanganan bullying antara lain:
        </p>
        <div className="grid grid-cols-2 gap-2 pl-3">
          <ButtonMini className={"bg-green-600"}>
            <h2 className="card-title">
              <FontAwesomeIcon icon={faPhoneAlt} />
            </h2>
            <p className="">Hubungi orang terdekat kalian</p>
          </ButtonMini>
          <ButtonMini className={"bg-yellow-600"}>
            <h2 className="card-title">
              <FontAwesomeIcon icon={faPeopleRoof} />
            </h2>
            <p className="">Cari tempat yang aman dan jauh dari pelaku</p>
          </ButtonMini>
          <ButtonMini className={"bg-yellow-600"}>
            <h2 className="card-title">
              <FontAwesomeIcon icon={faFaceSmile} />
            </h2>
            <p className="">Lupakan masalalu dan selalu bersyukur</p>
          </ButtonMini>
          <ButtonMini className={"bg-green-600"}>
            <h2 className="card-title">
              <FontAwesomeIcon icon={faPeopleArrows} />
            </h2>
            <p className="">Jaga jarak dari pelaku dan teman dekatnya</p>
          </ButtonMini>
        </div>
      </div>
    </div>
  );
}

function ButtonMini({ children, className }) {
  return (
    <div className={`card w-[135px] text-neutral-content ${className}`}>
      <div className="card-body items-center text-center">{children}</div>
    </div>
  );
}
