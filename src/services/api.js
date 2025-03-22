import axios from "axios";
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
<<<<<<< HEAD
console.log("baseURL=", baseURL);

const instance = axios.create({
  baseURL: baseURL,
  headers: {
=======

const instance = axios.create({
  baseURL: baseURL,
  header: {
>>>>>>> 962e8a4072208dfd3e3d227edfad987d60a383fb
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
export default instance;
//api
