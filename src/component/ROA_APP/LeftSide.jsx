import React from 'react'
import DateAndTime from '../dateAndTime/DateAndTime'


const LeftSide = ({class1,class2, class3}) => {
  return (
    <div className='left-side-main'>
        <div class="d-flex flex-column flex-shrink-0 p-3 py-5 mb-8 left-side" >
            <div class="text-center">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb justify-content-center">
                        <li class="breadcrumb-item"><a href="/">Apps</a></li>
                        <li class="breadcrumb-item">ROA</li>
                    </ol>

                </nav>
                    <p class="sidebar-welcome"><p>Welcome to <br /><span class="fw-bold">ROA</span></p></p>
                    <p class="sidebar-user">Muhammad Umair Akram</p>
                    <p class="sidebar-date date-color mb-4"><DateAndTime /></p>
            </div>
                    
             <div class="d-grid gap-2">
                <a class="btn btn-color mb-2 " href="/apps/roa/documents/create">
                    <i class="bi pe-none me-2 fa-solid fa-file"></i>Create new Document</a>
                    <hr />
            </div> <br />
           
            <ul class="nav nav-pills flex-column mb-auto">
                <li class="nav-item">
                    <a class={`nav-link ${class1} `} aria-current="page" href="/apps/roa">
                        <i class="bi pe-none me-2 fa-solid fa-chart-simple"></i>Dashboard</a>
                </li>
                <li>
                    <a class={`nav-link ${class2} link-body-emphasis`} href="/apps/roa/list"><i class="bi pe-none me-2 fa-solid fa-list"></i>Full List</a>
                </li>
                <li>
                    <a class={`nav-link ${class3} link-body-emphasis`}  href="/apps/roa/export"><i class="bi pe-none me-2 fa-solid fa-file-export"></i>Export</a>
                </li>
                <li>
                    <a class="nav-link link-body-emphasis" href="/apps/roa/import"><i class="bi pe-none me-2 fa-solid fa-file-import"></i>Import</a>
                </li>
                </ul>
                <hr /> <br />
                <div class="d-flex align-items-end flex-column px-auto">
                    <div class="container sidebar-footer">
                        <div class="d-grid gap-2">
                            <button class="btn btn-primary btn-sfp" type="button">
                                <i class="bi pe-none me-2 fa-solid fa-arrow-right-from-bracket"></i>Logout
                            </button>
                        </div>
                        <div class="d-flex justify-content-center">© SFP by KCS 2023</div>
                    </div>
                </div>
            </div>
    
    </div>
  )
}

export default LeftSide
