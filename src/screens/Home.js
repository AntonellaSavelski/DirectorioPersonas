import Layout from "../Layout";
import ListaPersonas from "./ListaPersonas";

const Home = () => {
    return (
        <div >
            <Layout />
            <h1 className="titulo">Listado de personas</h1>
            <ListaPersonas />
        </div>
    );
};
export default Home