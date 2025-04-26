<script lang="ts" setup>
import { ref } from "vue"
import { Train } from "./train"
import Consist from "./components/Consist.vue"

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
  <button @click="train.new_consist">Add Consist</button>
  <div class="flex flex-wrap justify-center gap-8">
    <Consist
      @delete="remove(i - 1)"
      @left="swap(i - 1, i - 2)"
      @right="swap(i - 1, i)"
      v-for="i in train.consists.length"
      v-model="train.consists[i - 1]"
    />
  </div>
</template>
