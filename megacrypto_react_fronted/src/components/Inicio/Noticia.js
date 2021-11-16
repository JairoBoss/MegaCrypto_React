import React, { Component } from "react";
import "../Inicio/Precios.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Col, Image, Container } from 'react-bootstrap';


export default class Noticia extends Component {

    render() {
        return (
            <Container>
                <Card style={{ width: 'auto', border: 'none' }}>

                    <Card.Body>
                        <Image variant="top" src="https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDIvMWQ2ZmU3OWEtZWM1Zi00ODUzLTgyNDMtN2RhNGIxMDAxNzI0LmpwZw==.jpg" style={{ width: '230px', float: 'right' }} />
                        <br></br>
                        <Card.Title style={{ float: 'left' }}>El futuro de las criptomonedas</Card.Title>
                        <br></br><br />
                        <Card.Text style={{ float: 'left' }}>
                            Una criptomoneda ¿Realmente podrían remplazar al dinero Fiat o desaparecerán?
                            En el pasado ...
                            <br /><br />
                            <Button style={{ float: 'left' }} variant="primary" disabled>Continuar leyendo</Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br></br>
            </Container>

        )
    }
}

