import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const NavbarMain = () => {
  const total = 25000
  const formatoTotal = total.toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0,
  })

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
                Total: 🛒 {formatoTotal}{' '}
              </Link>
            </p>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
// const Navbar = () => {
//   const token = false
//   const total = 25000
//   const formatoTotal = total.toLocaleString('es-CL', {
//     style: 'currency',
//     currency: 'CLP',
//     minimumFractionDigits: 0,
//   })

//   return (
//     <nav
//       className="navbar-expand-lg navbar bg-dark border-bottom border-body"
//       data-bs-theme="dark"
//     >
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#">
//           Pizzería Mamma Mía!
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNavAltMarkup"
//           aria-controls="navbarNavAltMarkup"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//           <div className="navbar-nav me-auto mb-2 mb-lg-0 grid gap-3">
//             <a
//               className="nav-link active border border-secondary p-2 g-col-6"
//               aria-current="page"
//               href="#"
//             >
//               🍕 Home
//             </a>
//             {token ? (
//               <>
//                 <a
//                   className="nav-link border border-secondary p-2 g-col-6"
//                   href="#"
//                 >
//                   👤 Profile
//                 </a>
//                 <a
//                   className="nav-link border border-secondary p-2 g-col-6"
//                   href="#"
//                 >
//                   🚪 Logout
//                 </a>
//               </>
//             ) : (
//               <>
//                 <a
//                   className="nav-link border border-secondary p-2 g-col-6"
//                   href="#"
//                 >
//                   🔐 Login
//                 </a>
//                 <a
//                   className="nav-link border border-secondary p-2 g-col-6"
//                   href="#"
//                 >
//                   📝 Register
//                 </a>
//               </>
//             )}
//           </div>
//           <div className="d-flex">
//             <p className="border border-primary-subtle text-primary-emphasis">
//               Total: 🛒 {formatoTotal}
//             </p>
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }

export default NavbarMain
