<template>
  <div class="min-w-60 w-60 md:min-w-96 md:w-96">
    <NuxtImg :src="`/img/character/full/${src}`" sizes="240px md:384px" />
  </div>
</template>
<script setup lang="ts">
const prop = defineProps<{
  name: string
}>();
const file: Record<string, string> = {
  'シモーナ': 'card_hknightsicemagefset01.png',
  'グロリア': 'card_hknightspaladinfset01.png',
  'サフィア': 'card_hpoliceleaderfset01.png'
};
const src = file[prop.name];
</script>