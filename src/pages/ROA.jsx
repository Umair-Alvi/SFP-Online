import React from 'react'
import LeftSide from '../component/ROA_APP/LeftSide'
import Header from '../component/header/Header'
import DashboardSummary from '../component/ROA_APP/dashboard/DashboardSummary'
import DashboardProgress from '../component/ROA_APP/dashboard/DashboardProgress'
import TrandingData from '../component/ROA_APP/dashboard/TrandingData'
import RecentCases from '../component/ROA_APP/dashboard/RecentCases'

const ROA = () => {
  return (
    <>
    <Header />
      <div className="bg-body-color">
      <div className="container-fluid Roa-pag">
        <div className="row ">
            <div className="col-3">
                <LeftSide  class1="side-nav"/>

            </div>

            <div className="col-9">
                <div className="row">
                    <div className="col-5">
                        <DashboardSummary />
                    </div>
                    <div className="col-3">
                        <DashboardProgress />
                    </div>
                    <div className="col-4">
                        <TrandingData />
                    </div>
                </div>
                <div className="col-12">
                    <RecentCases />
                </div>

            </div>
            

            <div className="row">
                
            </div>
        </div>

        
      </div>
      </div>
    </>
  )
}

export default ROA
