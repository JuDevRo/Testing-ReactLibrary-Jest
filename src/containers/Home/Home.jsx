import React from 'react'
import '../Home/Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return(
        <div className='home-container'>
            
            <div className='first'>
               
                <Link className='one' to="/main">
                    <div> 
                        <h1>Nico</h1>
                    </div>  
                </Link>
                <div className='date'>
                    <h1>Jr FullStack Web Developer</h1>
                </div>
            </div>
            <div className='second'>
                <Link className='two' to="Projects">
                    <div>
                        <h1>Projects</h1>
                    </div>  
                </Link>
                
                <Link className='three' to="About">
                    <div>
                        <h1>About</h1>
                    </div>
                </Link>
            </div>
        </div>
        
    )
}

export default Home