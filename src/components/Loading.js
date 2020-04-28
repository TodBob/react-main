import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

import { getLoading } from '../selectors/loading';

const Loading = ({ loading }) => (loading ? (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '100px',
    }}
  >
    <CircularProgress />
  </div>
) : null);

Loading.propTypes = {
  loading: PropTypes.object,
};

const mapStateToProps = (state) => ({ loading: getLoading(state) });

export default connect(mapStateToProps, null)(Loading);
