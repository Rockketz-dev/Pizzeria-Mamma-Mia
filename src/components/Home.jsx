import CardPizza from './CardPizza'
import Header from './Header'
import { pizzas } from './pizzas'

const Home = () => {
  return (
    <>
      <Header />
      <div className="cards-container">
        {pizzas.map(pizza => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
            desc={pizza.desc}
          />
        ))}
      </div>
    </>
  )
}

export default Home
