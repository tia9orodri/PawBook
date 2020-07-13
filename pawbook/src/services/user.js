import { apiRequest } from "../configs/apiMiddleware";

export default {
    register: (jsonData) => apiRequest("POST", "/user/register", { jsonData }),
    login: (jsonData) => apiRequest("POST", "/user/login", { jsonData }),
    getAnimal: () => apiRequest("GET", "/user/animal"),
    addAnimal: (animalID) => apiRequest("POST", `/user/animal/${animalID}`),
    removeBook: (animalID) => apiRequest("DELETE", `/user/animal/${animalID}`),
};