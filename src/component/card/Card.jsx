import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import { a , BrowserRouter} from 'react-router-dom';

// import { FaChartBar } from 'react-icons/fa'; // Importing the desired React icon


const Card = ({Label,Icon}) => {
  return (
    // <BrowserRouter>
    <div className="container">
      <a href="#" style={{ textDecoration: 'none' }}>
        <div className="card appCard bg-body-light border-0 shadow app p-1 mb-1 bg-body-light rounded-4">
          <div className="card-body">
            <br />
            <h5 className="card-title text-center">
              {Icon} {/* Using the React icon component */}
            </h5>
            <br />
            <p className="card-text text-center"><a className="appLabel" href="#" style={{ textDecoration: 'none', color: 'black' }}>{Label}</a></p>
          </div>
        </div>
      </a>
    </div>
    // </BrowserRouter>
  );
}

export default Card;
