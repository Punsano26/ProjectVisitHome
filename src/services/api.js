import axios from "axios";
const baseURL = process.env.BASE_URL;


const instance = axios.create({
    baseURL: baseURL,
  header: {
    "Content-Type": "application/json",
  },
})
export default instance;
//api