import { apiRequest } from "../configs/apiMiddleware";

export default {
    register: (jsonData) => apiRequest("POST", "/user/register", { jsonData }),
    login: (jsonData) => apiRequest("POST", "/user/login", { jsonData }),
    getAnimal: () => apiRequest("GET", "/user/animal"),
    addAnimal: (animalId) => apiRequest("POST", `/user/animal/${animalId}`),
    removeBook: (animalId) => apiRequest("DELETE", `/user/animal/${animalId}`),
};