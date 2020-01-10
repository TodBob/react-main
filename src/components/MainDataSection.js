import React from 'react';
import { connect } from 'react-redux'

import Card from '../containers/Card'
import Loading from '../containers/Loading'



let MainDataSection = ({ data }) => (
  data ?
    <div id='main'  >

      {data.map(e => {
        return <Card key={e.created} data={e} />
      })}

    </div> :
    <Loading />
);

const mapStateToProps = (state) => ({
  data: state.data,
})
MainDataSection = connect(mapStateToProps, null)(MainDataSection)
export default MainDataSection;