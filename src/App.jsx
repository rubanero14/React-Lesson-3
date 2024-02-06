import { CORE_CONCEPTS, EXAMPLES } from "./data";
import { Header } from "./components/Header/Header";
import { CoreConcept } from "./components/CoreComponents";
import TabButton from "./components/TabButton";
import { useState } from "react";

const tabLabels = ["Components", "JSX", "Props", "State"];

function App() {
  const [showMenu, setShowMenu] = useState();
  const handleSelect = (val) => {
    setShowMenu(EXAMPLES[val.toLowerCase()]);
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
                className={showMenu && showMenu.title === label ? "active" : ""}
                key={index}
                onSelect={() => handleSelect(label)}
              >
                {label}
              </TabButton>
            ))}
          </menu>
          <div id="tab-content">
            {!showMenu && <p>Please select a topic.</p>}
            {showMenu && (
              <>
                <h3>{showMenu.title}</h3>
                <p>{showMenu.description}</p>
                <pre id="code">
                  <code>{showMenu.code}</code>
                </pre>
              </>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
