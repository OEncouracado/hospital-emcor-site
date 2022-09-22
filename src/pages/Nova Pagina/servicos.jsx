import { Breadcrumb } from "../../components/breadcrumb/Breadcrumb";
// import Cards from "../../components/card/Card";
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
    
    <>  <h3 className="text-center bg-dark text-light">Serviços</h3>
        <div className="w-100">
            <div className="mb-5 w-100 p-5">
                        {/* <!-- DEMO 3 --> */}
                        <div className="py-3">
                            <div className="1 row">
                            {/* <!-- DEMO 3 Item--> */}
                            <div className="col-lg-6 mb-3 mb-lg-0">
                                <div className="hover hover-3 text-white rounded"><img src={emerg} alt=""/>
                                <div className="hover-overlay"></div>
                                <div className="hover-3-content px-5 py-4">
                                    <h3 className="hover-3-description text-uppercase mb-0">Atendimento de emergência 24hs</h3>
                                </div>
                                </div>
                            </div>
                            {/* <!-- DEMO 3 Item    --> */}
                            <div className="col-lg-6">
                                <div className="hover hover-3 text-white rounded"><img src={cti} alt=""/>
                                <div className="hover-overlay"></div>
                                <div className="hover-3-content px-5 py-4">
                                    <h3 className="hover-3-description text-uppercase mb-0">Centro de tratamento intensivo </h3>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="2 row mt-3">
                            {/* <!-- DEMO 3 Item--> */}
                            <div className="col-lg-6 mb-3 mb-lg-0">
                                <div className="hover hover-3 text-white rounded"><img src={hemo} alt=""/>
                                <div className="hover-overlay"></div>
                                <div className="hover-3-content px-5 py-4">
                                    <h3 className="hover-3-description text-uppercase mb-0">HEMODINÂMICA</h3>
                                </div>
                                </div>
                            </div>
                            {/* <!-- DEMO 3 Item    --> */}
                            <div className="col-lg-6">
                                <div className="hover hover-3 text-white rounded"><img src={lab} alt=""/>
                                <div className="hover-overlay"></div>
                                <div className="hover-3-content px-5 py-4">
                                    <h3 className="hover-3-description text-uppercase mb-0">LABORATÓRIO BIOMÉDICO </h3>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="2 row mt-3">
                            {/* <!-- DEMO 3 Item--> */}
                            <div className="col-lg-6 mb-3 mb-lg-0">
                                <div className="hover hover-3 text-white rounded"><img src={cardio} alt=""/>
                                <div className="hover-overlay"></div>
                                <div className="hover-3-content px-5 py-4">
                                    <h3 className="hover-3-description text-uppercase mb-0">CARDIOLOGIA AMBULATORIAL</h3>
                                </div>
                                </div>
                            </div>
                            {/* <!-- DEMO 3 Item    --> */}
                            <div className="col-lg-6">
                                <div className="hover hover-3 text-white rounded"><img src={eco} alt=""/>
                                <div className="hover-overlay"></div>
                                <div className="hover-3-content px-5 py-4">
                                    <h3 className="hover-3-description text-uppercase mb-0">ECOCARDIOGRAMA </h3>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="2 row mt-3">
                            {/* <!-- DEMO 3 Item--> */}
                            <div className="col-lg-6 mb-3 mb-lg-0">
                                <div className="hover hover-3 text-white rounded"><img src={testergo} alt=""/>
                                <div className="hover-overlay"></div>
                                <div className="hover-3-content px-5 py-4">
                                    <h3 className="hover-3-description text-uppercase mb-0">TESTE ERGOMÉTRICO</h3>
                                </div>
                                </div>
                            </div>
                            {/* <!-- DEMO 3 Item    --> */}
                            <div className="col-lg-6">
                                <div className="hover hover-3 text-white rounded"><img src={ultrasom} alt=""/>
                                <div className="hover-overlay"></div>
                                <div className="hover-3-content px-5 py-4">
                                    <h3 className="hover-3-description text-uppercase mb-0">ULTRASSONOGRAFIA </h3>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
            </div>
        </div>
        <Breadcrumb crumb="Serviços"/>
    </>
)   
};

