import React, { useEffect, useState } from 'react'
import Token_header from "../Token_header/Token_header"
import Token_main from "../Token_main/Token_main"

import Token_steps from "../Token_steps/Token_steps"
import Token_ut from "../Token_ut/Token_ut"
import Token_footer from "../Token_footer/Token_footer"
import AdminPanel from '../admin_panel/Admin_Panel'
import UserPanel from '../user_panel/UserPanel'
import { loadWeb3 } from '../../apis/api'

function Token_page({ setAddress, address }) {
  const [isNotUser, setINotUser] = useState();
  const [addresss, setAddresss] = useState('');
  const [chainName, setchainName] = useState('');
  // alert(chainName)

  const myfun = async () => {
    let id = localStorage.getItem("NETWORKID");

    let res = await loadWeb3(id);
    if (res == '0x4Cfd57AfD2DD6934eF72458450ea8A4F13eDFE2d') {
      setAddresss(res)
      setINotUser(true)
    }
    else {
      setINotUser(false)
    }

  }
  useEffect(() => {
    setInterval(() => {
      myfun()

    }, 1000);


  });

  return (
    <div>
      <Token_header setAddress={setAddress} setchainName={setchainName} />
      <div className='container'>{
        isNotUser ? <>{<AdminPanel address={addresss} />}</> : <>{<UserPanel address={address} chainName={chainName} />}</>
      }


      </div>
      {/* <Token_main address={address} />
      <Token_steps />
      <Token_ut /> */}
      {/* <Token_footer/> */}
    </div>
  )
}

export default Token_page
