import img from '../assets/img/myphotobg.png'
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
                <h4 className='profession'>Product Desinger</h4>
                <p className='description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, cupiditate.</p>
            </Col>
        </Row>


        <Row className="box-home-bottom">
            <Col xs={12} sm={12} md={4} lg={4}>
                <ul className="redes-list d-flex">
                    <li className="nav-item">Git</li>
                    <div className="vr"></div>
                    <li className="nav-item">In</li>
                    <div className="vr"></div>
                    <li className="nav-item">Facebook</li>
                </ul>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4}>
                    
            </Col>
            <Col xs={12}sm={12} md={4} lg={4} className='buttons'>
                <Button className="me-2" variant="danger" size="sm">
                    Message
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