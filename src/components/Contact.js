import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Config } from '../Config';


import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../modules/counter'
import { MapContainer } from './MapContainer';
import './Contact.css'
const Contacts = props => (
  <div className="container">
    <div class="jumbotron mt-2rem">
      <h1 class="display-4">Find us</h1>
      <p class="lead">Please reach out to us to discuss more on the your organisation requirements.</p>
      <hr class="my-4" />
      <p><i className="fa fa-location-arrow"></i> {Config.brandAddress.street}, {Config.brandAddress.city}, {Config.brandAddress.state}, {Config.brandAddress.country}, {Config.brandAddress.pincode}</p>
      <p><i className="fa fa-phone"></i>  {Config.brandAddress.phone}  </p>
      <p><i className="fa  fa-envelope"></i> {Config.brandAddress.emailId}  </p>
      <p><i className="fa  fa-info"></i> Operation Hour {Config.brandAddress.availableHour}  </p>
    </div>


    {/* <MapContainer /> */}
  </div >
)

const mapStateToProps = ({ counter }) => ({
  count: counter.count,
  isIncrementing: counter.isIncrementing,
  isDecrementing: counter.isDecrementing
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
      changePage: () => push('/about-us')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contacts)
