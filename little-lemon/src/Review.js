import React from 'react'

const Review = ({rating, image, name, review}) => {
    let stars = ''
    let userRating = Number(rating)
    for (let  i = 0; i<5; i++) {
        if (userRating === 0) {
            stars += '✰'
        } else {
            stars += '⭐'
            userRating--
        }
    }
  return (
    <div className="review">
        <h5>{name}</h5>
        <h6>{stars}</h6>
        <img
            src={image}
            alt="person"
        />
        <p>
            {review}
        </p>
    </div>
  )
}

export default Review