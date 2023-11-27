import Web3 from "web3";
var isItConnected = false;


const changeNetwork = async (id) => {
  try {
    if (!window.ethereum) throw new Error("No crypto wallet found");
    const web3 = window.web3;
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: web3.utils.toHex(id) }]
    });




  } catch (err) {
    console.log(err, "not found");
  }
};
const handleNetworkSwitch = async (id) => {
  await changeNetwork(id);
};
let accounts;
const getAccounts = async () => {
  const web3 = window.web3;
  try {
    accounts = await web3.eth.getAccounts();
    return accounts;
  } catch (error) {
    console.log("Error while fetching acounts: ", error);
    return null;
  }
};
export const disconnectWallet = async () => {
  await window.ethereum.request({
    method: "eth_requestAccounts",
    params: [{ eth_accounts: {} }],
  });
  console.log("disconnect");
};
export const loadWeb3 = async (id) => {
  try {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      await window.web3.eth.getChainId(async (err, netId) => {
        if (netId == id) {
          isItConnected = true;

        }
        else {
          isItConnected = true;
          await handleNetworkSwitch(id);


        }
      });


      if (isItConnected == true) {
        let accounts = await getAccounts();

        isItConnected = false;


        return accounts[0];

      }
    } else {
      let res = "No Wallet";
      return res;
    }
  } catch (error) {
    let res = "No Wallet";
    return res;
  }
};