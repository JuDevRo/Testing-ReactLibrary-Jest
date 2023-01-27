import React from 'react'
import { Link } from 'react-router-dom'

import '../Main/Main.css'

const Main = () => {
    return(
        <div className='main-container'>
            <div className='main-header'>
                <h2>Nico</h2>
            </div>
            <Link className="main-link" to="/">
                <h2 className='main-close'>X</h2>
            </Link>
            <div className='main-information-container'>
                <div className='main-information'>
                    <div className='information-name'>
                        <p>This is the portfolio of Nicolás Rouger, but call me</p>
                        <h1>Nico</h1>
                    </div>
                    <div className='information-resume'>
                        <h2><b>Resume</b> Nicolás Rouger</h2>
                        <h2 className='jr'>Junior Full-Stack <br/> Web Developer</h2>
                    </div>
                </div>
                <div className='main-description'>
                    <div className='description-experience'>
                        <h2>I have made a 9-weeks full-time intensive coding bootcamp learning. <br/> Designed, implemented and shipped to produce a clone of AirBnB and a Rails prototype. <br/>+ 1 months implementing what I've learned</h2>
                    </div>
                    <div className='description-technologies'>
                        <h2>HTML, CSS, Bootstrap,<br/> React, JavaScript, ES6, SQL, git, GitHub, Heroku and<br/>Ruby on Rails.</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main