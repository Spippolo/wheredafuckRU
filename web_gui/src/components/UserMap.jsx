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
        return (<div className="box">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Identifier</th>
                <th>Latitude</th>
                <th>Longitude</th>
                <th>Inserted at</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map(el =>
                <tr key={el.id}>
                  <td>{el.id}</td>
                  <td>{el.identifier}</td>
                  <td>{el.latitude}</td>
                  <td>{el.longitude}</td>
                  <td>{el.inserted_at}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>);
      }
      return (<div className="box">Loading...</div>);
    }
    return (<div className="box">No hash</div>);
  }
}

export default UserMap;
