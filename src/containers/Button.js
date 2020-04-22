import React from 'react'
import { connect } from 'react-redux'
import { getData } from '../actions'

let Button = ({ getData }) => (
  <button onClick={getData}>Press to see news</button>
)
const mapDispatchToProps = {
  getData,
}
Button = connect(null, mapDispatchToProps)(Button)
export default Button
