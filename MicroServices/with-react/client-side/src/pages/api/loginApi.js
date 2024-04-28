import axios from "axios";
 const LoginAPI = async (email, password) => {
  const response = await axios.post("http://127.0.0.1:8002/api/auth/login", {
    email,
    password,
  });

  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};
export default LoginAPI;

