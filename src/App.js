import "./App.css";
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
    <AppProviders>
      <div className="App">
        {/* <Counter /> */}
        {/* <Application /> */}
        {/* <Skills skills={skills} /> */}
        {/* <MuiMode /> */}
        {/* <CounterTwo count={1} /> */}
        <Users />
      </div>
    </AppProviders>
  );
}

export default App;
