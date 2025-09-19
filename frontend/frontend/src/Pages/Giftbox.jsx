import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const GiftBoxPage = () => {
  const plans = [
    {
      title: "CLASSIC",
      varieties: "25+ Varieties",
      items: "35+ Items",
      price: "₹2700",
      color: "text-primary"
    },
    {
      title: "PREMIUM",
      varieties: "30+ Varieties",
      items: "50+ Items",
      price: "₹3600",
      color: "text-pink"
    },
    {
      title: "ELITE",
      varieties: "40+ Varieties",
      items: "55+ Items",
      price: "₹4500",
      color: "text-danger"
    },
    {
      title: "GOLD",
      varieties: "50+ Varieties",
      items: "65+ Items",
      price: "₹6300",
      color: "text-success"
    }
  ];

  return (
    <Container className="my-5">
      <Row className="align-items-center">
        {/* Left Side - Gift Box Description */}
        <Col lg={6} className="mb-4">
          <h2 className="fw-bold">Our Special Gift Boxes 🎁</h2>
          <p>✨ Perfectly crafted gift packs for every occasion.</p>
          <p>🎉 Choose from Classic, Premium, Elite, or Gold options.</p>
          <p>🍬 Filled with varieties and delightful items.</p>
          <p>💝 Surprise your loved ones with happiness.</p>
          <p>⚡ Order now and make celebrations memorable!</p>
        </Col>

        {/* Right Side - Gift Box Cards */}
        <Col md={6}>
          <Row>
            {plans.map((plan, index) => (
              <Col key={index} lg={6} className="mb-4">
                <Card className="shadow text-center p-3">
                  <h4 className={plan.color}>{plan.title}</h4>
                  <p><b>{plan.varieties}</b></p>
                  <p><b>{plan.items}</b></p>
                  <hr />
                  <h5 className={plan.color}>only {plan.price}</h5>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default GiftBoxPage;
