import React from 'react'
import './icon.css'

const Icon = () => {
  return (
    <div className="icon">
         <div className="caja p-twitter">
            <i className="fa-brands fa-twitter twitter"></i>
        </div>
        <div class="caja p-linkedin">
            <i class="fa-brands fa-linkedin-in linkedin"></i>
        </div>

        <div class="caja p-instagram">
            <i class="fa fa-instagram" id="insta" aria-hidden="true"></i>
        </div>

        <div class="caja p-whatsapp">
            <i class="fa-brands fa-whatsapp whatsapp"></i>
        </div>

    </div>
   
  )
}

export default Icon