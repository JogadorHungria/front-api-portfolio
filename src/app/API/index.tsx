import axios from "axios";

export const Api_portfolio = axios.create({
    baseURL: "https://api-portifolio-egw8.onrender.com",
    timeout: 30000,
  });