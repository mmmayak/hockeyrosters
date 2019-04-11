import React, { Component } from 'react'
import { ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails, withStyles, Grid } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import UploadBtn from '../../components/UI/UploadBtn/UploadBtn';
import Accordion from '../../components/UI/Accordion/Accordion';

class OptionsContainer extends Component {

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
        <Grid item xs={12}>
          <UploadBtn />
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
  
  }
});

export default withStyles(styles)(OptionsContainer);