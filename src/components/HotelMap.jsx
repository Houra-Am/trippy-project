import React from "react";
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

class HotelMap extends React.Component {
  constructor() {
    super();
    this.state = {
      nimportequoi: [],
    };
  }

  componentDidMount() { }

  render() {
    console.log(this.props.center)
    return (
      <div id="mapid">
        <h1>HotelMap</h1>
        <Map
          style={{ width: 400, height: 400 }}
          center={[this.props.center.lat, this.props.center.lon]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />


        </Map>
      </div>
    );
  }
}

export default HotelMap;
