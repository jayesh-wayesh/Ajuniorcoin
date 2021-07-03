import Web3Modal from "web3modal"
import WalletConnectProvider from "@walletconnect/web3-provider"
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';


// export const useStyles = makeStyles((theme) => ({
//     root: {
//       '& > *': {
//         margin: theme.spacing(1),
//       },
//       fontSize: 10,
//     },
//     input: {
//       display: 'none',
//     },
// }));


export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: '#191919',
    margin: 10,
  },
  amount: {
    margin: 20,
    display: 'flex',
  },
  button: {
    margin: theme.spacing(1),
  },
}));
  

const INFURA_ID = "433699ddb2194574a686098d5596dc4a"  
export const web3Modal = new Web3Modal({
  //network: "mainnet", // optional
  cacheProvider: true, // optional
  theme: "dark",
  providerOptions: {
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: INFURA_ID
      }
    }
  }
});


export const logoutOfWeb3Modal = async ()=>{
    await web3Modal.clearCachedProvider();
    console.log("cleared")
    setTimeout(()=>{
        window.location.reload()
    },1)
}