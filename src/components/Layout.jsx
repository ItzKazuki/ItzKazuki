import BottomNav from "./BottomNav";

export default function Layout({ children }) {
  return (
    <>
      <div className="my-4 mx-8 min-h-screen">{children}</div>
      <BottomNav />
    </>
  );
}
