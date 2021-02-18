import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

class Hotels extends React.Component {
  constructor() {
    super();
    this.state = {
      hotels: [],
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3002/api/hotels/city/${this.props.cities}`)
      .then((response) => response.json())
      .then((response) => {
        console.log("cities", this.props.cities);
        this.setState({
          cities: response.cities,
        });
      })
      .catch((error) => console.error(error));
  }

  render() {
    return (
      <div className="all-pages">
        <h1>Hotels</h1>
      </div>
    );
  }
}

export default Hotels;
