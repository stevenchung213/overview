import React from 'react';

const Entertainment = ({property}) => {
  return (
    <React.Fragment>
      <div className="entertainment-container">
        <h2 id="entertainment">
          Entertainment
        </h2>
        <div className="entertainment-box">
          <ul id="entertainment-list">
            {property.entertainment.map(item => {
              return (
                <li className="entertainment-listings">
                  <div className="entertainment-singular">
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

export default Entertainment;