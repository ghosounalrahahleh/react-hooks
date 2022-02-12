import React from "react";
import { NavLink } from "react-router-dom";

const Nav = ({ LoggedIn, setLoggedIn }) => {
  const logoutHandler = () => {
    setLoggedIn(false);
    sessionStorage.clear();
  };
  return (
    <div className="ui borderless main menu">
      <div className="ui text container">
        {LoggedIn === true ? (
          ""
        ) : (
          <NavLink to="/" className="item">
            Register
          </NavLink>
        )}
        {LoggedIn === true ? (
          <NavLink to="/logout" className="item" onClick={logoutHandler}>
            Logout
          </NavLink>
        ) : (
          <NavLink to="/login" className="item">
            Login
          </NavLink>
        )}

        <NavLink to="/comments" className=" item">
          Comments
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
