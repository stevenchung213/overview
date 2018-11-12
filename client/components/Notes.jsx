import React from 'react';

const Notes = ({property}) => {
  return (
    <React.Fragment>
      <div className="notes-container">
        <h2 id="notes">
          Notes
        </h2>
        <div className="notes-box">
          <ul id="notes-list">
            {property.notes.map(item => {
              return (
                <li className="notes-listings">
                  <div className="notes-singular">
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
