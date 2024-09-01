<template>
  <li class="hover:bg-green-700 py-2 px-2 text-nowrap">
    <NuxtLink :to active-class="text-red-400"><slot /></NuxtLink>
  </li>
</template>
<script setup lang="ts">
defineProps<{
  to: string
}>();
</script>