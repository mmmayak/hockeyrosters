import React from 'react';
import { ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails } from '@material-ui/core';
import  ExpandMoreIcon  from '@material-ui/icons/ExpandMore';

 const Accordion = (props) => {
   
  return (
    <ExpansionPanel className={props.panelCont}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
       <Typography variant='h4' className={props.titleClass}>{props.title}</Typography> 
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography className={props.textClass}>
          {props.text}
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

export default Accordion;