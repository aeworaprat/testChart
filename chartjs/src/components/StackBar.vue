<template>
  <canvas ref="stackChart"></canvas>
</template>
   
<script setup lang="ts">
import { Chart as ChartJS, registerables } from 'chart.js';
import { ref, onMounted } from 'vue';
import { data, label } from '@/data/stackbar'
   
ChartJS.register(...registerables);
const stackChart = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
  renderChart();
});

function renderChart(){
 if (stackChart.value) {
   const ctx = stackChart.value.getContext('2d');
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
            stacked: true,
            grid: {
                display: false,
            },
          },
          y: {
            stacked: true,
            beginAtZero: true,
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
   