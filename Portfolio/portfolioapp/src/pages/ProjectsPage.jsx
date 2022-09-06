import './projectspage.css'
import Navbar from '../components/Nav';
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardProject from '../components/Card';
import img1 from '../../src/assets/img/frankventas.bmp';
import img2 from '../../src/assets/img/sele-style.bmp';
import img3 from '../../src/assets/img/muebles-magallanes.bmp';


const ProjectsPage = () => {
  return (
    <Container>
       <Row className="box-home-top-card">
            <Col xs={0} sm={2}md={4} lg={4}>
                <h1>LM</h1>
            </Col>
            <Col xs={0} sm={2}md={4} lg={4}>
                
            </Col>
            <Col xs={12} sm={8} md={4} lg={4}>
                <Navbar/>
            </Col>
        </Row>
        <Row className="box-home-center-card">
            <Col xs={12} sm={12}md={4} lg={4}>
              <CardProject img={img1} titulo="selestyle" subtitulo="Catalogo Online" descripcion="Tienda online de calzado e indumentaria"/>
            </Col>
            <Col xs={12} sm={12}md={4} lg={4}>
              <CardProject img={img2} titulo="Muebles-Magallanes" descripcion="Ecommerce de ventas de muebles" subtitulo="Ecommerce Pyme"/>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4}>
              <CardProject img={img3}titulo="Le-Mark" descripcion="Menú del restaurante, con precios y platos" subtitulo="Pizzería y Hamburguesería"/> 
            </Col>
        </Row>
        <Row className="box-home-bottom-card">
          <Col xs={0} sm={0} md={4} lg={4}>
          </Col>
          <Col xs={0} sm={0} md={4} lg={4}>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
                <ul className="redes-list d-flex">
                    <li className="nav-item">Git</li>
                    <div className="vr"></div>
                    <li className="nav-item">In</li>
                    <div className="vr"></div>
                    <li className="nav-item">Facebook</li>
                </ul>
            </Col>
        </Row>
    </Container>
  )
}

export default ProjectsPage