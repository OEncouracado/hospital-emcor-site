
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import { FaInstagram , FaFacebookSquare, FaTwitter } from "react-icons/fa"
import "./socials.css"

export default function Socials() {
    const renderTooltipF = props => (
        <Tooltip {...props}>Facebook</Tooltip>
      );
      const renderTooltipI = props => (
        <Tooltip {...props}>Instagram</Tooltip>
      );
      const renderTooltipT = props => (
        <Tooltip {...props}>Twitter</Tooltip>
      );
    
  return (<>
    <h3 className="text-center bg-dark text-light mb-4" style={{width:'100vw'}}>Nossas Redes Sociais</h3>
    <div className='container d-flex justify-content-center align-itens-center mb-4'>
        <div className="row w-75">
            <div className="col-lg-12 d-flex align-itens-center justify-content-center">

            </div>
            <div className="col-lg-4 d-flex align-itens-center justify-content-center mb-1">
            <OverlayTrigger placement="top" overlay={renderTooltipF} ><a href="https://www.facebook.com/hospitalemcor" target="_blank" rel="noopener noreferrer" >
                    <FaFacebookSquare className="socialsiconsB"></FaFacebookSquare>
                </a></OverlayTrigger>
            </div>
            <div className="col-lg-4 d-flex align-itens-center justify-content-center mb-1">
            <OverlayTrigger placement="top" overlay={renderTooltipI}><a className="a"href="https://www.instagram.com/hospitalemcor" target="_blank" rel="noopener noreferrer" >
                    <FaInstagram aria-hidden="true" className="socialsiconsI"/>
                </a></OverlayTrigger>
            </div>
            <div className="col-lg-4 d-flex align-itens-center justify-content-center mb-1">
                <OverlayTrigger placement="top" overlay={renderTooltipT}><a href="https://twitter.com/hospitalemcor" target="_blank" rel="noopener noreferrer" >
                    <FaTwitter className="socialsiconsT"/>
                </a></OverlayTrigger>
            </div>
        </div>
    </div>
  </>)
}