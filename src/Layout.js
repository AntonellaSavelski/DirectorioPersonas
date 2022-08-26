import { Link, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Layout = () => {
    return (
        <>
            <Navbar bg="light" variant="light">
            <Container>
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/Home">Home</Nav.Link>
                <Nav.Link as={Link} to="/Estadisticas">Estadisticas</Nav.Link>
                <Nav.Link as={Link} to="/Contacto">Contacto</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
            <Outlet />
        </>
    );
};
export default Layout;