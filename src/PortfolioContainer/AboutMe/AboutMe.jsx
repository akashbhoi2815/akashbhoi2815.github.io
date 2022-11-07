import React from 'react'
import './about.css'
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";


export default function AboutMe() {
    return (
        <div className='mainDiv' id="about" >
            <h2 className="pageHeadingA">About Me</h2>
            <div className='containerDiv'>

                <div className='aboutmeTextDiv'>
                    <p className="aboutme">
                        I have diverse set of skills ranging from HTML, CSS, JavaScript,
                        ReactJs to ExpressJs, MongoDB, NodeJs</p>
                    <ul> 
                        <li>I have worked on several different projects solo as well as collaboratively</li>
                        <li>Passionate about implementing and launching new projects</li>
                        <li>Ability to translate business requirements into technical solutions</li>
                    </ul>
                    <p className="aboutme">Looking to start the career as a web developer</p>

                    <div className="colzs">
                        <div className="colz-icons">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/akashbhoi0261/"><FaLinkedin className='social-media-icon' /></a>
                            <a target="_blank" rel="noopener noreferrer" style={{marginLeft:"10px"}} href="https://github.com/akashbhoi2815"><FaGithubSquare className='social-media-icon' /></a>
                        </div>
                    </div>
                    <div className='aboutBtnDiv'>
                        {/* <button className='hireMeBtn'>Hire Me</button> */}
                        <a href="Akash_Bhoi_Resume.pdf" download='resume.pdf'>
                            <button className="getBtn">Get Resume</button>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}
