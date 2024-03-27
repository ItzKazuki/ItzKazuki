import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  bullyingPicture,
  jenisPerundungan,
  korbanMengalami,
  pelajarTerdampak,
  pelakuTemanDekat,
  kumpulanBeritaBullying,
} from "../../assets/img";
import {
  faArrowsDownToPeople,
  faFaceSmile,
  faInfoCircle,
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
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import { FootNote, ImgCenter } from "../../components";

function PenangananBullying() {
  return (
    <>
            <h1 className="text-4xl font-bold text-center pt-8 pb-4">
          Penanganan Bullying
        </h1>
        <p className="text-center pb-3">
          beberapa cara penanganan bullying antara lain:
        </p>
        <div className="grid grid-cols-2 gap-2 pl-3 ">
          <ButtonMini className={"bg-green-600"}>
            <h2 className="card-title">
              <FontAwesomeIcon icon={faPhoneAlt} />
            </h2>
            <p className="">Hubungi orang terdekat kalian</p>
          </ButtonMini>
          <ButtonMini className={"bg-green-400 text-black"}>
            <h2 className="card-title">
              <FontAwesomeIcon icon={faPeopleRoof} />
            </h2>
            <p className="">Cari tempat yang aman dan jauh dari pelaku</p>
          </ButtonMini>
          <ButtonMini className={"bg-green-400 text-black"}>
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
          <ButtonMini className={"bg-green-600"}>
            <h2 className="card-title">
              <FontAwesomeIcon icon={faPersonPraying} />
            </h2>
            <p className="">Beribadah dan mendekatkan diri kepada tuhan</p>
          </ButtonMini>
          <ButtonMini className={"bg-green-400 text-black"}>
            <h2 className="card-title">
              <FontAwesomeIcon icon={faUserShield} />
            </h2>
            <p className="">Hindari media sosial beberapa hari</p>
          </ButtonMini>
        </div>
    </>
  );
}

function PenyebabBullying() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center py-8">
        Penyebab Perundungan
      </h1>
      <div className="grid grid-cols-2 gap-2">
        <ButtonMini className={"bg-red-500"}>
          <h2 className="card-title">
            <FontAwesomeIcon icon={faPersonHarassing} />
          </h2>
          <p className="">Mengalami kdrt (broken home)</p>
        </ButtonMini>
        <ButtonMini className={"bg-yellow-400 text-black"}>
          <h2 className="card-title">
            <FontAwesomeIcon icon={faUserGraduate} />
          </h2>
          <p className="">Iri terhadap prestasi seseorang</p>
        </ButtonMini>
        <ButtonMini className={"bg-yellow-400 text-black"}>
          <h2 className="card-title">
            <FontAwesomeIcon icon={faPersonPraying} />
          </h2>
          <p className="">Kurangnya hubungan dengan tuhan</p>
        </ButtonMini>
        <ButtonMini className={"bg-red-500"}>
          <h2 className="card-title">
            <FontAwesomeIcon icon={faPersonRunning} />
          </h2>
          <p className="">Membully untuk tempat pelarian</p>
        </ButtonMini>
      </div>
    </>
  );
}

function DampakBullying() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center py-8">
        Dampak Perundungan
      </h1>
      <div className="grid grid-cols-2 gap-2 pl-3">
        <ButtonMini className={"bg-red-500"}>
          <h2 className="card-title">
            <FontAwesomeIcon icon={faArrowsDownToPeople} />
          </h2>
          <p className="">Depresi, Bipolar, dan ganggunan kejiawaan lainnnya</p>
        </ButtonMini>
        <ButtonMini className={"bg-yellow-400 text-black"}>
          <h2 className="card-title">
            <FontAwesomeIcon icon={faPersonCircleExclamation} />
          </h2>
          <p className="">Sulit berinteraksi dengan orang baru</p>
        </ButtonMini>
        <ButtonMini className={"bg-yellow-400 text-black"}>
          <h2 className="card-title">
            <FontAwesomeIcon icon={faUserInjured} />
          </h2>
          <p className="">Mengalami lebam dan luka fisik lainnya</p>
        </ButtonMini>
        <ButtonMini className={"bg-red-500"}>
          <h2 className="card-title">
            <FontAwesomeIcon icon={faSkull} />
          </h2>
          <p className="">Bunuh diri akibat tekanan dari pembully</p>
        </ButtonMini>
      </div>
    </>
  );
}

export default function Bullying() {
  const whatIsBullying =
    "Bullying atau perundungan merupakan tindakan mengganggu, mengusik, atau menyakiti orang lain secara fisik atau psikis. Tindakan ini bisa dalam bentuk bentuk kekerasan verbal, sosial, atau fisik yang dilakukan secara berulang kali dan dari waktu ke waktu. Secara etimologi, asal usul kata bullying berarti penggertak, yaitu seseorang yang suka mengganggu yang lemah.";
  const aboutCyberBullying = `Cyber Bullying adalah tindakan Bullying yang menyerang lewat dunia maya (sosial media), 
  Penyerangan nya meliputi: fisik korban, keseharian korban, dan hal yang mengaitkan 
  dengan kebahagiaan korban. Dampak dari cyber bullying beragam, ada yang bisa tahan, 
  ada yang kepikiran terus menerus, ada juga yang gak kuat sampai berakhir bunuh diri.
  `;
  return (
    <div className="mb-20">
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
          {whatIsBullying}
          <FootNote
            to={
              "https://www.halodoc.com/kesehatan/bullying#h-apa-itu-bullying"
            }>
            halodoc.com
          </FootNote>
        </p>
        <p className="mt-3 px-4 text-justify md:px-6">
          {aboutCyberBullying}
          <FootNote
            to={
              "https://1drv.ms/w/c/aa05d543ce9593ef/ET0CX1w2wj9PoncZGW8rsxEB-qgPjN3BLJ97H4oU5-UbDA?e=VOlgF7"
            }>
            Cyber Bullying: Ibnu
          </FootNote>
        </p>
      </div>
      <div id="dampak-korban-bullying">
        <DampakBullying />
      </div>
      <div id="penyebab-pelaku-bullying">
        <PenyebabBullying />
      </div>
      <div id="jenis-dan-target-bullying">
        <h1 className="text-4xl font-bold text-center py-8">
          Jenis - jenis Perundungan
        </h1>
        <ImgCenter 
          imgSrc={jenisPerundungan} 
          imgAlt="Jenis Perundungan di Indonesia"
          />
      </div>
      <div id="kumpulan-berita-bullying">
        <h1 className="text-4xl font-bold text-center py-8">
          Perundungan di Indonesia
        </h1>
        <ImgCenter
          imgSrc={kumpulanBeritaBullying}
          imgAlt="Kumpulan berita mengenai perundungan/ bullying"
        />
      </div>
      <div id="penanganan-bullying">
        <PenangananBullying />
      </div>
    </div>
  );
}

function ButtonMini({ children, className }) {
  return (
    <div className={`card w-38 text-white ${className}`}>
      <div className="card-body items-center text-center">{children}</div>
    </div>
  );
}
