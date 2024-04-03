import React, { useState } from 'react';
import Dropdown from '../dropdown/Dropdown';
import Button from '../button/Button';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const InsightDate = () => {
  const [filterType, setFilterType] = useState('Month'); // Default filter type is "Day"

  const handleFilterTypeChange = (selectedFilterType) => {
    setFilterType(selectedFilterType);
  };
  
  return (
    <>
    
       <div className="container-fluid " >
            <div className="row mt-4">
                <div className="col-2">
                    <label htmlFor="date">Date Filter Type</label>
                    <Dropdown
                        options={["Year", "Month", "Day"]}
                        className="mb-4"
                        onChange={handleFilterTypeChange}
                    />
                </div>

                {filterType === 'Year' && (
                    <div className="col-2">
                        <label htmlFor="Month">Month</label>
                        <Dropdown
                            options={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]}
                            className="mb-4"
                        />
                    </div>
                )}
                
                {filterType === 'Month' && (
                    <div className="col-1">
                        <label htmlFor="Month">Month</label>
                        <Dropdown
                            options={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]}
                            className="mb-4"
                        />
                    </div>
                )}

                {filterType === 'Month' && (
                    <div className="col-1">
                        <label htmlFor="Year">Year</label>
                        <Dropdown
                            options={["2024", "2023"]}
                            className="mb-4"
                        />
                    </div>
                )}

                
                {filterType === 'Day' && (
                    <div className="col-2">
                        <label htmlFor="Year">Day</label>
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
                        options={["All"]}
                        label="Status"
                        className="mb-4"
                    />
                </div>
                
                <div className="col-2 "> 
                    <label htmlFor="Advisor">Advisor</label>
                    <Dropdown
                        options={["All", "Muhammad Umair Akram"]}
                        label="Status"
                        className="mb-4"
                    />
                </div>
                
                <div className="col-2">
                    <label htmlFor="Business Type">Business Type</label>
                    <Dropdown
                        options={["Business Assurance", "Comm release","Employee Benefits", "Funeral","GAP Cover", "Recurring - Investment","Lumpsum - Investment", "Investment- Both"]}
                        label="Status"
                        className="mb-4"
                    />
                </div>
                
                <div className="col-2">
                    <label htmlFor="Business Type">Export</label>
                    <Button type="submit"  className=" w-full bg-Ocean-600">
                        Export
                    </Button>
                </div>
                
            </div>
        </div>
    </>
  );
};

export default InsightDate;
