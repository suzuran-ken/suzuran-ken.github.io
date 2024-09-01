<template>
  <NuxtImg :src="`/img/charm/${file}`" width="128" height="128" :sizes />
</template>
<script setup lang="ts">
import img from '~/assets/json/charm.json';
const prop = defineProps<{
  name: string
  sizes: string
}>();
const charm: Record<string, string> = img;
const file = charm[prop.name];
</script>