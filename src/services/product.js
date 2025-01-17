import {
  ACTION_DELETE,
  ACTION_GET,
  ACTION_PATCH,
  ACTION_POST,
  ACTION_PUT,
  BASE_URL,
} from "./config";

export const GET_Products = () => {
  const url = `${BASE_URL}/gifts?page[number]=1&page[size]=100&sort=DESC`;
  return new Promise((resolve, reject) => {
    ACTION_GET(url)
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const GET_Detail_Product = (id) => {
  const url = `${BASE_URL}/gifts/${id}`;
  return new Promise((resolve, reject) => {
    ACTION_GET(url)
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const UPDATE_Product = (id) => {
  const url = `${BASE_URL}/gifts/${id}/wishlist`;
  return new Promise((resolve, reject) => {
    ACTION_POST(url)
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
