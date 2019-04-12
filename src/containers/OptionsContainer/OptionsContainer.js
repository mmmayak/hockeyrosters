import React, { Component } from 'react'
import { Typography, withStyles, Grid, ListItem } from '@material-ui/core';
import UploadBtn from '../../components/UI/UploadBtn/UploadBtn';
import Accordion from '../../components/UI/Accordion/Accordion';

class OptionsContainer extends Component {
  state = {
    selectedFile: null
  }

  fileSelectHandler = e => {
    console.log(e.target.files[0])
    this.setState({
      selectedFile: e.target.files[0]
    })
  }

  formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Accordion 
          panelCont={classes.panelCont}
          textClass=''
          titleClass={classes.title}
          title={'Self Printing'}
          text={'Simply upload a Microsoft Word or Microsoft Excel file with all details that are required on roster such as first and last name, number and any other details. Some programs want coaches CEP# or USA Hockey numbers which is required for USA Hockey run tournaments.  We will then send you back a file that can be printed using Avery 5163 or 8163 paper.'}
          />
        <Accordion 
          panelCont={classes.panelCont}
          textClass=''
          titleClass={classes.title}
          title={'Hockey Rosters Prints for you'}
          text={'Simply upload a Microsoft Word or Microsoft Excel file with all details that are required on roster such as first and last name, number and any other details. Some programs want coaches CEP# or USA Hockey numbers which is required for USA Hockey run tournaments.  We will then send you back a proof which will include your logo and color scheme that match your program.  Once you approve we will send via USPS your teams lables.'}
          />
          {this.state.selectedFile ?   
              <ListItem>
                <Grid container direction='column'>
                  <Typography className={classes.fileType}>Name: {this.state.selectedFile.name}</Typography>  
                  <Typography className={classes.fileType}>Size: {this.formatBytes(this.state.selectedFile.size)}</Typography>
                </Grid>
              </ListItem>: null}
        <Grid item xs={12}>
          <UploadBtn fileSelect={this.fileSelectHandler}/>
        </Grid>
      </React.Fragment>
    )
  }
}

const styles = theme => ({
  panelCont: {
    marginBottom: '40px'
  },
  title: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '22px'
    },
  },
  fileType: {
    color: '#9b9b9b'
  },  
});

export default withStyles(styles)(OptionsContainer);