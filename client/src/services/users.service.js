import axios from "axios";

const BASE_URL = "http://localhost:5050/users/";

if (process.env.NODE_ENV === "production") {
  BASE_URL = "/api/users";
}

const getAllUsers = async () => {
  try {
    const res = await axios.get(BASE_URL);
    return await res.data;
  } catch (error) {
    console.log(error);
  }
};

const getUserById = async (id) => {
  try {
    const res = await axios.get(BASE_URL + id);
    return await res.data;
  } catch (error) {
    console.log(error);
  }
};

export { getAllUsers, getUserById };
