<template>
   <div>
        <svg></svg>
        <div class="tooltip"></div>
    </div>
</template>

<script setup lang="ts">
import * as d3 from 'd3';
import { onMounted  } from 'vue';
import { data1, type ITest } from '@/data/stackBar'
import type { SeriesPoint } from 'd3';
onMounted(() => {
    draw()
})

function buildData(d: ITest[]){
    const colors = d[0].data.map(x => x.color)
    const column = d[0].data.map(x => x.label)
    const obj :{ [key: string]: number} = {}
    const data: any[] = []
    d.forEach((d) => {
        d.data.forEach((item) => {
            obj [item.label] = item.value
        })
        data.push({
            name: d.name,
            ...obj
        })
    })

    return {
        data,
        column,
        colors
    }
}

function draw(){
    const { colors, data, column } = buildData(data1)

    const svg = d3.select("svg");
    svg.selectAll("*").remove();

    const width = 800;
    const height = 400;
    const margin = { top: 40, right: 40, bottom: 30, left: 40 };

    svg.attr("width", width)
    .attr("height", height)
    .attr("font-size", 10)
    .attr("preserveAspectRatio", "xMinYMin meet")
    .style("overflow", "visible")

    const tooltip = d3.select('.tooltip').style('display','none');
    // list of value keys

   const max = d3.max(data, d => {
        const sum = d3.sum(Object.values(d).slice(1).map(Number));
        return sum;
    })!;
    const maxValue = max + (10 - max % 10);

    const xScale = d3.scaleBand()
    .domain(data.map(d => d.name))
    .range([0, width])
    .padding(.5);

    const yScale = d3.scaleLinear()
    .domain([0, maxValue!])
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

    // Add y-axis
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

    const color = d3.scaleOrdinal()
        .domain(column)
        .range(colors)

    const stack = d3.stack()
        .keys(column)
        .order(d3.stackOrderNone)
        .offset(d3.stackOffsetNone)

    const stackedData = stack(data as any)
    svg.append("g")
        .selectAll("g")
        .data(stackedData)
        .enter()
        .append("g")
        .attr("fill", d => color(d.key) as string)
        .selectAll("rect")
        .data(d => d)
        .join("rect")
        .attr("x",d => xScale(d.data.name.toString())!)
        .attr("y",d => yScale(d[1]))
        .attr("width", xScale.bandwidth())
        .attr("height", d => yScale(d[0]) - yScale(d[1]))
        .attr('stroke', '#FFFFFF')
        .attr('stroke-width', 1)
        .on('mousemove', pointermouseover)
        .on('mouseout', pointerleft)

    function pointermouseover(e: MouseEvent, d: SeriesPoint<any>) {
        let tooltipText = `${d.data.name}<br/>`;

        Object.keys(d.data).forEach((key: string) => {
            if (key !== "name" && key !== "key") {
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

    function responsivefy(svg: any) {
        const container = d3.select(svg.node().parentNode),
            width = parseInt(svg.style('width'), 10),
            height = parseInt(svg.style('height'), 10),
            aspect = width / height;

        svg.attr('viewBox', `0 0 ${width} ${height}`)
            .attr('preserveAspectRatio', 'xMinYMid')
            .call(resize);
        

        d3.select(window).on(
            'resize.' + container.attr('id'), 
            resize
        );
        
        function resize() {
            const w = parseInt(container.style('width'));
            svg.attr('width', w);
            svg.attr('height', Math.round(w / aspect));
        }
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