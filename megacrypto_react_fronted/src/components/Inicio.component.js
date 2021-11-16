import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Precios from "./Inicio/Precios"
import Noticia from "./Inicio/Noticia"
import NoticiaFinal from "./Inicio/NoticiaFin"
import { Container } from "react-bootstrap";


export default class Inicio extends Component {

    render() {
        return (
            <Container>
                <Noticia/>
                <Precios/>
                <NoticiaFinal/>
            </Container>
            
        )
    }
}

