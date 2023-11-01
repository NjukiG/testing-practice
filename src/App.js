import "./App.css";
import Application from "./components/application/Application";
import Counter from "./components/counter/Counter";
import Skills from "./components/skills/Skills";

function App() {
  const skills = ["HTML", "CSS", "JavaScript", "React"];

  return (
    <div className="App">
      <Counter />
      {/* <Application /> */}
      {/* <Skills skills={skills} /> */}
    </div>
  );
}

export default App;
