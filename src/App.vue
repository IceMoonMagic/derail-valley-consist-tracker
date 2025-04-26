<script lang="ts" setup>
import { ref } from "vue"
import { Train, Consist as ConsistType } from "./train"
import Consist from "./components/Consist.vue"

const foo = ref<ConsistType>(new ConsistType("hi", 0, 0, 0, "bye"))
const train = ref<Train>(new Train([foo.value]))
</script>

<template>
  <Consist v-for="i in train.consists.length" v-model="train.consists[i - 1]" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
