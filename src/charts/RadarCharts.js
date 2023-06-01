import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js';

const RadarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartOptions = {
      // Configurações do gráfico
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          beginAtZero: true,
        },
      },
    };

    const chartData = {
      // Dados do gráfico
      labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [10, 20, 15, 25, 12],
          backgroundColor: 'rgba(75, 192, 192, 0.4)',
          borderColor: 'rgba(75, 192, 192, 1)',
          pointBackgroundColor: 'rgba(75, 192, 192, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
        },
      ],
    };

    const myChart = new Chart(chartRef.current, {
      type: 'radar',
      data: chartData,
      options: chartOptions,
    });

    return () => {
      // Limpa o gráfico ao desmontar o componente
      myChart.destroy();
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default RadarChart;
