import axios from "axios";

const api = axios.create({
  baseURL: "https://lincolnomnistack-backend.herokuapp.com"
});

export default api;
