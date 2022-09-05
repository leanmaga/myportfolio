import '../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Navbar from '../components/Nav';
import './homepage.css'

const Home = () => {
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


        <Row className='box-home-center'>
            <Col xs={12} sm={12} md={6} lg={4} >
                <h1>Leandro Magallanes </h1>
                <span className='name'></span>
            </Col>
            <Col xs={0} sm={0} md={0} lg={4}>
                
            </Col>
            <Col xs={12} sm={12} md={6} lg={4}>
                <h4 className='profession'>Product Desinger and Front-End Developer</h4>
                <p className='description'>Me especializo en HTML, CSS3, Sass y JavaScript. Manejo Frameworks como Bootstrap y React Js</p>
            </Col>
        </Row>


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
                    <a href="mailto:thesharkcommunity@gmail.com?subject=Mi+pedido&body=Hola+estoy+interesado+en" target="_blank" rel="noopener noreferrer">Message</a>
                </Button>{' '}
                <Button variant="outline-danger" size="sm">
                    Curriculum Vitae
                </Button>
            </Col>
        </Row>
    </Container>
  )
}

export default Home