import { Navbar, Nav, Container, Form, FormControl, Button, Badge } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
=======
import logo from "../../../public/assets/leo.png"
>>>>>>> 04901bd (first commit)

const Header = ({ cart, addToCart, removeFromCart }) => {
const totalItems = Object.values(cart || {}).reduce(
  (sum, item) => sum + (item.quantity || 0),
  0
);



  return (
    <header className='header'>

       
  <Navbar bg="light" expand="lg" className="py-1 shadow-sm header">
  <Container>
    {/* Logo */}
    <LinkContainer to="/">
      <Navbar.Brand>
<<<<<<< HEAD
        <img
          src="public/assets/leo.png"
          alt="leo Crackers Logo"
          width="150"
          className="d-inline-block align-top me-2"
        />
=======
      <img src={logo} alt="logo" width="100" className="d-inline-block align-top me-2" />
>>>>>>> 04901bd (first commit)
      </Navbar.Brand>
    </LinkContainer>

    {/* Cart icon for mobile (outside toggle, always visible) */}
    <Nav className="d-lg-none">
      <LinkContainer to="/cart">
        <Nav.Link className="position-relative text-light fw-bold">
          <FaShoppingCart size={22} />
          {totalItems > 0 && (
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark"
              style={{ fontSize: "0.7rem" }}
            >
              {totalItems}
            </span>
          )}
        </Nav.Link>
      </LinkContainer>
    </Nav>

    {/* Toggle for mobile */}
    <Navbar.Toggle aria-controls="basic-navbar-nav" />

    {/* Collapsible links */}
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto">
        <LinkContainer to="/">
          <Nav.Link className="text-white fw-semibold">Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/product">
          <Nav.Link className="text-white fw-semibold">Product</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/price">
          <Nav.Link className="text-white fw-semibold">Pricelist</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/aboutus">
          <Nav.Link className="text-white fw-semibold">About Us</Nav.Link>
        </LinkContainer>
      </Nav>

      {/* Cart icon for desktop (inside collapse, right-aligned) */}
      <Nav className="ms-lg-auto d-none d-lg-flex">
        <LinkContainer to="/cart">
          <Nav.Link className="position-relative text-light fw-bold">
            <FaShoppingCart size={22} />
            {totalItems > 0 && (
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark"
                style={{ fontSize: "0.7rem" }}
              >
                {totalItems}
              </span>
            )}
          </Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


    </header>
  );
};

export default Header;
