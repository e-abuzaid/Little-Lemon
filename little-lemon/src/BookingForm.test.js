import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './BookingForm';


test('Renders the BookingForm heading', () => {
  render(<App />);
  render(<BookingForm />);
  const headingElement = screen.getByText("Make a Reservation");
  expect(headingElement).toBeInTheDocument();
})

describe("booking form", () => {
  test("User is able to submit the form if the score if all the fields are valid", () => {
    const date = "3/7/2024";
    const time = "17:00";
    const guests = 5;
    const occasion = 'Birthday';
    const handleSubmit = jest.fn();
    render(<BookingForm onSubmit={handleSubmit} />);

    const dateInput = screen.getByLabelText(/Choose date/);
    fireEvent.change(dateInput, { target: { value: date } });

    const timeInput = screen.getByLabelText(/Choose time/);
    fireEvent.change(timeInput, { target: { value: time } });

    const guestsInput = screen.getByLabelText(/Number of guests/);
    fireEvent.change(guestsInput, { target: { value: guests } });

    const occasionInput = screen.getByLabelText(/Occasion/);
    fireEvent.change(occasionInput, { target: { value: occasion } });

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledWith({
      date,
      time,
      guests,
      occasion,
    });
  });

  test("User is able to submit the form if the score if not all the fields are valid", () => {
    const date = "3/7/2024";
    const time = "17:00";
    const guests = 5;
    const handleSubmit = jest.fn();
    render(<BookingForm onSubmit={handleSubmit} />);

    const dateInput = screen.getByLabelText(/Choose date/);
    fireEvent.change(dateInput, { target: { value: date } });

    const timeInput = screen.getByLabelText(/Choose time/);
    fireEvent.change(timeInput, { target: { value: time } });

    const guestsInput = screen.getByLabelText(/Number of guests/);
    fireEvent.change(guestsInput, { target: { value: guests } });

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledWith({
      date,
      time,
      guests,
      occasion: "",
    });
  });


})