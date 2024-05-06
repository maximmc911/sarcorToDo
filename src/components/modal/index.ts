import { ref } from 'vue';

  export const openModal = ref<boolean>(false)
export const ControlModal = () : void=>{
openModal.value =!openModal.value;
}