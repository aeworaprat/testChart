<template>
  <canvas ref="groubBar"></canvas>
</template>
     
<script setup lang="ts">
import { Chart as ChartJS, registerables } from 'chart.js';
import { ref, onMounted } from 'vue';
import { data , label } from '@/data/groupbar'
     
ChartJS.register(...registerables);
const groubBar = ref<HTMLCanvasElement | null>(null);
  
onMounted(() => {
  renderChart();
});
  
function renderChart(){
  if (groubBar.value) {
    const ctx = groubBar.value.getContext('2d');
    if (ctx) {
      new ChartJS(ctx, {
        type: 'bar',
        data: {
          labels: label,
          datasets: data
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
            },
            y: {
              ticks: {
                  minRotation: 0,
              }
            },
          },
          plugins: {
            tooltip: {
              backgroundColor: '#FFFFFF',
              padding: 10,
              borderWidth: 1,
              borderColor: 'rgba(39, 46, 57, 0.16)',
              cornerRadius: 8,
              titleColor: 'black',
              bodyColor: 'black',
              footerColor: 'black',
              usePointStyle: true,
              callbacks: {
                labelPointStyle: () => {
                  return {
                    pointStyle: 'circle',
                    rotation: 0,
                  };
                },
              }
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
     