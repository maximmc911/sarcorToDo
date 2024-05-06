<script setup>
import { openModal } from './index';
</script>

<template>
    <div class="container" v-if="openModal">
        <div class="background__modal">
        </div>
        <div class="modal">
            <header>
                <h3>Подтверждение</h3>
            </header>
            <main>
                Вы точно желаете удалить данный элемент?
            </main>
            <footer>
                <slot></slot>
            </footer>
        </div>

    </div>
</template>


<style scoped>
.background__modal {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgb(19, 18, 18);
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.1;
}

.modal {
    position: fixed;
    width: 300px;
    height: 150px;
    z-index: 10;
    top: 40%;
    left: 40%;
    opacity: 1;
    background: rgb(215, 215, 229);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 15px;
    border: none;
    border-radius: 15px;
}
</style>
