module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define("usuario", {
        usuario:{
            type: Sequelize.STRING
        },
        correoElectronico: {
            type: Sequelize.STRING
        },
        contraseña: {
            type: Sequelize.STRING
        }
    });

    return user;
};