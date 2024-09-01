

import './Footer.css'
import { Col, Row } from 'react-bootstrap'

function Footer() {
  return (
    <>
  
    <div className='container'>
    <hr />
    </div>
    <Row className='mt-4 mb-5'>
      <Col lg={2} className='ps-4 ms-4 d-flex  '>
      <img className='ms-4 ps-4 mt-1' src="https://img.icons8.com/?size=100&id=3685&format=png&color=000000" height='20px' alt="" />
      <select className='ms-2' name="" id="" >
        <option  value="">English</option>
      </select>
      </Col>
      <Col lg={2}>
      </Col>
      <Col lg={6} className='container'>
      <div className=' d-flex flex-row-reverse  '>
      <img src="https://www.ilovepdf.com/img/svg_icons/tiktok.svg" className='footer_icon me-1'  height='22px' alt="" />
      <img src="https://www.ilovepdf.com/img/svg_icons/instagram.svg" className='footer_icon me-2'  height='22px' alt="" />
      <img src="https://www.ilovepdf.com/img/svg_icons/linkedin.svg" className='footer_icon me-2'  height='22px' alt="" />
      <img src="https://www.ilovepdf.com/img/svg_icons/facebook.svg" className='footer_icon me-2'  height='22px' alt="" />
      <img src="https://www.ilovepdf.com/img/svg_icons/twitter.svg" className='footer_icon me-2'  height='22px' alt="" />
      <h6 className='me-4'>© iLovePDF 2024 ® - Your PDF Editor</h6>

    </div>
      </Col>
    </Row>
    
    </>
  )
}

export default Footer