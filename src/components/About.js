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
import List from '../containers/List';

const About = props => (
  <div className="container">

  <div class="jumbotron mt-2rem">
    <h1 class="display-4">Bit about us</h1>
    <p class="lead">
      We are constantly commited to grow along with yours organisation success. We are customer focused group enabling automation and smoother operational changes.
    </p>
    <hr class="my-4" />
    <List list={Config.about} />
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
)(About)
