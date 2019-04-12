import React from 'react';
import { Button, withStyles } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

 const SaveBtn = (props) => {
  const {classes} = props;
  return (
    <Button 
      variant='contained' 
      component='span' 
      className={classes.button}
      onClick={() => props.sendData(props.data)}>
      {props.loading ? <CircularProgress className={classes.progress} /> : 'Send File'}
    </Button>
  )
}

const styles = {
  button: {
    background: '#0070c0',
    color: '#fff',
    fontSize: '22px',
    width: '100%',
    '&:hover': {
      background: '#0288d1'
    }
  },
  progress: {
    color: '#fff'
  }
}

export default withStyles(styles)(SaveBtn);