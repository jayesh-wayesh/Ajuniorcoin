import React, { useState, useEffect } from 'react'
import { ethers } from "ethers"
import usePoller from "./poller"
// import '../../App.css'
import { web3Modal } from './utils'
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import { useStyles } from './utils';
import ajvc from './ajvc.png';


export default function Account(props) {

    const classes = useStyles();
    const [injectedProvider, setInjectedProvider] = useState()

    const pollInjectedProvider = async ()=>{
        console.log("regltrmgtmkglr 1")
        if( injectedProvider ){
            console.log("regltrmgtmkglr 11")
            let accounts = await injectedProvider.listAccounts()
            if(accounts && accounts[0]){
                if(typeof props.setAddress == "function") props.setAddress(accounts[0])
            }
        }
    }
    usePoller(()=>{pollInjectedProvider()},props.pollTime?props.pollTime:1999)

    console.log("regltrmgtmkglr")

    const loadWeb3Modal = async ()=>{
        console.log("regltrmgtmkglr 2")
        const provider = await web3Modal.connect();
        setInjectedProvider(new ethers.providers.Web3Provider(provider))
    }

    let modalButtons = []
    if (!web3Modal.cachedProvider) {
        modalButtons.push(
            <>
                <h2>Connect to metamask 🦊</h2>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    endIcon={<SendIcon/>}
                    size="small"
                    onClick={loadWeb3Modal}
                    >
                Connect
                </Button>
            </>
            // <button onClick={loadWeb3Modal}>Connect</button>
        )
    }

    useEffect(async () => {
        console.log("regltrmgtmkglr 3")
        if (web3Modal.cachedProvider) {
            loadWeb3Modal()
        }
    }, []);

    return (
        <>
            {modalButtons}
        </>
    );
}