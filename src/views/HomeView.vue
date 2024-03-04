<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';
const counterStore = useCounterStore();
const { count } = storeToRefs(counterStore);
</script>

<template>

  <section>

    <h1>Count: {{ count }}</h1>
  
    <button @click="counterStore.decrement" class="btn btn-outline-success px-5 me-2">
      -
    </button>

    <button @click="counterStore.increment" class="btn btn-outline-success px-5">
      +
    </button>

  </section>

</template>
