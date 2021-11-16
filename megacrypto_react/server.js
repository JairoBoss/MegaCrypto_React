const express = require("express"); //Construir API Rest
const bodyParser = require("body-parser"); //ayuda a analizar la solicitud y crear el objeto req.body
const cors = require("cors"); //proporciona middleware Express para habilitar CORS con varias opciones.
// cree una aplicación Express
const app = express();
// configuramos origin: http: // localhost: 9596.
var corsOptions = {
    origin: "http://localhost:9596"
};
//agregue cors middlewares usando el método app.use ()
app.use(cors(corsOptions));

app.use((req, res, next) => {

    res.header('Access-Control-Allow-Origin', '*');

    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');

    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');

    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

    next();

});

// realizar parse de content-type - application/json de requests
app.use(bodyParser.json());
// realizar parse de content-type - application/x-www-form-urlencoded de requests
app.use(bodyParser.urlencoded({ extended: true }));
// route raiz
app.get("/", (req, res) => {
    res.json({ message: "Bienvenido a la aplicacion nodejs, express, sequelize, postgresql." })
        ;
});
// asignar port para escuchar requests
const PORT = process.env.PORT || 9595;
app.listen(PORT, () => {
    console.log(`Server esta ejecutandose en puerto ${PORT}.`);
});

const db = require("./models");
db.sequelize.sync({ force: false }).then(() => {
    console.log("Eliminar y sincronizar db");
});

require("./routes/usuario.routes.js")(app);