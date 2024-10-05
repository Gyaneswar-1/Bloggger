// authService.js
import axios from "axios";

const API_URL = "http://localhost:3000/api/v1/user"; // Update to use your API base URL

// Register user
export const register = async (userdata) => {
  const { email, username, password, pfp } = userdata;
  const response = await axios.post(`${API_URL}/register`, {
    email,
    username,
    password,
    pfp,
  });
  if (response.data.token) {
    localStorage.setItem("token", response.data.token); // Store token upon registration
  }
  return {authorization:response.data.token};
};

// Login user
export const login = async (userdata) => {
  const {email,password} = userdata;
  const response = await axios.post(`${API_URL}/login`, { email, password });
  if (response.data.token) {
    localStorage.setItem("token", response.data.token); // Store token upon login
  }
  return {authorization:response.data.token};
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

export const logout = () => {
  localStorage.removeItem("token");
};
