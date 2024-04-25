import { isAuthenticated } from "./auth";

export const createStore = ({ formData, cookies }) => {
  const { token } = isAuthenticated(cookies);

  return fetch(`http://localhost:7000/api/v1/store/`, {
    // return fetch(`${import.meta.env.VITE_SERVER_URL}/store/`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  }).then((response) => {
    return response.json();
  });
};

export const getAdminStores = (cookies) => {
  const { token } = isAuthenticated(cookies);
  return fetch(`${import.meta.env.VITE_SERVER_URL}/store/of/admin/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    return response.json();
  });
};

export const handleVisibilityChange = ({ storeId, cookies }) => {
  const { token } = isAuthenticated(cookies);

  return fetch(
    `${import.meta.env.VITE_SERVER_URL}/store/of/admin/update/visiblity/${storeId}`,
    {
      // return fetch(`${import.meta.env.VITE_SERVER_URL}/store/of/admin/update/visiblity`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({}),
    }
  ).then((response) => {
    return response.json();
  });
};
