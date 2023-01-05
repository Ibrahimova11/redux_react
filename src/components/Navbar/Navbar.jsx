import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"


function Navbar() {
  return (
        <header>
 <nav>
        <div className='title'>
           <p>CustomerFAVS NEXT</p>
        </div>
        <div className='navbar'>
            <ul>
                <li>
                    <Link className='link' to='/'>Home</Link>
                    
                </li>

                <li>
                    <Link className='link' to='/customers'>Customers</Link>
                </li>

                <li>
                    <Link className='link' to='/favourites'>Favourites</Link>
                
            </li> 
                


            </ul>
        </div>
    </nav>
        </header>
   
  )
}

export default Navbar