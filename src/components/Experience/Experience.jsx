import React from 'react';
import skills from "../../Data/skills.json";
import education from "../../Data/education.json";
import {getImageURL} from "../../utils.js";
const Experience = () => {
    return (
        <section id="experience">
            <h2> Experience</h2>
            <div>
                <div>{
                    skills.map((skill,id)=>{
                        return <div key={id}>
                            <div><img src={getImageURL(skill.imageSrc)} alt={skill.title}/>
                            </div>
                            <p>{skill.title}</p>
                        </div>
                    })
                } </div>
                <ul>
                    {education.map((educationIn,id)=>{
                        return <li key={id}>
                            <img src={getImageURL(educationIn.imageSrc)} alt={`${educationIn.institution}logo`}/>
                            <div>
                                <h3>{`${educationIn.institution},${educationIn.degree}`}</h3>
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