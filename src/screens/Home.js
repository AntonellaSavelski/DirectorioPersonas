import Layout from "../Layout";
import ListGroup from 'react-bootstrap/ListGroup';
import ListaPersonas from "./ListaPersonas";
import Container from "react-bootstrap/esm/Container";

const Home = () => {
    return (
        <div >
            <Layout />
            <div className="row col-12">
            <div className="col-md-4"></div>
            <div className="col-md-4 ">
            <ListaPersonas />
            </div>
            <div className="col-md-4"></div>
          </div>
            
        </div>
    );
};
export default Home