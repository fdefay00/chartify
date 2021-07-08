
import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto';

export default (props) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const labels = [
      'January',
      'February',
      'March',
      'April',
      'May',

    ];
    const data = {
      labels: labels,
      datasets: [{
        barPercentage: 0.5,
        barThickness: 200,
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [30, 5, 23, 67, 8],
      }]
    };
    const config = {
      type: 'bar',
      data,
      options: {}
    };

    const myChart = new Chart(ctx, config);
  })

  return <canvas ref={canvasRef} {...props}/>
}


