<script lang="ts" setup>
import { computed } from "vue"
import { Consist } from "../train"
import { job_color_from_order, station_color_from_track } from "../stations"

const inputs = defineProps({
  cut: Number,
})
const consist = defineModel<Consist>({ required: true })

const job_color = computed(() => job_color_from_order(consist.value.order))
const destination_color = computed(() =>
  station_color_from_track(consist.value.destination),
)
</script>

<template>
  <div class="grid grid-cols-2">
    <input
      :style="`background: ${job_color};`"
      class="col-span-2 text-center text-2xl text-black"
      type="text"
      v-model="consist.order"
    />
    <label>Mass:</label>
    <input min="0" type="number" v-model="consist.mass" />
    <label>Length:</label>
    <input min="0" type="number" v-model="consist.length" />
    <label>Cars:</label> <input min="1" type="number" v-model="consist.cars" />

    <input
      :style="`background: ${destination_color};`"
      class="col-span-2 text-center text-2xl text-black"
      type="text"
      v-model="consist.destination"
    />
    <label>Cut: </label>
    <label class="text-left"> {{ inputs.cut || 0 }} </label>
  </div>
</template>
