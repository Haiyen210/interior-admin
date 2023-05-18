import http from "../http-common";
class RoleServices {
    getAll() {
        return http.get("/Role");
    }
    get(id) {
        return http.get(`/Role/getById/${id}`);
    }
    create(data) {
        return http.post("/Role", data);
    }
    update(data) {
        return http.put(`/Role/`, data);
    }
    delete(id) {
            return http.delete(`/Role?id=${id}`);
        }
}
export default new RoleServices();