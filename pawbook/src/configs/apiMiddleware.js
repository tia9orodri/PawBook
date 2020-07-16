const serverURL = "http://localhost:5000";

export const apiRequest = (method, route, body) => {
  let currentUser = sessionStorage.getItem("user");
  return new Promise((resolve, reject) => {
    fetch(serverURL + route, {
      method,
      headers: {
         "Content-Type": "application/json",
        ...(currentUser && { Authorization: JSON.parse(currentUser).token }),
      },
      
         ...(body && {body: JSON.stringify(body) }),
         
      })
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((err) => {
        console.error(`error ${method} ${route}: ${err.message}`);
        reject(err);
      });
  });
};

const parseResponse = (response) =>
  new Promise((resolve, reject) => {
    console.log(response);
    if (response.ok) {
      resolve(response.json());
    } else {
      reject(response.text());
    }
  });

const getQueryString = (query) => {
  if (Object.values(query).some((x) => x))
    return (
      "?" +
      Object.entries(query)
        .filter(([key, value]) => query[key])
        .map(([key, value]) => `${key}=${value}`)
        .join("&")
    );
  else return "";
};