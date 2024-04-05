import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { IoIosCalendar } from "react-icons/io";
import Dropdown from '../../dropdown/Dropdown';

const DashboardDateFilter = () => {
    const [filterType, setFilterType] = useState(2); // Default filter type is "Day"
  const [selectedMonth, setSelectedMonth] = useState(''); // State for selected month
  const [selectedYear, setSelectedYear] = useState(''); // State for selected year
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDate2, setSelectedDate2] = useState(new Date());


  const handleFilterTypeChange = (event) => {
    setFilterType(parseInt(event.target.value)); // Convert value to integer
  };

  const handleYearChange = (selectedYear) => {
    setSelectedYear(selectedYear.target.value);
  };

  const handleMonthChange = (selectedMonth) => {
    setSelectedMonth(selectedMonth.target.value);
  };

  

  const handleDateChange = (date) => {
      setSelectedDate(date);
  };

  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
};

  return (
    <>
         <div className="container-fluid">
            <div className="row  Date-Filter ">
                <div className="col">
                    <label htmlFor="date" className='lable overflow-hidden w-16 h-4'>Date Filter Type</label>
                    <select value={filterType} onChange={handleFilterTypeChange} className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full `}>
                        <option value="1">Year</option>
                        <option value="2">Month</option>
                        <option value="3">Day</option>
                        <option value="4">Custom</option>
                    </select>
                </div>

                {filterType === 1 && (
                    <div className="col">
                        <label htmlFor="Year" className='lable'>Year</label>
                        <Dropdown
                            options={["2024", "2023"]}
                            className="mb-4"
                            onChange={handleYearChange} // Update selected year
                        />
                    </div>
                )}
                
                {filterType === 2 && (
                    <>
                        <div className="col">
                            <label htmlFor="Month" className='lable'>Month</label>
                            <Dropdown
                                options={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]}
                                className="mb-4"
                                onChange={handleMonthChange} // Update selected month
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="Year" className='lable'>Year</label>
                            <Dropdown
                                options={["2024", "2023"]}
                                className="mb-4"
                                onChange={handleYearChange} // Update selected year
                            />
                        </div>
                    </>
                )}

                {filterType === 3 && (
                    <div className="col-7 mb-4">
                        <label htmlFor="Year" className='lable'>Day</label>
                        <div className={`flex px-2 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full `}>
                        <DatePicker
                            selected={selectedDate}
                             onChange={handleDateChange}
                            dateFormat="dd/MM/yyyy"
                            calendarClassName="custom-calendar"
                           
                        />
                       <span className="absolute left-1/2 right-1 mr-2 md:mr-6"><IoIosCalendar /></span>
                        
                        </div>
                    </div>
                )}

{filterType === 4 && (
                       <>
                      
                        <div className="col-3">
                            <label htmlFor="Trend Type" className='lable'>Trend Type</label>
                            <Dropdown
                                options={["Daily (30 days max)", "Weekly", "Month", "Quarterly", "Annually"]}
                                className="mb-4"
                                onChange={handleMonthChange} // Update selected month
                            />
                        </div>
                        <div className="col-3">
                            <label htmlFor="From Date" className='lable'>From Date</label>
                            <div className={`flex px-2 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full overflow-hidden `}>
                            <DatePicker
                        
                                selected={selectedDate}
                                onChange={handleDateChange}
                                dateFormat="dd/MM/yyyy"
                                calendarClassName="custom-calendar"
                            
                            />
                        <span className="mr-2 md:mr-6"><IoIosCalendar className="dashboard-calender-icon1" /></span>
                            
                            </div>
                        </div>

                        <div className="col-3">
                            <label htmlFor="To Date" className='lable'>To Date</label>
                            <div className={`flex px-2 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full overflow-hidden`}>
                            <DatePicker
                        
                                selected={selectedDate2}
                                onChange={handleDateChange2}
                                dateFormat="dd/MM/yyyy"
                                calendarClassName="custom-calendar"
                            
                            />
                        <span className="mr-2 md:mr-6"><IoIosCalendar className=" dashboard-calender-icon2"/></span>
                            
                            </div>
                        </div>
                        </>
                        )}

            </div>
        </div>
      
    </>
  )
}

export default DashboardDateFilter
