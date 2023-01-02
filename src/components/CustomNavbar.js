import '../css/CustomNavbar.css';
import { Navbar, Container, Nav } from "react-bootstrap";

export const CustomNavbar = () => {
    return (
        <Navbar fixed="top">
          <Container>
              <Navbar.Brand href="#home">
                  <img className="signature" alt="signature" src="images/signature.png" />
              </Navbar.Brand>
              <Nav>
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#projects">Projects</Nav.Link>
                  <Nav.Link href="#about-me">About Me</Nav.Link>
              </Nav>
          </Container>
      </Navbar>
    );
}