import React, { useEffect } from 'react'
import '../App.scss';

import {
  Switch,
  Route
} from "react-router-dom";

import MainDataSection from './MainDataSection'
import Cart from './Cart'

import ProductInfo from "../containers/ProductInfo"
import NavBar from '../containers/NavBar'

import { connect } from 'react-redux'
import { fetchPeopleData } from '../actions'

function App({ fetchPeopleData }) {

  useEffect(() => {
    fetchPeopleData()
  }, [fetchPeopleData])

  return (
    <div id="app">
      <NavBar />

      <Switch>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/product/:productId">
          <ProductInfo />
        </Route>
        <Route exact path="/">
          <MainDataSection />
        </Route>
        <Route path="*">
          <MainDataSection />
        </Route>
      </Switch>
    </div>
  );
}

const mapDispatchToProps = {
  fetchPeopleData,
};

export default connect(null, mapDispatchToProps)(App)


