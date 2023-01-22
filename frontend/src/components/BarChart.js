import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';

const BarChart = ({ data }) => {
  const chartContainer = useRef(null);
  const [options, setOptions] = useEffect({
    scales: {
      y: {
        beginAtZero: true
      }
    }
  })

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      new Chart(chartContainer.current, {
        type: 'bar',
        data: data,
        options: options
      });
    }
  }, [data, options]);

  return <canvas ref={chartContainer} />;
};

export default BarChart;