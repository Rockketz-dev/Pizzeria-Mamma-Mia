import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {
  const { cart, addToCart, removeFromCart, totalPrice, clearCart } =
    useContext(CartContext)

  // Función para capitalizar el nombre
  const capitalize = text => text.charAt(0).toUpperCase() + text.slice(1)

  return (
    <>
      <div className="container w-50">
        <h1 className="text-center display-3">Carrito de Compra</h1>
        <hr />

        {cart.length === 0 ? (
          <p className="text-center">El carrito está vacío 🛒</p>
        ) : (
          cart.map(pizza => (
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
                    onClick={() => removeFromCart(pizza.id)} // Ahora usa removeFromCart
                  >
                    -
                  </button>
                  <h6>{pizza.count}</h6>
                  <button
                    className="btn btn-outline-success"
                    type="button"
                    onClick={() => addToCart(pizza)} // Ahora usa addToCart
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))
        )}

        <hr />
        <h2 className="text-center m-3">
          Total: ${totalPrice.toLocaleString('es-CL')}
        </h2>

        {cart.length > 0 && (
          <div className="text-center">
            <button className="btn btn-danger" onClick={clearCart}>
              Vaciar carrito 🗑️
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default Cart
