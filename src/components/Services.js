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
import List from '../containers/List';
import { Config } from '../Config';

const Services = props => (
  <div className="container">

  <div class="jumbotron mt-2rem">
    <h1 class="display-4">We offer</h1>
    <p class="lead">
      We are offering variety of software related program to  name few are Web Designing , SEO etc.
    </p>
    <hr class="my-4" />
    <List list={Config.services} />
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
)(Services)
