import React from 'react';
import { Grid, Paper, Table, TableHead, TableCell, TableRow, withStyles, TableBody } from '@material-ui/core';

 const CommandTable = (props) => {
   const { classes } = props;
  return (
    
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
              <TableCell colSpan={2} align='center' className={classes.block}>
                <img src={props.image} className={classes.image}/>
              </TableCell>
              <TableCell colSpan={2} align='center' className={classes.team}>{props.name}</TableCell>
              </TableRow>
            </TableHead>
            <TableHead>
              <TableRow>
              <TableCell align='center' colSpan={3} className={classes.block}>
                {props.year}
              </TableCell>
              </TableRow>
            </TableHead>
            <TableHead>
              <TableRow className={classes.blue}>
                <TableCell className={classes.block}>#</TableCell>
                <TableCell className={classes.block}>Last Name</TableCell>
                <TableCell className={classes.block}>First Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              
                {props.rows ? props.rows.map(row => (
                  <TableRow key={row.number}>
                  <TableCell className={classes.block}>{row.number}</TableCell>
                  <TableCell className={classes.block}>{row.lastname}</TableCell>
                  <TableCell className={classes.block}>{row.firstname}</TableCell>  
                  </TableRow>    
                )) : null}
             
            </TableBody>
            <TableHead>
              <TableRow className={classes.blue}>
                <TableCell className={classes.block}>Staff</TableCell>
                <TableCell className={classes.block}>Last Name</TableCell>
                <TableCell className={classes.block}>First Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.staff ? props.staff.map((st, index) => (
                <TableRow key={index}>
                <TableCell className={classes.block}>{st.position}</TableCell>
                <TableCell className={classes.block}>{st.lastname}</TableCell>
                <TableCell className={classes.block}>{st.firstname}</TableCell>  
                </TableRow>    
              )) : null}
            </TableBody>
          </Table>
        </Paper>
    
    )
  }

  const styles = theme =>({
    image: {
      width: '50px',
      [theme.breakpoints.down('xs')]: {
        width: '40px'
      },
    },
    block: {
      padding: '4px 4px 4px 10px'
      
    },
    team: {
      padding: '4px 4px 4px 10px',
      fontSize: '18px'
    },
    blue: {
      background: '#0070c0',
      '& th': {
        color: '#fff'
      }
    }
  });

export default withStyles(styles)(CommandTable);