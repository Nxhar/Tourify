import React, { useState } from 'react'
import { Sling as Hamburger } from 'hamburger-react'
import { NavLink } from 'react-router-dom'
import './nav.css'
function Nav() {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen)
        console.log(menuOpen)
    }

  return (
    <div className='navbar'>
        <div className="navContainer">
            <div className="navText">Tourify</div>
            <div onClick={handleMenuOpen} className="hamburger"><Hamburger  /> </div>
        </div>
        {menuOpen && (<>
            
            <div className="menuOverlay">
                <div className="menuContainer">
                    <div className="navLink">
                        <NavLink to='/' >
                            Home
                        </NavLink>
                    </div>
                    
                    <div className="navLink">
                        <NavLink to='/voicechat' >
                            Voice Assistant
                        </NavLink>
                    </div>

                    <div className="navLink">
                        <a href="http://localhost:5174/experiences/">Experiences</a>
                    </div>

                    <div className="navLink">
                        <a href="http://127.0.0.1:5500/client/src/Home/charts.html">Budget Calculator</a>
                    </div>

                    


                </div>
            </div>
        </>)}
    </div>
  )
}

export default Nav