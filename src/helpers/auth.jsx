export const adminSignIn = ({ email, password }) => {
  return fetch(`${import.meta.env.VITE_SERVER_URL}/auth/admin/login`, {
    method: "POST",
    headers: {
      Accept: "*/*", // Corrected Accept header
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((response) => {
    return response.json();
  });
};

export const getMyProfile = () => {
  const { token } = isAuthenticated();
  return fetch(`${import.meta.env.VITE_SERVER_URL}/user/myprofile`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    return response.json();
  });
};

export const updateProfile = async ({ formData }) => {
  const { token } = isAuthenticated();
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}/user/update`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    }
  );
  const data = await response.json();
  return data; // Don't forget to return the fetched data
};
export const signout = (removeCookie, next) => {
  if (typeof window !== "undefined") {
    removeCookie("adminuser");
    next();
  }
};
// To remain signed in even browser automatically remove user details
export const authenticate = (data, next, setCookie) => {
  if (typeof window !== "undefined") {
    const cookieExpireTime = parseInt(
      import.meta.env.VITE_COOKIE_EXPIRE_TIME,
      
    ); // Read the expiration time from env
    const expiresInCustomTime = new Date();
    expiresInCustomTime.setTime(
      expiresInCustomTime.getTime() + cookieExpireTime
    );

    setCookie("adminuser", JSON.stringify(data), {
      expires: expiresInCustomTime,
    });
    next();
  }
};

// check whether user is signed in or not
export const isAuthenticated = (cookies) => {
  if (typeof window == "undefined") {
    return false;
  }

  // If cookies.jwt exists and is not empty, return its parsed value
  if (cookies.adminuser) {
    return cookies.adminuser;
  }
};
