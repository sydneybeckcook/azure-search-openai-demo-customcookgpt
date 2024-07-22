import React, { useState, useEffect, useRef, RefObject } from "react";
import { Outlet, NavLink, Link } from "react-router-dom";

import { useState } from "react";

import github from "../../assets/github.svg";

import CookGPTLogo from "../../assets/CookGPTLogo.svg";

import CookLogo from "../../assets/CookLogo.svg";

import styles from "./Layout.module.css";

import { useLogin } from "../../authConfig";

import { LoginButton } from "../../components/LoginButton";
import { IconButton } from "@fluentui/react";

const Layout = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef: RefObject<HTMLDivElement> = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <div className={styles.layout}>
            <header className={styles.header} role={"banner"}>
                <div className={styles.headerContainer} ref={menuRef}>
                    <Link to="/" className={styles.headerTitleContainer}>
                        <img
                            src={CookLogo}
                            alt="Cook logo"
                            width="170px"
                            height="40px"
                            className={styles.cookLogo}
                        />
                        <div className={styles.titleContainer}>
                        <h3 id="header-title" className={styles.headerTitle}>
                            CookGPT+ Beta
                        </h3>
                    </div>
                    </Link>
                    <nav>
                        <ul className={`${styles.headerNavList} ${menuOpen ? styles.show : ""}`}>
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Chat
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/qa"
                                    className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Ask a question
                                </NavLink>
                            </li>
                            
                            {/* No need for the original github repository logo */}
                            {/* <li className={styles.headerNavLeftMargin}>
                                <a href="https://aka.ms/entgptsearch" target={"_blank"} title="Github repository link">
                                    <img
                                        src={github}
                                        alt="Github logo"
                                        aria-label="Link to github repository"
                                        width="20px"
                                        height="20px"
                                        className={styles.githubLogo}
                                    />
                                </a>
                            </li> */}
                        </ul>
                    </nav>
                    <div className={styles.loginMenuContainer}>
                        {useLogin && <LoginButton />}
                        <IconButton iconProps={{ iconName: "GlobalNavButton" }} className={styles.menuToggle} onClick={toggleMenu} ariaLabel="Toggle menu" />
                    </div>
                </div>
            </header>

            <Outlet />
        </div>
    );
};

export default Layout;