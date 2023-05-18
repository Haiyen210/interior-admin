import axios from "axios";
export default axios.create({
    // baseURL: "https://localhost:44339/api",
    baseURL: "http://localhost:21011/api",
    headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
    },
});