import React from 'react'
import food1 from './assets/greek salad.jpg'
import food2 from './assets/lemon dessert.jpg'

const Main = () => {
  return (
    <main>
        <div className="main-heading">
            <h3>THIS WEEKS SPECIALS!</h3>
            <button aria-label="On Click">
                Order Online
            </button>
        </div>
        <div className="food-container">
            <article>
                <img
                    src={food1}
                    alt="course"
                />
                <div className="course-heading">
                    <h4>Greek Salad</h4>
                    <h4>$12.99</h4>
                </div>
                <p className="course-desc">
                    The famous greek salad of crispy <br />
                    lettuce. peppers, olives and our <br />
                    Chicago style feta cheese, <br />
                    garnished with crunchy garlic <br />
                    and rosemary croutons.
                </p>
                <h4>Order a delivery</h4>
            </article>
            <article>
                <img
                    src={food2}
                    alt="course"
                />
                <div className="course-heading">
                    <h4>Lemon Dessert</h4>
                    <h4>$5.00</h4>
                </div>
                <p className="course-desc">
                    This comes straight from  <br />
                    grandma’s recipe book, every last <br />
                    ngredient has been sourced and <br />
                    is as authentic as can be <br />
                    imagined.
                </p>
                <h4>Order a delivery</h4>
            </article>
            <article>
                <img
                    src={food1}
                    alt="course"
                />
                <div className="course-heading">
                    <h4>Greek Salad</h4>
                    <h4>$12.99</h4>
                </div>
                <p className="course-desc">
                    The famous greek salad of crispy <br />
                    lettuce. peppers, olives and our <br />
                    Chicago style feta cheese, <br />
                    garnished with crunchy garlic <br />
                    and rosemary croutons.
                </p>
                <h4>Order a delivery</h4>
            </article>
        </div>
    </main>
  )
}

export default Main