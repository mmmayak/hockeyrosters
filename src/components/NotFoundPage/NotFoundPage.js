import React from 'react';
import { Typography, Grid, withStyles, Button } from '@material-ui/core';
import { ReactComponent as Hockey } from '../../assets/images/player.svg';
import HomeIcon from '@material-ui/icons/Home';
import { withRouter } from 'react-router-dom';

const NotFoundPage = (props) => {
  const { classes } = props;
  return (
    <Grid container className={classes.cont}>
      <Grid item md={6} className={classes.imageCont}>
        <Hockey className={classes.image}/>
      </Grid>
      <Grid item xs={12} md={6}>
      <Typography className={classes.title}>
        404
      </Typography>
      <Typography className={classes.subTitle}>
        Oops!Page not found
      </Typography>
      <Typography className={classes.text}>
        Sorry, but the page you are looking for is not found. Please, make sure you have type the current URL.
      </Typography>
      <Button 
        onClick={() => props.history.push('/')}
        variant='contained'
        component='span'
        className={classes.btn}>
        <HomeIcon className={classes.homeIcon}/>To Home
      </Button>
      </Grid>
      
    </Grid>
  )
}

const styles = theme => ({
  cont: {
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  image: {
    width: '100%',
  },
  title: {
    fontSize: '200px',
    color: '#0070c0',
    fontWeight: '500',
    textAlign: 'center',
    height: '240px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '120px',
      height: '140px',
    }
  },
  subTitle: {
    fontSize: '40px',
    fontWeight: '500',
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      fontSize: '30px',
      
    }
  },
  text: {
    fontSize: '18px',
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      fontSize: '16px',
      
    }
  },
  imageCont: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  btn: {
    marginTop: '20px',
    background: '#0070c0',
    color: '#fff',
    fontSize: '22px',
    width: '100%',
    '&:hover': {
      background: '#0288d1'
    }
  },
  homeIcon: {
    marginRight: '10px'
  }
})

export default withRouter(withStyles(styles)(NotFoundPage));
