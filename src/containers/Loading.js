import React from 'react'
import { connect } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress'

import { getLoading } from '../selectors/loading'

let Loading = ({ loading }) => {
  return loading ? (
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
  ) : null
}
const mapStateToProps = (state) => ({ loading: getLoading(state) })
Loading = connect(mapStateToProps, null)(Loading)
export default Loading
