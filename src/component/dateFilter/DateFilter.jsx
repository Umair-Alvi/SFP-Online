import React, { useState } from 'react';
import Dropdown from '../dropdown/Dropdown';
import Button from '../button/Button';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const InsightDate = () => {
  const [filterType, setFilterType] = useState('Year'); // Default filter type is "Year"
  const [selectedMonth, setSelectedMonth] = useState(''); // State for selected month
  const [selectedYear, setSelectedYear] = useState(''); // State for selected year

  const handleFilterTypeChange = (selectedFilterType) => {
    setFilterType(selectedFilterType);
  };

  const handleYearChange = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const handleMonthChange = (selectedMonth) => {
    setSelectedMonth(selectedMonth);
  };

  return (
    <>
       <div className="container-fluid">
            <div className="row mt-4">
                <div className="col-2">
                    <label htmlFor="date">Date Filter Type</label>
                    <select value={filterType} onChange={handleFilterTypeChange}>
                        <option value="">Select an option</option>
                        <option value="Year">Year</option>
                        <option value="Month">Month</option>
                        <option value="Day">Day</option>
                    </select>
                    <p>Selected value: {filterType}</p>
                </div>

                {filterType === "Year" && (
                    <div className="col-2">
                        <label htmlFor="Year">Year</label>
                        <Dropdown
                            options={["2024", "2023"]}
                            className="mb-4"
                            onChange={handleYearChange} // Update selected year
                        />
                    </div>
                )}
                
                {filterType === 'Month' && (
                    <div className="col-2">
                        <label htmlFor="Month">Month</label>
                        <Dropdown
                            options={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]}
                            className="mb-4"
                            onChange={handleMonthChange} // Update selected month
                        />
                    </div>
                )}

                {filterType === 'Day' && (
                    <div className="col-2">
                        <label htmlFor="Day">Day</label>
                        <DatePicker
                            selected={new Date()}
                            onChange={(date) => console.log(date)}
                            dateFormat="dd/MM/yyyy"
                            calendarClassName="custom-calendar"
                        />
                    </div>
                )}

                <div className="col-2">
                    <label htmlFor="Region">Region</label>
                    <Dropdown
                        options={["active", "inactive"]}
                        label="Status"
                        className="mb-4"
                    />
                </div>
                
                <div className="col-2 "> 
                    <label htmlFor="Advisor">Advisor</label>
                    <Dropdown
                        options={["active", "inactive"]}
                        label="Status"
                        className="mb-4"
                    />
                </div>
                
                <div className="col-2">
                    <label htmlFor="Business Type">Business Type</label>
                    <Dropdown
                        options={["active", "inactive"]}
                        label="Status"
                        className="mb-4"
                    />
                </div>
                
                <div className="col-2">
                    <label htmlFor="Business Type">Export</label>
                    <Button type="submit"  className="w-full bg-Ocean-600">
                        Export
                    </Button>
                </div>
                
            </div>
        </div>
    </>
  );
};

export default InsightDate;
