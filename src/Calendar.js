// src/Calendar.js
import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css"; // Updated path for styles
import "./Calendar.css"; // Import custom styles

const Calendar = ({ selectedDate, onDateChange }) => {
  return (
    <div className="calendar-container">
      <DayPicker
        mode="single"
        selected={selectedDate}
        onDayClick={onDateChange}
        className="calendar"
      />
    </div>
  );
};

export default Calendar;
