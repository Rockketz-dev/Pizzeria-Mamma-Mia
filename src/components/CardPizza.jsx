import '../components/CardPizza.css'

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card mt-5 mb-5">
      <img src={img} alt={`Pizza ${name}`} className="card-img" />
      <h4 className="text-start fw-semibold p-2">Pizza {name}</h4>
      <hr />
      <p className="lead text-secondary-emphasis">Ingredientes:</p>
      <p>
        <small>🍕 {ingredients.join(', ')}</small>
      </p>
      <hr />
      <h5>Precio: ${price.toLocaleString('es-CL')}</h5>

      <div className="d-flex justify-content-around">
        <button className="btn btn-outline-secondary p-2" type="button">
          Ver Más 👀
        </button>
        <button className="btn btn-dark p-2" type="button">
          Añadir 🛒
        </button>
      </div>
    </div>
  )
}

export default CardPizza
