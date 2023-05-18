import http from "../http-common";
class CategoryServices {
    getAll() {
        return http.get("/Category");
    }
    get(id) {
        return http.get(`/Category/getById/${id}`);
    }
    create(data) {
        return http.post("/Category", data);
    }
    update(data) {
        return http.put(`/Category/`, data);
    }
    delete(id) {
            return http.delete(`/Category?id=${id}`);
        }
}
export default new CategoryServices();