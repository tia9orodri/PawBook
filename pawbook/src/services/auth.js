import { apiRequest } from "../configs/apiMiddleware";


export default{
  register: (jsonData) => apiRequest("POST", "/user/register", {jsonData}),
  login: (jsonData) => apiRequest("POST", "/user/login", {jsonData}),
  getAll: () => apiRequest("GET", "/user", ),
  getOne: (id) => apiRequest("GET", `/user/${id}`),
  update: (id,jsonData) => apiRequest("PUT", `/user/${id}`, {jsonData}),
  remove: (id) => apiRequest("DELETE", `/user/${id}`)
}
