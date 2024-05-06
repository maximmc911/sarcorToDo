  <script lang="ts" setup>
  const props = defineProps({
  prop:{
    type: Number,
    required: true,
  }
})
  </script>
<template>
      <el-progress type="dashboard" :percentage="props.prop" color="#e6a23c" width='200'  />
  </template>
  