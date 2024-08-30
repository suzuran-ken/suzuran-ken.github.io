<script setup lang="ts">
import SkillGroup from '~/components/SkillGroup.vue';
import SkillTree from '~/components/SkillTree.vue';
</script>

<template>
  <div>
    <SkillTree>
      <SkillGroup :rank="3" left="スキル１" left-description="あああああああ" :left-recommended="true" right="スキル２" right-description="いいいいいいいい" :right-recommended="false" />
      <SkillGroup :rank="5" left="スキル１" left-description="あああああああ" :left-recommended="true" right="スキル２" right-description="いいいいいいいい" :right-recommended="false" />
    </SkillTree>
  </div>
  <div>
    <Checklist />
  </div>
</template>