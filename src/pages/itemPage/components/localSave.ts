import { reactive } from "vue";

interface localItem {
    note?: TodoList | null
}
export const dataItem = reactive<localItem>({})