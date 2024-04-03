import React from 'react'
import Dropdown from '../component/dropdown/Dropdown'
import Button from '../component/button/Button'
import InsightCard from '../component/card/InsightCard'
import MyChart from '../component/myChart/MyChart'
import PercentageChart from '../component/myChart/PercentageChart'
import DateFilter from '../component/dateFilter/DateFilter'
import InsightDate from '../component/InsightDate/InsightDate'
import MyChartComponent from '../component/myChart/MyChartComponent'
import SimpleChart from '../component/myChart/SimpleChart'

const Insights = () => {
  return (
    <>
      <div >
       
       <InsightDate />

        <div className="container-fluid insight-car">
            <div className="row">
                <div className="col-2">
                        <InsightCard Label={<><span>Total</span><br /><span>Form</span></>} Number="NAN" />
                </div>
                <div className="col-2">
                        <InsightCard Label={<><span>Compliances</span><br /><span>Reviews</span></>} Number="NAN" />
                </div>
                <div className="col-2">
                        <InsightCard Label={<><span>Compliances</span><br /><span>Approved</span></>} Number="NAN" />
                </div>
                <div className="col-2">
                        <InsightCard Label={<><span>Compliances</span><br /><span>Resubmission</span></>} Number="NAN" />
                </div>
                <div className="col-2">
                        <InsightCard Label={<><span>Compliances Partial</span><br /><span>Approved</span></>} Number="NAN" />
                </div>
                <div className="col-2">
                        <InsightCard Label={<><span>Position in Region</span><br /><span>(Investment)</span></>} Number="NAN" />
                </div>
            </div>
        </div>
        <br />
        <hr />

        <div className="container-fluid">
            <div className="row">
                <div className="col-4">
                <MyChart Name="Type of Business" />
                </div>

                <div className="col-4">
                <MyChart Name="Reason for Rejection" />
                </div>


                <div className="col-4">
                <PercentageChart />
                </div>

              
                <div className="col-4">
                <MyChartComponent />
                </div>

                <div className="col-4">
                <PercentageChart />
                </div>

                <div className="col-4">
                <SimpleChart  />
                </div>
                <div className="col-4">
               
                </div>
                <div className="col-4">
               
                </div>
                <div className="col-4">
                <table class="table mx-1"><thead><tr><th scope="col">Position</th><th scope="col">Advisor</th><th scope="col">Investment</th></tr></thead><tbody></tbody></table>
                </div>


            </div>
            </div>
        </div>

       
    </>
  )
}

export default Insights
