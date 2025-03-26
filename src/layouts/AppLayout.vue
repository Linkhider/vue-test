<script setup>
import EmptyLayout from "@/layouts/EmptyLayout.vue";
import { useRoute } from "vue-router";
const route = useRoute();
const defaultLayout = EmptyLayout;

</script>

<template>
  <component :is="route.meta.layout || defaultLayout">
    <slot />
  </component>
</template>

<style scoped></style>