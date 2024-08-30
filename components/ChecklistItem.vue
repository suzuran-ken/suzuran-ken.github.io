<template>
  <li class="py-1">
    <label class="flex gap-2">
      <input type="checkbox" @change="onChange" v-model="checked">
      <slot />
    </label>
  </li>
</template>
<script setup lang="ts">
const prop = defineProps<{
  stamina: number,
  times: number
}>();
const emit = defineEmits<{
  change: [stamina: number],
}>();
emit('change', prop.stamina * prop.times);
const checked = ref(false);
function onChange() {
  if (checked.value) {
    emit('change', 0 - prop.stamina * prop.times);
  } else {
    emit('change', prop.stamina * prop.times);
  }
}
</script>