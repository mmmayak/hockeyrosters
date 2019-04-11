import React, { Component } from 'react'
import { withStyles, Grid } from '@material-ui/core';
import { CURRENT_YEAR } from '../../config';

const styles = {

}

 class Footer extends Component {
  render() {
    const {classes} = this.props;
    return (
    <div style={{position: 'absolute', bottom: 0, padding: '20px 0', background: '#141414', width: '100%'}}>
      <div style={{color: '#fff', textAlign: 'center'}}>
        {CURRENT_YEAR}
      </div>
    </div>
    
    
    )
  }
}

export default withStyles(styles)(Footer);