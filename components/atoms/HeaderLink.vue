<script setup lang="ts">
  import { computed } from 'vue';

  interface Props {
    label: string;
    to: string;
    active?: boolean;
  }

  const props = withDefaults(defineProps<Props>(), {
    active: false
  });

  const buttonClass = computed(() => {
    const base =
      'flex items-center font-extrabold transition-colors px-3 py-0.5 cursor-pointer';

    const activeClass = props.active
      ? 'text-primary-500 hover:opacity-85'
      : 'text-neutral-800 hover:opacity-85';

    return [base, activeClass].join(' ');
  });
</script>

<template>
  <NuxtLink :class="buttonClass" :to="to">
    <span>{{ label }}</span>
  </NuxtLink>
</template>
