import { CORE_CONCEPTS } from "./data";
import ReactImg from "./assets/react-core-concepts.png";

const dynamicDescWords = ["Fundamental", "Crucial", "Core"];
const getRandomIdx = (arrLength) => {
  return Math.floor(Math.random() * (arrLength + 1));
};

export function CoreConcept({
  src = "",
  title = "",
  description = "",
  key = "",
  id = "",
}) {
  return (
    <li key={key} id={id}>
      <img src={src} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
    </li>
  );
}

function Header() {
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

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((data, index) => (
              <CoreConcept
                key={index}
                id={index}
                src={data.image}
                title={data.title}
                description={data.description}
              />
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
