<template>
    <div>
      <svg></svg>
    </div>
</template>
<script setup lang="ts">
import * as d3 from "d3";
import { onMounted } from 'vue';

onMounted(() => {
    draw()
})

function draw(){
    const data = [
        {label: "B", value: 30, color: '#A699FF'},
        {label: "C", value: 20, color: '#7C6BF7'},
        {label: "D", value: 40, color: '#5847D7'},
    ]
    const width = 960;
    const height = 500;
    const margin = { top: 30, right: 20, bottom: 30, left: 40 };
    const svg = d3.select("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [0, 0, width, height])
        .style("overflow", "visible")

      
    const xScale = d3.scaleBand()
        .domain(data.map(d => d.label))
        .range([margin.left, width - margin.right])
        .padding(0.1);
  
    const yScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value) as any])
        .range([height - margin.bottom, margin.top]);

    svg.append("g")
        .selectAll()
        .data(data)
        .join("rect")
        .attr("fill", (d) => { return d.color})
        .attr("x", (d) => xScale(d.label) as any)
        .attr("y", (d) => yScale(d.value) as any)
        .attr("height", (d) => yScale(0) - yScale(d.value))
        .attr("width", xScale.bandwidth());

    // Add the x-axis and label.
    svg.append("g")
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(xScale).tickSizeOuter(0));

    // Add the y-axis and label, and remove the domain line.
    svg.append("g")
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(yScale))
    //   .call(g => g.select(".domain").remove())
      .call(g => g.append("text")
        .attr('transform', 'rotate(-90)')
        .attr('x', -(margin.top + (height - margin.top - margin.bottom) / 2))
        .attr('y', -50) // Relative to the y axis.
        .attr("fill", "currentColor")
        .attr("text-anchor", "start")
        .text("Value (%)"));
}





</script>