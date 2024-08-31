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
  </ContentDoc>
</template>