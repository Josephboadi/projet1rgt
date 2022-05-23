import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "./auth/LoginButton";
import LogoutButton from "./auth/LogoutButton";

const Header = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <header className=''>
      <Link className='headerLink' to='/'>
        {" "}
        <h1>Home</h1>{" "}
      </Link>

      {isAuthenticated ? (
        <div className='flex items-center justify-center gap-x-5'>
          <Link className='headerLink' to='/profile'>
            {" "}
            <h1>Profile</h1>{" "}
          </Link>
          <LogoutButton />
        </div>
      ) : (
        <LoginButton />
      )}
    </header>
  );
};

export default Header;
