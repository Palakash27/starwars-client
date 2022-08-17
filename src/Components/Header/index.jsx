import React from "react";
import { Link } from "react-router-dom";
// import "./styles.css";

export default function Header() {
    return (
        <nav className="nav">
            <Link to="/products">Products</Link>
            <Link to="/">
                <img src="logo.png" alt="logo" />
            </Link>
            <Link to="/signup">SignIn/SignUp</Link>
        </nav>
    );
}
