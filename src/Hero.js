import React from 'react'

const Hero = ({handleLogout}) => {
    return (
        <div className="hero">
        <div className="hero_container">
            <nav>
                <h1>Welcome</h1>
                <button 
                className="btn_logout"
                onClick={handleLogout}
                >Logout</button>
            </nav>
        </div>
            
        </div>
    )
}

export default Hero
