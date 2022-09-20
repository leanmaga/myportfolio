import './projectspage.css'
import Navbar from '../components/Nav';
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardProject from '../components/Card';
import img1 from '../../src/assets/img/frankventas.bmp';
import img2 from '../../src/assets/img/sele-style.bmp';
import img3 from '../../src/assets/img/muebles-magallanes.bmp';


const ProjectsPage = () => {
  return (
    <div className="containerr">
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
              <CardProject img={img1} titulo="Frank-Ventas" subtitulo="Catalogo Online" descripcion="Tienda oficial de productos Amway" linkpage="https://leanelshark.github.io/frank-ventas/"/>
            </Col>
            <Col xs={12} sm={12}md={4} lg={4}>
              <CardProject img={img3} titulo="Muebles-Magallanes" descripcion="Ecommerce de ventas de muebles" subtitulo="Ecommerce Pyme" linkpage="http://www.mueblesmagallanes.com"/>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4}>
              <CardProject img={img2}titulo="Sele-Style" descripcion="Tienda online de calzado e indumentaria" subtitulo="Cientos de productos al alcance del cliente" linkpage="https://leanelshark.github.io/store/"/> 
            </Col>
        </Row>
        <Row className="box-home-bottom-card">
          <Col xs={0} sm={0} md={4} lg={4}>
          </Col>
          <Col xs={0} sm={0} md={4} lg={4}>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <ul className="redes-list d-flex">
                        <li className="nav-item"><a href='https://github.com/leanelshark' target="_blank" rel="noopener noreferrer" >Git</a></li>
                        <div className="vr"></div>
                        <li className="nav-item"><a href='https://linkedin.com/in/leandromagallanes' target="_blank" rel="noopener noreferrer">In</a></li>
                        <div className="vr"></div>
                        <li className="nav-item"><a href='https://www.facebook.com/lean.maga' target="_blank" rel="noopener noreferrer">Facebook</a></li>
            </ul>
          </Col>
        </Row>
    </div>
  )
}

export default ProjectsPage