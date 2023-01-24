import './App.css';
import {Routes, Route, BrowserRouter, useNavigate} from 'react-router-dom'
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import { useReducer, useEffect } from 'react';
import { fetchAPI, submitAPI } from './api';
import ConfirmedBooking from './ConfirmedBooking';



function App() {
  const today = new Date()
   const initializeTimes = (today) => {
    return {availableTimes: fetchAPI(today)}
  }

  useEffect(() => {

  }, [])

  
   const updateTimes = (state, action) => {
    console.log(submitAPI(action.date))
  }

  const [state, dispatch] = useReducer(updateTimes, initializeTimes(today))

  console.log(dispatch)
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/confirm" element={<ConfirmedBooking />} />
        <Route path="/booking" element={<BookingPage availableTimes={state.availableTimes} setAvailableTimes={dispatch} />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
