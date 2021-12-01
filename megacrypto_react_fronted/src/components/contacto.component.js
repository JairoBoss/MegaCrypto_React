import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Precios from "./Inicio/Precios"
import Noticia from "./Inicio/Noticia"
import NoticiaFinal from "./Inicio/NoticiaFin"
import { Container, Accordion } from "react-bootstrap";
import './contacto.css'

export default class Contacto extends Component {

    render() {
        return (
            <Container>
                <h2>
                    ¿Que es MegaCrypto?
                </h2>
                <a>
                    Una simple pagina donde encontraras diferente tipo de informacion/opiniones acerca de criptomonedas.



                </a><br /><br />
                <img src="https://s03.s3c.es/imag/_v0/770x420/9/8/b/490x_cripto-dogecoin-bitcoin.jpg" width="500px"></img>
                <br />
                <br />
                <h2>¿Quieres decirnos algo?</h2>
                <section >
                    <form>
                        <br />
                        <h5>Asunto</h5><br />
                        <textarea id="inputt"></textarea><br /><br />
                        <h5>Mensaje</h5><br />
                        <textarea id="inputt" ></textarea><br /><br />

                        <input id="boton" type="reset" value="Subir" /><br />
                    </form>
                    <br /><br />
                </section>
            </Container>

        )
    }
}

