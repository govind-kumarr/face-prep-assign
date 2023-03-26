import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const loginData = JSON.parse(localStorage.getItem("loginData"));
  const navigate = useNavigate();

  useEffect(() => {
    if (loginData?.name != "foo" && loginData?.password != "bar")
      return navigate("/");
  }, []);

  if (loginData?.name == "foo" && loginData?.password == "bar")
    return <>{children}</>;
};
