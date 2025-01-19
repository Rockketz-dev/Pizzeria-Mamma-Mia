import { useState } from 'react'
import Swal from 'sweetalert2'

const Login = () => {
  const [logeo, setLogeo] = useState({
    mail: '',
    password: '',
  })

  const [errors, setErrors] = useState({})
  const [generalError, setGeneralError] = useState('')

  const handleChange = e => {
    const { name, value } = e.target

    // Actualizamos el estado del usuario
    setLogeo({ ...logeo, [name]: value })

    // Validamos el campo en tiempo real
    validate(name, value)
  }

  const validate = (name, value) => {
    let newErrors = { ...errors }

    if (name === 'mail') {
      if (!value) {
        newErrors.mail = 'El email es obligatorio.'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        newErrors.mail = 'El email no tiene un formato válido.'
      } else {
        delete newErrors.mail
      }
    }

    if (name === 'password') {
      if (!value) {
        newErrors.password = 'La contraseña es obligatoria.'
      } else if (value.length < 6) {
        newErrors.password = 'La contraseña debe tener al menos 6 caracteres.'
      } else {
        delete newErrors.password
      }
    }

    setErrors(newErrors)
  }

  const handleResult = e => {
    e.preventDefault() // Evitamos el refresco de la página

    // Verificamos si hay errores
    if (Object.keys(errors).length > 0 || !logeo.mail || !logeo.password) {
      setGeneralError('Por favor corrige los errores antes de continuar.')
      return
    }

    Swal.fire({
      title: 'Acceso Correcto :)',
      text: 'Para continuar haz click en Aceptar',
      icon: 'success',
      confirmButtonText: 'Aceptar',
    })
  }

  return (
    <div className="d-flex justify-content-center m-3">
      <div className="card">
        <form className="p-3" onSubmit={handleResult}>
          <div className="mb-3">
            <h1>Login</h1>
            <hr />
            <label className="form-label">Email:</label>
            <input
              type="text"
              placeholder="Ingresa tu Email"
              value={logeo.mail}
              onChange={handleChange}
              name="mail"
              className="form-control"
            />
            {errors.mail && <p className="text-danger">{errors.mail}</p>}
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña:</label>
            <input
              type="password"
              placeholder="Ingresa tu Contraseña"
              value={logeo.password}
              onChange={handleChange}
              name="password"
              className="form-control"
            />
            {errors.password && (
              <p className="text-danger">{errors.password}</p>
            )}
          </div>

          <hr />

          <button type="submit" className="btn btn-dark btn-lg">
            <i className="fa-solid fa-arrow-up-right-from-square"></i> Ingresar
          </button>

          {generalError && <p className="text-danger mt-3">{generalError}</p>}
        </form>
      </div>
    </div>
  )
}

export default Login
