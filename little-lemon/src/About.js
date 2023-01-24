import React from 'react'
import Restaurant from './assets/restaurant.jpg'

const About = () => {
  return (
    <section className="about">
        <div className="about-left">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi
            </p>
        </div>
        <div className="about-right">
            <img
                src={Restaurant}
                alt="restaurant"
            />
        </div>
    </section>
  )
}

export default About