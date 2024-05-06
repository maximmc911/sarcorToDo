  <script setup lang='ts'>
  import { ref, watch } from 'vue'
  import { useStore } from '../../../components/store/store';
  const input = ref('')
  const store = useStore()
  watch(() => input.value,
    () => {
      if (input.value.charAt(0) === ' ') input.value = '';

    })
  const HandleSent = (): void => {
    if (input.value.length === 0) return
    store.PostData(input.value)
    input.value = ``;
  }
</script>
<template>
  <div class="container">
    <el-input v-model="input" class="input" placeholder="Название нового todo list" clearable />
    <el-button type="success" @click="HandleSent">Создать</el-button>
  </div>
</template>


<style scoped>
.container {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin: 20px;
  align-items: center;


}

.input {
  width: 80vw;
  height: 30px;
}
</style>