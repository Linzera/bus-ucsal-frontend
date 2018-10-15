import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

import { GOOGLE_API_KEY } from "../utilis/consts"

export class MapContainer extends React.Component {
  render() {
    return (
      <Map google={this.props.google} initialCenter={{
        lat: -12.946036,
        lng: -38.413762
      }} zoom={14}>

        <Marker onClick={this.onMarkerClick}
          name={'BusUcsal'} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: GOOGLE_API_KEY
})(MapContainer)

