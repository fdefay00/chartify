import React from 'react';
import { Bar } from 'react-chartjs-2';



const options = {
  // layout: {
  //   padding: {
  //     left:300,
  //     right: 300
  //   }
  // },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const GroupedBar = ({data}) => (
  <>
    <div className='header'>
      <h1 className='title'>Grouped Bar Chart</h1>
      <div className='links'>
        <a
          className='btn btn-gh'
          href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/GroupedBar.js'
        >
          Github Source
        </a>
      </div>
    </div>
    <Bar data={data} options={options}   />
  </>
);

export default GroupedBar;
