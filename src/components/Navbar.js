import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ token }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [token]);

  return (
      <div id="navlinks">
        <span>
          <Link to="/Posts">View Posts</Link>
        </span>
        <div>
          {isLoggedIn ? (
            <div>
              <span>
                <Link to="/Newpost">Add a Post</Link>
              </span>
              <span>
                <Link to="/Profile">Profile</Link>
              </span>
              <span>
                <Link
                  to="/"
                  onClick={() => {
                    localStorage.removeItem("token");
                    setIsLoggedIn(false);
                  }}
                >
                  Logout
                </Link>
              </span>
            </div>
          ) : (
            <div>
              <div>
                <span>
                  <Link to="/Login">Login</Link>
                </span>
                <span>
                  <Link to="/Register">Register</Link>
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
  );

  console.log(isLoggedIn);
};

export default Navbar;