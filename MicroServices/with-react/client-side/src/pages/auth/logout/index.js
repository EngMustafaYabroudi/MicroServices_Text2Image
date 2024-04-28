import React, { useState, useEffect } from "react";

const Logout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    // Clear the token from localStorage
    localStorage.removeItem("token");

    // Set the state variable
    setIsLoggedIn(false);
    window.location.href = "/";
  }, []);

  return (
    <>
      <h1>Logout</h1>
      <p>You have successfully logged out.</p>
      
    </>
  );
};

export default Logout;
