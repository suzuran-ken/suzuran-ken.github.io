<template>
  <ContentList v-slot="{ list }">
    <ul v-for="character in list" :key="character._path">
      <li><a :href="character._path">{{ character['名前'] }}</a></li>
    </ul>
  </ContentList>
</template>