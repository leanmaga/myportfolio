import React from 'react'
import Nav from '../components/Nav';
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const AboutPage = () => {
  return (
    
      <Container>
        
        <Row className="mt-2">
          <Col xs={12} sm={12} md={12} lg={12}>
            <ul className="nav d-flex justify-content-between">
              <li><h1 className="mt-4">LM</h1></li>
              <li><Nav/></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} className="m-4">
            <h1 className='title text-center text-white'>Leandro Magallanes</h1>
            <h2 className='text-center'>Front-End Developer</h2>
          </Col>
        </Row>
        <Row>
          <Col  xs={8} sm={8} md={6} lg={4} className="mb-4" >
            <h3 className="text-white">Product Desinger and Developer, based in Buenos Aires.</h3>
          </Col>
        </Row>
        <Row >
          <Col xs={12} sm={12} md={12} lg={12}>
            <p className="text-white">Soy una persona lógica y sistemática. Tengo un criterio de pensamiento preciso y una asidua manera de trabajar, prefiriendo seguir procedimientos tanto en mi vida laboral como privada. <br />  
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