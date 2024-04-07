import React , {useState} from 'react'
import { IoSearch } from "react-icons/io5";
import { FaArrowUpWideShort , FaArrowDownShortWide } from "react-icons/fa6";


const RecentCases = ({sizeTable}) => {
  const [upButtonClass, setUpButtonClass] = useState("btn btn-sm btn-outline-secondary");
  const [downButtonClass, setDownButtonClass] = useState("btn btn-color1 btn-sm btn-sfp btn-secondary");

  const handleUpButtonClick = () => {
      setUpButtonClass(prevClass => prevClass === "btn btn-sm btn-outline-secondary" ? "btn btn-color1 btn-sm btn-outline-primary" : "btn btn-color1 btn-sm btn-outline-primary");
      setDownButtonClass(prevClass => prevClass === "btn btn-color1 btn-sm btn-sfp btn-secondary" ?  "btn btn-sm btn-outline-secondary" :"btn btn-sm btn-outline-secondary");
  };

  const handleDownButtonClick = () => {
    setUpButtonClass(prevClass => prevClass === "btn btn-sm btn-outline-secondary" ? "btn btn-sm btn-outline-secondary" : "btn btn-sm btn-outline-secondary");

      setDownButtonClass(prevClass => prevClass === "btn btn-color1 btn-sm btn-sfp btn-secondary" ?  "btn btn-color1 btn-sm btn-sfp btn-secondary" : "btn btn-color1 btn-sm btn-sfp btn-secondary");
  };
  return (
    <div className={`dashboard-Recent-cases ${sizeTable} mb-3 `}>
        <div class="row p-4 ">
          <div class="col-lg-2">
            <h1 class="app-dashboard-header">Recent Cases</h1>
          </div>
          <div className="col-1">
             
          </div>
          <div class="col-lg-4">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1"><IoSearch /></span>
              <input type="text" class="form-control" placeholder="Search Policy Number / Client Name / ID" value="" />
            </div>
          </div>
           <div class="col-lg-1"></div>
           <div class="col-lg-3">
            <div class="btn-group" role="group">
              <div class="btn-group dropdown  mx-0" role="group">
                <button class="btn btn-color1  btn-sm btn-sfp btn-secondary dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">Page Size
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item active" href="#">5</a></li>
                  <li><a class="dropdown-item" href="#">10</a></li>
                  <li><a class="dropdown-item" href="#">20</a></li>
                  <li><a class="dropdown-item" href="#">50</a></li>
                  <li><a class="dropdown-item" href="#">100</a></li>
                </ul>
              </div>
              <div class="btn-group dropdown" role="group">
                <button class="btn btn-color1 btn-sm btn-sfp btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Sort by
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Policy Number</a></li>
                  <li><a class="dropdown-item active" href="#">Creation Time</a></li>
                </ul>
              </div>
              <button className={upButtonClass} onClick={handleUpButtonClick}>
                <FaArrowUpWideShort />
            </button>
            <button className={downButtonClass} onClick={handleDownButtonClick}>
                <FaArrowDownShortWide />
            </button>
            </div>
          </div>
        </div>

        <div class="roa-dashboard-records-table pl-4 ">
            <table class="table ">
                <thead class="tableHead ">
                    <tr className='p-4'>
                        <th scope="col">#</th>
                        <th scope="col">Policy #</th>
                        <th scope="col">Client Name</th>
                        <th scope="col">C. ID Number</th>
                        <th scope="col">C. Phone</th>
                        <th scope="col">C. Email</th>
                        <th scope="col">Updated</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                     </tr>
                </thead>
                <tbody class="tableContent">
                </tbody>
            </table>
            <br />
        </div>
        
    </div>
  )
}

export default RecentCases
