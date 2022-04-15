export const saveProduct = async (product) => {
  product.image = await uploadProductImages(product.image);
  product.thumbnail = await uploadProductImages(product.thumbnail);
  console.log(product);
};

export const uploadProductImages = (image) => {
  var data = new FormData();
  data.append("image", image);
  console.log("image is", image);
  return fetch(`${process.env.REACT_APP_API_URL}/image/upload`, {
    method: "POST",
    body: data,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createProduct = (product) => {
  return fetch(`${process.env.REACT_APP_API_URL}/create-product`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
