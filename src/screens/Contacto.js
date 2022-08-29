import { useParams } from "react-router-dom";
import React, { useState } from 'react';
import Layout from "../Layout";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/esm/Container";


const Contacto = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        console.log('Ingrese todos los datos')
        setValidated(true);

    };
    return (
        <div>
            <Layout />
            <Container>
                <h1 className="titulo">Formulario de contacto</h1>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" >
                        <Form.Label>Nombre:</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese su nombre" required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Apellido:</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese su apellido" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" placeholder="Ingrese su mail" required />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Edad:</Form.Label>
                        <Form.Control type="number" placeholder="Ingrese su edad" required />
                    </Form.Group>
                    
                    <div className="d-grid gap-2" style={{marginTop: '2rem'}}>
                        <Button variant="primary" type="submit" size="lg">
                            Enviar
                        </Button>
                    </div>
                </Form>
            </Container>
        </div>
    )
}
export default Contacto;
