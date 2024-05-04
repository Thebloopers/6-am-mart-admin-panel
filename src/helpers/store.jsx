import { isAuthenticated } from "./auth";

export const createStore = ({ formData, cookies }) => {
  const { token } = isAuthenticated(cookies);

  return fetch(`${import.meta.env.VITE_SERVER_URL}/store/`, {
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
    `${
      import.meta.env.VITE_SERVER_URL
    }/store/of/admin/update/visiblity/${storeId}`,
    {
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

export const handleDeleteStore = ({ storeId, cookies }) => {
  const { token } = isAuthenticated(cookies);

  return fetch(`${import.meta.env.VITE_SERVER_URL}/store/${storeId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({}),
  }).then((response) => {
    return response.json();
  });
};
