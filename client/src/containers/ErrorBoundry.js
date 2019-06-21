import React, { Component } from 'react';

import Error from '../components/Error';

export default class ErrorBoundry extends Component {

  state = {
    error: false
  }

  componentDidCatch() {
    this.setState({ error: true })
  }

  render() {

    const { error } = this.state;

    return error ? <Error /> : this.props.children;
  }
}
