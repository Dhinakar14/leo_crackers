import React, { useState } from "react";
import { Container, Row, Col, Button, Table, Image, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CartPage = ({ cart, addToCart, removeFromCart, removeAllFromCart }) => {
  const cartItems = Object.values(cart);
  const navigate = useNavigate();
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');
  
  // Debug: Log cart items to see their structure
  console.log('Cart items:', cartItems);
  console.log('Cart object:', cart);
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleRemoveFromCart = (itemId) => {
    const item = cartItems.find(item => (item.id || item.sNo) === itemId);
    if (item && item.quantity > 1) {
      removeFromCart(itemId);
      setAlertMessage(`Quantity decreased for ${item.name}. Current quantity: ${item.quantity - 1}`);
      setAlertType('warning');
    } else {
      removeFromCart(itemId);
      setAlertMessage(`${item?.name || 'Item'} removed from cart`);
      setAlertType('danger');
    }
    setTimeout(() => {
      setAlertMessage('');
      setAlertType('');
    }, 3000);
  };

  const handleRemoveAllFromCart = (itemId) => {
    const item = cartItems.find(item => (item.id || item.sNo) === itemId);
    removeAllFromCart(itemId);
    setAlertMessage(`${item?.name || 'Item'} completely removed from cart`);
    setAlertType('danger');
    setTimeout(() => {
      setAlertMessage('');
      setAlertType('');
    }, 3000);
  };

  const handleAddToCart = (item) => {
    addToCart(item);
    setAlertMessage(`${item.name} added to cart! Current quantity: ${(cart[item.id || item.sNo]?.quantity || 0) + 1}`);
    setAlertType('success');
    setTimeout(() => {
      setAlertMessage('');
      setAlertType('');
    }, 3000);
  };

  return (
    <div style={{ 
      backgroundColor: '#fff',
      minHeight: '100vh',
      padding: '2rem 0'
    }}>
      <Container className="py-5">
        <h2 className="fw-bold mb-4">🛒 Your Cart</h2>
        
        {/* Dynamic Alert Messages */}
        {alertMessage && (
          <Alert 
            variant={alertType} 
            className="rounded-3 mb-4" 
            style={{ 
              backgroundColor: alertType === 'danger' ? '#dc3545' : 
                              alertType === 'warning' ? '#ffc107' : '#d4edda',
              color: alertType === 'danger' ? '#fff' : 
                     alertType === 'warning' ? '#000' : '#155724',
              borderColor: alertType === 'danger' ? '#dc3545' : 
                          alertType === 'warning' ? '#ffc107' : '#c3e6cb',
              fontSize: '1rem',
              fontWeight: '500'
            }}
          >
            <i className={`fas fa-${alertType === 'danger' ? 'exclamation-triangle' : 
                            alertType === 'warning' ? 'exclamation-circle' : 'check-circle'} me-2`}></i>
            {alertMessage}
          </Alert>
        )}
      {cartItems.length === 0 ? (
        <Alert variant="danger" className="rounded-3 text-center py-4" style={{ 
          backgroundColor: '#dc3545', 
          color: '#fff', 
          borderColor: '#dc3545',
          fontSize: '1.1rem',
          fontWeight: '500'
        }}>
          <i className="fas fa-shopping-cart me-3 fs-4"></i>
          <strong>Your cart is empty!</strong>
          <br />
          <small className="mt-2 d-block">Add some products to your cart to continue shopping.</small>
          <Button 
            variant="light" 
            className="mt-3 rounded-pill px-4"
            onClick={() => navigate('/price')}
          >
            <i className="fas fa-plus me-2"></i>
            Start Shopping
          </Button>
        </Alert>
      ) : (
        <>
       <Table responsive bordered hover className="align-middle">
  <thead className="table-light">
    <tr>
      <th>Product</th>
      <th className="text-center">Price</th>
      <th className="text-center">Quantity</th>
      <th className="text-center">Actions</th>
    </tr>
  </thead>
  <tbody>
    {cartItems.map((item) => {
      const itemId = item.id || item.sNo;
      return (
        <tr key={itemId}>
          <td>
            <Row className="align-items-center">
              <Col xs={9} md={10}>
                <span className="fw-semibold">{item.name}</span>
              </Col>
            </Row>
          </td>

          {/* ✅ Price with old price strikethrough */}
          <td className="text-center">
            <del className="text-muted me-2">₹{item.price * 2}</del>
            <span className="fw-semibold text-success">₹{item.price}</span>
          </td>

          <td className="text-center">
            <div className="d-flex justify-content-center align-items-center">
              <Button
                variant="outline-danger"
                size="sm"
                onClick={() => handleRemoveFromCart(itemId)}
              >
                −
              </Button>
              <span className="mx-2">{item.quantity}</span>
              <Button
                variant="outline-success"
                size="sm"
                onClick={() => handleAddToCart(item)}
              >
                +
              </Button>
            </div>
          </td>

          {/* ✅ Subtotal with old price */}
    

          <td className="text-center">
            <Button
              variant="outline-dark"
              size="sm"
              onClick={() => handleRemoveAllFromCart(itemId)}
            >
              Remove
            </Button>
          </td>
        </tr>
      );
    })}
  </tbody>
</Table>

{/* ✅ Total with strikethrough */}
<div className="d-flex justify-content-end">
  <h4 className="fw-bold d-flex"><div class="mx-2">Total:</div>
    <del className="text-muted me-2">₹{getTotalPrice() * 2}</del>
    <span className="text-success">₹{getTotalPrice()}</span>
  </h4>
</div>


          
          {/* Success Alert for Cart Items */}
          <Alert variant="success" className="rounded-3 mt-3" style={{ 
            backgroundColor: '#d4edda', 
            color: '#155724', 
            borderColor: '#c3e6cb',
            fontSize: '1rem'
          }}>
            <i className="fas fa-check-circle me-2"></i>
            <strong>Great!</strong> You have {cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in your cart. Ready to checkout?
          </Alert>
          
          <div className="d-flex justify-content-end mt-3">
            <Button
              variant="success"
              size="lg"
              className="rounded-pill px-4 py-3 fw-bold"
              style={{ 
                fontSize: '1.1rem',
                background: 'linear-gradient(135deg, #28a745, #20c997)',
                border: 'none',
                boxShadow: '0 4px 15px rgba(40, 167, 69, 0.3)'
              }}
              onClick={() =>
                navigate("/checkout", {
                  state: { cartItems, total: getTotalPrice() }
                })
              }
            >
              <i className="fas fa-credit-card me-2"></i>
              Proceed place to order
            </Button>
          </div>
        </>
      )}
      </Container>
    </div>
  );
};

export default CartPage;
