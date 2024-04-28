// import React, { useState } from "react";
// import LoginAPI from "../../pages/api/loginApi.js";
// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await LoginAPI(email, password);

//       if (response.success) {
//         alert(response.message);
//         localStorage.setItem("token", response.data.token);
//         setIsLoggedIn(true);
//         window.location.href = "/products";
//       } else {
//         alert(response.message);
//       }
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   return (
//     <form class="form" onSubmit={handleSubmit}>
//     <div class="form-group">
//       <label class="label" for="email">Email </label>
//       <input
//         type="email"
//         class="form-control"
//         id="email"
//         placeholder="email"
//         onChange={(event) => setEmail(event.target.value)}
//       />
//     </div>
//     <div class="form-group">
//       <label class="label" for="password">Password </label>
//       <input
//         type="password"
//         class="form-control"
//         id="password"
//         placeholder="password "
//         onChange={(event) => setPassword(event.target.value)}
//         required
//       />
//     </div>
//     <button type="submit" class="btn btn-primary"> Login</button>
//   </form>
//   );
// };

// export default Login;

import React, { useState } from "react";
import LoginAPI from "../../pages/api/loginApi.js";
import Toast from "react-toastify";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await LoginAPI(email, password);

      if (response.success) {
        <Toaster
  position="top-center"
  reverseOrder={false}
/>
        // Save the token to local storage
        localStorage.setItem("token", response.token);
        console.log("Token"+ localStorage.getItem("token"));
        window.location.href = "/products";
      } else {
        Toast.error();
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form class="form" onSubmit={handleSubmit}>
    <div class="form-group">
      <label class="label" for="email">Email </label>
      <input
        type="email"
        class="form-control"
        id="email"
        placeholder="email"
        onChange={(event) => setEmail(event.target.value)}
      />
    </div>
    <div class="form-group">
      <label class="label" for="password">Password </label>
      <input
        type="password"
        class="form-control"
        id="password"
        placeholder="password "
        onChange={(event) => setPassword(event.target.value)}
        required
      />
    </div>
    <button type="submit" class="btn btn-primary"> Login</button>
    
  </form>
  );
};

export default Login;

