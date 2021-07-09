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

const GroupedBar = ({data, title}) => (
  <>
    <div className='header'>
      <h2>{title}</h2>
    </div>
    <Bar data={data} options={options}   />
  </>
);

export default GroupedBar;
