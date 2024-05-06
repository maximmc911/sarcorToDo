<script lang="ts" setup>
const props = defineProps({
  prop: {
    type: Number,
    required: true,
  }
})
</script>
<template>
  <el-progress :percentage="props.prop" color="blue" />
</template>
<style scoped>
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  max-width: 600px;
}
</style>