import { isAuthenticated } from "./auth";
import { uploadImage, deleteImage } from "./images";

export const saveProduct = async (product) => {
  product.image = await uploadImage(product.image);
  product.thumbnail = await uploadImage(product.thumbnail);
  const authToken = isAuthenticated();
  product.sellerId = authToken.seller._id;
  createProduct(product, authToken);
};

export const createProduct = (product, authToken) => {
  return fetch(`${process.env.REACT_APP_API_URL}/create-product`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken.token}`,
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

export const getProductData = async (productId) => {
  const product = await getProduct(productId);
  if (!product || !productId) window.location.href = "/seller/inventory";
  return product;
};

export const getProduct = (productId) => {
  return fetch(`${process.env.REACT_APP_API_URL}/view-product/${productId}`, {
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
      return {
        ...result,
        image: `${process.env.REACT_APP_API_URL}/image/${result.image}`,
        thumbnail: `${process.env.REACT_APP_API_URL}/image/${result.thumbnail}`,
      };
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteProduct = (productId) => {
  const authToken = isAuthenticated().token;
  console.log({ authToken });
  return fetch(`${process.env.REACT_APP_API_URL}/delete-product/${productId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

const getImageId = (image) => {
  return image.slice(image.lastIndexOf("/") + 1);
};

const updateProductImages = async (product, updatedProduct) => {
  var isTbFile = typeof updatedProduct.thumbnail.name == "string";
  var result = {};
  if (updatedProduct.thumbnail !== product.thumbnail) {     //thumbnail changed
    if (product.image !== product.thumbnail) { //both were not using the same image
      await deleteImage(getImageId(product.thumbnail));
      console.log("deleting....", getImageId(product.thumbnail));
    }
    if (isTbFile) {
      result.thumbnail = await uploadImage(updatedProduct.thumbnail);
      console.log("Thumbnail is a new filee!", result.thumbnail);
    } else {
      result.thumbnail = getImageId(updatedProduct.thumbnail);
    }
  }
  //image changed
  if (updatedProduct.image !== product.image) {
    await deleteImage(getImageId(product.image)); //delete image from db
    result.image = await uploadImage(updatedProduct.image);
  }
  console.log({ result });
  return result;
};

const getUpdatedFields = async (product, updatedProduct) => {
  let updatedFields = {};

  Object.keys(updatedProduct).forEach(async (key) => {
    if (updatedProduct[key] != product[key]) {
      if (key !== "image" && key !== "thumbnail")
        updatedFields[key] = updatedProduct[key];
    }
  });
  const result = await updateProductImages(product, updatedProduct);
  updatedFields = { ...updatedFields, ...result };
  return updatedFields;
};

export const updateProduct = async (product, updatedProduct) => {
  const authToken = isAuthenticated().token;
  const updatedFields = await getUpdatedFields(product, updatedProduct);
  console.log({ updatedFields });
  return fetch(
    `${process.env.REACT_APP_API_URL}/update-product/${product._id}`,
    {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(updatedFields),
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
