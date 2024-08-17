import React from 'react';
import skills from "../../Data/skills.json";
import education from "../../Data/education.json";
import {getImageURL} from "../../utils.js";

import styles from "./Experience.module.css";
const Experience = () => {
    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title}> Experience</h2>
            <div className={styles.content}>
                <div className={styles.skills}>{
                    skills.map((skill,id)=>{
                        return <div key={id} className={styles.skillImageContainer}>
                            <div><img className={styles.image} src={getImageURL(skill.imageSrc)} alt={skill.title}/>
                            </div>
                            {/*<p>{skill.title}</p>*/}
                        </div>
                    })
                } </div>
                <ul className={styles.education}>
                    {education.map((educationIn,id)=>{
                        return <li key={id} className={styles.educationIn}>
                            <img src={getImageURL(educationIn.imageSrc)} alt={`${educationIn.institution}logo`}/>
                            <div className={styles.educationItemDetails}>
                                <h3>{`${educationIn.institution}-${educationIn.degree}`}</h3>
                                <p>{`${educationIn.startDate}-${educationIn.endDate}`}</p>

                            </div>

                        </li>
                    })}
                </ul>
            </div>

        </section>
    );
};

export default Experience;