import React from "react";
import { Map, TileLayer, Marker, Circle, Popup } from "react-leaflet"
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import icone from "./icon.png"
import L from "leaflet"
import HotelMaker from "./HotelMarker";

// let imageIcon = L.icon({
//   iconUrl: icone,
//   iconSize: [38, 45], // size of the icon
//   shadowSize: [50, 64], // size of the shadow
//   iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
//   shadowAnchor: [4, 62],  // the same for the shadow
//   popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
// });



class HotelMap extends React.Component {
  constructor() {
    super();
    this.state = {
      nimportequoi: [],
    };
  }

  componentDidMount() { }

  render() {
    console.log("map",this.props.prix)
    console.log("center",this.props.center)
    return (
      <div id="mapid">
        
        <Map
          style={{ width: 800, height: 400 }}
          center={[this.props.center.lat, this.props.center.lon]} zoom={13} scrollWheelZoom={false}>

          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"


          />
          <Circle center={[this.props.center.lat, this.props.center.lon]} fillColor="green" radius={6000} />
          {this.props.hotel.map((item, index) => {
            return (<Marker  position={[item.location.lat, item.location.lon]}           >
              <Popup  > 
prix : {item.price}                  </Popup>
            </Marker>)
          })}

        </Map>
      </div>
    );
  }
}

export default HotelMap;
