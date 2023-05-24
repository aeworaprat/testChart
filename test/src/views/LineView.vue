<template>
    <Line :data="currentData" :title="currentLabel" /> 
    <button @click="setData(data1, label1)">Data 1</button>
    <button @click="setData(data2, label2)">Data 2</button>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import type { ILine } from "@/data/line";
import Line from '../components/Line.vue'

//data 1
const label1 = 'จำนวนสัตว์ (ตัว)'
const data1: ILine[] = [
  { label: 'หมู', value: 10, other: []},
  { label: 'หมา', value: 20, other: [] },
  { label: 'กา', value: 35, other: [] },
  { label: 'ไก่', value: 25, other: [] },
  { label: 'นก', value: 40, other: [] },
  { label: 'ห่าน', value: 18, other: [] },
  { label: 'แมว', value: 10, other: [] },
];

//data 2
const label2 = 'Value (%)'
const data2: ILine[] = [
  { label: '01/01/2020', value: 10, other: [
    {label: 'Test1', value: 4,},
    {label: 'Test2', value: 6,}
  ]},
  { label: '03/01/2020', value: 20, other: [] },
  { label: '06/01/2020', value: 15, other: [] },
  { label: '09/02/2020', value: 25, other: [] },
  { label: '12/01/2020', value: 30, other: [] },
  { label: '15/01/2020', value: 18, other: [] },
  { label: '18/01/2020', value: 18, other: [] },
  { label: '21/01/2020', value: 18, other: [] },
  { label: '24/01/2020', value: 18, other: [] },
  { label: '27/01/2020', value: 18, other: [] },
  { label: '31/01/2020', value: 18, other: [] },
];
const currentData = ref<ILine[]>(data2)
const currentLabel = ref<string>(label1)

function setData(data: ILine[], label: string){
  currentData.value = data
  currentLabel.value = label
}

</script>
<style>

</style>
