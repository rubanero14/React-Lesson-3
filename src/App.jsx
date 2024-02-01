import { CORE_CONCEPTS } from "./data";
import { Header } from "./components/Header/Header";
import { CoreConcept } from "./components/CoreComponents";
import TabButton from "./components/TabButton";

const tabLabels = ["Components", "JSX", "Props", "State"];

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
                src={data.image}
                title={data.title}
                description={data.description}
              />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {tabLabels.map((label, index) => (
              <TabButton key={index}>{label}</TabButton>
            ))}
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
