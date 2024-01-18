import React from "react"
import style from "./resume.module.css";

export default function Resume() {
    return (
        <header className="header">
            <h1 className={style.page_title}>My Resume</h1>
            <form method="get" action="Resume_2023.pdf">
                <button className="btn"><i className="fa fa-download"></i> Download Resume</button>
            </form>
            <div className="resume">
                <section className={style.section}>
                        <h2 className={style.section_title}>Education</h2>
                        <div className={style.entry}>
                            <h3 className="entry-title">Bachelor of Science in Computer Science</h3>
                            <p className="entry-info">California Polytechnic State University, San Luis Obispo | Expected Graduation June 2026</p>
                        </div>
                </section>
                <section className={style.section}>
                    <h2 className={style.section_title}>Coursework</h2>
                    <ul className={style.course_list}>
                        <li>AP Computer Science A - 5</li>
                        <li>AP Calculus BC - 5</li>
                        <li>AP Statistics - 5</li>
                        <li>CSC 202 - Data Structures and Algorithms</li>
                    </ul>
                </section>
                <section className={style.section}>
                    <h2 className={style.section_title}>Skills</h2>
                    <ul className={style.course_list}>
                        <li>Java</li>
                        <li>Python</li>
                        <li>HTML/CSS</li>
                        <li>React</li>
                        <li>React Native</li>
                        <li>Javascript</li>
                        <li>Swift</li>
                        <li>Lua</li>
                        <li>Fluent in Spanish and Hindi</li>
                    </ul>
                </section>
                <section className={style.section}>
                    <h2 className={style.section_title}>Projects</h2>
                    <div className={style.entry}>
                        <h3 className="entry-title">Personal Website | October 2023</h3>
                        <p className="entry-info">Created a website for myself using HTML and CSS</p>
                        <p className="entry-description">Used best practices for Git and Github, focused on semantic HTML styling</p>
                    </div>
                </section>
                <section className={style.section}>
                    <h2 className={style.section_title}>Experience</h2>
                    <div className={style.entry}>
                        <h3 className="entry-title">Software Engineer Intern and Tester | July 2021 - July 2022</h3>
                        <p className="entry-info">Used React/React Native to implement features to their app and website</p>
                        <p className="entry-description">Used Figma to create designs and then worked with other developers to create the features.</p>
                    </div>
                    <div className={style.entry}>
                        <h3 className="entry-title">85 Degrees Food Handler | June 2023 - August 2023</h3>
                        <p className="entry-info">Worked as a part time cashier and pushed out fresh bread periodically</p>
                        <p className="entry-description">Work involved memorizing 60 breads and their ingredients in order to <br></br> 
                        be able to answer customer questions at the cashier stand. Worked approximately 12-15 hours per week.</p>
                    </div>
                </section>
                <section className={style.section}>
                    <h2 className={style.section_title}>Activities</h2>
                    <div className={style.entry}>
                        <h3 className="entry-title">N/A</h3>
                        <p className="entry-info"></p>
                    </div>
                </section>
                <section className={style.section}>
                    <h2 className={style.section_title}>Awards</h2>
                    <div className={style.entry}>
                        <h3 className="entry-title">N/A</h3>
                        <p className="entry-info"></p>
                    </div>
                </section>
            </div>
        </header>
    );
}