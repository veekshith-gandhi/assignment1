import Home from "../pages/Home";
import Contacts from "../pages/Contacts";
import Login from "../pages/Login";
import AboutUs from "../pages/AboutUs";
import Services from "../pages/Services";

import { Route } from "react-router-dom";

const AllRoute = () => {
  return (
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/aboutUs">
        <AboutUs />
      </Route>
      <Route exact path="/contacts">
        <Contacts />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/services">
        <Services />
      </Route>
    </div>
  );
};
export default AllRoute;
