import api from "./api";
const API_URL = "/users";

const getUsers = async () => {
    const response = await api.get(API_URL+"/");
    console.log(await api.get(API_URL));

  return response;
};

const UserService = {
  getUsers,
};

export default UserService;
//api
