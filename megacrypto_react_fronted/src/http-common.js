import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:9595/megacrypto",
    headers: {
        "Content-type" : "application/json"
    }
})
