<script setup lang='ts'>
import { Back, Check, Delete, Edit } from '@element-plus/icons-vue'
import CircularProgress from '../../components/progress/CircularProgress.vue';
import Card from './components/Card.vue';
import { useRoute } from 'vue-router';
import { useStore } from '../../components/store/store';
import { dataItem } from './components/localSave'
import { ReceivingInterest } from '../../components/mixin/functions'
import { ControlModal } from '../../components/modal/index'
import { router } from '../../router/router';
import { ref } from 'vue';
import ModalWindow from '../../components/modal/ModalWindow.vue';
const route = useRoute();
const store = useStore();
const controller = ref<string>(`get`)

const HandleUpdateDataItem = (el: string): void => {
    ControlModal()
    controller.value = el;
}

const UpdateDataItem = (el: boolean) => {
    switch (controller.value) {
        case `delete`:
            el ? ControlModal() : null
            router.push('/');
            store.DeleteData(Number(route.path.slice(6)));
            break;
        case `get`:
            el ? ControlModal() : null
            dataItem.note = JSON.parse(JSON.stringify(store.items.find((el: { id: number; }) => el.id === Number(route.path.slice(6)))))
            break;
        default:
            console.log(`некорректная передача данных`);
            break;
    }
}
UpdateDataItem(false)





</script>
<template>
    <div>
        <header>
            <h1>Заметка № {{ route.path.slice(6) }}</h1>
        </header>
        <main>
            <Card />
            <div class="card">

                <CircularProgress :prop="ReceivingInterest(dataItem.note?.items)" />
            </div>
        </main>
        <footer>
            <div @click="dataItem.note = null">
                <el-button type="primary" :icon="Back" size="medium" @click="$router.push('/')"> Назад </el-button>
            </div>
            <el-button type="success" :icon="Check" size="medium" @Click="store.UpdateData(dataItem.note)"> Сохранить
            </el-button>
            <el-button type="danger" :icon="Delete" size="medium" @click=" HandleUpdateDataItem(`delete`)"> Удалить
            </el-button>
            <el-button type="warning" :icon="Edit" size="medium" @click=" HandleUpdateDataItem(`get`)"> Отменить
                редактирование </el-button>
        </footer>
        <ModalWindow>
            <el-button type="success" size="small" @click="ControlModal">отмена</el-button>
            <el-button type="danger" size="small" @click="UpdateDataItem(true)">удалить</el-button>
        </ModalWindow>
    </div>
</template>



<style scoped>
main {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 80px;
    margin: 20px;
}

h1 {
    margin: 20px 20px 50px;
}

footer {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 10px;
}

@media (max-width: 600px) {
    .container {
        flex-wrap: wrap;
        gap: 20px;
    }
}
</style>