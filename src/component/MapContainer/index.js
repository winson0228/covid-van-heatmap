// Stateless
import React from 'react';
import { Map, GoogleApiWrapper, Marker, HeatMap } from 'google-maps-react';
import { gradient, positions } from './../../constants'
const MAPS_API_KEY = process.env.REACT_APP_MAPS_API_KEY;

const mapStyles = {
    width: '60%',
    height: '100%'
  };

class MapContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          center: { lat: 47.444, lng: -122.176},
          isMarked: false,
          selectedPoint: {}
        };
    }

    onMapClick = (mapProps, map, e) => {
      this.setState({
        selectedPoint: e.latLng.toJSON(),
        isMarked: true
      });
    }

    render() {
      return (
        <Map
        google={this.props.google}
        zoom={this.props.zoom}
        style={mapStyles}
        initialCenter={{ lat: 37.775, lng: -122.434 }}
        onClick={this.onMapClick}
        >{this.state.isMarked && <Marker position={this.state.selectedPoint} />}
          <HeatMap
            gradient={gradient}
            positions={positions}
            opacity={1}
            radius={20}
          />
        </Map>
      );
    }
  }


export default GoogleApiWrapper({
  apiKey: MAPS_API_KEY,
  libraries: ["visualization"]
})(MapContainer);