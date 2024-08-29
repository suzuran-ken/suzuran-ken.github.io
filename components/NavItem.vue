<template>
  <li class="hover:bg-green-700">
    <NuxtLink :to active-class="text-red-400"><slot /></NuxtLink>
  </li>
</template>
<script setup lang="ts">
defineProps<{
  to: string
}>();
</script>