<script lang="ts" setup>
import { ref } from "vue"
import { Train, Engine as EngineType, Consist as ConsistType } from "./train"
import Consist from "./components/Consist.vue"
import Engine from "./components/Engine.vue"

const train = ref<Train>(new Train([]))
train.value.new_engine()
const cut_from = ref<number>(0)

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
  if (cut_from.value == a) {
    cut_from.value = b
  } else if (cut_from.value == b) {
    cut_from.value = a
  }
}
function remove(i: number): void {
  train.value.consists.splice(i, 1)
  if (train.value.consists.length == 0) {
    train.value.new_engine()
  } else if (cut_from.value > i) {
    cut_from.value -= 1
  }
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
  <button @click="train.new_engine">Add Engine</button>
  <button @click="train.new_consist">Add Order</button>
  <div class="flex flex-wrap justify-center gap-8">
    <template v-for="i in train.consists.length">
      <Engine
        :cut="train.get_cut_from(i - 1, cut_from)"
        @delete="remove(i - 1)"
        @left="swap(i - 1, i - 2)"
        @main="cut_from = i - 1"
        @right="swap(i - 1, i)"
        v-if="train.consists[i - 1] instanceof EngineType"
        v-model="train.consists[i - 1]"
      />
      <Consist
        :cut="train.get_cut_from(i - 1, cut_from)"
        @delete="remove(i - 1)"
        @left="swap(i - 1, i - 2)"
        @right="swap(i - 1, i)"
        v-if="train.consists[i - 1] instanceof ConsistType"
        v-model="train.consists[i - 1]"
      />
    </template>
  </div>
</template>
