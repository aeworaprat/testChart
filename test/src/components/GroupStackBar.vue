<template>
    <div>
		<svg></svg>
		<div class="tooltip"></div>
	</div>
</template>

<script setup lang="ts">
import * as d3 from 'd3';
import { onMounted  } from 'vue';
import { data, colors } from '@/data/groupstackbar'
import type { IGroupBar } from '@/data/groupBar'

onMounted(() => {
	draw()
})

function draw(){

	const width = 800 
    const height = 400

	const svg = d3.select('svg')
        .attr('width', width)
        .attr('height', height)
		.style("overflow", "visible")
		.style("overflow", "visible")
	
	const datasets = [
        d3.stack().keys(['task_call_in','task_call_out','follow','email', 'meeting', 'support'])(data as any),		  
        d3.stack().keys(['call_call_in', 'call_call_out'])(data as any)
    ];

	const xlabels = data.map(function(d){return d['name']});

	const xScale = d3.scaleBand()
        .domain(xlabels)
        .range([0,width])
        .padding(0.5);
    
	const maxValue = d3.max(datasets.flat().map(function(row) {
        return d3.max(row.map(function(d){return d[1];}))!;
    }));

    const yScale = d3.scaleLinear()
        .domain([0, maxValue!])
        .range([height, 0]);

    const color = d3.scaleOrdinal(colors);

	const xAxis = d3.axisBottom(xScale)
		.tickSize(0)
        .tickPadding(8)

	const yAxis = d3.axisLeft(yScale)
        .tickSize(0)
        .tickPadding(6)

	svg.append('g')
		.attr('class','axis x')
		.attr('transform','translate(0,'+(height)+")")
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

	d3.range(datasets.length).forEach(function(num) {
		svg.selectAll('g.group'+num)
			.data(datasets[num])
			.enter()
			.append('g')
				.attr('fill', color as any)
				.attr('class', 'group' + num)
			.selectAll('rect')
			.data(d => d)
			.enter()
			.append('rect')
				.attr('x',(d,i)=> xScale(xlabels[i])! + (xScale.bandwidth()/datasets.length) * num)
				.attr('y',d=>yScale(d[1]))
				// .attr('width', xScale.bandwidth() / datasets.length)
				.attr('width', 40)
				.attr('height',d=>yScale(d[0])-yScale(d[1]))
				.attr('stroke', '#FFFFFF')
        		.attr('stroke-width', 1)
			});
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