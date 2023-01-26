import React from 'react'
import '../Home/Home.css'

const Home = () => {
    return(
        <div className='home-container'>
            <div className='first'>
                <div className='one'>   
                    <h1>Example One</h1>
                </div> 
                <div className='date'>
                    <h1>Example Date</h1>
                </div>
            </div>
            <div className='second'>
                <div className='two'>
                    <h1>Example Two</h1>
                </div>
            
                <div className='three'>
                    <h1>Example Three</h1>
                </div>
            </div>
        </div>
        
    )
}

export default Home