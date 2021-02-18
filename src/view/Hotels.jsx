import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import HotelCard from "../components/HotelCard";

class Hotels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      hotelDetails: [],
      img: "http://localhost:3002",
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
      .then((results) => {
        console.log("results", results);
        this.setState({
          hotelDetails: results.results,
        });
      })
      .catch((error) => console.error(error));
  }

  render() {
    return (
      <div className='container d-flex flex-column justify-content-center'>
        <h1 className='text-center tabTitle'>City details</h1>
        {this.state.hotelDetails.length > 0 &&
          this.state.hotelDetails.map((hotel) => {
            console.log(hotel);
            return (
              <Link to={`/hotel/${hotel._id}`}>
                <HotelCard
                  name={hotel.name}
                  image={hotel.pictures[0]}
                  //image={"http://via.placeholder.com/300x200"}
                  alt={`${hotel.name}`}
                  price={hotel.price}
                  stars={hotel.stars}
                />
              </Link>
            );
          })}
      </div>
    );
  }
}

export default Hotels;
