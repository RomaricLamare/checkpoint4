import Router from "../navigation/Router";
import NavBar from "./components/NavBar";
import "./styles/global.scss";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router />
    </div>
  );
}

export default App;
