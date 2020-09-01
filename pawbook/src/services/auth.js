import { apiRequest } from "../configs/apiMiddleware";


const register = (body) => { return apiRequest("POST", "/user/register", body) };
const login = (body) => { return apiRequest("POST", "/user/login", body) };


const getAll = () => { return apiRequest("GET", `/user`) };
const getOne = (id) => { return apiRequest("GET", `/user/${id}`) };
const update = (id, data) => { return apiRequest("PUT", `/user/${id}`, data) };
//   setCover: (id, formData) => apiRequest("PUT", `/user/cover/${id}`, { formData }),
const remove = (id) => { return apiRequest("DELETE", `/user/${id}`) };
export default {
  register,
  login,
  getAll,
  getOne,
  update,
  remove,

};