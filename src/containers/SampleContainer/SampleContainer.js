import React, { Component } from 'react'
import bolt from '../../assets/images/bolt.png';
import CommandTable from '../../components/UI/CommandTable/CommandTable';
import { Grid } from '@material-ui/core';

class SampleContainer extends Component {

  render() {
    const rows = [
      {number: 30,  lastname: 'Smith', firstname: 'Brody'},
      {number: 8,   lastname: 'Jones', firstname: 'Cam'},
      {number: 16,  lastname: 'Bastia', firstname: 'Matt'},
      {number: 32,  lastname: 'Williams', firstname: 'Eli'},
      {number: 58,  lastname: 'Adams', firstname: 'Wilson'},
      {number: 93,  lastname: 'George', firstname: 'Logan'},
      {number: 72,  lastname: 'Murphy', firstname: 'Charlie'},
      {number: 81,  lastname: 'Sullivan', firstname: 'Cole'},
      {number: 87,  lastname: 'Ng', firstname: 'David'},
      {number: 88,  lastname: 'Allen', firstname: 'Brendon'},
      {number: 92,  lastname: 'Bellotti', firstname: 'Colin'},
      {number: 94,  lastname: 'Dyson', firstname: 'Robert'},
      {number: 95,  lastname: 'Brady', firstname: 'Matt'}
    ];
    const staff = [
      {position: 'HS', lastname: 'Burns', firstname: 'Ed'},
      {position: 'HS', lastname: 'Burns', firstname: 'Ed'},
      {position: 'HS', lastname: 'Burns', firstname: 'Ed'}

    ]
    return (
      <Grid container spacing={24}>
        <Grid item xs={12} md={3}>
        <CommandTable 
          image={bolt}
          name={'Junior Bolts'}
          year={'2013 Elite'}
          rows={rows}
          staff={staff}
          />
        </Grid>
        <Grid item xs={12} md={3}>
        <CommandTable 
          image={bolt}
          name={'Junior Bolts'}
          year={'2013 Elite'}
          rows={rows}
          staff={staff}
          />
        </Grid>
        <Grid item xs={12} md={3}>
        <CommandTable 
          image={bolt}
          name={'Junior Bolts'}
          year={'2013 Elite'}
          rows={rows}
          staff={staff}
          />
        </Grid>
        <Grid item xs={12} md={3}>
        <CommandTable 
          image={bolt}
          name={'Junior Bolts'}
          year={'2013 Elite'}
          rows={rows}
          staff={staff}
          />
        </Grid>
        <Grid item xs={12} md={3}>
        <CommandTable 
          image={bolt}
          name={'Junior Bolts'}
          year={'2013 Elite'}
          rows={rows}
          staff={staff}
          />
        </Grid>
        <Grid item xs={12} md={3}>
        <CommandTable 
          image={bolt}
          name={'Junior Bolts'}
          year={'2013 Elite'}
          rows={rows}
          staff={staff}
          />
        </Grid>
        <Grid item xs={12} md={3}>
        <CommandTable 
          image={bolt}
          name={'Junior Bolts'}
          year={'2013 Elite'}
          rows={rows}
          staff={staff}
          />
        </Grid>
        <Grid item xs={12} md={3}>
        <CommandTable 
          image={bolt}
          name={'Junior Bolts'}
          year={'2013 Elite'}
          rows={rows}
          staff={staff}
          />
        </Grid>
      </Grid>  
    )
  }
}

export default SampleContainer;
