import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import CityCard from "../components/CityCard";
import getHomeData from "../utils/Api";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      cities: [],
      img: "http://localhost:3002",
    };
  }

  componentDidMount() {
    getHomeData().then((response) => {
      this.setState({
        cities: response.cities,
        image: response.source,
      });
      console.log("cities", this.state.cities);
      console.log("image", this.state.cities);
    });
  }

  render() {
    
    return (
      <div className='container-fluid d-flex flex-column justify-content-center all-pages'>
        <h1 className='text-center tabTitle'>Découvrir le monde</h1>
        <div className='row'>
          {this.state.cities.length > 0 &&
            this.state.cities.map((city) => {
              if(city.name === "Paris"){
                return (
                <div className='cityCard col-sm-12 col-md-6 justify-content-center'>
                <Link>
                  <CityCard
                    cities={city.name}
                    image={this.state.img + city.source}
                    alt={`${city.name}`}
                  />
                </Link>
              </div>
              )
              }else{
              return (
                <div className='cityCard col-sm-6 col-md-3 justify-content-center'>
                  <Link>
                    <CityCard
                      cities={city.name}
                      image={this.state.img + city.source}
                      alt={`${city.name}`}
                    />
                  </Link>
                </div>
              );}
            })}
        </div>
        {this.state.cities.length === 0 && (
          <h2 className='text-center'>Loading, please wait!</h2>
        )}
      </div>
    );
    
  }
}

export default Home;
