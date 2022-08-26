import { useParams } from "react-router-dom";
import Layout from "../Layout";
import Personas from "../Personas";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/esm/Container";

const Persona = () => {
    const { personaId } = useParams();

    return (
        <div >
            <Layout />
            <div className="row col-12">
            <div className="col-md-4"></div>
            <div className="col-md-4 ">
            <div className="card">
                        <p><b>Id persona: </b>{personaId}</p>
                        <p><b>Nombre: </b></p>
                        <p><b>Apellido: </b></p>
                        <p><b>Email: </b></p>
                        <p><b>Edad: </b></p>
                        <Button variant="primary" href="/Home">Volver atras</Button>
                    </div>
            </div>
            <div className="col-md-4"></div>
            
            </div>
        </div>
    );
};
export default Persona;