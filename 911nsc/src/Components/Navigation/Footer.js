import React from "react";
import "../../styles/Footer.scss";
import {
  faMapMarker,
  faPhone,
  faEnvelope,
  faGlobe,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  const date = new Date();
  const dateyear = date.getFullYear();
  return (
    <div className="main-footer">
      <div className="main-footer-container">
        <div className="main-footer-content">
          <div className="row justify-content-center">
            <div className="col-lg-2">
              <h2>911NSCreaciones</h2>
              <p>
                Brindamos servicios de alta calidad. 
              </p>
            </div>
            <div className="col-lg-2">
              <h2>Contáctanos</h2>
              <h5>
                Caracas , Venezuela
              </h5>
              <h5>
                911NSCreaciones@gmail.com
              </h5>
              <h5>
                +58 4123067578
              </h5>
            </div>
            <div className="col-lg-2">
               <h3>Horarios</h3>
              <h5>
                - Lunes a Viernes 
              </h5>
              <h5>
                9:00am - 4:00pm
              </h5>
            </div>
            <div className="col-lg-2">
              <h2>Mi cuenta</h2>
              <h5>- Carrito</h5>
              <h5>- Pedidos</h5>
              <h5>- Devoluciones</h5>
            </div>
            <div className="col-lg-2">
              <h3>Redes sociales</h3>
              <h5>- Facebook</h5>
              <h5>- Instagram</h5>
              <h5>- Twitter</h5>
              <h5>- Linkedin</h5>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 main-footer-copyright">
            <p>Copyright &copy; {dateyear}. All Right reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
