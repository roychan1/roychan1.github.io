import '../css/CustomNavbar.css';
import { Navbar, Container, Nav } from "react-bootstrap";

export const CustomNavbar = () => {
    return (
        <Navbar fixed="top">
            <Container>
                <Navbar.Brand href="#home">Roy Chan</Navbar.Brand>
                <Nav>
                    <Nav.Link href="">Home</Nav.Link>
                    <Nav.Link href="">Projects</Nav.Link>
                    <Nav.Link href="">Contacts</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}