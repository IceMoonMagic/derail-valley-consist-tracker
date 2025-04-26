<script lang="ts" setup>
import { watch } from "vue"
import { Engine } from "../train"

const inputs = defineProps({
  cut: Number,
})
const engine = defineModel<Engine>({ required: true })
const emits = defineEmits(["left", "delete", "right", "main"])

watch(engine.value, (updated) => {
  console.log(updated)
  updated.loco_code = updated.loco_code.toUpperCase()
})
</script>

<template>
  <div class="grid w-[12em] grid-cols-2">
    <input
      :style="`background: ${engine.color};`"
      class="col-span-2 text-center text-2xl text-black"
      type="text"
      v-model="engine.loco_code"
    />
    <label :style="`border-color: ${engine.color};`" class="border-l-2">
      Mass
    </label>
    <label
      :style="`border-color: ${engine.color}`"
      class="border-r-2 text-left"
    >
      {{ engine.mass }}
    </label>
    <label :style="`border-color: ${engine.color};`" class="border-l-2">
      Length
    </label>
    <label
      :style="`border-color: ${engine.color}`"
      class="border-r-2 text-left"
    >
      {{ engine.length }}
    </label>
    <label :style="`border-color: ${engine.color};`" class="border-l-2">
      Rating
    </label>
    <label
      :style="`border-color: ${engine.color}`"
      class="border-r-2 text-left"
    >
      {{ engine.load_rating }}
    </label>
    <label :style="`border-color: ${engine.color};`" class="border-l-2">
      Facing
    </label>
    <span :style="`border-color: ${engine.color}`" class="border-r-2 text-left">
      <input type="checkbox" v-model="engine.facing_right"
    /></span>
    <label :style="`border-color: ${engine.color};`" class="border-l-2">
      Running
    </label>
    <span :style="`border-color: ${engine.color}`" class="border-r-2 text-left">
      <input type="checkbox" v-model="engine.running" />
    </span>
    <label :style="`border-color: ${engine.color};`" class="border-l-2">
      Cut
    </label>
    <label
      :style="`border-color: ${engine.color}`"
      class="border-r-2 text-left"
    >
      {{ inputs.cut || 0 }}
    </label>

    <span
      :style="`border-color: ${engine.color};`"
      class="col-span-2 w-full border-x-2"
      ><button :disabled="inputs.cut == 0" @click="emits('main')">
        Main
      </button></span
    >
    <span
      :style="`border-color: ${engine.color}`"
      class="col-span-2 border-2 border-t-0"
    >
      <button @click="emits('left')" class="w-1/3"><-</button>
      <button @click="emits('delete')" class="w-1/3">X</button>
      <button @click="emits('right')" class="w-1/3">-></button>
    </span>
  </div>
</template>
