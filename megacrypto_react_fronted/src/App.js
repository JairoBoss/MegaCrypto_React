import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Carousel, Card, CardGroup, Button } from 'react-bootstrap';

function App() {
  return (

    <div className="App">
      <a id="titulo">MegaCrypto</a>
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link eventKey="link-1">Noticias</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Diccionario</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="link-3">Videos</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="link-4">Opiniones</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="link-5">Acerca de</Nav.Link>
        </Nav.Item>


      </Nav>

      <Carousel fade>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wealth.buzz/wp-content/uploads/2021/08/shiba-inu-3.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>

      <div>

      </div>

      <footer id="footer">


        <center>
          <table id="tablaFooter">
            <tr>
              <th>Links</th>
              <th>Mi cuenta</th>
              <th>Nosotros</th>
            </tr>
            <tr>
              <td>
                <center><a href="index.html">Noticias</a></center>
              </td>
              <td>
                <center><a href="login.html">Login</a></center>
              </td>
              <td>
                <center><a href="acercade.html">Acerca de</a></center>
              </td>
            </tr>
            <tr>
              <td>
                <center><a href="diccionario.html">Diccionario</a></center>
              </td>
              <td>
                <center><a href="registro.html">Registro</a></center>
              </td>
              <td>
                <center><a href="https://github.com/JairoBoss">GitHub</a></center>
              </td>

            </tr>
            <tr>
              <td>
                <center><a href="videos.html">Videos</a></center>
              </td>
              <td>
                <center><a href="MiCuenta.html">Mi perfil</a></center>
              </td>
              <td>
                <center><a href="https://www.youtube.com/">YouTube</a></center>
              </td>
            </tr>
          </table>
          <a id="nombreFooter" href="index.html">MegaCrypto</a>
          <p id="fin">All rights reserved. ©</p>
        </center>

      </footer>

    </div >
  );
}

export default App;

/*
<Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
*/