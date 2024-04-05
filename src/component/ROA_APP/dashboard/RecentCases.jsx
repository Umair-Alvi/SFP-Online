import React from 'react'

const RecentCases = () => {
  return (
    <div className='dashboard-Recent-cases'>
        <div class="row"><div class="col-lg-2"><h1 class="app-dashboard-header">Recent Cases</h1></div><div class="col-lg-5"><div class="input-group mb-3"><span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-search"></i></span><input type="text" class="form-control" placeholder="Search Policy Number / Client Name / ID" value="" /></div></div><div class="col-lg-2"></div><div class="col-lg-3"><div class="btn-group" role="group"><div class="btn-group dropdown mx-0" role="group"><button class="btn btn-sm btn-sfp btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Page Size</button><ul class="dropdown-menu"><li><a class="dropdown-item active" href="#">5</a></li><li><a class="dropdown-item" href="#">10</a></li><li><a class="dropdown-item" href="#">20</a></li><li><a class="dropdown-item" href="#">50</a></li><li><a class="dropdown-item" href="#">100</a></li></ul></div><div class="btn-group dropdown" role="group"><button class="btn btn-sm btn-sfp btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Sort by</button><ul class="dropdown-menu"><li><a class="dropdown-item" href="#">Policy Number</a></li><li><a class="dropdown-item active" href="#">Creation Time</a></li></ul></div><button class="btn btn-sm btn-outline-secondary"><i class="fa-solid fa-arrow-up-wide-short"></i></button><button class="btn btn-sm btn-sfp btn-secondary"><i class="fa-solid fa-arrow-down-wide-short"></i></button></div></div></div>

        <div class="roa-dashboard-records-table">
            <table class="table">
                <thead class="tableHead">
                    <tr>
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
