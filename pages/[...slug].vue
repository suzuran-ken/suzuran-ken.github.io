<template>
  <p>{{ $route.params.slug }}</p>
  <ContentDoc v-slot="{ doc }">
    {{  doc['key']  }}
  </ContentDoc>
</template>
