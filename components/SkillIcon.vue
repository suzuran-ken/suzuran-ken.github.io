<template>
  <!-- <img src="" :alt="'スキル：' + name" width="64" height="64"> -->
  <div class="w-16 h-16 bg-red-400 rounded-full"></div>
</template>

<script setup lang="ts">
defineProps<{
  name: string
}>();
</script>