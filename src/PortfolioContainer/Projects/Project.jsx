import "./project.css"
import { FaGithubSquare, FaLink } from "react-icons/fa";

export const Project = () => {
    return (
        <>
            <div className="projectMain" id="project">
                <h1 className="pageHeadingP">Projects</h1>
                <div className="projectCardDiv">
                    <div className="projectDetail">
                        <h3>Calendly.com clone</h3>
                        <p>Calendly is an app for scheduling appointments, meetings, and events. Its goal is to eliminate the problematic back-and-forth when trying to nail down times. Rather than email chains and phone tag, you can send your availability with a Calendly link</p>
                        <div className="links">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/akashbhoi2815/parallel-cast-7381"><FaGithubSquare className='social-media-icon' /></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://calendl-yparallel-cast-7381.vercel.app/"><FaLink className='social-media-icon' /></a>
                        </div>
                        <div className="langDiv">
                            <p className="techstack">Tech Stack :</p>
                            <div className="texttackDiv">
                                <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="" />
                                <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="" />
                                <img src="https://img.shields.io/badge/css3-323330?style=for-the-badge&logo=css3&logoColor=blue" alt="" />
                                <img src="https://shields.io/badge/chakra--ui-black?logo=chakraui&style=for-the-badge%22" alt="" />
                                <img src="https://img.shields.io/badge/Redux-323330?style=for-the-badge&logo=redux&logoColor=blue" alt="" />
                                <img src="https://img.shields.io/badge/Firebase-323330?style=for-the-badge&logo=firebase&logoColor=orange" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="projectImg">
                        <img src=".././images/calendly.png" alt="" />
                    </div>
                </div>



                <div className="projectCardDiv secProject">
                    <div className="projectDetail">
                        <h3>Jefit clone</h3>
                        <p>On this Jefit website people can manage and track all workouts in one place·</p>
                        <div className="links">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/akashbhoi2815/magical-vase-490"><FaGithubSquare className='social-media-icon' /></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://62ef681b8e24d65b3bd926d5--projectjefit.netlify.app/"><FaLink className='social-media-icon' /></a>
                        </div>
                        <div className="langDiv">
                            <p className="techstack">Tech Stack :</p>
                            <div className="texttackDiv">
                                <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="" />
                                <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="" />
                                <img src="https://img.shields.io/badge/css3-323330?style=for-the-badge&logo=css3&logoColor=blue" alt="" />
                                <img src="https://shields.io/badge/chakra--ui-black?logo=chakraui&style=for-the-badge%22" alt="" />

                            </div>
                        </div>
                    </div>
                    <div className="projectImg">
                        <img src=".././images/jefit.png" alt="" />
                    </div>
                </div> 
                <div className="projectCardDiv secProject">
                    <div className="projectDetail">
                        <h3>Nature_Basket Clone</h3>
                        <p>Nature's Basket is an Indian grocery delivery chain of retail stores focused in gourmet food.</p>
                        <div className="links">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/manish-2396/Natures-Basket_project"><FaGithubSquare className='social-media-icon' /></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://fastidious-quokka-0abdad.netlify.app/"><FaLink className='social-media-icon' /></a>
                        </div>
                        <div className="langDiv">
                            <p className="techstack">Tech Stack :</p>
                            <div className="texttackDiv">
                                <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="" />
                                <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="" />
                                <img src="https://img.shields.io/badge/css3-323330?style=for-the-badge&logo=css3&logoColor=blue" alt="" />

                            </div>
                        </div>
                    </div>
                    <div className="projectImg">
                        <img src=".././images/nature_basket.png" alt="" />
                    </div>
                </div>
                <div className="projectCardDiv secProject">
                    <div className="projectDetail">
                        <h3>Stylecraze Clone</h3>
                        <p>Stylecrazewebsite is a women's beauty and health tips website. Here you can get tips related to beauty and health.</p>
                        <div className="links">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/srbhkumar624/stylecrazewebsite"><FaGithubSquare className='social-media-icon' /></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://srbhkumar624.github.io/stylecrazewebsite/"><FaLink className='social-media-icon' /></a>
                        </div>
                        <div className="langDiv">
                            <p className="techstack">Tech Stack :</p>
                            <div className="texttackDiv">
                                <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="" />
                                <img src="https://img.shields.io/badge/css3-323330?style=for-the-badge&logo=css3&logoColor=blue" alt="" />

                            </div>
                        </div>
                    </div>
                    <div className="projectImg">
                        <img src=".././images/stylecraze.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}