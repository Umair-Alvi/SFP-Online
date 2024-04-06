import React from 'react'
import RecentCases from '../dashboard/RecentCases'
import LeftSide from '../LeftSide'
import Header from '../../header/Header'

const FullList = () => {
  return (
    <>
     <Header />
      <div className="bg-body-color">
        <div className="container-fluid Roa-pag">
            <div className="row">
                <div className="col-3">
                    <LeftSide class2="side-nav" />
                </div>

                <div className="col-9">
                    <RecentCases  />
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default FullList
