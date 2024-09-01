<template>
  <NuxtImg :src="`/img/personality/${file}`" width="128" height="128" :sizes />
</template>
<script setup lang="ts">
import img from '~/assets/json/personality.json';
const personality: Record<string, string> = img;
const prop = defineProps<{
  name: string,
  sizes: string
}>();
const file = personality[prop.name];
</script>