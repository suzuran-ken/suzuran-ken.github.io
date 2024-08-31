<template>
  <div class="min-w-60 w-60 md:min-w-96 md:w-96">
    <NuxtImg :src sizes="240px md:384px" />
  </div>
</template>
<script setup lang="ts">
const prop = defineProps<{
  name: string
}>();
const file: Record<string, string> = {
  'シモーナ': '/img/character/full/card_hknightsicemagefset01.png',
  'グロリア': '/img/character/full/card_hknightspaladinfset01.png'
};
const src = file[prop.name];
</script>