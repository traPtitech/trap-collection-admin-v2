<script setup lang="ts">
  import { useRoute } from 'vue-router';

  export interface HeaderNavItem {
    label: string;
    to: string;
  }

  interface Props {
    items: HeaderNavItem[];
  }

  defineProps<Props>();

  const route = useRoute();

  const isActive = (to: string) =>
    to === '/' ? route.path === '/' : route.path.startsWith(to);
</script>

<template>
  <nav class="flex items-center gap-1.5">
    <AtomsHeaderLink
      v-for="item in items"
      :key="item.to"
      :label="item.label"
      :to="item.to"
      :active="isActive(item.to)"
    />
  </nav>
</template>
