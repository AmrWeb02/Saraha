
import React, { useState, useEffect } from "react";
import { Outlet, Navigate, } from "react-router-dom";

export const ProtectedRoute = () => {
  const [isValid, setIsValid] = useState(null); // null for initial loading state
  const token = window.localStorage.getItem("token");

  useEffect(() => {
    const tokenVerify = async () => {
      try {
        const response = await fetch("http://ec2-3-220-251-57.compute-1.amazonaws.com/user/userProfile", {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
          },
        });

        if (response.ok) {
          console.log("Token is valid");
          setIsValid(true);
        } else {
          console.log("Token expired");
          setIsValid(false);
        }
      } catch (err) {
        console.error("Error verifying token:", err);
        setIsValid(false);
      }
    };

    if (token) {
      tokenVerify();
    } else {
      setIsValid(false);
    }
  }, [token]); // Runs only once when the component mounts or when `token` changes

  // Handle loading state while the token is being verified
  if (isValid === null) {
    return <div>Loading...</div>
  }

  // Render based on the validity of the token
  return isValid ? <Outlet /> : <Navigate to="/" />;
};