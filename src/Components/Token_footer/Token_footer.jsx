import React from 'react'
import {BsTelegram} from "react-icons/bs"
import "./Token_footer.css"

function Token_footer() {
  return (
    <div className='main_bg'>
          <div className="container-fluid upper_content ">
            <div className="d-flex justify-content-between py-3 px-3">
                <p className='m-0'>Get connected with us:</p>
                <BsTelegram className='footer_icon'></BsTelegram>

            </div>

        </div>
      
    </div>
  )
}

export default Token_footer
