import Topbar from "./components/topbar/Topbar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import CookieConsent from "react-cookie-consent";
import Home from "./pages/Home/Home";
import Footer2 from "./components/footer2/Footer2";
import Ohospital from "./pages/Ohospital/Ohospital";
import Servicos from "./pages/Nova Pagina/servicos";
import Planos from "./pages/plano/plano";
import Resultados from "./pages/Resultados/Resultados";
import Contato from "./pages/Contato/Contato";
import Politica from "./pages/CookiePoli/Politica";
import ScrollArrow from "./components/arrowTop/ScrollArrow";

function App() {

  return (
    <Router>
      <Topbar />
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/servicos" element={<Servicos />} />
        <Route exact path="/OHospital" element={<Ohospital />} />
        <Route exact path="/plano" element={<Planos />} />
        <Route exact path="/resultado" element={<Resultados />} />
        <Route exact path="/contato" element={<Contato />} />
        <Route exact path="/politica-de-privacidade" element={<Politica />} />
      </Routes>
      <Footer2 />
      <ScrollArrow />
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
