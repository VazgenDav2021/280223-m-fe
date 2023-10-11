import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const menuItems = [
    {
        title: "Home",
        url: "/",
        cName: "nav-links"
    },
    {
        title: "About",
        url: "/about",
        cName: "nav-links"
    },
];

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-menu">
                {menuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link to={item.url}>
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navbar;
