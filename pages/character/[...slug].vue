<template>
  <ContentDoc v-slot="{ doc }">
    <div class="flex items-center gap-2">
      <RoleIcon :role="doc['ロール']" />
      <h1 class="font-bold text-2xl md:text-3xl">{{ doc['名前'] }}</h1>
    </div>
    <div class="md:flex gap-4">
      <div class="bg-white grow">紹介テキス紹介テキスト紹介テキスト紹介テキスト紹介テキスト紹介テキスト紹介テキスト紹介テキスト紹介テキストト</div>
      <CharacterFullImg :name="doc['名前']"/>
    </div>
    <SkillTree>
      <SkillGroup v-for="rank in skillRanks"
                  :rank="parseInt(rank.slice(2))"
                  :left="doc['スキル'][rank][0]['スキル名'] as string"
                  :left-recommended="doc['スキル'][rank][0]['推奨'] as boolean"
                  :left-description="doc['スキル'][rank][0]['説明'] as string"
                  :right="doc['スキル'][rank][1]['スキル名'] as string"
                  :right-recommended="doc['スキル'][rank][1]['推奨'] as boolean"
                  :right-description="doc['スキル'][rank][1]['説明'] as string"
      />
    </SkillTree>
  </ContentDoc>
</template>
<script setup lang="ts">
const skillRanks = ['RK11', 'RK9', 'RK7', 'RK5', 'RK3', 'RK1'];
</script>