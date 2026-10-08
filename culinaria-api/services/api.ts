import axios from "axios";

export const api = axios.create({
  baseURL: "https://6ac3f0ffae53bf25b80f262a.mockapi.io/culiaria/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
//npm install axios