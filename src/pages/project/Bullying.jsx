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
  faBookOpenReader,
  faFaceSmile,
  faPeopleArrows,
  faPeopleRoof,
  faPersonCircleExclamation,
  faPersonHarassing,
  faPersonPraying,
  faPersonRunning,
  faPhoneAlt,
  faSkull,
  faStar,
  faUserGraduate,
  faUserInjured,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import { Card, Each, FootNote, ImgCenter } from "../../components";
import { perundungan } from "../../assets/data";
import { CreateModal } from "../../components/Modals";

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
        <Card isCenter={true} className={"bg-green-600"}>
          <h2 className="card-title">
            <FontAwesomeIcon icon={faPhoneAlt} />
          </h2>
          <p>Hubungi orang terdekat kalian</p>
        </Card>
        <Card
          isCenter={true}
          className={"bg-green-400"}
          onClick={() =>
            document.getElementById("cari-tempat-aman").showModal()
          }>
          <h2 className="card-title">
            <FontAwesomeIcon icon={faPeopleRoof} />
          </h2>
          <p>Cari tempat yang aman dan jauh dari pelaku</p>
        </Card>
        <Card isCenter={true} className={"bg-green-400"}>
          <h2 className="card-title">
            <FontAwesomeIcon icon={faFaceSmile} />
          </h2>
          <p>Lupakan masalalu dan selalu bersyukur</p>
        </Card>
        <Card isCenter={true} className={"bg-green-600"}>
          <h2 className="card-title">
            <FontAwesomeIcon icon={faPeopleArrows} />
          </h2>
          <p>Jaga jarak dari pelaku dan teman dekatnya</p>
        </Card>
        <Card isCenter={true} className={"bg-green-600"}>
          <h2 className="card-title">
            <FontAwesomeIcon icon={faPersonPraying} />
          </h2>
          <p>Beribadah dan mendekatkan diri kepada tuhan</p>
        </Card>
        <Card isCenter={true} className={"bg-green-400"}>
          <h2 className="card-title">
            <FontAwesomeIcon icon={faUserShield} />
          </h2>
          <p>Hindari media sosial beberapa hari</p>
        </Card>
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
        <Card
          isCenter={true}
          className={"bg-red-500"}
          onClick={() => document.getElementById("korban-kdrt").showModal()}>
          <h2 className="card-title">
            <FontAwesomeIcon icon={faPersonHarassing} />
          </h2>
          <p>Mengalami kdrt (broken home)</p>
        </Card>
        <Card
          isCenter={true}
          className={"bg-yellow-400"}
          onClick={() =>
            document.getElementById("iri-dan-kurang-percaya-diri").showModal()
          }>
          <h2 className="card-title">
            <FontAwesomeIcon icon={faUserGraduate} />
          </h2>
          <p>Iri terhadap prestasi seseorang</p>
        </Card>
        <Card isCenter={true} className={"bg-yellow-400"}>
          <h2 className="card-title">
            <FontAwesomeIcon icon={faPersonPraying} />
          </h2>
          <p>Kurangnya hubungan dengan tuhan</p>
        </Card>
        <Card isCenter={true} className={"bg-red-500"}>
          <h2 className="card-title">
            <FontAwesomeIcon icon={faPersonRunning} />
          </h2>
          <p>Membully untuk tempat pelarian</p>
        </Card>
        <Card
          isCenter={true}
          className={"bg-red-500"}
          onClick={() => document.getElementById("ingin-populer").showModal()}>
          <h2 className="card-title">
            <FontAwesomeIcon icon={faStar} />
          </h2>
          <p>Ingin memiliki kekuasaan dan memegang kendali</p>
        </Card>
        <Card
          isCenter={true}
          className={"bg-yellow-400"}
          onClick={() => document.getElementById("korban-bully").showModal()}>
          <h2 className="card-title">
            <FontAwesomeIcon icon={faPersonHarassing} />
          </h2>
          <p>Pernah menjadi menjadi korban bully</p>
        </Card>
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
        <div
          className="indicator w-auto"
          onClick={() =>
            document.getElementById("gangguan-kejiwaan").showModal()
          }>
          <span className="indicator-item badge badge-primary mr-9 mt-1">
            38% kasus
          </span>
          <Card isCenter={true} className={"bg-red-500"}>
            <h2 className="card-title">
              <FontAwesomeIcon icon={faArrowsDownToPeople} />
            </h2>
            <p>Depresi, Bipolar, dan ganggunan kejiawaan lainnnya</p>
          </Card>
        </div>
        <Card isCenter={true} className={"bg-yellow-400"}>
          <h2 className="card-title">
            <FontAwesomeIcon icon={faPersonCircleExclamation} />
          </h2>
          <p>Sulit berinteraksi dengan orang baru</p>
        </Card>
        <Card isCenter={true} className={"bg-yellow-400"}>
          <h2 className="card-title">
            <FontAwesomeIcon icon={faUserInjured} />
          </h2>
          <p>Mengalami lebam dan luka fisik lainnya</p>
        </Card>
        <div
          className="indicator w-auto"
          onClick={() => document.getElementById("bunuh-diri").showModal()}>
          <span className="indicator-item badge badge-primary mr-9 mt-1">
            40% kasus
          </span>
          <Card isCenter={true} className={"bg-red-500"}>
            <h2 className="card-title">
              <FontAwesomeIcon icon={faSkull} />
            </h2>
            <p>Bunuh diri akibat tekanan dari pembully</p>
          </Card>
        </div>
        <Card
          isCenter={true}
          className={"bg-red-500 col-span-2"}
          onClick={() =>
            document.getElementById("dampak-pendidikan").showModal()
          }>
          <h2 className="card-title">
            <FontAwesomeIcon icon={faBookOpenReader} />
          </h2>
          <p>Mempengaruhi kualitas belajar siswa</p>
        </Card>
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
      <div role="alert" className="alert alert-error mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-8 w-8"
          fill="none"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <span>
          Indonesia berada di peringkat ke 5 dengan kasus bullying terbanyak di
          tahun 2019.
          <FootNote
            to={
              "https://kumparan.com/hesty-nuraini/bullying-dalam-dunia-pendidikan-1w2paAxtvqz/full"
            }>
            kumparan.com
          </FootNote>
        </span>
      </div>
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
      <div id="jenis-dan-target-bullying">
        <h1 className="text-4xl font-bold text-center py-8">
          Jenis - jenis Perundungan
        </h1>
        <ImgCenter
          imgSrc={jenisPerundungan}
          imgAlt="Jenis Perundungan di Indonesia"
        />
      </div>
      <div id="dampak-korban-bullying">
        <DampakBullying />
      </div>
      <div id="penyebab-pelaku-bullying">
        <PenyebabBullying />
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

export function DampakPerundungan() {
  return (
    <Each
      of={perundungan.dampak}
      render={(item, index) => (
        <CreateModal id={item.id} title={item.title}>
          {item.content}{" "}
          <FootNote to={item.source_url}>
            {item.source_url.split("/")[2]}
          </FootNote>
        </CreateModal>
      )}
    />
  );
}

export function PenyebabPerundungan() {
  return (
    <Each
      of={perundungan.penyebab}
      render={(item, index) => (
        <CreateModal id={item.id} title={item.title}>
          {item.content}{" "}
          <FootNote to={item.source_url}>
            {item.source_url.split("/")[2]}
          </FootNote>
        </CreateModal>
      )}
    />
  );
}

export function PenangananPerundungan() {
  return (
    <Each
      of={perundungan.cara_mengatasi}
      render={(item, index) => (
        <CreateModal id={item.id} title={item.title}>
          {item.content}{" "}
          <FootNote to={item.source_url}>
            {item.source_url.split("/")[2]}
          </FootNote>
        </CreateModal>
      )}
    />
  );
}
