import { getSellerId } from "./auth";

export const getDate = (date) => {
  let orderDate = new Date(date);
  return orderDate.toDateString().slice(4);
};

const sameDay = (d1, d2) => {
  return (
    d1.getUTCFullYear() == d2.getUTCFullYear() &&
    d1.getUTCMonth() == d2.getUTCMonth() &&
    d1.getUTCDate() == d2.getUTCDate()
  );
};

const sameMonth = (d1, d2) => {
  return (
    d1.getUTCFullYear() == d2.getUTCFullYear() &&
    d1.getUTCMonth() == d2.getUTCMonth()
  );
};

export const countOrders = (orders) => {
  let todayOrders = 0,
    monthlyOrders = 0;
  let today = new Date();

  orders.forEach((order) => {
    const orderDate = new Date(order.orderDate);
    if (sameDay(orderDate, today)) todayOrders++;
    if (sameMonth(orderDate, today)) monthlyOrders++;
  });
  return {
    todayOrders,
    monthlyOrders,
  };
};

export const getSellerOrders = () => {
  const sellerId = getSellerId();
  return fetch(`${process.env.REACT_APP_API_URL}/seller/${sellerId}/orders`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result.map((order) => {
        return {
          ...order,
          orderDate: getDate(order.orderDate),
        };
      });
    })
    .then((orders) => {
      return {
        orders,
        ...countOrders(orders),
      };
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getSellerProducts = () => {
  const sellerId = getSellerId();
  return fetch(`${process.env.REACT_APP_API_URL}/seller/${sellerId}/products`, {
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
