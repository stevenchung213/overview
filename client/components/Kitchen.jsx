import React from 'react';

const Kitchen = ({property}) => {
  return (
    <React.Fragment>
      <div className="kitchen-container">
        <h2 id="kitchen">
          Kitchen
        </h2>
        <div className="kitchen-box">
          <ul id="kitchen-list">
            {property.kitchen.map(item => {
              return (
                <li className="kitchen-listings">
                  <div className="kitchen-singular">
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

export default Kitchen;