import Personas from "../Personas";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ListaPersonas = () => {
    const nombres = []

    Personas.forEach(persona => {
        nombres.push(<Col className='texto' xs={6} md={4} >{persona.nombre} {persona.apellido}</Col>)
    })
    return (
        <Container className="lista">
            <Row>
                {nombres}
            </Row>
        </Container>
    );
};
export default ListaPersonas;