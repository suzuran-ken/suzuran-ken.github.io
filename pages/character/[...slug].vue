<template>
  <div class="flex items-center gap-2 py-4">
    <RoleIcon :role="doc['ロール']" :class="['w-12', 'h-12']" />
    <h1 class="font-bold text-2xl md:text-3xl">{{ doc['名前'] }}</h1>
  </div>
  <CharacterFullImg :name="doc['名前']" :class="['lg:absolute','lg:right-0','lg:top-0', 'drop-shadow-lg']" />
  <section>
    <p v-for="line in doc['概要'].split('\n')">{{ line.trim() }}</p>
  </section>
  <section>
    <h2 class="text-xl md:text-2xl font-bold py-5 md:py-7">個性</h2>
    <div class="bg-white px-4 md:px-8 py-5 md:py-7">
      <div class="flex items-center gap-2 py-2">
        <PersonalityIcon :name="doc['個性']" sizes="64px" :class="['w-16']" />
        <span class="text-lg md:text-xl">{{ doc['個性'] }}</span>
      </div>
      <p class="py-1" v-for="line in doc['凸'].split('\n')">{{ line.trim() }}</p>
    </div>
  </section>
  <section v-if="'スキル' in doc">
    <h2 class="text-xl md:text-2xl font-bold py-5 md:py-7">スキル選択</h2>
    <SkillTree>
      <template v-for="rank in skillRanks">
        <SkillGroup v-if="rank in doc['スキル']" :rank="parseInt(rank.slice(2))" :left="doc['スキル'][rank]!['左']"
          :right="doc['スキル'][rank]!['右']" :recommend="doc['スキル'][rank]!['推奨']" :reason="doc['スキル'][rank]!['理由']" />
      </template>
    </SkillTree>
  </section>
  <section>
    <h2 class="text-xl md:text-2xl font-bold py-5 md:py-7">おすすめ装備</h2>
    <div class="flex flex-col gap-5 md:gap-7">
      <div class="bg-white px-4 md:px-8 py-5 md:py-7" v-for="part in parts">
        <h3 class="text-lg md:text-xl font-semibold mb-3 md:mb-4">{{ part }}</h3>
        <ul class="flex">
          <li v-for="gear in doc['装備'][part]" class="border rounded flex flex-col gap-2 items-center p-4 bg-slate-50">
            <GearIcon :name="gear" sizes="32px md:64px" :class="['w-8', 'md:w-16']" />
            <p>{{ gear }}</p>
          </li>
        </ul>
      </div>
      <div class="bg-white px-4 md:px-8 py-5 md:py-7">
        <h3 class="text-lg md:text-xl font-semibold mb-3 md:mb-4">タロットの囁き</h3>
        <ul class="flex gap-4">
          <li v-for="charm in doc['装備']['タロット']">
            <CharmIcon :name="charm" sizes="64px" />
          </li>
        </ul>
      </div>
      <div class="bg-white px-4 md:px-8 py-5 md:py-7">
        <h3 class="text-lg md:text-xl font-semibold mb-3 md:mb-4">刻印</h3>
        <ul>
          <li v-for="keyin in doc['装備']['刻印']" class="list-disc">
            {{ keyin }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const skillRanks: Array<'RK1' | 'RK3' | 'RK5' | 'RK7' | 'RK9' | 'RK11'> = ['RK11', 'RK9', 'RK7', 'RK5', 'RK3', 'RK1'];
type SkillGroupData = {
  '左': string,
  '右': string,
  '推奨': '左' | '右' | '左右',
  '理由': string
};
type CharacterData = {
  '名前': string,
  'ロール': 'ウォッチャー' | 'ディフェンダー' | 'ブレーカー' | 'アサルター' | 'デストロイヤー',
  'レア度': 'N' | 'R' | 'SR' | 'SSR',
  '実装日': 'string',
  '概要': string,
  '個性': string,
  'スキル': {
    'RK1': SkillGroupData,
    'RK3': SkillGroupData,
    'RK5': SkillGroupData,
    'RK7': SkillGroupData,
    'RK9'?: SkillGroupData,
    'RK11'?: SkillGroupData
  },
  '装備': {
    '武器': Array<string>,
    '装具': Array<string>,
    'タロット': Array<string>,
    '刻印': Array<string>
  },
  '凸': string,
  'まとめ': Array<string>
};
const route = useRoute();
const { data } = await useAsyncData(() => queryContent(route.fullPath).findOne());
const doc: CharacterData = data! as unknown as CharacterData;
const parts: ['武器', '装具'] = ['武器', '装具'];
</script>