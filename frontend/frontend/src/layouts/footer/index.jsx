import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-white  py-4">
      <Container>
        <Row>
          <Col md={4}>
          <img
                src="src/assets/leo.png"
                alt="leo Crackers Logo"
                width="150"
                className="d-inline-block align-top me-2"
              />  
          </Col>
          <Col md={4}>
            <h5>Explore Us</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white fw-semibold pb-2 text-decoration-none">Home</a></li>
              <li><a href="/product" className="text-white fw-semibold pb-2 text-decoration-none">Product</a></li>
              <li><a href="/price" className="text-white fw-semibold pb-2 text-decoration-none">Price List</a></li>
              <li><a href="/about" className="text-white fw-semibolde pb-2 text-decoration-none">About</a></li>
              
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <p>Email: rgp2009ag@gmail.com<br />Phone: 7418628592 / 9791370913<br />Address: 4/724, Pasumai Nagar, Sivakasi, Tamil Nadu - 626189 India</p>
            
          </Col>
        </Row>
        <hr className="border-light" />
        <p className="text-center mb-0">&copy; {new Date().getFullYear()} Leo Crackers. All Rights Reserved.</p>
      </Container>
    </footer>
    </div>
  )
}

export default Footer
