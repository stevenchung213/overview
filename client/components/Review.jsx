import React from 'react';

const Review = ({review}) => {

  return (
    <div id="review-container">
      <div>
        <div>
          <h4>
            {review.title}
          </h4>
          <div id='rating-stayed-container'>
            <span><span id='rating'>{review.rating}/5</span></span>
            <div>
            </div>
            <span><span id='stayed'>Stayed</span> <span>{review.date}</span></span>
          </div>
          <div>
            <div>
              <span id='reviewer-name'>{review.name}</span><span id='reviewer-location'>{review.location}{' USA'}</span>
            </div>
          </div>
          <div>
            <p>
              {review.review}
            </p>
            <p>
              {review.review}
            </p>
            <p>
              {review.review}
            </p>
          </div>
          <div>
            <div>
              <span>Submitted</span> <span>{review.postedDate}</span>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
