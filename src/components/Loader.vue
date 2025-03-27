<template>
  <div class="loader"></div>
</template>
<style scoped>
.loader {
  height: 50px;
  aspect-ratio: 1;
  box-sizing: border-box;
  position: absolute;
  top: calc(50% - 25px);
  left: calc(50% - 25px);
  mask:
      radial-gradient(rgba(0, 128, 128, 0) 47%,teal 48% 71%, rgba(0, 128, 128, 0) 72%) exclude,
      conic-gradient(teal 0 0) no-clip;
  animation: l11 1.5s linear infinite;
}
.loader:before {
  content: "";
  position: absolute;
  inset: 0 35% 70%;
  border-radius: 50%;
  background: teal;
  filter: blur(15px);
}
@keyframes l11 {
  to {rotate: 1turn}
}
</style>
<script setup lang="ts">
</script>