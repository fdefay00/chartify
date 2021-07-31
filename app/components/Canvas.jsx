import React from 'react';
import { Bar } from 'react-chartjs-2';

const colors = ['#D1E2C4', '#EBEBE8', '#778A35'];
const options = {
  scales: {
    yAxes: [
      // {
      //   ticks: {
      //     // beginAtZero: true,
      //   },
      // },
    ],
  },
  legend: {
    display: false,
  },
};

const GroupedBar = ({ artists, title }) => {
  const data = {
    labels: ['Popularity', 'Followers (M)', 'Top Track'],
    datasets: artists.map((artist, i) => ({
      label: artist.name,
      data: [artist.popularity, artist.followers, artist.tracks[0].popularity],
      backgroundColor: colors[i],
    })),
  };

  return (
    <>
      <div className="chartHeader">
        <h2>{title}</h2>
      </div>
      <Bar data={data} options={options} />
    </>
  );
};

export default GroupedBar;
