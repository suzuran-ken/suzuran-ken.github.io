<template>
  <ContentList v-slot="{ list }">
    <ul v-for="character in list" :key="character._path">
      <li>
        <NuxtLink :href="character._path" class="flex flex-col gap-2 items-center border bg-gray-100 w-fit hover:bg-gray-200">
          <CharacterFace :name="character['名前']" />
          <p>{{ character['名前'] }}</p>
        </NuxtLink>
      </li>
    </ul>
  </ContentList>
</template>