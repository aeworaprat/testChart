<template>
    <div>
        <svg></svg>
        <div class="tooltip"></div>
    </div>
</template>
<script setup lang="ts">
import * as d3 from "d3";
import { onMounted, ref, watch } from 'vue'
import type { IMultiLine } from "@/data/multiLine";

const props = withDefaults(defineProps<{
  data: IMultiLine[]
  title: string
  label: string[]
}>(), {
  data: undefined,
  title: '',
  label: undefined
})

const title = ref(props.title)
const data = ref(props.data)
const label = ref(props.label)

watch([
    () => props.data, 
    () => props.title, 
    () => props.label,
], () => {
  data.value = props.data;
  title.value = props.title
  label.value = props.label
  draw()
});

onMounted(() => {
    draw()
})
    
function draw(){
    const svg = d3.select("svg");
    svg.selectAll("*").remove();

    // Define margins, dimensions, and some line colors
    const width = 800;
    const height = 400;
    const margin = {top: 40, right: 40, bottom: 30, left: 40};

    svg.attr("width", width)
        .attr("height", height)
        .attr("font-size", 10)
        .style("overflow", "visible")
        .on('pointerenter mousemove', pointermoved)
        .on('mouseout', pointerleft)
        .call(responsivefy); // tada!;

    const tooltip = d3.select('.tooltip');
    const tooltipLine = svg.append('line');

    //get max value 
    const max = d3.max(data.value, d => d3.max(d.other, h => h.value))!
    const maxValue = max + (10 - max % 10)
    // Define the scales and tell D3 how to draw the line
    const xScale = d3.scalePoint()
        .domain(label.value)
        .range([margin.left, width - margin.right])

    const yScale = d3.scaleLinear()
        .domain([0, maxValue])
        .range([height, 0]);

    const line = d3.line<{ label: any; value: any }>()
        .x(d => xScale(d.label) as any)
        .y(d => yScale(d.value) as any)

    // Add the axes
    const xAxis = d3.axisBottom(xScale)
        .tickSize(0)
        .tickPadding(8);;

    const yAxis = d3.axisLeft(yScale)
        .tickFormat(d3.format('.1s'));

    // Add x-axis
    svg.append('g')
        .attr('transform', 'translate(0,'+height+')')
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
            .text(title.value))
    
    // Draw the lines
    svg.selectAll()
        .data(data.value).enter()
        .append('path')
        .attr('fill', 'none')
        .attr('stroke', d => d.color)
        .attr('stroke-width', 2)
        .datum(d => d.other)
        .attr('d', line);

    const tooltipCircleOuter = svg.selectAll('.circle-outer')
        .data(data.value)
        .enter()
        .append('circle')
        .attr('class', 'circle-outer')

    const tooltipCircle = svg.selectAll('.circle')
        .data(data.value)
        .enter()
        .append('circle')
        .attr('class', 'circle')



    function pointermoved(event: MouseEvent) {
        const [index] = d3.pointer(event)
        const i = Math.round((index - margin.left) / xScale.step());
        if(i != -1 && i < label.value.length){
            const xTitle = label.value[i]
            tooltip.style('display', 'block')
                .style('left', `${event.pageX + 20}px`)
                .style('top', `${event.pageY - 20}px`)
                .style('color', '#212121')
                .html(`${xTitle}`)
                .selectAll('div')
                .data(data.value).enter()
                .append('div')
                .style('color', '#212121')
                .html(d => `${d.name}: <b class='tooltip-value'>${d.other.find(h => h.label === label.value[i])!.value}</b>`);

            tooltipLine.attr('display', 'block')
                .attr('x1', xScale(label.value[i])!)
                .attr('x2', xScale(label.value[i])!)
                .attr('y1', 0)
                .attr('y2', height)
                .attr('stroke', '#F7F8FC')
                .attr('stroke-width', `${margin.left + margin.right}`)
                .attr("stroke-opacity",   1)

            tooltipCircleOuter.style('display', 'block')
                .attr('cx', xScale(label.value[i])!)
                .attr('cy', d => yScale(d.other.find(h => h.label === label.value[i])!.value))
                .attr('r', 9)
                .style('fill', d => d.color)
                .attr('opacity',0.3)

            tooltipCircle.style('display', 'block')
                .attr('cx', xScale(label.value[i])!)
                .attr('cy', d => yScale(d.other.find(h => h.label === label.value[i])!.value))
                .attr('r', 5)
                .style('fill', d => d.color)
                .attr("stroke", "#FFFFFF")
                .attr("stroke-width", "2px")
        }
    }

    function pointerleft() {
        tooltip.style('display', 'none');
        tooltipCircle.style("display", "none");
        tooltipCircleOuter.style("display", "none");
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

</style>