import "./TabButton.css";

export default function TabButton({ children, onSelect, className }) {
  return (
    <li>
      <button className={className} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
