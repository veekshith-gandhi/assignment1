import axios from "axios";
import { Children, Fragment, useEffect } from "react";

const AuthNetworkRequest = ({ children }) => {
  axios
    .get("https://reqres.in/api/login/")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  return <Fragment>{children}</Fragment>;
};

export default AuthNetworkRequest;
