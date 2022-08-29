import { useParams } from "react-router-dom";
import Layout from "../Layout";
import Personas from "../Personas";
import Button from 'react-bootstrap/Button';


const Persona = () => {
    const { personaId } = useParams();
    let ind = Personas.find(per => per.id === personaId)

    return (
        <div >
            <Layout />
            <div className="row col-12">
                <div className="col-md-4"></div>
                <div className="col-md-4" >
                    <div className="card">
                        <p><b>Id persona: </b>{personaId}</p>
                        <p><b>Nombre: </b>{ind.nombre}</p>
                        <p><b>Apellido: </b>{ind.apellido}</p>
                        <p><b>Email: </b>{ind.email}</p>
                        <p><b>Edad: </b>{ind.edad}</p>
                        <Button variant="primary" href="/Home">Volver atras</Button>
                    </div>
                </div>
                <div className="col-md-4"></div>

            </div>
        </div>
    );
};
export default Persona;