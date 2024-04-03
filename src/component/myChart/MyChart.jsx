import React from 'react';
import Chart from 'react-apexcharts';

const MyChart = ({Name}) => {
//   const options = {
//     // Chart options here
//     legend: {
//       position: 'bottom', // Example legend position
//     },
//   };

//   const series = [
//     // Series data here
//     {
//       name: 'Series 1',
//       data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
//     },
//     {
//       name: 'Series 2',
//       data: [23, 12, 54, 61, 32, 56, 81, 45, 32],
//     },
//   ];

  return (
    <>
        <div style={{ width: '100%', height: 'auto', minHeight: '348.333px' }}>
      <div className="apexcharts-canvas apexchartsddnvo4zth apexcharts-theme-light" style={{ width: '418px', height: '348.333px' }}>
        <svg width="418" height="348.33333333333337" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev" className="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style={{ background: 'transparent' }}>
          <foreignObject x="0" y="0" width="418" height="348.33333333333337">
            <div className="apexcharts-legend" style={{ inset: 'auto 0px 1px', position: 'absolute', maxHeight: '174.167px' }}></div>
            <style type="text/css">
              {
                `
                .apexcharts-legend {
                  display: flex;
                  overflow: auto;
                  padding: 0 10px;
                }
                .apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {
                  flex-wrap: wrap;
                }
                .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {
                  flex-direction: column;
                  bottom: 0;
                }
                .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {
                  justify-content: flex-start;
                }
                .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {
                  justify-content: center; 
                }
                .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {
                  justify-content: flex-end;
                }
                .apexcharts-legend-series {
                  cursor: pointer;
                  line-height: normal;
                }
                .apexcharts-legend.apx-legend-position-bottom .apexcharts-legend-series, .apexcharts-legend.apx-legend-position-top .apexcharts-legend-series {
                  display: flex;
                  align-items: center;
                }
                .apexcharts-legend-text {
                  position: relative;
                  font-size: 14px;
                }
                .apexcharts-legend-text *, .apexcharts-legend-marker * {
                  pointer-events: none;
                }
                .apexcharts-legend-marker {
                  position: relative;
                  display: inline-block;
                  cursor: pointer;
                  margin-right: 3px;
                  border-style: solid;
                }
                
                .apexcharts-legend.apexcharts-align-right .apexcharts-legend-series, .apexcharts-legend.apexcharts-align-left .apexcharts-legend-series {
                  display: inline-block;
                }
                .apexcharts-legend-series.apexcharts-no-click {
                  cursor: auto;
                }
                .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {
                  display: none !important;
                }
                .apexcharts-inactive-legend {
                  opacity: 0.45;
                }
                `
              }
            </style>
          </foreignObject>
          <g className="apexcharts-inner apexcharts-graphical" transform="translate(12, 24)">
            <defs>
              <clipPath id="gridRectMaskddnvo4zth">
                <rect width="402" height="281.33333333333337" x="-3" y="-1" rx="0" ry="0" opacity="1" strokeWidth="0" stroke="none" strokeDasharray="0" fill="#fff"></rect>
              </clipPath>
              <clipPath id="forecastMaskddnvo4zth"></clipPath>
              <clipPath id="nonForecastMaskddnvo4zth"></clipPath>
              <clipPath id="gridRectMarkerMaskddnvo4zth">
                <rect width="400" height="283.33333333333337" x="-2" y="-2" rx="0" ry="0" opacity="1" strokeWidth="0" stroke="none" strokeDasharray="0" fill="#fff"></rect>
              </clipPath>
            </defs>
            <g className="apexcharts-pie"></g>
            <line x1="0" y1="0" x2="396" y2="0" stroke="#b6b6b6" strokeDasharray="0" strokeWidth="1" strokeLinecap="butt" className="apexcharts-ycrosshairs"></line>
            <line x1="0" y1="0" x2="396" y2="0" strokeDasharray="0" strokeWidth="0" strokeLinecap="butt" className="apexcharts-ycrosshairs-hidden"></line>
          </g>
          <text fontFamily="Open Sans" x="10" y="16.5" textAnchor="start" dominantBaseline="auto" fontSize="14px" fontWeight="900" fill="#373d3f" className="apexcharts-title-text">{Name}</text>
        </svg>
      </div>
    </div>
  
    </>
  );
};

export default MyChart;
