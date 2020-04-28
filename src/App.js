import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './App.scss';

import { Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux';
import MainDataSection from './pages/MainDataSection';
import Cart from './pages/Cart';

import ProductInfo from './components/ProductInfo';
import NavBar from './components/NavBar';

import { fetchPeopleData } from './actions';

const App = ({ fetchPeopleData: fetchData }) => {
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
};

App.propTypes = {
  fetchPeopleData: PropTypes.func,
};

const mapDispatchToProps = {
  fetchPeopleData,
};

export default connect(null, mapDispatchToProps)(App);
