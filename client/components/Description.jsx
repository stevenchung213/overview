import React from 'react';

const Description = ({property, handleClick}) => {
  return (
    <React.Fragment>
      <div className="description-container">
        <h3 id='brief'>
          {property.brief}
        </h3>
        <div className="description-box">
          <p id="description">
            {property.description}
          </p>
          <a id="view-more" href="javascript:void(0)" onClick={() => {
            handleClick();
          }}>View more</a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Description;
