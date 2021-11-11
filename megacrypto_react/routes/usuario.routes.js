module.exports = app =>{
    const usuario = require("../controllers/usuario.controller.js");

    var router = require("express").Router();

    //Crear un nuevo usuario
    router.post("/", usuario.create); //http://localhost:

    //Obtener todos los usuarios
    router.get("/", usuario.findAll); //http://localhost:9595/sed

    //Encontrar un usuario por ID
    router.get("/:id", usuario.findOne); //http://localhost:9595/sed/roles/10

    //Actualizar un usuario por id
    router.put("/:id", usuario.update); //http://localhost:9595/sed/roles/10

    //Eliminar un usuario por id
    router.delete("/:id", usuario.delete); //http://localhost:9595/sed/roles/10

    //Eliminar todos los usuarios de la base de datos
    router.delete("/", usuario.deleteAll); //http://localhost:9595/sed/roles/

    //app.use('/megacrypto/usuarios', router);
    app.use('/megacrypto/usuarios', router);
}