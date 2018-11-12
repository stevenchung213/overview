import React from 'react';
import $ from 'jquery';
import NavBar from './NavBar.jsx';
import Headline from './Headline.jsx';
import Icons from './Icons.jsx';
import Description from './Description.jsx';
import Owner from './Owner.jsx';
import Amenities from './Amenities.jsx';
import General from './General.jsx';
import Kitchen from './Kitchen.jsx';
import Entertainment from './Entertainment.jsx';
import Notes from './Notes.jsx';
import CustomerReviews from './CustomerReviews.jsx';

//
// const example = {
//   title: 'Magical . . . Off Central Park West',
//   rating: '5',
//   stayedDate: 'Sep 2018',
//   name: 'Catherine A.',
//   location: 'Seattle, WA',
//   review: 'A quiet, mid-Central Park location, Subway Stops, Groceries, Spirits, Restaurants,' +
//     ' Museums and a \'killer\' Bakery are just steps from this simply stunning home. Hallmarks' +
//     ' of our Home Away from Home . . . a beautiful decor, exceptional household amenities, comfy' +
//     ' beds and the most accommodating, organized Hosts we have ever encountered \n\n We had a' +
//     ' terrific vacation and aside from the fun in \'visiting the center of the universe\', our' +
//     ' accommodations were wonderful.',
//   postedDate: 'Oct 15, 2018',
// };

export default class Overview extends React.Component {
  constructor() {
    super();

    this.state = {
      init: false,
      property: null,
      // reviews: example,
      expanded: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (!this.state.expanded) {
      let p = $('#description')[0].scrollHeight;
      console.log(p)
      $('#description').animate({
        'height': p
      });
      $('#view-more').text('View less');
      this.setState({expanded: true});
    } else {
      $('#description').animate({
        'height': '162px'
      });
      $('#view-more').text('View more');
      this.setState({expanded: false});
    }
  }

  componentDidMount() {
    let propertyID = Number(window.location.pathname.replace(/\//, ''));
    if (propertyID > 0) {
      // $.get(`http://localhost:${port}/listings/` + propertyID, result => {
      $.get('http://su-casa-overview.us-west-1.elasticbeanstalk.com/listings/' + propertyID, result => {
        console.log(result);
        this.setState({property: result[0], init: true});
      });
    } else {
      $.get('http://su-casa-overview.us-west-1.elasticbeanstalk.com/listings', result => {
        // $.get(`http://localhost:${port}/listings`, result => {
        console.log('success ', result);
        this.setState({property: result[0], init: true});
      }, 'json');
    }
  }

  render() {
    return (
      <div>
        {this.state.init &&
        (
          <div id="main-container">
            <NavBar/>
            <Headline property={this.state.property}/>
            <Icons property={this.state.property}/>
            <Description property={this.state.property} handleClick={this.handleClick}/>
            <Owner property={this.state.property}/>
            <Amenities property={this.state.property}/>
            <General property={this.state.property}/>
            <Kitchen property={this.state.property}/>
            <Entertainment property={this.state.property}/>
            {/*<Notes property={this.state.property}/>*/}
          </div>
        )
        }
      </div>
    );
  }
}
