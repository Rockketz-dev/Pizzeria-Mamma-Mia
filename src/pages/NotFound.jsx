import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <Container className="text-center">
      <Row>
        <Col>
          <img
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGY3a3lueWhqdHpkbjkxN2c3NWpnczQyc2hpc2Ixd3h6YjB1ejVibiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/SZW6vi8Aj7FcfX7nhO/giphy.gif"
            alt="404"
            width="200"
          />
          <h1 className="display-1">404</h1>
          <p>Página no encontrada</p>
          <Link to="/" className="btn btn-success m-3">
            Volver a Home
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default NotFound
