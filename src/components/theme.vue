<template>
  <p>isDark: {{ isDark }}</p>
  <button @click="toggleDark()" class="px-4 py-2 text-white bg-green-500 rounded">
    Toggle Dark Mode
  </button>
</template>

<script setup>
import {useDark, useToggle} from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<style>

</style>