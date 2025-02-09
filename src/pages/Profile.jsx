import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
const Profile = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Card border="danger" className="text-center m-3">
          <Card.Header>Perfil</Card.Header>
          <Card.Img
            variant="top"
            src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs2/214189718/original/49919eaf03041fde53492917cd557331b7c6364e/create-you-a-pokemon-profile-picture.png"
            alt="Imagen de Perfil"
          />
          <Card.Body>
            <Card.Title>Profile</Card.Title>
            <Card.Text>
              <p>Nombre: johndoe</p>
              <p>Email: correo@pizzamail.com</p>
            </Card.Text>
            <Button variant="danger">Cerar Sesión</Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  )
}

export default Profile
