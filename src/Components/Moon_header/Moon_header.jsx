import React from 'react'
import "./Moon_header.css"
import moonh2 from "../Assets/moonh2.png"
import { Link } from "react-router-dom"

function Moon_header() {
  return (
    <div className='moon_haeder_bg'>
      <div className=" moon_haeder_bg">
        <div className="container-fluid moon_head">
          <Link to='/' className="navbar-brand">

            <img src={moonh2} alt="Moon Deploy" style={{ width: '210px' }} />
          </Link>

        </div>
      </div>

    </div>
  )
}

export default Moon_header
