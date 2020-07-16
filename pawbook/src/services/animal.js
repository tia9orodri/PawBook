import { apiRequest } from "../configs/apiMiddleware";

export default {
    getAll: (searchText) => apiRequest("GET", `/animal`, { query: { search: searchText } }),
    getOne: (id) => apiRequest("GET", `/animal/${id}`),
    create: (jsonData) => apiRequest("POST", `/animal`, { jsonData }),
    update: (id, jsonData) => apiRequest("PUT", `/animal/data/${id}`, { jsonData }),
    //setCover: (id, formData) => apiRequest("PUT", `/animal/cover/${id}`, { formData }),
    remove: (id) => apiRequest("DELETE", `/animal/${id}`),
};