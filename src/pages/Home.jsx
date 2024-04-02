import React from 'react';
import Heading from '../component/Heading/Heading';
import { FaChartBar } from 'react-icons/fa';
import { FaChartSimple } from "react-icons/fa6";
import { BsClipboard2MinusFill} from "react-icons/bs";
import Card from '../component/card/Card';


const Home = () => {
  return (
    <>
       <div className="main" >
      <Heading />
      <div className="container">
        <div className="row">
            <div className="col-2"><Card Label="Insights" Icon={<FaChartSimple />} /></div>
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
