import React from "react";
import "../Team/team.css";

const Team = () => {
    return (
        <section id="team" className="">
        <div className="team-grid-container">
            <div className="team-grid-item d-flex justify-content-center">
            <h2><b>OUR TEAM</b></h2>
            </div>
            <hr></hr>
            <div className="team-grid-item alignment">
            <ul>
                <h3>PI</h3>
                <li>
                    <p>Tim Pleskac (Professor of Psychological and Brain Sciences and Cognitive Science, Indiana University)</p>
                </li>
                    <h3>POST DOCS</h3>
                <li><p>Jun Fang</p></li>
                <h3>GRADUATE STUDENTS</h3>
                <li> <p>Xiaohong Cai</p> </li>
                <li> <p>James Adaryukov</p> </li>
                <h3>RESEARCH ASSISTANTS</h3>
                <li> <p>Sonal</p> </li>
                <h3>LAB ALUMNI</h3>
                <li><p>Sergej Grunevski (2019-2021: Lab Manager; Current: Assistant Researcher at the KU Cofrin Login Center for Addiction Research and Treatment)</p></li>
            </ul>
            </div>
            </div>
        </section>
        
    );
    }
export default Team;