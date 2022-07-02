import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//token 



export const Navbar = ({ token }) => {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
  }, [token])
  
  return (
      <div id="navbarGrandParent">
          {loggedIn ? (
            <div id="navbarLoggedIn"> 
              <span>
                <Link to="/Newpost">Create a New Post</Link>
              </span>

              <span>
                <Link to="/Posts">View Posts</Link>
              </span>
              <span>
                <Link to="/Profile">View Profile</Link>
              </span>
              <span>
                <Link 
                to="/"
                onClick={() => {
                  localStorage.removeItem('token')
                  setLoggedIn(false)
                }}
                >Logout
                </Link>
              </span>
            </div>
          ) : (
            <div id="navbarLoggedOut"> 
                <span>
                  <Link to="/Login">Login</Link>
                </span>
                <span>
                  <Link to="/Register">Create New Account</Link>
                </span>
            </div>
          )}
      </div>
  )
}

export default Navbar