import Web3 from "web3";
const chainId = 80001 // Polygon Mainnet
let isItConnected = false;

const changeNetwork = async ({ id }) => {
    if (window.ethereum.networkVersion !== `0x${Number(id).toString(16)}`) {
        try {
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: `0x${Number(id).toString(16)}` }]
            });
        } catch (err) {
            // This error code indicates that the chain has not been added to MetaMask
            if (err.code === 4902) {
                await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [
                        {
                            chainName: 'Polygon Mainnet',
                            chainId: `0x${Number(id).toString(16)}`,
                            nativeCurrency: { name: 'MATIC', decimals: 18, symbol: 'MATIC' },
                            rpcUrls: ['https://polygon-rpc.com/']
                        }
                    ]
                });
            }
            // if (err.code === 32602) {
            //     await window.ethereum.request({
            //         method: 'wallet_addEthereumChain',
            //         params: [
            //             {
            //                 chainName: 'Polygon Mainnet',
            //                 chainId: `0x${Number(id).toString(16)}`,
            //                 nativeCurrency: { name: 'MATIC', decimals: 18, symbol: 'MATIC' },
            //                 rpcUrls: ['https://polygon-rpc.com/']
            //             }
            //         ]
            //     });
            // }
            // if (err.code === 32603) {
            //     await window.ethereum.request({
            //         method: 'wallet_addEthereumChain',
            //         params: [
            //             {
            //                 chainName: 'Polygon Mainnet',
            //                 chainId: `0x${Number(id).toString(16)}`,
            //                 nativeCurrency: { name: 'MATIC', decimals: 18, symbol: 'MATIC' },
            //                 rpcUrls: ['https://polygon-rpc.com/']
            //             }
            //         ]
            //     });
            // }
        }
    }

};
const handleNetworkSwitch = async (id) => {
    await changeNetwork({ id });
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
export const loadWeb4 = async (id) => {
    try {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            await window.ethereum.enable();
            await window.web3.eth.getChainId((err, netId) => {
                // console.log("networkId==>", netId);
                switch (netId.toString()) {
                    case "5":
                        isItConnected = true;
                        break;
                    default:
                        handleNetworkSwitch(id.id);
                        isItConnected = false;
                }
            });
            if (isItConnected == true) {
                let accounts = await getAccounts();
                return accounts[0];
            } else {
                let res = "Wrong Network";
                return res;
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