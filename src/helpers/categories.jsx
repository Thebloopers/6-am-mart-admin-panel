import { isAuthenticated } from "./auth";

export const createCategory = ({ formData, cookies }) => {
  const { token } = isAuthenticated(cookies);

  return fetch(`${import.meta.env.VITE_SERVER_URL}/category/`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  }).then((response) => {
    return response.json();
  });
};

export const createSubCategory = ({ formData, cookies }) => {
  const { token } = isAuthenticated(cookies);

  return fetch(`${import.meta.env.VITE_SERVER_URL}/subcategory/`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: formData?.get("name"),
      mainCategory: formData?.get("mainCategory"),
    }),
  }).then((response) => {
    return response.json();
  });
};

export const getAllAdminCategoriesAndSub = (cookies) => {
  const { token, user } = isAuthenticated(cookies);
  return fetch(
    `${import.meta.env.VITE_SERVER_URL}/category/all/ofadmin/${user?._id}`,
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

export const getAdminCategories = (cookies) => {
  const { token, user } = isAuthenticated(cookies);
  return fetch(
    `${import.meta.env.VITE_SERVER_URL}/category/ofadmin/${user?._id}`,
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

export const getAdminSubCategories = (cookies) => {
  const { token, user } = isAuthenticated(cookies);
  return fetch(
    `${import.meta.env.VITE_SERVER_URL}/subcategory/ofadmin/${user?._id}`,
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

export const handleCategoryVisibilityChange = ({ categoryId, cookies }) => {
  const { token } = isAuthenticated(cookies);

  return fetch(
    `${
      import.meta.env.VITE_SERVER_URL
    }/category/of/admin/update/visiblity/${categoryId}`,
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

export const handleSubCategoryVisibilityChange = ({
  subcategoryId,
  cookies,
}) => {
  const { token } = isAuthenticated(cookies);

  return fetch(
    `${
      import.meta.env.VITE_SERVER_URL
    }/subcategory/of/admin/update/visiblity/${subcategoryId}`,
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
