import React from 'react'
import { useNavigate } from 'react-router-dom'
import { submitAPI } from './api'
import BookingForm from './BookingForm'
import Footer from './Footer'
import Nav from './Nav'

const BookingPage = ({availableTimes, setAvailableTimes, handleSubmit}) => {
  const navigate = useNavigate()
  const submitForm = (formData) => {
    const result = submitAPI(formData)
    if (result === true) {
      navigate('/confirm')
    }
  }

  return (
    <>
      <Nav />
      <BookingForm handleSubmit={submitForm} availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />
      <Footer />
    </>
  )
}

export default BookingPage