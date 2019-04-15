import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const Header = (props) => {
  
  const { classes } = props;
  return(
<div className={classes.root}>
      <AppBar className={classes.header} position="static">
        <Toolbar>
          <IconButton 
            onClick={() => props.toggleDrawer(true)}
            className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
          <a href={window.location.origin} className={classes.logoContainer}>
            <img className={classes.logo} src={logo}/>HockeyRosters
          </a>
          </Typography>
          <Button activeClassName={classes.active} to='/' component={ NavLink } className={classes.btn} exact color="inherit">Home</Button>
          <Button activeClassName={classes.active} to='/options' component={ NavLink } className={classes.btn} color="inherit">Options</Button>
          <Button activeClassName={classes.active} to='/sample' component={ NavLink } className={classes.btn} color="inherit">Sample</Button>
          <Button activeClassName={classes.active} to='/faq' component={ NavLink } className={classes.btn} color="inherit">FAQ</Button>
        </Toolbar>
      </AppBar>
    </div>

  )
}

const styles = theme =>({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none'
  }
  },
  btn: {
    textTransform: 'initial',
    fontSize: '16px',
    marginLeft: '5px',
    [theme.breakpoints.down('xs')]: {
      display: 'none'
  }
  },
  header: {
    background: '#0070c0'
  },
  logoContainer: {
    /* maxWidth: 60,
    maxHeight: 60, */
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    padding: '5px 0',
    color: '#fff',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '22px'
  },
  logo: {
    minWidth: '100%',
    minHeight: '100%',
    marginRight: '5px',
    width: '100%'
  },
  active: {
    backgroundColor: 'rgba(0, 0, 0, 0.18)'
  }
});

export default withStyles(styles)(Header);