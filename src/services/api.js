import axios from "axios";
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

console.log("baseURL=", baseURL);

const instance = axios.create({
  baseURL: baseURL,
  headers: {

    "Content-Type": "application/json",
  },
  withCredentials: true,
});
export default instance;
//api
