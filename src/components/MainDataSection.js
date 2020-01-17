import React from 'react';
import { connect } from 'react-redux'

import Card from '../containers/Card'
import Loading from '../containers/Loading'

import { getPeopleData } from '../selectors/peopleData'


let MainDataSection = ({ peopleData }) => (
  peopleData.length > 0 ?
    <div id='main'  >
      {peopleData.map(e => {
        return <Card key={e.created} data={e} />
      })}
    </div> :
    <Loading />
)

const mapStateToProps = (state) => ({
  peopleData: getPeopleData(state),
})
MainDataSection = connect(mapStateToProps, null)(MainDataSection)
export default MainDataSection;