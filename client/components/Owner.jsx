import React from 'react';

const Owner = ({property}) => {
  return (
    <React.Fragment>
      <section id="owner-container">
        <h3 id="owner-title">Owner</h3>
        <div className="owner-details-container">
          <div id="owner-img"></div>
          <div id="owner-info">
            <h4 id="owner-name">
              {property.owner}
            </h4>
            <div id="owner-since">
              Member Since 2017
            </div>
          </div>
          <button id="owner-contact">
            Ask Owner A Question
          </button>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Owner;
