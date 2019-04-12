import React, { Component } from 'react'
import { Grid, Typography, withStyles, ListItem, List, Button, TextField } from '@material-ui/core';
import background from '../../assets/images/background.png';
import UploadBtn from '../../components/UI/UploadBtn/UploadBtn';
import SaveBtn from '../../components/UI/SaveBtn/SaveBtn';


class HomeContainer extends Component {

  state = {
    selectedFile: null
  }

  fileSelectHandler = e => {
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
        <Grid item xs={12}>
          <Typography className={classes.title} variant='h4'>
            Professional USA Hockey Scoresheet Labels at Low Prices
          </Typography>
        </Grid>
        <Grid container className={classes.contentContainer}>
        <Grid item xs={12} md={4}>
          <List className={classes.list}>
            <ListItem>
              Clients can chose to have a professional .pdf file sent to them which will print easily on all 2x4 shipping lables or have us print and ship them to your organization
            </ListItem>
            <ListItem>
              Emailed .pdf files are $20 per team with an unlimited number of changes during the year
            </ListItem>
            <ListItem>
              150 printed lables are $35 per team with discounts available for printing entire programs rosters
            </ListItem>
            <ListItem>
              24 hour turnaround for all orders.
            </ListItem>
            <ListItem >
              <a className={classes.email} target='_blank' href='http://info@hockeyrosters.com'>
                info@hockeyrosters.com
              </a>
            </ListItem>
            <ListItem>
              <Typography className={classes.phone}>Call Us: 508-631-7451 </Typography>
            </ListItem>
          
            {this.state.selectedFile ?   
              <ListItem>
                <Grid container direction='column'>
                  <Typography className={classes.fileType}>Name: {this.state.selectedFile.name}</Typography>  
                  <Typography className={classes.fileType}>Size: {this.formatBytes(this.state.selectedFile.size)}</Typography>
                </Grid>
              </ListItem>: null}
            <ListItem>
              {this.state.selectedFile 
                ? <SaveBtn />
                : <UploadBtn
                  fileSelect={this.fileSelectHandler}/>}
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={8} className={classes.img}>
        </Grid>
        </Grid>
        </React.Fragment>
    
    )
  }
}



const styles = theme => ({
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '22px'
    }
  },
  contentContainer: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse'
  }
  },
  list: {
    lineHeight: '22px'
  },
  img: {
   background: `url(${background}) no-repeat center center`,
   backgroundSize: 'cover',
   [theme.breakpoints.down('sm')]: {
     minHeight: '500px'
   },
   [theme.breakpoints.down('xs')]: {
    minHeight: '300px'
  }
  },
  email: {
    color: '#0070c0',
    fontSize: '24px',
    '&:hover': {
      color: '#0288d1'
    }
  },
  phone: {
    fontSize: '24px',
    fontWeight: 'bold'
  },
  fileType: {
    color: '#9b9b9b'
  }
});


export default withStyles(styles)(HomeContainer);