import React from "react";
import PropTypes from "prop-types";
import starIcon from "assets/images/icon-star.svg";
import starHalfIcon from "assets/images/icon-star-half.svg";
import starOutlineIcon from "assets/images/icon-star-outline.svg";

const StarRating = ({ rating }) => {
  const stars = Math.round(rating * 2) / 2;
  const fullStars = Math.floor(stars);
  const hasHalfStar = stars % 1 !== 0;
  const totalIcons = 5;

  return (
    <div className="flex gap-1">
      {Array.from({ length: totalIcons }, (_, i) => {
        if (i < fullStars) {
          return <img key={i} src={starIcon} alt="star" className="w-3 h-3" />;
        } else if (i === fullStars && hasHalfStar) {
          return (
            <img
              key={i}
              src={starHalfIcon}
              alt="half-star"
              className="w-3 h-3"
            />
          );
        } else {
          return (
            <img
              key={i}
              src={starOutlineIcon}
              alt="outline-star"
              className="w-3 h-3"
            />
          );
        }
      })}
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default StarRating;
