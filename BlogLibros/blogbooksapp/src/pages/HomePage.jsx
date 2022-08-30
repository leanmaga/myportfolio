import Nav from '../components/Nav';
import '../../node_modules/reactstrap/dist/reactstrap.cjs';
import '../home.css'
import './homepage.css'
import img from '../assets/img/myphotobg.png'
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';



function HomePage() {
  return (
    
    <Container className="App">
      
      <Row className="mt-2">
          <Col xs={12} sm={12} md={12} lg={12}>
            <ul className="nav d-flex justify-content-between">
              <li><h1 className="mt-4">LM</h1></li>
              <li><Nav/></li>
            </ul>
          </Col>
      </Row>

      <Row className="mt-4">
        <Col xs={{order:'first'}} sm={12} md={6} lg={4} className='box-home-center'>
          <div className="name ">
            <h1>Leandro <br /> Magallanes.</h1>
            <span className="subrayado"></span>
          </div>
        </Col>
        <Col xs={{order: '2'}} sm={12} md={6} lg={4} className='box-home-center'>
          <img  src={img} className="myphoto" alt="myphoto" />
        </Col>
        <Col xs={{order:'last'}} sm={12} md={12} lg={4} className='box-home-center'>
          <div className="resumen">
            
            <h3 className="text-white">Product Desinger and <br /> Developer, based in Buenos Aires.</h3>
            <p className="text-white">Soy una persona lógica y sistemática. <br />
            Tengo un criterio 
            de pensamiento preciso y una asidua manera de trabajar,<br /> prefiriendo seguir procedimientos tanto 
            en mi vida laboral como privada. Soy perfeccionista y no <br />quiero cometer ningún error en mi trabajo.
            Soy una persona analítica, precisa y ordenada</p>
          </div>
        </Col>
      </Row>


      <Row className="mt-4">
        <Col xs={6} sm={6} lg={4} md={4}>
          <div className="redes">
            <ul className="nav">
              <li className="nav-item">Git</li>
              <div className="vr"></div>
              <li className="nav-item">In</li>
              <div className="vr"></div>
              <li className="nav-item">Facebook</li>
            </ul>
          </div>
        </Col>
        <Col xs={6} sm={6} lg={{span:4, offset:4}} md={{span:4, offset:4}}>
        <div className="boton mt-3">
            <div className="mb-2">
              <Button className="me-2" variant="danger" size="sm">
                Message
              </Button>{' '}
              <Button variant="outline-danger" size="sm">
                Curriculum Vitae
              </Button>
            </div>
          </div>
        </Col>
      </Row>


    </Container>
  );
}

export default HomePage;