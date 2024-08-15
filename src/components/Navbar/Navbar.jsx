import React,{useState} from 'react';
import styles from "./Navbar.module.css";
import {getImageURL} from "../../utils.js";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href='/'>
                Portfolio
            </a>
            <div className={styles.menu}>
                <img className={styles.menuBtn} src={getImageURL("nav/menuIcon.png")} alt='menu-button'></img>
                <ul className={styles.menuItems}>
                    <li>
                        <a href="about">About</a>
                    </li>
                    <li>
                        <a href="experience">Experience</a>
                    </li>
                    <li>
                        <a href="projects">Project</a>
                    </li>
                    <li>
                        <a href="contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;