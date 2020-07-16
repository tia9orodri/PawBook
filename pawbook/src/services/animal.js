import { apiRequest } from "../configs/apiMiddleware";

export default {
    getAll: () => apiRequest("GET", `/animal`),
    getOne: (id) => apiRequest("GET", `/animal/${id}`),
    create: (body) => apiRequest("POST", `/animal`,body),
    update: (id, body) => apiRequest("PUT", `/animal/data/${id}`, body),
    //setCover: (id, formData) => apiRequest("PUT", `/animal/cover/${id}`, { formData }),
    remove: (id) => apiRequest("DELETE", `/animal/${id}`),
};