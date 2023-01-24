import React from 'react'
import Logo from './assets/Logo.svg'

const Nav = () => {
  return (
    <nav>
        <a role="button" href="/">
            <img
                src={Logo}
                alt="logo"
            />
        </a>
        <ul className="main-navigation">
            <li><a href="/" target="_blank">Home</a></li>
            <li><a href="/about" target="_blank">About</a></li>
            <li><a href="/menu" target="_blank">Menu</a></li>
            <li><a href="/reservations" target="_blank">Reservations</a></li>
            <li><a href="/order-online" target="_blank">Order Online</a></li>
            <li><a href="/login" target="_blank">Login</a></li>
        </ul>
    </nav>
  )
}

export default Nav