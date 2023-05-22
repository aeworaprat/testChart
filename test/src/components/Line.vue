<template>
  <div>
    <svg></svg>
  </div>
</template>

<script setup lang="ts">
import type { ILine } from "@/data/line";
import * as d3 from "d3";
import { onMounted, ref, watch, computed } from 'vue'
const props = withDefaults(defineProps<{
  data: ILine[]
  title: string
}>(), {
  data: undefined,
  title: '',
})
const title = ref(props.title)
const data = ref(props.data)
const labels = computed(() => data.value.map(x => x.label));
const values = computed(() => data.value.map(x => x.value));

watch(() => props.data, () => {
  data.value = props.data;
  title.value = props.title
  draw()
});

onMounted(() => {
  draw()
});

function draw(){
  const svg = d3.select("svg");
  svg.selectAll("*").remove();
  
  const width = 800;
  const height = 500;
  const margin = { top: 20, right: 20, bottom: 30, left: 40 };

  // Create SVG container
  svg.attr("width", width)
    .attr("height", height)
    .attr("font-size", 10)
    .style("overflow", "visible")
    .on("pointerenter pointermove", pointermoved)
    .on("pointerleave", pointerleft)

   const xScale =  d3.scalePoint()
    .domain(data.value.map(d => d.label))
    .range([margin.left, width - margin.right])

  const yScale = d3.scaleLinear()
    .domain([0, d3.max(data.value, d => d.value) as any])
    .range([height - margin.bottom, margin.top]);

  // Create line generator
  const line = d3.line<{ label: any; value: any }>()
    .x(d => xScale(d.label) as any)
    .y(d => yScale(d.value) as any)
    .curve(d3.curveCardinal);

  const area = d3.area<{ label: any; value: any }>()
    .x(d => xScale(d.label) as any)
    .y(d => yScale(d.value) as any)
    .y1(height - margin.bottom)
    .curve(d3.curveCardinal);
  
    // Fill line
  svg.append("path")
    .datum(data.value)
    .attr("class", "line")
    .attr("d", line)
    .attr('fill', 'red')
    .attr('stroke', '#5847D7')
    .attr('stroke-width', '3px')

  // Fill background color
  svg.append("path")
    .attr("fill", "#E9EAFF")
    .attr("d", area(data.value));

  // Add x-axis
  svg.append("g")
    .attr("class", "axis")
    .attr("transform", `translate(0, ${height - margin.bottom})`)
    .call(d3.axisBottom(xScale).ticks(data.value.length))

 // Add y-axis
  svg.append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(yScale))
    .call(g => g.select(".domain").remove())
    .call(g => g.selectAll(".tick line")
      .attr("stroke", "#A0ABBA").clone()
      .attr("x2", width - margin.left - margin.right)
      .attr("stroke-opacity",   0.3)
    )
    .call(g => g.append("text")
      .attr('transform', 'rotate(-90)')
      .attr('x', -(margin.top + height / 2))
      .attr('y', -50) // Relative to the y axis.
      .attr("fill", "currentColor")
      .attr("text-anchor", "start")
      .text(title.value));

  const tooltip = svg.append("g")
    .style("pointer-events", "none")
    
  const pointCircle = svg.append("circle")
    .attr("class", "point-circle")
    .attr("r", 3.5)
    .style("visibility", "hidden")
    .attr("fill", "#5847D7")
    .attr("stroke", "white");

  function pointermoved(event: MouseEvent | TouchEvent) {
      const [index] = d3.pointer(event)
      const i = Math.round((index - margin.left) / xScale.step());
      if(i >= 0){
        tooltip.style("display", 'block');
        tooltip.attr("transform", `translate(${xScale(labels.value[i])},${yScale(values.value[i])})`);
        pointCircle.attr("cx", xScale(labels.value[i]) as number)
          .attr("cy", yScale(values.value[i]) as number)
          .style("visibility", "visible");

        const path = tooltip.selectAll("path")
          .data([,])
          .join("path")
          .attr("fill", "#FFFFFF")
          .attr("fill-opacity", 0.9)
          .attr("stroke", "#E9ECF3")
          .attr("stroke-width", "1px")

        const textTooltip = `${labels.value[i]} \n Total Value: ${values.value[i]}`.split(/\n/)
        data.value[i].other.map(x => 
          textTooltip.push(`${x.label}: ${x.value}`)
        )
        
        const text = tooltip.selectAll("text")
          .data([,])
          .join("text")
          .call(text => text
            .selectAll("tspan")
            .data(textTooltip)
            .join("tspan")
            .attr("x", 0)
            .attr("y", (_, i) => `${i * 1.1}em`)
            .attr("class", "title")
            .text(d => d));
        
        const textNode = text.node() as SVGTextElement; // Explicitly cast to SVGTextElement
        const { x, y, width: w, height: h } = textNode.getBBox();
        text.attr("transform", `translate(${-w / 2},${15 - y})`);
        path.attr("d", `M${-w / 2 - 10},5H-5l5,-5l5,5H${w / 2 + 10}v${h + 20}h-${w + 20}z`);
      }
  }

  function pointerleft() {
    tooltip.style("display", "none");
    pointCircle.style("visibility", "hidden");
  }
}
</script>
<style>
  /* .line {
    fill: none;
    stroke: #5847D7;
    stroke-width: 3px;
  } */
  .grid-lines line {
    stroke: gray;
    stroke-opacity: 0.2;
  }
</style>
