<template>
  <div class="w-24 md:w-32">
    <NuxtImg width="128" height="128" sizes="84px md:128px" :src="`/img/character/dot/${src}`"></NuxtImg>
  </div>
</template>
<script setup lang="ts">
import img from '~/assets/json/characterDotImg.json';
const prop = defineProps<{
  name: string
}>();
const file: Record<string, string> = img;
const src = file[prop.name];
</script>