import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "../view/Home";
import HotelMap from "./HotelMap";
import travel from "../image/travel.png";
import Hotels from "../view/Hotels";
import HotelPage from "../view/HotelPage";
import Error404 from "../view/Error404";

class NavBar extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <img
              src={travel}
              alt='logo'
              width='45'
              height='45'
              className='d-inline-block align-top mr-3'
            />
            <Link className='navbar-brand' to='/'>
              Trippy
            </Link>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNav'>
              <ul className='navbar-nav'>
                <li className='nav-item active'>
                  <Link className='nav-link' to='/Hotels'>
                    Hotels <span className='sr-only'>(current)</span>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/HotelPage'>
                    Hotel Page
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/hotels/:city' component={Hotels} />
            <Route path='/hotels' component={Hotels} />
            <Route path='/hotel/:id' component={HotelPage} />
            <Route path='/hotelPage' component={HotelPage} />
            <Route path='*' component={Error404} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default NavBar;
