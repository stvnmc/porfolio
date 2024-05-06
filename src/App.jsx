import {
  BrowserRouter,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./page/HomePage";
import Projectos from "./page/Projectos";

function App() {
  return (
    <BrowserRouter>
      <main>
        <NavBar />
        <Routes>
          <Route path="/porfolio" element={<HomePage />} />
          <Route path="/porfolio/projectos" element={<Projectos />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
