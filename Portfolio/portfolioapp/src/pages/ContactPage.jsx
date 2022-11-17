import React from 'react'
import Navbar from '../components/Nav';
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import CV from '../assets/pdf/cv.pdf';
import Icon from '../components/Icon';

const ContactPage = () => {
  return (
    <>
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
        <Row className="box-home-center">
              <Icon /> 
        </Row>
    </Container>
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

export default ContactPage