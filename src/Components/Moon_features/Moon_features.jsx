import React from 'react'
import "./Moon_features.css"
import code from "../Assets/code.jpeg"
import money from "../Assets/money.jpeg"
import burn from "../Assets/burn.jpeg"
import mint from "../Assets/mint.jpeg"

function Moon_features() {
  return (
    <div className='py-4 features_main_bg'>
      <div className="container">
        <div className="features_head">
            <h1 className='features_heading text-center'>Features</h1>
        </div>



        <div className="row">
          
           
           <div className="col-md-6 mt-3">
            <div className="card features_card ">
              <div className="card-body text-start" >
                <img src={code} className='features_img mb-3' alt="" />
                <h5 className='features_card_heading'>No coding required</h5>
                <p className='choose_para'>This feature allows you to destroy tokens and take them out of circulation. This in turn makes your token scarcer and more valuable.
                                    </p>

              </div>
            </div>
           </div>
           <div className="col-md-6 mt-3">
            <div className="card features_card ">
              <div className="card-body text-start" >
                <img src={money} className='features_img mb-3' alt="" />
                <h5 className='features_card_heading'>Make money</h5>
                <p className='choose_para'>This feature allows you to destroy tokens and take them out of circulation. This in turn makes your token scarcer and more valuable.
                                    </p>

              </div>
            </div>
           </div>
        </div>
        <div className="row mt-5">
          
           
          <div className="col-md-6 mt-3">
           <div className="card features_card ">
             <div className="card-body text-start" >
               <img src={burn} className='features_img mb-3' alt="" />
               <h5 className='features_card_heading'>Token burn</h5>
               <p className='choose_para'>This feature allows you to destroy tokens and take them out of circulation. This in turn makes your token scarcer and more valuable.
                                   </p>

             </div>
           </div>
          </div>
          <div className="col-md-6 mt-3">
           <div className="card features_card ">
             <div className="card-body text-start" >
               <img src={mint} className='features_img mb-3' alt="" />
               <h5 className='features_card_heading'>Token Mint</h5>
               <p className='choose_para'>This feature allows you to destroy tokens and take them out of circulation. This in turn makes your token scarcer and more valuable.
                                   </p>

             </div>
           </div>
          </div>
       </div>

      </div>
      
    </div>
  )
}

export default Moon_features
