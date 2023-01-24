import React from 'react'
import Person from './assets/person.jpg'
import Review from './Review'

const Testimonials = () => {
  return (
    <section className="reviews">
        <h2>Testimonials</h2>
        <div className="reviews-container">
            <Review
                name="John Doe"
                review="Nice food and nice hospitality"
                rating="4"
                image={Person}
            />
            <Review
                name="Jane Austin"
                review="Lovely place, highly recommended!"
                rating="5"
                image={Person}
            />
            <Review
                name="Martin Odegaard"
                review="Nice food and nice hospitality"
                rating="3"
                image={Person}
            />
            <Review
                name="Sadio Mane"
                review="I went with my family and it was nice"
                rating="4"
                image={Person}
            />
        </div>
    </section>
  )
}

export default Testimonials