import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Token_main from '../Token_main/Token_main';
import Token_steps from '../Token_steps/Token_steps';

import Token_ut from '../Token_ut/Token_ut';

function UserPanel({ address,chainName }) {
    const [key, setKey] = useState('Pending');

    return (
        <>
            <Token_main address={address} chainName={chainName} />
            <Token_steps />
            <Token_ut /></>




    );
}


export default UserPanel;