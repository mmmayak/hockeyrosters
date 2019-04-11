import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../hoc/Layout/Layout';
import HomeContainer from '../containers/HomeContainer/HomeContainer';
import OptionsContainer from '../containers/OptionsContainer/OptionsContainer';
import Faq from '../containers/Faq/Faq';
import SampleContainer from '../containers/SampleContainer/SampleContainer';

class Routes extends Component {
  render(){
    return (
      <Layout>
        <Switch>
          <Route path='/faq' exact component={Faq}/>
          <Route path='/sample' exact component={SampleContainer} />
          <Route path='/options' exact component={OptionsContainer}/>
          <Route path='/' exact component={HomeContainer}/>
        </Switch>
      </Layout>
    )
  }
}
export default Routes;