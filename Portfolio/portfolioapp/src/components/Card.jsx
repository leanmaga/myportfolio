import React from 'react';
import { Button, CardBody, CardTitle, CardSubtitle, Card, CardText} from 'reactstrap';
import './card.css';


const CardProject = ({titulo, subtitulo,descripcion}) => {
  return (
    <div>
      <Card className='Card' outline style={{width: '18rem'}}>
          <img
            alt="Sample"
            src="https://picsum.photos/300/200"
          />
          <CardBody>
            <CardTitle tag="h5">
              {titulo}
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              {subtitulo}
            </CardSubtitle>
            <CardText>
              {descripcion}
            </CardText>
            <Button>
              Go to Project
            </Button>
          </CardBody>
      </Card>
    </div>
  )
}

export default CardProject