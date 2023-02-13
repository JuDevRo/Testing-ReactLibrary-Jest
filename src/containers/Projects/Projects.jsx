import React from 'react'
import { Link } from 'react-router-dom'
import "../Projects/Projects.css"

const Projects = () => {
    return (
        <div className='projects-container'>
            <div className='projects-header'>
                <h2>Nico</h2>
                <h2 className='project-title'>Projects</h2>
            </div>
            <Link className="projects-link" to="/">
                <h2 className='projects-close'>X</h2>
            </Link>
            <div className='projects-information-container'>
                <div className='projects-info'>
                    <div className='desc-search'>
                        <h2>>Search</h2>
                        <h2>Is a simple and basic clon of<br/> AirBnB made in 1 week, as a<br /> preparation for the final project.</h2>
                    </div>
                    <div className='desc-project'>
                        <h2>>make it easy</h2>
                        <h2>Is a more complete clone of<br/>AirBnB we have made as a final<br/>project.<br/><br/>It is originally a personal idea<br/>where I'm still working at everyday, improving new<br/> concepts.</h2>
                    </div>
                </div>
                <div className='project-desc'>
                    <div className='info-na'>
                        <h2>Projects</h2>
                    </div>
                    <div className='info-link'>
                        <p>Click to open</p>
                        <a target="blank" href="https://glacial-tor-83816.herokuapp.com/"><h2>concept/o</h2></a>
                        <h2>>share! <p>available on github</p></h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects