import React from 'react';
import {getImageURL} from "../../utils.js";
import styles from "./About.module.css"
const About = () => {
    return (
        <section className={styles.container} id="about">
<h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageURL()} alt="Dewnaka image " className={styles.aboutImage}/>
            </div>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}><img src={getImageURL("About/cursor-icon.")} alt="cursor"/>
                <div className={styles.aboutItemText}>
                   <h3>Web Development</h3>
                    <p>As a Software Engineer, I design, develop, and maintain software applications. My strong programming skills in Java, Python, and JavaScript,
                        combined with my experience in React and Firebase, allow me to contribute effectively to various software development projects.
                        I work closely with cross-functional teams to create high-quality software solutions that meet client requirements and enhance user experience.</p>
                </div>
            </li>
                <li className={styles.aboutItem}><img src={getImageURL("About/web-icon.")} alt="web"/>
                    <div className={styles.aboutItemText}>
                        <h3>Software Development</h3>
                        <p>In my role as a Full Stack Developer, I leverage my knowledge of both front-end and back-end technologies to
                            develop fully functioning web applications. With expertise in React.js for front-end development and Firebase for back-end services,
                            I build responsive, scalable, and robust applications. I manage the complete software development lifecycle,
                            from designing the user interface
                            to managing databases and ensuring smooth deployment using CI/CD pipelines like GitHub Actions.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}><img src={getImageURL("About/web-icon.")} alt="web"/>
                    <div className={styles.aboutItemText}>
                        <h3> Machine Learning</h3>
                        <p>I am well-equipped to pursue a role as a Machine Learning Engineer. I develop and optimize machine learning models,
                            perform data pre-processing, and interpret complex datasets to extract meaningful insights. My understanding of R and Python is
                            essential for developing and deploying predictive models in various business applications.
                        </p>
                    </div>
                </li>
            </ul>
        </section>
    );
};

export default About;