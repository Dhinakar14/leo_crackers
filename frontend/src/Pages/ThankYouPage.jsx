import React, { useEffect } from "react";
import { Container, Card } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";


const ThankYouPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { width, height } = useWindowSize();
  const { name, cartItems, total } = location.state || { name: "", cartItems: [], total: 0 };
  
  // Prevent page scroll while this page is visible
  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, []);

  return (
    <div style={{ overflow: 'hidden',}}>
    <Container className="text-center py-5" style={{ overflow: 'hidden' }}>
      {/* 🎆 Firecracker Confetti Effect */}
      <Confetti width={width} height={height} />

      <Card className="p-5 shadow-lg rounded-4">
        <h1 className="fw-bold text-success">🎉 Thank You, {name}!</h1>
        <p className="mt-3 fs-5">Your order has been placed successfully.</p>

        <h4 className="mt-4">🛍️ Order Summary</h4>
        <ul className="list-unstyled">
          {cartItems.map((item, idx) => (
            <li key={idx}>
              {item.name} (x{item.quantity}) - ₹{item.price * item.quantity}
            </li>
          ))}
        </ul>

        <h3 className="fw-bold mt-3">Total: ₹{total}</h3>

       <div className=''>
         <button type="button" className="btn btn-primary mt-4" onClick={() => navigate('/')}>Back to Home</button>
       </div>
      </Card>
    </Container>
    </div>
  );
};

export default ThankYouPage;
