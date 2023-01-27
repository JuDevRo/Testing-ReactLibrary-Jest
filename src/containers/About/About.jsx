import React from 'react'
import { Link } from 'react-router-dom'

import '../About/About.css'

const About = () => {
    return(
        <div className='about-container'>
            <div className='about-header'>
                <h2>Nico</h2>
                <h2 className='about-title'>About</h2>
            </div>
            <Link className="about-link" to="/">
                <h2 className='about-close'>X</h2>
            </Link>
            <div className='about-information-container'>
                <div className='about-info'>
                    <div className='info-name'>
                        <h1>About</h1>
                    </div>
                    <div className='info-resume'>
                        <h2>My name is Nicolás Rouger, <br /> or Nico for short.</h2>
                    </div>
                </div>
                <div className='info-desc'>
                    <div className='desc-back'>
                        <p>Background</p>
                        <h2>I was born and raised in Argentina. Originally based in Amstedam and Barcelona.<br/>I attended the bootcamp of LeWagon Amsterdam And Udemy courses.</h2>
                    </div>
                    <div className='desc-what'>
                        <p>What i do</p>
                        <h2>I'm a junior full-stack developer.<br />I like the to come with new ideas all of the time. And understand how the structure and functionality of an app it's developer.<br/>I want to land into a team whith possibilities to grow, keep learning,<br/>and be able to improve myself. And keep coding.</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About