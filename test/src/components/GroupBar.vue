<template>
    <div>
         <svg></svg>
         <div class="tooltip"></div>
     </div>
 </template>
 
 <script setup lang="ts">
 import * as d3 from 'd3';
 import { onMounted  } from 'vue';
 import { data, column, colors } from '@/data/groupBar'
 import type { IGroupBar } from '@/data/groupBar'
 
 onMounted(() => {
     draw()
 })
 
 function draw(){
     const svg = d3.select("svg");
     svg.selectAll("*").remove();
 
     const width = 800;
     const height = 400;
     const margin = { top: 40, right: 40, bottom: 30, left: 40 };
 
     svg.attr("width", width)
     .attr("height", height)
     .attr("font-size", 10)
     .style("overflow", "visible")
 
    //  const tooltip = d3.select('.tooltip');
 
    const max = d3.max(data, d => {
    const values = Object.values(d).slice(1);
        return d3.max(values);
    })!;
    const maxValue = max + (10 - (max % 10));
 
    const xScale = d3.scaleBand()
        .domain(data.map(d => d.name))
        .range([0, width])
        .padding(0.5);
    
    const yScale = d3.scaleLinear()
        .domain([0, maxValue])
        .range([height, 0]);
 
    const xAxis = d3.axisBottom(xScale)
         .tickSize(0)
         .tickPadding(8);
     
    const yAxis = d3.axisLeft(yScale)
         .ticks(9)
         .tickSize(0)
         .tickPadding(6)
 
     // Add x-axis
    svg.append('g')
         .attr("transform", `translate(0,${height})`)
         .call(xAxis);
 
    svg.append('g')
        .call(yAxis)
        .call(g => g.selectAll(".tick line")
            .attr("stroke", "#A0ABBA").clone()
            .attr("x2", width)
            .attr("stroke-opacity",   0.3))
        .call(g => g.select(".domain").remove())
        .call(g => g.append("text")
            .attr('transform', 'rotate(-90)')
            .attr('x', -(height / 2))
            .attr('y', -50) // Relative to the y axis.
            .attr("fill", "currentColor")
            .attr("text-anchor", "start")
            .text('ssss'))
            
    const xSubgroup = d3.scaleBand()
        .domain(column)
        .range([0, xScale.bandwidth()])
        .padding(0.2)

    const color = d3.scaleOrdinal()
        .domain(column)
        .range(colors)

    svg.selectAll(".group")
        .data(data)
        .enter()
        .append("g")
        .attr("class", "group")
        .attr("transform", d => `translate(${xScale(d.name)}, 0)`)
        .selectAll("rect")
        .data(d => Object.keys(d).slice(1).map(key => ({ key, value: d[key as keyof IGroupBar] })))        .enter()
        .append("rect")
        .attr("x", d => xScale.bandwidth() * (color.domain().indexOf(d.key) / color.domain().length))
        .attr("y", d => yScale(d.value as number))
        .attr('rx', 2)
        .attr("width", xSubgroup.bandwidth())
        .attr("height", d => height - yScale(d.value as number))
        .attr("fill", d => color(d.key) as string)
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
 
 </style>