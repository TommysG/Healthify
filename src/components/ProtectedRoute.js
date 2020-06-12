import React from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem("auth") === "yes") {
          return <Component {...props} />;
        } else {
          console.log("LOGIN FIRST");
          return (
            <Redirect
              to={{
                pathname: "/login",
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
