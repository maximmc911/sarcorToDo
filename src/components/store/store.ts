import { defineStore } from "pinia";
import { GeneratorID } from "../mixin/functions";

export const useStore = defineStore("useStore", {
  state: () => {
    return {
      items: [] as TodoList[],
    };
  },
  actions: {
    GetData() {
      if (localStorage.getItem(`ToDoList`) === null) {
        localStorage.setItem(`ToDoList`, ``);
      } else {
        if (this.items.length !== 0) return;
        const dataLocalStorage: string | any = localStorage.getItem(`ToDoList`);
        this.items.push(...JSON.parse(dataLocalStorage));
      }
    },
    PostData(el: string) {
      this.items.push({
        id: GeneratorID(),
        name: el,
        items: [],
      });
      localStorage.removeItem(`ToDoList`);
      localStorage.setItem(`ToDoList`, JSON.stringify(this.items));
    },
    DeleteData(el: number) {
      localStorage.removeItem(`ToDoList`);
      const updateStore = this.items.filter((e: { id: number }) => e.id !== el);
      localStorage.setItem(`ToDoList`, JSON.stringify(updateStore));
      this.items.length = 0;
      this.items.push(...updateStore);
    },
    UpdateData(el: TodoList) {
      localStorage.removeItem(`ToDoList`);
      const updateStore = this.items.filter(
        (e: { id: number }) => e.id !== el.id
      );
      updateStore.unshift(el);
      localStorage.setItem(`ToDoList`, JSON.stringify(updateStore));
      this.items.length = 0;
      this.items.push(...updateStore);
    },
  },
});
