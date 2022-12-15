import '../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Navbar from '../components/Nav';
import './homepage.css';
import CV from '../assets/pdf/cv.pdf';
import circle from '../assets/img/myphotobg.png'

const Home = () => {
  return (
    <>
    <Container>
        <Row> 

            <Col sm={0} md={4} lg={6} xl={6}>

                <h1 className='text-white logo mb-4'>LM</h1>

            </Col>

            <Col className="navegacion mb-4" sm={12} md={8} lg={6} xl={6}>
            
                <Navbar/>

            </Col>

        </Row>

        <Row className='main'>

            <Col sm={12} md={6} lg={6} xl={6}>

                <h1 className='main-name m-4'>Leandro Magallanes </h1>

            </Col>
            

            <Col sm={12} md={6} lg={6} xl={6}>

                <img className='circle-perfil m-4' src={circle} alt="perfil" />

            </Col>

        </Row>

        <Row className='main main-info m-4'>

            <Col sm={12} md={12} lg={12} xl={12}>
                
                <h4 className='profession m-4'>Product Desinger and Front-End Developer</h4>

                <p className='description m-4'>I specialize in HTML, CSS3, Sass and JavaScript. I use the Bootstrap and React Js Frameworks</p>

            </Col>

        </Row>

    </Container>

        <footer>
            <Row className="box-home-bottom">
                <Col xs={12} sm={12} className="redes-bottom">
                    <ul className="redes-list d-flex">
                        <li className="nav-item"><a href='https://github.com/leanmaga' target="_blank" rel="noopener noreferrer" >Git</a></li>
                        <div className="vr"></div>
                        <li className="nav-item"><a href='https://linkedin.com/in/leandromagallanes' target="_blank" rel="noopener noreferrer">In</a></li>
                        <div className="vr"></div>
                        <li className="nav-item"><a href='https://www.facebook.com/lean.maga' target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    </ul>
                </Col>
                
                <Col xs={12}sm={12}  className='buttons'>
                    <Button className="me-2" variant="danger" size="sm">
                        <a className="text-white" href="mailto:thesharkcommunity@gmail.com?subject=Mi+pedido&body=Hola estoy interesado en" target="_blank" rel="noopener noreferrer">Message</a>
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

export default Home