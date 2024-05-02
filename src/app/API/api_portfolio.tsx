import axios from "axios";



  export const Api_portfolio = axios.create({
    // baseURL: "https://api-portifolio-egw8.onrender.com",
    baseURL: "http://localhost:4000",
    timeout: 30000,
  });
