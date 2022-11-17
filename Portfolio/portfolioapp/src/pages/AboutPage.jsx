import React from 'react'
import Navbar from '../components/Nav';
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css' 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './aboutpage.css';
import Button from 'react-bootstrap/Button';
import CV from '../assets/pdf/cv.pdf';



const AboutPage = () => {
  return (
    <>
      <div className='AboutPage'>
        <div claass="about-container">
          <Row className=" box-about-top">
              <Col xs={0} sm={2}md={4} lg={4}>
                  <h1>LM</h1>
              </Col>
              <Col xs={0} sm={2}md={4} lg={4}>
                  
              </Col>
              <Col xs={12} sm={8} md={4} lg={4}>
                  <Navbar/>
              </Col>
          </Row>
          <Row className='box-about-center mb-4'>
              <Col xs={12} sm={12} md={6} lg={8} >
                  <h1>Leandro Magallanes </h1>
                  <h4 className="profession-about">Product Desinger and Front End Developer, based in Buenos Aires.</h4>
              </Col>
              <Col xs={0} sm={0} md={0} lg={2}>
              </Col>
              <Col xs={12} sm={12} md={6} lg={2}>
              </Col>
          </Row>
          <hr/>
          <Row className="box-about-bottom mt-4 mb-4">
            <Col xs={12} sm={12} md={12} lg={12}>
              <p className="text-white mt-4">Soy una persona lógica y sistemática. Tengo un criterio de pensamiento preciso y una asidua manera de trabajar, prefiriendo seguir procedimientos tanto en mi vida laboral como privada. <br />  
                Soy perfeccionista y no quiero cometer ningún error en mi trabajo. <br />
                Soy una persona analítica, precisa y ordenada, con gran solidaridad y lealtad en todo lo que realizo.<br />
                Generalmente, suelo recolectar muchos datos detallados e información. Sigo instrucciones, normas y procedimientos. <br />
                Llevo un cuidadoso control de la calidad y, normalmente, siento seguridad de mis conocimientos y pericia. <br />
                Poseo habilidad para identificar y diagnosticar problemas. <br />
                Mi aproximación analítica promueve que sea una persona escéptica que quiera ver datos de soporte o un plan lógico antes de comprometerme con un plan o propuesta efectiva. <br />
                Me caracterizo por mi efectividad en equipos, grupos pequeños y vínculos uno a uno. <br />
                Tiendo a ser una persona cuidadosa, cautelosa, conservadora, pacífica y amable. <br />
                Puedo ser visto por mis compañeros como una persona fiel. <br />
                Normalmente me permito reconocer los puntos de vista, opiniones y conductas de otras personas.<br />
              </p>
            </Col>
          </Row>
        </div>
        
      </div>
      <footer>
          <Row className="box-home-bottom">
              <Col xs={12} sm={12} className="redes-bottom">
                  <ul className="redes-list d-flex">
                      <li className="nav-item"><a href='https://github.com/leanelshark' target="_blank" rel="noopener noreferrer" >Git</a></li>
                      <div className="vr"></div>
                      <li className="nav-item"><a href='https://linkedin.com/in/leandromagallanes' target="_blank" rel="noopener noreferrer">In</a></li>
                      <div className="vr"></div>
                      <li className="nav-item"><a href='https://www.facebook.com/lean.maga' target="_blank" rel="noopener noreferrer">Facebook</a></li>
                  </ul>
              </Col>
              
              <Col xs={12}sm={12}  className='buttons'>
                  <Button className="me-2" variant="danger" size="sm">
                      <a className="text-white" href="mailto:thesharkcommunity@gmail.com?subject=Mi+pedido&body=Hola+estoy+interesado+en" target="_blank" rel="noopener noreferrer">Message</a>
                  </Button>{' '}
                  <Button variant="outline-danger" size="sm">
                    <a className="text-white" href={CV} download='Leandro Magallanes Curriculum Vitae'>Curriculum Vitae</a> 
                  </Button>
              </Col>
          </Row>
        </footer>
    </>
  )
}

export default AboutPage