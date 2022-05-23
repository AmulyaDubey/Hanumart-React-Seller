import { getSellerId } from "./auth";

export const addOffer = (offer, authToken) => {
  return fetch(`${process.env.REACT_APP_API_URL}/add-offer`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken.token}`,
    },
    body: JSON.stringify(offer),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getSellerOffers = () => {
  const sellerId = getSellerId();
  return fetch(`${process.env.REACT_APP_API_URL}/seller-offers/${sellerId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
