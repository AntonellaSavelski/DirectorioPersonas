import { useParams } from "react-router-dom";
import Layout from "../Layout";
import Personas from "../Personas";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/esm/Container";


const Persona = () => {
    const { personaId } = useParams();
    let ind = Personas.find(per => per.id === personaId)

    return (
        <div >
            <Layout />
            <Container>
            <h1 className="titulo">Persona cuyo identificador es: {personaId}</h1>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4 prueba" >
                    <div className="card">
                        <p><b>Nombre: </b>{ind.nombre}</p>
                        <p><b>Apellido: </b>{ind.apellido}</p>
                        <p><b>Email: </b>{ind.email}</p>
                        <p><b>Edad: </b>{ind.edad}</p>
                        <Button variant="primary" href="/Home">Volver atras</Button>
                    </div>
                </div>
                

            </div>
            </Container>
        </div>
    );
};
export default Persona;