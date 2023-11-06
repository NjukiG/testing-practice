import "./App.css";
import List from "./components/birthday-reminder/List";
// import { CounterTwo } from "./components/counter-two/CounterTwo";
// import Application from "./components/application/Application";
// import Counter from "./components/counter/Counter";
// import { MuiMode } from "./components/mui/MuiMode";
import { Users } from "./components/users/Users";
// import Skills from "./components/skills/Skills";
import { AppProviders } from "./providers/app-providers";

function App() {
  // const skills = ["HTML", "CSS", "JavaScript", "React"];

  return (
    <div className="App">
      <main>
        <section className="container">
          <h3>0 brithdays today!</h3>
          <List />
          <button onClick={() => console.log("I was clicked!")}>
            Clear All
          </button>
        </section>
      </main>
    </div>
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
