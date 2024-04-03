import React,  { forwardRef } from 'react';
import Heading from '../component/Heading/Heading';
import { FaChartBar } from 'react-icons/fa';
import { FaChartSimple } from "react-icons/fa6";
import { BsClipboard2MinusFill} from "react-icons/bs";
import Card from '../component/card/Card';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <>
       <div className="main" >
      <Heading />
      <div className="container">
        <div className="row">
      
          
            <div className="col-2">
            <Link to= {`/apps/insights/advisor`}>
              <Card Label="Insights" Icon={<FaChartSimple />} />
              </Link>
              </div>
           
            <div className="col-2"><Card Label="Web ROA" Icon={<BsClipboard2MinusFill />} /></div>
            <div className="col-2"><Card Label="Insight" Icon={<FaChartBar />} /></div>
            <div className="col-2"><Card Label="Insight" Icon={<FaChartBar />} /></div>
            <div className="col-2"><Card Label="Insight" Icon={<FaChartBar />} /></div>
            <div className="col-2"><Card Label="Insight" Icon={<FaChartBar />} /></div>
            <div className="col-2"><Card Label="Insight" Icon={<FaChartBar />} /></div>
            <div className="col-2"><Card Label="Insight" Icon={<FaChartBar />} /></div>
            <div className="col-2"><Card Label="Insight" Icon={<FaChartBar />} /></div>
            <div className="col-2"><Card Label="Insight" Icon={<FaChartBar />} /></div>
            <div className="col-2"><Card Label="Insight" Icon={<FaChartBar />} /></div>
            <div className="col-2"><Card Label="Insight" Icon={<FaChartBar />} /></div>
            <div className="col-2"><Card Label="Insight" Icon={<FaChartBar />} /></div>
            <div className="col-2"><Card Label="Insight" Icon={<FaChartBar />} /></div>
            <div className="col-2"><Card Label="Insight" Icon={<FaChartBar />} /></div>
            <div className="col-2"><Card Label="Insight" Icon={<FaChartBar />} /></div>
            <div className="col-2"><Card Label="Insight" Icon={<FaChartBar />} /></div>
            
        </div>
      </div>
      </div>
    </>
  )
}

export default Home;
