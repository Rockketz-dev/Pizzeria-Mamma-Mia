import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const NavbarMain = () => {
  const { formattedTotal } = useContext(CartContext)

  return (
    <Navbar
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      className="bg-body-tertiary"
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="#home">Pizzería Mamma Mía!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="text-decoration-none ms-3 text-white">
              Home
            </Link>
            <Link
              to="/register"
              className="text-decoration-none ms-3 text-white"
            >
              Register
            </Link>
            <Link to="/login" className="text-decoration-none ms-3 text-white">
              Login
            </Link>
            <Link to="/cart" className="text-decoration-none ms-3 text-white">
              Cart
            </Link>
            <Link to="/pizza" className="text-decoration-none ms-3 text-white">
              Pizza
            </Link>
            <Link
              to="/profile"
              className="text-decoration-none ms-3 text-white"
            >
              Profile
            </Link>
            <Link to="/404" className="text-decoration-none ms-3 text-white">
              NotFound
            </Link>
          </Nav>

          <div className="d-flex border border-primary-subtle">
            <p className="text-white justify-content-center p-2">
              <Link to="/cart" className="text-decoration-none text-white">
                Total: 🛒 ${formattedTotal}
              </Link>
            </p>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default NavbarMain
