import api from "./api";
const API_URL = "/users";

const getUsers = async () => {
  console.log(api);

  return await api.get(`${API_URL}`);
};

const UserService = {
  getUsers,
};

export default UserService;
//api
