<template>
  <div class="w-16 h-16 flex justify-center items-center rounded-full border bg-white"><img :src="file[role]" :alt="role"></div>
</template>
<script setup lang="ts">
import watcher from '~/assets/img/role/watcher.png';
import defender from '~/assets/img/role/defender.png';
import assaulter from '~/assets/img/role/assaulter.png';
import breaker from '~/assets/img/role/breaker.png';
import destroyer from '~/assets/img/role/destroyer.png';
const prop = defineProps<{
  role: string
}>();
const file: Record<string, string> = {
  'ウォッチャー': watcher,
  'アサルター': assaulter,
  'ディフェンダー': defender,
  'ブレイカー': breaker,
  'デストロイヤー': destroyer
}
</script>