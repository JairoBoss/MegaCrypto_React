import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login/Login.css"
import { Card, Container, Button, Form } from 'react-bootstrap';

export default class Registrate extends Component {

    render() {
        return (
            <Form>
                <h3>Crea tu cuenta</h3>
                <p id="textoBien">Regístrate con tu correo electrónico</p>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label  style={{ float: 'left' }}>Correo</Form.Label>
                    <Form.Control id="inputt" type="email" placeholder="Tu correo electronico" />
                    <br/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label  style={{ float: 'left' }}>Correo</Form.Label>
                    <Form.Control id="inputt" type="email" placeholder="Tu correo electronico" />
                    <br/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label  style={{ float: 'left' }}>Contraseña</Form.Label>
                    <Form.Control id="inputt" type="password" placeholder="Contraseña" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check style={{ float: 'left' }} type="checkbox" label="Recuerdame" />
                </Form.Group><br/><br/>
                <Button variant="primary" type="reset">
                    Entrar
                </Button>
                <br/>
                <br/>
            </Form>

        )
    }
}