import fetch from 'isomorphic-fetch';
import React, { Component } from 'react';

class UserMap extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.mapHash) {
      if (this.state.timeout) {
        clearInterval(this.state.timeout);
        this.setState({ timeout: null });
      }
      this.callApi(nextProps.mapHash);
      const timeout = setInterval(this.callApi.bind(this, nextProps.mapHash), 5000);
      this.setState({ timeout });
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.timeout);
    this.setState({ timeout: null });
  }

  callApi(mapHash) {
    if (mapHash) {
      fetch(`http://localhost:4000/api/positions?identifier=${mapHash}`)
        .then(response => response.json())
        .then(json =>
          this.setState(json)
        );
    } else {
      console.log('No map hash');
    }
  }

  render() {
    if (this.props.mapHash) {
      if (this.state.data.length > 0) {
        return (<ul>{this.state.data.map(el => <li key={el.id}>{el.id}</li>)}</ul>);
      }
      return (<div>Loading...</div>);
    }
    return (<div>No hash</div>);
  }
}

export default UserMap;
