import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./video/Video.css"
import "./video/funcionamiento"


export default class Videos extends Component {

    
    render() {
        return (

            <div id="diccionario">
                <div id="izquierda">
                    <button id="botonesMovimiento" onclick="mover(-1)">
                        Anterior
                    </button>
                </div>

                <div id="actual">
                    <h2 id="tituloArticulo">¿Que es el blockchain?</h2>
                    <iframe id="video" width="560" height="315" src="https://www.youtube.com/embed/Yn8WGaO__ak" frameborder="0"
                        allowfullscreen ng-show="showvideo"></iframe>

                    <br /><br />

                    <p id="informacionDelArticulo">
                        ¿Qué es Blockchain? ¿Cómo funciona? En este video aprenderas un poco de como funciona el blockchain sin complicarte mucho.
                    </p>
                </div>
                <div id="derecha">
                    <button id="botonesMovimiento" onclick="mover(1)">
                        Siguiente
                    </button>
                </div>


            </div>
        )
    }
}