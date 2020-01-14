import React from 'react';
import { connect } from 'react-redux'

import Card from '../containers/Card'
import Loading from '../containers/Loading'

import {getDataArray} from '../selectors/peopleData'



let MainDataSection = ({ peopleData }) => (
  peopleData ?
    <div id='main'  >
       {peopleData.map(e => {
        return <Card key={e.created} data={e} />
      })} 
    </div> :
    <Loading />
);

const mapStateToProps = (state) => ({
  peopleData: getDataArray(state),
})
MainDataSection = connect(mapStateToProps, null)(MainDataSection)
export default MainDataSection;