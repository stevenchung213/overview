import React from 'react';

const Amenities = ({property}) => {
  return (
    <React.Fragment>
      <div className="amenities-container">
        <h2 id="amenities">
          Amenities
        </h2>
        <div className="amenities-box">
          <ul id="amenities-list">
            {property.amenities.map(item => {
              return (
                <li className="amenities-listings">
                  <div className="amenities-singular">
                    {item}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Amenities;