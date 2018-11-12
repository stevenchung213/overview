import React from 'react';

const General = ({property}) => {
  return (
    <React.Fragment>
      <div className="general-container">
        <h2 id="general">
          General
        </h2>
        <div className="general-box">
          <ul id="general-list">
            {property.general.map(item => {
              return (
                <li className="general-listings">
                  <div className="general-singular">
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

export default General;
