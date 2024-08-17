import React from 'react';
import styles from "./Contact.module.css"
import {getImageURL} from "../../utils.js";
const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}><h2>Contact</h2>
                <p>Feel free to connect anytime!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageURL("Contact/email.png")} alt="emailicon"/>
                    <a href="mailto:lithilakavi@gmail.com">lithilakavi@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageURL("Contact/linkedin.png")} alt="linkedinicon"/>
                    <a href="www.linkedin.com/in/lithila-dewnaka">LinkedIn Profile</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageURL("Contact/github.png")} alt="githubicon"/>
                    <a href="https://github.com/dewnaka7264">Github Profile</a>
                </li>
            </ul>

        </footer>
    );
};

export default Contact;