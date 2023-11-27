import axios from 'axios';
// import '/panel.css';
import './panel.css';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { toast } from 'react-toastify';
import { loadWeb3 } from '../../apis/api';
import Token_main from '../Token_main/Token_main';
import Token_steps from '../Token_steps/Token_steps';

import Token_ut from '../Token_ut/Token_ut';

function AdminPanel({ address }) {
    const [key, setKey] = useState('Pending');
    const [getToken, setgetToken] = useState([]);
    const [deploy, setDeploy] = useState([]);

    const [getindex, setgetindex] = useState("");

    const [modalShow, setModalShow] = React.useState(false);
    const [afterdeploy, setafterdeploy] = React.useState(false);
    const [ischecked, setisChecked] = useState(false);
    const [url, setUrl] = useState('');
    const [search, setsearch] = useState('');




    const updateOne = async (e) => {

        setisChecked((prev) => !prev)
    };
    const submit = async () => {
        let userName = getToken[getindex].tokenname
        // alert(userName)
        console.log('getusername', getToken[getindex].tokenname)
        setafterdeploy(false)
        try {
            await axios
                .patch(`http://server.thecoincreator.com/students/${userName}`, {
                    isDeploy: ischecked,
                    url: url
                }).then(function ({ data }) {
                    console.log("data", data);
                    let { msg, success } = data;

                    success ? toast.success(msg) : toast.error(msg)
                    // toast.success(data.msg)
                })
                .catch(function (error) {
                    console.log('error', error.message)
                    toast.error(error.message)

                });
        } catch (error) {
            toast.error(error.message)
        }


    }

    const get_Token_list = async () => {
        // let id = localStorage.getItem("NETWORKID");

        // console.log('what is first result', id)
        // let address = await loadWeb3(id);
        if (address == "No Wallet") {
            toast.error("No Wallet Connected")
        }
        else if (address == "Wrong Network") {
            toast.error("Wrong Newtwork please connect to Binance smart chain network")

        } else {
            try {
                let res = await axios.get(`http://server.thecoincreator.com/deploy?id=2`).then((res) => {
                    // console.log("Responce", res.data);
                    setgetToken(res.data)
                }
                )
                let deploy = await axios.get(`http://server.thecoincreator.com/deploy?id=1`).then((res) => {
                    console.log('deploy response', res.data)
                    setDeploy(res.data)
                }
                )

            } catch (e) {
                console.log("Error While Call Get API", e);
            }
        }
    }

    const handleChange = async (event) => {
        setsearch(event.target.value)
        console.log('search', event.target.value)
    }
    useEffect(() => {
        get_Token_list()
        let id = setInterval(() => {

        }, 1000);
        return () => {
            clearInterval(id)
        }
    });
    return (<div className=''>
        <div className='d-flex justify-content-between'>
            <h2 className='' style={{ color: "#5b53a2" }}> Welcome to Admin Panel</h2>

            <input type="search" className='' placeholder='Search ' onChange={handleChange}></input>
        </div>

        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
            defaultActiveKey="Pending"

        >
            <Tab eventKey="Pending" title="Pending">
                <div className="container">

                    <div className="list_token">

                        <h3 className=' text-start' style={{ color: "#5b53a2" }}>Your pending token List</h3>

                        <div className="inner_list">
                            <div className="main_div_list">
                                <div class="table-responsive">
                                    <table class="table table-striped">
                                        <thead>
                                            <tr style={{ color: "#5b53a2" }}>
                                                <th scope="col">Address</th>
                                                <th scope="col">Token name</th>
                                                <th scope="col">Read More</th>
                                                <th scope="col">Email Address</th>
                                                <th scope='col'>AfterDeploy</th>
                                                <th scope="col">Status</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                getToken.filter((item) => { return search.toLocaleLowerCase() === '' ? item : item.email.toLocaleLowerCase().includes(search); })
                                                    .map((items, index) => {
                                                        return (
                                                            <>
                                                                <tr>
                                                                    <td >{items.address?.substring(0, 8) + "..." + items.address?.substring(items.address?.length - 8)}</td>
                                                                    <td>{items?.tokenname}</td>
                                                                    <td><a className='text-decoration-none' onClick={() => (setModalShow(true), setgetindex(index))} style={{ cursor: 'pointer' }}>View Detail</a></td>
                                                                    <td>{items?.email}</td>

                                                                    <td onClick={() => {
                                                                        setafterdeploy(true);
                                                                        setgetindex(index)
                                                                    }} >
                                                                        <a className='text-decoration-none' style={{ cursor: 'pointer' }}>After Deploy</a></td>

                                                                    <td>{items?.isDeploy == false ? <>Pendding</> : <> Deploy</>}</td>

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
                {

                    modalShow == true ?
                        <>
                            <Modal
                                // {...props}
                                show={modalShow}
                                size="lg"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                            >
                                <Modal.Header style={{ color: "#5b53a2" }} closeButton onClick={() => setModalShow(false)}>
                                    <Modal.Title id="contained-modal-title-vcenter" >
                                        Token Deatils
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body style={{ color: "#5b53a2" }}>
                                    <div className="token_list">
                                        <div className="inner_list_tag">
                                            <h6> Network :</h6>
                                            <h6 className='text-dark'>{getToken[getindex].network_name}</h6>
                                        </div>
                                        <div className="inner_list_tag">
                                            <h6> Token name :</h6>
                                            <h6 className='text-dark'>{getToken[getindex].tokenname}</h6>
                                        </div>
                                        <div className="inner_list_tag">
                                            <h6>  Metamask :</h6>
                                            <h6 className='text-dark'>{getToken[getindex].address}</h6>
                                        </div>
                                        <div className="inner_list_tag">
                                            <h6>   Token symbol :</h6>
                                            <h6 className='text-dark'>{getToken[getindex].token_symbol}</h6>
                                        </div>
                                        <div className="inner_list_tag">
                                            <h6>Total supply :</h6>
                                            <h6 className='text-dark'>{getToken[getindex].total_supply}</h6>

                                        </div>
                                        <div className="inner_list_tag">
                                            <h6>Decimals :</h6>
                                            <h6 className='text-dark'>{getToken[getindex].decimals}</h6>

                                        </div>
                                        <div className="inner_list_tag">
                                            <h6>Email Address :</h6>
                                            <h6 className='text-dark'>{getToken[getindex].email}</h6>

                                        </div>
                                        <div className="inner_list_tag">
                                            <h6>Can Mint :</h6>
                                            <h6 className='text-dark'>{getToken[getindex].isMint}</h6>

                                        </div>
                                        <div className="inner_list_tag">
                                            <h6> Can Burn :</h6>
                                            <h6 className='text-dark'>{getToken[getindex].isBurn}</h6>

                                        </div>


                                    </div>
                                </Modal.Body>
                                <Modal.Footer>
                                    <button onClick={() => setModalShow(false)} className=" btn " style={{ color: "white", backgroundColor: "#5b53a2" }}>Close</button>
                                </Modal.Footer>
                            </Modal>


                        </>
                        :
                        <>
                        </>



                }


                {

                    afterdeploy == true ?
                        <>
                            <Modal
                                // {...props}
                                show={afterdeploy}
                                size="md"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                            >
                                <Modal.Header closeButton onClick={() => setafterdeploy(false)}>
                                    <Modal.Title id="contained-modal-title-vcenter" style={{ color: "#5b53a2" }}>
                                        After Deploy
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className="token_list">
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label" style={{ color: "#5b53a2" }}>Enter Url</label>
                                            <input type="text" value={url} class="form-control" placeholder="Enter url Here" onChange={(e) => { setUrl(e.target.value) }} />
                                        </div>
                                        <div class="form-check" style={{ color: "#5b53a2" }}>
                                            <input class="form-check-input" type="checkbox" name={ischecked} checked={ischecked} onChange={updateOne} />
                                            <label class="form-check-label" for="flexCheckDefault" >
                                                Is Deploy
                                            </label>

                                        </div>

                                        {/* <input type="checkbox" name={ischecked} checked={ischecked} onChange={updateOne} /> */}
                                    </div>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button onClick={() => { submit() }} disabled={(ischecked == false) || (url.toString().length == 0)} className=" btn " style={{ color: "white", backgroundColor: "#5b53a2" }}>submit</Button>

                                    <Button onClick={() => setafterdeploy(false)} className=" btn " style={{ color: "white", backgroundColor: "#5b53a2" }} >Close</Button>
                                </Modal.Footer>
                            </Modal>


                        </>
                        :
                        <>
                        </>



                }

            </Tab>
            <Tab eventKey="Deploy" title="Deploy">
                <div className="container">

                    <div className="list_token">

                        <h3 className=' text-start' style={{ color: "#5b53a2" }}>Your Deploy token List</h3>

                        <div className="inner_list">
                            <div className="main_div_list">
                                <div class="table-responsive">
                                    <table class="table table-striped">
                                        <thead>
                                            <tr style={{ color: "#5b53a2" }}>
                                                <th scope="col">Address</th>
                                                <th scope="col">Network</th>
                                                <th scope="col">Token name</th>
                                                <th scope="col">Token symbol</th>
                                                <th scope="col">Total supply</th>

                                                <th scope="col">Decimals</th>

                                                <th scope="col">Email Address</th>

                                                <th scope="col">Can Mint</th>

                                                <th scope="col">Can Burn</th>
                                                <th scope="col">Status</th>



                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                deploy.filter((item) => { return search.toLocaleLowerCase() === '' ? item : item.email.toLocaleLowerCase().includes(search); })

                                                    .map((items, index) => {
                                                        console.log("Addres", items.address)
                                                        return (
                                                            <>

                                                                <tr>
                                                                    <td >{items.address?.substring(0, 8) + "..." + items.address?.substring(items.address?.length - 8)}</td>
                                                                    <td>{items?.network_name}</td>
                                                                    <td>{items?.tokenname}</td>
                                                                    <td>{items?.token_symbol}</td>
                                                                    <td>{items?.total_supply}</td>
                                                                    <td>{items?.decimals}</td>
                                                                    <td>{items?.email}</td>
                                                                    <td>{items?.isMint}</td>
                                                                    <td>{items?.isBurn}</td>
                                                                    <td>{items?.isDeploy == false ? <>Padding</> : <> Deploy</>}</td>




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
            </Tab>


        </Tabs>
    </div>

    );
}

export default AdminPanel;