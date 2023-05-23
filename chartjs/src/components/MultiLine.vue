<template>
  <canvas ref="multiChart"></canvas>
</template>

<script setup lang="ts">
import { data, label } from '@/data/mutiline';
import { Chart as ChartJS, registerables } from 'chart.js';
import { ref, onMounted } from 'vue';

ChartJS.register(...registerables);
const multiChart = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
  renderChart();
});

function renderChart() {
  if (multiChart.value) {
    const ctx = multiChart.value.getContext('2d');
    if (ctx) {
      new ChartJS(ctx, {
        type: 'line',
        data: {
          labels: label,
          datasets: data,
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
              ticks: {
                // padding: 50
              },
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
            },
          },
        },
      });
    }
  }
}
</script>

<style>

</style>
