import React from 'react'
import '../Home/Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return(
        <div className='home-container'>
            
            <div className='first'>
               
                <Link className='one' to="/main">
                    <div> 
                        <h1>Example One</h1>
                    </div>  
                </Link>
                <div className='date'>
                    <h1>Example Date</h1>
                </div>
            </div>
            <div className='second'>
                <Link className='two'>
                    <div>
                        <h1>Example Two</h1>
                    </div>  
                </Link>
                
                <Link className='three'>
                    <div>
                        <h1>Example Three</h1>
                    </div>
                </Link>
            </div>
        </div>
        
    )
}

export default Home