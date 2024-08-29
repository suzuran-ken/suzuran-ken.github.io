<template>
  <nav>
    <ul class="flex gap-2 bg-green-800 font-semibold text-white py-2 px-4">
      <NavItem to="/">ホーム</NavItem>
      <NavItem to="/character">キャラ</NavItem>
      <NavItem to="/gear">装備</NavItem>
      <NavItem to="/event">イベント</NavItem>
      <NavItem to="/stage">ステージ</NavItem>
    </ul>
  </nav>
</template>
<script setup>
const router = useRouter();
</script>