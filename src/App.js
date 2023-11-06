import { useState } from "react";
import "./App.css";
import List from "./components/birthday-reminder/List";
import data from "./components/birthday-reminder/data";
// import { CounterTwo } from "./components/counter-two/CounterTwo";
// import Application from "./components/application/Application";
// import Counter from "./components/counter/Counter";
// import { MuiMode } from "./components/mui/MuiMode";
// import { Users } from "./components/users/Users";
// import Skills from "./components/skills/Skills";
// import { AppProviders } from "./providers/app-providers";

function App() {
  // const skills = ["HTML", "CSS", "JavaScript", "React"];

  const [people, setPeople] = useState(data);

  return (
    <div className="App">
      <main>
        <section className="container">
          <h3>{people.length} brithdays today!</h3>
          <List people={people} />
          <button data-testid="clear" onClick={() => setPeople([])}>
            Clear All
          </button>
        </section>
      </main>
    </div>

    // From the other tests
    // <AppProviders>
    //   <div className="App">
    //     {/* <Counter /> */}
    //     {/* <Application /> */}
    //     {/* <Skills skills={skills} /> */}
    //     {/* <MuiMode /> */}
    //     {/* <CounterTwo count={1} /> */}
    //     <Users />
    //   </div>
    // </AppProviders>
  );
}

export default App;
