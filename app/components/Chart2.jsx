import React from 'react';
import { Line } from 'react-chartjs-2';

// const data = {
//   labels: ['1', '2', '3', '4', '5', '6'],
//   datasets: [
//     {
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       fill: false,
//       backgroundColor: 'rgb(255, 99, 132)',
//       borderColor: 'rgba(255, 99, 132, 0.2)',
//       yAxisID: 'y-axis-1',
//     },
//     {
//       label: '# of No Votes',
//       data: [1, 2, 1, 1, 2, 2],
//       fill: false,
//       backgroundColor: 'rgb(54, 162, 235)',
//       borderColor: 'rgba(54, 162, 235, 0.2)',
//       yAxisID: 'y-axis-2',
//     },
//   ],
// };
const colors = ['#D1E2C4', '#EBEBE8', '#778A35'];
const options = {
  scales: {
    yAxes: [
      {
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-1',
      },
      {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'y-axis-2',
        gridLines: {
          drawOnArea: true,
        },
      },
    ],
  },
};

const MultiAxisLine = ({ artists, title }) => {
  const tracks =
    artists.length === 0
      ? {}
      : {
          labels: artists[0].tracks.map((track, i) => `Track ${++i}`),
          datasets: artists.map((artist, i) => ({
            label: artist.name,
            data: artist.tracks.map((track) => track.popularity),
            backgroundColor: colors[i],
          })),
        };
  return (
    <>
      <div className="chartHeader">
        <h1 className="title">{title}</h1>
      </div>
      <Line data={tracks} options={options} />
    </>
  );
};

export default MultiAxisLine;
