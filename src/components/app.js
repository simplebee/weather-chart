import React from 'react';
import SearchBar from '../containers/search-bar';
import WeatherList from '../containers/weather-list';
import { Grid } from 'react-bootstrap';

const App = () => {
  return (
    <Grid>
      <SearchBar />
      <WeatherList />
    </Grid>
  );
}

export default App;