import React from 'react';
import Marquee from 'react-fast-marquee';
import { Container } from 'react-bootstrap'; 
import '../App.css'
const AnnouncementMarquee = () => {
  return (
    <div style={{ backgroundColor: '#fff3cd', color: '#856404', padding: '10px 0', borderBottom: '1px solid #ffeeba' }}>
      <Container>
        <Marquee
          speed={50} 
          gradient={false}  
          pauseOnHover={true} 
          style={{ fontSize: '1.1em', fontWeight: 'bold' }} 
        >
          <span className="me-5">✨ Daily Offers: Get 50% off on all Sparklers!</span>
          <span className="me-5">🚚 Free Shipping on orders above ₹10,000 across Madurai!</span>
          <span className="me-5">🎉 New Arrivals: Check out our special festive crackers!</span>
          <span className="me-5">📞 Contact us at +91 74186 28592 for bulk orders.</span>
        </Marquee>
      </Container>
    </div>
  );
};

export default AnnouncementMarquee;