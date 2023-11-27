import React, { useEffect, useState } from 'react'
import "./Token_header.css"
import moonh from "../Assets/moonh.png"
import t2 from "../Assets/t2.png"
import { Link } from "react-router-dom"
import moonh2 from "../Assets/moonh2.png"
import { loadWeb3 } from '../../apis/api';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { loadWeb4 } from '../../apis/api2'
import TronWeb from 'tronweb'

function Token_header({ setAddress, setchainName }) {
  const [show, setShow] = useState(false);
  const [getAccount, setGetAccount] = useState(false);
  const [acc, setAcc] = useState('');
  const [account, setaccount] = useState(null)


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let [btnTxt, setBtTxt] = useState("Connect")
  const [tronAddress, settronAddress] = useState('')

  let [showwalleticon, setshowwalleticon] = useState(true)
  const [chain, setChain] = useState({
    name: "Hong Kong",

    id: 1,
  });
  const selectOptions = [
    { name: "binance", id: 97, networkName: 'binance' },
    { name: "ethereum", id: 1, networkName: 'ethereum' },
    { name: "polygon", id: 80001, networkName: 'MumbaiTestNet' },
    // { name: "avalanche", id: 43114, networkName: 'avalanche' },
    { name: "tron", id: 1230, networkName: 'tron' },
  ];
  let mainAccount = ''

  async function tronConnect() {

    try {
      mainAccount = await window?.tronWeb?.defaultAddress?.base58
      setAddress(mainAccount)
      setGetAccount(true)
      let myAcc = mainAccount?.substring(0, 4) + "..." + mainAccount?.substring(mainAccount?.length - 4);
      setshowwalleticon(false)
      setBtTxt(myAcc);
      // console.log('main Account', mainAccount)

      if (mainAccount) {
        settronAddress(mainAccount)
        setaccount(mainAccount)
      } else {
        const HttpProvider = TronWeb.providers.HttpProvider
        const fullNode = new HttpProvider('https://api.shasta.trongrid.io')
        const solidityNode = new HttpProvider('https://api.shasta.trongrid.io')
        const eventServer = 'https://api.shasta.trongrid.io/'
        const gettronWeb = new TronWeb(fullNode, solidityNode, eventServer)
        toast.warning('Please login or install tron wallet!')
      }
    } catch (error) {
      toast.error('please login tron wallet')

      console.log('errorrrrr', error.message)
    }
  }

  const getaccount = async () => {
    let id = localStorage.getItem("NETWORKID");
    if (id == 1230) {
      tronConnect()
    }
    else {
      if (acc == "No Wallet") {
        toast.error('please install metamask')
      }
      else if (acc == "Wrong Network") {
        toast.error('Wrong Network')
      } else {
        setGetAccount(true)
        let myAcc = acc?.substring(0, 4) + "..." + acc?.substring(acc?.length - 4);
        setshowwalleticon(false)
        if (myAcc.length > 10) {
          setBtTxt(myAcc);

        }
        else {
          toast.error('please select network')
        }

      }
    }



  }
  const handleChange = async (value) => {
    // console.log('handleChange', value)
    setchainName(value.name)
    setChain(value)

    setBtTxt('Connect')

    localStorage.setItem("NETWORKID", (value.id));
    let res = await loadWeb3(value.id);
    setAcc(res)
    setAddress(res)

  }
  // useEffect(() => {


  //   const init = async () => {
  //     let id = localStorage.getItem("NETWORKID");
  //     let res
  //     if (id != 1230) {
  //       res = await loadWeb3(id);

  //     }
  //     setAcc(res)
  //     setAddress(res)
  //     getaccount()


  //   }
  //   init()
  // },);

  return (
    <div className='token_main'>
      <div className="container-fluid p-0">
        <div className="d-flex token_bg  justify-content-between">
          <div>
            <Link to='/' className="navbar-brand">

              <img src={moonh2} alt="Moon Deploy" style={{ height: '59px' }} />
            </Link>
          </div>
          <div className='d-flex res_btn'>
            {/* <button className='token_header_btn'> <img src={t2} style={{ width: '12px' }} alt="" /> <span className='btn_text'>BNB Smart Chain</span></button> */}
            <select className="form-select me-3" aria-label="multichain" value={JSON.stringify(chain)}
              onChange={(e) => handleChange(JSON.parse(e.target.value))}>
              <option >Please select</option>
              {selectOptions.map((option, index) => {
                return (
                  <option key={index} value={JSON.stringify(option)}>
                    {option?.name}
                  </option>
                );
              })}
            </select>
            {/* <button className='btn btn-primary mx-2' onClick={tronConnect}>connect tron</button> */}

            <button className='connect_btn' onClick={getaccount}>{btnTxt}</button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Token_header
