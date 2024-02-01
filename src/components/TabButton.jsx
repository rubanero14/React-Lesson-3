import "./TabButton.css";

export default function TabButton({ children }) {
  const handleClick = () => {
    console.log("Hello");
  };
  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
