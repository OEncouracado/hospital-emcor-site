import { Breadcrumb } from "../../components/breadcrumb/Breadcrumb";
import Cards from "../../components/card/Card";
import "./novapagina.css"
import heal from "../../images/HEAL.jpg"

export default function Servicos() {
return(
    <>
    <div className="bg-light align-items-center p-5" >
        <Cards img={heal} title="Teste de Titulo" text="Pariatur et aute ad ad exercitation Lorem sunt. Dolore laboris et et esse et veniam eiusmod labore adipisicing laborum incididunt consectetur deserunt sunt." />
    </div>
    <Breadcrumb crumb="Serviços"/>
    </>
)   
};

