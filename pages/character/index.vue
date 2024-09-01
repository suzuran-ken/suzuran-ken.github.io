<template>
  <div class="flex flex-col gap-5 md:gap-7 py-5 md:py-7">
    <h1 class="text-2xl md:text-3xl font-bold drop-shadow ">キャラクター攻略情報</h1>
    <div class="bg-white p-4 md:p-8 border-y" v-for="role in roles">
      <div class="flex items-center gap-2 mb-3 md:mb-5">
        <RoleIcon :role="role" :class="['w-12', 'h-12']" />
        <h2 class="font-semibold text-lg md:text-xl">{{ role }}</h2>
      </div>
      <ContentList :query="queries[role]">
        <template #default="{ list }">
          <ul class="flex flex-wrap gap-2 md:gap-4">
            <li v-for="character in list" :key="character._path">
              <NuxtLink :href="character._path" class="flex flex-col gap-2 items-center border bg-slate-50 w-fit hover:bg-slate-200 py-4">
                <CharacterDotImg :name="character['名前']" />
                <p>{{ character['名前'] }}</p>
              </NuxtLink>
            </li>
          </ul>
        </template>
        <template #not-found>
          <p>該当キャラクターが存在しません。</p>
        </template>
      </ContentList>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content';
const queries: Record<string, QueryBuilderParams> = {
  'ウォッチャー': { path: '/character', where: [{ 'ロール': 'ウォッチャー' }], sort: [{ '実装日': -1 }] },
  'アサルター': { path: '/character', where: [{ 'ロール': 'アサルター' }], sort: [{ '実装日': -1 }] },
  'ディフェンダー': { path: '/character', where: [{ 'ロール': 'ディフェンダー' }], sort: [{ '実装日': -1 }] },
  'ブレイカー': { path: '/character', where: [{ 'ロール': 'ブレイカー' }], sort: [{ '実装日': -1 }] },
  'デストロイヤー': { path: '/character', where: [{ 'ロール': 'デストロイヤー' }], sort: [{ '実装日': -1 }] }
};
const roles = ['ウォッチャー', 'アサルター', 'ディフェンダー', 'ブレイカー', 'デストロイヤー'];
</script>