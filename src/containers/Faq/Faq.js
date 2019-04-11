import React, { Component } from 'react'
import Accordion from '../../components/UI/Accordion/Accordion';
import { withStyles } from '@material-ui/core';

 class Faq extends Component {
   
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Accordion 
          panelCont={classes.panelCont}
          textClass={classes.textClass}
          titleClass={classes.title}
          title={'What if I get a new team member mid-season?'}
          text={'Hockey Rosters will send you a new .pdf file for free.  If you wish to have printed lables shipped we will send at the cost of $0.25 per label ($2.50 for every 10 labels).'}/>
        <Accordion 
          panelCont={classes.panelCont}
          textClass={classes.textClass}
          titleClass={classes.title}
          title={'What is the cost of shipping?'}
          text={'All rosters are shipped free via UPS Priority Mail.'}/>
        <Accordion 
          panelCont={classes.panelCont}
          textClass={classes.textClass}
          titleClass={classes.title}
          title={'What is the cost of shipping?'}
          text={'All rosters are shipped free via UPS Priority Mail.'}/>
        <Accordion 
          panelCont={classes.panelCont}
          textClass={classes.textClass}
          titleClass={classes.title}
          title={'What is the cost of shipping?'}
          text={'All rosters are shipped free via UPS Priority Mail.'}/>
        <Accordion 
          panelCont={classes.panelCont}
          textClass={classes.textClass}
          titleClass={classes.title}
          title={'What is the cost of shipping?'}
          text={'All rosters are shipped free via UPS Priority Mail.'}/>
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
    }
  },
  textClass: {
    color: '#0070c0',
    fontSize: '22px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '18px'
    }
  }
});

export default withStyles(styles)(Faq);