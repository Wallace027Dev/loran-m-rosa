import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js';

const PieChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartOptions = {
      // Configurações do gráfico
      responsive: true,
      maintainAspectRatio: false,
    };

    const chartData = {
      // Dados do gráfico
      labels: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
      datasets: [
        {
          label: 'Quantidade',
          data: [10, 20, 15, 25, 12],
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };

    const myChart = new Chart(chartRef.current, {
      type: 'pie',
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

export default PieChart;
