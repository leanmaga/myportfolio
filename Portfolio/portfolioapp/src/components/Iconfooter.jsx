import React from 'react'
import './iconfooter.css'


const Iconfooter = () => {
  return (
    <div className="iconfooter">
         <div className="boxfooter p-twitter">
            <i className="fa-brands fa-twitter twitter"></i>
        </div>
        <div class="boxfooter p-linkedin">
            <i class="fa-brands fa-linkedin-in linkedin"></i>
        </div>

        <div class="boxfooter p-instagram">
            <i class="fa fa-instagram" id="insta" aria-hidden="true"></i>
        </div>

        <div class="boxfooter p-whatsapp">
            <i class="fa-brands fa-whatsapp whatsapp"></i>
        </div>

    </div>
  )
}

export default Iconfooter