import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../modules/counter'
import { Config } from '../Config';
import List from '../containers/List';

const Career = props => (
  <div className="container">

    <div class="jumbotron mt-2rem">
      <h1 class="display-4">Come along</h1>
      <p class="lead">
        We are shaping youth dreams to reach their career goals. Please come along with us in our core vision. We are loooking for candidate highly motivated for the company vision.
    </p>
      <hr class="my-4" />

      <p>Be the owner of ....</p>
      <List list={Config.career} />

    </div>
  </div>

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
)(Career)
