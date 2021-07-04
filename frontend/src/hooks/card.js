import React, { useContext, useEffect, useState } from 'react';
import { AjuniorcoinContext, SignerContext } from "../hardhat/SymfoniContext";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import TextField from '@material-ui/core/TextField';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Account from './account';
import {useStyles} from  './utils'
import Profile from './profile'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


export default function SimpleCard(props) {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const ajc = useContext(AjuniorcoinContext)
  const [signer] = useContext(SignerContext)
  const [amount, setAmount] = useState(0);
  const [address,setAddress] = useState()
  const [open, setOpen] = React.useState(false);



  useEffect(() => {
      const doAsync = async () => {
          if (!ajc.instance) return
          console.log("Ajuniorcoin is deployed at ", ajc.instance.address)
          const tx2 = await ajc.instance.owner()
      };
      doAsync();
  }, [ajc])


  const handleClick = () => {
    setOpen(true);
  };


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  const handleTransferToken = async (e) => {
      e.preventDefault()
      if (!ajc.instance) throw Error("Greeter instance not ready")
      if (ajc.instance && address.startsWith('0x')) {
          console.log("Transferring to : ", address)

          // ajc.factory.
          const myAddress = await signer.getAddress()
          const bal = await ajc.instance.balanceOf(myAddress)
          const bal3 = await ajc.instance.balanceOf(address)
          console.log('myaddress : ', myAddress)
          console.log('bal before : ', bal)
          console.log('user address : ', bal3)

          const tx2 = await ajc.instance.transferToUser(address, amount);
          await tx2.wait()

          const bal2 = await ajc.instance.balanceOf(myAddress)
          const bal4 = await ajc.instance.balanceOf(address)
          console.log('myaddress : ', myAddress)
          console.log('bal after : ', bal2)
          console.log('user address : ', bal4)

          handleClick()
          setAmount(0)
      }
    }


  return (
    <>
    {ajc.instance && 
      <>
        <Account address={address} setAddress={setAddress}></Account>
      </>
    }
    {address && 
      <>  
        <Profile
          username={address.startsWith('0x') ? address.slice(0,7) : address}
        />
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            Transaction complete !
          </Alert>
        </Snackbar>
        <Card className={classes.root}>
            <CardHeader
                title="Buy AJVC Tokens"
                subheader="Ajuniorcoin ($AJC) let's you do aswesome stuff!"
            />
            <form className={classes.root} noValidate autoComplete="off">
                <div className={classes.amount}>
                  <Avatar aria-label="recipe" className={classes.avatar}>
                  ₹
                  </Avatar>
                  <TextField id="outlined-basic" label="INR" value={amount} variant="outlined" onChange={(e) => setAmount(e.target.value)}/>
                </div>
                <div>
                  <ArrowDownwardIcon/>
                </div>
                <div className={classes.amount}>
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    A
                  </Avatar>
                  <TextField id="outlined-basic" label="AJC" value={amount} variant="outlined" />
                </div>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  endIcon={<SendIcon/>}
                  onClick={(e) => handleTransferToken(e)}
                >
                  Transfer
                </Button>
            </form>
        </Card>
      </>
    }
    </>
  );
}
