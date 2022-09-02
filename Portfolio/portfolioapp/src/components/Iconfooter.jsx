import React from 'react'
import './iconfooter.css'


const Iconfooter = () => {
  return (
    <div className="iconfooter">
        <div className="boxfooter p-twitter">
          <i className="fa-brands fa-twitter twitter"><a href='https://twitter.com/leanelshark'></a></i>
        </div>
        <div class="boxfooter p-linkedin">
          <i class="fa-brands fa-linkedin-in linkedin"><a href='https://linkedin.com/in/leandromagallanes'></a></i>
        </div>

        <div class="boxfooter p-instagram">
          <i class="fa fa-instagram" id="insta" aria-hidden="true"><a href='https://www.instagram.com/lean_maga'></a></i>
        </div>

        <div class="boxfooter p-whatsapp">
          <i class="fa-brands fa-whatsapp whatsapp"><a href="https://wa.me/qr/ALIPEVGLH5YDO1"></a></i>
        </div>

    </div>
  )
}

export default Iconfooter