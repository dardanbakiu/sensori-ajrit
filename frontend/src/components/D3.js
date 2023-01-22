import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

function D3() {
  return (
    <div>
      <Bar
        data={data}
        options={{
          maintainAspectRatio: false,
          scales: {
            x: {
              display: false
            },
            y: {
              display: false
            },
            z: {
              display: true,
              position: 'left',
              ticks: {
                min: 0,
                max: 100
              }
            }
          }
        }}
      />
    </div>
  );
}

export default D3;