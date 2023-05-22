<template>
  <Line :data="data" :options="options" :width="300" :height="500" />
</template>
  
  <script setup lang="ts">
  import { Chart as ChartJS, registerables } from 'chart.js';
  import { Line } from 'vue-chartjs';
  import type { ChartOptions } from 'chart.js';
  
  ChartJS.register(...registerables);
  
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [10, 20, 30, 25, 15, 35, 20],
        fill: true,
        borderColor: '#5847D7',
        backgroundColor: '#E9EAFF',
        pointBorderColor: '#FFFFFF',
        pointBackgroundColor: '#5847D7',
        pointHoverRadius: 5,
        pointHitRadius: 3,
        pointRadius: 0,
        lineTension: 0.3,
      },
    ],
  };
  
  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
            drawOnChartArea: true,
        },
      }
    },
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      tooltip: {
        displayColors: false,
        backgroundColor: 'rgb(255,255,255, 0.8)',
        titleColor: '#000000',
        titleAlign: 'center',
        bodyColor: '#000000',
        bodyAlign: 'center',
        borderColor: '#E9ECF3',
        borderWidth: 1,
        titleFont: {
          family: 'Sarabun SemiBold',
          size: 12,
        },
        callbacks: {
          title: function (items: { label: string }[]) {
            return items[0].label;
          },
          label: function (items: { formattedValue: any }) {
            return `Total amount: ${items.formattedValue}`;
          },
        },
      },
    },
  };
  </script>
  