import React, { useEffect, useState } from 'react'
import "./Token_main.css"
import axios from "axios";
import { toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { loadWeb3 } from '../../apis/api';
import validator from 'validator';
import { CopyToClipboard, onCopy } from 'react-copy-to-clipboard';
import copy from 'copy-to-clipboard';
import { CoinCreator, CoinCreator_Abi } from '../../utilies/Contract';
import { token, token_Abi, tron_token_adress, tron_contract_adress } from '../../utilies/Contract';
import TronWeb from 'tronweb'

import Moralis from 'moralis';
import Web3 from 'web3'

function Token_main({ address, chainName }) {
    const [tokenName, setTokenName] = useState('');
    const [tokenSymbol, setTokenSymbol] = useState('');
    const [totalSupply, setTotalSupply] = useState(0);
    const [decimals, setDecimals] = useState('000000');

    const [totalAmount, settotalAmount] = useState(0.00034);


    const [selectedItem, setSelectedItem] = useState("");

    const [emailAddress, setEmailAddress] = useState("");
    const [getToken, setgetToken] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const arr = ['6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18']
    const [decimalsValue, setDecimalsValue] = useState(arr[0]);



    let [copied, setcopied] = useState(false)


    const [modalShow, setModalShow] = React.useState(false);
    const validateEmail = (e) => {
        var email = emailAddress

        if (validator.isEmail(email)) {
            console.log('Valid Email :)')
        } else {
            console.log('Enter valid Email!')
        }
    }


    const [checkedOne, setCheckedOne] = useState(false);
    const updateOne = async (e) => {
        if (checkedOne == false) {
            settotalAmount(totalAmount + 0.00034)
            setCheckedOne((prev) => !prev)
        }
        else {

            settotalAmount(totalAmount - 0.00034)
            setCheckedOne((prev) => !prev)


        }


    };

    const [checkedTwo, setCheckedTwo] = useState(false);
    const updateTwo = (e) => {
        if (checkedTwo == false) {
            settotalAmount(totalAmount + 0.00034)
            setCheckedTwo((prev) => !prev)
        }
        else {

            settotalAmount(totalAmount - 0.00034)
            setCheckedTwo((prev) => !prev)

        }

    };





    const submit = async () => {
        if (address == undefined || address == '') {
            toast.error('please connect wallet')
        }
        else {
            var email = emailAddress
            if (validator.isEmail(email)) {

                let id = localStorage.getItem("NETWORKID");

                if (id == 1230) {
                    setisLoading(true)

                    const web3 = window.web3;

                    try {
                        const CONTRACT_ADDRESS = 'TGPSbwYnZr8hTcbdvZfJnMb7t2Z7724zQX'
                        const Token_contract_Address = 'TLTRFSUkD6YX9X6a8gz7gjLSC58iqNuGhV'

                        let amount = totalSupply + '000000'
                        // let amount;

                        if (checkedOne == false && checkedTwo == false) {
                            amount = 10
                        }
                        else if (checkedOne == true && checkedTwo == true) {
                            amount = 30
                        }
                        else if (checkedOne == false && checkedTwo == true) {
                            amount = 20
                        }
                        if (checkedOne == true && checkedTwo == false) {
                            amount = 20
                        }
                        try {
                            amount = amount + '000000'
                            // let amountBUSD = web3.utils.toWei(totalAmount.toString())

                            let Token_contract = await window.tronWeb.contract().at(Token_contract_Address);
                            let approve = await Token_contract.transfer(address, amount.toString()).send()



                            // let contract = await window?.tronWeb?.contract().at(CONTRACT_ADDRESS)
                            // let trxResult = await contract.TransferToken(amount.toString()).send()



                            toast.success(" Transaction Successfull")

                            let mainAccount = await window?.tronWeb?.defaultAddress?.base58


                            axios.post('http://server.thecoincreator.com/students', {
                                network_name: chainName,
                                tokenname: tokenName,
                                token_symbol: tokenSymbol,
                                total_supply: totalSupply + decimals,
                                decimals: decimalsValue,
                                isMint: checkedOne.toString(),
                                isBurn: checkedTwo.toString(),
                                tokenType: chainName,
                                address: mainAccount,
                                email: emailAddress
                            })
                                .then(function ({ data }) {
                                    console.log("data", data);
                                    let { msg, success } = data;
                                    success ? toast.success(msg) : toast.error(msg)
                                    // toast.success(data.msg)
                                })
                                .catch(function (error) {
                                    console.log(error.message);
                                });
                            setisLoading(false)

                        } catch (error) {
                            setisLoading(false)

                        }
                    } catch (error) {
                        console.log('error', error.message)
                    }



                }
                else {
                    let address = await loadWeb3(id);
                    console.log('what is first result', id)

                    if (address == "No Wallet" || address == "") {
                        toast.error("No Wallet Connected")
                    }
                    else if (address == "Wrong Network" || address == "") {
                        toast.error("Wrong Newtwork please connect to Binance smart chain network")

                    } else {
                        setisLoading(true)
                        const web3 = window.web3;
                        let CoinCreatorcontractOf = new web3.eth.Contract(CoinCreator_Abi, CoinCreator);
                        let tokencontractOf = new web3.eth.Contract(token_Abi, token);
                        let amount = 0.00034;
                        if (checkedOne == false && checkedTwo == false) {
                            amount = 0.00034
                        }
                        else if (checkedOne == true && checkedTwo == true) {
                            amount += 0.00068
                        }
                        else if (checkedOne == false && checkedTwo == true) {
                            amount += 0.00034

                        }
                        if (checkedOne == true && checkedTwo == false) {
                            amount += 0.00034

                        }
                        try {
                            let amountBUSD = web3.utils.toWei(totalAmount.toString())


                            // let ApproveToken = await tokencontractOf.methods.transfer('0xEcD6CC790c2d42305f28F55527a06468B7F8dA4C', amountBUSD.toString()).send({
                            //     from: address,
                            // });
                            // let TransferToken = await CoinCreatorcontractOf.methods.TransferToken(amountBUSD.toString()).send({
                            //     from: address,
                            // });
                            // toast.success(" Transaction Successfull")

                            try {





                                let a = await web3.eth.sendTransaction({
                                    from: address,
                                    to: "0xEcD6CC790c2d42305f28F55527a06468B7F8dA4C",
                                    value: amountBUSD
                                })
                                toast.success('suucess')
                                axios.post('http://server.thecoincreator.com/students', {
                                    network_name: chainName,
                                    tokenname: tokenName,
                                    token_symbol: tokenSymbol,
                                    total_supply: totalSupply + decimals,
                                    decimals: decimalsValue,
                                    isMint: checkedOne.toString(),
                                    isBurn: checkedTwo.toString(),
                                    tokenType: chainName,
                                    address: address,
                                    email: emailAddress
                                })
                                    .then(function ({ data }) {
                                        console.log("data", data);
                                        let { msg, success } = data;
                                        success ? toast.success(msg) : toast.error(msg)
                                        // toast.success(data.msg)
                                    })
                                    .catch(function (error) {
                                        console.log(error.message);
                                    });
                                setisLoading(false)

                            } catch (error) {
                                setisLoading(false)

                                console.log(error.message)
                            }




                        } catch (error) {
                            setisLoading(false)

                        }

                    }
                }
            } else {
                toast.error('Enter valid Email!')
            }

        }





    }

    async function addTokenToWallet(url) {
        console.log('urlurl', url)
        // const tokenAddress = '0xd00981105e61274c8a5cd5a88fe7e037d935b513';
        // const tokenSymbol = 'TUT';
        // const tokenDecimals = 18;
        var position
        var tokenAdress
        let urladress = url.url
        // alert(urladress)

        if (urladress.includes('token/')) {
            position = urladress.indexOf('en/')
            position = position + 3
            tokenAdress = urladress.slice(position, position + 42);
            try {
                // wasAdded is a boolean. Like any RPC method, an error may be thrown.
                const wasAdded = await window.ethereum.request({
                    method: 'wallet_watchAsset',
                    params: {
                        type: 'ERC20', // Initially only supports ERC20, but eventually more!
                        options: {
                            address: tokenAdress, // The address that the token is at.
                            symbol: url.token_symbol, // A ticker symbol or shorthand, up to 5 chars.
                            decimals: url.decimals, // The number of decimals in the token
                        },
                    },
                });

            } catch (error) {
                console.log(error);
            }
            // alert(metamaskadress)

        }



    }

    const get_Token_list = async () => {
        let id = localStorage.getItem("NETWORKID");
        if (id != 1230) {
            let address = await loadWeb3(id);

            if (address == "No Wallet" || address == "") {
                toast.error("No Wallet Connected")
            }
            else if (address == "Wrong Network" || address == "") {
                toast.error("Wrong Newtwork please connect to Binance smart chain network")

            } else {
                try {
                    let res = await axios.get(`http://server.thecoincreator.com/students?address=${address}`)
                    console.log('api reposne', res.data)
                    setgetToken(res.data)

                } catch (e) {
                    console.log("Error While Call Get API", e);
                }
            }
        }

        else {
            let mainAccount = await window?.tronWeb?.defaultAddress?.base58
            // alert(mainAccount)

            try {
                let res = await axios.get(`http://server.thecoincreator.com/students?address=${mainAccount}`)
                setgetToken(res.data)
                console.log('tronuserdata', res)

            } catch (e) {
                console.log("Error While Call Get API", e);
            }

        }

    }

    const handleDecimals = async (event) => {
        let decimals = event.target.value

        setDecimalsValue(decimals)
        if (decimals == 18) {
            setDecimals('000000000000000000');

        }
        else if (decimals == 10) {
            setDecimals('0000000000');

        }
        else if (decimals == 8) {
            setDecimals('00000000');

        }
        else if (decimals == 6) {
            setDecimals('000000');

        }
        else if (decimals == 7) {
            setDecimals('0000000');

        }
        else if (decimals == 9) {
            setDecimals('000000000');

        }
        else if (decimals == 11) {
            setDecimals('00000000000');

        }
        else if (decimals == 12) {
            setDecimals('000000000000');

        }
        else if (decimals == 13) {
            setDecimals('0000000000000');

        }
        else if (decimals == 14) {
            setDecimals('00000000000000');

        }
        else if (decimals == 15) {
            setDecimals('000000000000000');

        }
        else if (decimals == 16) {
            setDecimals('0000000000000000');

        }
        else if (decimals == 17) {
            setDecimals('00000000000000000');

        }

    }
    useEffect(() => {
        get_Token_list()
        let id = setInterval(() => {

        }, 1000);
        return () => {
            clearInterval(id)
        }
    }, [getToken, address]);

    return (
        <div className='py-4'>
            <div className="container" style={{ color: "#5b53a2" }}>
                <h1 className='token_main_heading text-start'>Create your token</h1>
                <p className="lead text-start mb-3">Simple. No coding required.</p>
                {/* <button className='btn btn-secondary'onClick={addTokenToWallet}>add</button> */}
            </div>



            <div className="container text-start">
                <div className="row mt-5">
                    {/* <div className="text-start" >
                        <p className='text-start' >Network</p>
                        <select className='network_select' value={selectedItem} onChange={handleSelectChange}>
                            <option value="Ethereum">Ethereum</option>
                            <option value="Binance Smart Chain" >Binance Smart Chain</option>
                            <option value="Polygon">Matic(Polygon)</option>
                            <option value="Avalanche">Avalanche </option>
                            <option value="Tron">Tron </option>

                        </select>
                        <p className='input_para'>Choose your network</p>

                    </div> */}
                    <div className="col-md-8">
                        <form action="#">
                            <div className='d-flex responsive_made'>
                                <div className="col-md-5">
                                    <div>
                                        <h6 >Token name</h6>
                                    </div>
                                </div>
                                <div className="col-md-6"><div>
                                    <input type="text" onChange={(e) => { setTokenName(e.target.value) }} className='token_input' />
                                    <p className='input_para'>
                                        Choose a name for your token.</p>
                                </div>
                                </div>
                            </div>
                            <div className='d-flex responsive_made'>
                                <div className="col-md-5">
                                    <div>
                                        <h6 >Token symbol</h6>
                                    </div>
                                </div>
                                <div className="col-md-6"><div>
                                    <input type="text" onChange={(e) => { setTokenSymbol(e.target.value) }} className='token_input' />
                                    <p className='input_para'>
                                        Choose a symbol for your token (usually 3-5 chars).</p>
                                </div>
                                </div>
                            </div>
                            <div className='d-flex responsive_made'>
                                <div className="col-md-5">
                                    <div>
                                        <h6 >Total supply</h6>
                                    </div>
                                </div>
                                <div className="col-md-7"><div>
                                    <input type="number" onChange={(e) => { setTotalSupply(e.target.value) }} className='token_input' />
                                    <p className='input_para'>
                                        Insert the initial number of tokens available. Will be put in your account..</p>
                                </div>
                                </div>
                            </div>
                            <div className='d-flex responsive_made'>
                                <div className="col-md-5">
                                    <div>
                                        <h6 >Decimals</h6>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div>
                                        <select className='network_select' value={decimalsValue} defaultValue={arr[0]} onChange={handleDecimals}>

                                            {arr.map((val, index) => {
                                                return (
                                                    <option value={val}>{val}</option>
                                                )

                                            })}




                                        </select>
                                        <p className='input_para'>
                                            Insert the decimal precision of your token.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex responsive_made'>
                                <div className="col-md-5">
                                    <div>
                                        <h6 >Email Address</h6>
                                    </div>
                                </div>
                                <div className="col-md-7"><div>
                                    <form>
                                        <input type="email" onChange={(e) => { setEmailAddress(e.target.value) }} className='token_input' />


                                    </form>
                                    <p className='input_para'>
                                        Enter your emailaddress</p>
                                </div>
                                </div>

                            </div>


                            <input type="checkbox" name={checkedOne ? null : 'Can Mint'} checked={checkedOne} onChange={updateOne} />
                            <strong className='ms-2'>Can Mint</strong><br />
                            <input type="checkbox" name={checkedTwo ? null : "Can Burn"} checked={checkedTwo} onChange={updateTwo} />
                            <strong className='ms-2'>Can Burn</strong>

                            <p className='blue'> <strong>Note:</strong>  If you want more functions, contact us. 👈</p>
                            <div className='d-flex responsive_made'>
                                <div className="col-md-5">
                                    <div>
                                        <h6 >Total amount</h6>
                                    </div>
                                </div>
                                <div className="col-md-7"><div>
                                    <form>
                                        <input type="text" className='token_input' value={totalAmount} disabled />


                                    </form>
                                    <p className='input_para'>
                                        total amount</p>
                                </div>
                                </div>

                            </div>
                        </form>



                    </div>
                </div>
            </div>
            <div className="container">
                <div>

                    <button type='submit' className='token_btn_select' onClick={() => { submit() }}>{isLoading ? <><div class="spinner-border text-white" role="status">
                    </div></> : 'Create'}</button>
                </div>

                <p style={{ color: '#212529' }}>GAS fee will be added to final amount</p>

            </div>

            <div className="container">

                <div className="list_token">

                    <h3 className=' text-start' style={{ color: "#5b53a2" }}>Your token List</h3>

                    <div className="inner_list">
                        <div className="main_div_list">
                            <div class="table-responsive">
                                <table class="table table-striped">
                                    <thead>
                                        <tr style={{ color: "#5b53a2" }}>
                                            <th scope="col">Address</th>
                                            <th scope="col">Network</th>
                                            <th scope="col">Token name</th>
                                            <th scope="col">Email Address</th>

                                            <th scope="col">Token symbol</th>
                                            <th scope="col">Total supply</th>

                                            <th scope="col">Decimals</th>


                                            <th scope="col">Can Mint</th>

                                            <th scope="col">Can Burn</th>
                                            <th scope="col">Url</th>
                                            <th scope="col">ADD Token</th>




                                            <th scope="col">Status</th>



                                        </tr>
                                    </thead>
                                    <tbody>

                                        {

                                            getToken.map((items, index) => {
                                                console.log("Addres", items.address)
                                                return (
                                                    <>

                                                        <tr>
                                                            <td >{items.address?.substring(0, 8) + "..." + items.address?.substring(items.address?.length - 8)}</td>
                                                            <td>{items?.network_name}</td>
                                                            <td>{items?.tokenname}</td>
                                                            <td>{items?.email}</td>
                                                            <td>{items?.token_symbol}</td>
                                                            <td>{items?.total_supply}</td>
                                                            <td>{items?.decimals}</td>
                                                            <td>{items?.isMint}</td>
                                                            <td>{items?.isBurn}</td>

                                                            {items.isDeploy == true ? <td id="myInput" onClick={() => { copy(items.url); toast('copied') }}><input className='no-outline' type="text" value={items?.url} /> </td > : <td >{''}</td>}
                                                            <td className='btn' onClick={() => addTokenToWallet(items)}>Add</td>
                                                            <td className={items?.isDeploy == false ? 'text-danger' : 'text-success'}>{items?.isDeploy == false ? <>Pending</> : <> Deploy</>}</td>




                                                        </tr>

                                                    </>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>

                        </div>

                    </div>


                </div>
            </div>




        </div>
    )
}

export default Token_main
