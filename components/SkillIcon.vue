<template>
  <img :src="file[name]" :alt="'スキル：' + name" width="64" height="64" class="rounded-full">
</template>

<script setup lang="ts">
import iconZhuiji from '~/assets/img/skill/zhuiji.png';
defineProps<{
  name: string
}>();
const file: Record<string, string> = {
  'スキル１': iconZhuiji,
  'スキル２': iconZhuiji,
};
</script>