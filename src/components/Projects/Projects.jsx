import React from 'react';

import { getImageURL } from "../../utils.js";

import projects from "../../Data/projects.json";
import styles from ".//Projects.module.css";
const Projects = () => {
    return (
        <section className={styles.container}>
            <h2  className={styles.title}>Projects</h2>
            <div className={styles.projects}>
                {projects.map((project, id) => {
                    return (
                        <div key={id}>
                            <img src={getImageURL(project.imageSrc)} alt={`Image of ${project.title}`} className={styles.image}/>

                            <h3 className={styles.title}>{project.title}</h3>
                            <p className={styles.description}>{project.description}</p>
                            <ul className={styles.skills}>
                                {project.skills.map((skill, id) => (
                                    <li className={styles.skill} key={id}>{skill}</li>
                                ))}
                            </ul>
                            <div className={styles.links}>
                                <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.link}>Demo</a>
                                <a href={project.source} target="_blank" rel="noopener noreferrer" className={styles.link}>Source</a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;
