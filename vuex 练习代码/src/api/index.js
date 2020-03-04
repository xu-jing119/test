import axios from "axios";

export const API = axios.create({
  baseURL: process.env.VUE_APP_APIURL
});
