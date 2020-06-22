import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Base64 } from "js-base64";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem(Base64.encode("user"))) {
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
