import React, { Component } from "react";
import "../Inicio/Precios.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Carousel, CardGroup, Table, Container } from 'react-bootstrap';


export default class Precios extends Component {

    render() {
        return (

            <Container>
                <h5>Cambio del precio de las monedas</h5>

                <CardGroup>
                    <Card className="bg-dark text-white">
                        
                        <Card.Body>
                            <Card.Title>Ganadores</Card.Title>
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th id="border">Nombre</th>
                                        <th id="border">Precio</th>
                                        <th id="border">Cambio</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr></tr>
                                    <tr>
                                        <td id="monedaBlanca">BTC</td>
                                        <td id="precioVerde">60k</td>
                                        <td id="cambioverde">+50%</td>
                                    </tr>
                                    <tr></tr>
                                    <tr>
                                        <td id="monedaBlanca">BTC</td>
                                        <td id="precioVerde">60k</td>
                                        <td id="cambioverde">+50%</td>
                                    </tr>
                                    <tr></tr>
                                    <tr>
                                        <td id="monedaBlanca">BTC</td>
                                        <td id="precioVerde">60k</td>
                                        <td id="cambioverde">+50%</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Ultima actualizacion hace 3 horas</small>
                        </Card.Footer>
                    </Card>
                    <Card className="bg-dark text-white">
                        
                        <Card.Body>
                            <Card.Title>Perdedoras</Card.Title>
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th id="border">Nombre</th>
                                        <th id="border">Precio</th>
                                        <th id="border">Cambio</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr></tr>
                                    <tr>
                                        <td id="monedaBlanca">BTC</td>
                                        <td id="precioRoja">60k</td>
                                        <td id="cambioRoja">-50%</td>
                                    </tr>
                                    <tr></tr>
                                    <tr>
                                        <td id="monedaBlanca">BTC</td>
                                        <td id="precioRoja">60k</td>
                                        <td id="cambioRoja">-50%</td>
                                    </tr>
                                    <tr></tr>
                                    <tr>
                                        <td id="monedaBlanca">BTC</td>
                                        <td id="precioRoja">60k</td>
                                        <td id="cambioRoja">-50%</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                        <Card.Footer>
                            <small id="actualizacion" className="text-muted">Ultima actualizacion hace 3 horas</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </Container>
        )
    }
}

