import React, { Component } from "react";
import "../Inicio/Precios.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Col, Image, Container } from 'react-bootstrap';


export default class NoticiaFinal extends Component {

    render() {
        return (
            <Container>
                <Card style={{ width: 'auto', border: 'none' }}>
                    <Card.Body>
                        <br />
                        <Card.Title style={{ float: 'left' }}>¿Bitcoin es malo para el medio ambiente por su consumo excesivo de energia?</Card.Title>
                        <br></br><br />
                        <Card.Text style={{ float: 'left' }}>
                            Una criptomoneda es una moneda digital que se puede usar para comprar bienes y servicios, pero que utiliza un registro electrónico fuertemente cifrado para garantizar la integridad de las transacciones
                            <br /><br />
                            <Image variant="top" src="https://preview.redd.it/lp4r3nf8h9x01.jpg?auto=webp&s=131a40b5c1d8388dcd4dba85bb220cb0f70e1b44" style={{ width: '200px' }} />
                            <br /><br />
                            <br /><br /><Button style={{ float: 'left' }} variant="primary" disabled>Continuar leyendo</Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br></br>


            </Container>

        )
    }
}

