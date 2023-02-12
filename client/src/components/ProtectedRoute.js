import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ path, exact, children }) => {
  const auth = useSelector((store) => store.authenticated);

  return auth ? (
    <Route path={path} exact={exact}>
      {children}
    </Route>
  ) : (
    <Redirect to="/auth/google" />
  );
};

export default ProtectedRoute;