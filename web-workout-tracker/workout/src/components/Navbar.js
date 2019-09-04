// src/components/NavBar.js

import React from "react";
import {useAuth0} from "../components/auth0-wrapper";

import {Link} from "react-router-dom";

const NavBar = () => {
    const {isAuthenticated, loginWithRedirect, logout} = useAuth0();

    return (
        <div>
            {!isAuthenticated && (
                <button onClick={() => loginWithRedirect({})}>Log in</button>
            )}

            {isAuthenticated && <button onClick={() => logout()}>Log out</button>}

            {isAuthenticated && (
                <span>
                    <Link to="/profile">Profile</Link>
                    <Link to="/user-settings">Settings</Link>
                    <Link to='/input-workout'>Input Workout</Link>

        </span>
            )}
        </div>
    );
};

export default NavBar;
