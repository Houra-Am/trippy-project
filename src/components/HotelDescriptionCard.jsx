import React from "react";
import ReactDOM from "react-dom";

class HotelDescriptionCard extends React.Component {
  render() {
    return (
      <div className='cityCard mb-3' style={{ width: "30rem" }}>
        <img src='/img/hotels/75688_16.jpg' className='card-img-top' alt='' />
        <div className='card-body'>
          <p className='card-title'>{this.props.commodityDet}</p>
          <p className='card-title'>{this.props.address}</p>
        </div>
      </div>
    );
  }
}

export default HotelDescriptionCard;
