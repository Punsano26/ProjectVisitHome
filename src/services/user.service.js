import api from "./api";

const getUsers = async () => {
  return await api.get(`/users`);
};

const login = async (data) => {
  return await api.post(`/sign`, data);
};

const UserService = {
  getUsers,
  login,
};

export default UserService;
//api
