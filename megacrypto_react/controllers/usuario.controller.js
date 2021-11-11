const db = require("../models");
const User = db.usuario;
const Op = db.Sequelize.Op;

//crear y guardar un nuevo rol
exports.create = (req, res) => {
    //validar request
    if (!req.body.usuario) {
        res.status(400).send({
            message: "Error"
        });
        return;
    }

    //crear un nuevo usuario
    const usuario = {
        usuario: req.body.usuario,
        correoElectronico: req.body.correoElectronico,
        contraseña: req.body.contraseña,
        edad: req.body.edad,
    };

    //Guardar nuevo usuario en la base de datos
    User.create(usuario)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error al creal el rol"
            });
        });
};

//Obtener todos los usuarios de la base de datos
exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;

    User.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error al recuperar todos los Roles."
            });
        });
};

//Obtener un usuario por ID
exports.findOne = (req, res) => {
    const id = req.params.id;
    User.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al recuperar Rol por id=" + id
            });
        });
};

//Actualizar los datos de un usuario por id
exports.update = (req, res) => {
    const id = req.params.id;

    User.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User se actualizo con exito"
                });
            } else {
                res.send({
                    message: "Error al actualizar User con id=" + id
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error de servidor 500"
            });
        });
};

//Eliminar un usuario por ID
exports.delete = (req, res) => {
    const id = req.params.id;

    User.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User eliminado con exito"
                });
            } else {
                res.send({
                    message: "Error al Eliminar user con id=" + id
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error de servidor 500"
            });
        });
};

//Eliminar todos los usuarios de la base de datos
exports.deleteAll = (req, res) => {
    User.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: "Los usuarios fueron eliminados con exito" });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al eliminar los usuarios"
            });
        });
};
