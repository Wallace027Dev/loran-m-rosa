import { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

export default function BarChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartOptions = {
      // Configurações do Gráfico
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    const chartData = {
      // Dados do gráfico
      labels: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
      datasets: [
        {
          label: 'Quantidade',
          data: [10, 20, 15, 25, 12],
          backgroundColor: '#9102d4',
          borderColor: '#7818f1',
          borderWidth: 1,
        },
      ],
    };

    const myChart = new Chart(chartRef.current, {
      type: 'bar',
      data: chartData,
      options: chartOptions,
    });

    return () => {
      // Limpa o gráfico ao desmontar o componente
      myChart.destroy();
    };
  }, []);

  return <canvas ref={chartRef} />;
}