import React from 'react';
import { connect } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress';

let Loading = ({ loading }) => (
    loading ?
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '100px'}}>
            <CircularProgress />
        </div> :
        null
);
const mapStateToProps = (state) => ({ loading: state.loading })
Loading = connect(mapStateToProps, null)(Loading)
export default Loading;