import axios from "axios";

const instance = axios.create({
  baseURL: "https://6571bfaad61ba6fcc0137000.mockapi.io/Vote-now/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
