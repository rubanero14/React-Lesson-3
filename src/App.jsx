import { CORE_CONCEPTS } from "./data";
import { Header } from "./components/Header/Header";
import { CoreConcept } from "./components/CoreComponents";

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
