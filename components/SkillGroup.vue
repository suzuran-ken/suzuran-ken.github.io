<template>
  <div class="flex flex-col">
    <label class="peer group py-2">
      <input type="checkbox" hidden>
      <div class="grid grid-cols-12 justify-center items-center gap-2">
        <div class="md:col-span-5 col-span-4 flex justify-end flex-col-reverse md:flex-row gap-1 items-center" :class="{ 'opacity-40': !leftRecommended }">
          <span class="text-xs sm:text-sm">{{ left }}</span>
          <SkillIcon :name="left" />
        </div>
        <span class="md:col-span-2 col-span-4 flex justify-center gap-1 items-center font-semibold px-4 py-2 bg-gray-200 rounded">RK{{ rank }}
          <AccordionArrow :class="['fill-black', 'group-has-[:checked]:rotate-180', 'transition-all']" />
        </span>
        <div class="md:col-span-5 col-span-4 flex flex-col md:flex-row gap-1 items-center" :class="{ 'opacity-40': !rightRecommended }">
          <SkillIcon :name="right" />
          <span class="text-xs sm:text-sm">{{ right }}</span>
        </div>
      </div>
    </label>
    <div class="overflow-hidden max-h-0 peer-has-[:checked]:max-h-96 transition-all peer-has-[:checked]:border rounded px-4 py-2">
      {{ reason }}
    </div>
  </div>
</template>
<script setup lang="ts">
const prop = defineProps<{
  rank: number,
  left: string,
  right: string,
  recommend: string,
  reason: string
}>();
const leftRecommended = prop.recommend.includes('左');
const rightRecommended = prop.recommend.includes('右');
</script>