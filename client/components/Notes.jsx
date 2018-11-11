import React from 'react';

const Notes = ({property}) => {
  return (
    <React.Fragment>
      <div className="Notes-container">
        <h2 id="Notes">
          Notes
        </h2>
        <div className="Notes-box">
          <ul id="Notes-list">
            {property.notes.map(item => {
              return (
                <li className="Notes-listings">
                  <div className="Notes-singular">
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

export default Notes;