import React from 'react';
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
  }),
);



export default function SimpleCard() {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);


  return (
    <Card className={classes.root}>
        <CardHeader
            title="Buy AJC Tokens"
            subheader="and do aswesome stuff!"
        />
        <form className={classes.root} noValidate autoComplete="off">
            <div className={classes.amount}>
                <Avatar aria-label="recipe" className={classes.avatar}>
                ₹
                </Avatar>
                <TextField id="outlined-basic" label="INR" variant="outlined" />
            </div>
            <div>
                <ArrowDownwardIcon/>
            </div>
            <div className={classes.amount}>
                <Avatar aria-label="recipe" className={classes.avatar}>
                    A
                </Avatar>
                <TextField id="outlined-basic" label="AJC" variant="outlined" />
            </div>
            <Button
                size="small"
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<SendIcon/>}
            >
                Transfer
            </Button>
        </form>
    </Card>
  );
}
