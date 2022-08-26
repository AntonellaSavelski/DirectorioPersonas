import { useParams } from "react-router-dom";
import Layout from "../Layout";
import Personas from "../Personas";

const Persona = () => {
    const { personaId } = useParams();
    const nombres=[]
    Personas.forEach(persona => {
        nombres.push(<h2> Persona: {persona.nombre}</h2>)
    })
    return (

            <div>

                {nombres} 
            </div>

    );
};
export default Persona;