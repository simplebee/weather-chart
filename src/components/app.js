import React from 'react';
import SearchBar from '../containers/search-bar';
import WeatherList from '../containers/weather-list';

const App = () => {
  return (
    <div>
      <SearchBar />
      <WeatherList />
    </div>
  );
}

export default App;