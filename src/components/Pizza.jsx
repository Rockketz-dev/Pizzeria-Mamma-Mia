import { useState, useEffect } from 'react'

const Pizza = () => {
  const [pizza, setPizza] = useState(null) 
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const getPizza = async () => {
    try {
      setLoading(true)
      const response = await fetch('http://localhost:5001/api/pizzas/p001') // Estoy trabajando en Mac y no me dejaba usar el puerto :5000 así que lo cambié a :5001
      if (!response.ok) {
        throw new Error('No se pudo obtener la pizza')
      }
      const data = await response.json()

      // Extraer Datos
      const pizzaInfo = {
        nombre: data.name,
        precio: data.price,
        ingredientes: data.ingredients,
        imagen: data.img,
        descripcion: data.desc,
        id: data.id,
      }

      setPizza(pizzaInfo)
    } catch (error) {
      console.log(error)
      setError('No se han encontrado Pizzas')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getPizza()
  }, [])

  return (
    <>
      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}

      <div className="container">
        {pizza && (
          <div key={pizza.id} className="card m-2" style={{ width: '20rem' }}>
            <img
              src={pizza.imagen}
              alt={pizza.nombre}
              className="card-img-top"
            />
            <div className="card-body">
              <h1 className="card-title">Pizza {pizza.nombre}</h1>
              <p>Precio: ${pizza.precio}</p>
              <hr />
              <h4>Ingredientes:</h4>
              <ul>
                {pizza.ingredientes.map((ingrediente, index) => (
                  <li key={index}>{ingrediente}</li>
                ))}
              </ul>
              <h4>Descripción:</h4>
              <p>{pizza.descripcion}</p>
              <hr />
              <div className="text-center">
                <button href="#" className="btn btn-outline-dark m-2">
                  Agregar al Carrito
                </button>
                <button href="#" className="btn btn-outline-success m-2">
                  Comprar Ahora
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Pizza
