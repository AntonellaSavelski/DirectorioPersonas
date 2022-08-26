import { useParams } from "react-router-dom";
import Layout from "../Layout";

const Estadisticas = () => {
    const { personaId } = useParams();
    return (

        <div>
            <Layout />
            <div>
                <h1>Hola Estadisticas</h1>
            </div>
        </div>

    );
};
export default Estadisticas;