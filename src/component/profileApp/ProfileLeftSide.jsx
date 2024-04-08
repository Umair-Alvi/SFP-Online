import React from 'react'
import DateAndTime from '../dateAndTime/DateAndTime'
import { BiFile } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { FaChartSimple , FaFileExport , FaFileImport } from "react-icons/fa6";
import { FaListUl } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

const ProfileLeftSide = () => {
  return (
    <div className='left-side-main'>
        <div className="d-flex flex-column flex-shrink-0 p-3 py-5 mb-8 left-side" >
            <div className="text-center">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item"><Link to="/">Apps</Link></li>
                        <li className="breadcrumb-item">Profile</li>
                    </ol>

                </nav>
                    <p className="sidebar-welcome"><p>Welcome to <br /><span className="fw-bold">User Profile</span></p></p>
                    <p className="sidebar-user">Muhammad Umair Akram</p>
                    <p className="sidebar-date date-color mb-4"><DateAndTime /></p>
            </div>
                    
             <div className="d-grid gap-2 mb-20">
                <Link className="btn btn-color mb-2 text-center flex pl-2" to="/apps/roa/documents/create">
                <BiFile className=' size-8 mr-2 '  /> Create new Document</Link>
                    <hr />
            </div> <br />
           
            
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

export default ProfileLeftSide
