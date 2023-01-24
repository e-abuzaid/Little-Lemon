import React from 'react'
import { useNavigate } from 'react-router-dom'
import MainImage from './assets/restauranfood.jpg'

const Header = () => {
    const navigate = useNavigate()
  return (
    <header>
        <div className="header-left">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned <br />
                Mediterrannean restaurant, <br />
                focused on traditional <br />
                recipes served with a modern <br />
                twist.
            </p>
            <button aria-label="On Click" onClick={() => navigate('/booking')}>
                Reserve a Table
            </button>
        </div>
        <div className="header-right">
            <img src={MainImage}
                alt="header"
            />
        </div>
    </header>
  )
}

export default Header