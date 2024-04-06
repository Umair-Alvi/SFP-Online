import React from 'react'
import DateAndTime from '../dateAndTime/DateAndTime'
import { BiFile } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { FaChartSimple , FaFileExport , FaFileImport } from "react-icons/fa6";
import { FaListUl } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

const LeftSide = ({class1,class2, class3, class4}) => {
  return (
    <div className='left-side-main'>
        <div className="d-flex flex-column flex-shrink-0 p-3 py-5 mb-8 left-side" >
            <div className="text-center">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item"><Link to="/">Apps</Link></li>
                        <li className="breadcrumb-item">ROA</li>
                    </ol>

                </nav>
                    <p className="sidebar-welcome"><p>Welcome to <br /><span className="fw-bold">ROA</span></p></p>
                    <p className="sidebar-user">Muhammad Umair Akram</p>
                    <p className="sidebar-date date-color mb-4"><DateAndTime /></p>
            </div>
                    
             <div className="d-grid gap-2">
                <Link className="btn btn-color mb-2 text-center flex pl-2" to="/apps/roa/documents/create">
                <BiFile className=' size-8 mr-2 '  /> Create new Document</Link>
                    <hr />
            </div> <br />
           
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <Link className={`nav-link ${class1} flex pl-2 `} aria-current="page" to="/apps/roa">
                    <FaChartSimple className="size-6 mr-2 pl-2" />Dashboard</Link>
                </li>
                <li>
                    <Link className={`nav-link ${class2} link-body-emphasis flex pl-2`} to="/apps/roa/list"><FaListUl className='size-6 mr-2 pl-2' /> Full List</Link>
                </li>
                <li>
                    <Link className={`nav-link ${class3} link-body-emphasis flex pl-2`}  to="/apps/roa/export"><FaFileExport className='size-6 mr-2 pl-2' /> Export</Link>
                </li>
                <li>
                    <Link className={`nav-link ${class4} link-body-emphasis flex pl-2`} to="/apps/roa/import"><FaFileImport className='size-6 mr-2 pl-2'  /> Import</Link>
                </li>
                </ul>
                <hr /> <br />
                <div className="d-flex align-items-end flex-column px-auto">
                    <div className="container sidebar-footer">
                        <div className="d-grid gap-2 ">
                            <button className="btn btn-color items-center flex pl-20" type="button">
                            <MdLogout className='size-6 mr-2 ' /> Logout
                            </button>
                        </div>
                        <div className="d-flex justify-content-center">© SFP by KCS 2023</div>
                    </div>
                </div>
            </div>
    
    </div>
  )
}

export default LeftSide
