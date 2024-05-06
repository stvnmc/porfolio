import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./page/HomePage";

function App() {
  return (
    <Router>
      <main>
        <NavBar />
        <HomePage />
      </main>
    </Router>
  );
}

export default App;
