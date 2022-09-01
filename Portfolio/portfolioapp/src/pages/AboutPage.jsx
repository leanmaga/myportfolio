import React from 'react'
import Navbar from '../components/Nav';
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const AboutPage = () => {
  return (
    
      <Container>
        
        <Row className="box-home-top">
            <Col xs={0} sm={2}md={4} lg={4}>
                <h1>LM</h1>
            </Col>
            <Col xs={0} sm={2}md={4} lg={4}>
                
            </Col>
            <Col xs={12} sm={8} md={4} lg={4}>
                <Navbar/>
            </Col>
        </Row>
        <Row className='box-home-center mb-4'>
            <Col xs={12} sm={12} md={6} lg={4} >
                <h1>Leandro Magallanes </h1>
                <h3 className="">Product Desinger and Front End Developer, based in Buenos Aires.</h3>
                <span className='name'></span>
            </Col>
            <Col xs={0} sm={0} md={0} lg={4}>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4}>
            </Col>
        </Row>
        
        <Row className="box-home-bottom mt-4 mb-4">
          <Col xs={12} sm={12} md={8} lg={8}>
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
      </Container>
  )
}

export default AboutPage