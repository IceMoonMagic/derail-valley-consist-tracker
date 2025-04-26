<script lang="ts" setup>
import { ref } from "vue"
import { Train } from "./train"
import Consist from "./components/Consist.vue"
import Engine from "./components/Engine.vue"

const train = ref<Train>(new Train([]))

function swap(a: number, b: number): void {
  if (
    a < 0 ||
    b < 0 ||
    a >= train.value.consists.length ||
    b >= train.value.consists.length
  )
    return
  const temp = train.value.consists[b]
  train.value.consists[b] = train.value.consists[a]
  train.value.consists[a] = temp
}
function remove(i: number): void {
  train.value.consists.splice(i, 1)
}
</script>

<template>
  <label>
    | Load Rating: {{ train.total_load_rating.toFixed(2) }}t | Mass:
    {{ train.total_mass.toFixed(2) }}t | Length:
    {{ train.total_length.toFixed(2) }}m | Cars:
    {{ train.total_cars.toFixed(0) }} |
  </label>
  <br />
  <button @click="train.new_engine">Add Consist</button>
  <div class="flex flex-wrap justify-center gap-8">
    <Engine
      @delete="remove(i - 1)"
      @left="swap(i - 1, i - 2)"
      @right="swap(i - 1, i)"
      v-for="i in train.consists.length"
      v-model="train.consists[i - 1]"
    />
    <!-- <Consist
      @delete="remove(i - 1)"
      @left="swap(i - 1, i - 2)"
      @right="swap(i - 1, i)"
      v-for="i in train.consists.length"
      v-model="train.consists[i - 1]"
    /> -->
  </div>
</template>
