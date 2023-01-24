import React, {useState} from 'react'

const BookingForm = ({availableTimes, setAvailableTimes, handleSubmit}) => {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guests: 0,
        occasion: ''
    })
    const [errors, setErrors] = useState({
        date: false,
        time: false,
        guests: false,
        occasion: false
    })

    const submitForm = (e) => {
        e.preventDefault()
        if (!formData.date) {
            setErrors(prevErrors =>( {...prevErrors, date: true}))
        }
        if (!formData.time) {
            setErrors(prevErrors =>( {...prevErrors, time: true}))
        }
        if (!formData.guests) {
            setErrors(prevErrors =>( {...prevErrors, guests: true}))
        }
        if (!formData.occasion) {
            setErrors(prevErrors =>( {...prevErrors, occasion: true}))
        }
        if (formData.date && formData.time && formData.occasion && formData.guests) {
            handleSubmit(formData)
        }

    }

  return (
        <form onSubmit={(e) => submitForm(e)}>
            <h1>Make a Reservation</h1>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" onChange={(e) => setFormData({...formData, date: e.target.value})} />
            {errors.date && <p style={{color: 'red'}}>Please fill out this field</p>}
            <label htmlFor="res-time" >Choose time</label>
            <select required id="res-time " onChange={(e) => {setFormData({...formData, time: e.target.value}); }}>
                {availableTimes?.map((time) => (
                    <option key={time} value={time}>{time}</option>
                ))}
            </select>
            {errors.time && <p style={{color: 'red'}}>Please fill out this field</p>}
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={(e) => setFormData({...formData, guests: e.target.value})} />
            {errors.guests && <p style={{color: 'red'}}>Please fill out this field</p>}
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" onChange={(e) => setFormData({...formData, occasion: e.target.value})}>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>
            {errors.occasion && <p style={{color: 'red'}}>Please fill out this field</p>}
            <button aria-label="On Click" type="submit">Submit</button>
        </form>
  )
}

export default BookingForm