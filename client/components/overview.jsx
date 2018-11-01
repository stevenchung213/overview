import React from 'react';
import $ from 'jquery';


export default class Overview extends React.Component {
  constructor() {
    super();

    this.state = {
      init: false,
      property: null
    };

  }

  componentDidMount() {
    let propertyID = Number(window.location.pathname.replace(/\//, ''));
    if (propertyID > 0) {
      $.get('/listings/' + propertyID, result => {
        console.log(result)
        this.setState({property: result[0], init: true})
      })
    } else {
      $.get('/listings', result => {
        console.log('success ', result)
        this.setState({property: result[0], init: true})
      }, 'json');
    }
  }

  render() {
    return (
      <div>
        {this.state.init &&
        (<div id="main-container">
          <div id="nav-bar">
            <ul className="nav-bar-list">
              <li className="active"><a href="#overview">Overview</a></li>
              <li className=""><a href="#amenities">Amenities</a></li>
              <li className=""><a href="#reviews">Reviews</a></li>
              <li className=""><a href="#map">Map</a></li>
              <li className=""><a href="#availability">Availability</a></li>
            </ul>
            <div id="minimap-container">
              <div id="minimap"></div>
              <h2 id="headline">
                {this.state.property.headline}
              </h2>
            </div>
            <section className="icon-bar">
              <div id="icons-container">
                <ul>
                  <li id="type" className="icons">
                    <span>{this.state.property.type}</span>
                    <span>{this.state.property.area}</span>
                  </li>
                  <li id="bedrooms" className="icons">
                    <span>Bedrooms</span>
                    <span>{this.state.property.bedrooms}</span></li>
                  <li id="sleeps" className="icons">
                    <span>Sleeps</span>
                    <span>{this.state.property.sleeps}</span>
                  </li>
                  <li id="bathrooms" className="icons">
                    <span>Bathrooms</span>
                    <span>{this.state.property.bathrooms}</span>
                  </li>
                  <li id="halfbaths" className="icons">
                    <span>Half Baths</span>
                    <span>{this.state.property.halfBaths}</span>
                  </li>
                  <li id="minstay" className="icons">
                    <span>Min Stay</span>
                    <span>{this.state.property.minStay}</span>
                  </li>
                </ul>
              </div>
              <div className="description-container">
                <h3 id='brief'>
                  {this.state.property.brief}
                </h3>
                <div className="description-box">
                  <p id="description">
                    {this.state.property.description}
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>)
        }
      </div>

    );
  }
}
