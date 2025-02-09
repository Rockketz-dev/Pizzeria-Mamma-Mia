import { useState } from 'react'
import { pizzaCart as initialPizzaCart } from '../components/pizzas'

const Cart = () => {
  const [cart, setCart] = useState(initialPizzaCart)

  const capitalize = text => {
    return text.charAt(0).toUpperCase() + text.slice(1)
  }

  const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0)

  const handleQuantityChange = (id, action) => {
    setCart(
      prevCart =>
        prevCart
          .map(pizza =>
            pizza.id === id
              ? {
                  ...pizza,
                  count:
                    action === 'increment'
                      ? pizza.count + 1
                      : Math.max(pizza.count - 1, 0),
                }
              : pizza,
          )
          .filter(pizza => pizza.count > 0), // Filtrar pizzas con count > 0
    )
  }

  return (
    <>
      <div className="container w-50">
        <h1 className="text-center display-3">Carrito de Compra</h1>
        <hr />
        {cart.map(pizza => (
          <div key={pizza.id} className="row mt-3">
            <div className="col">
              <img
                src={pizza.img}
                alt={pizza.name}
                className="img-fluid rounded"
              />
            </div>
            <div className="col align-self-center">
              <h6>{capitalize(pizza.name)}</h6>
            </div>
            <div className="col align-self-center">
              <p>Precio: ${pizza.price.toLocaleString('es-CL')}</p>
            </div>
            <div className="col align-items-center">
              <div className="d-flex justify-content-around align-items-center">
                <button
                  className="btn btn-outline-danger"
                  type="button"
                  onClick={() => handleQuantityChange(pizza.id, 'decrement')}
                >
                  -
                </button>
                <h6>{pizza.count}</h6>
                <button
                  className="btn btn-outline-success"
                  type="button"
                  onClick={() => handleQuantityChange(pizza.id, 'increment')}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
        <hr />
        <h2 className="text-center m-3">
          Total: ${total.toLocaleString('es-CL')}
        </h2>
      </div>
    </>
  )
}

export default Cart
