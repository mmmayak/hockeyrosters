import React from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, withStyles } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import HelpIcon from '@material-ui/icons/Help';
import OptionsIcon from '@material-ui/icons/Storage';
import SampleIcon from '@material-ui/icons/RemoveRedEye';
import { NavLink } from 'react-router-dom';

 const SideDrawer = (props) => {
   const { classes } = props;
  return (
    <Drawer open={props.openDrawer} onClose={() => props.toggleDrawer(false)}>
      <List style={{ width: '200px'}}>
        <ListItem 
          button 
          component={NavLink}
          className={classes.link}
          activeClassName={classes.active}
          exact
          to='/' 
          onClick={() => props.toggleDrawer(false)}
          onKeyDown={() => props.toggleDrawer(false)}>
          <ListItemIcon><HomeIcon /></ListItemIcon> 
          <ListItemText>Home</ListItemText> 
        </ListItem>
        <ListItem 
          button 
          className={classes.link}
          component={NavLink}
          activeClassName={classes.active}
          to='/options' 
          onClick={() => props.toggleDrawer(false)}
          onKeyDown={() => props.toggleDrawer(false)}>
          <ListItemIcon><OptionsIcon /></ListItemIcon> 
          <ListItemText>Options</ListItemText> 
        </ListItem>
        <ListItem 
          button 
          className={classes.link}
          component={NavLink}
          activeClassName={classes.active}
          to='/sample' 
          onClick={() => props.toggleDrawer(false)}
          onKeyDown={() => props.toggleDrawer(false)}>
          <ListItemIcon><SampleIcon /></ListItemIcon> 
          <ListItemText>Sample</ListItemText>
        </ListItem>
        <ListItem 
          button 
          className={classes.link}
          component={NavLink}
          activeClassName={classes.active}
          to='/faq' 
          onClick={() => props.toggleDrawer(false)}
          onKeyDown={() => props.toggleDrawer(false)}>
          <ListItemIcon><HelpIcon /></ListItemIcon> 
          <ListItemText>FAQ</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  )
}

const styles = {
  link: {
    '&:hover': {
      '& div': {
        color: '#0070c0'
      },
      '& span': {
        color: '#0070c0'
      }
    }
  },
  active: {
      background: '#0070c0',
      color: '#fff',
      '& div': {
        color: '#fff'
      },
      '& span': {
        color: '#fff'
      }
    },  
  }

export default withStyles(styles)(SideDrawer);