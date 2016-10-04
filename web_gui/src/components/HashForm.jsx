import React, { Component } from 'react';

class HashForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapHash: null,
    };
  }

  saveMapHash(e) {
    this.setState({ mapHash: e.target.value });
  }

  setMapHash() {
    this.props.setMapHash(this.state.mapHash);
  }

  render() {
    return (<div>
      <input onChange={this.saveMapHash.bind(this)} />
      <button onClick={this.setMapHash.bind(this)}>Save</button>
    </div>);
  }
}

export default HashForm;
