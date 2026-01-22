<script setup lang="ts">
  import { computed } from 'vue';

  interface Props {
    label?: string;
    active?: boolean;
    href?: string;
  }

  const props = withDefaults(defineProps<Props>(), {
    label: '',
    active: false,
    href: '#',
  });

  const buttonClass = computed(() => {
    const base =
      'flex items-center font-extrabold transition-colors px-3 py-0.5 cursor-pointer';

    const activeClass = props.active
      ? 'text-primary-500'
      : 'text-neutral-800';

    return [base, activeClass].join(' ');
  });
</script>

<template>
  <a :class="buttonClass" :href="href">
    <span>{{ label }}</span>
  </a>
</template>
