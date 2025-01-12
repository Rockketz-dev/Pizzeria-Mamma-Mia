const Navbar = () => {
  const token = false
  const total = 25000
  const formatoTotal = total.toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0,
  })

  return (
    <nav
      className="navbar-expand-lg navbar bg-dark border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Pizzería Mamma Mía!
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav me-auto mb-2 mb-lg-0 grid gap-3">
            <a
              className="nav-link active border border-secondary p-2 g-col-6"
              aria-current="page"
              href="#"
            >
              🍕 Home
            </a>
            {token ? (
              <>
                <a
                  className="nav-link border border-secondary p-2 g-col-6"
                  href="#"
                >
                  👤 Profile
                </a>
                <a
                  className="nav-link border border-secondary p-2 g-col-6"
                  href="#"
                >
                  🚪 Logout
                </a>
              </>
            ) : (
              <>
                <a
                  className="nav-link border border-secondary p-2 g-col-6"
                  href="#"
                >
                  🔐 Login
                </a>
                <a
                  className="nav-link border border-secondary p-2 g-col-6"
                  href="#"
                >
                  📝 Register
                </a>
              </>
            )}
          </div>
          <div className="d-flex">
            <p className="border border-primary-subtle text-primary-emphasis">
              Total: 🛒 {formatoTotal}
            </p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
