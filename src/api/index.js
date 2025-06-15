import axios from "axios";
import qs from "qs";

const URL = process.env.REACT_APP_API_URL;

export const getAllusers = async function () {
  return await axios.get(`${URL}/users`);
};

export const getUser = async function (param) {
  const searchPram = qs.stringify(param);
  return await axios.get(`${URL}/users?${searchPram}`);
};
