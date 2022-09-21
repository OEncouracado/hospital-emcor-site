import { Breadcrumb } from "../../components/breadcrumb/Breadcrumb";
import Cards from "../../components/card/Card";
import "./novapagina.css"
import emerg from "../../images/servicos/emerg.png"
import cti from "../../images/servicos/cti.png"
import hemo from "../../images/servicos/hemo.png"
import lab from "../../images/servicos/lab.png"
import cardio from "../../images/servicos/cardio.png"
import eco from "../../images/servicos/eco.png"
import testergo from "../../images/servicos/testergo.png"
import ultrasom from "../../images/servicos/ultrasom.jpg"

export default function Servicos() {
return(
    
    <><div className="w-100 bg-primary">
        <div className="mt-3 mb-5 bg-dark w-100">
            <div class="1 row d-inline-box m-1">
                <div className="col-md-3 p-3">
                    <Cards img={emerg} title="Atendimento de Emergência" text=""  />
                </div>
                <div className="col-md-3 p-3">
                    <Cards img={cti} title="CTI" />
                </div>
                <div className="col-md-3 p-3">
                    <Cards img={hemo} title="Hemodinâmica" />
                </div>
                <div className="col-md-3 p-3">
                    <Cards img={lab} title="Laboratório Biomédico" />
                </div>
            </div>
            <div class="2 row d-inline-box m-1">
                <div className="col-md-3 p-3">
                    <Cards img={cardio} title="Cardiologia Ambulatorial"  />
                </div>
                <div className="col-md-3 p-3">
                    <Cards img={eco} title="Ecocardiograma" />
                </div>
                <div className="col-md-3 p-3">
                    <Cards img={testergo} title="Teste Ergométrico" />
                </div>
                <div className="col-md-3 p-3">
                    <Cards img={ultrasom} title="Ultrassonografia" />
                </div>
            </div>
        </div>
    </div>



    <Breadcrumb crumb="Serviços"/>
    </>
)   
};

