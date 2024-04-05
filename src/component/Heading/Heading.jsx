import React, { useState, useEffect } from 'react';
import '../../App.css'
// import { format } from 'date-fns';
import DateAndTime from '../dateAndTime/DateAndTime';

const Heading = () => {
    

    return (
        <>
        <div className="main1" >
        <div className="container">
                <div className="position-relative mr-20">
                    <div className="position-absolute top-6 end-0  date-color"> <DateAndTime /> </div>
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
