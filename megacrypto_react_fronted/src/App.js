import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Switch, BrowserRouter, Route } from 'react-router-dom';
import { Nav, Carousel, CardGroup, Table, Container } from 'react-bootstrap';
import Inicio from './components/Inicio.component';
import Diccionario from './components/Diccionario.component';
import Videos from './components/Videos.component';
import Login from './components/Login.component';
import Registrate from './components/Registrate.component';
import Contacto from './components/contacto.component';

function App() {
  return (

    <div className="App">
      <a id="titulo">
        <Link id="links" to={"/"}>
          MegaCrypto
        </Link>
      </a>
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Link id="links" to={"/"} className="nav-link">
            Noticias
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link id="links" to={"/Diccionario"} className="nav-link">
            Diccionario
          </Link>
        </Nav.Item>

        <Nav.Item>

          <Link id="links" to={"/Videos"} className="nav-link">
            Videos
          </Link>

        </Nav.Item>

        <Nav.Item>
          <Link id="links" to={"/Login"} className="nav-link">
            Login
          </Link>
        </Nav.Item>

        <Nav.Item>
          <Link id="links" to={"/Registrate"} className="nav-link">
            Registrate
          </Link>
        </Nav.Item>

        <Nav.Item>
          <Link id="links" to={"/Contacto"} className="nav-link">
            Acerca de
          </Link>
        </Nav.Item>


      </Nav>


      <div className="container mt-3">
        <Switch>
          <Route exact path={["/"]} component={Inicio} />
          <Route exact path={["/Diccionario"]} component={Diccionario} />
          <Route exact path={["/Videos"]} component={Videos} />
          <Route exact path={["/Login"]} component={Login} />
          <Route exact path={["/Registrate"]} component={Registrate} />
          <Route exact path={["/Contacto"]} component={Contacto} />

        </Switch>
      </div>

      <br />

      <div id="footer">
        <Table striped bordered hover>
          <thead id="bordes">
            <tr id="bordes">
              <th id="bordesT">Links</th>
              <th id="bordesT">Mi cuenta</th>
              <th id="bordesT">Nosotros</th>
            </tr>
          </thead>
          <thead id="bordes">
            <tr id="bordes">
              <td id="bordes">
                <Link id="bordes" to={"/Diccionario"}>
                  Diccionario
                </Link>
              </td>
              <td id="bordes">
                <Link id="bordes" to={"/Login"}>
                  Login
                </Link>
              </td>
              <td id="bordes"><a href="https://www.youtube.com/">YouTube</a></td>
            </tr>
            <tr id="bordes">
              <td id="bordes">
                <Link id="bordes" to={"/Videos"}>
                  Videos
                </Link>
              </td>
              <td id="bordes">

                <Link id="bordes" to={"/Registrate"}>
                  Registro
                </Link>
              </td>
              <td id="bordes">
                <a href="https://github.com/JairoBoss">GitHub</a>
              </td>
            </tr>

          </thead>

        </Table>
      </div>

      <a id="tituloFinal">MegaCrypto</a>
      <br />
      <a id="fin">All rights reserved. ©</a>
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