// src/App.js
import React, { useState } from "react";
import Calendar from "./Calendar";

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="App">
      <h1>Date Picker Component</h1>
      <Calendar selectedDate={selectedDate} onDateChange={handleDateChange} />
      {selectedDate && (
        <p style={{ color: "#fff" }}>
          Selected Date: {selectedDate.toLocaleDateString()}
        </p>
      )}
    </div>
  );
};

export default App;
