import { isAuthenticated } from "./auth";

export const createZone = ({ name, points, cookies }) => {
  const { token } = isAuthenticated(cookies);

  return fetch(`${import.meta.env.VITE_SERVER_URL}/zone/`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, points }),
  }).then((response) => {
    return response.json();
  });
};

export const handleStatusesChange = ({ zoneId, serviceName, cookies }) => {
  const { token } = isAuthenticated(cookies);

  return fetch(
    `${import.meta.env.VITE_SERVER_URL}/zone/statuses/update/${zoneId}`,
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

export const updateZone = ({ zoneId, name, points, cookies }) => {
  const { token } = isAuthenticated(cookies);

  return fetch(`${import.meta.env.VITE_SERVER_URL}/zone/${zoneId}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, points }),
  }).then((response) => {
    return response.json();
  });
};

export const deleteZone = ({ zoneId, cookies }) => {
  const { token } = isAuthenticated(cookies);

  return fetch(`${import.meta.env.VITE_SERVER_URL}/zone/${zoneId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  }).then((response) => {
    return response.json();
  });
};

export const getAllAdminZones = (cookies) => {
  const { token } = isAuthenticated(cookies);
  return fetch(`${import.meta.env.VITE_SERVER_URL}/zone/of/admin`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    return response.json();
  });
};
