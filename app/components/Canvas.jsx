import React from 'react';
import { Bar } from 'react-chartjs-2';



const options = {
  layout: {
    padding: {
      left:100,
      right: 100
    }
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  legend: {
    display: false
  }
};

const GroupedBar = ({data}) => (
  <>
    <div className='header'>

    </div>
    <Bar data={data} options={options}   />
  </>
);

export default GroupedBar;
