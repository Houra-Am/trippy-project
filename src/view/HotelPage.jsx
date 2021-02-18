import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

class HotelPage extends React.Component {
  constructor() {
    super();
    this.state = {
      nimportequoi: [],
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="all-pages">
        <h1>Hotel Page </h1>
      </div>
    );
  }
}

export default HotelPage;
