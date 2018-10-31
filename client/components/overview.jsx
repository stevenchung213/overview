import React from 'react';
import $ from 'jquery';



export default class Overview extends React.Component {
  constructor() {
    super();

    this.state = {
      init: false,
      properties: null
    };

  }

  componentDidMount() {
    $.get('/listings', result => {
      console.log('success ', result)
      this.setState({properties: result, init: true})
    }, 'json');

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

            <div>
              <span id="minimap"></span>

              <h2 id="headline">{this.state.properties[0].headline}</h2>
            </div>
            <section className="icon-bar">
              <div id="icons">
                <ul>
                  <li id="type">
                    <span>{this.state.properties[0].type}</span>
                    <span>{this.state.properties[0].area}</span>
                  </li>
                  <li id="bedrooms">
                    <span>Bedrooms</span>
                    <span>{this.state.properties[0].bedrooms}</span></li>
                  <li id="sleeps">
                    <span>Sleeps</span>
                    <span>{this.state.properties[0].sleeps}</span>
                  </li>
                  <li id="bathrooms">
                    <span>Bathrooms</span>
                    <span>{this.state.properties[0].bathrooms}</span>
                  </li>
                  <li id="halfbaths">
                    <span>Half Baths</span>
                    <span>{this.state.properties[0].halfBaths}</span>
                  </li>
                  <li id="minstay">
                    <span>Min Stay</span>
                    <span>{this.state.properties[0].minStay}</span>
                  </li>
                </ul>
              </div>
            </section>

          </div>
        </div>)
        }
      </div>

    );
  }
}
