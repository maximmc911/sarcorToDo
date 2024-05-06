<script setup lang='ts'>
import { ref, watch } from 'vue';
import ItemToDo from './ItemToDo.vue'
import { dataItem } from './localSave'
import { GeneratorID } from '../../../components/mixin/functions';


const input = ref<string>('');
const inputOpen = ref(false);
watch(() => input.value,
    () => {
        if (input.value.charAt(0) === ' ') input.value = '';

    })
const HandleSent = (): void => {
    inputOpen.value = !inputOpen.value;
    if (input.value.length === 0) { return }
    dataItem.note?.items.push({
        id: GeneratorID(),
        name: input.value,
        status: false,
    })
    input.value = ``
    inputOpen.value = false;
}

</script>
<template>
    <div class="card">
        <header>
            <h2>{{ dataItem.note?.name }}</h2>
            <el-button type="primary" @click="HandleSent()">Добавить задачу</el-button>
        </header>
        <section class="section_input" v-if="inputOpen">
            <el-input v-model="input" class="input" placeholder="Название новой задачи" clearable />
            <el-button type="success" @click="HandleSent()">Создать</el-button>
        </section>
        <section class="item" v-if="dataItem.note?.items.length !== 0">
            <ItemToDo v-for="(item) in dataItem.note?.items" :key="item.id" :prop="item" />
        </section>
        <section class="item" v-else>
            <p>Нет задач</p>
        </section>
    </div>
</template>


<style scoped>
header {
    display: flex;
    justify-content: space-between;
    gap: 20px;
}
.item {
    margin-top: 10px;
}
.section_input {
    display: flex;
    gap: 5px;
    margin: 20px 0;
}
</style>