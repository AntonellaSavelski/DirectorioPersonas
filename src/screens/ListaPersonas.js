import Personas from "../Personas";


const ListaPersonas = () => {
    const nombres = []

    Personas.forEach(persona => {
        nombres.push(<h2 className='texto'> <b>Persona:</b> {persona.nombre}</h2>)
    })
    return (
        <div className="lista">
            {nombres}
        </div>
    );
};
export default ListaPersonas;