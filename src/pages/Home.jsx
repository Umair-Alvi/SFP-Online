import React,  { forwardRef } from 'react';
import Heading from '../component/Heading/Heading';
import { FaChartBar } from 'react-icons/fa';
import { FaChartSimple } from "react-icons/fa6";
import { BsClipboard2MinusFill} from "react-icons/bs";
import Card from '../component/card/Card';
import { Link } from 'react-router-dom';
import Header from '../component/header/Header';
import { MdAccountBox } from "react-icons/md";


const Home = () => {
  return (
    <>
    <Header />
       <div className="main" >
      <Heading />
      <div className="container">
        <div className="row home ">
      
          
            <div className="col-2">
            <Link to= {`/login`}>
              <Card Label="Insights" Icon={<FaChartSimple size="22"/>} />
              </Link>
              </div>
         
            <div className="col-2">
            <Link to="/apps/roa">
              <Card Label="Web ROA" Icon={<BsClipboard2MinusFill size="22"/>} />
            </Link>
            </div>
            <div className="col-2"><Card Label="Insight" Icon={<FaChartBar size="22"/>} /></div>
            <div className="col-2"><Card Label="Insight" Icon={<FaChartBar size="22"/>} /></div>
            <div className="col-2"><Card Label="Insight" Icon={<FaChartBar size="22" />} /></div>
            <div className="col-2"><Card Label="Insight" Icon={<FaChartBar size="22"/>} /></div>
            <div className="col-2"><Card Label="Insight" Icon={<FaChartBar size="22"/>} /></div>
            <div className="col-2"><Card Label="Insight" Icon={<FaChartBar size="22"/>} /></div>
            <div className="col-2"><Card Label="Insight" Icon={<FaChartBar size="22" />} /></div>
            <div className="col-2"><Card Label="Insight" Icon={<FaChartBar size="22" />} /></div>
            <div className="col-2"><Card Label="Insight" Icon={<FaChartBar size="22" />} /></div>
            <div className="col-2"><Card Label="Insight" Icon={<FaChartBar size="22" />} /></div>
            <div className="col-2"><Card Label="Insight" Icon={<FaChartBar size="22"/>} /></div>
            <div className="col-2"><Card Label="Insight" Icon={<FaChartBar size="22" />} /></div>
            <div className="col-2"><Card Label="Insight" Icon={<FaChartBar size="22" />} /></div>
            <div className="col-2">
            <Link to="/apps/profile">
              <Card Label="User Profile" Icon={<MdAccountBox size="28" />} />
              </Link>
              </div>
            <div className="col-2"><Card Label="Insight" Icon={<FaChartBar />} /></div>
            
        </div>
      </div>
      </div>
    </>
  )
}

export default Home;
