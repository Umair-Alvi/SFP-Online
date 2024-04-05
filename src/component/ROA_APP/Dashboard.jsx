import React from 'react'

const Dashboard = () => {
  return (
    <>
        <div class="col-lg-5 app-dashboard-kpi">
            <div class="row">
                <div class="col-8">
                    <h1 class="app-dashboard-header">Total Summary</h1>
                </div>
            </div>
            
            <div class="row my-1 row-cols-2">
                <div class="col">
                    <label class="filter-label">Date Filter Type</label>
                    <select class="form-select" aria-label="Range"><option value="1">Year</option><option value="2">Month</option><option value="3">Day</option><option value="4">Custom</option></select></div><div class="col"><label class="filter-label">Year</label><select class="form-select" aria-label="Range"><option>Year</option><option value="2023">2023</option><option value="2024">2024</option></select></div></div><div class="row"><div class="col-lg-4 p-0 m-0"><div class="card kpi-card-1"><div class="card-body"><h1 class="roa-kpi-number">0</h1><p class="roa-kpi-title">Total</p></div></div></div><div class="col-lg-4 p-0 m-0"><div class="card kpi-card-2"><div class="card-body"><h1 class="roa-kpi-number">0</h1><p class="roa-kpi-title">Incomplete</p></div></div></div><div class="col-lg-4 p-0 m-0"><div class="card kpi-card-3"><div class="card-body"><h1 class="roa-kpi-number">0</h1><p class="roa-kpi-title">Complete</p></div></div></div></div></div>
    </>
  )
}

export default Dashboard
