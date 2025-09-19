import React, { useState, useEffect } from "react";
import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems, total } = location.state || { cartItems: [], total: 0 };

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
    district: "",
    pincode: "",
  });

  const [errors, setErrors] = useState({});
  const [showAllItems, setShowAllItems] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Check if cart is empty and redirect if necessary
  useEffect(() => {
    if (!cartItems || cartItems.length === 0 || total <= 0) {
      // Create custom red alert
      const alertDiv = document.createElement('div');
      alertDiv.style.cssText = `
        position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
        background: #dc3545; color: white; padding: 15px 25px;
        border-radius: 8px; box-shadow: 0 4px 12px rgba(220, 53, 69, 0.3);
        z-index: 9999; font-weight: bold; text-align: center;
      `;
      alertDiv.innerHTML = '❌ Your cart is empty! Please add items to your cart first.';
      document.body.appendChild(alertDiv);
      
      setTimeout(() => {
        document.body.removeChild(alertDiv);
        navigate("/cart");
      }, 3000);
      return;
    }
  }, [cartItems, total, navigate]);

  // If cart is empty, don't render the form
  if (!cartItems || cartItems.length === 0 || total <= 0) {
    return (
      <Container className="py-5 text-center">
        <Alert variant="danger" style={{ backgroundColor: '#dc3545', color: '#fff', borderColor: '#dc3545' }}>
          <h4>🛒 Cart is Empty</h4>
          <p>You need to add items to your cart before checkout.</p>
          <Button variant="light" onClick={() => navigate("/cart")}>
            Go to Cart
          </Button>
        </Alert>
      </Container>
    );
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error on typing
  };

  // ✅ Validation logic
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "⚠️ Full name is required";
    } else if (!/^[a-zA-Z\s]{2,}$/.test(formData.name)) {
      newErrors.name = "⚠️ Please enter a valid name (only letters, min 2 chars)";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "⚠️ Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = "⚠️ Enter a valid 10-digit mobile number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "⚠️ Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "⚠️ Enter a valid email address";
    }

    if (!formData.district.trim()) {
      newErrors.district = "⚠️ District is required";
    } else if (formData.district.length < 2) {
      newErrors.district = "⚠️ District must have at least 2 characters";
    }

    if (!formData.address.trim()) {
      newErrors.address = "⚠️ Complete address is required";
    } else if (formData.address.length < 5) {
      newErrors.address = "⚠️ Address must be at least 5 characters";
    }

    if (!formData.pincode.trim()) {
      newErrors.pincode = "⚠️ Pincode is required";
    } else if (!/^[0-9]{6}$/.test(formData.pincode)) {
      newErrors.pincode = "⚠️ Enter a valid 6-digit pincode";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (!validate()) return;

    // Double-check cart items before submitting
    if (!cartItems || cartItems.length === 0 || total <= 0) {
      // Create custom red alert
      const alertDiv = document.createElement('div');
      alertDiv.style.cssText = `
        position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
        background: #dc3545; color: white; padding: 15px 25px;
        border-radius: 8px; box-shadow: 0 4px 12px rgba(220, 53, 69, 0.3);
        z-index: 9999; font-weight: bold; text-align: center;
      `;
      alertDiv.innerHTML = '❌ Your cart is empty! Please add items to your cart first.';
      document.body.appendChild(alertDiv);
      
      setTimeout(() => {
        document.body.removeChild(alertDiv);
        navigate("/cart");
      }, 3000);
      return;
    }

    setIsSubmitting(true);
    try {
      console.log("📦 Sending order data:", { ...formData, items: cartItems, total });
      
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000);

      const response = await fetch("https://leo-crackers.onrender.com/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, items: cartItems, total }),
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      const data = await response.json();

      if (response.ok) {
        // ✅ Navigate to thank-you page and pass order details
        navigate("/thank-you", { state: { name: formData.name, cartItems, total } });
      } else {
        // Show specific error message from API with red styling
        const alertDiv = document.createElement('div');
        alertDiv.style.cssText = `
          position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
          background: #dc3545; color: white; padding: 15px 25px;
          border-radius: 8px; box-shadow: 0 4px 12px rgba(220, 53, 69, 0.3);
          z-index: 9999; font-weight: bold; text-align: center;
        `;
        alertDiv.innerHTML = `❌ ${data.message || "Failed to place order. Try again."}`;
        document.body.appendChild(alertDiv);
        
        setTimeout(() => {
          document.body.removeChild(alertDiv);
        }, 4000);
        
        if (data.received) {
          console.log("API received fields:", data.received);
        }
      }
    } catch (error) {
      console.error("Network error:", error);
      // Show network error with red styling
      const alertDiv = document.createElement('div');
      alertDiv.style.cssText = `
        position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
        background: #dc3545; color: white; padding: 15px 25px;
        border-radius: 8px; box-shadow: 0 4px 12px rgba(220, 53, 69, 0.3);
        z-index: 9999; font-weight: bold; text-align: center;
      `;
      alertDiv.innerHTML = error?.name === 'AbortError'
        ? "❌ Request timed out. Please try again."
        : "❌ Network error. Please check if the server is running and try again.";
      document.body.appendChild(alertDiv);
      
      setTimeout(() => {
        document.body.removeChild(alertDiv);
      }, 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ 
      backgroundColor: '#fff',
      minHeight: '100vh',
      padding: '2rem 0'
    }}>
      <Container>
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3" style={{ color: '#2c3e50' }}>
            🛒 Secure Checkout
          </h1>
          <p className="lead mb-3" style={{ color: '#6c757d' }}>
            Complete your order with confidence
          </p>
          <div className="rounded-pill px-4 py-2 d-inline-block shadow" style={{ 
            backgroundColor: '#f8f9fa',
            border: '2px solid #e9ecef',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Animated border line */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '2px',
              background: 'linear-gradient(90deg, transparent,rgb(160, 194, 250), transparent)',
              animation: 'borderSlide 2s linear infinite'
            }}></div>
            <div style={{
              position: 'absolute',
              bottom: 0,
              right: '-100%',
              width: '100%',
              height: '2px',
              background: 'linear-gradient(90deg, transparent,rgb(160, 194, 250), transparent)',
              animation: 'borderSlide 2s linear infinite 1s'
            }}></div>
            <div style={{
              position: 'absolute',
              top: '-100%',
              right: 0,
              width: '2px',
              height: '100%',
              background: 'linear-gradient(90deg, transparent,rgb(160, 194, 250), transparent)',
              animation: 'borderSlideVertical 2s linear infinite 0.5s'
            }}></div>
            <div style={{
              position: 'absolute',
              bottom: '-100%',
              left: 0,
              width: '2px',
              height: '100%',
              background: 'linear-gradient(90deg, transparent,rgb(160, 194, 250), transparent)',
              animation: 'borderSlideVertical 2s linear infinite 1.5s'
            }}></div>
            
            <h4 className="fw-bold mb-0" style={{ color:' #D97706', position: 'relative', zIndex: 1 }}>

              Total: ₹{total}
            </h4>
          </div>
        </div>

        <Row className="justify-content-center">
          <Col lg={10}>
            <Row className="g-4">
              {/* Customer Information Form */}
              <Col md={6}>
                <div className="rounded-4 shadow-lg p-4 h-100" style={{ 
                  background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
                  border: '1px solid #e9ecef'
                }}>
                  <div className="d-flex align-items-center mb-4">
                    <div className="rounded-circle p-3 me-3" style={{ 
                      background: 'linear-gradient(135deg, #007bff, #0056b3)' 
                    }}>
                      <i className="fas fa-user text-white fs-4"></i>
                    </div>
                    <div>
                      <h3 className="fw-bold mb-1" style={{ color: '#2c3e50' }}>Customer Information</h3>
                      <p className="mb-0" style={{ color: '#6c757d' }}>Please provide your details</p>
                    </div>
                  </div>

                  <Form onSubmit={handleSubmit} noValidate>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-4">
                          <Form.Label className="fw-semibold" style={{ color: '#495057' }}>
                            <i className="fas fa-user me-2" style={{ color: '#007bff' }}></i>Full Name
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            isInvalid={!!errors.name}
                            className="rounded-3 py-3"
                            style={{ 
                              border: '2px solid #e9ecef',
                              backgroundColor: '#fff',
                              fontSize: '1rem'
                            }}
                            placeholder="Enter your full name"
                          />
                          <Form.Control.Feedback type="invalid" style={{ 
                            color: '#dc3545', 
                            fontSize: '0.9rem',
                            fontWeight: '500',
                            backgroundColor: '#f8d7da',
                            border: '1px solid #f5c6cb',
                            borderRadius: '4px',
                            padding: '8px 12px',
                            marginTop: '5px'
                          }}>
                            {errors.name}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group className="mb-4">
                          <Form.Label className="fw-semibold" style={{ color: '#495057' }}>
                            <i className="fas fa-phone me-2" style={{ color: '#007bff' }}></i>Mobile Number
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            isInvalid={!!errors.mobile}
                            className="rounded-3 py-3"
                            style={{ 
                              border: '2px solid #e9ecef',
                              backgroundColor: '#fff',
                              fontSize: '1rem'
                            }}
                            placeholder="Enter 10-digit mobile number"
                          />
                          <Form.Control.Feedback type="invalid" style={{ 
                            color: '#dc3545', 
                            fontSize: '0.9rem',
                            fontWeight: '500',
                            backgroundColor: '#f8d7da',
                            border: '1px solid #f5c6cb',
                            borderRadius: '4px',
                            padding: '8px 12px',
                            marginTop: '5px'
                          }}>
                            {errors.mobile}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-4">
                          <Form.Label className="fw-semibold" style={{ color: '#495057' }}>
                            <i className="fas fa-envelope me-2" style={{ color: '#007bff' }}></i>Email Address
                          </Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            isInvalid={!!errors.email}
                            className="rounded-3 py-3"
                            style={{ 
                              border: '2px solid #e9ecef',
                              backgroundColor: '#fff',
                              fontSize: '1rem'
                            }}
                            placeholder="Enter your email"
                          />
                          <Form.Control.Feedback type="invalid" style={{ 
                            color: '#dc3545', 
                            fontSize: '0.9rem',
                            fontWeight: '500',
                            backgroundColor: '#f8d7da',
                            border: '1px solid #f5c6cb',
                            borderRadius: '4px',
                            padding: '8px 12px',
                            marginTop: '5px'
                          }}>
                            {errors.email}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group className="mb-4">
                          <Form.Label className="fw-semibold" style={{ color: '#495057' }}>
                            <i className="fas fa-map-marker-alt me-2" style={{ color: '#007bff' }}></i>District
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="district"
                            value={formData.district}
                            onChange={handleChange}
                            isInvalid={!!errors.district}
                            className="rounded-3 py-3"
                            style={{ 
                              border: '2px solid #e9ecef',
                              backgroundColor: '#fff',
                              fontSize: '1rem'
                            }}
                            placeholder="Enter your district"
                          />
                          <Form.Control.Feedback type="invalid" style={{ 
                            color: '#dc3545', 
                            fontSize: '0.9rem',
                            fontWeight: '500',
                            backgroundColor: '#f8d7da',
                            border: '1px solid #f5c6cb',
                            borderRadius: '4px',
                            padding: '8px 12px',
                            marginTop: '5px'
                          }}>
                            {errors.district}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-4">
                      <Form.Label className="fw-semibold" style={{ color: '#495057' }}>
                        <i className="fas fa-home me-2" style={{ color: '#007bff' }}></i>Complete Address
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        isInvalid={!!errors.address}
                        className="rounded-3"
                        style={{ 
                          border: '2px solid #e9ecef',
                          backgroundColor: '#fff',
                          fontSize: '1rem'
                        }}
                        placeholder="Enter your complete address"
                      />
                      <Form.Control.Feedback type="invalid" style={{ 
                        color: '#dc3545', 
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        backgroundColor: '#f8d7da',
                        border: '1px solid #f5c6cb',
                        borderRadius: '4px',
                        padding: '8px 12px',
                        marginTop: '5px'
                      }}>
                        {errors.address}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label className="fw-semibold" style={{ color: '#495057' }}>
                        <i className="fas fa-map-pin me-2" style={{ color: '#007bff' }}></i>Pincode
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        isInvalid={!!errors.pincode}
                        className="rounded-3 py-3"
                        style={{ 
                          border: '2px solid #e9ecef',
                          backgroundColor: '#fff',
                          fontSize: '1rem'
                        }}
                        placeholder="Enter 6-digit pincode"
                      />
                      <Form.Control.Feedback type="invalid" style={{ 
                        color: '#dc3545', 
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        backgroundColor: '#f8d7da',
                        border: '1px solid #f5c6cb',
                        borderRadius: '4px',
                        padding: '8px 12px',
                        marginTop: '5px'
                      }}>
                        {errors.pincode}
                      </Form.Control.Feedback>
                    </Form.Group>

                    {/* Place Order Button */}
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-100 rounded-pill py-3 fw-bold"
                      style={{ 
                        fontSize: '1.1rem',
                        background: 'linear-gradient(135deg, #28a745, #20c997)',
                        border: 'none',
                        color: '#fff',
                        boxShadow: '0 4px 15px rgba(40, 167, 69, 0.3)',
                        transition: 'all 0.3s ease'
                      }}
                      disabled={isSubmitting}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 6px 20px rgba(40, 167, 69, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 4px 15px rgba(40, 167, 69, 0.3)';
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Processing...
                        </>
                      ) : (
                        <>
                          <i className="fas fa-credit-card me-2"></i>
                          Place Order Securely
                        </>
                      )}
                    </Button>
                  </Form>
                </div>
              </Col>

              {/* Order Summary */}
              <Col md={6}>
                <div className="rounded-4 shadow-lg p-4 h-100" style={{ 
                  background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
                  border: '1px solid #e9ecef'
                }}>
                  <div className="d-flex align-items-center mb-4">
                    <div className="rounded-circle p-3 me-3" style={{ 
                      background: 'linear-gradient(135deg, #28a745, #20c997)' 
                    }}>
                      <i className="fas fa-shopping-bag text-white fs-4"></i>
                    </div>
                    <div>
                      <h3 className="fw-bold mb-1" style={{ color: '#2c3e50' }}>Order Summary</h3>
                      <p className="mb-0" style={{ color: '#6c757d' }}>{cartItems.length} items in your cart</p>
                    </div>
                  </div>

                  {cartItems.length > 0 ? (
                    <>
                      <div className="mb-4">
                        {(showAllItems ? cartItems : cartItems.slice(0, 3)).map((item, index) => (
                          <div key={item.id || item.sNo} className="d-flex align-items-center justify-content-between p-3 mb-3 rounded-3" style={{ 
                            backgroundColor: '#f8f9fa',
                            border: '1px solid #e9ecef',
                            transition: 'all 0.3s ease'
                          }}>
                            <div className="d-flex align-items-center">
                              <div className="rounded-circle p-2 me-3 text-white fw-bold" style={{ 
                                minWidth: '40px', 
                                height: '40px', 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center',
                                background: 'linear-gradient(135deg, #007bff, #0056b3)'
                              }}>
                                {index + 1}
                              </div>
                              <div>
                                <h6 className="fw-bold mb-1" style={{ color: '#2c3e50' }}>{item.name}</h6>
                                <small style={{ color: '#6c757d' }}>Quantity: {item.quantity}</small>
                              </div>
                            </div>
                            <div className="text-end">
                              <h6 className="fw-bold mb-0" style={{ color: '#28a745' }}>₹{item.price * item.quantity}</h6>
                              <small style={{ color: '#6c757d' }}>₹{item.price} each</small>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Show More/Less Button */}
                      {cartItems.length > 3 && (
                        <div className="text-center mb-4">
                          <Button 
                            className="rounded-pill px-4"
                            onClick={() => setShowAllItems(!showAllItems)}
                            style={{
                              background: 'transparent',
                              border: '2px solid #007bff',
                              color: '#007bff',
                              fontWeight: '600',
                              transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.background = '#007bff';
                              e.target.style.color = '#fff';
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.background = 'transparent';
                              e.target.style.color = '#007bff';
                            }}
                          >
                            <i className={`fas fa-${showAllItems ? 'chevron-up' : 'chevron-down'} me-2`}></i>
                            {showAllItems ? 'Show Less' : `Show More (${cartItems.length - 3} more items)`}
                          </Button>
                        </div>
                      )}

                      {/* Total Section */}
                      <div className="bg-gradient rounded-3 p-4 mb-4" style={{ background: 'linear-gradient(135deg, #28a745, #20c997)' }}>
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h5 className="fw-bold mb-1 text-dark">Total Amount</h5>
                            <small className="text-dark">Including all items</small>
                          </div>
                          <div className="text-end">
                            <h3 className="fw-bold mb-0 text-dark">₹{total}</h3>
                            <small className="text-dark">{cartItems.length} items</small>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Alert variant="danger" className="rounded-3" style={{ backgroundColor: '#dc3545', color: '#fff', borderColor: '#dc3545' }}>
                      <i className="fas fa-exclamation-triangle me-2"></i>
                      No items in cart! Please add items to your cart first.
                    </Alert>
                  )}
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CheckoutPage;
