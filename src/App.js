import logo from "./logo.svg";
import "./App.css";
import consola from "consola";

function App() {
  const greeting = () => consola.log("ciao");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <h1>Esercitazione</h1>
        <button onClick={greeting}>Click</button>
      </main>
      <footer className="App-footer">
        <p>copyright by Me {new Date().getFullYear()} </p>
      </footer>
    </div>
  );
}

export default App;
