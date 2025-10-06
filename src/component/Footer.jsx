import React from 'react'
import { Container } from 'react-bootstrap'
import { Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";


function Footer() {
  return (
    <div className='footer-main'>
  <Container>
  <Row>
    <Col lg={3} md={6}>
    <div className='footer-schon'>
        <img src="src\assets\image\logo (1).png" alt="" className='footer-icon' />
    </div>
    <div className='footer-para-1'>
        <p>India’s trusted name in premium aluminium doors and windows, blending world-class German engineering with refined Indian craftsmanship.</p>
    </div>
     <div className="icons-footer">
    <i class="fa-brands fa-facebook"></i>
    <i class="fa-brands fa-instagram"></i>
    <i class="fa-brands fa-pinterest"></i>
    <i class="fa-brands fa-linkedin-in"></i>
    </div>
    </Col>
 
    <Col lg={3} md={6}>
          <div className='footer-existence'>
        <h2>Our Existence</h2>
            <ul>
              <li>contact@theschon.com</li>
              <li>+91 9535359481</li>
              <li>+91 7019209490</li>
            </ul>
     </div>
    </Col>
    <Col lg={3} md={6} sm={6}>
    <div className='Quick-Links-3'>
        <h2>Quick Links</h2>
        <ul>
            <li>Our Blogs</li>
            <li>About us</li>
            <li>News</li>
            <li>Contact Us</li>
        </ul>
    </div>
    </Col>

        <Col lg={3} md={6} sm={6}>
    <div className='product'>
        <h2>Products</h2>
        <ul>
            <li>Doors</li>
            <li>Windows</li>
            <li>Railings</li> 
             <li>Glasses</li>
             <li>Cubicles</li>
        </ul>
    </div>
    </Col>
  </Row>
    <div className="footer-bottom">
    <p> All rights reserved.</p>
  </div>
  </Container>
  </div>
  )
}

export default Footer
