import { Outlet, NavLink, Link } from "react-router-dom";

import { useState } from "react";

import github from "../../assets/github.svg";

import CookGPTLogo from "../../assets/CookGPTLogo.svg";

import CookLogo from "../../assets/CookLogo.svg";

import styles from "./Layout.module.css";

import { useLogin } from "../../authConfig";

import { LoginButton } from "../../components/LoginButton";

const Layout = () => {

    return (
        <div className={styles.layout}>
            <header className={styles.header} role={"banner"}>
                <div className={styles.headerContainer}>

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
                    
                    <nav className={styles.navContainer}>
                        <ul className={styles.headerNavList}>
                            <li>
                                <NavLink to="/" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                                    Chat
                                </NavLink>
                            </li>
                            {/* Commenting out "ask question" part as its not a useful feature for us */}
                            
                            <li className={styles.headerNavLeftMargin}>
                                <NavLink to="/qa" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
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
                    {/* <h4 className={styles.headerRightText}>Azure OpenAI + AI Search</h4> */}

                    {useLogin && <LoginButton />}
                </div>
            </header>

            <Outlet />
        </div>
    );
};

export default Layout;