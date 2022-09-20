import React from 'react';
import { Button, CardBody, CardTitle, CardSubtitle, Card, CardText} from 'reactstrap';
import './card.css';

const CardProject = ({titulo, subtitulo,descripcion,img,linkpage}) => {
  
  return (
    <div className='containerr'>
      <Card className='Card box' outline style={{width: '18rem'}}>
          
          <CardBody className='CardBody'>
            <CardTitle className="name" tag="h5">
              {titulo}
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              {subtitulo}
            </CardSubtitle>
            <div className='circle'></div>
            <img className='product' alt="Sample" src={img}/>
            <CardText>
              {descripcion}
            </CardText>
            <Button className='buy'>
              <a href={linkpage} without rel="noreferrer" target="_blank">Go to Project!</a>
            </Button>
          </CardBody>
      </Card>
      
    </div>
  )
}

export default CardProject