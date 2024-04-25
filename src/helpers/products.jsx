import { isAuthenticated } from "./auth";

export const getAllAdminProducts = (cookies) => {
  const { token, user } = isAuthenticated(cookies);
  return fetch(
    `${import.meta.env.VITE_SERVER_URL}/product/ofadmin/${user?._id}`,
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
