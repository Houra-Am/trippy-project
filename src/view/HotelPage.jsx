import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import HotelCard from "../components/HotelCard";
import HotelDescriptionCard from "../components/HotelDescriptionCard";

class HotelPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      id: props.match.params.id,
    };
  }

  componentDidMount() {
    console.log("hotel");
    console.log("hotel", this.state.id);
    //let url = `http://localhost:3002/api/hotels/city/${this.state.id}`;
    //console.log(url);
    fetch(`http://localhost:3002/api/hotels/${this.state.id}`)
      .then((response) => response.json())
      .then((results) => {
        console.log("hoteldetail", results);
        this.setState({
          hotelDescription: results.result,
        });
      })
      .catch((error) => console.error(error));
  }

  render() {
    return (
      <div>
        <h1 className='text-center tabTitle'>Hotel description</h1>
        <div>
          {!this.state.hotelDescription ? (
            <h2 className='text-center'>Loading, please wait!</h2>
          ) : (
            <div>
              <HotelDescriptionCard
                image={this.state.hotelDescription.pictures}
                commodities={this.state.hotelDescription.commodities}
                address={this.state.hotelDescription.address}
              />

              <p></p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default HotelPage;
