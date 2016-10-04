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
    return (<div className="box">
      <label className="label">Map ID</label>
      <p className="control has-addons">
        <input className="input" onChange={this.saveMapHash.bind(this)} />
        <button className="button is-primary" onClick={this.setMapHash.bind(this)}>Search</button>
      </p>
    </div>);
  }
}

export default HashForm;
