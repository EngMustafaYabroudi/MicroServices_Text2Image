import axios from "axios";
const RegisterAPI = async (email,name, password) => {
    const response = await axios.post(`http://localhost:8002/api/auth/register`, {
      name,
      email,
      password,
    });
  
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(response.statusText);
    }
  };
  export default RegisterAPI;