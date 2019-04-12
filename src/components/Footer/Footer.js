import React, { Component } from 'react'
import { withStyles, Grid } from '@material-ui/core';
import { CURRENT_YEAR } from '../../config';



 class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
    <div className={classes.footer}>
      <div className={classes.copy}>
      {'\u00A9'}Copyright {CURRENT_YEAR}
      </div>
      <p className={classes.prod}>Prod by <a className={classes.link} target='_blank' href='http://devpuzzle.com/'>DevPuzzle</a> </p>
    </div>
    
    
    )
  }
}

  const styles = {
    footer: {
      position: 'absolute', 
      bottom: 0, 
      padding: '20px 0', 
      background: '#141414', 
      width: '100%'
    },
    copy: {
      color: '#fff', 
      textAlign: 'center', 
      marginBottom: '10px'
    },
    prod: {
      textAlign: 'center', 
      color: '#fff'
    },
    link: {
      color: '#28abd7',
      textDecoration: 'none',
      '&:hover': {
        color: '#19c3fc'
      }
    }
  }

export default withStyles(styles)(Footer);