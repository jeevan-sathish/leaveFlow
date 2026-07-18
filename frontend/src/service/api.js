import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:300",
});
export { api };
