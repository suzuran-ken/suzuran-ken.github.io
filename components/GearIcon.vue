<template>
  <div :class="wrapperClass" class="p-2 rounded">
    <NuxtImg :src="`/img/gear/${file}`" width="128" height="128" :sizes />
  </div>
</template>
<script setup lang="ts">
import gearData from '~/assets/json/gear.json';
const prop = defineProps<{
  name: string,
  sizes: string
}>();
type GearData = Record<string, {
  file: string,
  rarity: 'n' | 'r' | 'sr' | 'ssr'
}>;
const gear: GearData = gearData as GearData;
const file = gear[prop.name]['file'];
const rarity = gear[prop.name]['rarity'];
const wrapperClass = {
  'bg-purple-200': rarity === 'ssr',
  'bg-yellow-200': rarity === 'sr',
  'bg-blue-200': rarity === 'r',
  'bg-stone-200': rarity === 'n'
}
</script>