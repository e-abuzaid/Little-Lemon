import React from 'react'
import Logo from './assets/Logo.svg'

const Footer = () => {
  return (
    <footer>
        <img
            src={Logo}
        />
        <section>
            <h2>Doormat Navigation</h2>
                <ul>
                    <li><a href="/" target="_blank">Home</a></li>
                    <li><a href="/about" target="_blank">About</a></li>
                    <li><a href="/menu" target="_blank">Menu</a></li>
                    <li><a href="/reservations" target="_blank">Reservations</a></li>
                    <li><a href="/order-online" target="_blank">Order Online</a></li>
                    <li><a href="/login" target="_blank">Login</a></li>
                </ul>
        </section>
        <section>
            <h2>Contact</h2>
                <ul>
                    <li><a>Address</a></li>
                    <li><a>Phone Number</a></li>
                    <li><a>Email</a></li>
                </ul>
        </section>
        <section>
            <h2>Social Media Links</h2>
                <ul>
                    <li><a>Facebook</a></li>
                    <li><a>Twitter</a></li>
                    <li><a>Instagram</a></li>
                </ul>
        </section>
    </footer>
  )
}

export default Footer