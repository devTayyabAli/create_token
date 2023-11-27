import React from 'react'
import "./MoonFaq.css"
import connect from "../Assets/connect.png"
import td from "../Assets/td.png"
import del from "../Assets/del.png"
import done from "../Assets/done.png"

function MoonFaq() {
    return (
        <div className='py-4'>
            {/* <div className="container">
                <div className='Faq_heading'>
                    <h1 className='main_heading'>The most frequently asked questions when using MoonDeploy</h1>
                </div>
            </div> */}
            {/* <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="">

                            <h4 className='faq_sub_heading text-start'> <FaRibbon className='faq_icons'></FaRibbon>How do I generate BEP20 <br /> token?</h4>
                        </div>
                        <p className='text-start'>In order to create BEP20 token, open our <a className='faq_links' href="#"> BEP20 token generator </a> and follow instructions.</p>

                    </div>
                    <div className="col-md-4">
                        <div className="">

                            <h4 className='faq_sub_heading text-start'> <FaPuzzlePiece className='faq_icons'></FaPuzzlePiece>Can I add more functions to smart contract? <br /> token?</h4>
                        </div>
                        <p className='text-start'>Of course! Contact us to discuss your project.

                        </p>

                    </div>
                    <div className="col-md-4">
                        <div className="">

                            <h4 className='faq_sub_heading text-start'> <FaLaptopCode className='faq_icons'></FaLaptopCode> Can you make other tokens or develop smart contracts ?</h4>
                        </div>
                        <p className='text-start'>Sure, we can make different types of tokens and develop smart contracts to suit your needs.



                        </p>

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="">

                            <h4 className='faq_sub_heading text-start'> <BiCodeAlt className='faq_icons'></BiCodeAlt> Can I have source code of contract ?
</h4>
                        </div>
                        <p className='text-start'>Yes, it will be available on BscScan, EtherScan or others after deployment.</p>

                    </div>
                    <div className="col-md-4">
                        <div className="">

                            <h4 className='faq_sub_heading text-start'> <FaUserPlus className='faq_icons'></FaUserPlus> Can I add more wallets ?</h4>
                        </div>
                        <p className='text-start'>Absolutely. For this you need to contact us.

                        </p>

                    </div>
                 
                </div>
            </div> */}
            <div className="container">
                <h1 className='mb-4 text-center '>How To Create your Own  Token? </h1>
                <div className="row margin_faq">
                    <div className="col-md-6 col-lg-4 responsive_chage my-5">
                        <div className="card faq_cards ">
                            <div className="card-body sss">
                                <img src={connect} className='faq_img' alt="" />
                                <h5 className='faq_heading'>Connect wallet</h5>
                                <div className="line"></div>
                                <p>Install the Metamask browser extension and create an account and add BNB balance.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 responsive_chage my-5">
                        <div className="card faq_cards ">
                            <div className="card-body sss">
                                <img src={td} className='faq_img' alt="" />
                                <h5 className='faq_heading'>Enter token details.</h5>
                                <div className="line"></div>
                                <p>Fill in your custom token details such as token name, symbol, decimals, and total supply. </p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 responsive_chage my-5">
                        <div className="card faq_cards ">
                            <div className="card-body sss">
                                <img src={del} className='faq_img' alt="" />
                                <h5 className='faq_heading'>Hit deploy.</h5>
                                <div className="line"></div>
                                <p>Click on deploy and pay the BSC gas by confirming the transaction on your Metamask.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 responsive_chage my-5">
                        <div className="card faq_cards ">
                            <div className="card-body sss">
                                <img src={del} className='faq_img' alt="" />
                                <h5 className='faq_heading'>Hit deploy.</h5>
                                <div className="line"></div>
                                <p>Click on deploy and pay the BSC gas by confirming the transaction on your Metamask.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 responsive_chage my-5">
                        <div className="card faq_cards ">
                            <div className="card-body sss">
                                <img src={del} className='faq_img' alt="" />
                                <h5 className='faq_heading'>Hit deploy.</h5>
                                <div className="line"></div>
                                <p>Click on deploy and pay the BSC gas by confirming the transaction on your Metamask.</p>

                            </div>
                        </div>
                    </div>

                </div>
                {/* <div className="row mt-4 mt-lg-5 pt-lg-3 justify-content-center">
                    <div className="col-md-4 responsive_chage fouth_card">
                        <div className="card faq_cards ">
                            <div className="card-body sss">
                                <img src={connect} className='faq_img' alt="" />
                                <h5 className='faq_heading'>You’re done! </h5>
                                <div className="line"></div>
                                <p>Congratulations, you now have your very own simple BEP20 crypto token for your next project. </p>

                            </div>
                        </div>
                    </div>

                </div> */}
            </div>
        </div>
    )
}

export default MoonFaq
