import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { GoSignOut ,GoSignIn } from "react-icons/go";
import { AiOutlineHome, AiOutlineUserAdd } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import React, { useState, useEffect } from "react";
const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // For logging in
    useEffect(() => {
      // Get the token from localStorage
      const token = localStorage.getItem("token");
  
      // Set the state variable
      setIsLoggedIn(!!token);
    }, []);
    return (
        // Start Global Header
        <header className="global-header">
            {/* Start Top Header */}
            <div className="top-header pt-2 pb-2">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <Link className="navbar-brand fw-bold" href="/">Image Creator By AI</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item me-2">
                                    <Link className="nav-link" aria-current="page" href="/">
                                        <AiOutlineHome />
                                        <span className="ms-2">Home</span>
                                    </Link>
                                </li>
                                <li className="nav-item me-2">
                                    <Link className="nav-link" aria-current="page" href="/products">
                                        Products
                                    </Link>
                                </li>
                                <li className="nav-item me-2">
                                    <Link className="nav-link" aria-current="page" href="/text-to-image">
                                        Text To Image
                                    </Link>
                                </li>
                                <li className="nav-item me-2">
                                    <Link className="nav-link" aria-current="page" href="/auth/register">
                                        Register
                                    </Link>
                                </li>
                                {isLoggedIn && (
                                    <li className="nav-item me-2">
                                        <Link className="nav-link" aria-current="page" href="/auth/logout">
                                            <GoSignOut />
                                            <span className="ms-2">Logout</span>
                                        </Link>
                                    </li>
                                )}
                                {!isLoggedIn && (
                                    <li className="nav-item me-2">
                                        <Link className="nav-link" aria-current="page" href="/auth/login">
                                            <GoSignIn />
                                            <span className="ms-2">Login</span>
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            {/* End Top Header */}
        </header>
        // End Global Header
    );
}

export default Header;