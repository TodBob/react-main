import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Card from '../containers/Card';
import Loading from '../containers/Loading';

import { getPeopleData } from '../selectors/peopleData';

const MainDataSection = ({ peopleData }) => (peopleData.length > 0 ? (
  <div id="main">
    {peopleData.map((e) => <Card key={e.created} data={e} />)}
  </div>
) : (
  <Loading />
));

MainDataSection.propTypes = {
  peopleData: PropTypes.array,
};

const mapStateToProps = (state) => ({
  peopleData: getPeopleData(state),
});

export default connect(mapStateToProps, null)(MainDataSection);
