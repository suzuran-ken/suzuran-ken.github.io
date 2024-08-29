<template>
  <div class="flex flex-col">
    <label class="peer group py-2">
      <input type="checkbox" hidden>
      <div class="flex justify-center items-center gap-2">
        <span>{{  left }}</span>
        <SkillIcon :name="left" />
        <span class="flex gap-1 items-center font-semibold px-4 py-2 bg-gray-200 rounded">RK{{ rank }}
          <AccordionArrow :class="['fill-black', 'group-has-[:checked]:rotate-180', 'transition-all']" />
        </span>
        <SkillIcon :name="right" />
        <span>{{ right }}</span>
      </div>
    </label>
    <div class="grid grid-cols-2 gap-4 overflow-hidden max-h-0 peer-has-[:checked]:max-h-96 transition-all">
      <div :class="descriptionClass">{{ leftDescription }}</div>
      <div :class="descriptionClass">{{ rightDescription }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  rank: number,
  left: string,
  leftDescription?: string,
  leftRecommended: boolean,
  right: string,
  rightDescription?: string,
  rightRecommended: boolean
}>();
const descriptionClass = ['border', 'rounded', 'p-2']
</script>