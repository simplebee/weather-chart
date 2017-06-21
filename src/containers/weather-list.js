import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Table } from 'react-bootstrap';

class WeatherList extends Component {

  renderWeatherList() {
    return this.props.weather.map((cityData) => {
      return (
        <tr key={ cityData.city.id }>
          <td>{ cityData.city.name }</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      );
    });
  }

  render() {
    return (
      <Table hover>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          { this.renderWeatherList() }
        </tbody>
      </Table>
    );
  }
}

function mapStateToProps(state) {
  return {
    weather: state.weather
  };
}

export default connect(mapStateToProps)(WeatherList);