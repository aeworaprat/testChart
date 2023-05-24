<template>
  <canvas ref="multiChart"></canvas>
</template>

<script setup lang="ts">
import { data, label } from '@/data/mutiline';
import { Chart as ChartJS, registerables, type ChartTypeRegistry, type TooltipModel, type TooltipItem } from 'chart.js';
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
              enabled: false,
              external: externalTooltipHandler
            },
          },
        },
      });
    }
  }
}

const getOrCreateTooltip = (chart:  ChartJS<keyof ChartTypeRegistry>) => {
  let tooltipEl = chart.canvas.parentNode!.querySelector('div');
  if (!tooltipEl) {
    tooltipEl = document.createElement('div');
    tooltipEl.classList.add('tooltip-custom');
    const table = document.createElement('table');
    table.style.margin = '0px';
    tooltipEl.appendChild(table);
    chart.canvas.parentNode!.appendChild(tooltipEl);
  }
  return tooltipEl;
};

const externalTooltipHandler = (context: any) => {
  const {chart, tooltip} = context;
  const tooltipEl = getOrCreateTooltip(chart);
  // Hide if no tooltip
  if (tooltip.opacity === 0) {
    tooltipEl.style.opacity = '0';
    return;
  }

  // Set Text
  if (tooltip.body) {
    const titleLines = tooltip.title || [];
    const bodyLines = tooltip.body.map((b: { lines: any; }) => b.lines);
    const tableHead = document.createElement('thead');

    titleLines.forEach((title: any) => {
      const tr = document.createElement('tr');
      const th = document.createElement('th');
      th.style.fontWeight = 'bold';
      const text = document.createTextNode(title);
      th.appendChild(text);
      tr.appendChild(th);
      tableHead.appendChild(tr);
    });

    const tableBody = document.createElement('tbody');
    bodyLines.forEach((body: string, i: string | number) => {
      const colors = tooltip.labelColors[i];
      const span = document.createElement('span');
      span.style.background = colors.backgroundColor;
      span.style.borderColor = colors.borderColor;
      span.style.borderWidth = '2px';
      span.style.marginRight = '10px';
      span.style.borderRadius = '50%';
      span.style.height = '10px';
      span.style.width = '10px';
      span.style.display = 'inline-block';

      const tr = document.createElement('tr');
      tr.style.backgroundColor = 'inherit';
      const td = document.createElement('td');
      const text = document.createTextNode(body);

      td.appendChild(span);
      td.appendChild(text);
      tr.appendChild(td);
      tableBody.appendChild(tr);
    });

    const tableRoot = tooltipEl.querySelector('table');

    // Remove old children
    while (tableRoot!.firstChild) {
      tableRoot!.firstChild.remove();
    }

    // Add new children
    tableRoot!.appendChild(tableHead);
    tableRoot!.appendChild(tableBody);
  }

  const {offsetLeft: positionX, offsetTop: positionY} = chart.canvas;
  console.log(tooltip.caretX, tooltip.caretY)
  console.log(tooltip.x, tooltip.y)
  console.log(tooltip, tooltip)


  // Display, position, and set styles for font
  tooltipEl.style.opacity = '1';
  tooltipEl.style.left = positionX + tooltip.caretX + 'px';
  tooltipEl.style.top = positionY + tooltip.caretY + 'px';
  tooltipEl.style.font = tooltip.options.bodyFont.string;
  tooltipEl.style.padding = tooltip.options.padding + 'px ' + tooltip.options.padding + 'px';
};

</script>
<style>
.tooltip-custom {
  opacity: 1; 
  background-color:rgba(255, 255, 255, 0.7);
  padding: 10px;
  box-shadow: 1px 1px 12px rgba(39, 46, 57, 0.16);
  border-radius: 8px;
  pointer-events: none;
  position: absolute;
  transform: translate(-50%, 0);
  transition: 'all .1s ease'
}
</style>
