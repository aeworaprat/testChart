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
    const data = [
	  {
	    Category: "cat1",
	    type1: 300,
	    type2: 450,
	    type3: 120
	  },
	  {
	    Category: "cat2",
	    type1: 400,
	    type2: 100,
	    type3: 200
	  },
	  {
	    Category: "cat3",
	    type1: 400,
	    type2: 100,
	    type3: 200
	  },
	  {
	    Category: "cat4",
	    type1: 400,
	    type2: 100,
	    type3: 200
	  }
	];

	const width = 500 
    const height = 500
    const padding = 40;
	const svg = d3.select('svg')
        .attr('width', width)
        .attr('height', height);

	const stack = d3.stack()
        .keys(['type1','type2','type3']);
	
	const datasets=[
        d3.stack().keys(['type1','type3'])(data as any),		  
        d3.stack().keys(['type2'])(data as any)
    ];

	const num_groups = datasets.length;

	const xlabels = data.map(function(d){return d['Category']});

	const xScale = d3.scaleBand()
        .domain(xlabels)
        .range([0,width])
        .padding(0.5);

	const ydomain_min = d3.min(datasets.flat().map(function(row) {
        return d3.min(row.map(function(d){return d[1];}))!;
    }));
    

	const ydomain_max = d3.max(datasets.flat().map(function(row) {
        return d3.max(row.map(function(d){return d[1];}))!;
    }));

    const yscale = d3.scaleLinear()
        .domain([0,ydomain_max!])
        .range([height-padding,padding]);

    const accent = d3.scaleOrdinal(d3.schemeBlues[6]);
	const xaxis = d3.axisBottom(xScale);
	const yaxis = d3.axisLeft(yscale);

	d3.range(num_groups).forEach(function(gnum) {
		svg.selectAll('g.group'+gnum)
			.data(datasets[gnum])
			.enter()
			.append('g')
				.attr('fill', accent as any)
				.attr('class', 'group' + gnum)
			.selectAll('rect')
			.data(d=>d)
			.enter()
			.append('rect')
				.attr('x',(d,i)=> xScale(xlabels[i])! + (xScale.bandwidth()/num_groups) * gnum)
				.attr('y',d=>yscale(d[1]))
				.attr('width',xScale.bandwidth() / num_groups)
				.attr('height',d=>yscale(d[0])-yscale(d[1]));
			});

	svg.append('g')
			.attr('class','axis x')
			.attr('transform','translate(0,'+(height-padding)+")")
		.call(xaxis);
	svg.append('g')
			.attr('class','axis y')
			.attr('transform','translate('+padding+",0)")
		.call(yaxis);
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