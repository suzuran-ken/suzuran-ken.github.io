<template>
  <div class="w-24 md:w-32">
    <NuxtImg width="128" height="128" sizes="84px md:128px" :src></NuxtImg>
  </div>
</template>
<script setup lang="ts">
const prop = defineProps<{
  name: string
}>();
const file: Record<string, string> = {
  'シモーナ': '/img/character/dot/character_hknightsicemagefset01.png',
  'グロリア': '/img/character/dot/character_hknightspaladinfset01.png'
};
const src = file[prop.name];
</script>