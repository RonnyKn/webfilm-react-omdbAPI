import { Navbar, Nav, Container } from "react-bootstrap"
import './Navigationbar.css'

const Navigationbar = () => {
  return (
    <div >
      <Navbar variant="dark">
        <Container className="navFix">
          <Navbar.Brand className="brand text-white">Ronnykn Films</Navbar.Brand>
          <Nav>
            <Nav.Link >Search Movie</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigationbar;