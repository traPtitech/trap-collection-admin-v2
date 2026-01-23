<script setup lang="ts">
  import { computed } from 'vue';

  interface Props {
    label?: string;
    active?: boolean;
    href?: string;
    icon?: string | undefined;
  }

  const props = withDefaults(defineProps<Props>(), {
    label: '',
    active: false,
    href: '#',
    icon: undefined
  });

  const buttonClass = computed(() => {
    const base =
      'flex gap-3 items-center font-extrabold rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-colors px-4 py-2 cursor-pointer border-2';

    const activeClass = props.active
      ? 'bg-primary-50 text-primary-500 border-primary-500 focus-visible:ring-primary-500 hover:opacity-85'
      : 'bg-white text-neutral-600 border-gray-200 focus-visible:ring-gray-200 hover:border-gray-300 hover:bg-neutral-100';

    return [base, activeClass].join(' ');
  });
</script>

<template>
  <a :class="buttonClass" :href="href">
    <Icon v-if="icon" :name="icon" class="h-5 w-5" />
    <span>{{ label }}</span>
  </a>
</template>
