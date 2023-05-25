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
	
	const tooltip = d3.select('.tooltip').style('display', 'none')

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

    const color = d3.scaleOrdinal()
		.domain(['task_call_in','task_call_out','follow','email', 'meeting', 'support', 'call_call_in', 'call_call_out'])
        .range(colors);

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
			.on('mousemove', pointermouseover)
			.on('mouseout', pointerleft)


	});

	function pointermouseover(e: MouseEvent, d: d3.SeriesPoint<any>) {
        let tooltipText = `${d.data.name}<br/>`;
        Object.keys(data[0]).forEach((key: string) => {
            if (key !== "name") {
            tooltipText += `<span style="background: ${color(key)}" class="tooltip-circle"></span>
                ${key}: <b class='tooltip-value'>${d.data[key]}<b><br/>`;
            }
        });

        tooltip.style('display', 'block')
            .style('left', `${e.pageX + 20}px`)
            .style('top', `${e.pageY - 20}px`)
            .style('color', '#212121')
            .html(`${tooltipText}`)
    }

    function pointerleft(){
        tooltip.style('display', 'none')
    }
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
	.tooltip-value {
        font-weight: 700;
    }
    .tooltip-circle{
        margin-right: 10px; 
        border-radius: 50%; 
        height: 10px; 
        width: 10px; 
        display: inline-block
    }

</style>