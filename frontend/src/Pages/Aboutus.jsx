import React from 'react'
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import Maqrquee from './Marquee'
const Aboutus = () => {
  return (
    <div>
      <Maqrquee />
          <Container className="my-5">
      {/* Heading */}
      <Row className="mb-4 text-center">
        <Col>
          <h1 className="fw-bold text-warning">About Us – Leo Crackers</h1>
          <p className="lead">
            Welcome to <strong>Leo Crackers – A Spark from the Cracker Capital!</strong>
          </p>
        </Col>
      </Row>

      {/* Intro Section */}
      <Row className="mb-4">
        <Col md={{ span: 8, offset: 1 }} className='mx-auto'>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <p>
                Born in <strong>Sivakasi</strong>, famously known as{" "}
                <em>Kutty Japan</em> for its world-class firework production,
                Leo Crackers is proud to carry forward the city’s rich legacy
                with a steadfast commitment to{" "}
                <strong>quality, safety, and affordability</strong>.
              </p>
              <p>
                We offer an <strong>extensive range of fireworks</strong> tailored
                for every celebration—from intimate family gatherings, to lavish
                weddings, and energetic corporate events.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Our Promise */}
      <Row className="mb-4">
        <Col md={{ span: 8, offset: 2}}>
          <Card className="border-warning">
            <Card.Header className="bg-warning text-dark fw-bold">
              Our Promise
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item><strong>Manufactured with strict safety guidelines:</strong>{" "}
                We adhere to rigorous safety standards, prioritizing customer well-being.
              </ListGroup.Item>
              <ListGroup.Item><strong>Quality-tested for performance:</strong> Each product
                undergoes precise quality checks to ensure brilliance and reliability.
              </ListGroup.Item>
              <ListGroup.Item><strong>Competitively priced:</strong> Our products are
                thoughtfully priced to suit every budget and customer segment.
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={8} className="text-center mx-auto">
        <p className="fw-semibold">As per 2018 supreme court order, online sale of firecrackers are not permitted! We value our customers and at the same time, respect jurisdiction. We request you to add your products to the cart and submit the required crackers through the enquiry button. We will contact you within 24 hrs and confirm the order through WhatsApp or phone call. Please add and submit your enquiries and enjoy your Diwali with Leo Crackers. Leo Crackers as a company following 100% legal & statutory compliances and all our shops, go-downs are maintained as per the explosive acts. We send the parcels through registered and legal transport service providers as like every other major companies in Sivakasi is doing so.</p>
               </Col></Row>

      {/* Closing Statement */}
      <Row>
        <Col md={8} className="text-center mx-auto">
          <p className="fw-semibold">
            With a widespread customer base across Tamil Nadu, Karnataka, Andhra Pradesh, 
            and Kerala, we also cater to bulk orders throughout India.
          </p>
          <h5 className="mt-3 text-success">
            🎉 Celebrate with confidence. Celebrate with Leo. 🎉
          </h5>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Aboutus
