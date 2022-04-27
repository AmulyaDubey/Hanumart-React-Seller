export const uploadImage = (image) => {
  var data = new FormData();
  data.append("image", image);
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

export const deleteImage = (imageId) => {
  return fetch(`${process.env.REACT_APP_API_URL}/image/${imageId}`, {
    method: "DELETE",
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
};
