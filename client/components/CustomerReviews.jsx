import React from 'react';
import Review from './Review.jsx';

const CustomerReviews = ({reviews}) => {
  return (
    <div id="customer-reviews-container">
      <div id='sixty-reviews-title'>60 Reviews</div>
      <div id='stars-average-container'>
        <div> STARS GO HERE</div> <div id='average-description'><i>Represents the average rating here</i></div>
      </div>
      <div className='review-status-container'>
        <button className='review-left-button' type='button'></button>
        <div><b>1 - 6</b> of 60</div>
        <button className='review-right-button' type='button'></button>
      </div>

      <div id='main-reviews-container'>
        <Review review={reviews}/>
        <div>PUT THE MAP HERE</div>
        <div>PUT THE MAP HERE</div>
        <div>PUT THE MAP HERE</div>
      </div>
      <div className='review-status-container'>
        <button className='review-left-button' type='button'></button>
        <div><b>1 - 6</b> of 60</div>
        <button className='review-right-button' type='button'></button>
      </div>
    </div>
  );
};

export default CustomerReviews;
