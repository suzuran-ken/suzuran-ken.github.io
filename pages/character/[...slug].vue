<template>
  <ContentDoc v-slot="{ doc }">
    <div class="flex items-center gap-2 py-4">
      <RoleIcon :role="doc['ロール']" :class="['w-12', 'h-12']" />
      <h1 class="font-bold text-2xl md:text-3xl">{{ doc['名前'] }}</h1>
    </div>
    <CharacterFullImg :name="doc['名前']" :class="['lg:absolute','lg:right-0','lg:top-0', 'drop-shadow-lg']" />
    {{ doc['概要'] }}
    <section v-if="'スキル' in doc">
      <h2>スキル選択</h2>
      <SkillTree>
        <template v-for="rank in skillRanks">
          <SkillGroup v-if="rank in doc['スキル']" :rank="parseInt(rank.slice(2))"
            :left="doc['スキル'][rank]['左'] as string"
            :right="doc['スキル'][rank]['右'] as string"
            :recommend="doc['スキル'][rank]['推奨'] as string"
            :reason="doc['スキル'][rank]['理由'] as string" />
        </template>
      </SkillTree>
    </section>
  </ContentDoc>
</template>
<script setup lang="ts">
const skillRanks = ['RK11', 'RK9', 'RK7', 'RK5', 'RK3', 'RK1'];
</script>