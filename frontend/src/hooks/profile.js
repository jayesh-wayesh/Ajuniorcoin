import React, { useEffect } from "react";
import Button from '@material-ui/core/Button'
import {logoutOfWeb3Modal} from './utils';


export default function Profile(props) {

    useEffect(() => {
        // if(localStorage.getItem('username')){
        //     var currentUser = localStorage.getItem('username')
        //     props.setUsername(currentUser)
        //     props.setOldUser(true)
        // }
    }, []);


    return (
        <>
        {props.username && 
            <>
                <div className="account">
                    <div className="username">👤 {props.username}</div>
                    <Button  className="logout" onClick={logoutOfWeb3Modal} size="small" variant="outlined" color="secondary">
                        Log Out
                    </Button>
                </div>
            </> 
        }
        </>  
    )
}