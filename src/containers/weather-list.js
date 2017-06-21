import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import { Table } from 'react-bootstrap';

class WeatherList extends Component {

  // measurement options: 'temp', 'pressure', 'humidity'
  getWeatherData(cityData, measurement) {
    return cityData.list.map((weatherData) => {
      if (measurement === 'temp') {
        // Convert kelvin to celsius
        return weatherData.main[measurement] - 273.15;
      }
      return weatherData.main[measurement];
    });
  }

  renderWeatherList() {
    return this.props.weather.map((cityData) => {
      return (
        <tr key={ cityData.city.id }>
          <td>{ cityData.city.name }</td>
          <td>
            <Chart
              data={ this.getWeatherData(cityData, 'temp') }
              color='red'
              unit='°C'
            />
          </td>
          <td>
            <Chart
              data={ this.getWeatherData(cityData, 'pressure') }
              color='blue'
              unit='hPa'        
            />
          </td>
          <td>
            <Chart
              data={ this.getWeatherData(cityData, 'humidity') }
              color='green'
              unit='%'        
            />
          </td>
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