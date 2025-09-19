import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import { FaUsers, FaBoxOpen, FaStar, FaTruck } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Maqrquee from './Marquee';

// Swiper CSS
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

const Home = ({ cart, addToCart, removeFromCart }) => {
  // --- Data for Banners and Info Cards ---
  const carouselData = [
    { id: 1, img: '/public/assets/banner4.jpeg' },
    { id: 2, img: '/public/assets/banner1.jpeg' },
    { id: 3, img: '/public/assets/banner2.jpeg' },
    { id: 4, img: '/public/assets/banner3.jpeg' },
  ];

  const infoData = [
    { icon: <FaUsers size={40} />, title: '1K+', subtitle: 'Customers' },
    { icon: <FaBoxOpen size={40} />, title: '150+', subtitle: 'Products' },
    { icon: <FaStar size={40} />, title: '10+', subtitle: 'Brands' },
    { icon: <FaTruck size={40} />, title: 'Home', subtitle: 'Delivery' },
  ];

  // --- Helper function to transform your product data ---
  // This adds a 'price' number and a default 'unit'
  const transformProduct = (product) => ({
    ...product,
    price: parseInt(product.title.replace(/\D/g, ''), 10) || 0,
    unit: '1 Pkt', // You can set a default unit here
    img: product.img, // Use 'img' to match the new card's prop
  });
  
  // --- Restructured Product Data ---
  // All your cracker data is now in one place, organized by sections.
  const crackerSections = [
    {
      title: "Featured Products",
      items: [
        { id: 1, name: "4\" Ganesh Mega Dlx Crackers",  title: 'RS:50' ,img: "public/assets/2 sound.png"},
        { id: 2, name: "4\" Gold Lakshmi Crackers",  title: 'RS:53', img: "public/assets/3 sound.png" },
        { id: 3, name: "4\" Dlx Lakshmi Crackers",  title: 'RS:101', img: "public/assets/lakshmi.png"},
        { id: 4, name: "4\" Lakshmi Crackers",  title: 'RS:29', img: "public/assets/gold lakshmi.png"},
        { id: 5, name: "3 1/2\" Lakshmi Crackers",  title: 'RS:22', img: "public/assets/lakshmi.png" },
        { id: 6, name: "2 3/3\" Kuruvi Crackers",  title: 'RS:29', img: "public/assets/kuruvi.png"},
        { id: 7, name: "4\" Kuruvi Crackers",  title: 'RS:367', img: "public/assets/kuruvi.png" },
        { id: 8, name: "5\" Hulk Crackers",  title: 'RS:115', img: "public/assets/2 sound.png"},
        { id: 9, name: "2 Sound Crackers",  title: 'RS:58', img: "public/assets/3 sound.png"  },
        { id: 10, name: "3 Sound Crackers",  title: 'RS:197', img: "public/assets/3 sound.png" }
      ].map(transformProduct),
    },
    {
      title: "Popular Choices",
      items: [
        { id: 11, name: "7 cm Electric Sparklers",  title: 'RS:29', img: "public/assets/10cm electric.png" },
      { id: 12, name: "7 cm Colour Sparklers",  title: 'RS:17', img: "public/assets/7cm colour.png" },
      { id: 13, name: "7 cm Green Sparklers",  title: 'RS:46', img: "public/assets/10cm green.png" },
      { id: 14, name: "7 cm Red Sparklers",  title: 'RS:24', img: "public/assets/10cm red.png" },
      { id: 15, name: "10 cm Electric Sparklers",  title: 'RS:26', img: "public/assets/15cm electric.png" },
      { id: 16, name: "10 cm Colour Sparklers",  title: 'RS:30', img: "public/assets/10cm colour.png" },
      { id: 17, name: "10 cm Green Sparklers",  title: 'RS:35', img: "public/assets/10cm green.png"  },
      { id: 18, name: "10 cm Red Sparklers",  title: 'RS:39', img: "public/assets/10cm red.png" },
      { id: 19, name: "Rainbow Sparklers (50 pcs)",  title: 'RS:211', img: "public/assets/15cm electric.png" },
      { id: 20, name: "15 cm Electric Sparklers",  title: 'RS:70', img: "public/assets/10cm colour.png" },
      ].map(transformProduct),
    },
    {
      title: "New Arrivals",
      items: [
        { id: 21, name: "Hayagrivar Flowerpots Big (10 pcs)", title:'Rs:103', img: "/public/assets/arabian.png" },
        { id: 22, name: "Hayagrivar Flowerpots Special (10 pcs)", title:'Rs:132', img: "/public/assets/saxony.png" },
        { id: 23, name: "Hayagrivar Flowerpots Giant (10 pcs)", title:'Rs:199', img: "/public/assets/welcome.png" },
        { id: 24, name: "Hayagrivar Flowerpots Colour Koti (10 pcs)", title:'Rs:300', img: "/public/assets/emu.png" },
        { id: 25, name: "Varshini Colour Koti Pink (10 pcs)", title:'Rs:600', img: "/public/assets/waterqueen.png" },
        { id: 26, name: "Metro Colour Koti DLX (10 pcs)", title:'Rs:1080', img: "/public/assets/papcorn.png" },
        { id: 27, name: "Metro Mega Colour Koti Super DLX (10 pcs)", title:'Rs:840', img: "/public/assets/naragasura-1.png" },
        { id: 28, name: "Lassi (5 pcs)", title:'Rs:156', img: "/public/assets/arabian.png" },
        { id: 29, name: "Tricolour Pots (5 pcs)", title:'Rs:348', img: "/public/assets/waterqueen.png" },
        { id: 30, name: "Mayajal 5 in 1 (5 pcs)", title:'Rs:696', img: "/public/assets/chitu.png" },
      ].map(transformProduct),
    },
    // Add other sections (Cracker4, Cracker5) here in the same format
  ];

  return (
    <div>
      <Maqrquee />

      {/* --- Hero Carousel --- */}
      <Carousel interval={5000} className="hero-carousel" style={{ height: '500px', overflow: 'hidden', marginBottom: '2rem' }}>
        {carouselData.map((item) => (
          <Carousel.Item key={item.id}>
            <img
              className="d-block w-100"
              src={item.img}
              alt={`Slide ${item.id}`}
              style={{ height: '500px', objectFit: 'cover' }}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      {/* --- Info Banner Section --- */}
      <div className='banner-section'>
        <Container>
          <Row>
            {infoData.map((item, index) => (
              <Col md={3} className="mb-4" key={index}>
                <Card className="text-center text-white bg-none custom-card">
                  <Card.Body>
                    <div className="mb-3">{item.icon}</div>
                    <Card.Title className="fw-bold fs-3">{item.title}</Card.Title>
                    <Card.Text className='card-text fs-5 fw-semibold'>{item.subtitle}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* --- Dynamic Product Sections with Swiper --- */}
      {crackerSections.map((section, index) => (
        <section key={index} style={{ background: '#fff', fontFamily: 'sans-serif', padding: '2rem 0' }}>
          <Container>
            <h2 className="fw-bold mb-4 text-center" style={{ color: '#222' }}>
              {section.title}
            </h2>
            <Swiper
              loop={true}
              autoplay={{ delay: 4000 + index * 500, disableOnInteraction: false }}
              slidesPerView={1}
              spaceBetween={30}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              navigation
              modules={[Autoplay, Navigation]}
              style={{ paddingBottom: '2rem' }}
            >
              {section.items.map((product) => (
                <SwiperSlide key={product.id}>
                  <Card className="h-100 shadow-sm product-card">
                    <div className="position-relative">
                      <Card.Img
                        variant="top"
                        src={product.img}
                        onError={(e) => {
                          e.target.src = `https://via.placeholder.com/200x200/FF6B6B/FFFFFF?text=No+Img`;
                        }}
                        style={{ height: '200px', objectFit: 'cover' }}
                      />
                      <div className="position-absolute top-0 start-0 bg-warning text-dark px-2 py-1 small">
                        {section.title}
                      </div>
                    </div>
                    <Card.Body className="d-flex flex-column text-center">
                      <Card.Title className="h6 mb-2" style={{ minHeight: '48px' }}>
                        {product.name}
                      </Card.Title>
                      <Card.Text className="mb-2">
                        <small className="text-muted">Unit: {product.unit}</small>
                      </Card.Text>

                      <Card.Text className="mb-3">
                        <del className="text-muted me-2">₹{product.price * 2}</del>
                        <strong className="text-success fs-5">₹{product.price}</strong>
                      </Card.Text>

                      <div className="mt-auto">
                        {cart?.[product.id] ? (
                          <div className="d-flex justify-content-center align-items-center">
                            <button
                              className="btn btn-outline-danger btn-sm"
                              onClick={() => removeFromCart(product.id)}
                            >
                              −
                            </button>
                            <span className="mx-3">{cart[product.id].quantity}</span>
                            <button
                              className="btn btn-outline-success btn-sm"
                              onClick={() => addToCart(product)}
                            >
                              +
                            </button>
                          </div>
                        ) : (
                          <button
                            className="btn btn-primary w-100"
                            onClick={() => addToCart(product)}
                          >
                            Add to Cart
                          </button>
                        )}
                      </div>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </Container>
        </section>
      ))}
      
      {/* --- Add CSS for card hover effect --- */}
      <style jsx global>{`
        .product-card {
          transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
        }
        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1) !important;
        }
      `}</style>
    </div>
  );
};

export default Home;