import React from "react";
import Link from 'next/link';

function Navbar() {

    return (
        <nav className="navbar bg-primary text-neutral-content fixed top-0 w-full z-10" >
        <div className="flex-1 ">

          <Link href="/" className="btn btn-ghost">
          
            <img
              src="https://mean1611.github.io/apesctfclient_lnwza/images/smiley.png"
              style={{ width: '50px', height: '50px' }}
            />
            <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
              <span style={{ fontSize: '20px', fontWeight: 'bold' }}>APES</span>
              <span style={{ fontSize: '16px', fontWeight: 'bold' }}>CTF</span>
            </span>
          
        </Link>

          <Link href="/learn" className="btn btn-ghost" >
          <img
            src="https://mean1611.github.io/apesctfclient_lnwza/images/learn.png"
            style={{ width: '40px', height: '40px' }} // กำหนดความกว้างและความสูง
            />  
          
            <span style={{ display: 'block',fontSize: '20px',fontWeight: 'bold'  }}>Learn</span>
              
          </Link>

          <Link className="btn btn-ghost" href="/login">
          <img
            src="https://mean1611.github.io/apesctfclient_lnwza/images/practice.png"
            style={{ width: '50px', height: '40px' }} // กำหนดความกว้างและความสูง
            />  
          <span>
            <span style={{ display: 'block',fontSize: '20px',fontWeight: 'bold'  }}>Practice</span>
          </span>      
          </Link>
        </div>
        <Link href="/login" className="flex-none">
          <button className="btn btn-ghost">Login</button>
        </Link>
        <Link href="/signup" className="flex-none">
          <button className="btn btn bg-green-400">Join Now</button>
        </Link>
      </nav>
    )
}

export default Navbar; 

