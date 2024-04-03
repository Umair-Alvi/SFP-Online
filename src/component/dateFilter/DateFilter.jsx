import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateFilter = () => {
  const [filterType, setFilterType] = useState('year');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleFilterTypeChange = (event) => {
    setFilterType(event.target.value);
    // Reset selectedDate when changing filter type
    setSelectedDate(new Date());
  };

  return (
    <div>
      <select value={filterType} onChange={handleFilterTypeChange}>
        <option value="year">Year</option>
        <option value="month">Month</option>
        <option value="day">Day</option>
      </select>

      {filterType === 'year' && (
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="yyyy"
          showYearPicker
          showYearPickerDropdown
        />
      )}

      {filterType === 'month' && (
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="MM/yyyy"
          showMonthYearPicker
          showFullMonthYearPicker
        />
      )}

      {filterType === 'day' && (
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="dd/MM/yyyy"
          calendarClassName="custom-calendar"
        />
      )}
    </div>
  );
};

export default DateFilter;
