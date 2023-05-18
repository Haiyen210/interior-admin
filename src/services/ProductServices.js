import http from "../http-common";
class ProductServices {
    getAll() {
        return http.get("/Product/GetProduct");
    }
    get(id) {
        return http.get(`/Product/getById/${id}`);
    }
    create(data) {
        return http.post("/Product", data);
    }
    update(data) {
        return http.put(`/Product/`, data);
    }
    delete(id) {
            return http.delete(`/Product?id=${id}`);
        }
}
export default new ProductServices();