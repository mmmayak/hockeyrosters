import React from 'react'
import { Button, withStyles } from '@material-ui/core';

 const UploadBtn = (props) => {
   const {classes} = props;
  return (
    <React.Fragment>
      <input 
        id='upload-btn-file'
        className={classes.input}
        type='file'
        onChange={props.fileSelect}/>
        <label className={classes.btnCont} htmlFor='upload-btn-file'>
          <Button variant='contained' component='span' className={classes.button}>
            Upload File
          </Button>
        </label>
    </React.Fragment>
   
  )
}

const styles = {
  btnCont: {
    width: '100%'
  },
  button: {
    background: '#0070c0',
    color: '#fff',
    fontSize: '22px',
    width: '100%',
    '&:hover': {
      background: '#0288d1'
    }
  },
  input: {
    display: 'none'
  }
}

export default withStyles(styles)(UploadBtn);
