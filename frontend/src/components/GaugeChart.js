import React from 'react';
import { Polar } from 'react-chartjs-2';

const data = {
    datasets: [{
        data: [50],
        backgroundColor: ['rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)'],
        borderWidth: 2,
    }],
    labels: ['Value']
};

const options = {
    scale: {
        angleLines: {
            display: false
        },
        ticks: {
            suggestedMin: 0,
            suggestedMax: 100,
            stepSize: 10,
            display: false
        }
    }
};

const GaugeChart = () => {
    return (
        <Polar data={data} options={options} />
    );
};

export default GaugeChart;