import Topbar from "./components/topbar/Topbar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import CookieConsent from "react-cookie-consent";
import Home from "./pages/Home/Home";
import Footer2 from "./components/footer2/Footer2";
import Ohospital from "./pages/Ohospital/Ohospital";
import Servicos from "./pages/Nova Pagina/servicos";
import Planos from "./pages/plano/plano";
import Modals from "./pages/modal";

function App() {

  return (
    <Router>
      <Topbar />
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/servicos" element={<Servicos />} />
        <Route exact path="/OHospital" element={<Ohospital />} />
        <Route exact path="/plano" element={<Planos />} />
        <Route exact path="/modals" element={<Modals />} />

      </Routes>
      <Footer2 />
      <CookieConsent
        expires={150}
        buttonText="Eu compreendo."
        >
          Esse Site Usa Cookies.      {/* O que está escrito na barra */}   
      </CookieConsent>

    </Router>
  );
}

export default App;
