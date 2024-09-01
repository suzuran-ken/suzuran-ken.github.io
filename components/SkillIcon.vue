<template>
  <img :src="`/img/skill/${file[name]}`" :alt="'スキル：' + name" width="64" height="64" class="rounded-full">
</template>

<script setup lang="ts">
import img from '~/assets/json/skill.json';
defineProps<{
  name: string
}>();
const file: Record<string, string> = img;
</script>