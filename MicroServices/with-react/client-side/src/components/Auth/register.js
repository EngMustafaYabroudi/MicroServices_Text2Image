import React, { useState } from "react";
import RegisterAPI from "../../pages/api/registerApi.js";
const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await RegisterAPI(email,name, password);

      if (response.success) {
        alert(response.message);
        window.location.href = "/products";
      } else {
        alert(response.message);
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
      <label class="label" for="name">User Name </label>
      <input
        type="name"
        class="form-control"
        id="name"
        placeholder="user name"
        onChange={(event) => setName(event.target.value)}
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
    <button type="submit" class="btn btn-primary"> Register</button>
  </form>
  );
};

export default Register;
