import axios from "axios";
import { LOCALSTORAGE } from "common/constants";

export const BASE_URL = process.env.REACT_APP_BASE_SERVER_URL;

let configFile = {
  headers: {
    "Content-type": "multipart/form-data",
  },
};

const xOrigin = process.env.REACT_APP_BASE_SERVER_URL;
let configStripe = {
  headers: {
    "Content-type": "application/json",
    "X-origin": xOrigin,
  },
};

// this is inteceptor for handling header API request
axios.interceptors.request.use(
  (config) => {
    let token = "";
    token = localStorage.getItem(LOCALSTORAGE.TOKEN);
    if (token) config.headers.authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const API_CHECK = (url, params = {}) => {
  const token = localStorage.getItem(LOCALSTORAGE.TOKEN);
  console.warn("API_CHECK", url, JSON.stringify(params), token);
};

/** --------------------------------------------------------------------------------- */
/** ================================= AXIOS ACTIONS ================================= */
/** --------------------------------------------------------------------------------- */

export const ACTION_GET = (url) => {
  API_CHECK(url);
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        handleError(err, reject);
      });
  });
};

export const ACTION_POST = (url, param) => {
  API_CHECK(url, param);
  return new Promise((resolve, reject) => {
    axios
      .post(url, param)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        handleError(err, reject);
      });
  });
};

export const ACTION_POST_FILE = (url, param) => {
  API_CHECK(url, param);
  return new Promise((resolve, reject) => {
    axios
      .post(url, param, configFile)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        handleError(err, reject);
      });
  });
};

export const ACTION_POST_STRIPE = (url, param) => {
  API_CHECK(url, param);
  return new Promise((resolve, reject) => {
    axios
      .post(url, param, configStripe)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        handleError(err, reject);
      });
  });
};

export const ACTION_PATCH = (url, param) => {
  API_CHECK(url, param);
  return new Promise((resolve, reject) => {
    axios
      .patch(url, param)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        handleError(err, reject);
      });
  });
};

export const ACTION_PUT = (url, param) => {
  API_CHECK(url, param);
  return new Promise((resolve, reject) => {
    axios
      .put(url, param)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        handleError(err, reject);
      });
  });
};

export const ACTION_DELETE = (url) => {
  API_CHECK(url);
  return new Promise((resolve, reject) => {
    axios
      .delete(url)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        handleError(err, reject);
      });
  });
};

const handleError = (err, reject) => {
  // Log the error for debugging purposes
  console.error("Error:", err);

  if (err.response) {
    // Server responded with a status other than 2xx
    const status = err.response.status;

    if (err.response.data.code === 4005) {
      localStorage.clear();
      window.location.href = "/";
    }

    reject({ ...err.response.data, status });
  } else if (err.request) {
    // Request was made but no response was received
    console.error("No response received:", err.request);
    reject({ message: "No response received from server", status: 503 });
  } else {
    // Something happened in setting up the request
    console.error("Error in setting up request:", err.message);
    reject({ message: err.message, status: 500 });
  }
};
