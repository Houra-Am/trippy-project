import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

class HotelMaker extends React.Component {
    constructor() {
      super();
      this.state = {
        nimportequoi: [],
      };
    }
  
  
    componentDidMount() {
     
    }
  
    render() {
      return (
        <div>
          {this.props.price}
        </div>
          
      
      )}
  }
  
  export default HotelMaker;