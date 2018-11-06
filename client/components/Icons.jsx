import React from 'react';

const Icons = ({property}) => {
  return (
    <React.Fragment>
      <section className="icon-bar">
        <div id="icons-container">
          <ul>
            <li id="type" className="icons">
              <span className="smaller-font">{property.type}</span>
              <span className="bold-me">{property.area + ' sq. ft.'}</span>
            </li>
            <li id="bedrooms" className="icons">
              <span className="smaller-font">Bedrooms</span>
              <span className="bold-me">{property.bedrooms}</span></li>
            <li id="sleeps" className="icons">
              <span className="smaller-font">Sleeps</span>
              <span className="bold-me">{property.sleeps}</span>
            </li>
            <li id="bathrooms" className="icons">
              <span className="smaller-font">Bathrooms</span>
              <span className="bold-me">{property.bathrooms}</span>
            </li>
            <li id="halfbaths" className="icons">
              <span className="smaller-font">Half Baths</span>
              <span className="bold-me">{property.halfBaths}</span>
            </li>
            <li id="minstay" className="icons">
              <span className="smaller-font">Min Stay</span>
              <span className="bold-me">{property.minStay + ' nights'}</span>
            </li>
          </ul>
        </div>
      </section>
    </React.Fragment>
  )
};

export default Icons;
