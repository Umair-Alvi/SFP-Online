import React from 'react';
import Chart from 'react-apexcharts';

class PercentageChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          type: 'bar',
          height: 350,
          width: '100%',
          toolbar: {
            show: false
          }
        },
        xaxis: {
          categories: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5']
        },
        yaxis: [
          {
            axisTicks: {
              show: true
            },
            axisBorder: {
              show: true,
              color: '#373d3f'
            },
            labels: {
              style: {
                colors: '#373d3f',
              },
              formatter: function (val) {
                return val;
              }
            },
            title: {
              text: 'Reviews',
              style: {
                color: '#373d3f',
                fontWeight: 900
              }
            },
          },
          {
            opposite: true,
            axisTicks: {
              show: true
            },
            axisBorder: {
              show: true,
              color: '#373d3f'
            },
            labels: {
              style: {
                colors: '#373d3f',
              },
              formatter: function (val) {
                return val + '%';
              }
            },
            title: {
              text: 'Percentage Approved at 1st Review',
              style: {
                color: '#373d3f',
                fontWeight: 900
              },
              rotate: 90,
              offsetY: 20
            },
          }
        ],
        legend: {
          position: 'top',
          height: 50,
          maxHeight: 175,
        }
      },
      series: [
        {
          name: 'Reviews',
          data: [5, 3, 7, 2, 6]
        },
        {
          name: 'First Approval Percentage',
          data: [25, 30, 35, 40, 45]
        },
        {
          name: 'First Approval',
          data: [10, 15, 20, 25, 30]
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={350}
          width="100%"
        />
      </div>
    );
  }
}

export default PercentageChart;

