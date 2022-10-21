import React from 'react'
import './resume.css'
import htmlIcon from '../assets/htmlIcon.svg'
import cssIcon from '../assets/cssIcon.svg'
import jsIcon from '../assets/jsIcon.svg'
import reactIcon from '../assets/reactIcon.svg'
import expressIcon from '../assets/expressIcon.svg'
import nodeIcon from '../assets/nodeIcon.svg'
import mongoIcon from '../assets/mongoIcon.svg'



export default function Resume() {
    return (
        <div className='mainDiv' id="resume">
            <h2 className="pageHeadings">Skills</h2>
            <div className='educationQual'>
                <div>
                    <div className="skillDiv">
                        <div className="fronEnd">
                            <h3>FRONT-END</h3>
                            <div className="skillcardMain">
                                <div className="skillCard">
                                <p style={{fontWeight:"bolder"}}>HTML</p>
                                    <img style={{marginTop:"-17px"}} src={htmlIcon} alt="" />
                                </div>
                                <div className="skillCard">
                                <p style={{fontWeight:"bolder"}}>CSS</p>
                                    <img style={{marginTop:"-17px"}} src={cssIcon} alt="" />
                                </div>

                                <div className="skillCard">
                                <p style={{fontWeight:"bolder"}}>JavaScript</p>
                                    <img style={{marginTop:"-10px",width:"90%"}} src={jsIcon} alt="" />
                                </div>
                                <div className="skillCard">
                                    <p style={{fontWeight:"bolder"}}>REACT</p>
                                    <img style={{marginTop:"-10px",width:"90%"}} src={reactIcon} alt="" />
                                </div>
                            </div>

                        </div>

                        <div className="backEnd">
                            <h3>BACK-END</h3>
                            <div className="skillcardMain">
                                <div className="skillCard2">
                                <p style={{fontWeight:"bolder"}}>ExpressJs</p>
                                    <img style={{marginTop:"-17px"}} src={expressIcon} alt="" />
                                </div>
                                <div className="skillCard2">
                                <p style={{fontWeight:"bolder"}}>NodeJs</p>
                                    <img style={{marginTop:"-17px"}} src={nodeIcon} alt="" />
                                </div>
                                <div className="skillCard2">
                                <p style={{fontWeight:"bolder"}}>MongoDB</p>
                                    <img style={{marginTop:"-17px"}} src={mongoIcon} alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}
