import React from 'react'
import "./Moon_choose.css"
import t1 from "../Assets/t1.png"
import tech from "../Assets/tech.jpeg"
import cost from "../Assets/cost.jpeg"
import sup from "../Assets/sup.jpeg"
import sec from "../Assets/sec.jpeg"

function Moon_choose() {
  return (
    <div className='main_padding'>
        <div className="container">
            <h1 className='text-center '>Why choose BlockchainX for  token development?</h1>
            <div className="row mt-5">
                <div className="col-md-12">
                    <div className="d-flex align-items-center responsive_dir">
                        <div className="img_g">
                        <img src={tech} style={{width:'230px'}} alt="" />
                        </div>
                        <div className='ms-3'>
                            <h5 className='text-start choose_heading'>Technical Expertise & Custom support</h5>
                            <p className='text-start choose_para'>Our token development team consists of expert blockchain developers, consultants, quality analysts, and architects. We provide end-to-end services and unmatched support to get you off the ground quickly and efficiently.
                                    </p>

                        </div>

                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-12">
                    <div className="d-flex align-items-center responsive_dir">
                        
                        <div className='ms-3'>
                            <h5 className='text-start choose_heading'>Security</h5>
                            <p className='text-start choose_para'>We follow the best security practices and allocate a dedicated blockchain security expert to every BEP20 token development project. Our development life cycle consists of a thorough planning phase where all possible vulnerabilities are considered and accounted for.
                                
 </p>

                        </div>
                        <div className="img_g">
                            <img src={sec} style={{width:'230px'}} alt="" />
                        </div>

                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-12">
                    <div className="d-flex align-items-center responsive_dir">
                        <div className="img_g">
                            <img src={cost} style={{width:'230px'}} alt="" />
                        </div>
                        <div className='ms-3'>
                            <h5 className='text-start choose_heading'>Cost effective</h5>
                            <p className='text-start choose_para'> We implement the most efficient practices to keep both your development costs down and well as cost to your customers. Our smart contracts are highly optimized for transaction gas fees. 
                                 </p>

                        </div>

                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-12">
                    <div className="d-flex align-items-center responsive_dir">
                        
                        <div className='ms-3'>
                            <h5 className='text-start choose_heading'>24x7 dedicated support & Fast response</h5>
                            <p className='text-start choose_para'>We allocated a dedicated project manager and service executives to every project. Our team will be at your disposal for any support round the clock and will provide you with solutions quickly. 
                                
                                
 </p>

                        </div>
                        <div className="img_g">
                            <img src={sup} style={{width:'230px'}} alt="" />
                         
                        </div>

                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Moon_choose
