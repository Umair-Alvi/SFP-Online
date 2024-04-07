import React from 'react'
import Header from '../../header/Header'
import LeftSide from '../LeftSide'

const Import = () => {
  return (
    <div>
       < Header />
      <div className="bg-body-color">
        <div className="container-fluid Roa-pag">
            <div className="row">
                <div className="col-3">
                    <LeftSide class3="side-nav" />
                </div>

                <div className="col-9 recent-cases">
                    <h4 className='text-center pt-3 font-bold'>Import Data</h4>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Import
