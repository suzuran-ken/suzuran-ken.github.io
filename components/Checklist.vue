<template>
<ul>
  <ChecklistItem :stamina="40" :times="1" @change="(stamina) => totalStamina += stamina">星の試練</ChecklistItem>
</ul>
<p>{{ totalStamina }}</p>
</template>
<script setup lang="ts">
const totalStamina = ref(0);
</script>