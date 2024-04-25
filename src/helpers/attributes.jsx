import { isAuthenticated } from "./auth";

export const createAttribute = ({ formData, cookies }) => {
  const { token } = isAuthenticated(cookies);

  return fetch(`${import.meta.env.VITE_SERVER_URL}/attribute/`, {
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

export const getAdminAttributes = (cookies) => {
  const { token, user } = isAuthenticated(cookies);
  return fetch(
    `${import.meta.env.VITE_SERVER_URL}/attribute/ofadmin/${user?._id}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  ).then((response) => {
    return response.json();
  });
};

export const handleDeleteAttribute = ({ attributeId, cookies }) => {
  const { token } = isAuthenticated(cookies);

  return fetch(`${import.meta.env.VITE_SERVER_URL}/attribute/${attributeId}`, {
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
