export default function Card({ children, className, isCenter, onClick }) {
  const centerCard = isCenter ? "items-center text-center" : "";
  const setWhite = isCenter ? "text-white" : "";
  
  return (
    <div className={`card ${setWhite} ${className}`} onClick={onClick}>
      <div className={`card-body ${centerCard}`}>{children}</div>
    </div>
  );
}
