import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import StarBasedRating from "star-based-rating";

class HotelCard extends React.Component {
  render() {
    return (
      <div>
        <h1>HotelCard</h1>
        <div
          className='cityCard mb-3'
          style={{ width: "18rem" }}
          onClick={this.props.click}>
          <img
            src={this.props.image}
            className='card-img-top'
            alt=''
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "http://via.placeholder.com/300x200";
            }}
          />
          <div className='card-body'>
            <h3 className='card-title'>{this.props.name}</h3>
            <p className='card-title'>€{this.props.price}</p>
            <StarBasedRating totalStars={this.props.stars} />
          </div>
        </div>
      </div>
    );
  }
}

export default HotelCard;
