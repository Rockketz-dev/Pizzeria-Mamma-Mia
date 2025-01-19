import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Register from './components/Register'
import Login from './components/Login'

const App = () => {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      {/*<Register />*/}
      <Login />
      <Footer />
    </>
  )
}

export default App
