import React, { Component } from 'react';
import HashForm from '../components/HashForm.jsx';
import UserMap from '../components/UserMap.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = { mapHash: null };
  }

  setMapHash(hashValue) {
    this.setState({ mapHash: hashValue });
  }

  render() {
    return (<div>
      <HashForm setMapHash={this.setMapHash.bind(this)} />
      <UserMap mapHash={this.state.mapHash} />
    </div>);
  }
}

export default App;
