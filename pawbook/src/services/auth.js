import { apiRequest } from "../configs/apiMiddleware";

export default {
  register: (body) => apiRequest("POST", "/user/register", body),
  login: (body) => apiRequest("POST", "/user/login", body),

  
  getAll: () => apiRequest("GET", `/user`),
  getOne: (id) => apiRequest("GET", `/user/${id}`),
  update: (id, data) => apiRequest("PUT", `/user/${id}`, data),
//   setCover: (id, formData) => apiRequest("PUT", `/user/cover/${id}`, { formData }),
  remove: (id) => apiRequest("DELETE", `/user/${id}`),
};