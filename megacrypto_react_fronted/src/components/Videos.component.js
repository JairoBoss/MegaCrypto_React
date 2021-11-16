import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Carousel, CardGroup, Table, Container } from 'react-bootstrap';

export default class Inicio extends Component {

    render() {
        return (

            <Carousel fade>
                <Carousel.Item>
                    <iframe id="video"  width="80%"  height="300" src="https://www.youtube.com/embed/Yn8WGaO__ak" frameborder="0"
                        allowfullscreen ng-show="showvideo"></iframe>
                    <br />
                    <h3>¿Que es el blockchain?</h3>
                    <p>¿Qué es Blockchain? ¿Cómo funciona? En este video aprenderas un poco de como funciona el blockchain sin complicarte mucho.</p>
                    <br /><br />
                </Carousel.Item>

                <Carousel.Item>
                    <iframe id="video" width="80%"  height="300" src="https://www.youtube.com/embed/h99R5bwHHe4" frameborder="0"
                        allowfullscreen ng-show="showvideo"></iframe>
                    <br />
                    <h3>¿Que es un  nft?</h3>
                    <p>¿Qué es un NFT? sin complicaciones, facil y sencillo para toda la familia.</p>
                    <br /><br />
                </Carousel.Item>

                <Carousel.Item>
                    <iframe id="video" width="80%"  height="300" src="https://www.youtube.com/embed/6aKOxuxvm0g" frameborder="0"
                        allowfullscreen ng-show="showvideo"></iframe>
                    <br />
                    <h3>Historia del BTC</h3>
                    <p>Historia del BTC con dibujos animados.</p>
                    <br /><br />
                </Carousel.Item>


                <Carousel.Item>
                    <iframe id="video" width="80%"  height="300" src="https://www.youtube.com/embed/oGnxlPJfDJY" frameborder="0"
                        allowfullscreen ng-show="showvideo"></iframe>
                    <br />
                    <h3>¿Qué es STAKING?</h3>
                    <p>¿Como funciona el Staking?.</p>
                    <br /><br />
                </Carousel.Item>

                <Carousel.Item>
                    <iframe id="video" width="80%"  height="300" src="https://www.youtube.com/embed/3y1IxHrs158" frameborder="0"
                        allowfullscreen ng-show="showvideo"></iframe>
                    <br />
                    <h3>Todo acerca de BTC</h3>
                    <p>Todo lo que necesitas sabes acerca de BTC.</p>
                    <br /><br />
                </Carousel.Item>



            </Carousel>
        )
    }
}