import React from 'react';
import { Button, withStyles } from '@material-ui/core';

 const SaveBtn = (props) => {
  const {classes} = props;
  return (
    <Button variant='contained' component='span' className={classes.button}>
      Send File
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
  }
}

export default withStyles(styles)(SaveBtn);