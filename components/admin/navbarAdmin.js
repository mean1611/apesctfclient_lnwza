import React from "react";
import Link from 'next/link';

function Navbaradmin() {

  return (
    <nav className="navbar bg-primary text-neutral-content fixed top-0 w-full z-10">
      <div className="flex-1">

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

        <Link href="/questionmanage" className="btn btn-ghost">
          
            <img
              src="https://mean1611.github.io/apesctfclient_lnwza/images/practice.png"
              style={{ width: '50px', height: '40px' }}
            />
            <span>
              <span style={{ display: 'block', fontSize: '20px', fontWeight: 'bold' }}>Question</span>
            </span>
          
        </Link>

        <Link href="/usermange" className="btn btn-ghost">
          
            <img
              src="https://mean1611.github.io/apesctfclient_lnwza/images/usermange.png"
              style={{ width: '50px', height: '40px' }}
            />
            <span>
              <span style={{ display: 'block', fontSize: '20px', fontWeight: 'bold' }}>User management</span>
            </span>
          
        </Link>

        <Link href="/adminreport" className="btn btn-ghost">
          
            <img
              src="https://mean1611.github.io/apesctfclient_lnwza/images/search.png"
              style={{ width: '50px', height: '40px' }}
            />
            <span>
              <span style={{ display: 'block', fontSize: '20px', fontWeight: 'bold' }}>Bug report</span>
            </span>
          
        </Link>

      </div>
      <h1>Admin</h1>
      <div className="dropdown dropdown-end flew-none">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="https://mean1611.github.io/apesctfclient_lnwza/images/profile.png" />
          </div>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2  bg-base-100 rounded-box w-52">
          <li>
            <Link href="https://mean1611.github.io/apesctfclient_lnwza/profile" className="justify-between">
              
                Profile
              
            </Link>
          </li>
          <li>
            <a onClick={() => {
              if (typeof window !== 'undefined') {
                localStorage.removeItem("user");
                window.location.href = "https://mean1611.github.io/apesctfclient_lnwza/";
              }
            }}>Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbaradmin;
