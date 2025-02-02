import '../components/CardPizza.css'

const CardPizza = ({ desc, id, img, ingredients, name, price }) => {
  const capitalize = text => {
    return text.charAt(0).toUpperCase() + text.slice(1)
  }

  return (
    <div className="card mt-5 mb-5">
      <img src={img} alt={`Pizza ${name}`} className="card-img-top" />
      <h4 className="text-start text-capitalize display-6 p-1">
        Pizza {capitalize(name)}
      </h4>
      <hr />
      <p className="lh-1 fs-6">{desc}</p>
      <hr />
      <h5 className="text-start p-2">Ingredientes:</h5>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index} className="text-start">
            {capitalize(ingredient)}
          </li>
        ))}
      </ul>
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
