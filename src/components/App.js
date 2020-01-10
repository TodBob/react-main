import React, { useEffect } from 'react';
import '../App.scss';

import {
  Switch,
  Route
} from "react-router-dom";

import MainDataSection from './MainDataSection'
import Cart from './Cart'


import NavBar from '../containers/NavBar'

import { connect } from 'react-redux';
import { getData } from '../actions'

function App({getData}) {

  useEffect( () => {
    getData()
  },[] )

  return (
    <div id='app'>
      <NavBar />

      <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <MainDataSection />
          </Route>
        </Switch>
    </div>
  );
}

const mapDispatchToProps = {
  getData,
};

export default connect(null, mapDispatchToProps)(App)
 

