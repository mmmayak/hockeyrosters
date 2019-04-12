import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { withRouter } from 'react-router';
import SideDrawer from '../../components/SideDrawer/SideDrawer';

class Layout extends Component {

  state = {
    openDrawer: false
  }

  toggleDrawer = (open) => {
    this.setState({
      openDrawer: open
    })
  }
 
  render(){
    return (
      <React.Fragment>
        <SideDrawer 
          toggleDrawer={this.toggleDrawer}
          openDrawer={this.state.openDrawer}/>
        <Header 
          toggleDrawer={this.toggleDrawer}/>
          <div style={{maxWidth: '1140px', margin: '0 auto', padding: 20}}>
            {this.props.children}
          </div> 
        <Footer />
      </React.Fragment>
    )
  }
}

export default withRouter(Layout);