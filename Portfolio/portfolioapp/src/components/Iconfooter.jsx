import React from 'react'
import './iconfooter.css'


const Iconfooter = () => {
  return (
    <div className="iconfooter">
        <div className="boxfooter p-twitter">
          <a href='https://twitter.com/leanelshark'><i className="fa-brands fa-twitter twitter"></i></a>
        </div>
        <div class="boxfooter p-linkedin">
          <a href='https://linkedin.com/in/leandromagallanes'><i class="fa-brands fa-linkedin-in linkedin"></i></a>
        </div>

        <div class="boxfooter p-instagram">
          <a href='https://www.instagram.com/lean_maga'><i class="fa fa-instagram" id="insta" aria-hidden="true"></i></a>
        </div>

        <div class="boxfooter p-whatsapp">
          <a href="https://wa.me/qr/ALIPEVGLH5YDO1"><i class="fa-brands fa-whatsapp whatsapp"></i></a>
        </div>

    </div>
  )
}

export default Iconfooter