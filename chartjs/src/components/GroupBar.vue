<template>
  <canvas ref="groubBar"></canvas>
  <div v-show="tooltipConfig.show" :style="{ top: `${tooltipConfig.top}px`, left: `${tooltipConfig.left}px`}" class="tooltip">
    <slot name="tooltip" :tooltipBody="tooltipBody">
      <div>{{ tooltipBody.name }}</div>
      <div v-for="(d ,index) in tooltipBody.data" :key="index">
          <div>
            <label :style="{ background: d.color} " class="tooltip-circle"></label>  
            {{ d.label }}:
            <b style="font-weight: bold;">{{ d.value }}</b>
          </div>
      </div>
  </slot>
  </div>
</template>
     
<script setup lang="ts">
import { Chart as ChartJS, registerables } from 'chart.js';
import { ref, onMounted } from 'vue';
import { data , label } from '@/data/groupbar'

interface ITooltipBody {
    name : string
    data: {
      label: string
      value: number
      color: string
    }[]
}

const tooltipConfig = ref({
  show: false,
  left: 0,
  top: 0,
}) 
const tooltipBody = ref<ITooltipBody>({
  data: [],
  name: ''
})

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
              enabled: false,
              external: externalTooltipHandler
            }
          }
        }
      });
    }
  }
}

function externalTooltipHandler(context: any){
  const {chart, tooltip} = context;

  // Set Text
  if (tooltip.body) {
    const bodyLines = tooltip.body.map((b: any) => b.lines);
    tooltipBody.value.name = ''
    tooltipBody.value.data = []

    tooltipBody.value.name = tooltip.title[0] || '';
    bodyLines.forEach((body: string, i: string | number) => {
      const valueSplit = body[0].trim().split(':')
      const colors = tooltip.labelColors[i];
      tooltipBody.value.data.push({
        color: colors.backgroundColor,
        label: valueSplit[0],
        value: +valueSplit[1],
      })
    });
  }

  tooltip.opacity === 0 ? tooltipConfig.value.show = false : tooltipConfig.value.show = true 
  const {offsetLeft: positionX, offsetTop: positionY} = chart.canvas;
  tooltipConfig.value.left = positionX + tooltip.caretX
  tooltipConfig.value.top = positionY + tooltip.caretY

}
</script>
<style>
.tooltip {
  position: absolute; 
  background-color:#FFFFFF;
  padding: 10px;
  box-shadow: 1px 1px 12px rgba(39, 46, 57, 0.16);
  border-radius: 8px;
}
.tooltip-circle{
  margin-right: 10px; 
  border-radius: 50%; 
  height: 10px; 
  width: 10px; 
  display: inline-block
}
</style>
     