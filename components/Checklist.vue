<template>
<article class="max-w-fit px-4 md:px-8 py-4 md:py-5 bg-slate-100 rounded shadow">
  <h2 class="text-xl md:text-xxl font-semibold py-2">デイリーチェックリスト</h2>
  <ul class="py-2">
    <ChecklistItem v-for="item in items" :stamina="item.stamina" :times="item.times" @change="change">{{ item.name }}</ChecklistItem>
  </ul>
  <p class="p-2 bg-red-200 rounded">残り必要スタミナ：<span class="font-semibold text-lg md:text-xl">{{ totalStamina }}</span></p>
</article>
</template>
<script setup lang="ts">
defineProps<{
  items: Array<{
    name: string,
    stamina: number,
    times: number
  }>;
}>();
let totalStamina = ref(0);
function change(stamina: number) { totalStamina.value += stamina; }
</script>