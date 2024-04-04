import React, { useState, useEffect } from 'react';
import '../../App.css'
import { format } from 'date-fns';

const Heading = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000); // Update time every second

        return () => {
            clearInterval(timer); // Cleanup the interval on component unmount
        };
    }, [currentTime]); // Include currentTime in the dependency array

    // Extract hours, minutes, and seconds from the current time object
    let hours = currentTime.getHours();
const minutes = currentTime.getMinutes();
const seconds = currentTime.getSeconds();

// Format the time as desired (e.g., HH:MM:SS)
const check = `${hours >= 12 ? 'PM' : 'AM'}`;
hours = `${hours > 12 ? hours - 12 : hours}`;

const formattedTime = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes} ${check}`;

    const currentDate = new Date();

    // Extract year, month, and day from the date object
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Month is zero-based, so we add 1
    const day = currentDate.getDate();

    // Format the date as desired (e.g., YYYY-MM-DD)
    const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;

    const formattedDateSet = format(formattedDate, 'dd MMMM, yyyy');

    return (
        <>
        <div className="main1" >
        <div className="container">
                <div className="position-relative mr-20">
                    <div className="position-absolute top-6 end-0  date-color">{formattedDateSet} | {formattedTime}</div>
                </div>
            <br />
                <div>
                <h5 class="card-title text-center heading">Welcome Muhammad Umair Akram</h5>
                <p class="card-text subtitle">Select an App to start your work.</p>
                </div>
        </div>
        </div>
            
        </>
    )
}

export default Heading;
