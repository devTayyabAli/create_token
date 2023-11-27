import React from 'react'
import "./Moon_token.css"
import intro from "../Assets/intro.jpeg"
import t1 from "../Assets/t1.png"
import t2 from "../Assets/t2.png"
import t3 from "../Assets/t3.png"
import t4 from "../Assets/t4.png"
import t5 from "../Assets/t5.png"
import t6 from "../Assets/t6.png"
import t7 from "../Assets/t7.png"
import { useNavigate } from "react-router-dom"


function Moon_token() {
  let navigate = useNavigate()




  return (
    <div className='py-4'>
      <div className="container">
        <div className="row ">
          <div className="col-md-6">
            <h1 className='token_heading text-start'>Create your token</h1>
            <p className="lead text-start">Our mission is to make token creation easy and accessible for everyone. You can create your own token without coding.</p>
            <div className="d-flex">
              <button className='btn text-white' style={{ backgroundColor: "#5b53a2" }} onClick={() => navigate('/token')} > Create Token</button>
              <button className='btn text-white ms-2' style={{ backgroundColor: "#5b53a2" }}>
                Learn More
              </button>
            </div>
            <div className='mt-5 text-start'>
              <h6 className='text-start token_sub_heading'>Powered by</h6>
              <img src={t1} className='small_logo' alt="" />
              <img src={t2} className='small_logo' alt="" />
              {/* <img src={t3} className='small_logo' alt="" /> */}
              <img src={t4} className='small_logo' alt="" />
              {/* <img src={t5} className='small_logo' alt="" /> */}
              <img src={t6} className='small_logo' alt="" />
              <img src={t7} className='small_logo' alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <img src={intro} className='w-100 responsive' alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Moon_token
