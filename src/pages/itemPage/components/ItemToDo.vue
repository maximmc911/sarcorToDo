<script setup lang='ts'>
import { ref, watch } from 'vue';
import { UpdateText } from '../../../components/mixin/functions';
import { Delete, Edit, Check, CircleCloseFilled } from '@element-plus/icons-vue';
import { dataItem } from './localSave.ts'
const props = defineProps({
    prop: {
        type: Object,
    },

})

const input = ref<string>(``);
const inputOpen = ref<boolean>(false);
input.value = props.prop?.name;

// Редактирование пунктов
watch(() => input.value,
    () => {
        dataItem.note?.items.forEach((el: { name: string; id: number; }) => {
            if (el.id === props.prop?.id) { el.name = input.value }
        });

    })


// Отметка о выполнении пункта
const HandleCheck = (): void => {
    dataItem.note?.items.forEach((el) => {
        if (el.id === props.prop?.id) { el.status = !el.status }
    });
}

const HandleSent = (): void => {
    inputOpen.value = !inputOpen.value;
}


// Отметка об удалении задачи из списка todo

const HandleDelete = (): void => {
    dataItem.note?.items.forEach((el: items) => {
        if (el.id === props.prop?.id) { dataItem.note?.items.splice(dataItem.note?.items.indexOf(el), 1) }
    });
}

</script>
<template>
    <section>
        <div class="check" v-if="!inputOpen">
            <el-checkbox :checked="props.prop?.status" :label="UpdateText(input, 40)" @click="HandleCheck" />
            <div class="btn">
                <el-button type="primary" :icon="Edit" style="width: 10px;" size="small" @click="HandleSent" />
                <el-button type="danger" :icon="Delete" style="width: 10px;" size="small" @click="HandleDelete" />
            </div>
        </div>
        <div class="check" v-else>
            <el-input v-model="input" class="input" placeholder="Название новой задачи" clearable />
            <div class="btn">
                <el-button type="success" :icon="Check" style="width: 5px;" size="small" @click="HandleSent" />
                <el-button type="danger" :icon="CircleCloseFilled" style="width: 5px;" size="small"
                    @click="HandleSent" />
            </div>
        </div>
    </section>
</template>



<style scoped>
.check {
    display: flex;
    width: 330px;
    gap: 5px;
    justify-content: space-between;
    align-items: center;
}

.btn {
    display: flex;
}
</style>