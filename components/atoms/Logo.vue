<script setup lang="ts">
  interface Props {
    to?: string;
  }

  withDefaults(defineProps<Props>(), {
    to: '/'
  });
</script>

<template>
  <NuxtLink
    :to="to"
    class="flex items-end gap-[3px] py-px font-montserrat whitespace-nowrap"
  >
    <span class="text-2xl font-semibold text-neutral-900">traPCollection</span>
    <span class="text-base font-black text-primary-500">/ ADMIN</span>
  </NuxtLink>
</template>
