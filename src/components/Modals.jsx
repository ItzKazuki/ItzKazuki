import {
  DampakPerundungan, PenangananPerundungan, PenyebabPerundungan,
} from "../pages/project/Bullying";

export default function Modals() {
  return (
    <>
      <DampakPerundungan />
      <PenyebabPerundungan />
      <PenangananPerundungan />
    </>
  );
}

export function CreateModal({ id, title, children }) {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box w-11/12 max-w-5xl">
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="py-4">
          { children }
        </p>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
