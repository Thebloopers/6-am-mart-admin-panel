import { isAuthenticated } from "./auth";

export const createUnit = ({ formData, cookies }) => {
  const { token } = isAuthenticated(cookies);

  return fetch(`${import.meta.env.VITE_SERVER_URL}/unit/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: formData?.get("name"),
    }),
  }).then((response) => {
    return response.json();
  });
};

export const getAdminUnits = (cookies) => {
  const { token, user } = isAuthenticated(cookies);
  return fetch(`${import.meta.env.VITE_SERVER_URL}/unit/ofadmin/${user?._id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    return response.json();
  });
};

export const handleDeleteUnit = ({ unitId, cookies }) => {
  const { token } = isAuthenticated(cookies);

  return fetch(`${import.meta.env.VITE_SERVER_URL}/unit/${unitId}`, {
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
