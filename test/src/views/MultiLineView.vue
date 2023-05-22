<template>
    <div >
        <MultiLine :data="data" :label="label" :title="'Number of Customers'" />
    </div>
</template>
<script setup lang="ts">
import MultiLine from '@/components/MultiLine.vue';    
import { data, label} from '@/data/multiLine'
  
</script>
<style>
</style>
  