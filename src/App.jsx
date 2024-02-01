import { CORE_CONCEPTS } from "./data";
import { Header } from "./components/Header/Header";
import { CoreConcept } from "./components/CoreComponents";
import TabButton from "./components/TabButton";
import { useState } from "react";

const tabLabels = ["Components", "JSX", "Props", "State"];

function App() {
  const [showMenu, setShowMenu] = useState("");
  const handleSelect = (val) => {
    setShowMenu(val);
  };

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
              <TabButton
                key={index}
                onSelect={() => handleSelect("Details on " + label)}
              >
                {label}
              </TabButton>
            ))}
          </menu>
          {showMenu}
        </section>
      </main>
    </div>
  );
}

export default App;
