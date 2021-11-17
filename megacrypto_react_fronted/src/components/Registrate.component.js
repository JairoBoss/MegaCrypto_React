import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login/Login.css"
import { Card, Container, Button, Form } from 'react-bootstrap';
import UsuarioService from "../services/usuario.service";
import Swal from 'sweetalert2'
//var md5 = require('md5');

export default class Registrate extends Component {

    constructor(props) {
        super(props);
        this.onChangeUsuario = this.onChangeUsuario.bind(this);
        this.onChangeCorreo = this.onChangeCorreo.bind(this);
        this.onChangeContraseña = this.onChangeContraseña.bind(this);
        this.registrar = this.registrar.bind(this);

        this.state = {
            usuario: "",
            correo: "",
            contraseña: "",
            submitted: false
        };
    }

    onChangeUsuario(e) {
        this.setState({
            usuario: e.target.value
        });
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

    registrar() {

        if (this.state.usuario != "" && this.state.correo != "" && this.state.contraseña != "") {
            var data = {
                usuario: this.state.usuario,
                correoElectronico: this.state.correo,
                //contraseña: md5(this.state.contraseña)
                contraseña: (this.state.contraseña)
            };

            UsuarioService.create(data)
                .then(response => {
                    this.state({
                        usuario: response.data.usuario,
                        correoElectronico: response.data.correoElectronico,
                        contraseña: response.data.contraseña,
                        submitted: true
                    })

                }).catch(e => {
                    console.log(e);
                });

            Swal.fire(
                'Bienvenido!',
                'Registro exitoso, bienvenido ' + this.state.usuario + "!",
                'success'
            )

            this.onChangeUsuario = "";
        } else {
            Swal.fire({
                title: 'Error!',
                text: '¡Rellena todos los campos!',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            })
        }
        
        setTimeout(function () {
            window.location.reload(1);
        }, 3000);

    }


    render() {
        const { usuario, correo, contraseña } = this.state;
        return (
            <Form>
                <h3>Crea tu cuenta</h3>
                <p id="textoBien">Regístrate con tu correo electrónico</p>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{ float: 'left' }}>Usuario</Form.Label>
                    <input
                        id="inputt"
                        type="text"
                        placeholder="Tu nombre de usuario"
                        value={usuario}
                        onChange={this.onChangeUsuario} />
                    <br />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{ float: 'left' }}>Correo</Form.Label>
                    <input
                        id="inputt"
                        type="text"
                        placeholder="Tu correo electronico"
                        value={correo}
                        onChange={this.onChangeCorreo}
                    />
                    <br />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label style={{ float: 'left' }}>Contraseña</Form.Label>
                    <input
                        id="inputt"
                        type="password"
                        placeholder="Contraseña"
                        value={contraseña}
                        onChange={this.onChangeContraseña}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check style={{ float: 'left' }} type="checkbox" label="Recuerdame" />
                </Form.Group><br /><br />
                <Button
                    variant="primary"
                    type="reset"
                    onClick={this.registrar}>
                    Registrar
                </Button>
                <br />
                <br />
            </Form>

        )
    }
}