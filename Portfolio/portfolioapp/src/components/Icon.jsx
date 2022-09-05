import React from 'react'
import './icon.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram, faLinkedinIn, faWhatsapp, faSquareFacebook} from '@fortawesome/free-brands-svg-icons'

const Icon = () => {
  return (
    
    <div className="icon">
      
        
          <a className='caja box-facebook' href={"https://www.facebook.com/lean.maga"} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='facebook' icon={faSquareFacebook} /></a>
        
      
          <a className='caja box-linkedin' href={"https://linkedin.com/in/leandromagallanes"} target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon className='linkedin' icon={faLinkedinIn} /></a>
       

        
          <a className='caja box-instagram' href={"https://www.instagram.com/lean_maga"} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='instagram' icon={faInstagram} /></a>
        

     
          <a className='caja box-whatsapp' href={"https://wa.me/qr/ALIPEVGLH5YDO1"} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='whatsapp' icon={faWhatsapp} /></a>
       
     
    </div>
   
  )
}

export default Icon