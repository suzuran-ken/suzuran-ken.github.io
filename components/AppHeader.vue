<template>
  <nav>
    <ul class="flex gap-2 bg-green-800 font-semibold text-white px-4 text-lg overflow-auto">
      <NavItem to="/">ホーム</NavItem>
      <NavItem to="/character">キャラ</NavItem>
    </ul>
  </nav>
</template>
<script setup>
const router = useRouter();
</script>