import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'
const NotFound = () => {
  return (
    <div>
    <h3 class='NotFound'>
    This is Error Page...you got something wrong!
    Go Back Home
    </h3>

    <div containerr>
    <img  className='imgg' src="https://wish-list-redux-next-js-3g4j.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ferrorpageimg.377c1cad.jpg&w=750&q=75" alt="" />
    </div>
    <div class='linkk'>
    <Link className='link' class='link_1' to='/'> Go Back Home</Link>
    </div>
    </div>
  )
}

export default NotFound