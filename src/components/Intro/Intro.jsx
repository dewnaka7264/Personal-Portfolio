import React from 'react';
import {getImageURL} from "../../utils.js";

import styles from "./Intro.module.css";

const Intro = () => {
    return (
        <section className={styles.container} id="intro">
            <div className={styles.content}><h1>Hi, I'm Dewnaka</h1>
            <p className={styles.description}>As a software engineering undergraduate, I possess strong programming,
                communication, and leadership skills.
                {/*I’m passionate about software development and staying ahead of industry trends. I strive to create innovative solutions that bridge the gap
                between technical and non-technical stakeholders. My goal is to contribute to cutting-edge projects and drive positive change through technology.
                I am currently expanding my expertise by learning full stack development tools.*/}</p>
            <a href="mailto:lithilakavi@gmail.com" className={styles.contactBtn}>Contact me</a>
            </div>
            <img className={styles.DewnakaImg} src="src/Assets/Intro/DEWNAKA.jpg" alt="Dewnaka Image" />






            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>


        </section>
    );
};

export default Intro;