import React from 'react';
import $ from 'jquery';
import NavBar from './NavBar.jsx';
import Headline from './Headline.jsx';
import Icons from './Icons.jsx';
import Description from './Description.jsx';


const port = 8081;

export default class Overview extends React.Component {
  constructor() {
    super();

    this.state = {
      init: false,
      property: null
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let p = $('p')[0].scrollHeight;

    $(document).click(e => {
      e.stopPropagation();
      $('p').animate({
        'height': '165px'
      });
      $('#view-more').text('View more');
    });

    $('#view-more').click(e => {
      e.stopPropagation();
      $('p').animate({
        'height': p
      });
      $('#view-more').text('View less');
    });

  }

  componentDidMount() {
    let propertyID = Number(window.location.pathname.replace(/\//, ''));
    if (propertyID > 0) {
      $.get(`http://localhost:${port}/listings/` + propertyID, result => {
        console.log(result);
        this.setState({property: result[0], init: true});
      });
    } else {
      $.get(`http://localhost:${port}/listings`, result => {
        console.log('success ', result);
        this.setState({property: result[0], init: true});
      }, 'json');
    }
  }

  render() {
    return (
      <div>
        {this.state.init &&
        (<div id="main-container">
          <NavBar/>
          <Headline property={this.state.property}/>
          <Icons property={this.state.property}/>
          <Description property={this.state.property} handleClick={this.handleClick}/>
        </div>)
        }
      </div>
    );
  }
}
