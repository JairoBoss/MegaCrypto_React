module.exports = {
    HOST: "localhost",
    USER: "administrador",
    PASSWORD: "administrador",
    DB: "Megacrypto",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000, //tiempo máximo, en milisegundos, que el grupo intentará conectarse ant        es de lanzar el erro
        idle: 10000 //tiempo máximo, en milisegundos, que una conexión puede estar inactiva antes de ser liberada
    }
};
