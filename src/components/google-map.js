import React from 'react';
import GoogleMapReact from 'google-map-react';
import '../styles/google-map.css'

function GoogleMap(props) {
  return (
    <div className="google-map">
      <GoogleMapReact
        center={{
          lat: props.coord.lat,
          lng: props.coord.lon
        }}
        zoom={10}
      />
    </div>
  );
}

export default GoogleMap;