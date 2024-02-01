import ReactImg from "../assets/react-core-concepts.png";
import "./Header.css";

const dynamicDescWords = ["Fundamental", "Crucial", "Core"];
const getRandomIdx = (arrLength) => {
  return Math.floor(Math.random() * (arrLength + 1));
};

export function Header() {
  const randomDesc =
    dynamicDescWords[getRandomIdx(dynamicDescWords.length - 1)];
  return (
    <header>
      <img src={ReactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {randomDesc} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
