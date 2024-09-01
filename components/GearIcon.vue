<template>
  <div>
    <NuxtImg :src="`/img/gear/${src}`" width="256" height="512" :sizes />
  </div>
</template>
<script setup lang="ts">
const prop = defineProps<{
  name: string,
  sizes: string
}>();
const file: Record<string, string> = {

};
const src = file[prop.name];
</script>