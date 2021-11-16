import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Carousel, CardGroup, Table, Container } from 'react-bootstrap';

export default class Inicio extends Component {

    render() {
        return (

            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.noticias.info/wp-content/uploads/2021/07/bitcoin-hold-mercado-precio-2.jpg"
                        alt="First slide"
                    />
                    <br />
                    <h3>Hold / Holdear / Holder</h3>
                    <p>Hace referencia a la accion de conservar/mantener una o varias criptomonedas durante un lapso tiempo indefinido con la finalidad de que el precio aumente con el paso del tiempo.</p>
                    <br /><br />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://img2.s3wfg.com/web/img/images_uploaded/8/7/cbbuythedip.jpg"
                        alt="First slide"
                    />
                    <br />
                    <h3>Buy The Dip</h3>
                    <p>Hace referencia a la accion de comprar alguna criptomoneda cuando su precio esta en caida, pero antes de comprarla tienes que hacer un analisis para no perder dinero.</p>
                    <br /><br />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://alfamining.io/wp-content/uploads/2020/11/shitcoins-blogg.png"
                        alt="First slide"
                    />
                    <br />
                    <h3>Shitcoin</h3>
                    <p>Son todas aquellas criptomonedas que no tienen un proposito/bases definidas o son la copia de otro proyecto o simplemente son un meme o burla a las criptomonedas, un ejemplo puede ser DogeCoin, Shiba, BabyDoge . Invertir en una de estas criptomonedas es mala idea.</p>
                    <br /><br />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.pinimg.com/736x/a1/93/a7/a193a736a1573a6fe36927bc5fa4db1e.jpg"
                        alt="First slide"
                    />
                    <br />
                    <h3>Minero</h3>
                    <p>Un minero es aquella persona que dedica sus recursos computacionales a verificar y procesar transacciones, a cambio de esto como recompensa reciben una pequeña fraccion de la criptomoneda.</p>
                    <br /><br />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://bitpanda-academy.imgix.net/nullbab12851-6b9a-4be9-9289-e9e23ad79199/bitpanda-academy-beginners-16-what-are-mining-pools.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&w=2100"
                        alt="First slide"
                    />
                    <br />
                    <h3>Mining Pool</h3>
                    <p>Es cuando un grupo de mineros juntan sus recursos computacionales (regularment graficas) en una sola red para "minar" juntos, esto con el proposito de tener mas probabilidad de encontrar bloques de una cierta cripto, las pool´s mas importantes son "Ant pool, F2Pool, Binance Pool".</p>
                    <br /><br />
                </Carousel.Item>

            </Carousel>
        )
    }
}