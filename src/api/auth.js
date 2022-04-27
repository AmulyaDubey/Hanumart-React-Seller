export const signin = (user) => {
  return fetch(`${process.env.REACT_APP_API_URL}/seller/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const authenticate = (jwt, next) => {
  //set jwt in local storage of browser after login
  if (typeof window !== undefined) {
    localStorage.setItem("sellerJwt", JSON.stringify(jwt));
    next();
  }
};

export const signout = () => {
  if (typeof window !== undefined) localStorage.removeItem("sellerJwt");
  return fetch(`${process.env.REACT_APP_API_URL}/seller/signout`, {
    method: "GET",
  })
    .then((response) => {
      // return response.json();
      window.location.href = "/"
    })
    .catch((err) => {
      console.log(err);
    });
};

export const isAuthenticated = () => {
  // check and return jwt token and user Id
  if (typeof window === undefined) {
    return false;
  }
  if (localStorage.getItem("sellerJwt")) {
    return JSON.parse(localStorage.getItem("sellerJwt"));
  } else {
    return false;
  }
};

export const signup = (user) => {
  return fetch(`${process.env.REACT_APP_API_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getSellerId = () => {
  if (isAuthenticated().seller) {
    return isAuthenticated().seller._id;
  } else return null;
};
