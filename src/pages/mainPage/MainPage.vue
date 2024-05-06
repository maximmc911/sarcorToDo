<script setup lang='ts'>
import Search from './components/Search.vue'
import Card from './components/Card.vue'
import { useStore } from '../../components/store/store.ts';
const store = useStore()
store.GetData()

</script>
<template>
  <div>
    <nav>
      <Search />
    </nav>
    <main>
      <div class="cards" v-if="store.items.length !== 0">
        <div v-for="(item) in store.items" :key="item.id">
          <Card :prop="item" />
        </div>
      </div>
      <div class="cards" v-else>
        <h3>К сожалению, пока не создано ни одной заметки</h3>
      </div>
    </main>
  </div>
</template>


<style scoped>
.cards {
  margin: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
</style>