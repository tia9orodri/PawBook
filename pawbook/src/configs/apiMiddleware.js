const serverURL = "http://localhost:5000";

export const apiRequest = (method, route, params) => {
  let currentUser = sessionStorage.getItem("users");
  console.log(method, route, params);
  return new Promise((resolve, reject) => {
    let serviceUrl = serverURL + route;
    
    fetch(serviceUrl, {

      method,
      headers: {
        ...(params && params.jsonData && { "Content-Type": "application/json" }),
        ...(currentUser && { Authorization: JSON.parse(currentUser).token }),
      },
      ...(params && {
        ...(params.jsonData && { body: JSON.stringify(params.jsonData) }),
        ...(params.formData && { body: params.formData }),
      }),
    })
      .then((res) => parseResponse(res))
      .then((data) => resolve(data))
      .catch((err) => reject(err))
  });
};

const parseResponse = (response) =>
  new Promise((resolve, reject) => {
    if (response.ok) {
      resolve(response.json());
    } else {
      reject(response.text());
    }
  });
