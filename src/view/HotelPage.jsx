import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import HotelDescriptionCard from "../components/HotelDescriptionCard";
import ImageGallery from "react-image-gallery";
import HotelMap from "../components/HotelMap"

class HotelPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      hotel: "",
      hotelDescription: [],
      commodities: [],
      coords: {
        lat: 48,
        lon: 0,
      },
      id: props.match.params.id,
      image: [
        {
          original: "https://picsum.photos/id/1018/1000/600/",
          thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
      ],
    };
  }

  componentDidMount() {
    console.log("hotel");
    console.log("hotel", this.state.id);
    fetch(`http://localhost:3002/api/hotels/${this.state.id}`)
      .then((response) => response.json())
      .then((results) => {
        console.log("hoteldetail", results);
        console.log("commodities", results.result.commodities);
        return this.setState({
          commodities: results.result.commodities,
          hotelDescription: results.result,
          coords: results.result.location,
          image: results.result.pictures.map((image) => {
            return {
              original: image,
              thumbnail: image,
            };
          }),
        });
      })
      .catch((error) => console.error(error));
  }

  render() {
    console.log("commodity list", this.state.commodities);
    return (
      <div className='container'>
        <h1 className='text-center tabTitle'>Hotel description</h1>
        <div className='row'>
          {!this.state.hotelDescription ? (
            <h2 className='text-center'>Loading, please wait!</h2>
          ) : (
            <div className='row'>
              <HotelDescriptionCard
                title={this.state.hotelDescription.name}
                commodityDet={this.state.commodities}
                price={this.state.hotelDescription.price}
                starts={this.state.hotelDescription.stars}
                lat={this.state.coords.lat}
                lon={this.state.coords.lon}
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
