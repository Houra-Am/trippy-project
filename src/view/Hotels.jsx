import React from "react";
import HotelMap from "./../components/HotelMap";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

class Hotels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      center:{
        lat:0,
        lon:0
      }
    };
  }

  componentDidMount() {
    console.log("hotels");
    console.log("hotels", this.props.match.params.city);
    let url = `http://localhost:3002/api/hotels/city/${this.props.match.params.city}`;
    console.log(url);
    fetch(
      `http://localhost:3002/api/hotels/city/${this.props.match.params.city}`
    )
      .then((response) => response.json())
      .then((commodities) => {
        console.log("commodities", commodities);
        this.setState({
          cities: commodities.results,
          center:commodities.center,
        });
      })
      .catch((error) => console.error(error));
  }

  render() {
    return (
      <div>
        <h1>Hotels</h1>
         <HotelMap  center={this.state.center} hotel={this.state.cities}/>
      </div>
    );
  }
}

export default Hotels;
