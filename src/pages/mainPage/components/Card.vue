    <script setup lang='ts'>
import LinearProgress from '../../../components/progress/LinearProgress.vue';
import {UpdateText, ReceivingInterest} from '../../../components/mixin/functions.ts'
import {Delete, Edit} from '@element-plus/icons-vue'
import ModalWindow from '../../../components/modal/ModalWindow.vue';
import {ControlModal} from '../../../components/modal/index.ts'
import { useStore } from '../../../components/store/store.ts';
const props = defineProps({
  prop:{
    type: Object,
    required: true,
  }
})
const store = useStore();
const HandleDelete = (): void =>{
  store.DeleteData(props.prop.id)

  ControlModal();
  
}
    </script>
<template>
 <div>
       <el-card style="width: 320px">
      <template #header>
        <div class="card-header">
          <span>{{ props.prop.name }}</span>
          <LinearProgress :prop="ReceivingInterest(props.prop.items)" v-if="props.prop.items.length !==0"/>
        </div>
      </template>
      <div class="list" v-if="props.prop.items.length !==0">
        <div v-for="(item) in props.prop.items.slice(0,3)" :key="item.id">

          <el-checkbox  :checked="item.status" disabled="true" :label="UpdateText(item.name, 35)" />
        </div>
        <p style="color:grey;" v-if="props.prop.items.length >= 3">.....</p>
      </div>
      <div class="list" v-else>
        <p>Список пуст, добавьте новые задачи через кнопку "редактирование"</p>
      </div>
      <template #footer >
  
          <el-button type="primary" :icon="Edit" size="small" @click="$router.push(`/list/${props.prop.id}`)" >
            
            Редактировать
          </el-button>    
        <el-button type="danger" :icon="Delete" size="small" @click="ControlModal" >Удалить</el-button>    
    
    </template>
    </el-card> 
    <ModalWindow>
      <el-button type="success"  size="small" @click="ControlModal">отмена</el-button>    
        <el-button type="danger"  size="small" @click="HandleDelete">удалить</el-button>  

    </ModalWindow>
  </div>
</template>

    
<style scoped>
    .card-header{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    #footer{
      display: flex;
      justify-content: space-between;
    }
</style>