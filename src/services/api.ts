import axios from "axios";

export const api = axios.create({
  baseURL: "https://bankrupt-finance-control.web.app/api",
  // Change to "https://localhost:3000/api" if you want to run it locally
});
