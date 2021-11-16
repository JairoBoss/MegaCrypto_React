import http from "../http-common";

class UsuarioService {
    getAll() {
        return http.get("/usuarios");
    }

    get(id) {
        return http.get("/usuarios/" + id);
    }

    create(data) {
        return http.post("/usuarios", data);
    }

    update(id, data) {
        return http.put("/usuarios/" + id, data);
    }

    delete(id) {
        return http.delete("/usuarios/" + id);
    }

    deleteAll() {
        return http.delete("/usuarios");
    }

    findByNombre(nombre) {
        return http.get("/usuarios?usuario=" + nombre);
    }
}

export default new UsuarioService();