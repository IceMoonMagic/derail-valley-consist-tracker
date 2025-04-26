<script lang="ts" setup>
import { computed, watch } from "vue"
import { Consist } from "../train"
import {
  job_color_from_order,
  station_color_from_order,
  station_color_from_track,
} from "../stations"

const inputs = defineProps({
  cut: Number,
})
const consist = defineModel<Consist>({ required: true })
const emits = defineEmits(["left", "delete", "right"])

const job_color = computed(() => job_color_from_order(consist.value.order))
const origin_color = computed(() =>
  station_color_from_order(consist.value.order),
)
const destination_color = computed(() =>
  station_color_from_track(consist.value.destination),
)

watch(consist.value, (updated) => {
  console.log(updated)
  updated.order = updated.order.toUpperCase()
  updated.destination = updated.destination.toUpperCase()
})
</script>

<template>
  <div class="grid h-fit w-[12em] grid-cols-2">
    <input
      :style="`background: ${job_color};`"
      class="col-span-2 text-center text-2xl text-black"
      type="text"
      v-model="consist.order"
    />
    <label :style="`border-color: ${origin_color};`" class="border-l-2">
      Mass
    </label>
    <input
      :style="`border-color: ${origin_color}`"
      class="border-r-2"
      min="0"
      type="number"
      v-model="consist.mass"
    />
    <label :style="`border-color: ${origin_color};`" class="border-l-2">
      Length
    </label>
    <input
      :style="`border-color: ${origin_color}`"
      class="border-r-2"
      min="0"
      type="number"
      v-model="consist.length"
    />
    <label :style="`border-color: ${origin_color};`" class="border-l-2">
      Cars
    </label>
    <input
      :style="`border-color: ${origin_color}`"
      class="border-r-2"
      min="1"
      type="number"
      v-model="consist.cars"
    />
    <input
      :style="`background: ${destination_color};`"
      class="col-span-2 text-center text-2xl text-black"
      type="text"
      v-model="consist.destination"
    />
    <label :style="`border-color: ${origin_color};`" class="border-l-2">
      Cut
    </label>
    <label
      :style="`border-color: ${origin_color}`"
      class="border-r-2 text-left"
    >
      {{ inputs.cut || 0 }}
    </label>
    <span
      :style="`border-color: ${origin_color}`"
      class="col-span-2 border-2 border-t-0"
    >
      <button @click="emits('left')" class="w-1/3"><-</button>
      <button @click="emits('delete')" class="w-1/3">X</button>
      <button @click="emits('right')" class="w-1/3">-></button>
    </span>
  </div>
</template>
