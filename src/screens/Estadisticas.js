import Layout from "../Layout";
import { useState, useEffect } from "react";
import Personas from "../Personas";
import Button from "react-bootstrap/esm/Button";

const Estadisticas = () => {
    const [info, setInfo] = useState({
        mayores35: 0,
        edadMayor: '',
        personaMayor: '',
        edadMenor: 100,
        personaMenor: '',
    });

    const recargar = () => {
        const personasAModificar = { ...info }
        Personas.forEach(persona => {
            if (persona.edad > 35) {
                personasAModificar.mayores35 = personasAModificar.mayores35 +1
            }
            if (persona.edad > personasAModificar.edadMayor) {
                personasAModificar.edadMayor = `${persona.edad} `
                personasAModificar.personaMayor = `${persona.nombre} `
            }
            else if (persona.edad === personasAModificar.edadMayor) {
                personasAModificar.personaMayor = `${personasAModificar.personaMayor}, ${persona.nombre} `
            }
            if (persona.edad < personasAModificar.edadMenor) {
                personasAModificar.edadMenor = `${persona.edad} `
                personasAModificar.personaMenor = `${persona.nombre} `
            }
            else if (persona.edad === personasAModificar.edadMenor) {
                personasAModificar.personaMenor = `${personasAModificar.personaMenor}, ${persona.nombre} `
            }
            console.log(personasAModificar)
        })
        setInfo(personasAModificar)
    }
    useEffect(() => {
        recargar()
      }, [])
        
    return (
        <div >
            <Layout />
            <div className="row col-12">
                <div className="col-md-4"></div>
                <div className="col-md-4 ">
                    <div className="card">
                        <p><b>Cantidad de personas mayores a 35 años: {info.mayores35}</b></p>
                        <p><b>Persona/s de mayor edad: {info.personaMayor}</b></p>
                        <p><b>Persona/s de menor edad: {info.personaMenor}</b></p>
                        <Button variant="primary" href="/Home">Volver a la página principal</Button>
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    );
};
export default Estadisticas;