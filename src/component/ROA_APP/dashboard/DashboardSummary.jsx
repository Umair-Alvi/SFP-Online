import React from 'react'
import DashboardDateFilter from './DashboardDateFilter'

const DashboardSummary = () => {
  return (
    <>
      <div className="dashboard-summary">
            <div class="row">
                <div class="col-8">
                    <h1 class="app-dashboard-header">Total Summary</h1>
                </div>
            
                <div className="col-12">
                    <DashboardDateFilter />
                </div>
                <div className="col-12">
                <div class="row">
                    <div class="col-lg-4 p-0 m-0">
                        <div class="card kpi-card-1">
                            <div class="card-body">
                                <h1 class="roa-kpi-number mb-4">0</h1>
                                <p class="roa-kpi-title">Total</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 p-0 m-0">
                        <div class="card kpi-card-2">
                            <div class="card-body">
                                <h1 class="roa-kpi-number mb-4">0</h1>
                                <p class="roa-kpi-title">Incomplete</p>
                            </div>
                        </div>
                        </div>
                        <div class="col-lg-4 p-0 m-0">
                            <div class="card kpi-card-3">
                                <div class="card-body">
                                    <h1 class="roa-kpi-number mb-4">0</h1>
                                    <p class="roa-kpi-title">Complete</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            
      </div>
    </>
  )
}

export default DashboardSummary
