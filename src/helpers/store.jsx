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

export const updateStore = ({ formData, cookies }) => {
  const { token } = isAuthenticated(cookies);

  return fetch(`${import.meta.env.VITE_SERVER_URL}/store/`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  }).then((response) => {
    return response.json();
  });
};

export const getAdminStores = (zoneId, cookies) => {
  const { token } = isAuthenticated(cookies);
  if (zoneId) {
    return fetch(
      `${import.meta.env.VITE_SERVER_URL}/store/of/admin/zone/${zoneId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ).then((response) => {
      return response.json();
    });
  }
  return fetch(`${import.meta.env.VITE_SERVER_URL}/store/of/admin/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    return response.json();
  });
};

export const handleVisibilityChange = ({ storeId, serviceName, cookies }) => {
  const { token } = isAuthenticated(cookies);

  return fetch(
    `${import.meta.env.VITE_SERVER_URL}/store/statuses/update/${storeId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ serviceName }),
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
