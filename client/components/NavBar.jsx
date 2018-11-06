import React from 'react';

const NavBar = () => {
  return (
    <React.Fragment>
      <div id="nav-bar">
        <ul className="nav-bar-list">
          <li className="nav-bar-li" id="overview-li"><a id="overview-href" href="#overview">Overview</a></li>
          <li className="nav-bar-li"><a href="#amenities">Amenities</a></li>
          <li className="nav-bar-li"><a href="#reviews">Reviews</a></li>
          <li className="nav-bar-li"><a href="#map">Map</a></li>
          <li className="nav-bar-li"><a href="#availability">Availability</a></li>
        </ul>
      </div>
    </React.Fragment>
  )
};

export default NavBar;
