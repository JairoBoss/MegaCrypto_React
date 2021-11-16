import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login/Login.css"
import { Card, Container, Button, Form } from 'react-bootstrap';
import UsuarioService from "../services/usuario.service";

export default class Login extends Component {


    constructor(props) {
        super(props);
        this.onChangeCorreo = this.onChangeCorreo.bind(this);
        this.onChangeContraseña = this.onChangeContraseña.bind(this);
        this.iniciar = this.iniciar.bind(this);

        this.state = {
            correo: "",
            contraseña: "",
            submitted: false
        };
    }

    onChangeCorreo(e) {
        this.setState({
            correo: e.target.value
        });
    }

    onChangeContraseña(e) {
        this.setState({
            contraseña: e.target.value
        });
    }

    iniciar() {
        if (this.state.correo != "" && this.state.contraseña != "") {
            let x = [];
            let encontrado = false;
            let contraseñaMala = false;

            UsuarioService.findByNombre("esteba")
                .then(response => {

                    //alert(JSON.stringify(response.data));
                    x = response.data;



                    x.forEach(element => {

                        if (element['usuario'] == this.state.correo) {
                            console.log("Usuario existente")
                            console.log(element['contraseña'])
                            encontrado = true;
                            if (element['contraseña'] == this.state.contraseña) {
                                alert("User logeado")
                                contraseñaMala = true;
                            }
                        }
                    });

                    if (!encontrado) {
                        alert("Usuario no encontrado")
                        contraseñaMala = true;
                    }
                    if (!contraseñaMala) {
                        alert("Contraseña incorrecta")
                    }



                }).catch(e => {
                    console.log(e);
                });
        } else {
            if (this.state.correo == "") {
                alert("Ingresa un correo pls")
            } else {
                alert("Ingresa tu contraseña pls")
            }
        }
    }

    render() {
        const { correo, contraseña } = this.state;
        return (
            <Form>
                <h3>Inicia sesión en tu cuenta</h3>
                <p id="textoBien">¡Hola de nuevo! Inicia sesión con tu correo electrónico</p>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{ float: 'left' }}>Correo</Form.Label>
                    <Form.Control
                        id="inputt"
                        type="text"
                        placeholder="Tu correo electronico"
                        value={correo}
                        onChange={this.onChangeCorreo} />
                    <br />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label style={{ float: 'left' }}>Contraseña</Form.Label>
                    <Form.Control
                        id="inputt"
                        type="password"
                        placeholder="Contraseña"
                        value={contraseña}
                        onChange={this.onChangeContraseña} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check style={{ float: 'left' }} type="checkbox" label="Recuerdame" />
                </Form.Group><br /><br />
                <Button type="reset" onClick={this.iniciar} variant="primary"  >
                    Entrar
                </Button>
                <br />
                <br />
            </Form>

        )
    }
}