<template>
     <canvas ref="multiChart"></canvas>
  </template>
    
<script setup lang="ts">
import { Chart as ChartJS, registerables } from 'chart.js';
import { ref, onMounted } from 'vue';
    
ChartJS.register(...registerables);
const multiChart = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
  renderChart();
});

function renderChart(){
  if (multiChart.value) {
    const ctx = multiChart.value.getContext('2d');
    if (ctx) {
      new ChartJS(ctx, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              label: 'Dataset 1',
              data: [10, 20, 30, 40, 50, 60],
              borderColor: '#4410D5',
              pointBackgroundColor: '#4410D5',
              pointRadius: 0,
              pointHoverRadius: 8,
              hoverBorderWidth: 5,
              hoverBorderColor: '#FFFFFF',
            },
            {
              label: 'Dataset 2',
              data: [5, 15, 25, 35, 45, 55],
              borderColor: '#12A5F8',
              pointBackgroundColor: '#12A5F8',
              pointRadius: 0,
              pointHoverRadius: 8,
              hoverBorderWidth: 5,
              hoverBorderColor: '#FFFFFF',
            },
            {
              label: 'Dataset 3',
              data: [15, 23, 55, 45, 15, 25],
              borderColor: '#F2A244',
              pointBackgroundColor: '#F2A244',
              pointRadius: 0,
              pointHoverRadius: 8,
              hoverBorderWidth: 5,
              hoverBorderColor: '#FFFFFF',
              tension: 0.3
            }
          ]
        },
        options: {
          responsive: true,
          interaction: {
            mode: 'index',
            intersect: false,
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
            }
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
              external: function(context) {
                //custom all
              },
            }
          }
        }
      });
    }
  }
}

</script>
<style>

</style>
    