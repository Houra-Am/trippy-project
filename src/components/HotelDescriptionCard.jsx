import React from "react";
import ImageGallery from "react-image-gallery";
const images = [];

class HotelDescriptionCard extends React.Component {
  render() {
    return (
      <div className='cityCard mb-3' style={{ width: "30rem" }}>
        <img src={this.props.image} className='card-img-top' alt='' />
        <div className='card-body'>
          <p className='card-title'>{` ${this.props.commodities}  `}</p>
          <p className='card-title'>{this.props.address}</p>
        </div>
      </div>
    );
  }
}

export default HotelDescriptionCard;
