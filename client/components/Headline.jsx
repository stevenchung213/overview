import React from 'react';

const Headline = ({property}) => {
  return (
    <React.Fragment>
      <div id="minimap-container">
        <div id="minimap"></div>
        <h2 id="headline">
          {property.headline}
        </h2>
        <div id='map-pin'>
          <div id='location'>{property.location}</div>
        </div>
      </div>
    </React.Fragment>
  )
};

export default Headline;
